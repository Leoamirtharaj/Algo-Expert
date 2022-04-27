function selectionSort(arr) {
    let startIdx = 0;
    while(startIdx < arr.length -1) {
        let smallestIdx = startIdx;
        for(let i = startIdx + 1; i < arr.length; i++) {
            if(arr[smallestIdx] > arr[i]) {
                smallestIdx = i;
            }
        }
        swap(smallestIdx, startIdx, arr);
        startIdx += 1;
    }
    return arr;
}

function swap(i, j, arr) {
    const temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}

console.log(selectionSort([5,2,3,1]));