// Case	Recommended Way
// You know the actual values	✅ Use [] (array literal)
// You need to create an array of a specific length	🟡 Use new Array(length)
// You’re filling the array immediately	✅ Use Array(length).fill(value)
// You’re generating from something (like map)	✅ Use Array.from()

// const { StrictMode } = require("react");


// const xn = new Array(4).fill(3);


// here is the new is the blueprint   =>( New) => Keyword — means “make a new object using this blueprint”

// here is the Array is the  BluePrint to create the array

// const friends = ["Michael", "Steven", "Peter"];

// console.log(friends);

// const xn = new Array(1991, 1984, 2008, 2020);
// console.log(xn);
// console.log(friends[0]); // Michael
// console.log(friends.length); // 3

// console.log(friends[friends.length - 2]); // 2

// friends[2] = "Jay";
console.log(friends); // ['Michael', 'Steven', 'Jay']   

    // This will cause an error
friends = ["Bob", "Ellis"];

console.log(friends);

function calcAge(year) {
  return 2037 - year;
}

const years = [1990, 1967, 2002, 2010, 2018];

let result = calcAge(years[1]); // we can't do directly call the years as all arr intities at one time?

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];

console.log(ages);  

// const years = [1990, 1967, 2002, 2010, 2018];


// years[10] = 33;

// console.log(years.length);

// "use strict";

//  x  = 10;

// console.log(x);