import { FunctionComponent, useState } from "react";
import "./GameOver.scss";

interface IGameOverProps {
  didWin: boolean;
  count: number;
  outOf: number;
  setStartNewGame: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameOver: FunctionComponent<IGameOverProps> = ({
  didWin,
  count: score,
  outOf,
  setStartNewGame,
}) => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className={showModal ? "gameOver bgColor" : "gameOver"}>
      {showModal ? (
        <>
          {!didWin ? (
            <>
              <div>game over</div>
              <span>
                {score}/{outOf}
              </span>
              <span>better luck next time</span>
            </>
          ) : (
            <>
              <div>you won</div>
              <span>
                {score}/{outOf}
              </span>
              <span>congrats</span>
            </>
          )}
          <div onClick={() => setStartNewGame(true)} className="gNewGame">
            play again
          </div>
          <span className="viewBoard" onClick={() => setShowModal(false)}>
            view board
          </span>
        </>
      ) : (
        <div onClick={() => setStartNewGame(true)} className="showModal">
          new game
        </div>
      )}
    </div>
  );
};

export default GameOver;
