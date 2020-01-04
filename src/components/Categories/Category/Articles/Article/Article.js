/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import classes from "./Article.module.scss";
import experienceImg from "../../../../../assets/images/experience1.jpg";
import { NavLink } from "react-router-dom";

const article = props => (
  <NavLink to="#">
    <div className={classes.Article}>
      <div>
        <img src={experienceImg} alt="experience" />
      </div>
      <div className={classes.Title}>
        Peace is a stress-free state of security and calmness
      </div>
      <div className={classes.Details}>
        EmaBush 2 days ago | &#128338; 4 min to read
      </div>
    </div>
  </NavLink>
);

export default article;
