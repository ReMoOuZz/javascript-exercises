
const findTheOldest = function(people) {

    const currentYear = 2025
    
    const oldest = people.reduce((oldestPerson, currentPerson) => {
        
        const oldestAge = (oldestPerson.yearOfDeath || currentYear) - oldestPerson.yearOfBirth
        const currentAge = (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth
    
        return currentAge > oldestAge ? currentPerson : oldestPerson
       
        
    })
    ;
    return oldest
};
 

// Do not edit below this line

module.exports = findTheOldest;
