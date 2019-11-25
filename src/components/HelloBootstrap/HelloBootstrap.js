import React from "react";
import "./HelloBootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

function HelloBootstrap(props) {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand">
          Clicky Game
        </div>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Score:  <span className="sr-only">(current)</span>
              </a>
            </li>
            </ul>
            </div>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Shuffle
            </button>
      </nav>
      <div className="jumbotron">
      <div className="wrapper">
        {props.children}
        </div>
        </div>
    </div>
  );
}

export default HelloBootstrap;
