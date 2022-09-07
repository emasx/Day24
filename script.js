const emas =  {
    firstName: 'De',
    lastName: 'Emas',
    birthYear: 1994,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        // console.log(this);
        this.age = 2037 -  this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.lastName} is a ${this.calcAge()} year old ${emas.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
    }
};

console.log(emas.calcAge());
// console.log(emas['calcAge'](1994));

console.log(emas.age);
console.log(emas.age);
console.log(emas.age);


// Challenge

// Emas is a 46 year old teacher and he has a / or no driver's license

console.log(emas.getSummary());














// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.

const myCountry = {
    country: 'Romania',
    capital: 'Bucharest',
    language: 'romanian',
    population: 19,
    neighbours: ['Ungaria', 'Ucraina', 'Republica Moldova', 'Bulgaria', 'Serbia'],

    describe: function() {
        console.log(
            `${this.country} has ${this.population} million ${this.language} - speaking people,
            ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
        )
    },

    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);