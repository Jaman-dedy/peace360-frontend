import React, { Component } from 'react';
import 'react-animated-slider/build/horizontal.css';
import classes from './ArticleSlider.module.scss';
import Slider from 'react-animated-slider';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import './slider-animations.scss';
import './styles.scss';
import sliderCoverImg from '../../../assets/images/peace-in-africa.jpg';
class ArticleSlider extends Component {
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
                }') no-repeat center center`
              }}
            >
              <div className={classes.Overlay}></div>
              <div className={classes.Inner}>
                <h1>{article.subTitle}</h1>
                <button className={classes.Button}>Read more</button>
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
export default ArticleSlider;
