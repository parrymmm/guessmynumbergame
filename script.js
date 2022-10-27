'use strict';
/*
console.log(document.querySelector('.message').textContent);

//Change the text content using document query

document.querySelector('.message').textContent = 'Correct Number!!!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);
*/
// const x = function () {
//   console.log(document.querySelector('.guess').value);
// };

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

// document.querySelector('.again').addEventListener('click', function () {
//   location.reload();
// });

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //if no number is inputted
  if (!guess) {
    displayMessage('🚫 No Number!!!');
  }

  //if guess is equal to secretNumber
  else if (guess === secretNumber) {
    displayMessage('🏆Correct Number!!!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // highScore = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //refracting the code
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!!' : '📉 Too low!!!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You loss the game!!');
      displayScore(0);
    }
  }
  /*
  //if guess is greater than secretNumber
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loss the game!!';
      document.querySelector('.score').textContent = 0;
    }
  } //if guess is lover than the secretNumber
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loss the game!!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
