import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './EditProfile.scss';

class EditLink extends Component {
  render() {
    return (
      <NavLink to='/editProfile'>
        <div className='editProfileLink'>
          <i class='fas fa-pencil-alt'></i>
        </div>
      </NavLink>
    );
  }
}

export default EditLink;
