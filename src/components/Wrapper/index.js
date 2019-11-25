import React from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
