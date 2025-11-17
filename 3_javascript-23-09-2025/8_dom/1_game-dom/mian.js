"use strict";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number ';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value); // will show the value that's still avail insite .gess elem

const secretNumber = Math.trunc(Math.random() * 20) + 1; //(math.trunc removes the decimal values and math.random gives the random values b/w 0-1)



let highScore = document.querySelector(".highscore").textContent;

// console.log(highScore);

document.querySelector(".number").textContent = "?";
let life = document.querySelector(".score").innerHTML;

life = Number(life); // value updated -

let scoreValue = life; //document.querySelector(".score").value; // 20----> we are geeting

// console.log(life);

document.querySelector(".check").addEventListener("click", function () {
  const input = document.querySelector(".guess").value;

  const guess = Number(input);
  // console.log(typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "Please Enter The Value!";
    document.querySelector(".message").style.backgroundColor = "red";
    document.querySelector(".message").style.color = "white";

    // if (scoreValue > 0) {
    //   --scoreValue;

    //   document.querySelector(".score").textContent = scoreValue; // score value
    // } else {
    //   document.querySelector(".message").textContent = "you lose the game";
    //   document.querySelector(".message").style.backgroundColor = "red";
    //   document.querySelector(".message").style.color = "white";
    // }
  } //else if (guess === 0) {

  //     document.querySelector(".message").textContent = "Please Enter the Vailid Your Number ";

  //     document.querySelector(".message").style.backgroundColor = "yellow";
  //     document.querySelector(".message").style.color = "red";

  //     if (scoreValue > 0) {
  //       --scoreValue;

  //       document.querySelector(".score").textContent = scoreValue;
  //     } else {
  //       document.querySelector(".message").textContent = "you lose the game";
  //       document.querySelector(".message").style.backgroundColor = "red";
  //       document.querySelector(".message").style.color = "white";

  //     }

  //}
  else if (secretNumber === guess) {
    document.querySelector(".message").textContent = "wow! right guess ";
    document.querySelector(".message").style.backgroundColor = "lightGreen";

    if (scoreValue > 0) {
      --scoreValue;

      document.querySelector(".score").textContent = scoreValue;


      let highest = Number(highScore);

      console.log(highest);

      if (scoreValue > highest) {
        document.querySelector(".highscore").textContent = scoreValue;
      } else {
        document.querySelector(".highscore").textContent = highest;
      }
    } else {
      document.querySelector(".message").textContent = "you lose the game";
      document.querySelector(".message").style.backgroundColor = "red";
      document.querySelector(".message").style.color = "white";
    }
  } else if (secretNumber > guess) {
    document.querySelector(".message").textContent = "You are too less";

    document.querySelector(".message").style.backgroundColor = "lightYellow";
    document.querySelector(".message").style.color = "blue";

    if (scoreValue > 0) {
      --scoreValue; 

      document.querySelector(".score").textContent = scoreValue;
    } else {
      document.querySelector(".message").textContent = "you lose the game";
      document.querySelector(".message").style.backgroundColor = "red";
      document.querySelector(".message").style.color = "white";
    }
  } else if (secretNumber < guess) {
    document.querySelector(".message").textContent = "You are too uppr";
    document.querySelector(".message").style.backgroundColor = "lightYellow";
    document.querySelector(".message").style.color = "blue";

    if (scoreValue > 0) {
      --scoreValue;

      document.querySelector(".score").textContent = scoreValue;
    } else {
      document.querySelector(".message").textContent = "you lose the game";
      document.querySelector(".message").style.backgroundColor = "red";
      document.querySelector(".message").style.color = "white";
    }
  }

  document.querySelector(".guess").value = " ";

  //else if(secretNumber = (secretNumber-1)){
  //     document.querySelector('.message').textContent = 'You are too near';
  // }else if(secretNumber = (secretNumber+1)){
  //     document.querySelector('.message').textContent = 'You are again near too';
  // }

  console.log("You Guess the Value" + guess);
  console.log("secret Number" + secretNumber);
  console.log("Your Score Value" + scoreValue);
});




document.querySelector(".again").addEventListener("click", function(){
//   document.querySelector(".guess").value = " ";
    
  document.querySelector(".message").textContent = 'Start guessing...'; // default

 document.querySelector(".score").textContent = 20; // default

//   document.querySelector(".highscore").textContent = highScore; // default

  document.querySelector(".message").style.backgroundColor = "white";
  document.querySelector(".message").style.color = "black";


document.querySelector(".highscore").value = highScore;




});


