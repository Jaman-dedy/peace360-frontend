import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Articles from './Articles/Articles';
import MostViewArticles from './MostViewArticles/MostViewArticles';
import Pagination from './Pagination/Pagination';
import classes from './Category.module.scss';

class Category extends Component {
  scrollToLeftHandler(id) {
    const articleId = `articles${id}`;
    document.getElementById(articleId).scrollLeft += 40;
  }
  scrollToRightHandler(id) {
    const articleId = `articles${id}`;
    document.getElementById(articleId).scrollLeft -= 40;
  }
  render() {
    const { category } = this.props;
    const categoryId = category._id;
    const { articles } = this.props.category;

    const titleCategory = articles.length ? category.categoryTitle : '';
    const mostViewArticles =
      !articles.length || articles.length < 3 ? '' : <MostViewArticles />;
    const articlePagination =
      !articles.length || articles.length < 3 ? (
        ''
      ) : (
        <Pagination
          scrollToLeft={() => this.scrollToLeftHandler(categoryId)}
          scrollToRight={() => this.scrollToRightHandler(categoryId)}
        />
      );
    return (
      <Aux>
        <div className={classes.Title}>
          <span>{titleCategory}</span>
        </div>
        <div className={classes.Category}>
          <Articles id={categoryId} articles={articles} />
          {articlePagination}
          {mostViewArticles}
        </div>
      </Aux>
    );
  }
}
export default Category;
