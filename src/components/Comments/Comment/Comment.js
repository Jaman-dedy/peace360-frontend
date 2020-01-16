import React from 'react';
import classes from './Comment.module.scss';
import Like from '../../SingleArticle/FavoriteUser/Like/Like';
import userAvatar from '../../../assets/images/avatar.jpg';

const comment = props => (
  <div className={classes.Comment}>
    <div className={classes.Avatar}>
      <img src={userAvatar} alt="" />
    </div>
    <div className={classes.Details}>
      <strong>Emabush</strong> <span>7 days ago</span>
    </div>
    <div className={classes.Text}>
      Suspendisse egestas fringilla mauris, ut molestie elit viverra vel.
      Praesent a aliquet quam. Donec convallis tempus scelerisque. Suspendisse
      vehicula sapien erat, porta tincidunt leo gravida eget. Nullam ultrices
      quam id ligula iaculis facilisis.
    </div>
    <div className={classes.Like}>
      <Like />
    </div>
  </div>
);
export default comment;
