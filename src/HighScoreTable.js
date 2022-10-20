import React from "react";
import scores from "./scores";
import PlayerScore from "./PlayerScore";
import "./HighScoreTable.css";

const HighScoreTable = () => {
  scores.sort((a, b) => {
    const nameA = a.name;
    const nameB = b.name;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });

  // console.log(newArr);
  return (
    <div>
      {scores.map((country, index) => (
        <div className="countrySection" key={index}>
          <h2>
            HIGH SCORES:<span className="uniqueCountry">{country.name}</span>
          </h2>
          <table className="table table-bordered">
            <tbody>
              {country.scores.map((player, inx) => (
                <PlayerScore key={inx} n={player.n} s={player.s} />
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default HighScoreTable;
