import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import ArticleSlider from './ArticleSlider/ArticleSlider';

const articleSliders = props => (
  <Aux>
    <ArticleSlider articles={props.articles} />
  </Aux>
);
export default articleSliders;
