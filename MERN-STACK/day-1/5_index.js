// block Scope variable 
// In this the var variable can be accesiable but can't the another variables can  be aacess outside from this scope

if(true){
  var a = 10;
}

console.log(a); // ❌ error



// Function Scope Variable
// In this the No any variable can be accessiable from out side of the Function 

function test(){
  let x = 5;

console.log(x); // ❌ error

}

test()