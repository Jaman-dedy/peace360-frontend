import React from "react";
import Category from "./Category/Category";
import CategoryPagination from "./Category/Pagination/CategoryPagination";
import classes from "./Categories.module.scss";

const categories = props => (
  <div className={classes.Categories}>
    <Category />
    <Category />
    <Category />
    <CategoryPagination />
  </div>
);

export default categories;
