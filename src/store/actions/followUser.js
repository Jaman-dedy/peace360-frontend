/* eslint-disable no-throw-literal */
import axiosOrders from '../../axios/axios-orders';

import * as actionTypes from './actionTypes';

export const followUserStart = () => {
  return {
    type: actionTypes.FOLLOW_USER_START
  };
};

export const followUserSuccess = msg => {
  return {
    type: actionTypes.FOLLOW_USER_SUCCESS,
    msg: msg
  };
};

export const followUserFail = error => {
  return {
    type: actionTypes.FOLLOW_USER_FAIL,
    error: error
  };
};

export const followUser = articleId => {
  return dispatch => {
    dispatch(followUserStart());
    axiosOrders
      .put(`users/follow/${articleId}`)
      .then(response => {
        dispatch(followUserSuccess(response.data));
        console.log('response.data', response.data);
      })
      .catch(({ response }) => {
        console.log('response', response);
        dispatch(followUserFail(response.data));
      });
  };
};
