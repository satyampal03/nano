 let x = 5;
let y = 6;
let sum = x + y;

console.log(sum);



// let it is the block scope variable, it can not be reinitilise but it can be update

/*
The let keyword was introduced in ES6 (2015)

Variables declared with let have Block Scope

Variables declared with let must be Declared before use

Variables declared with let cannot be Redeclared in the same scope

*/

// Var this is the global scope variable 
// this can be redeclare and re-assign

/* 
Variables declared with the var always have Global Scope.

Variables declared with the var keyword can NOT have block scope:

Example
Variables declared with varinside a { } block can be accessed from outside the block:

{
  var x = 2;
}
// x CAN be used here

*/


// const -> this is block scope and this can not be the re-declare and re-assign in same scope or lexically in scope

/*
Cannot be Reassigned
A variable defined with the const keyword cannot be reassigned:

Example
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
*/