import React from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function DogCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
       
        <span onClick={() => props.shuffleDog(props.id)} className="shuffle"><button className="btn btn-primary">Click</button>
        </span>
      </div>
    );
  }


export default DogCard;
