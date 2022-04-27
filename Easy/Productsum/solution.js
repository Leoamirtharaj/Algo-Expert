function productsum(arr, multiplier = 1) {
    let sum = 0;
    for(let ele of arr) {
        if(Array.isArray(ele)) {
            productsum(ele, multiplier + 1);
        } else {
            sum += ele;
        }

    }
    return sum * multiplier;
}