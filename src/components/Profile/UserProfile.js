import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../hoc/Layout/Layout";
import classes from "./Profile.module.scss";
import "./userProfile.scss";
import {
  fetchProfileUser,
  fetchCurrentUser,
  // retrieveProfile,
} from "../../store/actions";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }
  componentDidMount = () => {
    if (this.props.current_user) {
      this.props.getProfile(this.props.current_user._id, (cd) => {});
    }
  };

  onclick = () => {
    this.setState({ modalOpen: true });
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
  };
  render() {
    const { current_user, myFollowers, myFollowings } = this.props;
    return (
      <div>
        <Layout>
          <div className={classes.Profile}>
            <div className="profile-row">
              <h1>User Profile</h1>
              <div className="profile-container">
                <div className="image-row">
                  <img src={current_user.avatar} />
                  <h1>{current_user.username}</h1>
                </div>
                <div className="followers-button">
                  <a type="button" className="followers">
                    <span>{myFollowers.followers.length} Followers</span>
                  </a>
                  <a type="button" className="following">
                    <span>{myFollowings.followings.length}</span> Following
                  </a>
                </div>
                <div className="edit-button">
                  {/* <button onClick={this.onclick} type="button">
                    Edit Profile
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    error: state.userProfile.error,
    loading: state.userProfile.loading,
    profile: state.userProfile.profile,
    profileLoading: state.userProfile.loading,
    current_user: state.currentUser.user,
    authError: state.currentUser.error,
    isAuthenticated:
      state.register.token !== null || state.login.token !== null,
    followersError: state.myFollowers.error,
    loadFollowers: state.myFollowers.load,
    myFollowers: state.myFollowers,
    myFollowings: state.myFollowings,
    followingError: state.myFollowings.error,
    loadFollowing: state.myFollowings.load,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // retrieveProfile,
  fetchCurrentUser,
  fetchProfileUser,
  getProfile: (id) => dispatch(fetchProfileUser(id)),
  getUser: () => dispatch(fetchCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
