/* eslint-disable no-throw-literal */
import { toast } from "react-toastify";
import axiosOrders from "../../axios/axios-orders";

import * as actionTypes from "./actionTypes";

export const clearFollowing = () => (dispatch) =>
  dispatch({ type: actionTypes.CLEAR_FOLLOW });

export const followUserStart = () => {
  return {
    type: actionTypes.FOLLOW_USER_START,
  };
};

export const followUserSuccess = (msg) => {
  return {
    type: actionTypes.FOLLOW_USER_SUCCESS,
    msg: msg,
  };
};

export const unfollowUserSuccess = (msg) => {
  return {
    type: actionTypes.UNFOLLOW_USER_SUCCESS,
    msg: msg,
  };
};
export const unfollowUserFail = (msg) => {
  return {
    type: actionTypes.UNFOLLOW_USER_FAIL,
    msg: msg,
  };
};

export const followUserFail = (error) => {
  return {
    type: actionTypes.FOLLOW_USER_FAIL,
    error: error,
  };
};

export const followUser = (followingId) => {
  return async (dispatch) => {
    try {
      dispatch(followUserStart());
      await axiosOrders.post(`users/follow/${followingId}`).then((response) => {
        dispatch(followUserSuccess(response.data));
      });
    } catch (error) {
      const errorMessage = (await error)
        ? error.response.data.error
        : "Network Error";
      toast.error(errorMessage, { position: toast.POSITION.TOP_CENTER });
      dispatch(followUserFail(error));
    }
  };
};

export const unfollowUser = (followingId) => {
  return (dispatch) => {
    try {
      dispatch(followUserStart());
      axiosOrders.delete(`users/unfollow/${followingId}`).then((response) => {
        dispatch(unfollowUserSuccess(response.data));
      });
    } catch (error) {
      dispatch(unfollowUserFail(error.response.data));
    }
  };
};
