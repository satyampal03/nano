

// Calculate the age of all dogs in human years using this formula:

// If the dog is less than or equal to two years old, the human age is simply twice the dog's age.
// If the dog is older than two years, the human age is calculated by the formula: 
// 16
// +
// dog’s age
// ×
// 4 16+dog’s age×4.


// const arr = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);