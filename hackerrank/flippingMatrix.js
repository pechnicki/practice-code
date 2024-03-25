function flippingMatrix(matrix) {
    // Write your code here
    var n = matrix.length
    var sum = 0
    for (var i = 0; i < parseInt(n/2); i++){
        for (var j = 0; j<n/2; j++){
            sum+=Math.max(matrix[i][j],matrix[i][n-j-1],matrix[n-i-1][j],matrix[n-i-1][n-1-j])
        }
    }
    console.log(sum)
}

/*
[112,42 ,83 ,119]
[56 ,125,56 ,49]
[15 ,78 ,101,43]
[62 ,98 ,114,108]

1 2 2 1
3 4 4 3
3 4 4 3
1 2 2 1

1 2 3 3 2 1
4 5 6 6 5 4
7 8 9 9 8 7
7 8 9 9 8 7
4 5 6 6 5 4
1 2 3 3 2 1

reverse col 2
reverse row 0
sum 
*/


var matrix = [[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]]
flippingMatrix(matrix)
// 414