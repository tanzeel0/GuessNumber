'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number! 🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
*/
const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

const setScore = function (sc) {
  document.querySelector('.score').textContent = sc;
};
let secretNum = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNum;

let score = 20;

let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) displayMessage('🚫 No Number');
  else if (score <= 0) displayMessage('💀 You Lost The Game');
  else if (guess === secretNum && score > 0) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNum;
    setScore(score);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  } else {
    displayMessage(guess > secretNum ? '↗️ Too High' : '↙️ Too Low');
    setScore(score);
    score--;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  setScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
