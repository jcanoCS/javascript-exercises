const leapYears = function(year) {
    // Is only a leap year if one of two conditions is true
    // 1) Year divisible by 4 but not 25
    // or
    // 2) Year divisible by 400
    return ((year % 4 === 0) && (year %  25 !== 0)) || (year % 400 == 0);
};

// Do not edit below this line
module.exports = leapYears;
