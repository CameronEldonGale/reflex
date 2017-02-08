import React, { Component } from 'react';
import dice from './img/200px-2-Dice-Icon.svg.png';
import die123 from './img/die-123.svg';
import die456 from './img/die-456.svg'
import './die.css';



class Die extends Component {
  render() {
    const diceMapping = {
      0: { img: die123, angle: '0deg' },
      1: { img: die123, angle: '0deg' },
      2: { img: die123, angle: '120deg' },
      3: { img: die123, angle: '240deg' },
      4: { img: die456, angle: '120deg' },
      5: { img: die456, angle: '240deg' },
      6: { img: die456, angle: '0deg' }
    }
    var css = {
      transform: "rotate("+ diceMapping[this.props.result]['angle'] +")"
    }
    return (
      <div className="dice-container">
        <img src={diceMapping[this.props.result]['img']} className="dice" alt="die"  style={css}/>
          <h2>{this.props.result}</h2>
      </div>
    );
  }
}

export default Die;



// import logo from './Twenty_sided_die.svg';
//
//           <img src={logo} className="App-logo" alt="logo" />
