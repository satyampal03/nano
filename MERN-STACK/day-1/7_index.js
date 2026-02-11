const arr = [34,4,53,5,2,53,4,34,33, 434];

const x = arr.map((x,index,arr)=> x * 2);

console.log(x);


const y = arr.filter((x, index,arr )=> x > 10);

console.log(y);


let z = arr.reduce((sum, x) => {
    sum + x

console.log(sum, x );

}, 0);


console.log(z);