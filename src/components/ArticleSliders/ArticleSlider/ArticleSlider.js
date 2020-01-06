import React from "react";
import classes from "./ArticleSlider.module.scss";
import sliderImg from "../../../assets/images/happy.jpg";
import sliderImg1 from "../../../assets/images/slider1.jpg";
import sliderImg2 from "../../../assets/images/slider2.jpg";
import Aux from "../../../hoc/Aux/Aux";
import './Article.scss';
const articleSlider = props => (
  <Aux>
    <div className="article-slider fade">
      <div className={classes.Slider}>
        <div className={classes.Overlay}></div>
        <img src={sliderImg} alt="" />
      </div>
      <div className={classes.FrontTitle}>
        Peace is the result of retraining your mind to process life as it is,
        rather than as you think it should be
      </div>
    </div>
    <div className="article-slider fade">
      <div className={classes.Slider}>
        <div className={classes.Overlay}></div>
        <img src={sliderImg1} alt="" />
      </div>
      <div className={classes.FrontTitle}>
        You find peace not by rearranging the circumstances of your life, but by
        realizing who you are at the deepest level
      </div>
    </div>
    <div className="article-slider fade">
      <div className={classes.Slider}>
        <div className={classes.Overlay}></div>
        <img src={sliderImg2} alt="" />
      </div>
      <div className={classes.FrontTitle}>
        People that are happy all the time work at it. It's not because they
        have perfect lives and situations go their way.
      </div>
    </div>
  </Aux>
);

export default articleSlider;
