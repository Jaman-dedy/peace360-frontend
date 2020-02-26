import axiosOrders from '../../axios/axios-orders';

import * as actionTypes from './actionTypes';

export const fetchCategoriesSuccess = category_list => {
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    category_list: category_list
  };
};

export const fetchCategoriesFail = error => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAIL,
    error: error
  };
};

export const fetchCategoriesStart = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES_START
  };
};

export const fetchCategories = () => {
  return async dispatch => {
    dispatch(fetchCategoriesStart());
    try {
      const response = await axiosOrders.get('/category/getAll');
      dispatch(fetchCategoriesSuccess(response.data));
    } catch ({ response }) {
      dispatch(fetchCategoriesFail(response.data));
    }
  };
};

export const createCategorySuccess = payload => {
  return {
    type: actionTypes.CREATE_CATEGORY_SUCCESS,
    payload
  };
};

export const createCategoryFail = error => {
  return {
    type: actionTypes.CREATE_CATEGORY_FAIL,
    error: error
  };
};

export const createCategoryStart = () => {
  return {
    type: actionTypes.CREATE_CATEGORY_START
  };
};

export const createCategory = (body = {}) => {
  return async dispatch => {
    dispatch(createCategoryStart());
    try {
      const response = await axiosOrders.post('/category/create', body);
      dispatch(createCategorySuccess(response.data));
    } catch ({ response }) {
      dispatch(createCategoryFail(response));
    }
  };
};

export const deleteCategorySuccess = payload => {
  return {
    type: actionTypes.DELETE_CATEGORY_SUCCESS,
    payload
  };
};

export const deleteCategoryFail = error => {
  return {
    type: actionTypes.DELETE_CATEGORY_FAIL,
    error: error
  };
};

export const deleteCategoryStart = () => {
  return {
    type: actionTypes.DELETE_CATEGORY_START
  };
};

export const deleteCategory = categoryTitle => {
  return async dispatch => {
    dispatch(deleteCategoryStart());
    try {
      const response = await axiosOrders.delete(
        `/category/delete/${categoryTitle}`
      );
      dispatch(deleteCategorySuccess(response.data));
    } catch ({ response }) {
      dispatch(deleteCategoryFail(response));
    }
  };
};

export const updateCategorySuccess = (payload = {}) => {
  return {
    type: actionTypes.UPDATE_CATEGORY_SUCCESS,
    payload
  };
};

export const updateCategoryFail = error => {
  return {
    type: actionTypes.UPDATE_CATEGORY_FAIL,
    error: error
  };
};

export const updateCategoryStart = () => {
  return {
    type: actionTypes.UPDATE_CATEGORY_START
  };
};

export const updateCategory = (categoryTitle, body) => {
  return async dispatch => {
    dispatch(updateCategoryStart());
    try {
      const response = await axiosOrders.patch(
        `/category/update/${categoryTitle}`,
        body
      );
      dispatch(updateCategorySuccess({ categoryTitle: categoryTitle,response: response.data }))
    } catch ({ response }) {
      dispatch(updateCategoryFail(response));
    }
  };
};
