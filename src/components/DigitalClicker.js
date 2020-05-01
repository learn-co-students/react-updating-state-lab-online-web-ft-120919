// Code DigitalClicker Component Here
import React, { Component } from 'react'

export class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0

        }
    }
    handleClick = () => {
        let newClickedTimes = this.state.timesClicked +1
        this.setState( {
            timesClicked: newClickedTimes
        })
    }

    render() {
        return (
            <div>
               <button onClick={this.handleClick}>{this.state.timesClicked}</button> 
            </div>
        )
    }
}

export default DigitalClicker
