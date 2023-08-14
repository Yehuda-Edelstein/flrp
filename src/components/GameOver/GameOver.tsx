import { FunctionComponent, useState } from "react";
import "./GameOver.scss";

interface IGameOverProps {
  didWin: boolean;
  newGame: () => void;
  count: number;
}

const GameOver: FunctionComponent<IGameOverProps> = ({
  didWin,
  newGame,
  count: score,
}) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className={showModal ? "gameOver bgColor" : "gameOver"}>
      {showModal ? (
        <>
          {!didWin ? (
            <>
              <div>game over</div>
              <span>{score}/100</span>
              <span>better luck next time</span>
            </>
          ) : (
            <>
              <div>you won</div>
              <span>{score}/100</span>
              <span>congrats</span>
            </>
          )}
          <div onClick={() => newGame()} className="gNewGame">
            play again
          </div>
          <span className="viewBoard" onClick={() => setShowModal(false)}>
            view board
          </span>
        </>
      ) : (
        <div onClick={() => newGame()} className="showModal">
          new game
        </div>
      )}
    </div>
  );
};

export default GameOver;
