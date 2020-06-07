import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import "react-animated-slider/build/horizontal.css";
import * as actions from "../../../store/actions";
import classes from "./ArticleSlider.module.scss";
import Slider from "react-animated-slider";
import Wrapper from "../../../hoc/Wrapper/Wrapper";
import "./slider-animations.scss";
import "./styles.scss";
import sliderCoverImg from "../../../assets/images/peace-in-africa.jpg";
class ArticleSlider extends Component {
  redirectUserHandler = (articleId) => {
    console.log("this.props", this.props.history);
    this.props.history.replace({
      pathname: "/singleArticle",
      search: "?id = articleId",
      hash: "#hash",
      state: { articleId },
    });
    this.props.onSetRedirectPath();
  };
  render() {
    const { articles } = this.props;
    return (
      <Wrapper>
        <Slider autoplay={4000} className={classes.SliderWrapper}>
          {articles.map((article, index) => (
            <div
              key={index}
              className={classes.SliderContent}
              style={{
                background: `url('${
                  article.coverPhoto ? article.coverPhoto : sliderCoverImg
                }') no-repeat center center`,
              }}
            >
              <div className={classes.Overlay}></div>
              <div className={classes.Inner}>
                <h1>{article.subTitle}</h1>
                <button
                  onClick={() => this.redirectUserHandler(article._id)}
                  className={classes.Button}
                >
                  Read more
                </button>
              </div>
              <section>
                <img src={article.user.avatar} alt={article.user.username} />
                <span>
                  Posted by <strong>{article.user.username}</strong>
                </span>
              </section>
            </div>
          ))}
        </Slider>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetRedirectPath: () =>
      dispatch(actions.setAuthRedirectPath("/singleArticle")),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(ArticleSlider));
