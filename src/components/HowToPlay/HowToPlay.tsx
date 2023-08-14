import { FunctionComponent } from "react";

import "./HowToPlay.scss";

const HowToPlay: FunctionComponent = () => {
  return (
    <div className="howToPlay">
      {/* blue is where you've been. green is where you are. pink is where you're
      going.
      <br />
      <br /> */}
      <div>
        <span>how to play:</span> when moving horizontally or vertically you
        skip two squares. on diagonals you skip one. fill all 100 squares.
      </div>
      <br />
      <div>if you're still confused just follow the pink.</div>
    </div>
  );
};

export default HowToPlay;
