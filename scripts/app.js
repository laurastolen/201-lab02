'use strict';
var pointsEarned = 0;
var numberToGuess = Math.floor(Math.random() * Math.floor(Number(10)));
var guessAttemptCount = 0;
var numberGuessedByUser = 0;
var things = ['dogs', 'cats', 'horses', 'elephants', 'mice'];
var thingsLiked = '';
var thingsDisliked = '';

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

// var likesGinger;
// do {
//   likesGinger = prompt('do you like ginger?');
//   likesGinger = likesGinger.toLowerCase();
// } while (likesGinger !== 'no' && likesGinger !== 'yes') {

// }

/////////////////////////////
// Find out their likes, Questions 1-5

for (var i = 0; i < things.length; ++i) {
  var answer = prompt('Do you like ' + things[i] + '\nY/No?');
  answer = answer.toLowerCase();

  if (answer === 'yes' || answer === 'y') {
    // console.log('You like ' + things[i]);
    alert('You like ' + things[i]);
    thingsLiked = thingsLiked + (things[i] + ' ');
  } else if (answer === 'no' || answer === 'n') {
    // console.log(answer + 'is notYou don\'t like ' + things[i]);
    alert('You don\'t like ' + things[i]);
    thingsDisliked = thingsDisliked + (things[i] + ' ');
  } else {
    // console.log(answer + ' is not the answer we were looking for');
    alert(answer + ' is not the answer we were looking for');
  }
}

/////////////////////////////
// Guess a number - Question 6
guessAttemptCount = 4;

while (guessAttemptCount > 0) {
  numberGuessedByUser = prompt('You have ' + guessAttemptCount + ' tries to guess a number between 0 and 9');
  numberGuessedByUser = Number(numberGuessedByUser);

  if (numberToGuess === numberGuessedByUser) {
    alert('Awesome! You got it, and earned a point');
    guessAttemptCount = -1;
    pointsEarned++;
  } else if (numberGuessedByUser < numberToGuess) {
    alert(numberGuessedByUser + ' is too low');
    guessAttemptCount--;
    if (guessAttemptCount === 0) {
      alert('Sorry, the correct answer was ' + numberToGuess);
    }
  } else if (numberGuessedByUser > numberToGuess) {
    alert(numberGuessedByUser + ' is too high');
    guessAttemptCount--;
    if (guessAttemptCount === 0) {
      alert('Sorry, the correct answer was ' + numberToGuess);
    }
  }
}

////////////////////
//Question 7
//create an array with multiple possible answers
var possbileGuesses = ['pizza', 'pasta', 'salad'];
//Give the users 6 attempts to guess the correct answer
guessAttemptCount = 6;
//loop through typed guesses
while (guessAttemptCount > 0) {
  var foodGuessed = prompt('You have ' + guessAttemptCount + ' attempts left to guess ' + possbileGuesses.length + ' of my favorite foods');
  for (var j = 0; j < possbileGuesses.length; j++) {
    if (possbileGuesses[j] === foodGuessed) {
      alert('guessed that one of my favorite foods is ' + foodGuessed + ', and earned a point!');
      guessAttemptCount = -1;
      pointsEarned++;
    } else { //BUG this gets called three times??
      alert(foodGuessed + ' is a wrong answer');
      guessAttemptCount--;
    }
  }
}
//check if guess matches an item in an array

//if item matches, add point, bail

//display the possible correct answers




alert('You guessed ' + pointsEarned + ' questions correctly!!!');

////////////////////
//Ask for User's Name and display Greeting
var userName = prompt('What is your name?');

console.log('Hello ' + userName + '!\nWelcome to our site!!');
alert('Hello ' + userName + '!\nWelcome to our site!!');

console.log('Things About ' + userName + '\n\nYou like: ' + thingsLiked + '\nYou don\'t like: ' + thingsDisliked);
alert('Things About ' + userName + '\n\nYou like: ' + thingsLiked + '\nYou don\'t like: ' + thingsDisliked);


