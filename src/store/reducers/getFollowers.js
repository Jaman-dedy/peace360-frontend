import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
  followers: [],
  error: null,
  loading: false,
};

const fetchMyFollowersStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const fetchMyFollowersSuccess = (state, action) => {
  return updatedObject(state, {
    followers: action.followers,
    error: null,
    loading: false,
  });
};

const fetchMyFollowersFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FOLLOWERS_START:
      return fetchMyFollowersStart(state, action);
    case actionTypes.FETCH_FOLLOWERS_FAIL:
      return fetchMyFollowersFail(state, action);
    case actionTypes.FETCH_FOLLOWERS_SUCCESS:
      return fetchMyFollowersSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
