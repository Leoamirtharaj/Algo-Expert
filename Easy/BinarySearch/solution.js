function binarySearch(arr, num) {
    return binarySearchHelper(arr, num, 0, arr.length -1);
}

function binarySearchHelper(arr, target, left, right) {
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if(arr[middle] === target) {
            return middle;
        } else if(arr[middle] > target) {
            right = middle - 1;
        }  else if (arr[middle] < target) {
            left = middle + 1;
        }

    }
    return -1;
}

console.log(binarySearch([1,3,5,6,7,8,9,11,34,56,76], 4));