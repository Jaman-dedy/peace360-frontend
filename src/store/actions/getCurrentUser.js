import axios from "axios";

import * as actionTypes from "./actionTypes";

export const fetchCurrentUserSuccess = (user) => {
  return {
    type: actionTypes.FETCH_CURRENT_USER_SUCCESS,
    user: user,
  };
};

export const fetchCurrentUserFail = (error) => {
  return {
    type: actionTypes.FETCH_CURRENT_USER_FAIL,
    error: error,
  };
};

export const fetchCurrentUserStart = () => {
  return {
    type: actionTypes.FETCH_CURRENT_USER_START,
  };
};

export const fetchCurrentUser = () => {

  return async (dispatch) => {
    dispatch(fetchCurrentUserStart());
    try {
      const response = await axios.get(
        "https://peace360.herokuapp.com/api/auth",
        {
          headers: {
            "x-auth-token": localStorage.token,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      dispatch(fetchCurrentUserSuccess(response.data.user));
    } catch ({ response }) {
      console.log("or here", response);
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
      const response = await axiosOrders.put(`users/updateImage`, {avatar});
      dispatch(editUserPicSuccess(response));
    } catch ({ response }) {
      dispatch(editUserPicFail(response));
    }
  };
};
