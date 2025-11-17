// script.js
// import './shoppingCart.js';
// console.log('Script.js code running');


// Importing Modules 
// import {addToCart} from './shoppingCard.js';

// import { addToCart, totalPrice, totalQuantity } from './shoppingcart.js';


// console.log('importing The Modules');

// addToCart('Laptops', 3);

// console.log(totalPrice, totalQuantity);

// console.log('start fetching')
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');

// const data = await res.json();

// console.log(data);

// console.log('something');

// return {title: data.at(-1).title, text: data.at(-1).body};


// const getLastPost = async function(){

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');

// const data = await res.json();

// return {title: data.at(-1).title, text: data.at(-1).body};
// }


// const lastPost =getLastPost();
// console.log(lastPost);


// // Not Very Clear 
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();

// console.log(lastPost2);

/*
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 1);
*/

// EXPORT =>

// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };


//   IMPORT => 

    // const {addToCart} = require('./shoppingCard.js');




//     import  cloneDeeo from './node_modules/lodash-es/cloneDeep.js';

//     const state = {
//         car : [
//             {Product: 'bread', Quantity:5},
//             {Product: 'pizza', Quantity:5},
//         ],

//         user:{
//             loggedIn: true
//         },

//     };

//     const stateClone = Object.assign({}, state);


// state.user.loggedIn = false;

//     console.log(stateClone);


// Check if all numbers are even

// const numbers = [2, 1, 6, 8, 10];
// const number2 = [2, 1, 6, 8, 10];
// const allEven = numbers.join(number2);
// console.log(allEven); // Output: true
