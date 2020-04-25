let numHTML = document.querySelector("#number");
let intNum = numHTML.innerHTML;

let btn1 = document.querySelector("#sub1");
let btn2 = document.querySelector("#sub2");
let gameBtn = document.querySelector("#gameStart");
let text = document.querySelector("#gameHistory");
let turns = 0;
let compTurn = 0;

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
    numHTML.innerHTML = intNum;
    text.value =
      text.value + `\n${whoIsPlaying} subtracted by 1. Now ${intNum}.`;
  } else {
    text.value = `\nCurrent Value is now 0. You Lose!` 
  }
  turns++;
  if (turns % 2 == 1) {
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
  turns = 0;
  compTurn = 0;
  numHTML.innerHTML = 21;
  intNum = 21;
  text.value = "Game Start! Go first.";
}

function computerTurn() {
  console.log(compTurn);  
  if (compTurn % 2 == 0) {
    if (intNum % 2 == 0) {
      sub1(1);
      console.log('subtracting 2 cause turn is even');
      compTurn++;
    } else {
      sub2(1);
      console.log('subtracting 1 cause turn is even');
      compTurn++;
    }
  } else {
    if (intNum % 2 == 0) {
      sub1(1);
      console.log('subtracting 1 cause turn is odd');
      compTurn++;
    } else {
      sub2(1);
      console.log('subtracting 2 cause turn is odd');
      compTurn++;
    } 
  }
}
