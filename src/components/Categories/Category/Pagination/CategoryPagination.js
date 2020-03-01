import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './CategoryPagination.module.scss';
import { Link } from 'react-router-dom';
import * as actions from '../../../../store/actions/index';

class CategoryPagination extends Component {
  state = {
    disabled: false
  };

  nextButtonHandler(pageNumber, currentPage) {
    let page;
    for (page = 1; page < pageNumber + 1; page++) {
      if (currentPage < page) {
        this.props.onFetchCategories(page);
      }
    }
  }
  previousButtonHandler(pageNumber, currentPage) {
    let page;
    for (page = 1; page < pageNumber + 1; page++) {
      if (currentPage > page) {
        this.props.onFetchCategories(page);
      }
    }
  }
  render() {
    let page;
    let active = false;
    const items = [];
    const { pageNumber } = this.props.paginationInfo;
    const { currentPage } = this.props.paginationInfo;
    // const { nextPage } = this.props.paginationInfo;
    // const { limit } = this.props.paginationInfo;

    for (page = 1; page < pageNumber + 1; page++) {
      active = page === currentPage;

      items.push(
        <Link className={active ? classes.Active : ''} key={page} to="#">
          {page}
        </Link>
      );
    }
    return (
      <div className={classes.CategoryPagination}>
        <Link
          // className={this.state.disabled ? classes.Disable : ''}
          onClick={() => this.previousButtonHandler(pageNumber, currentPage)}
          to="#"
        >
          <span>&#10094;</span>
        </Link>
        {items}
        <Link
          // className={this.state.disabled ? classes.Disable : ''}
          onClick={() => this.nextButtonHandler(pageNumber, currentPage)}
          to="#"
        >
          <span>&#10095;</span>
        </Link>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchCategories: page => dispatch(actions.fetchCategory(page))
  };
};
const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPagination);
