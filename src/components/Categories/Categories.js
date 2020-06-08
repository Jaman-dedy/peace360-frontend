import React from "react";
import Category from "./Category/Category";
import { Button } from "semantic-ui-react";
import Spinner from "../../components/UI/Spinner/Spinner";
import HomePlaceHolder from "../../components/PlaceHolders/Home/index";

import CategoryPagination from "./Category/Pagination/CategoryPagination";
import classes from "./Categories.module.scss";

const categories = (props) => {
  let foundCategories = null;
  let categoryPagination = null;
  const { pageInfo } = props.categories;
  const category = props.categories.categories;

  if (!category) {
    //Category and pagination are fetched at the same time
    foundCategories = <HomePlaceHolder />;
    // categoryPagination = <Spinner />;
  } else {
    foundCategories = category.map((fetchedCategory) => {
      return (
        <Category
          key={fetchedCategory._id}
          category={fetchedCategory}
          setArticleSlidersProps={props.setArticleSlidersProps}
          history={props.history}
        />
      );
    });
    categoryPagination = <CategoryPagination paginationInfo={pageInfo} />;
  }

  return (
    <div className={classes.Categories}>
      {foundCategories}
      <Button>Yes here</Button>
      <HomePlaceHolder />
      {categoryPagination}
    </div>
  );
};

export default categories;
