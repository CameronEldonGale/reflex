import React, { Component } from 'react';
import logo from './img/Twenty_sided_die.svg';
import './App.css';
import Clock from './clock'
import CharDice from './characterDice'

class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
                rolls: [],
                numberOfRolls: 6
                };
 }
 updateRoll(num){
   this.setState((prevState, props) => {
     prevState.rolls.push(num)
     return { rolls: prevState.rolls }
  });
 }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Reflex</h2>
          <Clock />
        </div>
        <div className="main-container">
          <h2 className="title">character dice</h2>
          <CharDice addRoll={this.updateRoll.bind(this)} numberOfRolls={this.state.numberOfRolls}/>
          <div className="rolls-container">
            {this.state.rolls.map(roll => (
              <div>{roll},</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
