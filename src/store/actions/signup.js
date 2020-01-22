/* eslint-disable no-throw-literal */
import axiosOrders from '../../axios/axios-orders';
import * as actionTypes from './actionTypes';

export const registerStart = () => {
  return {
    type: actionTypes.REGISTER_START
  };
};

export const registerSuccess = (token, userId) => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    token: token,
    userId: userId
  };
};

export const registerFail = error => {
  return {
    type: actionTypes.REGISTER_FAIL,
    error: error
  };
};

export const register = (email, password) => {
  return dispatch => {
    dispatch(registerStart());
    const registerData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    axiosOrders
      .post('users', registerData)
      .then(response => {
        localStorage.setItem('token', response.data.token.generate);
        localStorage.setItem('userId', response.data.registeredUser._id);
        dispatch(
          registerSuccess(
            response.data.token.generate,
            response.data.registeredUser._id
          )
        );
      })
      .catch(({ response }) => {
        if (!response) {
          throw { message: 'Check your internet cable' };
        }
        dispatch(registerFail(response.data.errors));
      });
  };
};
