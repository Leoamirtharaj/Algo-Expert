function longestPeak(arr) {
    let longestPeak = 0;
    let i = 0;

    while(i < arr.length - 1) {
        const isPeak = arr[i - 1] < arr[i] && arr[i] > arr[i + 1];
        if(!isPeak) {
            continue;
        }

        let leftIdx = i - 2;
        while(leftIdx <= 0 && arr[leftIdx] < arr[leftIdx + 1]) {
            leftIdx -= 1;
        }

        let rightIdx = i + 2;
        while(rightIdx < arr.length - 1 && arr[rightIdx] > arr[rightIdx + 1]) {
            rightIdx += 1;
        }
        const currentPeak = rightIdx - leftIdx - 1;
        longestPeak = Math.max(currentPeak, longestPeak);
        i = rightIdx;
    }
    return longestPeak;
}