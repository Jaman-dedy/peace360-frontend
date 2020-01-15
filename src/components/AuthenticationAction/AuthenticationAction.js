import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './AuthenticationAction.module.scss';

const authenticationAction = () => (
  <div className={classes.Authentication}>
    <NavLink to="/login">
      <div className={classes.Login}>Login</div>
    </NavLink>
    <NavLink to="/signup">
      <div className={classes.Signup}>Sign up</div>
    </NavLink>
  </div>
);

export default authenticationAction;
