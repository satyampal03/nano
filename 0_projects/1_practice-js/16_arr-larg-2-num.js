// find the largest two numbers from an arrY

const arr = [345,4563,45,65,65,-45,54,45,4,56,65,6,45,5,46657,65,66565654,454,54,63,45,34,56,546,5,45,43,34];
    let largestNum = 0;
    let second = 0;
for(let i = 0; i < arr.length; i++){
    if(largestNum < arr[i]){

        second = largestNum;  // second value bhi update hoti rhe

        largestNum = arr[i];

        // console.log(second, largestNum);

    }else if ( second < arr[i]){

        
        second = arr[i]; // second = arr[i];
        
        // console.log(second, largestNum);


    }
}

console.log(` Largest Number is ${largestNum}, Second Largest is ${second}`);
// console.log();

