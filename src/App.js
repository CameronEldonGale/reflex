import React, { Component } from 'react';
import logo from './img/Twenty_sided_die.svg';
import './App.css';
import Clock from './clock'
import Die from './die'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Reflex</h2>
          <Clock />
        </div>
        <p className="App-intro">
          stuff here
        </p>
        <Die sides='6' />
      </div>
    );
  }
}

export default App;
