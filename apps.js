"use strict";
console.log("im making this up")

let scoreCount = 0


let user = prompt("Please provide your name").toLowerCase();
  alert("welcome to my site " + user + "!")


let answer1 = confirm("are you ready to roll?")
console.log(answer1)

if (answer1) {
    console.log("Lets roll!");
    alert("Let's Roll!");
} else {
    console.log("Wrong Answer!");
    alert("Wrong Answer!!");
}




function me(){
let myName = prompt("Is my name Qasim? Please answer yes/y or no/n only").toLowerCase();

while (myName != "yes" && myName != "no" && myName != "y" && myName != "n") {
  alert("Please answer yes/no or y/n only");
  myName = prompt("Is my name Qasim? Please answer yes/no or y/n only").toLowerCase();
}

if (myName === "yes" || myName === "y") {
  // console.log("Correct, my name is Qasim");
  alert("Correct, my name is Qasim");
  scoreCount ++
} else if (myName === "no" || myName === "n") {
  // console.log("That is not correct");
  alert("That is not correct"); 
}
}
 me()
//while (myName != "yes" && myName != "y") {
   // alert("Try again!");







function age (){
let myAge = prompt("Am I 27 years old? Please answer yes/y or no/n only").toLowerCase();

while (myAge != "yes" && myAge != "no" && myAge != "y" && myAge != "n") {
    alert("Please answer yes/no or y/n only");
    myAge = prompt("Am I 27 years old? Please answer yes/no or y/n only").toLowerCase();
  }
  
  if (myAge === "yes" || myAge === "y") {
    // console.log("That is not correct!");
    alert("That is not correct!");
  } else if (myAge === "no" || myAge === "n") {
    // console.log("Right on! i'm 23!");
    alert("Right on! i'm 23!"); 
    scoreCount ++
  }
}
age()





function club(){
  let myFavFootClub = prompt("Is Manchester United my favourite football club? Please answer yes/y or no/n only").toLowerCase();

while (myFavFootClub != "yes" && myFavFootClub != "no" && myFavFootClub != "y" && myFavFootClub != "n") {
  alert("Please answer yes/no or y/n only");
  myFavFootClub = prompt("Is Manchester United my favourite football club? Please answer yes/no or y/n only").toLowerCase();
}

if (myFavFootClub === "yes" || myFavFootClub === "y") {
  // console.log("Correct, C'MON UTD!");
  alert("Correct, C'MON UTD!");
  scoreCount ++
} else if (myFavFootClub === "no" || myFavFootClub === "n") {
  // console.log("Wrong, Utd till' I die!");
  alert("Wrong, Utd till' I die!"); 
}
}
club()




function travel(){
let myTravels = prompt("Have i been to 12 countries or more? Please answer yes/y or no/n only").toLowerCase();

while (myTravels != "yes" && myTravels != "no" && myTravels != "y" && myTravels != "n") {
  alert("Please answer yes/no or y/n only");
  myTravels = prompt("Have i been to 12 countries or more? Please answer yes/no or y/n only").toLowerCase();
}

if (myTravels === "yes" || myTravels === "y") {
  // console.log("Incorrect! I've only been to 8!");
  alert("Incorrect! I've only been to 8!");
} else if (myTravels === "no" || myTravels === "n") {
  // console.log("Unfortunately, you are correct. I've only been to 8 countries");
  alert("Unfortunately, you are correct. I've only been to 8 countries"); }
  scoreCount ++
}
travel()



function pet(){
  let myPet = prompt("Do I own several chickens as pets? Please answer yes/y or no/n only").toLowerCase();

while (myPet != "yes" && myPet != "no" && myPet != "y" && myPet != "n") {
    alert("Please answer yes/no or y/n only");
    myPet = prompt("Do I own several chickens as pets? Please answer yes/no or y/n only").toLowerCase();
  }
  
  if (myPet === "yes" || myPet === "y") {
    // console.log("Cock-a-Doodle Doo! That is correct!");
    alert("Cock-a-Doodle Doo! That is correct!");
    scoreCount ++
  } else if (myPet === "no" || myPet === "n") {
    // console.log("Rats! That's wrong!");
    alert("Rats! That's wrong!");} 
  }
  pet()


    

    // const number = "7";
    function rndm6(){
const number = Math.floor(Math.random() * 10 + 1);
console.log(number);

for (let i = 2; i >= 0; i--) {
  let guesses = i + 1;

  let guess = prompt("Guess a number between 1 and 10! you have " + guesses + " attempts");

  const guessNum = parseInt(guess);

  if (guessNum === number) {
    // console.log("That's Correct!");
    alert("That's Correct!");
    scoreCount ++
    break;
  } else if (guessNum < number) {
    // console.log("Too low!");
    alert("Too low!");
  } else if (guessNum > number) {
    // console.log("Too high!");
    alert("Too high!");
  }

  if (i === 0) {
    alert("The correct number was " + number);
    break;
  }
}
    }
    rndm6()
// My Process
// declare a variable named number set the value to number that is a string ie - "7"
// create a for loop that:
// initialises i as 3
// condition is i > 0
// afterthought / decrement by 1 i--
// inside the loop:
// declare a variable named guess equals to a prompt to guess a number
// create an if statement:
// if guess === number - console.log("You win")
// make sure you break the loop here as the correct answer was found
// else if guess > number - console.log("to high")
// else if guess < number - console.log("to low")
// create a second if statement:
// if i === 0 alert the correct number was + number
// break the code inside this if statement
// the loop runs to many times... so:
// at the top of the loop declare a varaible named guesses = i + 1
// change initialisation in for loop to 2
// change condition in for loop to i >= 0
// change i in prompt to guesses
// change console.log for an alert and set the messages to corrispond.
// change the number variable to use Math.floor and Math.random to generate a random number.
// declare a variable named guessNum and set the value to parseInt(guess)

function ndGuess(){
  const chair = Math.floor(Math.random() * 10 + 1);
  console.log(chair);
  const desk = Math.floor(Math.random() * 10 + 1);
  console.log(desk);
  const painting = Math.floor(Math.random() * 10 + 1);
  console.log(painting);
  let ans = [chair, desk, painting];
  let b;
  let test;
  for(b=0;b<=6;b++){
   test = prompt("This section should be easier, I have 3 random numbers between 1 and 10, your challenge is to try and guess them! ")
   if (test != ans[0] && test != ans[1] && test != ans[2]){
       let y = 6-b ;
       if(y==0){
           alert("sorry! The correct numbers were "+ ans[0]+", "+ans[1]+" & "+ ans[2])
       } 
       else if(y==1){
           alert("Not quite, try again! you have "+ y+" attempt left")
          }
          else {  
              alert("Not quite, try again! you have "+ y+" attempts left")
          }
      }
      else if (test == ans[0] || test == ans[1] || test == ans[2] ){
          alert("You guessed it correct!")
          scoreCount ++
          break;
      }
  }             
  };
  
  ndGuess();
  alert("your total score was " + scoreCount + "!" )