import React, { Component } from 'react';
import './EditProfile.scss';
import Layout from '../../Menu/Toolbar/Toolbar';
import avatar from '../../../assets/images/avatar.jpg';

class EditProfile extends Component {
  render() {
    return (
      <div>
        <div className='editContainer'>
          <div className='menu'>
            <Layout></Layout>
          </div>
          <div className='editContent'>
            <div className='boxContent back'>
              <i class='fas fa-chevron-left'></i>
            </div>
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
                          <legend>Edit your username</legend>
                          <input type='text' placeholder='Bene' />
                        </fieldset>
                      </div>
                      <div className='box'>
                        <fieldset>
                          <legend> Edit your Email address</legend>
                          <input
                            type='text'
                            placeholder='example@example.com'
                          />
                        </fieldset>
                      </div>
                    </div>
                    <div className='row'>
                      <fieldset>
                        <legend>Add your bio</legend>
                        <textarea
                          name='textarea'
                          id='textarea'
                          cols='90'
                          rows='7'
                          placeholder='Add your bio'
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className='btn'>
                      <button>Submit</button>
                    </div>
                    <div className='text font-color'>
                      By submitting this form you agree our terms. See our{' '}
                      <span className='primary-color'>privacy policy</span> to
                      learn about how we use your information.
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
