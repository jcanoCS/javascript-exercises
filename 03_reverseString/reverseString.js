const reverseString = function(word) {
    const reversedArray = word.split('');
    reversedArray.reverse();
    // will give an empty seperator since default is commas
    return reversedArray.join('');
    



};

// Do not edit below this line
module.exports = reverseString;
