import React from 'react';
import Article from './Article/Article';
import classes from './Articles.module.scss';

const articles = props => {
  const { articles } = props;
  const foundArticle = articles.map(fArticles => {
    return <Article key={fArticles._id} article={articles} />;
  });
  return <div className={classes.Articles}>{foundArticle}</div>;
};

export default articles;
