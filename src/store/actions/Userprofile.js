import axiosOrders from '../../axios/axios-orders';

import * as actionTypes from './actionTypes';

export const fetchProfileUserSuccess = profile => {
  return {
    type: actionTypes.FETCH_PROFILE_USER_SUCCESS,
    profile
  };
};

export const fetchProfileUserFail = error => {
  return {
    type: actionTypes.FETCH_PROFILE_USER_FAIL,
    error: error
  };
};

export const fetchProfileUserStart = () => {
  return {
    type: actionTypes.FETCH_PROFILE_USER_START
  };
};

export const fetchProfileUser = id => {
  return async dispatch => {
    dispatch(fetchProfileUserStart());
    try {
      const response = await axiosOrders.get(`profile/${id}`);
      dispatch(fetchProfileUserSuccess(response.data.profile));
    } catch ({ response }) {
      dispatch(fetchProfileUserFail(response));
    }
  };
};

export const createOrEditProfileUserSuccess = profile => {
  return {
    type: actionTypes.CREATE_OR_EDIT_PROFILE_USER_SUCCESS,
    profile
  };
};

export const createOrEditProfileUserFail = error => {
  return {
    type: actionTypes.CREATE_OR_EDIT_PROFILE_USER_FAIL,
    error: error
  };
};

export const createOrEditProfileUserStart = () => {
  return {
    type: actionTypes.CREATE_OR_EDIT_PROFILE_USER_START
  };
};

export const createOrEditProfileUser = (body = {}) => {
  return async dispatch => {
    dispatch(createOrEditProfileUserStart());
    try {
      const response = await axiosOrders.post(`profile/`, body);
      dispatch(createOrEditProfileUserSuccess(response.data.profile));
    } catch ({ response }) {
      dispatch(createOrEditProfileUserFail(response));
    }
  };
};
