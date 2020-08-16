import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import classes from "./FollowUser.module.scss";
import "./follow.scss";
import userAvatar from "../../../assets/images/avatar.jpg";
import {
  followUser,
  unfollowUser,
  clearFollowing,
} from "../../../store/actions/followUser";
import { fetchMyFollowing } from "../../../store/actions/getFollowing";

const FOLLOW = "Follow";
const UNFOLLOW = "Unfollow";

export class FollowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: FOLLOW,
      unfollowButtonStyle: {
        backgroundColor: "#7aadcf",
        color: "white",
        border: "1px solid #7aadcf",
      },
    };
  }

  UNSAFE_componentWillMount = () => {
    const { props } = this;
    this.setState((prevState) => ({
      ...prevState,
      buttonState: FOLLOW,
    }));
    return localStorage.token ? props.fetchMyFollowing() : false;
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    const { followings, followDetails } = nextProps;
    const { currentUser, user } = this.props;
    const { id } = user || this.props || {};
    const { _id } = currentUser.user || {};
    let buttonState = FOLLOW;

    [...followings, ...followDetails].forEach(({ follower, following }) => {
      if (
        (follower._id === _id && following._id === id) ||
        (follower === _id && following === id)
      ) {
        buttonState = UNFOLLOW;
      }
      return true;
    });

    return this.setState((prevState) => ({
      ...prevState,
      buttonState,
    }));
  };

  submitFollowOrUnFollow = () => {
    const { isAuthenticated } = this.props;
    return !!isAuthenticated;
  };

  handleClick = () => {
    const { pathname, history } = this.props;
    if (!this.submitFollowOrUnFollow()) {
      return history.push(`/login?redirectTo=${pathname}`);
    }
    const { buttonState } = this.state;
    const { followUser, unfollowUser, user, id } = this.props;
    this.setState((prevState) => ({
      ...prevState,
      buttonState: buttonState === UNFOLLOW ? FOLLOW : prevState.buttonState,
    }));
    if (user) {
      return buttonState === FOLLOW
        ? followUser(user.id)
        : unfollowUser(user.id);
    } else {
      return buttonState === FOLLOW ? followUser(id) : unfollowUser(id);
    }
  };
  componentWillUnmount() {
    window.location.reload(false);
  }

  render() {
    const { buttonState, unfollowButtonStyle } = this.state;

    return (
      <div className="Follow__button">
        <button
          className="button"
          style={buttonState === UNFOLLOW ? unfollowButtonStyle : {}}
          type="button"
          onClick={this.handleClick}
          value={buttonState}
        >
          {buttonState}
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  followUser,
  unfollowUser,
  fetchMyFollowing,
  clearFollowing,
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  isAuthenticated: state.login.token !== null || state.register.token !== null,
  followDetails: state.followUser.followDetails,
  followings: state.myFollowings.followings,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FollowButton));
