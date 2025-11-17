// setTimeout((console.log()))

// setTimeout(() =>
//     console.log('please order the pizza?'), 2000);

// console.log('please wait for it.....');

// // ashyncronus movement 

const arr = [30,654,65,40]

const x = setTimeout((a,b) =>
console.log(`please ${a} order the ${b}} pizza?`), 2000, ...arr);

console.log('please wait for it.....');

if(arr.includes(30)){
    clearTimeout(x);
}
    

