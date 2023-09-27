const fibonacci = function(val) {
    let n = parseInt(val);
    // if negative
    if (n < 0) {
        return 'OOPS';
    }
    // special case
    else if (n == 0 || n == 1) {
        return n;
    }

    // decrement by 2 since 0 and 1 were processed
    n -= 2;
    let first = 0;
    let second = 1;
    let new_sum;

    // loop until calculate the desired sequence
    while(n >= 0) {
        new_sum = first + second;
        first = second;
        second = new_sum;
        n -= 1;
    }

    return new_sum; 
};

// Do not edit below this line
module.exports = fibonacci;
