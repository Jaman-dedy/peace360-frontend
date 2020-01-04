import React from "react";
import Aux from "../../hoc/Aux/Aux";
import ArticleSlider from "./ArticleSlider/ArticleSlider";
import SliderDots from "./SliderDots/SliderDots";

const articleSliders = () => (
  <Aux>
    <ArticleSlider />
    <SliderDots />
  </Aux>
);
export default articleSliders;
