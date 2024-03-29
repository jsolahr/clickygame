import React from "react";

const Score = props => (
  <div className="container">
    <h3 className="score">Your Score: {props.total}</h3>
    <h3 className="message">{props.message}</h3>
  </div>
);

export default Score;