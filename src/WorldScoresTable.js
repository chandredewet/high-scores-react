import React, { useState } from "react";
import scores from "./scores";
import PlayerScore from "./PlayerScore";

const WorldScoresTable = () => {
  let allScoresArr = [];
  scores.map((country) =>
    country.scores.map((player) => {
      allScoresArr.push(player);
    })
  );
  console.log(allScoresArr);

  return (
    <div className="countrySection">
      <table className="table table-bordered">
        <tbody>
          {allScoresArr
            .sort((a, b) => b.s - a.s)
            .map((player, inx) => (
              <PlayerScore key={inx} n={player.n} s={player.s} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorldScoresTable;
