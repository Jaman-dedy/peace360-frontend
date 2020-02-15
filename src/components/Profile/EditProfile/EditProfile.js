import React, { Component } from 'react';
import './EditProfile.scss';
import Layout from '../../Menu/Toolbar/Toolbar';
import avatar from '../../../assets/images/avatar.jpg';
import UserExperience from './UserExperience';
import { NavLink } from 'react-router-dom';
import MoreAboutUser from './MoreAboutUser';
import UserEducation from './UserEducation';
import UserSocial from './UserSocials';
class EditProfile extends Component {
  state = {
    displayMore: false,
    displayExperience: false,
    displayEducation: false,
    displaySocial: false
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
  render() {
    const {
      displayMore,
      displayExperience,
      displayEducation,
      displaySocial
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
                <i class='fas fa-chevron-left'></i>
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
                        <div className='editIcon font-color '>
                          <i class='fas fa-pencil-alt'></i>
                        </div>
                      </div>
                    </div>
                    <div className='diviser'></div>
                    <div className='row'>
                      <div className='box'>
                        <fieldset>
                          <legend>Username</legend>
                          <input type='text' placeholder='Bene' />
                        </fieldset>
                      </div>
                      <div className='box'>
                        <fieldset>
                          <legend>Email address</legend>
                          <input
                            type='text'
                            placeholder='example@example.com'
                          />
                        </fieldset>
                      </div>
                    </div>
                    <div
                      className='font-color more-about-user'
                      onClick={this.onDisplayMore}
                    >
                      More about you
                    </div>
                    {displayMore ? (
                      <MoreAboutUser />
                    ) : (
                      <div className='diviser'></div>
                    )}

                    <div className='row font-color'>
                      <div>
                        <div
                          className='more-about-user'
                          onClick={this.onDisplayExperience}
                        >
                          Your Experience
                        </div>
                        {displayExperience ? (
                          <UserExperience />
                        ) : (
                          <div className='diviser'></div>
                        )}
                      </div>
                    </div>

                    <div className='row font-color'>
                      <div
                        className='more-about-user'
                        onClick={this.onDisplayEducation}
                      >
                        Your Education
                      </div>
                      {displayEducation ? (
                        <UserEducation />
                      ) : (
                        <div className='diviser'></div>
                      )}
                    </div>

                    <div className='row font-color'>
                      <div
                        className='more-about-user'
                        onClick={this.onDisplaySocial}
                      >
                        Social Life
                      </div>
                      {displaySocial ? (
                        <UserSocial />
                      ) : (
                        <div className='diviser'></div>
                      )}
                    </div>
                    <div className='btn'>
                      <button>Submit</button>
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

export default EditProfile;
