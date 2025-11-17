// arr - find the even and the odd from the arr list of data

const arr = [234,4356,43,6545,345,345345,43,5,345,345,34,5,45,34];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0 ){
//             console.log(`~given Number => ${arr[i]} is the even `);
//     }else{
//             console.log(`~given Number => ${arr[i]} is the even `);
//     }
// }


// if we want only even num 
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0 ){
//             console.log(`~given Number => ${arr[i]} is the even `);
//     }
// }



// if we want to sepret even into other and odd into other


// let evenList = [];
// let oddList = [];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0 ){
//             // console.log(`~given Number => ${arr[i]} is the even `);
//             evenList.push(arr[i]);
//     }else{
//             // console.log(`~given Number => ${arr[i]} is the even `);
//             oddList.push(arr[i]);
//     }
// }

// console.log(evenList);
// console.log(oddList);



// side the even and another side the odd

// let initial = 0; // kuki mujjhe isi jagah pr chahiye hai


// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0 ){

//         let x = arr[i];   // temporary hmne x me even value ko store kiya 

//         arr[i] = arr[initial];  // arr ki initial point se start krna hai to hme 0 se rkhna pdega jiske karan hme ek variable declare krna pdega
//                                 // initial variable declare kr diya 0;
//         arr[initial] = x;  // abb hmne temperory value ko 1st pr place kr diya hai 

//         initial++; // increament hota rhega taki phele 1st number pr aye and 2nd value 1-index pr aaye 

//             // console.log(`~given Number => ${arr[i]} is the even `);
//     }
// }

// console.log(arr);




// agar hme even values baad me chahiye hogi to ?



    let evenlInLast = arr.length -1; 

for(let i = 0; i < arr.length; i++){

    if(arr[i] % 2 === 0){ //even

     let value = arr[i];

        arr[i] = arr[evenlInLast];   // jo value aai hai abhi use maine ek place de di hai ki => arr[evanlst ]
// - par  rhna hai===>

        arr[evenlInLast]  = value;

        evenlInLast--; 
    }
}
console.log(arr); // 34,  45, 43, 6545, 345, 345345, 43, 5,  234, 4356, 34, 5, 345, 345
