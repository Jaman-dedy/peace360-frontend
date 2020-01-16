import React, { Component } from 'react';
import classes from './Like.module.scss';

class like extends Component {
  state = {
    isLiked: false
  };
  switchLikedHandle = () => {
    this.setState(prevState => {
      return { isLiked: !prevState.isLiked };
    });
  };
  render() {
    return (
      <div
        className={
          this.state.isLiked
            ? [classes.Like, classes.Clicked].join(' ')
            : classes.Like
        }
        onClick={this.switchLikedHandle}
      >
        <i className="fas fa-heart" tabIndex="0"></i>
      </div>
    );
  }
}

export default like;
