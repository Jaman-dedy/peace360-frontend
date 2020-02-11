/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';
import classes from './Profile.module.scss';
import './Profile.scss';
import postImg from '../../assets/images/experience1.jpg';
import Avatar from '../../assets/images/avatar.jpg';
import EditProfile from './EditProfile/EditProfile';

const profile = () => {
  const handleShowTabs = (event, tabName) => {
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
  return (
    <Layout>
      <div></div>
      <div className={classes.Profile}>
        <div className={classes.Tab}>
          <button
            className='tabLinks'
            onClick={e => handleShowTabs(e, 'Profile')}
          >
            Profile
          </button>
          <button
            className='tabLinks'
            onClick={e => handleShowTabs(e, 'Posts')}
          >
            Posts
          </button>
          <button
            className='tabLinks'
            onClick={e => handleShowTabs(e, 'Likes')}
          >
            Likes
          </button>
          <button
            className='tabLinks'
            onClick={e => handleShowTabs(e, 'Followers')}
          >
            Followers
          </button>
          <button
            className='tabLinks'
            onClick={e => handleShowTabs(e, 'Following')}
          >
            Following
          </button>
        </div>
        <div className={classes.FollowMe}>
          <h2>Follow me on</h2>
          <div className={classes.SocialMedia}>
            <Link to='#'>
              <i className='fab fa-facebook'></i>
            </Link>
            <Link to='#'>
              <i className='fab fa-twitter'></i>
            </Link>
            <Link to='#'>
              <i className='fab fa-instagram'></i>
            </Link>
            <Link to='#'>
              <i className='fab fa-linkedin'></i>
            </Link>
            <Link to='#'>
              <i className='fab fa-youtube'></i>
            </Link>
          </div>
        </div>
        <div id='Profile' className='tabContent'>
          <span>
            <h3>ABOUT ME</h3>
          </span>
          <div className={classes.ProfileTab}>
            <span>
              <h3>Emanuel Bush</h3>
            </span>
            <span className={classes.Location}>Andela</span>
            <span className={classes.Details}>Rwanda Kigali</span>
            <span className={classes.Details}>www.me.resume</span>
            <span className={classes.Bio}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </span>
            <span className={classes.Skills}>
              <i>Public speaking</i>
              <i>Engineering</i>
              <i>Low</i>
              <i>Management</i>
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
};

export default profile;
