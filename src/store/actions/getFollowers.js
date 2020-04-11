import axiosOrders from '../../axios/axios-orders';

import * as actionTypes from './actionTypes';

export const fetchMyFollowersSuccess = (followers) => {
  return {
    type: actionTypes.FETCH_FOLLOWERS_SUCCESS,
    followers: followers,
  };
};

export const fetchMyFollowersFail = (error) => {
  return {
    type: actionTypes.FETCH_FOLLOWERS_FAIL,
    error: error,
  };
};

export const fetchMyFollowersStart = () => {
  return {
    type: actionTypes.FETCH_FOLLOWERS_START,
  };
};

export const fetchMyFollowers = () => {
  return async (dispatch) => {
    dispatch(fetchMyFollowersStart());
    try {
      const response = await axiosOrders.get('users/followers');
      dispatch(fetchMyFollowersSuccess(response.data.myFollowers));
    } catch ({ response }) {
      dispatch(fetchMyFollowersFail(response.data));
    }
  };
};
