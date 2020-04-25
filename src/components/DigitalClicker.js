import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }//constructor 

  handleClick = (event) => {
    let newTimesClicked = this.state.timesClicked + 1
    this.setState(
        {
          timesClicked: newTimesClicked 
        }
    )
  }//handleClick

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )//return
  }//render
}//class

export default DigitalClicker; 
