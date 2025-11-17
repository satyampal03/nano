//  Empty Array + Fill Method

let x = new Array (7);

console.log(x[3]);


// Empty Array Creating Sellow Copy of Array + From () Method

const sellowCopy = Array.from({length : 7}, (cur, index)=>
    index+1 

);

console.log(sellowCopy);