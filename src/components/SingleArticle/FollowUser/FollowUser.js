import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import classes from './FollowUser.module.scss';
import * as actions from '../../../store/actions/index';
import userAvatar from '../../../assets/images/avatar.jpg';

class FollowUser extends Component {
  state = {
    isFollowed: true
  };
  switchFavoriteUserHandle = () => {
    if (!this.props.isAuthenticated) {
      this.props.onSetRedirectPath();
    }
    this.setState(prevState => {
      return { isFollowed: !prevState.isFollowed };
    });
  };
  render() {
    const redirectPath = <Redirect to={this.props.redirectPath} />;

    return (
      <div className={classes.FollowUser}>
        {redirectPath}
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

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loading: state.currentUser.loading,
    isAuthenticated:
      state.login.token !== null || state.register.token !== null,
    redirectPath:
      state.login.authRedirectPath || state.register.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetRedirectPath: () => dispatch(actions.setAuthRedirectPath('/login'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowUser);
