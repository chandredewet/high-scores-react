import React from "react";

const PlayerScore = (props) => {
  return (
    <tr>
      <td className="playerName">{props.n}</td>
      <td>{props.s}</td>
    </tr>
  );
};

export default PlayerScore;
