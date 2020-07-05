/* eslint-disable no-throw-literal */
import axiosOrders from '../../axios/axios-orders';

import * as actionTypes from './actionTypes';

export const postArticleStart = () => {
  return {
    type: actionTypes.POST_ARTICLE_START,
  };
};

export const clearPostArticleState = () => {
  return {
    type: actionTypes.CLEAR_POST_ARTICLE
  }
}

export const postArticleSuccess = (article) => {
  return {
    type: actionTypes.POST_ARTICLE_SUCCESS,
    article: article.data,
  };
};

export const postArticleFail = (error) => {
  return {
    type: actionTypes.POST_ARTICLE_FAIL,
    error: error,
  };
};

export const postArticle = (title, subtitle, categoryId, coverPhoto, body, tags) => {


  return (dispatch) => {
    dispatch(postArticleStart());
    const articleData = {
      title: title,
      subTitle: subtitle,
      categoryId,
      coverPhoto,
      text: body,
      tags: tags,

    };

    axiosOrders
      .post('article', articleData)
      .then((response) => {
        dispatch(postArticleSuccess(response.data));
      })
      .catch(({
        response
      }) => {
        dispatch(postArticleFail(response.data.error));
      });

  };
};