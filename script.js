let numHTML = document.querySelector("#number");
let intNum = numHTML.innerHTML;

let btn1 = document.querySelector("#sub1");
let btn2 = document.querySelector("#sub2");
let gameBtn = document.querySelector("#gameStart");
let text = document.querySelector("#gameHistory");
let turns = 0;

const players = ["You", "Computer"];

btn1.addEventListener("click", function () {
  sub1(0);
});

btn2.addEventListener("click", function () {
  sub2(0);
});

function sub1(x) {
  let whoIsPlaying;
  if (x != 0) {
    whoIsPlaying = players[1];
  } else {
    whoIsPlaying = players[0];
  }

  if (intNum > 0) {
    text.scrollTop = text.scrollHeight;

    intNum -= 1;
    console.log(intNum);
    numHTML.innerHTML = intNum;
    text.value =
      text.value + `\n${whoIsPlaying} subtracted by 1. Now ${intNum}.`;
  } else {
    text.value = `\nCurrent Value is now 0. You Lose!` 
  }
  turns++;
  if ((turns % 2 == 1) || (turns == 1)) {
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
    text.scrollTop = text.scrollHeight;

    intNum -= 2;
    console.log(intNum);
    numHTML.innerHTML = intNum;
    text.value =
      text.value + `\n${whoIsPlaying} subtracted by 2. Now ${intNum}.`;
  } 
  turns++;
  if (turns % 2 == 1) {
    computerTurn();
  }
}

gameBtn.addEventListener("click", function () {
  startGame();
});

function startGame() {
  numHTML.innerHTML = 20;
  intNum = 20;
  text.value = "Game Start! Go first.";
}

function computerTurn() {
  if (numHTML % 2 == 0 || () {
    sub1(1);
  } else {
    sub2(1);
  }
}
