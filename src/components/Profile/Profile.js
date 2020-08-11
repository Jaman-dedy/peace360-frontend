/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "../../hoc/Layout/Layout";
import classes from "./Profile.module.scss";
import Spinner from "../../components/UI/Spinner/Spinner";
import "./Profile.scss";
import Avatar from "../../assets/images/avatar.jpg";
import EditLink from "./EditProfile/EditProfileLink";
import { fetchProfileUser, fetchCurrentUser } from "../../store/actions";
import { fetchMyFollowing, fetchMyFollowers } from "../../store/actions";
import NotFound from "../errors/NotFound/NotFound";
import Wrapper from "../../hoc/Wrapper/Wrapper";

class Profile extends Component {
  handleShowTabs = (event, tabName) => {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  };

  componentWillUpdate = (prevProps) => {
    if (prevProps.authError) {
      window.location.href = "/login";
    }
  };
  componentDidMount = () => {
    this.props.getUser();
    this.props.fetchMyFollowers();
    this.props.fetchMyFollowing();
  };

  render() {
    const { myFollowers: followers } = this.props;
    const { myFollowings: followings } = this.props;

    const { error, profileLoading, loading, current_user } = this.props;
    let followingsList = !followings.length ? (
      <NotFound message="Oops you do not follow any person currently" />
    ) : (
      <Wrapper>
        <span>
          <h3>MY FOLLOWINGS</h3>
        </span>
        <div className={classes.ProfileTab}>
          {followings.map((following) => (
            <div key={following.following._id} className={classes.MyFollowers}>
              <div className={classes.Avatar}>
                <img
                  src={
                    following.following.avatar
                      ? following.following.avatar
                      : Avatar
                  }
                  alt=""
                />
              </div>
              <div className={classes.Name}>{following.following.username}</div>
            </div>
          ))}
        </div>
      </Wrapper>
    );

    let followersList = !followers.length ? (
      <NotFound message="Oops you have no followers by now" />
    ) : (
      <Wrapper>
        <span>
          <h3>MY FOLLOWERS</h3>
        </span>
        <div className={classes.ProfileTab}>
          {followers.map((flwers) => (
            <div key={flwers._id} className={classes.MyFollowers}>
              <div className={classes.Avatar}>
                <img src={flwers.avatar ? flwers.avatar : Avatar} alt="" />
              </div>
              <div className={classes.Name}>{flwers.follower.username}</div>
            </div>
          ))}
        </div>
      </Wrapper>
    );

    return (
      <Layout>
        <div className={classes.Profile}>
          {loading && profileLoading ? (
            <div>
              <Spinner />
            </div>
          ) : (
            <div>
              <div className={classes.Tab}>
                {error !== null &&
                error.data.msg === "There is no profile for this user" ? (
                  <NavLink to="/editProfile">
                    <div className={classes.TabLinks}>Create Profile</div>
                  </NavLink>
                ) : (
                  <div
                    className={classes.TabLinks}
                    onClick={(e) => this.handleShowTabs(e, "Profile")}
                  >
                    Profile
                  </div>
                )}
                <div
                  className={classes.TabLinks}
                  onClick={(e) => this.handleShowTabs(e, "Followers")}
                >
                  Followers
                </div>
                <div
                  className={classes.TabLinks}
                  onClick={(e) => this.handleShowTabs(e, "Following")}
                >
                  Following
                </div>
              </div>

              {current_user ? (
                <div className={classes.FollowMe}>
                  <h2>Follow me on</h2>
                  <div className={classes.SocialMedia}>
                    {current_user.facebook ? (
                      <a
                        target="_blank"
                        href={`https://www.facebook.com/${current_user.facebook}`}
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    ) : null}
                    {current_user.twitter ? (
                      <a
                        target="_blank"
                        href={`https://www.twitter.com/${current_user.twitter}`}
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    ) : null}
                    {current_user.instagram ? (
                      <a
                        target="_blank"
                        href={`https://www.instagram.com/${current_user.instagram}`}
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    ) : null}
                    {current_user.linkedin ? (
                      <a
                        target="_blank"
                        href={`https://www.linkedin.com/in/${current_user.linkedin}`}
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    ) : null}
                    {current_user.youtube ? (
                      <a
                        target="_blank"
                        href={`https://www.youtube.com/${current_user.youtube}`}
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : null}
              <div id="Profile" className="tabContent">
                <span>
                  <h3>ABOUT ME</h3>
                </span>
                <div className={classes.ProfileTab}>
                  <div>
                    <EditLink />
                  </div>
                  <span>
                    <h3>
                      {current_user.username ? current_user.username : ""}
                    </h3>
                  </span>
                  <span className={classes.Location}>
                    {current_user.occupation}
                  </span>
                  <span className={classes.Details}>
                    {current_user.address}
                  </span>
                  <span className={classes.Details}>
                    {current_user.company}
                  </span>
                  <span className={classes.Details}>
                    {current_user.website}
                  </span>
                  <span className={classes.Bio}>
                    <p>{current_user.bio}</p>
                  </span>
                </div>
              </div>
              <div id="Followers" className="tabContent">
                {followersList}
              </div>
              <div id="Following" className="tabContent">
                {followingsList}
              </div>
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMyFollowers,
  fetchMyFollowing,
  getProfile: (id, cd) => dispatch(fetchProfileUser(id, cd)),
  getUser: () => dispatch(fetchCurrentUser()),
});
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
    myFollowers: state.myFollowers.followers,
    myFollowings: state.myFollowings.followings,
    followingError: state.myFollowings.error,
    loadFollowing: state.myFollowings.load,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
