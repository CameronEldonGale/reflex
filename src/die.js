import React, { Component } from 'react';
import dice from './img/200px-2-Dice-Icon.svg.png';
import die123 from './img/die-123.svg';
import die456 from './img/die-456.svg'
import './die.css';



class Die extends Component {
  constructor(props) {
   super(props);
   this.state = {
                result: 0,
                img: die123,
                angle: 0,

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

    const diceMapping = {
      1: { img: die123, angle: '0deg' },
      2: { img: die123, angle: '120deg' },
      3: { img: die123, angle: '240deg' },
      4: { img: die456, angle: '120deg' },
      5: { img: die456, angle: '240deg' },
      6: { img: die456, angle: '0deg' }
    }

    let result = getRandomIntInclusive(1, this.props.sides)
    this.setState({
      result: result,
      img: diceMapping[result]['img'],
      angle: diceMapping[result]['angle'],
    });


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



// import logo from './Twenty_sided_die.svg';
//
//           <img src={logo} className="App-logo" alt="logo" />
