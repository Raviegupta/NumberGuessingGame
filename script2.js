'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const check = document.querySelector('.check');
check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('🔢 Enter valid input b/w 1-20 !');

    // when input is out of range
  } else if (guess > 20 || guess <= 0) {
    displayMessage('❌ Invalid Input!');

    // when player wins the game
  } else if (guess === secretNumber) {
    displayMessage('✅ number Matched!');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '26rem';
    document.querySelector('.number').textContent = secretNumber;

    // when player input not matches secret no
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// introducing again functionality.
const again = document.querySelector('.again');
again.addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '13rem';
  document.querySelector('.guess').value = '';
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);
});
