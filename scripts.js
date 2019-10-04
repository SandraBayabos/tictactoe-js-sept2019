// NUMBER OF TURNS
let turn = 0;

// WINNING COMBOS
let winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// ENTER MOVES & SWITCH TURN
function nextMove(square) {
  if (square.innerHTML == "") {
    turn++;
    changeMessage();
    if (turn % 2 == 0) {
      square.innerHTML = "O";
    } else {
      square.innerHTML = "X";
    }
  } else {
    alert("That spot's taken, dum dum.");
  }
}

// CHECK WINNER
function checkWin() {}

// // START GAME

// function startGame() {}

// DISPLAY TURN

function changeMessage() {
  let turnMessage = document.getElementById("player");
  turn % 2 == 0 ? (turnMessage.innerText = "X") : (turnMessage.innerText = "O");
}
