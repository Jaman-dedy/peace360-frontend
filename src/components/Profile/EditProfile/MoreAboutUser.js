import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './EditProfile.scss';

class MoreAboutUser extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='box'>
            <fieldset>
              <legend>Company</legend>
              <input type='text' placeholder='Enter your Company ' />
            </fieldset>
          </div>
          <div className='box'>
            <fieldset>
              <legend> Website</legend>
              <input type='text' placeholder='Enter your website' />
            </fieldset>
          </div>
        </div>
        <div className='row'>
          <div className='box'>
            <fieldset>
              <legend>Address</legend>
              <input type='text' placeholder='Enter your address' />
            </fieldset>
          </div>
          <div className='box'>
            <fieldset>
              <legend>Skills</legend>
              <input type='text' placeholder='Enter your Skills' />
            </fieldset>
          </div>
        </div>
        <div className='row'>
          <fieldset>
            <legend>Your bio</legend>
            <TextareaAutosize
              style={{ width: '100%' }}
              placeholder='Enter your Bio'
            />
          </fieldset>
        </div>
      </div>
    );
  }
}
export default MoreAboutUser;
