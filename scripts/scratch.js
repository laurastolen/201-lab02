
var possbileGuesses = ['pizza', 'pasta', 'salad'];
//Give the users 6 attempts to guess the correct answer
guessAttemptCount = 6;
//loop through typed guesses
while (guessAttemptCount > 0) {
  var foodGuessed = prompt('You have ' + guessAttemptCount + ' attempts left to guess ' + possbileGuesses.length + ' of my favorite foods');
  for (var j = 0; j < guessAttemptCount; j++) {
    if (j === 0) {
      alert('you\'re out of guesses');
    } else if (possbileGuesses[j] === foodGuessed) {
      alert('You guessed that one of my favorite foods is ' + foodGuessed + ', and earned a point!');
      guessAttemptCount = -1;
      pointsEarned++;
    } else {
      guessAttemptCount--;
    }
  }
}



