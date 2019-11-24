import React, {Component} from 'react';
import './App.css';
import dogs from "./dogs.json";
import HelloBootstrap from "./components/HelloBootstrap"
import Wrapper from "./components/Wrapper"


class App extends Component {

state = {
  dogs
};

removeDog = id => {
  // Filter this.state.friends for friends with an id not equal to the id being removed
  const dogs = this.state.dogs.filter(dogs => dogs.id !== id);
  // Set this.state.friends equal to the new friends array
  this.setState({ dogs });
};

render() {
  return (
    <Wrapper></Wrapper>,
<HelloBootstrap></HelloBootstrap>

  )
}
}
export default App;
