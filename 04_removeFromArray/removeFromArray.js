const removeFromArray = function(arrayToRemoveFrom, elementToRemove) {
    let indexToRemove = arrayToRemoveFrom.indexOf(elementToRemove);
    arrayToRemoveFrom.splice(indexToRemove, 1);
    return arrayToRemoveFrom;
}

// Do not edit below this line
module.exports = removeFromArray;
