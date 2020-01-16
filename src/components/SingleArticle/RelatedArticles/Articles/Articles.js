import React from 'react';
import Article from '../../../Categories/Category/Articles/Article/Article';
import classes from './Articles.module.scss';

const articles = props => (
  <div className={classes.Articles}>
    <Article />

    <Article />

    <Article />
  </div>
);

export default articles;
