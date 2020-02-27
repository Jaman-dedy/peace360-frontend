import React, { Component } from 'react';
import Article from './Article/Article';
import classes from './Articles.module.scss';

import Aux from '../../../../hoc/Aux/Aux';

class Articles extends Component {
  render() {
    const { articles } = this.props;
    const foundArticle = articles.map(fArticles => {
      return (
        <Article
          key={fArticles._id}
          article={fArticles}
          // setArticleSlidersProps={this.props.setArticleSlidersProps}
        />
      );
    });
    return (
      <div id={'articles' + this.props.id} className={classes.Articles}>
        {foundArticle}
      </div>
    );
  }
}

export default Articles;
