function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let j = i;
        while(j > 0 && arr[j] < arr[j - 1]) {
            swap(j, j - 1, arr);
            j -= 1;
        }
    }
    return arr;

}

function swap(i, j, arr) {
    const temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}

console.log(insertionSort([5,2,3,1]));