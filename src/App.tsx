import GameHeader from "./components/GameHeader/GameHeader";
import HowToPlay from "./components/HowToPlay/HowToPlay";

import "./App.scss";
import GameOptions from "./components/GameOptions/GameOptions";

function App() {
  return (
    <div className="App">
      <GameHeader />
      <GameOptions />
      <HowToPlay />
    </div>
  );
}

export default App;
