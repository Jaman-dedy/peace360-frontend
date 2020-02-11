import React from 'react';
import classes from './ErrorPage.module.scss';
import failure from '../../../assets/images/error/failure.png';

const errorPage = props => (
  <div className={classes.Error}>
    <img src={failure} alt={props.message} />
    <span>
      {' '}
      <strong>Sorry</strong> <br /> {props.errorMessage}
    </span>
  </div>
);

export default errorPage;
