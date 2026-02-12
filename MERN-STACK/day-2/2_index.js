// Spread Operator

const a = [1,2];
const b = [...a, 3];

const u = {name:"A"};
const v = {...u, age:20,};

const z = {...u, age:20, ...b}; //{ '0': 1, '1': 2, '2': 3, name: 'A', age: 20 }

console.log(z)