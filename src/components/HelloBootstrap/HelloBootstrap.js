import React from "react";

function HelloBootstrap(props) {
  return (

     <div className="container">{props.children}</div>,
      <div className="jumbotron">
        <h1>Clicky Game</h1>
        <p>
          <button className="btn btn-primary btn-lg">Click to shuffle</button>
        </p>
        <h2>Score:</h2>
      </div>
  
  );
}

export default HelloBootstrap;
