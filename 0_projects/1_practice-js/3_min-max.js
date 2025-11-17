let arr = [435,65,-7,-64545.76,7,65,4545,7,45,756,57,34,43,34,5,345,345,45,345,45,45453,5,35,345,34,5,45,-45,7] // find the mon and max values fro this arr

let max = arr[0]; // one more to (-infinity) (because the uber shoud be greater then the all of all vales)

let min = arr[0]; // same with this (infinity)

for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];

    }
        if(arr[i] < min){
            min = arr[i]
        }
}
console.log(min, max);

    arr = [];
            
            arr.push(min,max);


console.log(arr);




