// issues are ---> index reloading/ for user and computer




let usrChoosen = document.querySelectorAll(".user-choosen");

let hideContent = document.querySelector(".hide-content");

let showContent = document.querySelector(".show-content");

let detailsContent = document.querySelector(".details-content");

let nextHidden = document.querySelector(".nextHidden");

let userHand = document.querySelector(".user-hand");

let userHand_selection = document.querySelector(".userHand_selection");


let backgroundMusic = document.querySelector('.music');

// console.log(usrChoosen);

let button = document.querySelector(".button");

  let result = document.querySelector('.result');

///______________________***______________________________________

//________________________***_______________________


// computer -- player


// user click on any image --> event listener --> jispr click hua
// usko variable --> calculate random number by comp 
// animation start 

// animation end 
// userchosen and compChosen --> basis image load krni h 
// result declare



  let compHand = document.querySelector(".comp-hand");

  let randomNum = Math.trunc(Math.random() * 3) + 1;

  let compChoosen = randomNum;

for (i = 0; i < usrChoosen.length; i++) {


  
  compHand.addEventListener("animationend", function () {

    console.log("compChosen", compChoosen)
    if (compChoosen === 1) {
      console.log(" comp- paper");

      compHand.src = "final/comp-guessed-paper.png";
    } else if (compChoosen === 2) {
     console.log("comp - scissor");

      compHand.src = "final/comp-guessed-scissor.png";

    } else {

      console.log("comp - rock");

      compHand.src = "final/comp-guessed-rock.png";
    }
  });



    detailsContent.classList.remove("hide");

  // length mapped

  // start user -- hand work

  usrChoosen[i].addEventListener("click", function (e) {

    // console.log("e", e);
    // console.log("e.target", e.target)
  
    hideContent.classList.toggle("hide");

    detailsContent.classList.toggle("hide");

    showContent.classList.toggle("hide");

    const index = Array.prototype.indexOf.call(usrChoosen, this);

    // user functionility ---->
    let userChoosen = index + 1; // index number + 1 if there will the value is - 0 then the answer will be 1

    userHand.addEventListener("animationend", function () {
      if (userChoosen === 1) {
        console.log("user - paper");
        userHand.src = "final/user-guessed-paper.png";

      } else if (userChoosen === 2) {
        console.log("user- scissor");
        userHand.src = "final/user-guessed-scissor.png";

      } else {
         console.log("user- rock mai 2bar click ho rha hoo");
         userHand.src = "final/user-guessed-rock.png";

      }


      /// who winn the match ? 
      if(compChoosen > userChoosen ){
        result.textContent = "user Lose The Game 🤦‍♂️";
        backgroundMusic.src = "final/lose.mp3";
      }else if (compChoosen < userChoosen){
        result.textContent = "WoW you Won - The Game😍";
        backgroundMusic.src = "final/won.mp3";

      }
      else if(!compChoosen > userChoosen ){
        result.textContent = "WoW you Won - The Game😍";
        backgroundMusic.src = "final/won.mp3";
      }

        
      else{
        result.textContent = "Match Draw -🤡🤡";
        backgroundMusic.src = "final/draw.mp3";
      }




        button.classList.toggle("hide");

    button.addEventListener("click", function () {
      console.log("mai click hua");


      detailsContent.classList.remove("hide"); // choose one come again 

      button.classList.remove("hide"); // button remove hui

      showContent.classList.add("hide"); 

      hideContent.classList.remove("hide");


      
      userHand.src = "final/user-comp/user-hand.png";
      compHand.src = "final/user-comp/com-hand.png";

      console.log(userHand);
    });

    }); // --- ending the user functionlity



    // reSarting the game again ==> 

  


/*    showContent.addEventListener("click", function () {
      button.classList.toggle("hide");

      showContent.classList.toggle("hide");

      detailsContent.classList.toggle("hide");

      // userHand.classList.add('hide');

      // compHand.classList.add('hide');

      hideContent.classList.remove("hide");

      console.log("mai click hua");



    });
        */



  }); //  loop ending here

}
