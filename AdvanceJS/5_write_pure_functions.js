// How to write Pure functions?

function add(a, b) {
  return a + b; // Always returns the same sum for the same 'a' and 'b'.
}

add(5, 2); // Result: 7
add(5, 2); // Result: 7 (Always 7, no surprises!)


// Wring the Impure Functions


let a = 10;

function x(value){

    a += value
   
    return a;

}

x(10);