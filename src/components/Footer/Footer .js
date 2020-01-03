import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.scss";

const footer = props => (
  <div className={classes.Footer}>
    <div className={classes.Title}>peace360</div>
    <div className={classes.SocialMedia}>
      <NavLink to="#">
        <i className="fab fa-facebook"></i>
      </NavLink>
      <NavLink to="#">
        <i className="fab fa-twitter"></i>
      </NavLink>
      <NavLink to="#">
        <i className="fab fa-instagram"></i>
      </NavLink>
    </div>
  </div>
);

export default footer;
