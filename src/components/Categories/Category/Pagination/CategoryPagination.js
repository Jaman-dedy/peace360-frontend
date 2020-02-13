import React from 'react';
import classes from './CategoryPagination.module.scss';
import { NavLink } from 'react-router-dom';

const categoryPagination = props => (
  <div className={classes.CategoryPagination}>
    <NavLink to="#">
      <span>&#10094;</span>
    </NavLink>
    <NavLink to="#" className={classes.Active}>
      1
    </NavLink>
    <NavLink to="#">2</NavLink>
    <NavLink to="#">3</NavLink>
    <NavLink to="#">4</NavLink>
    <NavLink to="#">5</NavLink>
    <NavLink to="#">6</NavLink>
    <NavLink to="#">
      <span>&#10095;</span>
    </NavLink>
  </div>
);

export default categoryPagination;
