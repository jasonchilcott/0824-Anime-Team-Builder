import React, {Component} from 'react'
import CharCard from '../Components/CharCard'

class TeamContainer extends Component {

  state = {
  }

  renderChars = () => {
    //return this.props.map((char) => <CharCard key={char.name} char={char}/>)
  }

  render () {
    return (
      <div className='team container'>
        <h2>Team</h2>
        <div>
          {this.renderChars()}
        </div>
      </div>
    )
  }


}

export default TeamContainer