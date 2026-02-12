// Non Repeating char

// let word = "aabcbcde";

// word.forEach(element => {
    
//     console.log(element)
// })



// this will give us same as word 

// for (const element of word) {
//         console.log(word);
// }


// [...spredWord] operator to convert the string into an array
// this will give us each element 

// [...word].forEach(element =>{
    
// }) 



// spread operator to convert the string into an array

// word.split('').forEach(element => console.log(element));


// let word = "aabcbcde";
// let unique = "";

// for (let i = 0; i < word.length; i++) {
//     let exists = false;

//     // Check if the current character is already in our 'unique' string
//     for (let j = 0; j < unique.length; j++) {
//         if (word[i] === unique[j]) {
//             exists = true;
//             break; 
//         }
//     }

//     // If we didn't find a match, it's unique! Add it.
//     if (!exists) {
//         unique += word[i];
//     }
// }

// console.log(unique); // "abcde"


// let word = "aab";

// for (let i = 0; i < word.length; i++) {
//     let count = 0;

//     // Inner loop to count occurrences of word[i]
//     for (let j = 0; j < word.length; j++) {
//         if (word[i] === word[j]) {
//             count++;
//         }
//     }

//     // If the count is exactly 1, it is a non-repeating character
//     if (count === 1) {
//         console.log(word[i]);
//     }
// }
// // Output: d, e


// getting the non_repeating charector

const word = "aabcbcde"

for(let i = 0; i< word.length; i++){
    let count = 0;
    for(let j = 0; j< word.length; j++){
        if(word[i]===word[j]){
            count += 1;
        }
    }

if(count === 1){
    console.log(word[i]);
}};

