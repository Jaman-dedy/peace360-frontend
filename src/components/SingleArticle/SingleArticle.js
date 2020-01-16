import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import FollowUser from './FollowUser/FollowUser';
import Tag from './Tag/Tag';
import Like from './FavoriteUser/Like/Like';
import Rate from './FavoriteUser/Rate/Rate';
import RelatedArticle from './RelatedArticles/RelatedArticles';
import CommentForm from '../../containers/CommentForm/CommentForm';
import Comments from '../Comments/Comments';
import SocialShare from '../SocialShare/SocialShare';
import AuthenticatedUser from '../AuthenticatedUser/AuthenticatedUser';
import classes from './SingleArticle.module.scss';
import articleImg from '../../assets/images/experience1.jpg';

const singleArticle = () => (
  <Layout>
    <AuthenticatedUser />
    <div className={classes.SingleArticle}>
      <div className={classes.ArticleTitle}>
        React app structure by feature guidelines
      </div>
      <div className={classes.ArticleSubTitle}>
        React app structure by feature guidelines
      </div>

      <FollowUser />
      <SocialShare />
      <div className={classes.Content}>
        <div className={classes.ArticleImage}>
          <img src={articleImg} alt="" />
        </div>
        <div className={classes.Text}>
          Suspendisse egestas fringilla mauris, ut molestie elit viverra vel.
          Praesent a aliquet quam. Donec convallis tempus scelerisque.
          Suspendisse vehicula sapien erat, porta tincidunt leo gravida eget.
          Nullam ultrices quam id ligula iaculis facilisis. Cras convallis massa
          vel luctus tempor. Nullam pharetra sed nunc ac bibendum. Sed lobortis
          turpis ut nibh porttitor pretium porta in odio. Quisque faucibus porta
          dolor sed facilisis. Etiam placerat felis nec augue efficitur, vel
          mollis ipsum aliquam. Suspendisse egestas fringilla mauris, ut
          molestie elit viverra vel. Praesent a aliquet quam. Donec convallis
          tempus scelerisque. Suspendisse vehicula sapien erat, porta tincidunt
          leo gravida eget. Nullam ultrices quam id ligula iaculis facilisis.
          Cras convallis massa vel luctus tempor. Nullam pharetra sed nunc ac
          bibendum. Sed lobortis turpis ut nibh porttitor pretium porta in odio.
          Quisque faucibus porta dolor sed facilisis. Etiam placerat felis nec
          augue efficitur, vel mollis ipsum aliquam. Suspendisse egestas
          fringilla mauris, ut molestie elit viverra vel. Praesent a aliquet
          quam. Donec convallis tempus scelerisque. Suspendisse vehicula sapien
          erat, porta tincidunt leo gravida eget. Nullam ultrices quam id ligula
          iaculis facilisis. Cras convallis massa vel luctus tempor. Nullam
          pharetra sed nunc ac bibendum. Sed lobortis turpis ut nibh porttitor
          pretium porta in odio. Quisque faucibus porta dolor sed facilisis.
          Etiam placerat felis nec augue efficitur, vel mollis ipsum aliquam.
          Suspendisse egestas fringilla mauris, ut molestie elit viverra vel.
          Praesent a aliquet quam. Donec convallis tempus scelerisque.
          Suspendisse vehicula sapien erat, porta tincidunt leo gravida eget.
          Nullam ultrices quam id ligula iaculis facilisis. Cras convallis massa
          vel luctus tempor. Nullam pharetra sed nunc ac bibendum. Sed lobortis
          turpis ut nibh porttitor pretium porta in odio. Quisque faucibus porta
          dolor sed facilisis. Etiam placerat felis nec augue efficitur, vel
          mollis ipsum aliquam. Suspendisse egestas fringilla mauris, ut
          molestie elit viverra vel. Praesent a aliquet quam. Donec convallis
          tempus scelerisque. Suspendisse vehicula sapien erat, porta tincidunt
          leo gravida eget. Nullam ultrices quam id ligula iaculis facilisis.
          Cras convallis massa vel luctus tempor. Nullam pharetra sed nunc ac
          bibendum. Sed lobortis turpis ut nibh porttitor pretium porta in odio.
          Quisque faucibus porta dolor sed facilisis. Etiam placerat felis nec
          augue efficitur, vel mollis ipsum aliquam. Suspendisse egestas
          fringilla mauris, ut molestie elit viverra vel. Praesent a aliquet
          quam. Donec convallis tempus scelerisque. Suspendisse vehicula sapien
          erat, porta tincidunt leo gravida eget. Nullam ultrices quam id ligula
          iaculis facilisis. Cras convallis massa vel luctus tempor. Nullam
          pharetra sed nunc ac bibendum. Sed lobortis turpis ut nibh porttitor
          pretium porta in odio. Quisque faucibus porta dolor sed facilisis.
          Etiam placerat felis nec augue efficitur, vel mollis ipsum aliquam.
        </div>
      </div>
      <Tag />
      <Tag />
      <Tag />

      <div className={classes.Favorite}>
        Rate & like this article
        <Like />
        <Rate />
      </div>
      <RelatedArticle />
      <CommentForm />
      <Comments />
    </div>
  </Layout>
);

export default singleArticle;
