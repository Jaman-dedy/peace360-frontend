/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import Carousel from "./Carousel/Caoursel";
import classes from "./Carousels.module.scss";

const carousel = () => (
  <div className={classes.Carousels} data-flickity='{ "autoPlay": true  }'>
    <Carousel />
  </div>
);

export default carousel;
