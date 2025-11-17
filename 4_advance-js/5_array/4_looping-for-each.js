const bankdata = [200,-123300,1344000,-1300,300,4000,-3200,2300,300];

// -values are the withdrals 
// and the +values are the diposits 

// for of looping in array
// for(const statement of bankdata){
//     if(statement > 0 ){
//         console.log(`You Deposites ${statement} $`);
//     }else{
//         console.log(`You Withdral ${statement} $`);
//     }
// }

// console.log('--------------ForEach Function Heigher Order Function-------------------');

// bankdata.forEach(function (statement){
//     if(statement>0){        console.log(`You Deposites ${statement} $`);
//     }else{
//         console.log(`You Withdral ${Math.abs(statement)} $`);
//     }
// })


// get the index and the valu using enteries 

// for(const [ i,  statement] of bankdata.entries()){ // don't forget to use to calll the method enteries
//     if(statement > 0 ){
//         console.log(`${i+1}: You Deposites ${statement} $`); // add 1 becaouse counter will start from the 0
//     }else{
//         console.log(`${i+1}: You Withdral ${statement} $`);
//     }
// }



// get the index and the valu using enteries  with forEach

bankdata.forEach(function (statement, i, arr){
    if(statement > 0){
        console.log(`${i+1}: You Deposites ${statement} $`);
    }else{
        console.log(`${i+1}: You Withdrals ${ Math.abs(statement)} $   ${arr}`);
    }
})