import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
  user: {},
  error: null,
  loading: false
};

const fetchCurrentUserStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const fetchCurrentUserSuccess = (state, action) => {
  return updatedObject(state, {
    user: action.user,
    error: null,
    loading: false
  });
};

const fetchCurrentUserFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false
  });
};

const editUserPicStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const editUserPicSuccess = (state, action) => {
  return updatedObject(state, {
    user: action.user.data.data,
    error: null,
    loading: false,
  });
};

const editUserPicFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
  });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENT_USER_START:
      return fetchCurrentUserStart(state, action);
    case actionTypes.FETCH_CURRENT_USER_FAIL:
      return fetchCurrentUserFail(state, action);
    case actionTypes.FETCH_CURRENT_USER_SUCCESS:
      return fetchCurrentUserSuccess(state, action);
    case actionTypes.EDIT_USER_PIC_START:
      return editUserPicStart(state, action);
    case actionTypes.EDIT_USER_PIC_FAIL:
      return editUserPicFail(state, action);
    case actionTypes.EDIT_USER_PIC_SUCCESS:
      return editUserPicSuccess(state, action) 
    default:
      return state;
  }
};

export default reducer;
