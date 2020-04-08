import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import classes from './FollowUser.module.scss';
import * as actions from '../../../store/actions/index';
import userAvatar from '../../../assets/images/avatar.jpg';

class FollowUser extends Component {
  state = {
    isFollowed: true,
    followerId: null,
  };
  switchFavoriteUserHandle = (articleId) => {
    if (!this.props.isAuthenticated) {
      this.props.onSetRedirectPath();
    }
    this.setState((prevState) => {
      return { isFollowed: !prevState.isFollowed };
    });

    this.props.onFollowUser(articleId);
  };
  componentWillReceiveProps(nextProps) {
    const { followings } = this.props.myFollowings;

    let myFlwings;

    if (followings) {
      myFlwings = followings.map((flwings) => {
        myFlwings = flwings.username === nextProps.user.username;

        if (myFlwings) {
          this.setState({ isFollowed: false });
        } else {
          this.setState({ isFollowed: true });
        }
        return myFlwings;
      });
    }
  }
  componentDidMount() {
    const { user } = this.props;
    const { followings } = this.props.myFollowings;

    let myFlwings;

    if (followings && user) {
      myFlwings = followings.map((flwings) => {
        myFlwings = flwings.username === user.username;

        if (myFlwings) {
          this.setState({ isFollowed: false });
        } else {
          this.setState({ isFollowed: true });
        }
        return myFlwings;
      });
    }
  }

  render() {
    const redirectPath = <Redirect to={this.props.redirectPath} />;
    const { articleId = {} } = this.props;
    const { myFollowers = {} } = this.props;
    const { user = {} } = this.props;
    const { currentUser = {} } = this.props;

    const followBox =
      user.id !== currentUser.user._id ? (
        <div
          className={
            this.state.isFollowed ? classes.FollowBox : classes.UnFollowBox
          }
          onClick={(e) => this.switchFavoriteUserHandle(articleId)}
        >
          {this.state.isFollowed ? 'Follow' : 'UnFollow'}
        </div>
      ) : (
        ''
      );

    return (
      <div className={classes.FollowUser}>
        {redirectPath}
        <div className={classes.Avatar}>
          <img src={user ? user.avatar : userAvatar} alt="" />
        </div>
        <div className={classes.UserName}>
          {user ? user.username : 'Peace Activist'}
        </div>
        {followBox}
        <div className={classes.Details}>Dec 25, 6 min read</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    loading: state.currentUser.loading,
    isAuthenticated:
      state.login.token !== null || state.register.token !== null,
    redirectPath:
      state.login.authRedirectPath || state.register.authRedirectPath,
    errorOnFollow: state.followUser.error,
    followersError: state.myFollowers.error,
    loadFollowers: state.myFollowers.load,
    myFollowers: state.myFollowers,
    myFollowings: state.myFollowings,
    followingError: state.myFollowings.error,
    loadFollowing: state.myFollowings.load,
    singleArticle: state.fetchSingleArticle.article,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetRedirectPath: () => dispatch(actions.setAuthRedirectPath('/login')),
    onFollowUser: (articleId) => dispatch(actions.followUser(articleId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowUser);
