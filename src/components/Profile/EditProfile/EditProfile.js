/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import './EditProfile.scss';
import { connect } from 'react-redux';
import Layout from '../../Menu/Toolbar/Toolbar';
import { NavLink } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import {
  fetchProfileUser,
  editProfileUser,
  createProfileUser,
  
} from '../../../store/actions/Userprofile';
import {editUserPic} from '../../../store/actions/getCurrentUser';
import * as actions from '../../../store/actions/index';
import Spinner from '../../UI/Spinner/Spinner';
import { fetchCurrentUser } from '../../../store/actions/getCurrentUser';

class EditProfile extends Component {
  state = {
    profile: true,
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
    bio: '',
    displayError: 'error',
    displaySaveImage:false,
    displayEditImage: false
  };
  onCheckUTube = () => {
    let change = this.state.utube;
    this.setState({
      utube: !change,
    });
    if (!this.state.utube) {
      this.setState({
        utubeValue: '',
      });
    }
  };

  onCheckTwitter = () => {
    let change = this.state.twitter;
    this.setState({
      twitter: !change,
    });
    if (!this.state.twitter) {
      this.setState({
        twitterValue: '',
      });
    }
  };

  onCheckFacebook = () => {
    let change = this.state.facebook;
    this.setState({
      facebook: !change,
    });
    if (!this.state.facebook) {
      this.setState({
        facebookValue: '',
      });
    }
  };
  onCheckLinkedIn = () => {
    let change = this.state.linkedin;
    this.setState({
      linkedin: !change,
    });
    if (!this.state.linkedin) {
      this.setState({
        linkedinValue: '',
      });
    }
  };
  onCheckInstagram = () => {
    let change = this.state.instagram;
    this.setState({
      instagram: !change,
    });
    if (!this.state.instagram) {
      this.setState({
        instagramValue: '',
      });
    }
  };
  onDisplayMore = () => {
    let changes = this.state.displayMore;
    this.setState({
      displayMore: !changes,
    });
  };
  onDisplayExperience = () => {
    let changes = this.state.displayExperience;
    this.setState({
      displayExperience: !changes,
    });
  };
  onDisplayEducation = () => {
    let changes = this.state.displayEducation;
    this.setState({
      displayEducation: !changes,
    });
  };
  onDisplaySocial = () => {
    let changes = this.state.displaySocial;
    this.setState({
      displaySocial: !changes,
    });
  };
  getUserInfo = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  onSubmitInfo = () => {
    const { editProfile, createProfile } = this.props;
    let utubeV, twitterV, facebookV, linkedinV, instagramV;
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
      instagramValue,
      utube,
      twitter,
      facebook,
      linkedin,
      instagram,
      profile,
    } = this.state;

    !utube ? (utubeV = '') : (utubeV = utubeValue);
    !twitter ? (twitterV = '') : (twitterV = twitterValue);
    !facebook ? (facebookV = '') : (facebookV = facebookValue);
    !linkedin ? (linkedinV = '') : (linkedinV = linkedinValue);
    !instagram ? (instagramV = '') : (instagramV = instagramValue);
    if (profile) {
      editProfile(
        {
          company,
          website,
          location: address,
          skills,
          bio,
          youtube: utubeV,
          facebook: facebookV,
          twitter: twitterV,
          instagram: instagramV,
          linkedin: linkedinV,
        },
        (cd) => {
          if (cd.status) {
            window.location.href = '/profile';
          } else {
            this.setState({ error: 'Something is wrong, please retry' });
          }
        }
      );
    } else {
      createProfile(
        {
          company,
          website,
          location: address,
          skills,
          bio,
          youtube: utubeV,
          facebook: facebookV,
          twitter: twitterV,
          instagram: instagramV,
          linkedin: linkedinV,
        },
        (cd) => {
          if (cd.status) {
            window.location.href = '/profile';
          } else {
            this.setState({ error: 'Please try again' });
          }
        }
      );
    }
  };

  updateImage=()=>{
    this.setState({
      displayEditImage: true
    })
  }

  uploadUserPP = (event) => {
    this.setState({
      displaySaveImage: true,
      displayEditImage:false
    })
    this.props.onUploadImg(event.target.files[0]); 
  }

  onSaveImage = ()=>{
    const {editUserPics, userImageUrl} = this.props;
    this.setState({
      displayEditImage: false,
      displaySaveImage: false
    });
    editUserPics("url here there");
  }

  onCloseError = () => {
    this.setState({ displayError: 'no-error' });
  };
  componentWillUpdate = (prevProps) => {
    !prevProps.isAuthenticated ? (window.location.href = '/login') : null;
  };
  componentDidMount = () => {
    this.props.getUser((user) => {
      this.props.getProfile(user._id, (data) => {
        if (data.status === 400) {
          this.setState({
            profile: false,
          });
        } else {
          const {
            company,
            website,
            location,
            bio,
            skills,
            social,
          } = data.profile;
          this.setState({
            company,
            website,
            address: location,
            bio,
            skills,
          });
          if (social) {
            if (social.youtube) {
              this.setState({
                utube: true,
                utubeValue: social.youtube,
              });
            }
            if (social.twitter) {
              this.setState({
                twitter: true,
                twitterValue: social.twitter,
              });
            }
            if (social.facebook) {
              this.setState({
                facebook: true,
                facebookValue: social.facebook,
              });
            }
            if (social.linkedin) {
              this.setState({
                linkedin: true,
                linkedinValue: social.linkedin,
              });
            }
            if (social.instagram) {
              this.setState({
                instagram: true,
                instagramValue: social.instagram,
              });
            }
          }
        }
      });
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
      instagramValue,
      profile,
    } = this.state;
    const { loading, getUserLoading , errorProfile, newUser} = this.props;
    
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
                <div
                  className={
                    errorProfile && errorProfile.status !== 400
                      ? `errordisplay ${this.state.displayError}`
                      : `errordisplay no-error`
                  }
                >
                  <span onClick={this.onCloseError}>&times;</span>
                  <div className='textError'>
                    There is something wrong, please try to edit your profile,
                    or go back to profile
                  </div>
                </div>
                <div className='title main-color center'>
                  {profile ? 'Edit your Profile' : 'Create your Profile'}
                </div>
                
                <form action=''>
                  <div className='form'>
                    <div className='row image'>
                      <div className='image_container'>
                        <div className='update_image' onClick={this.updateImage}>
                          <i className='fas fa-pencil-alt'></i>
                        </div>
                        <img src={newUser.avatar} alt='' className='boxContent' />
                      </div>
                      {
                        this.state.displayEditImage?(<div>
                          <input value={this.state.image} type="file" className="image-upload" accept="image/*" onChange={this.uploadUserPP} />
                         </div>):null
                      }
                      {
                        this.state.displaySaveImage?(
                          <div onClick={this.onSaveImage}>
                            save image
                          </div>
                        ):null
                      }
                      <div>
                 </div>
                    </div>
                    {loading || getUserLoading ? (
                      <div>
                        <Spinner></Spinner>
                      </div>
                    ) : (
                      <div>
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
                                    value={company || ''}
                                    onChange={this.getUserInfo}
                                    data-required='true'
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
                                    value={website || ''}
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
                                    value={address || ''}
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
                                    value={skills || ''}
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
                                  value={bio || ''}
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
                                    onChange={this.onCheckUTube}
                                  />
                                  {utube ? (
                                    <div>
                                      <input
                                        type='text'
                                        className='link'
                                        placeholder='Enter your Youtube channel'
                                        name='utubeValue'
                                        value={utubeValue || ''}
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
                                    onChange={this.onCheckTwitter}
                                  />
                                  {twitter ? (
                                    <div>
                                      <input
                                        type='text'
                                        className='link'
                                        placeholder='Enter your Twitter username'
                                        name='twitterValue'
                                        value={twitterValue || ''}
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
                                    onChange={this.onCheckFacebook}
                                  />
                                  {facebook ? (
                                    <div>
                                      <input
                                        type='text'
                                        className='link'
                                        placeholder='Enter your Facebook username'
                                        name='facebookValue'
                                        value={facebookValue || ''}
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
                                    onChange={this.onCheckLinkedIn}
                                  />
                                  {linkedin ? (
                                    <div>
                                      <input
                                        type='text'
                                        className='link'
                                        placeholder='Enter your LinkedIn username'
                                        name='linkedinValue'
                                        value={linkedinValue || ''}
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
                                    onChange={this.onCheckInstagram}
                                  />

                                  {instagram ? (
                                    <div>
                                      <input
                                        type='text'
                                        className='link'
                                        placeholder='Enter your Instagram username'
                                        name='instagramValue'
                                        value={instagramValue || ''}
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
                        <div
                          className='submitProfileButton'
                          onClick={this.onSubmitInfo}
                        >
                          Submit
                        </div>
                      </div>
                    )}
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
const mapDispatchToProps = (dispatch) => ({
  getProfile: (id, cb) => dispatch(fetchProfileUser(id, cb)),
  getUser: (cb) => dispatch(fetchCurrentUser(cb)),
  editProfile: (body, cd) => dispatch(editProfileUser(body, cd)),
  createProfile: (body, cd) => dispatch(createProfileUser(body, cd)),
  onUploadImg:(imgFile) => dispatch(actions.uploadImg(imgFile)),
  editUserPics:(img) => dispatch(editUserPic(img))
});
const mapStateToProps = (state) => {
  return {
    userImageUrl: state.uploadImg.imgUrl,
    errorProfile: state.userProfile.error,
    loading: state.userProfile.loading,
    current_profile: state.userProfile.profile,
    isAuthenticated:
      state.register.token !== null || state.login.token !== null,
    newUser: state.currentUser.user,
    getUserLoading: state.currentUser.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
