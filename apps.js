"use strict";
console.log("im making this up")

let answer1 = confirm("are you ready to roll?")
console.log(answer1)

if (answer1) {
    console.log("Lets roll!");
    alert("Let's Roll!");
} else {
    console.log("Wrong Answer!");
    alert("Wrong Answer!!");
}





let myName = prompt("Is my name Qasim? Please answer yes/y or no/n only").toLowerCase();

while (myName != "yes" && myName != "no" && myName != "y" && myName != "n") {
  alert("Please answer yes/no or y/n only");
  myName = prompt("Is my name Qasim? Please answer yes/no or y/n only").toLowerCase();
}

if (myName === "yes" || myName === "y") {
  // console.log("Correct, my name is Qasim");
  alert("Correct, my name is Qasim");
} else if (myName === "no" || myName === "n") {
  // console.log("That is not correct");
  alert("That is not correct"); 
}

//while (myName != "yes" && myName != "y") {
   // alert("Try again!");








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
  }
  






  let myFavFootClub = prompt("Is Manchester United my favourite football club? Please answer yes/y or no/n only").toLowerCase();

while (myFavFootClub != "yes" && myFavFootClub != "no" && myFavFootClub != "y" && myFavFootClub != "n") {
  alert("Please answer yes/no or y/n only");
  myFavFootClub = prompt("Is Manchester United my favourite football club? Please answer yes/no or y/n only").toLowerCase();
}

if (myFavFootClub === "yes" || myFavFootClub === "y") {
  // console.log("Correct, C'MON UTD!");
  alert("Correct, C'MON UTD!");
} else if (myFavFootClub === "no" || myFavFootClub === "n") {
  // console.log("Wrong, Utd till' I die!");
  alert("Wrong, Utd till' I die!"); 
}







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






  let myPet = prompt("Do I own several chickens as pets? Please answer yes/y or no/n only").toLowerCase();

while (myPet != "yes" && myPet != "no" && myPet != "y" && myPet != "n") {
    alert("Please answer yes/no or y/n only");
    myPet = prompt("Do I own several chickens as pets? Please answer yes/no or y/n only").toLowerCase();
  }
  
  if (myPet === "yes" || myPet === "y") {
    // console.log("Cock-a-Doodle Doo! That is correct!");
    alert("Cock-a-Doodle Doo! That is correct!");
  } else if (myPet === "no" || myPet === "n") {
    // console.log("Rats! That's wrong!");
    alert("Rats! That's wrong!");} 