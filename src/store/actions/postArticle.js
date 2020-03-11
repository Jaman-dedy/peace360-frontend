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

export const postArticle = (title, body) => {
  return dispatch => {
    dispatch(postArticleStart());
    const articleData = {
      title: title,
      text: body,
      categoryId: '5e685434736b58000440957e'
    };
    console.log('articleData', articleData);
    axiosOrders
      .post('article', articleData)
      .then(response => {
        dispatch(postArticleSuccess(response.data));
      })
      .catch(({ response }) => {
        console.log('response', response);
        dispatch(postArticleFail(response.data.errors));
      });
  };
};
