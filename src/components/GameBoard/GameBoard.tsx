import { FunctionComponent, useEffect, useState } from "react";
import getBoard from "./getBoard";
import getAllowedSquares from "./getAllowedSquares";
import getCoordinatesString from "./getCoordinatesString";
import { getStartingPositions } from "./getStartingPositions";
import GameOver from "../GameOver/GameOver";

import "./GameBoard.scss";

const startingPositions = getStartingPositions().basic;

const GameBoard: FunctionComponent = () => {
  const [gameOver, setGameOver] = useState(false);
  const [didWin, setDidWin] = useState(false);

  const [board, setBoard] = useState(getBoard());
  const size = board.length;

  const [count, setCount] = useState(0);
  const [allowedSquares, setAllowedSquares] =
    useState<(string | boolean)[]>(startingPositions);

  useEffect(() => {
    for (let i = 0; i < allowedSquares.length; i++) {
      if (allowedSquares[i]) {
        return;
      }
    }
    setDidWin(count === 100);
    setGameOver(true);
  }, [allowedSquares, count]);

  function updateBoard(board: string[][], count: number, i: number, j: number) {
    const arr = [...board];
    arr[i][j] = count.toString();
    return arr;
  }

  function newGame() {
    setBoard(getBoard());
    setGameOver(false);
    setCount(0);
    setAllowedSquares(startingPositions);
  }

  return (
    <div className="gContainer">
      <div className="gBoard">
        {board.map((row, i) => {
          return (
            <div key={i} className="gRow">
              {row.map((square, j) => {
                return allowedSquares.includes(getCoordinatesString(i, j)) ? (
                  <div
                    key={j}
                    className={!square ? "gSquare gAllowed" : "gFilled"}
                    onClick={() => {
                      if (!square) {
                        setBoard(updateBoard(board, count + 1, i, j));
                        setCount(count + 1);
                        setAllowedSquares(getAllowedSquares(board, i, j, size));
                      }
                    }}
                  >
                    <div className="allowedOverlay"></div>
                    <span>{square}</span>
                  </div>
                ) : !square ? (
                  <div key={j} className="gSquare"></div>
                ) : square === count.toString() ? (
                  <div key={j} className="gSquare currentSquare">
                    {square}
                  </div>
                ) : (
                  <div key={j} className="gFilled">
                    {square}
                  </div>
                );
              })}
            </div>
          );
        })}
        {gameOver && (
          <GameOver didWin={didWin} newGame={newGame} count={count} />
        )}
      </div>
    </div>
  );
};

export default GameBoard;
