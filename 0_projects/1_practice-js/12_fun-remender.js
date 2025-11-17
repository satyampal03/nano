// find the remender  using the arrow- function 

const functionName = (divisor, divident)=> {
    let remender= divident % divisor;
    return  remender; 
}

// console.log(4, 29);  => Wrong 

console.log(functionName(41, 29));

