/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import moment from 'moment';
import classes from './Article.module.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../../../store/actions/index';
import experienceImg from '../../../../../assets/images/peace-in-africa.jpg';

class Article extends Component {
  componentDidMount() {
    this.props.onSetRedirectPath();
  }
  render() {
    const { article } = this.props;
    const { user } = article;
    const timeAgo = moment(article.date).fromNow();
    const { coverPhoto } = article;
    const articlePhotoCover = coverPhoto ? coverPhoto : experienceImg;

    // console.log('article', article);
    return (
      <NavLink to={this.props.redirectUrl}>
        <div className={classes.Article}>
          <div className={classes.CoverPhoto}>
            <img src={articlePhotoCover} alt="experience" />
          </div>
          <div className={classes.Title}>{article.title}</div>
          <div className={classes.Details}>
            {user.username}, {timeAgo} | &#128338; 4 min to read
          </div>
        </div>
      </NavLink>
    );
  }
}

const mapStateToProps = state => {
  return {
    redirectUrl: state.login.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetRedirectPath: () =>
      dispatch(actions.setAuthRedirectPath('/SingleArticle'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
