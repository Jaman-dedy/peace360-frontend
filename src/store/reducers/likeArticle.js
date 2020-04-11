import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
  liked: {},
  error: null,
  loading: false,
};

const likeArticleStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const likeArticleSuccess = (state, action) => {
  return updatedObject(state, {
    liked: action.liked,
    error: null,
    loading: false,
  });
};

const likeArticleFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIKE_ARTICLE_START:
      return likeArticleStart(state, action);
    case actionTypes.LIKE_ARTICLE_SUCCESS:
      return likeArticleSuccess(state, action);
    case actionTypes.LIKE_ARTICLE_FAIL:
      return likeArticleFail(state, action);
    default:
      return state;
  }
};

export default reducer;
