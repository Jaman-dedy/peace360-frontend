import React from "react";
import Category from "./Category/Category";
import classes from "./Categories.module.scss";

const categories = props => (
  <div className={classes.Categories}>
    <Category />
    <Category />
    <Category />
  </div>
);

export default categories;
