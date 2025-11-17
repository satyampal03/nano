


//     let evnNum = [];
//     let odNum = [];
// for(let i = 0; i <= a.length-1; i ++){
//     if(a[i] % 2 ===0){
//         evnNum.push(a[i]);
//     }else{
//         odNum.push(a[i]);
//     }
// }
// a.length = 0;

// console.log(evnNum);
// console.log(odNum );

// a.push(...evnNum, ...odNum);

// console.log(a);

const a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

let evenIndex = 0;

for(let i = 0; i <= a.length -1; i++){
    
    if(a[i]%2 === 0) {

        let temp = a[evenIndex] // temp is storing the values

        a[evenIndex] = a[i]  // 

        a[i] = temp 

        evenIndex++;
    }
}

console.log(a);








// for(let i = 0; i <= a.length; i++)
// {
//         if(a[i] % 2 === 0){

        


//             a.shift(a[i]);

//             console.log(a[i]);


//           let b =   a.unshift(a[i]);

//             console.log(b);


//         }
// }

// console.log(a);








//   let evenArr = [];

//     let oddArr = [];

// for(let index of a){

//     if( index / 2 === 0){

//         evenArr.push(a[i]);


//     }else{
//         oddArr.push(a[i]);

//     }
// }

// const b =evenArr.join(oddArr);

// console.log(b)

// console.log(evenArr);
// console.log(oddArr);