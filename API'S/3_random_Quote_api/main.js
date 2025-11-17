// Elements Selections 

const textContainer =document.querySelector('.textContainer');
const button =document.querySelector('.btn');

// Quate API Featching Here

const url = `https://api.quotable.io/random`;

const getQuote = async ()=>{
    const getData = await fetch(url);
    const data = await getData.json();

    console.log(data);
}

getQuote();