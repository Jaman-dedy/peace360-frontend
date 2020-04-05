import React from 'react';
import classes from './NotFound.module.scss';
import notFoundImg from '../../../assets/images/error/notFound.png';

const notFound = (props) => (
  <div className={classes.NotFound}>
    <div className={classes.NotFoundImg}>
      <img src={notFoundImg} alt="" />
    </div>
    {props.message}
  </div>
);

export default notFound;
