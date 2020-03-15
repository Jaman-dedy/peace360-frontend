import React from 'react';
import classes from './MenuItems.module.scss';
import MenuItem from './MenuItem/MenuItem';

const menuItems = props => {
  return (
    <div>
      <div className={classes.MenuItems}>
        <MenuItem link='/' exact>
          HOME
        </MenuItem>
        <MenuItem link='/consultResearch'>CONSULTANCY & RESEARCH</MenuItem>
        <MenuItem link='/getInvolved'>GET INVOLVED</MenuItem>
        <MenuItem link='/contact'>CONTACT</MenuItem>
        <MenuItem link='/aboutUs'>ABOUT US</MenuItem>
      </div>
    </div>
  );
};

export default menuItems;
