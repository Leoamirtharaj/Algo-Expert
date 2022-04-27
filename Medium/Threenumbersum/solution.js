function threeNumberSum(arr, target) {
    arr.sort();
    var triplets = [];
    for(let i = 0; i < arr.length - 2; i++) {
        var left = i + 1;
        var right = arr.length - 1;
        while(left < right) {
            const currentVal = arr[i] + arr[left] + arr[right];
            if (currentVal === target) {
                triplets.push([arr[i] , arr[left] , arr[right]]);
                left += 1;
                right -= 1;
            } else if (currentVal < target) {
                left += 1;
            } else if (currentVal > target) {
                right -= 1;
            }
        }
    }
    return triplets;

}