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

export const fetchCurrentUser = () => {
  return async dispatch => {
    dispatch(fetchCurrentUserStart());
    try {
      const response = await axiosOrders.get('auth');
      // cb(response.data.user);
      dispatch(fetchCurrentUserSuccess(response.data.user));
    } catch ({ response }) {
      dispatch(fetchCurrentUserFail(response));
    }
  };
};


export const editUserPicSuccess = (user) => {
  return {
    type: actionTypes.EDIT_USER_PIC_SUCCESS,
    user,
  };
};

export const editUserPicFail = (error) => {
  return {
    type: actionTypes.EDIT_USER_PIC_FAIL,
    error: error,
  };
};

export const editUserPicStart = () => {
  return {
    type: actionTypes.EDIT_USER_PIC_START,
  };
};

export const editUserPic = (avatar) => {
  return async (dispatch) => {
    dispatch(editUserPicStart());
    try {
      const response = await axiosOrders.put(`users/updateImage`, avatar);
      console.log("response", response);
      dispatch(editUserPicSuccess(response));
    } catch ({ response }) {
      dispatch(editUserPicFail(response));
    }
  };
};
