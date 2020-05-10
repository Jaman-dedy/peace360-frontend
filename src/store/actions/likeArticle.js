/* eslint-disable no-throw-literal */
import axiosOrders from '../../axios/axios-orders';

import * as actionTypes from './actionTypes';

export const likeArticleStart = () => {
  return {
    type: actionTypes.LIKE_ARTICLE_START,
  };
};

export const likeArticleSuccess = (liked) => {
  return {
    type: actionTypes.LIKE_ARTICLE_SUCCESS,
    liked: liked,
  };
};

export const likeArticleFail = (error) => {
  return {
    type: actionTypes.LIKE_ARTICLE_FAIL,
    error: error,
  };
};

export const likeArticle = (articleId) => {
  return (dispatch) => {
    dispatch(likeArticleStart());
    axiosOrders
      .put(`article/like/${articleId}`)
      .then((response) => {
        dispatch(likeArticleSuccess(response.data));
      })
      .catch(({ response }) => {
        dispatch(likeArticleFail(response.data));
      });
  };
};
