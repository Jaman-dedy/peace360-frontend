import React from "react";
import classes from "./MostViewArticles.module.scss";
import MostViewArticle from "./MostViewArticle/MostViewArticle";

const mostViewArticles = () => (
  <div className={classes.MostViewArticles}>
    <MostViewArticle />
    <MostViewArticle />
    <MostViewArticle />
  </div>
);

export default mostViewArticles;
