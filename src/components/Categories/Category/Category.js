import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Articles from './Articles/Articles';
import MostViewArticles from './MostViewArticles/MostViewArticles';
import Pagination from './Pagination/Pagination';
import classes from './Category.module.scss';

const category = props => {
  const { category } = props;
  const { articles } = props.category;
  return (
    <Aux>
      <div className={classes.Title}>
        <span>{category.categoryTitle}</span>
      </div>
      <div className={classes.Category}>
        <Articles articles={articles} />
        <Pagination />
        <MostViewArticles />
      </div>
    </Aux>
  );
};
export default category;
