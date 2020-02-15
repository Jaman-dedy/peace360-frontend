import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './EditProfile.scss';

class UserExperience extends Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default UserExperience;
