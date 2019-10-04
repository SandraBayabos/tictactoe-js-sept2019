// NUMBER OF TURNS
let turn = 0;

// CURRENT PLAYER

let currentPlayer = "X";

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
      currentPlayer = currentPlayer;
      square.innerHTML = "O";
    } else {
      square.innerHTML = "X";
      currentPlayer = "X";
    }
    checkWin();
  } else {
    checkWin();
    alert("That spot's taken, dum dum.");
  }
}

// BOARD
let board = document.getElementsByClassName("grid-item");
console.log(board);

// CHECK WINNER
function checkWin() {
  let won = false;
  for (let i = 0; i < winningCombos.length; i++) {
    let winningState = winningCombos[i]
      .map(index => {
        console.log(board[index].innerHTML);
        return board[index].innerHTML;
      })
      .join("");
    if (winningState === "XXX" || winningState === "OOO") {
      won = true;
      alert(`Congrats. Player ${currentPlayer} won!`);
    }
  }
  return won;
}

// DISPLAY TURN

function changeMessage() {
  let turnMessage = document.getElementById("player");
  turn % 2 == 0 ? (turnMessage.innerText = "X") : (turnMessage.innerText = "O");
}
