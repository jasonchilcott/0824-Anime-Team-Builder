
import React, {Component} from 'react'
import './App.css';
import CharContainer from './Containers/CharContainer'
import TeamContainer from './Containers/TeamContainer'

class App extends Component {

  state = {
    team: []
  }

  clickHandler = (char) => {
    let newTeam = [char, ...this.state.team]
    let uniqueNewTeam = Array.from(new Set(newTeam))
    this.setState(() => ({team: uniqueNewTeam}))

  }


  render() {
    return (
      <div className="App">
        <TeamContainer team={this.state.team}/>
        <CharContainer clickHandler={this.clickHandler}/>

      </div>
    );
  }
}

export default App;
