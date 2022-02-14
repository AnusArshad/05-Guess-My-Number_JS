'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct No';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 20;
// document.querySelector('.score').textContent = 13;

// document.querySelector('.guess').value = 15;
// console.log(document.querySelector('.guess').value);

const number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔️ No Number');
  }
  //   while guess correct
  else if (guess === number) {
    displayMessage('🎉 Correct No');
    document.querySelector('.number').textContent = number;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem ';
  }
  //while guess diff number
  else if (guess !== number) {
    if (score > 0) {
      displayMessage(guess > number ? '📈 too high' : '📉 too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`👻 you lost`);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem ';

  document.querySelector('.guess').value = ' ';
});
