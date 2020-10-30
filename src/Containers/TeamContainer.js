import React, {Component} from 'react'
import CharCard from '../Components/CharCard'

class TeamContainer extends Component {

  

  renderChars = () => {
    return this.props.team.map((char) => <CharCard key={char.name} char={char}/>)
  }

  render () {
    return (
      <div className='team container'>
        <h2>Team</h2>
        <div id='rtl'>
          {this.renderChars()}
        </div>
      </div>
    )
  }


}

export default TeamContainer