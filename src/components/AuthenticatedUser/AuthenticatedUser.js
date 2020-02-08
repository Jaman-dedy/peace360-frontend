import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AuthenticatedUser.module.scss';
import userAvatar from '../../assets/images/avatar.jpg';

const authenticatedUser = props => (
  <div className={classes.User}>
    <Link to="/profile">
      <img src={userAvatar} alt="" />
    </Link>
    <div className={classes.Actions}>
      <ol>
        <li>
          {' '}
          <Link to="/profile">
            {' '}
            <i class="fas fa-user"></i>
            profile
          </Link>
        </li>
        <li>
          <Link to="/logout">
            {' '}
            <i class="fas fa-sign-out-alt"></i>
            logout
          </Link>
        </li>
      </ol>
    </div>
  </div>
);

export default authenticatedUser;
