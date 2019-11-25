import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import dogs from "./dogs.json";
import HelloBootstrap from "./components/HelloBootstrap/HelloBootstrap"
import DogCard from "./components/DogCard"
import Score from "./components/Score"



class App extends Component {

state = {
  dogs,
  dogsArray: [],
  score: 0,
  message: ""
};

shuffleDog = id => {
  // Filter this.state.dogs for dogs with an id not equal to the id being removed

  const dogsArray = this.state.dogsArray;

  if(dogsArray.includes(id)){
    this.setState({dogsArray: [], score:0, message: "You Lost!"});
    return;
  }else {
    dogsArray.push(id)
    if (dogsArray.length === 12) {
      this.setState({dogsArray: [], score: 12, status: "You Won!"});
      return;
    }
    this.setState({dogs, dogsArray, score: dogsArray.length, status: ""});
  } 

  // Set this.state.friends equal to the new friends array
  this.setState({ dogs });
};

render() {

  return (
    <HelloBootstrap>
       <Score total={this.state.score}
               message={this.state.message}
               />
      {this.state.dogs.map(dogs => (
        <DogCard
          shuffleDog={this.shuffleDog}
          id={dogs.id}
          key={dogs.id}
          image={dogs.image}
        />
      ))}
    </HelloBootstrap>
  );
}
}
export default App;
