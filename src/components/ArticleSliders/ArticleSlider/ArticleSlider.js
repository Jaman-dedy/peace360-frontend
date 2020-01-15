import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import classes from './ArticleSlider.module.scss';
import Aux from '../../../hoc/Aux/Aux';
import './slider-animations.scss';
import './styles.scss';
const content = [
  {
    title:
      ' Peace is the result of retraining your mind to process life as it is, rather than as you think it should be',
    description:
      ' Peace is the result of retraining your mind to process life as it is, rather than as you think it should be',
    button: 'Read More',
    image:
      'https://www.theladders.com/wp-content/uploads/friends-happy-190821-800x450.jpg',
    user: 'Luan Gjokaj',
    userProfile: 'https://i.imgur.com/JSW6mEk.png'
  },
  {
    title:
      'You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level',
    description:
      " People that are happy all the time work at it. It's not because they have perfect lives and situations go their way.",
    button: 'Read More',
    image:
      'http://www.politurco.com/wp-content/uploads/2019/10/earth-africa-696x464.jpg',
    user: 'Erich Behrens',
    userProfile: 'https://i.imgur.com/0Clfnu7.png'
  },
  {
    title:
      'Peace is the result of retraining your mind to process life as it is, rather than as you think it should be',
    description:
      'Peace is the result of retraining your mind to process life as it is, rather than as you think it should be',
    button: 'Read More',
    image:
      'http://nicolenichols.com/blog/wp-content/uploads/2013/01/Africa-Documentary6609.jpg',
    user: 'Bruno Vizovskyy',
    userProfile: 'https://i.imgur.com/4KeKvtH.png'
  }
];
const articleSlider = props => (
  <Aux>
    <Slider autoplay={4000} className={classes.SliderWrapper}>
      {content.map((item, index) => (
        <div
          key={index}
          className={classes.SliderContent}
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className={classes.Overlay}></div>
          <div className={classes.Inner}>
            <h1>{item.title}</h1>
            <button className={classes.Button}>{item.button}</button>
          </div>
          <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by <strong>{item.user}</strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>
  </Aux>
);

export default articleSlider;
