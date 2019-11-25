import React from "react";
import "./HelloBootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const HelloBootstrap = props => (
  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">Clicky Game
    </div>
    <ul className="nav navbar-nav">
      <li className="active">Score: </li>
    </ul>
  </div>
</nav>

);


export default HelloBootstrap;
