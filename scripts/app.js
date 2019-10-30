'use strict';

var things = ['dogs', 'cats', 'horses', 'elephants', 'mice']; 
var thingsLiked = '';
var thingsDisliked = '';

var i = 0;

for (i = 0; i < things.length; ++i) {
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
    console.log(answer + ' is not the answer we were looking for');
    alert(answer + ' is not the answer we were looking for');
  }
}

var userName = prompt('What is your name?');

// console.log('Hello ' + userName + '!\nWelcome to our site!!');
alert('Hello ' + userName + '!\nWelcome to our site!!');

// console.log('Things About ' + userName + '\n\nYou like: ' + thingsLiked + '\nYou don\'t like: ' + thingsDisliked);
alert('Things About ' + userName + '\n\nYou like: ' + thingsLiked + '\nYou don\'t like: ' + thingsDisliked);
