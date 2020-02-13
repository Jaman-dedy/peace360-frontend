import axiosOrders from '../../axios/axios-orders';

import * as actionTypes from './actionTypes';

export const fetchCategorySuccess = category => {
  return {
    type: actionTypes.FETCH_CATEGORY_SUCCESS,
    category: category
  };
};

export const fetchCategoryFail = error => {
  return {
    type: actionTypes.FETCH_CATEGORY_FAIL,
    error: error
  };
};

export const fetchCategoryStart = () => {
  return {
    type: actionTypes.FETCH_CATEGORY_START
  };
};

export const fetchCategory = () => {
  return async dispatch => {
    dispatch(fetchCategoryStart());
    try {
      const response = await axiosOrders.get('category/getAll?page=1');
      dispatch(fetchCategorySuccess(response.data));
    } catch ({ response }) {
      dispatch(fetchCategoryFail(response.data.message));
    }
  };
};
