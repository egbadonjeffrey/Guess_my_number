"use strict";



let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// output secret number end

function scrambleSecretNumber() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

function gameOver() {
  if (score === 0) {
    document.querySelector(`body`).style.backgroundColor = `#e34d2b`;
    document.querySelector(`.message`).textContent = `Game Over Lad`;
  }
}

function winGame() {
  document.querySelector(`body`).style.backgroundColor = `#60b347`;
  document.querySelector(
    `.message`
  ).textContent = `You Guessed the Correct Number`;
  // Output secret number

  document.querySelector(`.secretNumber`).textContent = secretNumber;
}

function reload() {
  document.querySelector(`.message`).textContent = `Start Guessing`;

  document.querySelector(`.score`).textContent = 20;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.secretNumber`).textContent;
}

// Onclick again button to reload
document.querySelector(`.again`).addEventListener(`click`, function () {
  reload();
});

// Onclick the check button
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // console.log(guess);

  // When there is no number

  if (!guess) {
    document.querySelector(`.message`).textContent = `No Number Inputed`;
    // When number is correct
  } else if (guess === secretNumber) {
    // output correct number
    winGame();

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // If
  } else if (guess < secretNumber) {
    document.querySelector(`.message`).textContent = `Number is too Low...`;
    score = score - 1;
    document.querySelector(`.score`).textContent = `${score}`;

    if (score === 0) {
      gameOver();
      document.querySelector(`.score`).textContent = `${(score = 0)}`;
    } else {
    }
    // output message
  } else if (guess > secretNumber) {
    document.querySelector(`.message`).textContent = `Number is too High...`;

    if (score > 0) {
      document.querySelector(`.score`).textContent = `${score--}`;
      console.log(score);
    } else {
      document.querySelector(`.score`).textContent = `${(score = 0)}`;
      gameOver();
    }

    // console.log(score);
  }
});
