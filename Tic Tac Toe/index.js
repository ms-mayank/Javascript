/*const statusDisplay = document.querySelector(".game--status");

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
  }

  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }

  handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute("data-cell-index"));

  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
}

function handleRestartGame() {
  gameActive = true;
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
}

document.querySelectorAll(".cell").forEach((cell) => cell.addEventListener("click", handleCellClick));
document.querySelector(".game--restart").addEventListener("click", handleRestartGame);
*/
const statusDisplay = document.querySelector(".game--status");
let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game has drawn`;
const currentPlayerTurn = () => `It Player ${currentPlayer}'s turn`;
statusDisplay.innerHTML = currentPlayerTurn();
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// REST GAME
document.querySelector(".game--restart").addEventListener("click", gameReset);
function gameReset() {
  currentPlayer = "X";
  gameActive = true;
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.innerHTML = "";
  });
}
// GAME START
document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});
function handleCellClick(clickedCellEvent) {
  let clickedCell = clickedCellEvent.target;
  let clickedCellIndex = parseInt(clickedCell.getAttribute("data-cell-index"));
  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }
  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultEvalutaion();
}
function handleCellPlayed(clickedCell, clickedCellIndex) {
  clickedCell.innerHTML = currentPlayer;
  currentPlayer === "X" ? (color = "orange") : (color = "skyblue");
  clickedCell.style.backgroundColor = color;
  gameState[clickedCellIndex] = currentPlayer;
}
function handleResultEvalutaion() {
  let gameWin = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      gameWin = true;
      break;
    }
  }
  if (gameWin) {
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
  }
  let gameDraw = !gameState.includes("");
  if (gameDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }
  // PlayerChange
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.innerHTML = currentPlayerTurn();
}
