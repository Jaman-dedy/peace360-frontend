/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MenuItem.module.scss";

const menuItem = props => (
  <NavLink
    className={classes.MenuItem}
    to={props.link}
    exact={props.exact}
    activeClassName={classes.active}
  >
    {props.children}
  </NavLink>
);
export default menuItem;
