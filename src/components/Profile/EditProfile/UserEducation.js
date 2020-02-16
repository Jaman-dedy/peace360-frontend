import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './EditProfile.scss';

class UserEducation extends Component {
  render() {
    return (
      <div>
        <fieldset>
          <legend>Your Education</legend>
          <div className='row'>
            <div className='box'>
              <label htmlFor='school'>School</label>
              <input type='text' placeholder='Enter your School' />
            </div>
            <div className='box'>
              <label htmlFor='Address'>Address</label>
              <input type='text' placeholder='Enter your School Address' />
            </div>
          </div>
          <div className='row'>
            <div className=''>
              <label htmlFor='address'>Degree</label>
              <input
                type='text'
                placeholder='Enter your Degree'
                style={{ width: '92%' }}
              ></input>{' '}
              
            </div>
          </div>
          <div className='row'>
            <div className='time_box'>
              <label htmlFor='Address'>From</label>
              <input type='date' />
            </div>
            <div className='time_box'>
              <label htmlFor='company'>To</label>
              <input type='date' />
            </div>
            <div className='time_box'>
              <label htmlFor='company'>Now</label>
              <input type='radio' />
            </div>
          </div>
          <div className='row text_area'>
            <label htmlFor='company'>School Description</label>
            <TextareaAutosize />
          </div>
        </fieldset>
      </div>
    );
  }
}

export default UserEducation;
