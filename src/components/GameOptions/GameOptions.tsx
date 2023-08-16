import { FunctionComponent } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import GameBoard from "../GameBoard/GameBoard";

// import "react-tabs/style/react-tabs.css";
import "./GameOptions.scss";

const GameOptions: FunctionComponent = () => {
  return (
    <Tabs>
      <TabList className="gameOptions">
        <Tab>6x6</Tab>
        <Tab>8x8</Tab>
        <Tab>10x10</Tab>
      </TabList>

      <TabPanel>
        <GameBoard dimension={6} className="x6" />
      </TabPanel>
      <TabPanel>
        <GameBoard dimension={8} className="x8" />
      </TabPanel>
      <TabPanel>
        <GameBoard dimension={10} className="x10" />
      </TabPanel>
    </Tabs>
  );
};

export default GameOptions;
