function bubbleSort(arr) {
    let isSorted = false;
    let counter = 0;
    while(!isSorted) {
        isSorted = true;
        for(let i = 0; i < arr.length - 1 - counter; i++) {
            if(arr[i] > arr[i + 1]) {
                swap(i, i + 1, arr);
                isSorted = false;
            }
        }
        counter += 1;
    }
    return arr;
}

function swap(i, j, arr) {
    const temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}

console.log(bubbleSort([5,2,3,1]));