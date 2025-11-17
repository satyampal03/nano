// do the sum of 2 largest numbers 

const arr = [2,34,455.9999,456,454,54,34];
    let largest = 0;
    let secondLargest =0;
for(let index = 0; index < arr.length; index++){
        if(arr[index] > largest){

            secondLargest = largest;
            largest = arr[index]; //2 => 34 =>345=>356

        }else if(secondLargest < arr[index] && arr[index] < largest){
            secondLargest = arr[index]; // 454
        }
}
console.log(largest,secondLargest);

console.log(largest+secondLargest)