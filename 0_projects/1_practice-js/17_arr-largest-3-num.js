// find the largest 3 numbers from the arr 
// find the largest two numbers from an arrY

const arr = [2,34,345,456,454,54,34];
    let largestNum = 0;
    let second = 0;
    let third = 0;
    let forth = 0; 

for(let i = 0; i < arr.length; i++){
    if(largestNum < arr[i]){

        second = largestNum;  // second value bhi update hoti rhe

        largestNum = arr[i];


    }else if ( second < arr[i]){

            third = second;

        second = arr[i]; // second = arr[i];
        // console.log(second, largestNum);
    }else if(arr[i] > third ){
        third = arr[i];
    }
}
console.log(`Largest Number is ${largestNum}, Second Largest is ${second} and ${third}`);
// console.log();