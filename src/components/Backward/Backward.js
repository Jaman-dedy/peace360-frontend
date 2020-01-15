import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Backward.module.scss";

const backward = props => (
  <NavLink to={props.link} className={classes.Backward}>
    <span role="img" aria-label="back">&#128072;</span>
  </NavLink>
);

export default backward;
