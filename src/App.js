import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import CharContainer from './Containers/CharContainer'
import TeamContainer from './Containers/TeamContainer'

class App extends Component {

  clickHandler = (char) => {

  }

  
  render() {
    return (
      <div className="App">
        <TeamContainer />
        <CharContainer clickHandler/>

      </div>
    );
  }
}

export default App;
