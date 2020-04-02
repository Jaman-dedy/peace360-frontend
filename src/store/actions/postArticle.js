/* eslint-disable no-throw-literal */
import axiosOrders from '../../axios/axios-orders';

import * as actionTypes from './actionTypes';

export const postArticleStart = () => {
  return {
    type: actionTypes.POST_ARTICLE_START
  };
};

export const postArticleSuccess = article => {
  return {
    type: actionTypes.POST_ARTICLE_SUCCESS,
    article: article
  };
};

export const postArticleFail = error => {
  return {
    type: actionTypes.POST_ARTICLE_FAIL,
    error: error
  };
};

export const postArticle = (title, subtitle, body, tags) => {
  return dispatch => {
    dispatch(postArticleStart());
    const articleData = {
      title: title,
      subTitle: subtitle,
      text: body,
      // tags: tags,
      categoryId: '5e6d2e4bb6531f0004a8d947'
    };
    axiosOrders
      .post('article', articleData)
      .then(response => {
        dispatch(postArticleSuccess(response.data));
      })
      .catch(({ response }) => {
        dispatch(postArticleFail(response.data.errors));
      });
  };
};
