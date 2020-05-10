import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../../store/actions/index';
import classes from './Like.module.scss';

class like extends Component {
  state = {
    isLiked: false,
  };
  switchLikedHandle = (articleId) => {
    if (!this.props.isAuthenticated) {
      this.props.onSetRedirectPath();
    }
    this.setState((prevState) => {
      return { isLiked: !prevState.isLiked };
    });
    this.props.onLikeArticle(articleId);
  };
  componentWillReceiveProps(nextProps) {
    const { articleId, likeArticle, likedObject } = nextProps;

    if (likedObject && articleId) {
      if (likedObject.length) {
        likedObject.map((liked) => {
          if (liked.articleId === articleId && this.props.isAuthenticated) {
            this.setState({ isLiked: true });
          } else {
            this.setState({ isLiked: false });
          }
        });
      }
    }

    if (likeArticle.state) {
      if (likeArticle.state === 'dislike') {
        this.setState({ isLiked: false });
      } else {
        this.setState({ isLiked: true });
      }
    }
  }
  render() {
    const { articleId } = this.props;
    const redirectPath = <Redirect to={this.props.redirectPath} />;
    return (
      <div
        className={
          this.state.isLiked
            ? [classes.Like, classes.Clicked].join(' ')
            : classes.Like
        }
        onClick={(e) => this.switchLikedHandle(articleId)}
      >
        {redirectPath}
        <i className="fas fa-heart" tabIndex="0"></i>
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
    redirectPath: state.login.authRedirectPath,
    likeArticle: state.likeArticle.liked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetRedirectPath: () => dispatch(actions.setAuthRedirectPath('/login')),
    onLikeArticle: (articleId) => dispatch(actions.likeArticle(articleId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(like);
