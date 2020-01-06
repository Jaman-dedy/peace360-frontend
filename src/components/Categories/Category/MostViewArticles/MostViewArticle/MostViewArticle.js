/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import classes from "./MostViewArticle.module.scss";
import experienceImg from "../../../../../assets/images/experience1.jpg";

const mostViewArticle = props => (
  <div className={classes.MostViewArticle}>
    <div className={classes.Image}>
      <img src={experienceImg} alt="" />
    </div>
    <div className={classes.Details}>
      <div className={classes.Title}>
        Peace is a stress-free state of security and calmness
      </div>
      <div className={classes.Detail}>&#128172; 0 | &#128065; 460</div>
    </div>
  </div>
);

export default mostViewArticle;
