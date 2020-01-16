import React from 'react';
import classes from './SocialShare.module.scss';
import { Link } from 'react-router-dom';

const socialShare = props => (
  <div className={classes.SocialShare}>
    <div className={classes.Icon}>
      <Link to="#">
        <i className="fab fa-facebook"></i>
      </Link>
    </div>
    <div className={classes.Icon}>
      {' '}
      <Link to="#">
        <i className="fab fa-twitter"></i>
      </Link>
    </div>
    <div className={classes.Icon}>
      <Link to="#">
        <i className="fab fa-instagram"></i>
      </Link>
    </div>
    <div className={classes.Icon}>
      <Link to="#">
        <i className="fab fa-facebook"></i>
      </Link>
    </div>
  </div>
);

export default socialShare;
