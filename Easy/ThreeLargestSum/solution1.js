function findThreeLargestNum(arr) {
    const threeLargestNum = [ null, null, null];
    for(let num of arr) {
        updatedLargest(threeLargestNum, num);
    }
    return threeLargestNum;
}

function updatedLargest(arr, num) {
    if(arr[2] === null || num > arr[2]) {
        shiftAndUpdate(arr, num, 2);
    } else if(arr[1] === null || num > arr[1]) {
        shiftAndUpdate(arr, num, 1);
    } else if (arr[0] === null || num > arr[0]) {
        shiftAndUpdate(arr, num, 0);
    }
}

function shiftAndUpdate(arr, num, idx) {
    for(i = 0; i <= idx; i++) {
        if(i === idx) {
            arr[i] = num;
        } else {
            arr[i] = arr[i + 1];
        }
    }
}

console.log(findThreeLargestNum([1,3,4,5,7,3,9,11,756, 56]));