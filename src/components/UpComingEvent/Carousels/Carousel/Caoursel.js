/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import classes from "./Carousel.module.scss";
import Aux from "../../../../hoc/Aux/Aux";
import carouselImg from "../../../../assets/images/experience1.jpg";

const carousel = () => (
  <Aux>
    <div className={classes.Carousel}>
      <div>
        <img src={carouselImg} alt="" />
      </div>
      <div className={classes.Title}>
        Peace is a stress-free state of security and calmness
      </div>
      <div className={classes.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
    </div>
    <div className={classes.Carousel}>
      <div>
        <img src={carouselImg} alt="" />
      </div>
      <div className={classes.Title}>
        Peace is a stress-free state of security and calmness
      </div>
      <div className={classes.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
    </div>
    <div className={classes.Carousel}>
      <div>
        <img src={carouselImg} alt="" />
      </div>
      <div className={classes.Title}>
        Peace is a stress-free state of security and calmness
      </div>
      <div className={classes.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
    </div>
    <div className={classes.Carousel}>
      <div>
        <img src={carouselImg} alt="" />
      </div>
      <div className={classes.Title}>
        Peace is a stress-free state of security and calmness
      </div>
      <div className={classes.Detail}>📍Kinshasa | 📅 24th Oct 2019</div>
    </div>
  </Aux>
);

export default carousel;
