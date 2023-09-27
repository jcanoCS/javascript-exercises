function checkValidCharacter(letter) {
    const value = letter.charCodeAt(0);

    // valid if uppercase
    if (value >= 'A'.charCodeAt(0) && value <= 'Z'.charCodeAt(0)) {
        return true;
    }
    // valid if lowercase
    else if (value >= 'a'.charCodeAt(0) && value <= 'z'.charCodeAt(0)) {
        return true;
    }
    // valid if number 0-9
    else if (value >= '0'.charCodeAt(0) && value <= '9'.charCodeAt(0)) {
        return true;
    }
    // otherewise invalid
    return false;
}



const palindromes = function (word) {
    let lowerWord = word.toLowerCase();
    const reducedArray = lowerWord.split('').filter(checkValidCharacter);
    let reducedWord = reducedArray.join('');
    let reversedWord = reducedArray.reverse().join('');

    // if reversed word is equal, valid palindrome
    if (reducedWord === reversedWord) {
        return true;
    }
    // otherwise return false
    return false;
};

// Do not edit below this line
module.exports = palindromes;
