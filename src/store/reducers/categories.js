import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
  categories: [],
  category: {},
  error: null,
  loading: false
};

const fetchCategoriesStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const fetchCategoriesSuccess = (state, action) => {
  return updatedObject(state, {
    categories: action.category_list.data,
    error: null,
    loading: false
  });
};

const fetchCategoriesFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false
  });
};

const createCategoryStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const createCategorySuccess = (state, action) => {
  return updatedObject(state, {
    categories: [...state.categories, action.payload.data],
    error: null,
    loading: false
  });
};

const createCategoryFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false
  });
};

const deleteCategoryStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const deleteCategorySuccess = (state, action) => {
  return updatedObject(state, {
    categories: [
      ...state.categories.filter(
        option => option.categoryTitle !== action.payload.data.categoryTitle
      )
    ],
    error: null,
    loading: false
  });
};

const deleteCategoryFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false
  });
};

const updateCategoryStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const updateCategorySuccess = (state, action) => {
  return updatedObject(state, {
    categories: state.categories,
    error: null,
    loading: false
  });
};

const updateCategoryFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_START:
      return fetchCategoriesStart(state, action);
    case actionTypes.FETCH_CATEGORIES_FAIL:
      return fetchCategoriesFail(state, action);
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return fetchCategoriesSuccess(state, action);
    case actionTypes.CREATE_CATEGORY_START:
      return createCategoryStart(state, action);
    case actionTypes.CREATE_CATEGORY_FAIL:
      return createCategoryFail(state, action);
    case actionTypes.CREATE_CATEGORY_SUCCESS:
      return createCategorySuccess(state, action);
    case actionTypes.DELETE_CATEGORY_START:
      return deleteCategoryStart(state, action);
    case actionTypes.DELETE_CATEGORY_FAIL:
      return deleteCategoryFail(state, action);
    case actionTypes.DELETE_CATEGORY_SUCCESS:
      return deleteCategorySuccess(state, action);
    case actionTypes.UPDATE_CATEGORY_START:
      return updateCategoryStart(state, action);
    case actionTypes.UPDATE_CATEGORY_FAIL:
      return updateCategoryFail(state, action);
    case actionTypes.UPDATE_CATEGORY_SUCCESS:
      return updateCategorySuccess(state, action);

    default:
      return state;
  }
};

export default reducer;
