import React, { Component } from 'react';
import dice from './img/200px-2-Dice-Icon.svg.png';
import Die from './die'
import './characterDice.css';


class CharacterDice extends Component {
  constructor(props) {
   super(props);
   this.state = {
                result: 0,
                rolled: 0,
                input: [0,0,0,0],
                };
  this.handleClick = this.handleClick.bind(this)
  this.createDie = this.createDie.bind(this)
  this.createDice = this.createDice.bind(this)
 }
 createDice(inputArr){
   function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var output =inputArr.map(function() {
      return getRandomIntInclusive(1,6)
    })
    this.setState( { result: output.sort().slice(1).reduce(( acc, cur ) => acc + cur, 0 ) })
    return output
   }

 handleClick(){
   this.setState({ rolled: this.state.rolled + 1, input: this.createDice(this.state.input)})

 }

 createDie(currentValue, index, array){
   return(
      <Die key={index} sides='6' result={currentValue} />
   )
 }

  render(){

    return (
      <div className="dice-container">
      <button disabled={this.state.rolled == this.props.numberOfRolls}className="die-btn" onClick={this.handleClick}>Roll <img src={dice} className="dice" alt="dice" /></button>
         {this.state.input.map(this.createDie)}
        <h2>{this.state.result}</h2>
      </div>
    );
  }
}

export default CharacterDice;
