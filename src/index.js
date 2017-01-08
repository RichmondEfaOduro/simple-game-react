import React, { Component } from 'react';
import { render }           from 'react-dom';
//import mediaDevice          from './services/MediaDevices';

class App extends Component {

  handleClick() {
    let video = document.querySelector('video')
    navigator.mediaDevices.getUserMedia({audio: true, video: true })
    .then((mediaStream) => {
       video.srcObject = mediaStream;
       video.play()
     });
  }

  render () {
    return (
      <div>
        <h1> Hello </h1>
        <video ref="video"></video>
        <button onClick={this.handleClick}> play</button>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
