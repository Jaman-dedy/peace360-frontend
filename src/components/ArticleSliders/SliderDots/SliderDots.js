import React from "react";
import classes from "./SliderDots.module.scss";

const sliderDots = () => (
  <div className={classes.SliderDots}>
    <span className={classes.Dots}></span>
    <span className={classes.Dots}></span>
    <span className={classes.Dots}></span>
  </div>
);

export default sliderDots;
