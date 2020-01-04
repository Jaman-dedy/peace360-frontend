import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Pagination.module.scss";

const pagination = props => (
  <div className={classes.Pagination}>
    <NavLink to="#">
      <span>&#10094;</span>
    </NavLink>{" "}
    &nbsp; | &nbsp;
    <NavLink to="#">
      <span>&#10095;</span>
    </NavLink>
  </div>
);

export default pagination;
