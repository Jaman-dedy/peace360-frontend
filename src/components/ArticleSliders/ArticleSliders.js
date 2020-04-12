import React from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import ArticleSlider from './ArticleSlider/ArticleSlider';

const articleSliders = props => (
  <Wrapper>
    <ArticleSlider articles={props.articles} />
  </Wrapper>
);
export default articleSliders;
