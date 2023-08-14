let board = [
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
];
const boundry = board.length - 1;

function isMoveValid(y, x, board) {
  const boundry = board.length - 1;
  return y >= 0 && y <= boundry && x >= 0 && x <= boundry && board[y][x] === "";
}

function getAllowedSquares(board, y, x) {
  const up = y - 3 >= 0 && board[y - 3][x] === "" && [y - 3, x];
  const upRight = y - 2 >= 0 &&
    x + 2 <= boundry &&
    board[y - 2][x + 2] === "" && [y - 2, x + 2];
  const right = x + 3 <= boundry && board[y][x + 3] === "" && [y, x + 3];
  const downRight = y + 2 <= boundry &&
    x + 2 <= boundry &&
    board[y + 2][x + 2] === "" && [y + 2, x + 2];
  const down = y + 3 <= boundry && board[y + 3][x] === "" && [y + 3, x];
  const downLeft = y + 2 <= boundry &&
    x - 2 >= 0 &&
    board[y + 2][x - 2] === "" && [y + 2, x - 2];
  const left = x - 3 >= 0 && board[y][x - 3] === "" && [y, x - 3];
  const upLeft = y - 2 >= 0 &&
    x - 2 >= 0 &&
    board[y - 2][x - 2] === "" && [y - 2, x - 2];
  return [up, upRight, right, downRight, down, downLeft, left, upLeft];
}

function exploreMoves(board, y, x) {
  const allowedMoves = getAllowedSquares(board, y, x);
  if (!allowedMoves.some((move) => move)) {
    return [];
  }

  const moves = [
    [-3, 0], // up
    [-2, 2], // upRight
    [0, 3], // right
    [2, 2], // downRight
    [3, 0], // down
    [2, -2], // downLeft
    [0, -3], // left
    [-2, -2], // upLeft
  ];

  for (let i = 0; i < moves.length; i++) {
    const [moveY, moveX] = moves[i];
    const newY = y + moveY;
    const newX = x + moveX;

    if (isMoveValid(newY, newX, board)) {
      board[newY][newX] = "visited";
      const result = exploreMoves(board, newY, newX);
      if (result !== null) {
        return [[newY, newX], ...result];
      }
      board[newY][newX] = ""; // Backtrack if not successful
    }
  }

  return null;
}

function findPossibleRoute(board) {
  const boundry = board.length - 1;
  for (let y = 0; y <= boundry; y++) {
    for (let x = 0; x <= boundry; x++) {
      if (board[y][x] === "") {
        board[y][x] = "visited";
        const route = exploreMoves(board, y, x);
        if (route !== null) {
          return [[y, x], ...route];
        }
        board[y][x] = "";
      }
    }
  }

  return null;
}

const possibleRoute = findPossibleRoute(board);

console.log(possibleRoute);
