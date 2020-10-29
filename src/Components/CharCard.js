import React, {Component} from 'react'


const CharCard = (props) => {

  const clickHandler = () => {
    props.clickHandler(props.char)
  }

  return(
    <div className='char-card' onClick={clickHandler}>
      <img src={props.char.img} alt={props.char.name}></img>
      <h3>Name: {props.char.name}</h3>
      <h4>Show: {props.char.show}</h4>
    </div>
  )
}

export default CharCard