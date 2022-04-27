function smallestDiffrenece(arrayone, arraytwo) {
    arrayone.sort();
    arraytwo.sort();
    let smallestVal = Infinity;
    let smallestDiffrence = [];
    let idxone = 0;
    let idxsecond = 0;

    while(idxone < arrayone.length && idxsecond < arraytwo.length) {
        const firstNum = arrayone[idxone];
        const secondNum = arrayone[idxsecond];
        const difference = Math.abs(firstNum - secondNum);

        if(difference === 0) {
            return [firstNum, secondNum];
        } else if (firstNum < secondNum) {
            idxone += 1;
        } else if (firstNum > secondNum) {
            idxsecond +=2;
        }
        if(smallestVal > difference) {
            smallestVal = difference;
            smallestDiffrence[firstNum, secondNum];
        }
    }

    return smallestDiffrence;
}