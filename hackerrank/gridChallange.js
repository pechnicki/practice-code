function gridChallenge(grid) {
    // Write your code here
    let rows = grid.length
    let columns = grid[0].length
    let matrix = Array()
    grid.forEach(element => {
        matrix.push(element.split('').sort())
    });
    
    for (let i=0; i<columns; i++){
        let column = []
        for (let j=0; j<rows; j++){
            column.push(matrix[j][i])
        }
        if (column.join("") != column.sort().join("")){
            return "NO"
        }
    }
    return "YES"
}

//console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']))
console.log(gridChallenge(['mpxz', 'abcd', 'wlmf']))


