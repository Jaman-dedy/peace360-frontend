import React from 'react';
import Category from './Category/Category';
import Spinner from '../../components/UI/Spinner/Spinner';

import CategoryPagination from './Category/Pagination/CategoryPagination';
import classes from './Categories.module.scss';

const categories = props => {
  let foundCategories = null;
  const { pageInfo } = props.categories;
  const category = props.categories.categories;
  if (!category) {
    foundCategories = <Spinner />;
  } else {
    foundCategories = category.map(fetchedCategory => {
      return <Category key={fetchedCategory._id} category={fetchedCategory} />;
    });
  }

  return (
    <div className={classes.Categories}>
      {foundCategories}
      <CategoryPagination pagination={pageInfo} />
    </div>
  );
};

export default categories;
