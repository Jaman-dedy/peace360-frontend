import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
  followings: [],
  error: null,
  loading: false,
};

const fetchMyFollowingStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const fetchMyFollowingSuccess = (state, action) => {
  return updatedObject(state, {
    followings: action.followings,
    error: null,
    loading: false,
  });
};

const fetchMyFollowingFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FOLLOWING_START:
      return fetchMyFollowingStart(state, action);
    case actionTypes.FETCH_FOLLOWING_FAIL:
      return fetchMyFollowingFail(state, action);
    case actionTypes.FETCH_FOLLOWING_SUCCESS:
      return fetchMyFollowingSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
