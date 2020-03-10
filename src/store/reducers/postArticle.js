import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
  article: [],
  error: null,
  loading: false
};

const postArticleStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const postArticleSuccess = (state, action) => {
  return updatedObject(state, {
    article: action.article,
    error: null,
    loading: false
  });
};

const postArticleFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_ARTICLE_START:
      return postArticleStart(state, action);
    case actionTypes.POST_ARTICLE_SUCCESS:
      return postArticleSuccess(state, action);
    case actionTypes.POST_ARTICLE_FAIL:
      return postArticleFail(state, action);
    default:
      return state;
  }
};

export default reducer;
