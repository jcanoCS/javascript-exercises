const repeatString = function(word, numRepeat) {
    if (numRepeat < 0){
        return "ERROR";
    }
    
    repeatedWord = "";

    for (let i = numRepeat; i > 0; i--) {
        repeatedWord += word;
    }

    return repeatedWord;

};

// Do not edit below this line
module.exports = repeatString;
