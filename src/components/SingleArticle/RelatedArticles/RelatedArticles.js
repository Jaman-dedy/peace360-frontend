import React from 'react';
import Articles from './Articles/Articles';
import Pagination from '../../Categories/Category/Pagination/Pagination';
import classes from './RelatedArticles.module.scss';

const relatedArticle = () => (
  <div className={classes.RelatedArticles}>
    <div className={classes.Title}>
      <span>Related article</span>
    </div>
    <Articles />
    <div className={classes.Pagination}>
      <Pagination />
    </div>
  </div>
);

export default relatedArticle;
