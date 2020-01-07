import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./AuthLeftSide.module.scss";

const authLeftSide = props => (
  <div className={classes.Left}>
    <div className={classes.Text}>
      <h1>Peace360</h1>
      <p>
        We promote transformative peace narratives through peacebuilding
        information and education.
      </p>
      <p>
        We inspire, we connect, and we amplify global peacebuilding efforts with
        local stories.
      </p>
      <NavLink to="">
        {" "}
        <span> Read more about peace360</span>
      </NavLink>
    </div>
  </div>
);

export default authLeftSide;
