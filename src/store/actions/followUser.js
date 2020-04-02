/* eslint-disable no-throw-literal */
import axiosOrders from '../../axios/axios-orders';

import * as actionTypes from './actionTypes';

export const followerUserStart = () => {
  return {
    type: actionTypes.FOLLOW_USER_START
  };
};

export const followerUserSuccess = msg => {
  return {
    type: actionTypes.FOLLOW_USER_SUCCESS,
    msg: msg
  };
};

export const followerUserFail = error => {
  return {
    type: actionTypes.FOLLOW_USER_FAIL,
    error: error
  };
};

export const followerUser = articleId => {
  return dispatch => {
    dispatch(followerUserStart());
    axiosOrders
      .put(`users/follow/${articleId}`)
      .then(response => {
        // dispatch(followerUserSuccess(response.data));
        console.log('response.data', response.data);
      })
      .catch(({ response }) => {
        console.log('response', response);
        // dispatch(followerUserFail(response.data.errors));
      });
  };
};
