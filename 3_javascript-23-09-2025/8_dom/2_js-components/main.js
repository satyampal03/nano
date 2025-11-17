'use strict';

   
      let modal =   document.querySelector('.modal');
      let overlay =   document.querySelector('.overlay');
      let btnCloseModel =   document.querySelector('.close-modal');

      let openBtnMode = document.querySelectorAll('.show-modal');

        console.log(openBtnMode); // list of all buttons in form of the array 

        for(let i=0; i < openBtnMode.length; i++ ){
            
            openBtnMode[i].addEventListener('click', function(){
                // console.log('button clicked');
                
                // modal.openBtnMode[i].remove('.hidden');
                modal.classList.toggle('hidden');
                 overlay.classList.toggle('hidden');
            })

        }

            btnCloseModel.addEventListener('click', function(){

            modal.classList.toggle('hidden');
                 overlay.classList.toggle('hidden');
            

            })

            overlay.addEventListener('click', function(){
                modal.classList.toggle('hidden');
                 overlay.classList.toggle('hidden');
            })
        

            overlay.addEventListener('keydown', function(youClicked){
                let keyName =  youClicked.key;

                console.log(keyName);
                
                if(keyName === "Escape"){
                  modal.classList.remove('hidden');
                 overlay.classList.remove('hidden');
                }
            })