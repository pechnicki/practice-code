provider "aws" {
  region = "us-east-1"
}

resource "aws_vpc" "vpc" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "public_subnet" {
  vpc_id            = aws_vpc.vpc.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "us-east-1a"
}

resource "aws_subnet" "private_subnet" {
  vpc_id            = aws_vpc.vpc.id
  cidr_block        = "10.0.2.0/24"
  availability_zone = "us-east-1a"
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.vpc.id
}

resource "aws_route_table" "public_route_table" {
  vpc_id = aws_vpc.vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }
}

resource "aws_route_table_association" "public_subnet_association" {
  subnet_id      = aws_subnet.public_subnet.id
  route_table_id = aws_route_table.public_route_table.id
}

resource "aws_nat_gateway" "nat_gateway" {
  allocation_id = aws_eip.eip.id
  subnet_id     = aws_subnet.private_subnet.id
}

resource "aws_eip" "eip" {
  vpc = true
}

resource "aws_route_table" "private_route_table" {
  vpc_id = aws_vpc.vpc.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.nat_gateway.id
  }
}

resource "aws_route_table_association" "private_subnet_association" {
  subnet_id      = aws_subnet.private_subnet.id
  route_table_id = aws_route_table.private_route_table.id
}

resource "aws_db_subnet_group" "db_subnet_group" {
  name       = "my-db-subnet-group"
  subnet_ids = [aws_subnet.private_subnet.id]
}

resource "aws_db_instance" "db_instance" {
  allocated_storage    = 20
  storage_type         = "gp2"
  engine               = "postgres"
  engine_version       = "16.2"
  instance_class       = "db.t2.micro"
  name                 = "mydb"
  username             = "admin"
  password             = "mypassword"
  db_subnet_group_name = aws_db_subnet_group.db_subnet_group.name
}

module "eks_cluster" {
  source = "terraform-aws-modules/eks/aws"

  cluster_name     = "my-cluster"
  cluster_version  = "1.29"
  subnet_ids       = [aws_subnet.public_subnet.id]
  vpc_id           = aws_vpc.vpc.id
  manage_aws_auth  = true
  write_kubeconfig = true
}

module "eks_node_group" {
  source = "terraform-aws-modules/eks/aws//modules/node_group"

  cluster_name    = module.eks_cluster.cluster_id
  node_group_name = "private-ng"
  subnet_ids      = [aws_subnet.private_subnet.id]
  instance_types  = ["t3.medium"]
  scaling_config {
    desired_size = 2
    min_size     = 2
    max_size     = 2
  }
}