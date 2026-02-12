// frequency count 

const arr = [43,5,345,543,5,34,345,345,345,3]

const frequency = {};

arr.forEach(item=>{

    frequency[item] = (frequency[item] || 0) + 1;
})

console.log(frequency);









// const arr = ["a", "b", "a", "c", "b", "a"];
// const x = {};

// arr.forEach(item => {
//   // If the item exists, add 1; otherwise, set it to 1
// //   x[item] = (x[item] || 0) + 1;

// //   console.log(item);
//   console.log(x[item]= (x[item] ||0 ) + 1);

// });

// // console.log(frequency); // Output: { a: 3, b: 2, c: 1 }