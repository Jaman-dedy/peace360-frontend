/* eslint-disable no-throw-literal */
import axiosOrders from '../../axios/axios-orders';

import * as actionTypes from './actionTypes';

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START
  };
};

export const loginSuccess = (token, userId) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token: token,
    userId: userId
  };
};

export const loginFail = error => {
  return {
    type: actionTypes.LOGIN_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const login = (email, password) => {
  return dispatch => {
    dispatch(loginStart());
    const loginData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    // let url = 'users/login'
    axiosOrders
      .post('users/login', loginData)
      .then(response => {
        localStorage.setItem('token', response.data.token.generate);
        localStorage.setItem('userId', response.data.user._id);
        localStorage.setItem('user', response.data);
        dispatch(
          loginSuccess(response.data.token.generate, response.data.user._id)
        );
      })
      .catch(({ response }) => {
        if (!response) {
          throw { message: 'Check your internet cable' };
        }
        dispatch(loginFail(response.data.errors));
      });
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

export const loginCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const userId = localStorage.getItem('userId');
      dispatch(loginSuccess(token, userId));
    }
  };
};
