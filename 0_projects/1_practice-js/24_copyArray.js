const arr = [32,545,4546,6,566,7,67,7,78];


// splice method ---> to copy an array without modifying the values
let newArr = arr.slice();

console.log(newArr);



// spread method  --> to copy an array 

let x = [...arr];

console.log(x);