import React, { Component } from 'react';
import './EditProfile.scss';
import { connect } from 'react-redux';
import Layout from '../../Menu/Toolbar/Toolbar';
import avatar from '../../../assets/images/avatar.jpg';
import { NavLink } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import {
  fetchProfileUser,
  createOrEditProfileUser
} from '../../../store/actions/Userprofile';

class EditProfile extends Component {
  state = {
    displayMore: false,
    displayExperience: false,
    displayEducation: false,
    displaySocial: false,
    utube: false,
    twitter: false,
    facebook: false,
    linkedin: false,
    instagram: false,
    utubeValue: '',
    twitterValue: '',
    facebookValue: '',
    linkedinValue: '',
    instagramValue: '',
    company: '',
    website: '',
    address: '',
    skills: '',
    bio: ''
  };
  onCheckUTube = () => {
    let change = this.state.utube;
    this.setState({
      utube: !change
    });
  };
  onCheckTwitter = () => {
    let change = this.state.twitter;
    this.setState({
      twitter: !change
    });
  };
  onCheckFacebook = () => {
    let change = this.state.facebook;
    this.setState({
      facebook: !change
    });
  };
  onCheckLinkedIn = () => {
    let change = this.state.linkedin;
    this.setState({
      linkedin: !change
    });
  };
  onCheckInstagram = () => {
    let change = this.state.instagram;
    this.setState({
      instagram: !change
    });
  };
  onDisplayMore = () => {
    let changes = this.state.displayMore;
    this.setState({
      displayMore: !changes
    });
  };
  onDisplayExperience = () => {
    let changes = this.state.displayExperience;
    this.setState({
      displayExperience: !changes
    });
  };
  onDisplayEducation = () => {
    let changes = this.state.displayEducation;
    this.setState({
      displayEducation: !changes
    });
  };
  onDisplaySocial = () => {
    let changes = this.state.displaySocial;
    this.setState({
      displaySocial: !changes
    });
  };
  getUserInfo = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };
  onSubmitInfo = () => {
    const { createOrEditProfile } = this.props;
    const {
      company,
      website,
      address,
      skills,
      bio,
      utubeValue,
      twitterValue,
      facebookValue,
      linkedinValue,
      instagramValue
    } = this.state;
    createOrEditProfile({
      company,
      website,
      location: address,
      skills,
      bio,
      youtube: utubeValue,
      facebook: facebookValue,
      twitter: twitterValue,
      instagram: instagramValue,
      linkedin: linkedinValue
    });
  };
  render() {
    const {
      displayMore,
      displaySocial,
      utube,
      twitter,
      facebook,
      linkedin,
      instagram,
      company,
      website,
      address,
      skills,
      bio,
      utubeValue,
      twitterValue,
      facebookValue,
      linkedinValue,
      instagramValue
    } = this.state;

    return (
      <div>
        <div className='editContainer'>
          <div className='menu'>
            <Layout></Layout>
          </div>
          <div className='editContent'>
            <NavLink to='/profile'>
              <div className='boxContent back'>
                <i className='fas fa-chevron-left'></i>
              </div>
            </NavLink>

            <div className='edit_container boxContent'>
              <div className=''>
                <div className='title main-color center'>Edit your Profile</div>
                <form action=''>
                  <div className='form'>
                    <div className='row image'>
                      <div className='image_container'>
                        <img src={avatar} alt='' className='boxContent' />
                      </div>
                    </div>
                    <div
                      className='font-color more-about-user'
                      onClick={this.onDisplayMore}
                    >
                      More about you
                    </div>
                    {displayMore ? (
                      <div>
                        <div className='row'>
                          <div className='box'>
                            <fieldset>
                              <legend>Company</legend>
                              <input
                                type='text'
                                placeholder='Enter your Company'
                                name='company'
                                value={company}
                                onChange={this.getUserInfo}
                              />
                            </fieldset>
                          </div>
                          <div className='box'>
                            <fieldset>
                              <legend> Website</legend>
                              <input
                                type='text'
                                placeholder='Enter your website'
                                name='website'
                                value={website}
                                onChange={this.getUserInfo}
                              />
                            </fieldset>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='box'>
                            <fieldset>
                              <legend>Address</legend>
                              <input
                                type='text'
                                placeholder='Enter your address'
                                name='address'
                                value={address}
                                onChange={this.getUserInfo}
                              />
                            </fieldset>
                          </div>
                          <div className='box'>
                            <fieldset>
                              <legend>Skills</legend>
                              <input
                                type='text'
                                placeholder='Enter your Skills'
                                name='skills'
                                value={skills}
                                onChange={this.getUserInfo}
                              />
                            </fieldset>
                          </div>
                        </div>
                        <div className='row'>
                          <fieldset>
                            <legend>Your bio</legend>
                            <TextareaAutosize
                              style={{ width: '100%' }}
                              placeholder='Enter your Bio'
                              name='bio'
                              value={bio}
                              onChange={this.getUserInfo}
                            />
                          </fieldset>
                        </div>
                      </div>
                    ) : (
                      <div className='diviser'></div>
                    )}

                    <div className='row font-color'>
                      <div
                        className='more-about-user'
                        onClick={this.onDisplaySocial}
                      >
                        Social Life
                      </div>
                      {displaySocial ? (
                        <div>
                          <fieldset>
                            <legend>Social media</legend>
                            <div className='row social'>
                              <label htmlFor='linkedin'>Youtube</label>
                              <input
                                type='checkbox'
                                checked={utube}
                                onClick={this.onCheckUTube}
                              />
                              {utube ? (
                                <div>
                                  <input
                                    type='text'
                                    className='link'
                                    placeholder='Enter your Youtube channel'
                                    name='utubeValue'
                                    value={utubeValue}
                                    onChange={this.getUserInfo}
                                  />
                                </div>
                              ) : null}
                            </div>
                            <div className='row social'>
                              <label htmlFor='twitter'>Twitter</label>
                              <input
                                type='checkbox'
                                checked={twitter}
                                onClick={this.onCheckTwitter}
                              />
                              {twitter ? (
                                <div>
                                  <input
                                    type='text'
                                    className='link'
                                    placeholder='Enter your Twitter username'
                                    name='twitterValue'
                                    value={twitterValue}
                                    onChange={this.getUserInfo}
                                  />
                                </div>
                              ) : null}
                            </div>
                            <div className='row social'>
                              <label htmlFor='facebook'>Facebook</label>
                              <input
                                type='checkbox'
                                checked={facebook}
                                onClick={this.onCheckFacebook}
                              />
                              {facebook ? (
                                <div>
                                  <input
                                    type='text'
                                    className='link'
                                    placeholder='Enter your Facebook username'
                                    name='facebookValue'
                                    value={facebookValue}
                                    onChange={this.getUserInfo}
                                  />
                                </div>
                              ) : null}
                            </div>
                            <div className='row social'>
                              <label htmlFor='Linkedin'>Linkedin</label>
                              <input
                                type='checkbox'
                                checked={linkedin}
                                onClick={this.onCheckLinkedIn}
                              />
                              {linkedin ? (
                                <div>
                                  <input
                                    type='text'
                                    className='link'
                                    placeholder='Enter your LinkedIn username'
                                    name='linkedinValue'
                                    value={linkedinValue}
                                    onChange={this.getUserInfo}
                                  />
                                </div>
                              ) : null}
                            </div>
                            <div className='row social'>
                              <label htmlFor='Instagram'>Instagram</label>
                              <input
                                type='checkbox'
                                checked={instagram}
                                onClick={this.onCheckInstagram}
                              />

                              {instagram ? (
                                <div>
                                  <input
                                    type='text'
                                    className='link'
                                    placeholder='Enter your Instagram username'
                                    name='instagramValue'
                                    value={instagramValue}
                                    onChange={this.getUserInfo}
                                  />
                                </div>
                              ) : null}
                            </div>
                          </fieldset>
                        </div>
                      ) : (
                        <div className='diviser'></div>
                      )}
                    </div>
                    <div className='submitButton' onClick={this.onSubmitInfo}>
                      Submit
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getProfile: id => dispatch(fetchProfileUser(id)),
  createOrEditProfile: body => dispatch(createOrEditProfileUser(body))
});
const mapStateToProps = state => {
  return {
    error: state.userProfile.error,
    loading: state.userProfile.loading,
    profile: state.userProfile.profile,
    isAuthenticated:
      state.register.token !== null || state.login.token !== null,
    newUser: state.currentUser.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
