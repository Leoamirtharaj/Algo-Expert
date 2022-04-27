const caesarCipherEncryptor = (str, key) => {
    if (str === '' || !str) return;
    const newLetters = [];
    const newKey = key % 26;
    for(letter of str) {
        newLetters.push(getNewLetter(letter, newKey));
    }
    return newLetters.join('');
};

const getNewLetter = (letter, newKey) => {
    const newLetter = letter.charCodeAt() + newKey;
    return (newLetter <= 122) ? String.fromCharCode(newLetter) : String.fromCharCode(96 + newLetter % 122);
};

console.log(caesarCipherEncryptor('xyz', 2));
console.log(caesarCipherEncryptor('abc', 2));
console.log(caesarCipherEncryptor('xyz', 28));
console.log(caesarCipherEncryptor('abc', 28));