import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import dogs from "./dogs.json";
import HelloBootstrap from "./components/HelloBootstrap/HelloBootstrap"
import DogCard from "./components/DogCard"


class App extends Component {

state = {
  dogs
};

shuffleDog = id => {
  // Filter this.state.friends for friends with an id not equal to the id being removed

  const dogs = this.state.dogs.filter(dogs => dogs.id !== id);

  // Set this.state.friends equal to the new friends array
  this.setState({ dogs });
};

render() {

  return (

    <HelloBootstrap>
      {this.state.dogs.map(dogs => (
        <DogCard
          shuffleDog={this.shuffleDog}
          id={dogs.id}
          key={dogs.id}
          name={dogs.name}
          image={dogs.image}
        />
      ))}
    </HelloBootstrap>
  );
}
}
export default App;
