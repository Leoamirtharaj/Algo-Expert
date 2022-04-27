function moveElementsToEnd(arr, moveTo) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        while(arr[j] === moveTo && i < j) {
            j -= 1;
        }
        if(arr[i] === moveTo) {
            swap(arr, i, j);
        }
        i += 1;
    }
    return arr;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}