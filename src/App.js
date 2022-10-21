import React from "react";
import Scoretitle from "./Scoretitle";
import HighScoreTable from "./HighScoreTable";
import WorldScoresTable from "./WorldScoresTable";

const App = () => {
  return (
    <div>
      <Scoretitle secTitle="World High Scores" />
      <WorldScoresTable />
      <Scoretitle secTitle="High Scores per Country" />
      <HighScoreTable />
    </div>
  );
};

export default App;
