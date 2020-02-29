/* eslint-disable no-throw-literal */
import axiosOrders from '../../axios/axios-orders';

import * as actionTypes from './actionTypes';

export const postCommentStart = () => {
  return {
    type: actionTypes.POST_COMMENT_START
  };
};

export const postCommentSuccess = comment => {
  return {
    type: actionTypes.POST_COMMENT_SUCCESS,
    comment: comment
  };
};

export const postCommentFail = error => {
  return {
    type: actionTypes.POST_COMMENT_FAIL,
    error: error
  };
};

export const postComment = (text, articleId) => {
  return dispatch => {
    dispatch(postCommentStart());
    const commentData = {
      text: text
    };
    axiosOrders
      .post(`comment/${articleId}`, commentData)
      .then(response => {
        console.log('response', response);
        dispatch(postCommentSuccess(response.data.comment));
      })
      .catch(({ response }) => {
        console.log('response', response);
        dispatch(postCommentFail(response.data.errors));
      });
  };
};
