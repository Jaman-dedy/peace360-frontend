import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../../store/actions/index';
import classes from './Like.module.scss';

class like extends Component {
  state = {
    isLiked: false
  };
  switchLikedHandle = () => {
    if (!this.props.isAuthenticated) {
      this.props.onSetRedirectPath();
    }
    this.setState(prevState => {
      return { isLiked: !prevState.isLiked };
    });
  };
  render() {
    const redirectPath = <Redirect to={this.props.redirectPath} />;
    return (
      <div
        className={
          this.state.isLiked
            ? [classes.Like, classes.Clicked].join(' ')
            : classes.Like
        }
        onClick={this.switchLikedHandle}
      >
        {redirectPath}
        <i className="fas fa-heart" tabIndex="0"></i>
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
    redirectPath: state.login.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetRedirectPath: () => dispatch(actions.setAuthRedirectPath('/login'))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(like);
