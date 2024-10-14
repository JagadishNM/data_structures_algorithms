const cells = document.querySelectorAll('.cell');
const statusDiv = document.getElementById('status');

let currentPlayer = 'X';
let gameActive = true;
let board = Array(9).fill(null);

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function checkWin() {
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  }

  function checkDraw() {
    return board.every(cell => cell !== null);
  }

  function handleClick(e) {
    const cellIndex = parseInt(e.target.id);
  
    if (board[cellIndex] !== null || !gameActive) {
      return;
    }
  
    board[cellIndex] = currentPlayer;
    e.target.innerText = currentPlayer;
  
    if (checkWin()) {
      statusDiv.innerText = `${currentPlayer} wins!`;
      gameActive = false;
    } else if (checkDraw()) {
      statusDiv.innerText = 'It\'s a draw!';
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      statusDiv.innerText = `${currentPlayer}'s turn`;
    }
  }
  
  cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
  });
  
  statusDiv.innerText = `${currentPlayer}'s turn`;