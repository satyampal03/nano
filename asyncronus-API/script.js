'use strict';
// Elements Selected here
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////request.open('GET', 'https://restcountries.eu/rest/v2/name/portugal');


// final code 


const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};


const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};



/*
const getCountryAndNeighbour = function(country){

    // AJAX call Country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function(){
    // const data = JSON.parse(this.responseText); // array formate
    const [data] = JSON.parse(this.responseText); // object formate -> destructuring
    // console.log(data);

    // render Country 1
    renderCountry(data); // ------------------

    // Get neighbour Country
    const neighbour = data.borders;

    console.log("neighbour", neighbour)
    

    if(!neighbour) return; // if there is non any neighbour then stop rander 2nd country

    // AJAX call Country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha?codes=${neighbour}`);
    request2.send();

    // console.log(request2);

    request2.addEventListener('load', function(){
        const [data2] = JSON.parse(this.responseText);

        // console.log(data2);

        renderCountry(data2, 'neighbour');
    });

});

}

// getCountryAndNeighbour('usa');
getCountryAndNeighbour('portugal');

*/


// old way to call API

//  const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();

// const request = fetch('https://restcountries.com/v2/name/portugal');

// console.log(request); 

/*
const getCountryData = function (country){
    fetch(`https://restcountries.com/v2/name/${country}`).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(data){
        console.log(data);
        renderCountry(data[0]);
    }) ;
}

getCountryData('portugal');
*/


// rough ----> error

/*
const getCountryData = function (country){

    // fetching the country 1st
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => 
        response.json())
    .then(data =>{ 
        renderCountry(data[0]);
    const neighbour  = data[0].borders[0];

        if(!neighbour) return;

/*  -----> This solution by @LOKESH BHAI 
 fetching Country 2nd
        fetch(`https://restcountries.com/v2/alpha?codes=${neighbour}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0], 'neighbour')
        });
*/
   /*     // fetching Country 2nd
       return fetch(`https://restcountries.eu/rest/v2/alpha?${neighbour}`);
        })         
        .then(response => response.json())
         .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 🤦‍♂️`);
      renderError(`Something went wrong 💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
 // FINALLY CALLBACK FUNCTION ALWAYS WORKS WHILE RESULT GONNA (REJECT OR FULLFILLED)  BUT THIS FUNCTION ALWAYS RETURNS HERE
        }) 
};


// btn.addEventListener('click', function() {
//     });


btn.addEventListener('click', function(){
  getCountryData('portugal');

});
*/





// ----------------------

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'dfsdfdef';

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };




// workingCode

/*

const getCountryData = function (country) {
  // Country 1
  fetch(
    `https://restcountries.com/v2/name/${country}`
  ).then(response => {
    return response.json();
  })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error ('there is no Country Found')

            // Country 2
      return fetch(`https://restcountries.com/v2/alpha?codes=${neighbour}`);
    })
    .then(response => {
      return response.json();
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 🤦‍♂️`);
      renderError(`Something went wrong 🤦‍♂️ ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('IN');
});

*/

/*
const whereAmI = function (lat, lng){
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
        if(!res.ok) throw new Error(`Problem with geocoding${res.status}`);
        return res.json();
    })
    .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country} `);

        return fetch(`https://restcountries.com/v3.1/name/germany`)
    })
    .then(response => {
        if(!response.ok) throw new Error(`Country Not Found ${response.status}`);

        return response.json();
    })     
    .then(data => renderCountry(data[0])) 
    .catch(err => console.error(`${err.message}🤡`))
};

whereAmI(52.508, 13.381);

btn.addEventListener('click', function () {
  whereAmI('IN');
});

*/


/*

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(data => {
      console.log(data[0]);
      renderCountry(data[0]); // optional: a function to display country info
    })
    .catch(err => {
      console.error(`${err.message} 💥`);
    });
};


btn.addEventListener('click', whereAmI);


*/

// fetch returns the promise
/*
const getPosition = function(){
    return new Promise(function (resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}
const whereAmI = async function (){
    try{
        // geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // REVERSE GEOCODING
      const resGeo  = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

      if(!resGeo.ok) throw new Error('problem getting the locaiton')


      const dataGeo = await resGeo.json();
        console.log(dataGeo);

      // COUNTRY DATA
    const res =    await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`); 

    if(!res.ok) throw new Error('problem getting the country')

    const data = res.json();

    console.log(res);
    renderCountry(data);
}catch(err){
        console.log(err);
        renderCountry(`something went Worng ${err.message}`);
    }
}

whereAmI();

// try catch to get errors 
// try{
//     let y = 1;
//     const x = 2
//     x = 3; // this is not posible in normal javascript
// }catch(error){
//     alert(error.message);
// }

// Attempt to get return value from async function


// return the synchronous Behaviour

console.log('step-1');
const city = whereAmI();
console.log(city);
console.log('step-2');



 //this is returning the asynchronous behavior 



// Using finally
whereAmI()
  .then(city => {
    console.log(city);
  })
  .catch(error => {
    console.error(error.message);
  })
  .finally(() => {
    console.log('Finished');
  });'


  /*
console.log('step-1');
 whereAmI();
console.log('step-2');
*/


/*
// running Promises in Sequence
const get3Countries = async function(c1,c2,c3){
    try{

        // running these promises in sequence and eah data is taking losts of time also page gonna havey

       const {data1} = await getJSON(`https://restcountries.com/v2/name/${c1}`); // (distructuring) becoz it's result be arr with one object so with distructuring with result to take the first elem there,
       const {data2} = await getJSON(`https://restcountries.com/v2/name/${c2}`);
        const {data3} = await getJSON(`https://restcountries.com/v2/name/${c3}`);

        console.log(data1.capital,data2.capital,data3.capital, )


   }catch(err){
        console.error(err);
    }
}


get3Countries('portugal', 'canada', 'tanzania')




// running Promises in Parallel
const get3Countries = async function(c1,c2,c3){
    try{
        const data = await Promise.all([
             getJSON(`https://restcountries.com/v2/name/${c1}`),
             getJSON(`https://restcountries.com/v2/name/${c2}`),
             getJSON(`https://restcountries.com/v2/name/${c3}`),
        ]);

       console.log(data.map(d => d[0].capital));


   }catch(err){
        console.error(err);
    }
}


get3Countries('portugal', 'canada', 'tanzania');

*/


/*

// Promise.race() -> 
(async function(){
const response = await Promise.race([
  getJSON('https://restcountries.com/v3.1/name/italy'),
  getJSON('https://restcountries.com/v3.1/name/egypt'),
  getJSON('https://restcountries.com/v3.1/name/mexico')
]);

console.log(response);
})();

const timout = function(sec){
    return new Promise(function(_,reject){
        setTimeout(function(){
            reject(new Error('Request Took Too Long'))
        }, sec*1000)
    })
}

Promise.race([
  getJSON('https://restcountries.com/v3.1/name/italy'),
  timout(0.3)
]).then(res => console.log(res[0]))
.catch(err => console.log(err));


// promise.allSettled


Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success')
])
.then(results => console.log(results));


Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success')
])
.then(results => console.log(results))
.catch(err => console.log(err));


//Promise.any


Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success')
])
.then(results => console.log(results))
.catch(err => console.log(err));


*/



const wait = function(second){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds*1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath){
    return Promise(function (resolve, reject){
        const img = document.createElement('img');
        img.src = imgPath;


    img.addEventListner('load', function(){
        imgContainer.append(img);
        resolve(img);
    });

    img.addEventListner('error', function(){
        reject(new Error('Image Not Found'));
    });

});
}



/*
let currentImg;

createImage('img/img-1.jpg')
    .then(img => {
        currentImg = img;
        console.log('Image 1 Loaded');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-2.jpg');
    })
    .then(img => {
        currentImg.style.display = 'none';
    })
    .catch(err => console.log(err));
*/



// part 1
    const loadPause = async function(){
        try{
        // Load image 1
        let img1  = await createImage('img/img-1.jpg');
        console.log('Image 1 Loaded');

        await wait(2);
        img1.style.display = 'none';

        // Load image 2
        let img2  = await createImage('img/img-2.jpg');
        console.log('Image 2 Loaded');

        await wait(2);
        img1.style.display = 'none';

        }catch(err){
            console.log(err);
        }
    }

loadPause();


//part 2

const loadAll = async function(imgArr){
    try{
        const imgs = imgArr.map (async img => await createImage(img));
        console.log(imgs);

        const imgEl = await Promise.all(imgs);
        console.log(imgEl);


        imgEl.forEach((img) => img.classList.add('parallel'));
    }catch(err){
        console.log(err);
    }
}

loadAll(['img/img-1.jpg','img/img-2.jpg','img/img-3.jpg',]);