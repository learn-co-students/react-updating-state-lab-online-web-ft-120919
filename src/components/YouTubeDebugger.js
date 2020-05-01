// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{


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
        };
      }

      handleButtonClickOne=()=>{
        this.setState( {
          settings: {
            ...this.state.settings, 
            bitrate: 12
        
          }
        })

      }

      handleButtonClickTwo =() => {
        this.setState( {
          settings: {
            ...this.state.settings,
            video: {
              ...this.state.settings.video,
           
            resolution: '720p'
             } 
          }
        })

      }

      // spreadoperator 

    render(){
        return(
            <div>
                <button onClick={this.handleButtonClickOne} className="bitrate"></button>
                <button onClick={this.handleButtonClickTwo} className="resolution"></button>
            </div>
        )
    }
}