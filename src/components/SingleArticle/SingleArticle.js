import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import "./Article/Article.scss";
import Layout from "../../hoc/Layout/Layout";
import Wrapper from "../../hoc/Wrapper/Wrapper";
import CreateArticleLink from "../../components/SingleArticle/Article/CreateArticleLink";
import FollowUser from "./FollowUser/FollowUser";
import Tag from "./Tag/Tag";
import Like from "./FavoriteUser/Like/Like";
// import Rate from './FavoriteUser/Rate/Rate';
import CommentForm from "../../containers/CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import SocialShare from "../SocialShare/SocialShare";
import AuthenticatedUser from "../AuthenticatedUser/AuthenticatedUser";
import classes from "./SingleArticle.module.scss";
import articleImg from "../../assets/images/peace-in-africa.jpg";
import AuthenticationAction from "../AuthenticationAction/AuthenticationAction";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

class SingleArticle extends Component {
  componentDidMount() {
    const {
      location: { state },
    } = this.props;
    if (state) {
      const { articleId } = state;
      this.props.onFetchSingleArticle(articleId);
    }
    window.scrollTo(0, 0);
  }
  render() {
    let createArticleLink = "";
    const { article = {} } = this.props;
    let user;
    let followUserComponent;
    let articleId;

    let comments;
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    let coverPhoto = null;
    let tags = null;
    let displaySingleArticle = null;
    let likes = null;

    if (!article) {
      displaySingleArticle = <Spinner />;
      followUserComponent = "";
    } else {
      user = article.user;
      likes = article.likes;
      articleId = article._id;

      followUserComponent = (
        <FollowUser
          user={user}
          article={this.props.article}
          articleId={article._id}
          pathname={this.props.location.pathname}
        />
      );
      tags = article.tags;
      coverPhoto = article.coverPhoto ? article.coverPhoto : articleImg;

      comments = article.comments;
      createArticleLink = this.props.isAuthenticated
        ? "/createArticle"
        : "/login";

      displaySingleArticle = (
        <div className={classes.Content}>
          <div className={classes.ArticleImage}>
            <img src={coverPhoto} alt="" />
          </div>
          <div className={classes.Text}>{ReactHtmlParser(article.text)}</div>
        </div>
      );
    }

    const displayComments = (
      <Wrapper>
        <CommentForm articleId={article && article._id} />
        <Comments comments={comments} />
      </Wrapper>
    );
    return (
      <Layout>
        {/* {this.props.isAuthenticated ? (
          <AuthenticatedUser />
        ) : (
          <AuthenticationAction />
        )} */}

        <CreateArticleLink link={createArticleLink} className="ArticleLink" />

        <div className={classes.SingleArticle}>
          <div className={classes.ArticleTitle}>{article && article.title}</div>
          <div className={classes.ArticleSubTitle}>
            {article && article.Subtitle}
          </div>
          {followUserComponent}
          <SocialShare url={BASE_URL} articleId={article && article._id} />
          {displaySingleArticle}
          {tags &&
            tags.map((tag, index) => {
              return <Tag key={index} tag={tag} />;
            })}
          <div className={classes.Favorite}>
            Like this article
            <Like articleId={articleId} likedObject={likes} />
            {/* <Rate /> */}
          </div>
          {/* <RelatedArticle /> */}
          {this.props.isAuthenticated ? displayComments : null}
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSingleArticle: (articleId) =>
      dispatch(actions.fetchSingleArticle(articleId)),
  };
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated:
      state.register.token !== null || state.login.token !== null,
    loading: state.fetchSingleArticle.loading,
    error: state.fetchSingleArticle.error,
    article: state.fetchSingleArticle.article,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticle);
