import React from "react";
import classes from "./ArticleSlider.module.scss";
import sliderImg from "../../../assets/images/happy.jpg";
// className={[classes.Button, classes[props.btnType]].join(" ")}

const articleSlider = props => (
  <div className={[classes.ArticleSlider, classes.fade].join(' ')}>
    <div className={classes.Slider}>
      <div className={classes.Overlay}></div>
      <img src={sliderImg} alt="" />
    </div>
    <div className={classes.FrontTitle}>
      Peace is the result of retraining your mind to process life as it is,
      rather than as you think it should be
    </div>
  </div>
);

export default articleSlider;
