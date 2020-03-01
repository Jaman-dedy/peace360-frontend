import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
  category: [],
  error: null,
  loading: false
};

const fetCategoryStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const fetchCategorySuccess = (state, action) => {
  return updatedObject(state, {
    category: action.category,
    error: null,
    loading: false
  });
};

const fetchCategoryFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORY_START:
      return fetCategoryStart(state, action);
    case actionTypes.FETCH_CATEGORY_FAIL:
      return fetchCategoryFail(state, action);
    case actionTypes.FETCH_CATEGORY_SUCCESS:
      return fetchCategorySuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
