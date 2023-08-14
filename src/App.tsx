import GameHeader from "./components/GameHeader/GameHeader";
import GameBoard from "./components/GameBoard/GameBoard";
import HowToPlay from "./components/HowToPlay/HowToPlay";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <GameHeader />
      <GameBoard />
      <HowToPlay />
    </div>
  );
}

export default App;
