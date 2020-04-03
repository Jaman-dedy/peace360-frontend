import axiosOrders from '../../axios/axios-orders';

import * as actionTypes from './actionTypes';

export const fetchMyFollowingSuccess = (following) => {
  return {
    type: actionTypes.FETCH_FOLLOWING_SUCCESS,
    followings: following,
  };
};

export const fetchMyFollowingFail = (error) => {
  return {
    type: actionTypes.FETCH_FOLLOWING_FAIL,
    error: error,
  };
};

export const fetchMyFollowingStart = () => {
  return {
    type: actionTypes.FETCH_FOLLOWING_START,
  };
};

export const fetchMyFollowing = () => {
  return async (dispatch) => {
    dispatch(fetchMyFollowingStart());
    try {
      const response = await axiosOrders.get('users/followings');
      dispatch(fetchMyFollowingSuccess(response.data));
    } catch ({ response }) {
      dispatch(fetchMyFollowingFail(response.data));
    }
  };
};
