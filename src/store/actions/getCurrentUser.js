import axiosOrders from '../../axios/axios-orders';

import * as actionTypes from './actionTypes';

export const fetchCurrentUserSuccess = user => {
  return {
    type: actionTypes.FETCH_CURRENT_USER_SUCCESS,
    user: user
  };
};

export const fetchCurrentUserFail = error => {
  return {
    type: actionTypes.FETCH_CURRENT_USER_FAIL,
    error: error
  };
};

export const fetchCurrentUserStart = () => {
  return {
    type: actionTypes.FETCH_CURRENT_USER_START
  };
};

export const fetchCurrentUser = token => {
  return async dispatch => {
    dispatch(fetchCurrentUserStart());
    try {
      const response = await axiosOrders.get('auh');
      console.log('res', response);
    } catch ({ response }) {
      console.log('response', response);
    }
  };
};
