import React, { useState } from "react";
import scores from "./scores";
import PlayerScore from "./PlayerScore";

const HighScoreTable = () => {
  // let allScores = scores.map((country,inx) => {

  // } filter(el => )
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

  const [sortDescending, setSortDescending] = useState(false);
  const [btnOrd, setBtnOrd] = useState("▼");

  const sortOrder = () => {
    if (sortDescending) {
      setSortDescending(false);
      scores.map((country, index) => sortMyData(country.scores));
      setBtnOrd("▼");
    } else {
      setSortDescending(true);
      scores.map((country, index) => sortMyData(country.scores));
      setBtnOrd("▲");
    }
  };
  function sortMyData(myData) {
    if (sortDescending) {
      myData.sort((a, b) => a.s - b.s);
    } else {
      myData.sort((a, b) => b.s - a.s);
    }
    return myData;
  }

  return (
    <div>
      <div className="btnLayout">
        <button onClick={sortOrder} className="sortOrderButton">
          SORT SCORES ORDER <span className="des">{btnOrd}</span>
        </button>
      </div>
      {scores.map((country, index) => (
        <div className="countrySection" key={index}>
          <h2>
            HIGH SCORES:<span className="uniqueCountry">{country.name}</span>
          </h2>
          <table className="table table-bordered">
            <tbody>
              {sortMyData(country.scores).map((player, inx) => (
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
