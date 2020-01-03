import React from "react";
import classes from "./Logo.module.scss";
import peace360Logo from "../../assets/images/logo.png";

const logo = props => (
  <div className={classes.Logo}>
    <img src={peace360Logo} alt="peace360maker" />
  </div>
);

export default logo;
