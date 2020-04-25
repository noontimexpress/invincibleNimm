let numHTML = document.querySelector("#number");
let intNum = numHTML.innerHTML;

let btn1 = document.querySelector("#sub1");
let btn2 = document.querySelector("#sub2");
let gameBtn = document.querySelector("#gameStart");
let text = document.querySelector("#gameHistory");
let turns = 0;
let compTurn = 0;
let gameStart = false;

const players = ["You", "Computer"];

btn1.addEventListener("click", function () {
  if (gameStart === true) {
    sub1(0);
  }
});

btn2.addEventListener("click", function () {
  if (gameStart === true) {
    sub2(0);
  }
});

function sub1(x) {
  let whoIsPlaying;
  if (x != 0) {
    whoIsPlaying = players[1];
  } else {
    whoIsPlaying = players[0];
  }

  if (intNum > 0) {
    intNum -= 1;
    numHTML.innerHTML = intNum;
    text.value =
      text.value + `\n${whoIsPlaying} subtracted by 1. Now ${intNum}.`;
  }
  turns++;

  text.scrollTop = text.scrollHeight;

  if (turns % 2 === 1) {
    computerTurn();
  }
}

function sub2(x) {
  let whoIsPlaying;
  if (x != 0) {
    whoIsPlaying = players[1];
  } else {
    whoIsPlaying = players[0];
  }

  if (intNum > 1) {
    intNum -= 2;
    numHTML.innerHTML = intNum;
    text.value =
      text.value + `\n${whoIsPlaying} subtracted by 2. Now ${intNum}.`;
    turns++;
  } else {
    text.value =
      text.value + `\nCan't subtract by 2! Please click subtract by 1.`;
  }

  text.scrollTop = text.scrollHeight;

  if (turns % 2 === 1) {
    computerTurn();
  }
}

gameBtn.addEventListener("click", function () {
  startGame();
});

function startGame() {
  gameStart = true;
  turns = 0;
  compTurn = 0;
  numHTML.innerHTML = 22;
  intNum = 22;
  text.value = "Game Start! Go first.";
}

function computerTurn() {
  if (intNum === 0) {
    text.value = `Current Value is now 0. You Lose!`;
    gameStart = false;
  } else {
    if (compTurn % 2 === 0 && intNum != 0) {
      if (intNum % 2 === 0) {
        sub1(1);
        compTurn++;
      } else {
        sub2(1);
        compTurn++;
      }
    } else {
      if (intNum % 2 === 0) {
        sub2(1);
        compTurn++;
      } else {
        sub1(1);
        compTurn++;
      }
    }
  }
}
