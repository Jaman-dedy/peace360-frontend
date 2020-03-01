import React, { Component } from 'react';
import Article from './Article/Article';
import classes from './Articles.module.scss';

class Articles extends Component {
  render() {
    const { articles } = this.props;
    const foundArticle = articles.map(fArticles => {
      return <Article key={fArticles._id} article={fArticles} />;
    });
    return (
      <div id={'articles' + this.props.id} className={classes.Articles}>
        {foundArticle}
      </div>
    );
  }
}

export default Articles;
