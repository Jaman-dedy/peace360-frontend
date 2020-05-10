import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
  profile: {
    social: {},
    skills: [],
    user: {},
  },
  error: null,
  loading: false,
};

const fetchProfileUserStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const fetchProfileUserSuccess = (state, action) => {
  return updatedObject(state, {
    profile: action.profile,
    error: null,
    loading: false,
  });
};

const fetchProfileUserFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
  });
};

const editProfileUserStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const editProfileUserSuccess = (state, action) => {
  return updatedObject(state, {
    profile: action.profile,
    error: null,
    loading: false,
  });
};

const editProfileUserFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
  });
};

const createProfileUserStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const createProfileUserSuccess = (state, action) => {
  return updatedObject(state, {
    profile: action.profile,
    error: null,
    loading: false,
  });
};

const createProfileUserFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROFILE_USER_START:
      return fetchProfileUserStart(state, action);
    case actionTypes.FETCH_PROFILE_USER_FAIL:
      return fetchProfileUserFail(state, action);
    case actionTypes.FETCH_PROFILE_USER_SUCCESS:
      return fetchProfileUserSuccess(state, action);
    case actionTypes.EDIT_PROFILE_USER_START:
      return editProfileUserStart(state, action);
    case actionTypes.EDIT_PROFILE_USER_FAIL:
      return editProfileUserFail(state, action);
    case actionTypes.EDIT_PROFILE_USER_SUCCESS:
      return editProfileUserSuccess(state, action);
    case actionTypes.CREATE_PROFILE_USER_START:
      return createProfileUserStart(state, action);
    case actionTypes.CREATE_PROFILE_USER_FAIL:
      return createProfileUserFail(state, action);
    case actionTypes.CREATE_PROFILE_USER_SUCCESS:
      return createProfileUserSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
