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
                input: [],

                };
  this.handleClick = this.handleClick.bind(this)
  // this.updateTotal = this.updateTotal.bind(this)
 }

 handleClick(){
   this.setState({ rolled: this.state.rolled + 1, result: 0, input: []})
 }
 updateTotal(num){
   this.setState((prevState, props) => {
     prevState.input.push(num)
  return {result: prevState.result + num , input: prevState.input.sort() }
  });
 }
  componentDidUpdate(prevProps, prevState){
    if (this.state.input.length === 4) {
      this.state.input.shift()
      this.setState({result: this.state.input.reduce( (prev, curr) => prev + curr ) })
      this.props.addRoll(this.state.input.reduce( (prev, curr) => prev + curr ) )
    }

  }

  render(){

    return (
      <div className="dice-container">
      <button disabled={this.state.rolled == this.props.numberOfRolls}className="die-btn" onClick={this.handleClick}>Roll <img src={dice} className="dice" alt="dice" /></button>
        <Die sides='6' rolled={this.state.rolled} update={this.updateTotal.bind(this)} />
        <Die sides='6' rolled={this.state.rolled} update={this.updateTotal.bind(this)} />
        <Die sides='6' rolled={this.state.rolled} update={this.updateTotal.bind(this)} />
        <Die sides='6' rolled={this.state.rolled} update={this.updateTotal.bind(this)} />

        <h2>{this.state.result}</h2>
      </div>
    );
  }
}

export default CharacterDice;
