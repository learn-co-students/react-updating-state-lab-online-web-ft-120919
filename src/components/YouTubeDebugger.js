import React from 'react'

export default class YoutubeDebugger extends React.Component {

  constructor() {
    super()
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
  }

  handleBitrateClick = () => {
    this.setState(previousState => {
      return { 
        settings: {
          ...previousState.settings,
          bitrate: 12
        }
      }
    })
  }

  handleResolutionClick = () => {
    this.setState(previousState => {
      return {
        settings: {
          ...previousState.settings,
          video: {
            ...previousState.video,
            resolution: '720p'
          }
        }
      }
    })
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick}>
            Bitrate
        </button>
        <button onClick={this.handleResolutionClick} className="resolution">
          Resolution
        </button>
      </div>
    )
  }
}
