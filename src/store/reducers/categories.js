import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
  categories: [],
  category: {
    categoryTitle: '',
    description: '',
    previous: '',
    date: '',
    loading: true,
    error: null
  },
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
    category: {
      error: null,
      loading: false,
      date: action.payload.response.data.date,
      categoryTitle: action.payload.response.data.categoryTitle,
      description: action.payload.response.data.description
    },
    error: null,
    loading: false
  });
};

const updateCategoryFail = (state, action) => {
  return updatedObject(state, {
    category: { error: action.error.data.errors[0].message, loading: false }
  });
};

const getOneCategoryStart = (state, action) => {
  return updatedObject(state, {
    error: null,
    loading: true,
    category: {
      categoryTitle: '',
      description: '',
      date: '',
      error: null,
      loading: true
    }
  });
};

const getOneCategorySuccess = (state, action) => {
  return updatedObject(state, {
    category: {
      categoryTitle: action.payload.data.data.categoryTitle,
      description: action.payload.data.data.description,
      date: action.payload.data.data.date,
      error: null,
      loading: false
    },
    error: null,
    loading: false
  });
};

const getOneCategoryFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
    category: {
      error: action.error,
      loading: false,
      categoryTitle: '',
      description: '',
      date: ''
    }
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
    case actionTypes.GET_ONE_CATEGORY_START:
      return getOneCategoryStart(state, action);
    case actionTypes.GET_ONE_CATEGORY_FAIL:
      return getOneCategoryFail(state, action);
    case actionTypes.GET_ONE_CATEGORY_SUCCESS:
      return getOneCategorySuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
