import React from "react";

function HelloBootstrap() {
  return (
   
    <div className="container">
      <div className="jumbotron">
        <h1>Clicky Game</h1>
        <p>
          <button className="btn btn-primary btn-lg">Learn more</button>
        </p>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Card title</h3>
        </div>
        <div className="card-body">
        <img src="https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/1567916337-GettyImages-160987733-e1567916463401-960x540.jpg" alt="doggie"></img>
          <p className="card-text">Card content</p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Card title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Card content</p>
        </div>
      </div>
    </div>
  );
}

export default HelloBootstrap;
