import axiosOrders from '../../axios/axios-orders';

import * as actionTypes from './actionTypes';

export const fetchProfileUserSuccess = profile => {
         return {
           type: actionTypes.FETCH_PROFILE_USER_SUCCESS,
          profile
         };
       };

export const fetchCurrentUserFail = error => {
  return {
    type: actionTypes.FETCH_PROFILE_USER_FAIL,
    error: error
  };
};

export const fetchCurrentUserStart = () => {
  return {
    type: actionTypes.FETCH_PROFILE_USER_START
  };
};

export const fetchProfileUser = () => {
  return async dispatch => {
    dispatch(fetchCurrentUserStart());
    try {
      const response = await axiosOrders.get('/profile/me');  
      dispatch(fetchProfileUserSuccess(response.data.profile));
    } catch ({ response }) {
      dispatch(fetchCurrentUserFail(response.data.msg));
    }
  };
};
