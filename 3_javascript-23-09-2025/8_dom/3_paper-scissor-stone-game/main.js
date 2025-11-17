let usrChoosen = document.querySelectorAll(".user-choosen");

let hideContent = document.querySelector(".hide-content");

let showContent = document.querySelector(".show-content");

let detailsContent = document.querySelector(".details-content");

let nextHidden = document.querySelector(".nextHidden");

let userHand = document.querySelector(".user-hand");

let userHand_selection = document.querySelector(".userHand_selection");

let backgroundMusic =  document.getElementsByTagName('body');
// console.log(usrChoosen);

let button = document.querySelector(".button");

///______________________***______________________________________

//________________________***_______________________

for (i = 0; i < usrChoosen.length; i++) {


      detailsContent.classList.remove("hide");

  // length mapped

  // computer -- player

  let compHand = document.querySelector(".comp-hand");

  let randomNum = Math.trunc(Math.random() * 3);

  let compChoosen = randomNum + 1;

  compHand.addEventListener("animationend", function () {
    if (compChoosen === 1) {
      console.log(" comp- paper");

      compHand.src = "final/comp-guessed-paper.png";
    } else if (compChoosen === 2) {
      console.log("comp - rock");

      compHand.src = "final/comp-guessed-rock.png";
    } else {
      console.log("comp - scissor");

      compHand.src = "final/comp-guessed-scissor.png";
    }
  });

  // start user -- hand work

  usrChoosen[i].addEventListener("click", function () {
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

        // hideContent.classList.toggle('hide');

        //   nextHidden.classList.add("hide");

        //   userHand_paper.classList.toggle("hide");

        //   userHand_paper.src = "final/user-guessed-paper.png";
      } else if (userChoosen === 2) {
        console.log("user- rock");

        userHand.src = "final/user-guessed-rock.png";

        // hideContent.classList.toggle('hide');

        //     nextHidden.classList.add("hide");

        //   userHand_paper.classList.toggle("hide");

        //   userHand_paper.src = "final/user-guessed-rock.png";
      } else {
        console.log("user- scissor");

        userHand.src = "final/user-guessed-scissor.png";

        // hideContent.classList.toggle('hide');

        //   nextHidden.classList.add("hide");

        //   userHand_paper.classList.toggle("hide");

        //   userHand_paper.src = "final/user-guessed-scissor.png";
      }
    }); // --- ending the user functionlity



    // reSarting the game again ==> 

    button.classList.toggle("hide");

    button.addEventListener("click", function () {
      console.log("mai click hua");
      detailsContent.classList.toggle("hide");

      button.classList.toggle("hide");
      showContent.classList.add("hide");
      hideContent.classList.remove("hide");

      
      userHand.src = "final/user-comp/user-hand.png";
      compHand.src = "final/user-comp/com-hand.png";

      console.log(userHand);
    });


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
