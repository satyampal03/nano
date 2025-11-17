// HTML Elements Selection here
// const hideContent = document.querySelectorAll(".hide");
const button = document.querySelector(".input_search_btn");
const result = document.querySelector(".result");
const sound = document.querySelector('.sound');

button.addEventListener("click", function (e) {
    e.preventDefault();



     let  inputData = document.querySelector(".input_field").value;

// API featching
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const getData = async ()=>{
        try{
            const fetchData = await fetch(`${url}${inputData}`);
            const data = await fetchData.json();
            // console.log(data[0].phonetics[0].audio);
    const html = `
    <div class="pronoun ">
        <h1 class="verb">${inputData}</h1>

    </div>

    <p class="main_verb "> ${data[0].meanings[0].partOfSpeech}<spam> ${data[0].phonetic}</spam></p>

    <p class="pronoun_defination ">${data[0].meanings[0].definitions[0].definition}</p>

    <div class="short_pronoun_defination ">${data[0].meanings[0].definitions[0].example || ''}</div>
  
    `;


    sound.classList.remove('hide');

    sound.addEventListener('click',function(e){
        e.preventDefault();
    // sound.setAttribute("src", `https"${data[0].phonetics[0].audio}`);

    console.log(`${data[0].phonetics[0].audio} || ''`)

    })



    // inputData    = '';
    result.insertAdjacentHTML('beforebegin', html);
     }catch(err){
            window.alert(err);
        }
    }


getData();

  });
