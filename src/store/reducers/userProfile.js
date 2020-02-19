import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
  profile: {
    social: {},
    skills: [],
    user: {},

  },
  error: null,
  loading: false
};

const fetchProfileUserStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const fetchProfileUserSuccess = (state, action) => {
  return updatedObject(state, {
    profile: action.profile,
    error: null,
    loading: false
  });
};

const fetchProfileUserFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false
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
    default:
      return state;
  }
};

export default reducer;
