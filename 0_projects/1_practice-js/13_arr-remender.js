// get the remender by the arr values;

const arr = [332,43,534,5,43,32,43,24,3,43,4,3,43,234];

    let division = 4;
    let quotientArr = [];
for(let i=0; i < arr.length; i++){
    let quotient = arr[i] / division;
    console.log(quotient);
    quotientArr.push(quotient);
}
console.log(quotientArr.length);
console.log(quotientArr);