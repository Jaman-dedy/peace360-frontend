import React from 'react';
import moment from 'moment';
import classes from './Comment.module.scss';
// import Like from '../../SingleArticle/FavoriteUser/Like/Like';
import userAvatar from '../../../assets/images/avatar.jpg';

const comment = props => (
  <div className={classes.Comment}>
    <div className={classes.Avatar}>
      <img
        src={props.comment.avatar ? props.comment.avatar : userAvatar}
        alt=""
      />
    </div>
    <div className={classes.Details}>
      <strong>
        {props.comment.name ? props.comment.name : 'Peace Activist'}
      </strong>{' '}
      <span>{moment(props.comment.date).fromNow()}</span>
    </div>
    <div className={classes.Text}>{props.comment.text}</div>
    {/* <div className={classes.Like}>
        <Like />
      </div> */}
  </div>
);

export default comment;
