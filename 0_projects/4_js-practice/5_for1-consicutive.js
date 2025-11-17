// for 1 consucative 

const arr = [23,45,34,76456,34,74,54,74,765,3];

    let even = [];

    let odd =[];

for(let i = 0; i < arr.length-1; i++){
    if(arr[i] % 2 ===0 ){
        even.push(arr[i]);
    }else{
    odd.push(arr[i]);
    }

}

    console.log(even, odd, arr.length-1);


