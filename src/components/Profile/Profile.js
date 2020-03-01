/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';
import classes from './Profile.module.scss';
import './Profile.scss';
import postImg from '../../assets/images/experience1.jpg';
import Avatar from '../../assets/images/avatar.jpg';
import EditLink from './EditProfile/EditProfileLink';
import { fetchProfileUser, fetchCurrentUser } from '../../store/actions';
import { connect } from 'react-redux';

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

  componentDidMount = () => {
    this.props.getUser(user => {
      this.props.getProfile(user._id);
    });
  };

  render() {
    const { error, profile } = this.props;
    const { skills } = profile;
    return (
      <Layout>
        <div className={classes.Profile}>
          <div className={classes.Tab}>
            {error === 'There is no profile for this user' ? (
              <NavLink to='/editProfile'>
                <button className='tabLinks'>Create Profile</button>
              </NavLink>
            ) : (
              <button
                className='tabLinks'
                onClick={e => this.handleShowTabs(e, 'Profile')}
              >
                Profile
              </button>
            )}

            <button
              className='tabLinks'
              onClick={e => this.handleShowTabs(e, 'Posts')}
            >
              Posts
            </button>
            <button
              className='tabLinks'
              onClick={e => this.handleShowTabs(e, 'Likes')}
            >
              Likes
            </button>
            <button
              className='tabLinks'
              onClick={e => this.handleShowTabs(e, 'Followers')}
            >
              Followers
            </button>
            <button
              className='tabLinks'
              onClick={e => this.handleShowTabs(e, 'Following')}
            >
              Following
            </button>
          </div>
          <div className={classes.FollowMe}>
            <h2>Follow me on</h2>
            <div className={classes.SocialMedia}>
              <Link to={profile.social.facebook}>
                <i className='fab fa-facebook'></i>
              </Link>
              <Link to={profile.social.twitter}>
                <i className='fab fa-twitter'></i>
              </Link>
              <Link to={profile.social.instagram}>
                <i className='fab fa-instagram'></i>
              </Link>
              <Link to={profile.social.linkedin}>
                <i className='fab fa-linkedin'></i>
              </Link>
              <Link to={profile.social.youtube}>
                <i className='fab fa-youtube'></i>
              </Link>
            </div>
          </div>
          <div id='Profile' className='tabContent'>
            <span>
              <h3>ABOUT ME</h3>
            </span>
            <div className={classes.ProfileTab}>
              <div>
                <EditLink />
              </div>
              <span>
                <h3>{profile.user.username}</h3>
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
          <div id='Posts' className='tabContent'>
            <span>
              <h3>MY POSTS</h3>
            </span>
            <div className={classes.ProfileTab}>
              <div className={classes.Posts}>
                {' '}
                <Link to='/singleArticle'>
                  <div className={classes.MyPosts}>
                    <div>
                      <img src={postImg} alt='' />
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
                <Link to='/singleArticle'>
                  <div className={classes.MyPosts}>
                    <div>
                      <img src={postImg} alt='' />
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
          <div id='Likes' className='tabContent'>
            <span>
              <h3>MY LIKES</h3>
            </span>
            <div className={classes.ProfileTab}>
              <div className={classes.Posts}>
                {' '}
                <Link to='/singleArticle'>
                  <div className={classes.MyPosts}>
                    <div>
                      <img src={postImg} alt='' />
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
                <Link to='/singleArticle'>
                  <div className={classes.MyPosts}>
                    <div>
                      <img src={postImg} alt='' />
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
          <div id='Followers' className='tabContent'>
            <span>
              <h3>MY FOLLOWERS</h3>
            </span>
            <div className={classes.ProfileTab}>
              <div className={classes.MyFollowers}>
                <div className={classes.Avatar}>
                  <img src={Avatar} alt='' />
                </div>
                <div className={classes.Name}>Emanuel Bush</div>
                <div className={classes.Follow}>Follow</div>
              </div>
              <div className={classes.MyFollowers}>
                <div className={classes.Avatar}>
                  <img src={Avatar} alt='' />
                </div>
                <div className={classes.Name}>Emanuel Bush</div>
                <div className={classes.Follow}>Follow</div>
              </div>
              <div className={classes.MyFollowers}>
                <div className={classes.Avatar}>
                  <img src={Avatar} alt='' />
                </div>
                <div className={classes.Name}>Emanuel Bush</div>
                <div className={classes.Follow}>Follow</div>
              </div>
            </div>
          </div>
          <div id='Following' className='tabContent'>
            <span>
              <h3>MY FOLLOWINGS</h3>
            </span>
            <div className={classes.ProfileTab}>
              <div className={classes.MyFollowers}>
                <div className={classes.Avatar}>
                  <img src={Avatar} alt='' />
                </div>
                <div className={classes.Name}>Emanuel Bush</div>
                <div className={classes.UnFollow}>UnFollow</div>
              </div>
              <div className={classes.MyFollowers}>
                <div className={classes.Avatar}>
                  <img src={Avatar} alt='' />
                </div>
                <div className={classes.Name}>Emanuel Bush</div>
                <div className={classes.UnFollow}>UnFollow</div>
              </div>
              <div className={classes.MyFollowers}>
                <div className={classes.Avatar}>
                  <img src={Avatar} alt='' />
                </div>
                <div className={classes.Name}>Emanuel Bush</div>
                <div className={classes.UnFollow}>UnFollow</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfile: id => dispatch(fetchProfileUser(id)),
  getUser: cb => dispatch(fetchCurrentUser(cb))
});
const mapStateToProps = state => {
  return {
    error: state.userProfile.error,
    loading: state.userProfile.loading,
    profile: state.userProfile.profile,
    current_user: state.currentUser.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
