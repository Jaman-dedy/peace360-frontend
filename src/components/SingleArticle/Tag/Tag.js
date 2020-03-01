import React from 'react';
import classes from './Tag.module.scss';

const tag = props => (
  <div className={classes.Tag}>
    <div>{props.tag}</div>
  </div>
);

export default tag;
