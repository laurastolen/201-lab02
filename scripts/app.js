'use strict';
var pointsEarned = 0;

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// console.log(getRandomInt(10));
// // expected output: 0, 1 or 2

// expected output: 0, 1 or 2

//  Math.random()

// ask them their name ... relentlessly
/*
  write a loop that prompts them
    save a variable with their answer
  needs to meet a condition, is truthy
    while loop (doesn't always need a count)
      put prompt inside the loop
  */
// Ask them to gues at a food that I like 3 foods
  /*
  possibilities: in a variable, store tham in an array (refrigerator)
  write a loop (while loop)
    condidtion is based on two things:
    compare guees to the possibilites and stop if correct
    stop after 3
    guessCount for user's guesses
    increment the guessCount when they guess
    three guesses to ask one correct food
    save variables guesses, guess
  */

// guess how many dogs user owns 1 - 100000


// var userName = prompt('Tell me your name please');
// while (userName === '' || userName.length < 3 || userName === 0) {
//   userName = prompt('No, I mean it, what is your name');
// }

// alert('sup, ' + userName + ' welcome to my awesome site!');


// var favoriteFoods = ['pizza', 'shepherd\'s pie', 'falafel'];
// var guessCount = 5;
// var correctGuessFlag = false;
// var theirGuessAtFood;

// while (guessCount > 0 && correctGuessFlag === false) {
//   theirGuessAtFood = prompt('try again');

//   guessCount--;
//   for (var i = 0; i < 3; i++){
//     if (favoriteFoods[i] === theirGuessAtFood){
//       correctGuessFlag = true;
//       }
//   }
  
// }

// var things = ['dogs', 'cats', 'horses', 'elephants', 'mice']; 
// var thingsLiked = '';
// var thingsDisliked = '';

// var likesGinger;
// do {
//   likesGinger = prompt('do you like ginger?');
//   likesGinger = likesGinger.toLowerCase();
// } while (likesGinger !== 'no' && likesGinger !== 'yes') {
  
// }

/////////////////////////////
// Guess a number - Question 6
var numberToGuess = Math.floor(Math.random() * Math.floor(Number(10)));
var guessAttemptCount = 4; 
var numGuessedByUser = NaN;

while (guessAttemptCount > 0) {
  numGuessedByUser = prompt('You have ' + guessAttemptCount + ' tries to guess a number between 1 and 10');
  numGuessedByUser = Number(numGuessedByUser);

  if (numberToGuess === numGuessedByUser) {
    alert('Awesome! You got it!');
    guessAttemptCount = 0;
    pointsEarned++;

  } else if (numGuessedByUser < numberToGuess) {
    alert(numGuessedByUser + 'is too low');
    guessAttemptCount--;

  } else if (numGuessedByUser > numberToGuess) {
    alert(numGuessedByUser + 'is too high');
    guessAttemptCount--;
  }
}

/////////////////////////////
// var i = 0;

// for (i = 0; i < things.length; ++i) {
//   var answer = prompt('Do you like ' + things[i] + '\nY/No?');
//   answer = answer.toLowerCase();

//   if (answer === 'yes' || answer === 'y') {
//     // console.log('You like ' + things[i]);
//     alert('You like ' + things[i]);
    
//     thingsLiked = thingsLiked + (things[i] + ' ');
//   } else if (answer === 'no' || answer === 'n') {
//     // console.log(answer + 'is notYou don\'t like ' + things[i]);
//     alert('You don\'t like ' + things[i]);
//     thingsDisliked = thingsDisliked + (things[i] + ' ');
//   } else {
//     // console.log(answer + ' is not the answer we were looking for');
//     alert(answer + ' is not the answer we were looking for');
//   }
// }

// var userName = prompt('What is your name?');

// console.log('Hello ' + userName + '!\nWelcome to our site!!');
// alert('Hello ' + userName + '!\nWelcome to our site!!');

// console.log('Things About ' + userName + '\n\nYou like: ' + thingsLiked + '\nYou don\'t like: ' + thingsDisliked);
// alert('Things About ' + userName + '\n\nYou like: ' + thingsLiked + '\nYou don\'t like: ' + thingsDisliked);


alert('You guessed ' + pointsEarned + ' questions correctly!!!');