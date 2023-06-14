"use strict";

console.log("is this working");

let points = 0;

points++

Math.random()

// welcome the user with a message
alert("Welcome to my quiz!")

// Ask the user for their name
let user = prompt("My name is Qasim, what's yours?")
console.log(user)

// The response could be a string, an empty string or null
// if user is an empty string or null, keep asking for their name
// Empty string and null are falsy values, so if user is false, ask for their name
// I will need a loop that will run until the condition is not met
// Everytime the loop runs, ask the question again

// (!) exclamation mark is logical not

while(!user){
user = prompt("Please provide your name").toLowerCase();
}

// falsy values
// null - the absence of any value
// undefined - a variable that has not been assigned a value
// false - boolean value
// NaN - Not a Number
// 0 - the number 0
// -0 - the number negative 0
// "" - empty string including "", '', ``

if(user !== "Qasim"){
    alert("Nice name, I'm looking forward to you exploring my site!")
}

alert("Hey " + user + "! Nice to have you visit my site!")



//Arrays

// Allow us to hold more than one value in a single variable
// Array indexes start from 0
// Each item in an array is named an element
// Arrays should be declared using const as they cannot be re-assigned
// Arrays can be manipulated using a variety of array methods

// Array methods we will look at today 
// .length - tells us the length of the array
// .push - adds an element to the end of the array
// .pop - removes an element from the end of the array
// .unshift - adds an element to the start of the array
// .shift - removes an element from the start of an array
// .indexOf - tells you the index of an array

const foodsQasimLikes = ["lasagne", "cereal", "burgers"]

console.log(foodsQasimLikes[0]);
console.log(foodsQasimLikes[1]);
console.log(foodsQasimLikes[2]);
console.log(foodsQasimLikes .length);
console.log(foodsQasimLikes)

// more ofthen than not the for loop is used to loop through an array

for(let i = 0; i < foodsQasimLikes.length; i++){
    console.log(foodsQasimLikes[i]);
}

console.log(foodsQasimLikes);

// .push
foodsQasimLikes.push ("pizza");
console.log(foodsQasimLikes);

// .pop
foodsQasimLikes.pop();
console.log(foodsQasimLikes)

// .unshift
foodsQasimLikes.unshift("toast")
console.log(foodsQasimLikes);

//Shift
foodsQasimLikes.shift()
console.log(foodsQasimLikes);

//.indexOf
let index = foodsQasimLikes.indexOf("cereal");
console.log(index);

// look into
// .splice() array
// .slice() array

// also look do while loop

const locations = ["france", "italy", "canada"]


// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user for their guess
const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

// Check if the guess is correct and provide feedback
if (userGuess === randomNumber) {
  console.log("Congratulations! You guessed the correct number.");
} else if (userGuess < randomNumber) {
  console.log("Too low! Try guessing a higher number.");
} else {
  console.log("Too high! Try guessing a lower number.");
}
