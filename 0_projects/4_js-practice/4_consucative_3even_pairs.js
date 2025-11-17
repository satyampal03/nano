
const arr = [2,3,4,34,54,53,445,43,4,4,4,4,5,4,4,4,4,4,4,4,4,4,4,4,4];

    let temp = 0;

    let final = 0;

for(let i = 0; i < arr.length; i++){

    if(arr[i] % 2 === 0 ){
        temp = temp + 1;
    }else{
        temp = 0;
    }


    if(temp >= 3){
        final = final + 1
    }
}
    console.log(final);




//     let continueEvenLength = 0;

//     let pairs = 0;

//     if(arr[i] % 2 === 0){

//         continueEvenLength = continueEvenLength + 1;
//     }else{
//         if(continueEvenLength < 3){
//             continueEvenLength = 0;
//         }else{
//             console.log('pair 1');
//         }
//     }

// }


    // && arr[i+1]% 2 === 0 && arr[i+2]% 2 === 0)

    // let evenChance = 0;

    // if(arr[i] % 2 === 0 ) {

    //     console.log('even'+i);
    //         // const indexPosition  = i;

    //         evenChance = evenChance + i;

    // }else{
    //     console.log('odd'+i);
    //     evenChance = 
    // }