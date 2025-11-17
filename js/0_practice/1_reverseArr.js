


const arr = [4,34,334,434,534,543]

let left = 0;
let right = arr.length-1;

while(left < right){

        let temp = arr[left];
        
        arr[left] =  arr[right];

        arr[right] = temp;

        left++;
        right--;

}
console.log(arr);





// function reverseArrayManually(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     // Swap elements at left and right pointers
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     // Move pointers inward
//     left++;
//     right--;
//   }
//   return arr;
// }



// Example usage:
// let myArray = [1, 2, 3, 4, 5];
// console.log("Original array:", myArray); // Output: Original array: [1, 2, 3, 4, 5]

// reverseArrayManually(myArray);
// console.log("Reversed array:", myArray); // Output: Reversed array: [5, 4, 3, 2, 1]

// let anotherArray = ["a", "b", "c", "d"];
// console.log("Original array:", anotherArray); // Output: Original array: ["a", "b", "c", "d"]

// reverseArrayManually(anotherArray);
// console.log("Reversed array:", anotherArray); // Output: Reversed array: ["d", "c", "b", "a"]