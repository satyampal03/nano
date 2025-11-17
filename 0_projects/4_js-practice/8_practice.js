const arr = [[4,5],[234,34],[53,43],[4,34],4];

for(let i = 0; i < arr.length; i = i+ 2 ){
    // console.log(arr[i]);
    let x = 0;

    for(let j = 0; j < arr[i].length; j++){
        let initialVal = arr[i][j];

        arr[i][j] = arr[i+1][x];

        arr[i+1][x] = initialVal;

        x++;

    }
    
    x = 0;

}

console.log(arr);
