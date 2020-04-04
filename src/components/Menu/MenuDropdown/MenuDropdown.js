import './MenuDropdown.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const dropdown = props => (
  <div>
    <div className='dropdownList'>
      <div className='menuList'>
        <Link to='/' className='link'>
          HOME
        </Link>
      </div>
      <div className='menuList'>
        <Link to='/consultResearch' className='link'>
          CONSULTANCY 
        </Link>
      </div>
      <div className='menuList'>
        <Link to='/getInvolved' className='link'>
          GET INVOLVED
        </Link>
      </div>
      <div className='menuList'>
        <Link to='/contact' className='link'>
          CONTACT
        </Link>
      </div>

      <div className='menuList'>
        <Link to='/aboutUs' className='link'>
          ABOUT US
        </Link>
      </div>
    </div>
  </div>
);

export default dropdown;
