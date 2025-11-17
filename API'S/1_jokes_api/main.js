// elements slection

const content = document.querySelector('.content');
content.innerHTML = '';

const button = document.querySelector('.btn');

const url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;

const getJoke = async function(){
    try{
        const res = await fetch(url);
        const sylogan = await res.json();

        return sylogan;

    }catch(err){
        console.log(err);
    }
}
  
// implimentation on html 

const showJokes = ()=> {

     getJoke().then(s=> {
    let data = s.joke? s.joke: s.setup;
    content.textContent = `${(data)}`;
 });

}

// On page load showing the joke 
showJokes();

// after clicking ok the page also chow the joke/
 button.addEventListener('click', function(e){
        e.preventDefault();
        showJokes();
 })
    

 console.log('API FETCHING PROJECT 1- /15.11.2025');