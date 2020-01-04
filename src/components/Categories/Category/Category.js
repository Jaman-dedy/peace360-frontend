import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Articles from "./Articles/Articles";
import MostViewArticles from "./MostViewArticles/MostViewArticles";
import Pagination from "./Pagination/Pagination";
import classes from "./Category.module.scss";

const category = (props) => (
  <Aux>
    <div className={classes.Title}>
      <span>Gender and civic engagement</span>
    </div>
    <div className={classes.Category}>
      <Articles />
      <Pagination />
      <MostViewArticles />
    </div>
  </Aux>
);
export default category;
