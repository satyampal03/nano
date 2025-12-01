
// Procedure
const user = {
  firstName: 'Anurag',
  lastName: 'Singh',
  age: 25,
   getAgeYear: function(age) {
  return new Date().getFullYear() - age
}
}

console.log(user.getAgeYear);