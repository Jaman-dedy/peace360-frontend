/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import moment from 'moment';

import classes from './Article.module.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../../../store/actions/index';
import experienceImg from '../../../../../assets/images/peace-in-africa.jpg';

class Article extends Component {
  componentDidMount() {
    this.props.onSetRedirectPath();
  }

  setRedirectUrl = (articleId) => {
    this.props.onSetRedirectPath(articleId);
  };

  render() {
    const { article = {} } = this.props;
    const { user = {} } = article;
    const { _id: articleId } = article;
    const timeAgo = moment(article.date).fromNow();
    const { coverPhoto } = article;
    const articlePhotoCover = coverPhoto ? coverPhoto : experienceImg;

    return (
      <Link
        // to={this.props.redirectUrl}
        to={{
          pathname: this.props.redirectUrl,
          search: '?id = articleId',
          hash: '#hash',
          state: { articleId },
        }}
        onClick={() => this.setRedirectUrl(articleId)}
      >
        <div className={classes.Article}>
          <div className={classes.CoverPhoto}>
            <img src={articlePhotoCover} alt="experience" />
          </div>
          <div className={classes.Title}>{article.title}</div>
          <div className={classes.Details}>
            {user.username}, {timeAgo} | &#128338; 4 min to read
          </div>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    redirectUrl: state.login.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetRedirectPath: () =>
      dispatch(actions.setAuthRedirectPath('/SingleArticle/')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
