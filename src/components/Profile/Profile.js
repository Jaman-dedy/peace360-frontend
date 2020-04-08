/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../../hoc/Layout/Layout';
import classes from './Profile.module.scss';
import Spinner from '../../components/UI/Spinner/Spinner';
import './Profile.scss';
import postImg from '../../assets/images/experience1.jpg';
import Avatar from '../../assets/images/avatar.jpg';
import EditLink from './EditProfile/EditProfileLink';
import { fetchProfileUser, fetchCurrentUser } from '../../store/actions';
import * as actions from '../../store/actions/index';
import NotFound from '../errors/NotFound/NotFound';
import Aux from '../../hoc/Aux/Aux';

class Profile extends Component {
  handleShowTabs = (event, tabName) => {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName('tabContent');
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = 'none';
    }
    tabLinks = document.getElementsByClassName('tabLinks');
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.className += ' active';
  };

  componentWillUpdate = (prevProps) => {
    if (prevProps.authError) {
      window.location.href = '/login';
    }
  };
  componentDidMount = () => {
    this.props.getUser((user) => {
      this.props.getProfile(user._id, (cd) => {});
    });

   
  };

  render() {
    const {
      profile,
      error,
      profileLoading,
      loading,
      current_user,
      followingError = {},
      followersError = {},
    } = this.props;
    let followings = followingError ? (
      <NotFound message={followingError.msg} />
    ) : (
      <Aux>
        <span>
          <h3>MY FOLLOWINGS</h3>
        </span>
        <div className={classes.ProfileTab}>
          <div className={classes.MyFollowers}>
            <div className={classes.Avatar}>
              <img src={Avatar} alt="" />
            </div>
            <div className={classes.Name}>Emanuel Bush</div>
            <div className={classes.UnFollow}>UnFollow</div>
          </div>
          <div className={classes.MyFollowers}>
            <div className={classes.Avatar}>
              <img src={Avatar} alt="" />
            </div>
            <div className={classes.Name}>Emanuel Bush</div>
            <div className={classes.UnFollow}>UnFollow</div>
          </div>
          <div className={classes.MyFollowers}>
            <div className={classes.Avatar}>
              <img src={Avatar} alt="" />
            </div>
            <div className={classes.Name}>Emanuel Bush</div>
            <div className={classes.UnFollow}>UnFollow</div>
          </div>
        </div>
      </Aux>
    );
    let followers = followersError ? (
      <NotFound message={followersError.msg} />
    ) : (
      <Aux>
        <span>
          <h3>MY FOLLOWERS</h3>
        </span>
        <div className={classes.ProfileTab}>
          <div className={classes.MyFollowers}>
            <div className={classes.Avatar}>
              <img src={Avatar} alt="" />
            </div>
            <div className={classes.Name}>Emanuel Bush</div>
            <div className={classes.Follow}>Follow</div>
          </div>
          <div className={classes.MyFollowers}>
            <div className={classes.Avatar}>
              <img src={Avatar} alt="" />
            </div>
            <div className={classes.Name}>Emanuel Bush</div>
            <div className={classes.Follow}>Follow</div>
          </div>
          <div className={classes.MyFollowers}>
            <div className={classes.Avatar}>
              <img src={Avatar} alt="" />
            </div>
            <div className={classes.Name}>Emanuel Bush</div>
            <div className={classes.Follow}>Follow</div>
          </div>
        </div>
      </Aux>
    );
    const { skills } = profile;

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
                error.data.msg === 'There is no profile for this user' ? (
                  <NavLink to="/editProfile">
                    <div className={classes.TabLinks}>Create Profile</div>
                  </NavLink>
                ) : (
                  <div
                    className={classes.TabLinks}
                    onClick={(e) => this.handleShowTabs(e, 'Profile')}
                  >
                    Profile
                  </div>
                )}

                <div
                  className={classes.TabLinks}
                  onClick={(e) => this.handleShowTabs(e, 'Posts')}
                >
                  Posts
                </div>
                <div
                  className={classes.TabLinks}
                  onClick={(e) => this.handleShowTabs(e, 'Likes')}
                >
                  Likes
                </div>
                <div
                  className={classes.TabLinks}
                  onClick={(e) => this.handleShowTabs(e, 'Followers')}
                >
                  Followers
                </div>
                <div
                  className={classes.TabLinks}
                  onClick={(e) => this.handleShowTabs(e, 'Following')}
                >
                  Following
                </div>
              </div>
              {profile.social ? (
                <div className={classes.FollowMe}>
                  <h2>Follow me on</h2>
                  <div className={classes.SocialMedia}>
                    {profile.social.facebook ? (
                      <Link to={`web.facebook.com/${profile.social.facebook}`}>
                        <i className="fab fa-facebook"></i>
                      </Link>
                    ) : null}
                    {profile.social.twitter ? (
                      <Link to={`twitter.com/${profile.social.twitter}`}>
                        <i className="fab fa-twitter"></i>
                      </Link>
                    ) : null}
                    {profile.social.instagram ? (
                      <Link to={`instagram.com/${profile.social.instagram}`}>
                        <i className="fab fa-instagram"></i>
                      </Link>
                    ) : null}
                    {profile.social.linkedin ? (
                      <Link to={`linkedin.com/in/${profile.social.linkedin}`}>
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    ) : null}
                    {profile.social.youtube ? (
                      <Link to={`youtube.com/${profile.social.youtube}`}>
                        <i className="fab fa-youtube"></i>
                      </Link>
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
                      {current_user.username ? current_user.username : ''}
                    </h3>
                  </span>
                  <span className={classes.Location}>{profile.location}</span>
                  <span className={classes.Details}>Rwanda Kigali</span>
                  <span className={classes.Details}>www.me.resume</span>
                  <span className={classes.Bio}>
                    <p>{profile.bio}</p>
                  </span>
                  <span className={classes.Skills}>
                    {skills.map((obj, key) => (
                      <i key={key}> {obj}</i>
                    ))}
                  </span>
                </div>
              </div>
              <div id="Posts" className="tabContent">
                <span>
                  <h3>MY POSTS</h3>
                </span>
                <div className={classes.ProfileTab}>
                  <div className={classes.Posts}>
                    {' '}
                    <Link to="/singleArticle">
                      <div className={classes.MyPosts}>
                        <div>
                          <img src={postImg} alt="" />
                        </div>
                        <div className={classes.PostTitle}>
                          Peace is a stress-free state of security and calmness
                        </div>
                        <div className={classes.PostDetails}>
                          EmaBush 2 days ago | &#128338; 4 min to read
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className={classes.Posts}>
                    {' '}
                    <Link to="/singleArticle">
                      <div className={classes.MyPosts}>
                        <div>
                          <img src={postImg} alt="" />
                        </div>
                        <div className={classes.PostTitle}>
                          Peace is a stress-free state of security and calmness
                        </div>
                        <div className={classes.PostDetails}>
                          EmaBush 2 days ago | &#128338; 4 min to read
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div id="Likes" className="tabContent">
                <span>
                  <h3>MY LIKES</h3>
                </span>
                <div className={classes.ProfileTab}>
                  <div className={classes.Posts}>
                    {' '}
                    <Link to="/singleArticle">
                      <div className={classes.MyPosts}>
                        <div>
                          <img src={postImg} alt="" />
                        </div>
                        <div className={classes.PostTitle}>
                          Peace is a stress-free state of security and calmness
                        </div>
                        <div className={classes.PostDetails}>
                          EmaBush 2 days ago | &#128338; 4 min to read
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className={classes.Posts}>
                    {' '}
                    <Link to="/singleArticle">
                      <div className={classes.MyPosts}>
                        <div>
                          <img src={postImg} alt="" />
                        </div>
                        <div className={classes.PostTitle}>
                          Peace is a stress-free state of security and calmness
                        </div>
                        <div className={classes.PostDetails}>
                          EmaBush 2 days ago | &#128338; 4 min to read
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div id="Followers" className="tabContent">
                {followers}
              </div>
              <div id="Following" className="tabContent">
                {followings}
              </div>
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getProfile: (id, cd) => dispatch(fetchProfileUser(id, cd)),
  getUser: (cb) => dispatch(fetchCurrentUser(cb)),
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
