import React, {Component} from 'react'
import CharCard from '../Components/CharCard'
import api from '../api'
import NewChar from '../Components/NewChar'

class CharContainer extends Component {

  state = {

    api

  }

  renderChars = () => {
    return this.state.api.map((char) => <CharCard key={char.name} char={char}/>)
  }

  render () {
    return (
      <div className='char container'>
        <h2>All Characters</h2>
        <div>
          <NewChar />
        </div>
        <div>
          {this.renderChars()}
        </div>
      </div>
    )
  }


}

export default CharContainer