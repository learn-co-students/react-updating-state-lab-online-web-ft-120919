import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null, 
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }//constructor

  handleBitRateClick = (event) => {
    this.setState({
        settings: {
            ...this.state.settings,
            bitrate: 12
        }
    })
  }//handleBitRateClick

  handleResolutionClick = (event) => {
    this.setState({
        settings: {
            ...this.state.settings,
            video: {
                resolution: '720p'
            }
        }
    })
  }//handleResolutionClick

  render () {
    return (
      <div>
          <button className="bitrate" onClick={this.handleBitRateClick}>Change Bit Rate</button>
          <button className="resolution" onClick={this.handleResolutionClick}>Change Resolution</button>
      </div>
    )//return 
  }//render
}//class

export default YouTubeDebugger; 
