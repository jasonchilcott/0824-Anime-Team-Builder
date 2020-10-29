import React, {Component} from 'react'

class NewChar extends Component() {

  state = {
    name: "",
    show: "",
    img: ""

  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  
  render(){
    return (
      <form>
        <input name='name' type='text' placeholder='enter name' value={this.state.name} onChange={this.changeHandler}></input>
        <input name='show' type='text' placeholder='enter show' value={this.state.show} onChange={this.changeHandler}></input>
        <input name='img' type='text' placeholder='enter image source' value={this.state.image} onChange={this.changeHandler}></input>
        
      </form>
    )
  }
}

export default NewChar