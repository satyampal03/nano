// Promise.resolve('resolved promise q').then(res=> console.log('jhey'));
// console.log('en d')


// Creating a new promise using the Promise constructor
// const lotteryPromise = new Promise(function executor(resolve, reject) {
//   // Executor function logic here
// });

// const lotteryPromise = new Promise(function executor(resolve, reject) {
//   const randomNumber = Math.random();
//   if (randomNumber >= 0.5) {
//     resolve('🎉 You won the lottery!');
//   } else {
//     reject(new Error('💩 You lost your money!'));
//   }
// });


// const lotteryPromise = new Promise(function executor(resolve, reject) {
//   console.log('🔮 Lottery draw is happening...');
//   setTimeout(function() {
//     const randomNumber = Math.random();
//     if (randomNumber >= 0.5) {
//       resolve('🎉 You won the lottery!');
//     } else {
//       reject(new Error('💩 You lost your money!'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));


// // promisifying settimeout function 

// const wait = function(second){
//     return new Promise(function(resolve){
//         setTimeout(resolve, second * 1000);
//     });
// };

// wait(2).then(() => {
//     console.log('Im waitting for 2 sec');

//     return wait(1);
// })

// .then(() =>{
//     console.log(' wait for 1 sec');
// })



