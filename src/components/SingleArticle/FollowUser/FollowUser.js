import React, { Component } from 'react';
import classes from './FollowUser.module.scss';
import userAvatar from '../../../assets/images/avatar.jpg';

class FollowUser extends Component {
  state = {
    isFollowed: true
  };
  switchFavoriteUserHandle = () => {
    this.setState(prevState => {
      return { isFollowed: !prevState.isFollowed };
    });
  };
  render() {
    return (
      <div className={classes.FollowUser}>
        <div className={classes.Avatar}>
          <img src={userAvatar} alt="" />
        </div>
        <div className={classes.UserName}>Emanuel Bush</div>
        <div
          className={
            this.state.isFollowed ? classes.FollowBox : classes.UnFollowBox
          }
          onClick={this.switchFavoriteUserHandle}
        >
          {this.state.isFollowed ? 'Follow' : 'UnFollow'}
        </div>
        <div className={classes.Details}>Dec 25, 6 min read</div>
      </div>
    );
  }
}

export default FollowUser;
