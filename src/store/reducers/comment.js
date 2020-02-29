import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
  comment: [],
  error: null,
  loading: false
};

const postCommentStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const postCommentSuccess = (state, action) => {
  return updatedObject(state, {
    comment: action.comment,
    error: null,
    loading: false
  });
};

const postCommentFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_COMMENT_START:
      return postCommentStart(state, action);
    case actionTypes.POST_COMMENT_SUCCESS:
      return postCommentSuccess(state, action);
    case actionTypes.POST_COMMENT_FAIL:
      return postCommentFail(state, action);
    default:
      return state;
  }
};

export default reducer;
