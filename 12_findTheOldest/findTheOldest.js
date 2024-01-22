const findTheOldest = function(people) {
    let age = 0;
    let p = {};
    
    for(let person of people)
    {
        if(!person.yearOfDeath)
            person.yearOfDeath = new Date().getFullYear();

        let personAge = person.yearOfDeath -  person.yearOfBirth;
        if(personAge > age)
        {
            age = personAge;
            p = person;
        }
    }

    return p;
};

// Do not edit below this line
module.exports = findTheOldest;
