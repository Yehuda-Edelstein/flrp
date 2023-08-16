import getCoordinatesString from "./getCoordinatesString";

export default function getAllowedSquares(
  board: string[][],
  y: number,
  x: number,
  size: number
) {
  const boundry = size - 1;

  const up =
    y - 3 >= 0 && board[y - 3][x] === "" && getCoordinatesString(y - 3, x);
  const upRight =
    y - 2 >= 0 &&
    x + 2 <= boundry &&
    board[y - 2][x + 2] === "" &&
    getCoordinatesString(y - 2, x + 2);
  const right =
    x + 3 <= boundry &&
    board[y][x + 3] === "" &&
    getCoordinatesString(y, x + 3);
  const downRight =
    y + 2 <= boundry &&
    x + 2 <= boundry &&
    board[y + 2][x + 2] === "" &&
    getCoordinatesString(y + 2, x + 2);
  const down =
    y + 3 <= boundry &&
    board[y + 3][x] === "" &&
    getCoordinatesString(y + 3, x);
  const downLeft =
    y + 2 <= boundry &&
    x - 2 >= 0 &&
    board[y + 2][x - 2] === "" &&
    getCoordinatesString(y + 2, x - 2);
  const left =
    x - 3 >= 0 && board[y][x - 3] === "" && getCoordinatesString(y, x - 3);
  const upLeft =
    y - 2 >= 0 &&
    x - 2 >= 0 &&
    board[y - 2][x - 2] === "" &&
    getCoordinatesString(y - 2, x - 2);
  return [up, upRight, right, downRight, down, downLeft, left, upLeft];
}
