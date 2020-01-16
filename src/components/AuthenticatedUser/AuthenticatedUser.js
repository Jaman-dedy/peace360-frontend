import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AuthenticatedUser.module.scss';
import userAvatar from '../../assets/images/avatar.jpg';

const authenticatedUser = () => (
  <div className={classes.User}>
    <Link to="/profile">
      <img src={userAvatar} alt="" />
    </Link>
  </div>
);

export default authenticatedUser;
