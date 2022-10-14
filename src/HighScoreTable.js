import React from "react";
import scores from "./scores";
import PlayerScore from "./PlayerScore";

const HighScoreTable = () => {
  return (
    <div>
      {scores.map((country, index) => (
        <div key={index}>
          <h2>HIGH SCORES:{country.name}</h2>
          {country.scores.map((player, inx) => (
            <PlayerScore key={inx} n={player.n} s={player.s} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default HighScoreTable;
