import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
   super(props);
   this.state = {time: new Date()};
 }
 componentDidMount() {
   this.timerID = setInterval(
     () => this.tick(),
     1000
   );
 }

 componentWillUnmount() {
  clearInterval(this.timerID);
}
   tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
     console.log(this.state.time);
    return (
      <div>
        I'm a clock! {this.state.time.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
