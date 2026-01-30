// This is the example of the basic Array
let originalScores = [10, 20, 30];

// This makes two labels pointing to the SAME list 
let secondScoresList = originalScores; 

secondScoresList.push(40); // Add 40 to the second list

console.log(originalScores); // Output: [10, 20, 30, 40] 😱 Oh no, the original changed too!
// This is Happen because the we know that array is the non-primitives so they take values by the refrencing of original array
// that why when we are  trying to add something in the [secondScoresList] it also reflecting on the original array

// NOTE : ----> This is not the right way to copy the array or any non-primitives

// now we will see the actuall or a real copy of a array  using the [Spread Operator];



let neworiginalScores = [10, 20, 30];

// ✨ Use the spread operator to create a brand NEW, separate list
let newrealCopy = [...neworiginalScores]; 

newrealCopy.push(40); // Add 40 to the new copy

console.log(neworiginalScores); // Output: [10, 20, 30] ✅ The original is safe!


console.log(newrealCopy);      // Output: [10, 20, 30, 40]