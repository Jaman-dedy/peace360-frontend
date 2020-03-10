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
  console.log('title and body', title, body);
  return dispatch => {
    dispatch(postArticleStart());
    const articleData = {
      title: title,
      text: body,
      categoryId: '5e4feb534af0730004460691'
    };
    axiosOrders
      .post('article', articleData)
      .then(response => {
        // dispatch(postArticleSuccess(response.data));
        console.log('response.data', response.data);
      })
      .catch(({ response }) => {
        // dispatch(postArticleFail(response.data.errors));
        console.log('response.data', response.data);
      });
  };
};
