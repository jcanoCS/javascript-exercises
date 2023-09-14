const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !(typeof num1 === 'number') || +
    !(typeof num2 === 'number')) {
        return "ERROR";
    }
    let small = Math.min(num1, num2);
    let large = Math.max(num1, num2);
    let currentNumber = small;
    let currentSum = 0;

    while(currentNumber <= large) {
        currentSum += currentNumber;
        currentNumber++;
    }

    return currentSum;
};

// Do not edit below this line
module.exports = sumAll;
