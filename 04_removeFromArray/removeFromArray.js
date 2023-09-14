const removeFromArray = function() {
    // array to reduce from will be first function parameter
    const arrayToReduce = arguments[0];
    const SINGLE_ELEMENT = 1;
    let indexToRemove;

    // loop to remove all remaining parameters from array
    for(let i = 1; i < arguments.length; i++) {
        indexToRemove = arrayToReduce.indexOf(arguments[i]);
        arrayToReduce.splice(indexToRemove, SINGLE_ELEMENT);
    }

    return arrayToReduce;
}

// Do not edit below this line
module.exports = removeFromArray;
