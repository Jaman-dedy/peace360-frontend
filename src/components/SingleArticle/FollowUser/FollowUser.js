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
import FollowButton from "./FollowButton";
import { fetchMyFollowing } from "../../../store/actions/getFollowing";

const FOLLOW = "Follow";
const UNFOLLOW = "Unfollow";

export class FollowUser extends Component {
  render() {
    const { user = {}, article } = this.props;

    return (
      <div className={classes.FollowUser}>
        <div className={classes.Avatar}>
          <img src={user ? user.avatar : userAvatar} alt="" />
        </div>
        <div className={classes.UserName}>
          {user ? user.username : "Peace Activist"}
        </div>
        <div className={classes.Details}>
          <span className="heading__munite">
            <Moment fromNow>{article.date}</Moment>, {article.readTime}
          </span>
        </div>
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
)(withRouter(FollowUser));
