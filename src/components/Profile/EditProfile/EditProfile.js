import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './EditProfile.scss';
import Layout from '../../Menu/Toolbar/Toolbar';
import avatar from '../../../assets/images/avatar.jpg';
import { NavLink } from 'react-router-dom';
class EditProfile extends Component {
  state = {
    displayMore: true,
    displayExperience: true,
    displayEducation: true,
    displaySocial: true
  };
  onDisplayMore = () => {};
  onDisplayExperience = () => {};
  onDisplayEducation = () => {};
  onDisplaySocial = () => {};
  render() {
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
                    <div className='row'>
                      <div className='box'>
                        <fieldset>
                          <legend>Company</legend>
                          <input type='text' placeholder='Bene' />
                        </fieldset>
                      </div>
                      <div className='box'>
                        <fieldset>
                          <legend> Website</legend>
                          <input
                            type='text'
                            placeholder='example@example.com'
                          />
                        </fieldset>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='box'>
                        <fieldset>
                          <legend>Address</legend>
                          <input type='text' placeholder='Bene' />
                        </fieldset>
                      </div>
                      <div className='box'>
                        <fieldset>
                          <legend>Skills</legend>
                          <input
                            type='text'
                            placeholder='example@example.com'
                          />
                        </fieldset>
                      </div>
                    </div>
                    <div className='row'>
                      <fieldset>
                        <legend>Your bio</legend>
                        <TextareaAutosize style={{ width: '100%' }} />
                      </fieldset>
                    </div>
                    <div className='row font-color'>
                      <fieldset>
                        <legend>Your experience</legend>
                        <div className='row'>
                          <div className='box'>
                            <label htmlFor='position'>Position</label>
                            <input type='text' placeholder='Your position' />
                          </div>
                          <div className='box'>
                            <label htmlFor='company'>Company</label>
                            <input type='text' placeholder='Your position' />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='box'>
                            <label htmlFor='Address'>Address</label>
                            <input type='text' placeholder='Your position' />
                          </div>
                          <div className='box'>
                            <label htmlFor='company'>Company</label>
                            <input type='text' placeholder='Your position' />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='time_box'>
                            <label htmlFor='Address'>From</label>
                            <input type='date' placeholder='Your position' />
                          </div>
                          <div className='time_box'>
                            <label htmlFor='company'>To</label>
                            <input type='date' placeholder='Your position' />
                          </div>
                          <div className='time_box'>
                            <label htmlFor='company'>Now</label>
                            <input type='radio' placeholder='Your position' />
                          </div>
                        </div>
                        <div className='row text_area'>
                          <label htmlFor='company'>Job Description</label>
                          <TextareaAutosize />
                        </div>
                      </fieldset>
                    </div>

                    <div className='row font-color'>
                      <fieldset>
                        <legend>Your Education</legend>
                        <div className='row'>
                          <div className='box'>
                            <label htmlFor='school'>School</label>
                            <input type='text' placeholder='School' />
                          </div>
                          <div className='box'>
                            <label htmlFor='degree'>Degree</label>
                            <input type='text' placeholder='Your degree' />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='box'>
                            <label htmlFor='Address'>Address</label>
                            <input type='text' placeholder='Your position' />
                          </div>
                          <div className='box'>
                            <label htmlFor='company'>Company</label>
                            <input type='text' placeholder='Your position' />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='time_box'>
                            <label htmlFor='Address'>From</label>
                            <input type='date' placeholder='Your position' />
                          </div>
                          <div className='time_box'>
                            <label htmlFor='company'>To</label>
                            <input type='date' placeholder='Your position' />
                          </div>
                          <div className='time_box'>
                            <label htmlFor='company'>Now</label>
                            <input type='radio' placeholder='Your position' />
                          </div>
                        </div>
                        <div className='row text_area'>
                          <label htmlFor='company'>School Description</label>
                          <TextareaAutosize />
                        </div>
                      </fieldset>
                    </div>
                    <div className='row font-color'>
                      <fieldset>
                        <legend>Social media</legend>
                        <div className='row social'>
                          <label htmlFor='linkedin'>Youtube</label>
                          <input type='checkbox' />
                          <input type='text' className='link' />
                        </div>
                        <div className='row social'>
                          <label htmlFor='twitter'>Twitter</label>
                          <input type='checkbox' />
                          <input type='text' className='link' />
                        </div>
                        <div className='row social'>
                          <label htmlFor='facebook'>Facebook</label>
                          <input type='checkbox' />
                          <input type='text' className='link' />
                        </div>
                        <div className='row social'>
                          <label htmlFor='Linkedin'>Linkedin</label>
                          <input type='checkbox' />
                          <input type='text' className='link' />
                        </div>
                        <div className='row social'>
                          <label htmlFor='Instagram'>Instagram</label>
                          <input type='checkbox' />
                          <input type='text' className='link' />
                        </div>
                      </fieldset>
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
