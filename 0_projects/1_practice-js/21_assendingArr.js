// const arr = [34,56,5,45,45,-34,43,0,1,-1,234,-345,32];

// for(let i = 0; i < arr.length-1; i++){
//     for(let j = 0; j < arr.length-1-i; j++){
//         if (arr[j] > arr[j + 1]) {
//         let x = arr[j];

//         arr[j] = arr[j+1];

//         arr[j+1] = x;
//         }
//     }
// }   

// console.log(arr);


const dissArr = [34,56,5,45,45,-34,43,0,1,-1,234,-345,32];

for(let i = 0; i < dissArr.length-1; i++){
    for(let j = 0; j<dissArr.length-1-i; j++){
        if(dissArr[j] < dissArr[j+1]){
            let temp = dissArr[j];

            dissArr[j] = dissArr[j+1];

            dissArr[j+1] = temp;
        }

    }
}

console.log(dissArr);


// for(let i =0; i < Math.floor(arr.length/2); i++){

//     let temp = arr[i];

//     let last =  arr[bigNum-i] ;

//     if( temp > last ){
        
//         temp = arr[last];

//         last = temp;

//     }
// console.log(arr);

// }

