// find the largest number 

let arr =  [-3,-45,4,-34,-54,5,-346,-43,-45,-44,-4,-345,-325];

    let x = 0;

    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i]);

        if(arr[i] > x){
            x = arr[i];
            // console.log();
        }
    }
console.log(x);
