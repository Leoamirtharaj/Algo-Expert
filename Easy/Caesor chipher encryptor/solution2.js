const caesarCipherEncryptor = (str, key) => {
    if (str === '' || !str) return;
    const letterArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const newLetters = [];
    const newKey = key % 26;
    for(letter of str) {
        newLetters.push(getNewLetter(letter, newKey, letterArr));
    }
    return newLetters.join('');
};

const getNewLetter = (letter, newKey, letterArr) => {
    const index = letterArr.indexOf(letter) + newKey;
    return (index <= 25) ? letterArr[index] : letterArr[-1 + index % 25 ];
};


console.log(caesarCipherEncryptor('xyz', 2));
console.log(caesarCipherEncryptor('abc', 2));
console.log(caesarCipherEncryptor('xyz', 28));
console.log(caesarCipherEncryptor('abc', 28));