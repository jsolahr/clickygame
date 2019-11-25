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
        <a href ="/"> <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Reset 
            </button></a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <div className="nav-link">
            </div>
          </li>
        </ul>
      </nav>
      <div className="wrapper">
        {props.children}
      </div>
    </div>
  );
}

export default HelloBootstrap;
