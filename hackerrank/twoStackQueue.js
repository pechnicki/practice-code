function processData(input) {
    //Enter your code here
    let commands = input.split("\n").splice(1)
    let queue = []
    commands.forEach((element) => {
        let e = element.split(" ")
        switch(e[0]){
            case("1"):
                queue.push(e[1])
                break;
            case("2"):
                queue = queue.splice(1)
                break;
            case("3"):
                console.log(queue[0])
                break;
            default:
                break;
        }
    })
} 

processData("10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2")