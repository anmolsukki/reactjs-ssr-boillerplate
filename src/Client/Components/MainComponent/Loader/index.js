import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as loadingAnimation from './loading.json';

class LottieComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: loadingAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div className="loader ">
        <div className="lottie-container">
          <Lottie options={defaultOptions} height={300} width={300} isStopped={this.state.isStopped} isPaused={this.state.isPaused} />
          <p className="subtitle loading-text">{this.props.loading}</p>
        </div>
      </div>
    );
  }
}

export default LottieComponent;
