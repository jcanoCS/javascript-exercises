function getAge(personObj) {
    // if still living, use current year to determine age
    if (!personObj.yearOfDeath) {
        return (new Date().getFullYear()) - personObj.yearOfBirth;
    }
    // otherwise, calculate age based on year of death
    return personObj.yearOfDeath - personObj.yearOfBirth;
}

const findTheOldest = function(peopleArray) {

    const oldestPerson = peopleArray.reduce((acc, val) => {
        return getAge(val) < getAge(acc) ? acc : val;
    });

    return oldestPerson;
};

// const findTheOldest = function(peopleArray) {
//     let oldestPerson;
//     let currentPersonAge;
//     
//     for(const person in peopleArray) {
//         if (!oldestPerson) {
//             oldestPerson = peopleArray[person];
//             continue
//         }
//         currentPersonAge = getAge(peopleArray[person]);
//         if (currentPersonAge > getAge(oldestPerson)) oldestPerson = peopleArray[person];
//     }
//     return oldestPerson;
// };

// Do not edit below this line
module.exports = findTheOldest;
