const arr = [34,56,5,45,45,34];

console.log(arr);

        let x  = arr.length-1;

for(let i = 0; i < Math.floor(arr.length/2); i++){
        let temp = arr[i];

        arr[i] = arr[x-i]; // 34/34 replace,  last wali first me (56/45 replace) (5/45 replace)

       arr[x-i]  = temp; // 34/34 replace, first wali last me  (45/56 replace) (45/5)

}

       console.log(arr);
