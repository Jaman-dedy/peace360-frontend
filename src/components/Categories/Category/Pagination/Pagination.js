import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Pagination.module.scss';

const pagination = props => (
  <div className={classes.Pagination}>
    <Link to="#" onClick={props.scrollToLeft}>
      <span>&#10094;</span>
    </Link>{' '}
    &nbsp; | &nbsp;
    <Link to="#" onClick={props.scrollToRight}>
      <span>&#10095;</span>
    </Link>
  </div>
);

export default pagination;
