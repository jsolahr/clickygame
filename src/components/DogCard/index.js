import React from "react";
import "./index.css";

function DogCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
          </ul>
        </div>
        <span onClick={() => props.shuffleDog(props.id)} className="shuffle"> <button>Click</button>
        </span>
      </div>
    );
  }


export default DogCard;
