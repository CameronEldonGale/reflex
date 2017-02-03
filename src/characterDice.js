import React, { Component } from 'react';
import dice from './img/200px-2-Dice-Icon.svg.png';
import Die from './die'
import './characterDice.css';


class CharacterDice extends Component {
  constructor(props) {
   super(props);
   this.state = {
                result: 0,
                };
   this.handleClick = this.handleClick.bind(this);
 }

 handleClick(){
  //  console.log(   this.props.sides );
   function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }



  render() {
    var css = {
      transform: "rotate("+ this.state.angle +")"
    }
    return (
      <div className="dice-container">
      <button className="die-btn" onClick={this.handleClick}>Roll <img src={dice} className="dice" alt="dice" /></button>
        <img src={this.state.img} className="dice" alt="die"  style={css}/>
        <h2>{this.state.result}</h2>
      </div>
    );
  }
}

export default Die;
