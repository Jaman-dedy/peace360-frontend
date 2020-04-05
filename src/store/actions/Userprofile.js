import axiosOrders from '../../axios/axios-orders';

import * as actionTypes from './actionTypes';

export const fetchProfileUserSuccess = (profile) => {
  return {
    type: actionTypes.FETCH_PROFILE_USER_SUCCESS,
    profile,
  };
};

export const fetchProfileUserFail = (error) => {
  return {
    type: actionTypes.FETCH_PROFILE_USER_FAIL,
    error: error,
  };
};

export const fetchProfileUserStart = () => {
  return {
    type: actionTypes.FETCH_PROFILE_USER_START,
  };
};

export const fetchProfileUser = (id, cb) => {
  return async (dispatch) => {
    dispatch(fetchProfileUserStart());
    try {
      const response = await axiosOrders.get(`profile/${id}`);
      cb(response.data);
      dispatch(fetchProfileUserSuccess(response.data.profile));
    } catch ({ response }) {
      cb(response);
      dispatch(fetchProfileUserFail(response));
    }
  };
};

export const editProfileUserSuccess = (profile) => {
  return {
    type: actionTypes.EDIT_PROFILE_USER_SUCCESS,
    profile,
  };
};

export const editProfileUserFail = (error) => {
  return {
    type: actionTypes.EDIT_PROFILE_USER_FAIL,
    error: error,
  };
};

export const editProfileUserStart = () => {
  return {
    type: actionTypes.EDIT_PROFILE_USER_START,
  };
};

export const editProfileUser = (body = {}, cd) => {
  return async (dispatch) => {
    dispatch(editProfileUserStart());
    try {
      const response = await axiosOrders.put(`profile/edit`, body);

      cd(response);
      dispatch(editProfileUserSuccess(response.data.profile));
    } catch ({ response }) {
      dispatch(editProfileUserFail(response));
    }
  };
};

export const createProfileUserSuccess = (profile) => {
  return {
    type: actionTypes.CREATE_PROFILE_USER_SUCCESS,
    profile,
  };
};

export const createProfileUserFail = (error) => {
  return {
    type: actionTypes.CREATE_PROFILE_USER_FAIL,
    error: error,
  };
};

export const createProfileUserStart = () => {
  return {
    type: actionTypes.CREATE_PROFILE_USER_START,
  };
};

export const createProfileUser = (body = {}, cd) => {
  return async (dispatch) => {
    dispatch(createProfileUserStart());
    try {
      const response = await axiosOrders.post(`profile/create`, body);

      cd(response);
      dispatch(createProfileUserSuccess(response.data.profile));
    } catch ({ response }) {
      dispatch(createProfileUserFail(response));
    }
  };
};
