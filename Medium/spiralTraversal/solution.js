function spiralTraversal(arr) {
    result = [];
    let startRow = 0;
    let endRow = arr.length - 1;
    let startCol = 0;
    let endCol = arr[0].length - 1;

    while(startRow <= endRow && startCol <= endCol) {
        for(let col = startCol; col <= endCol; col++) {
            result.push(arr[startRow][col]);
        }

        for(let row = startRow + 1; row <= endRow; row++) {
            result.push(arr[row][endCol]);
        }

        for(let col = endCol -1; col > startRow; col--) {
            if(startRow === endRow) break;
            result.push(arr[endRow][col]);
        }

        for(let row = endrow -1; row > startCol; row--) {
            if(startCol === endCol) break;
            result.push(arr[row][startCol]);
        }
        startRow += 1;
        endRow -= 1;
        startCol += 1;
        endCol -= 1;
    }
    return result;
}