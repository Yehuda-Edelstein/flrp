import { FunctionComponent, useEffect, useState } from "react";
import getBoard from "./../utils/getBoard";
import getAllowedSquares from "./../utils/getAllowedSquares";
import getCoordinatesString from "./../utils/getCoordinatesString";
import { getStartingPositions } from "../utils/getStartingPositions";
import GameOver from "../GameOver/GameOver";

import "./GameBoard.scss";

interface IGameBoardProps {
  className: string;
  dimension: number;
}

const GameBoard: FunctionComponent<IGameBoardProps> = ({
  className,
  dimension: size,
}) => {
  const startingPositions = getStartingPositions().basic;

  const [gameOver, setGameOver] = useState(false);
  const [didWin, setDidWin] = useState(false);

  const [board, setBoard] = useState(getBoard(size));

  const [count, setCount] = useState(0);
  const [allowedSquares, setAllowedSquares] =
    useState<(string | boolean)[]>(startingPositions);

  useEffect(() => {
    for (let i = 0; i < allowedSquares.length; i++) {
      if (allowedSquares[i]) {
        return;
      }
    }
    setDidWin(count === Math.pow(size, 2));
    setGameOver(true);
  }, [allowedSquares, count]);

  function updateBoard(board: string[][], count: number, i: number, j: number) {
    const arr = [...board];
    arr[i][j] = count.toString();
    return arr;
  }

  function newGame() {
    setBoard(getBoard(size));
    setGameOver(false);
    setCount(0);
    setAllowedSquares(startingPositions);
  }

  return (
    <div className="gameBoardContainer">
      <div className={`gameBoard ${className}`}>
        {board.map((row, i) => {
          return (
            <div key={i} className="gameRow">
              {row.map((square, j) => {
                return allowedSquares.includes(getCoordinatesString(i, j)) ? (
                  <div
                    key={j}
                    className={
                      !square ? "gameSquare gameAllowed" : "gameFilled"
                    }
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
                  <div key={j} className="gameSquare"></div>
                ) : square === count.toString() ? (
                  <div key={j} className="gameSquare currentSquare">
                    {square}
                  </div>
                ) : (
                  <div key={j} className="gameFilled">
                    {square}
                  </div>
                );
              })}
            </div>
          );
        })}
        {gameOver && (
          <GameOver
            didWin={didWin}
            newGame={newGame}
            count={count}
            outOf={Math.pow(size, 2)}
          />
        )}
      </div>
    </div>
  );
};

export default GameBoard;
