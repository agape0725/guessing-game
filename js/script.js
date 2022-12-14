"use strict";

let guess = document.getElementById("guess");
let clue = document.getElementById('clue');
let inputGuess = document.getElementById("input-guess");
let submitButton = document.getElementById("submit");
let scoreLeft = document.getElementById("score-left");
let finalScore = document.getElementById("final-score");
let questionImage = document.querySelector('.question-mark-image');
let error = document.getElementById('error-intro-guess');
let tryAgain = document.querySelector('.try');
let tryAgainButton = document.getElementById('try-again-button');

let userNumber = document.getElementById("user-number");
let startButton = document.getElementById("start-button");

startButton.addEventListener("click", function (e) {
  guess.textContent = Math.trunc(Math.random() * parseInt(userNumber.value)) + 1;

  

  if (userNumber.value >= 11) {
    error.textContent = 'Maximum is 10.'
    return false;
  }

  if (userNumber.value <= 0) {
    error.textContent = 'Minimum is 1'
    return false;
  }

  if (userNumber.value === '') {
    error.textContent = 'Enter digits first.';
    return false;
  } 
  
  document.querySelector('.main__content').classList.add('show');
  document.querySelector('.intro-guess').classList.add('hide');

    // if (userNumber.value <= 20 && userNumber.value >= 1) {
    //   scoreLeft.textContent = 5;
    // } else if (userNumber.value <= 40 && userNumber.value >= 19) {
    //   scoreLeft.textContent = 10;
    // } else if (userNumber.value <= 60 && userNumber.value >= 39) {
    //   scoreLeft.textContent = 15;
    // } else if (userNumber.value <= 80 && userNumber.value >= 59) {
    //   scoreLeft.textContent = 20;
    // } else if (userNumber.value <= 100 && userNumber.value >= 79) {
    //   scoreLeft.textContent = 25;
    // } 

    // if (userNumber.value <= 50 && userNumber.value >= 1) {
    //   scoreLeft.textContent = 6;
    // } else if (userNumber.value <= 100 && userNumber.value >= 49) {
    //   scoreLeft.textContent = 12;
    // }

    if (userNumber.value <= 10 && userNumber.value >= 0) {
      scoreLeft.textContent = 4;
    }

})

submitButton.addEventListener("click", function (e) {

  let ans = parseInt(guess.textContent);
  let parseScoreLeft = parseInt(scoreLeft.textContent);
  let highScore = parseInt(finalScore.textContent);
  
  if (parseScoreLeft === 1) {

    document.querySelector('.try-again').classList.add('show');
    tryAgain.textContent = `The correct answer is ${ans}. Try again?`
    document.querySelector('.main__container').classList.add('blurred');
  }

    if (inputGuess.value === '') {
      clue.textContent = 'Enter guess.';
      clue.classList.add('show');

      questionImage.classList.toggle('shake');
      return false;
      
    } else if (inputGuess.value < ans) {

      clue.classList.add('show');
      clue.textContent = 'Too low.';
      scoreLeft.textContent = parseScoreLeft -= 1;
      inputGuess.value = '';

      questionImage.classList.toggle('shake');
      return false;
      
    } else if (inputGuess.value > ans) {

      clue.classList.add('show');
      clue.textContent = 'Too high.';
      scoreLeft.textContent = parseScoreLeft -= 1;
      inputGuess.value = '';

      questionImage.classList.toggle('shake');
      return false;

    } else {
      guess.classList.add('show');
      questionImage.classList.add('hide');
      clue.textContent = 'You guessed it right!'
      clue.style.color = 'black';
      highScore > scoreLeft.textContent ? scoreLeft.textContent = scoreLeft.textContent : finalScore.textContent = scoreLeft.textContent;
      document.querySelector('.main__container').classList.add('blurred');
      document.querySelector('.try-again').classList.add('show');
      document.querySelector('body').classList.add('win');
      tryAgain.textContent = `Congratulations! The answer is ${ans}. Try again?`;
      error.textContent = `Choose number from (1-10)`;
      return true;
    }
});

tryAgainButton.addEventListener('click', function () {
  
  guess.classList.remove('show');
  questionImage.classList.remove('hide');
  document.querySelector('.main__container').classList.remove('blurred');
  document.querySelector('.main__content').classList.remove('show');
  document.querySelector('body').classList.remove('win');
  clue.style.color = 'white';


  document.querySelector('.intro-guess').classList.remove('hide');
  document.querySelector('.try-again').classList.remove('show');
  inputGuess.value = '';
  userNumber.value = '';
  clue.textContent = '';
})



