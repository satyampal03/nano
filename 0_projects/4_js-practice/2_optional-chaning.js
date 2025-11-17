// 🚫 Example without optional chaining:


// const user = { 
//   profile: { 
//     name: "John" 
//   } 
// };

// console.log(user.profile.name); // ✅ "John"
// console.log(user.address.city); // ❌ Error: Cannot read properties of undefined



// ✅ Example with optional chaining (?.):
const user = { 
  profile: { 
    name: "John" 
  } 
};

console.log(user.profile?.name);   // ✅ "John"
console.log(user.address?.city);   // ✅ undefined (no error)



