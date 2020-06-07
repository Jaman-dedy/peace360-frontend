import React, { Component } from "react";
import { withRouter } from "react-router";
import moment from "moment";

import classes from "./Article.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../../../store/actions/index";
import experienceImg from "../../../../../assets/images/peace-in-africa.jpg";

class Article extends Component {
  redirectUserHandler = (articleId) => {
    this.props.history.replace({
      pathname: "/singleArticle",
      search: "?id = articleId",
      hash: "#hash",
      state: { articleId },
    });
    this.props.onSetRedirectPath();
  };

  render() {
    const { article = {} } = this.props;
    const { user = {} } = article;
    const { _id: articleId } = article;
    const timeAgo = moment(article.date).fromNow();
    const { coverPhoto } = article;
    const articlePhotoCover = coverPhoto ? coverPhoto : experienceImg;

    return (
      <Link onClick={() => this.redirectUserHandler(articleId)}>
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
const mapDispatchToProps = (dispatch) => {
  return {
    onSetRedirectPath: () =>
      dispatch(actions.setAuthRedirectPath("/singleArticle")),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Article));
