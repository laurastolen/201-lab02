'use strict';
var pointsEarned = 0;
var numberToGuess = Math.floor(Math.random() * Math.floor(Number(10)));
var guessAttemptCount = 0;
var numberGuessedByUser = 0;
var things = ['dogs', 'cats', 'horses', 'elephants', 'mice'];
var thingsLiked = '';
var thingsDisliked = '';

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

var itemsInPocket = ['handses', 'fish-bones', 'goblins-teeth', 'wet shells', 'bat wings', 'sharp stone', 'knife', 'string', 'string or nothing', 'ring']
var guessCount = 6;
var correctGuessFlag = false;
var guessedItem;


while (guessCount > 0 && correctGuessFlag === false) {
  guessedItem = prompt('What have I got in my pocket?')
  guessCount--;
  if (guessCount === 0) {
    alert('that was your last guess')
    break;
  } 
  for (var i = 0; i < itemsInPocket.length; i++){
    if (itemsInPocket[i] === guessedItem) {
      correctGuessFlag = true;
      alert(guessedItem + ' you guessed it')
      pointsEarned++
    }
  }
}

alert('You guessed ' + pointsEarned + ' questions correctly!!!');

////////////////////
//Ask for User's Name and display Greeting
var userName = prompt('What is your name?');

console.log('Hello ' + userName + '!\nWelcome to our site!!');
alert('Hello ' + userName + '!\nWelcome to our site!!');

console.log('Things About ' + userName + '\n\nYou like: ' + thingsLiked + '\nYou don\'t like: ' + thingsDisliked);
alert('Things About ' + userName + '\n\nYou like: ' + thingsLiked + '\nYou don\'t like: ' + thingsDisliked);


