import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../../shared/utility";

const initialState = {
  article: null,
  error: null,
  loading: false,
};

const fetSingleArticleStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true, article: null });
};

const fetchSingleArticleSuccess = (state, action) => {
  return updatedObject(state, {
    article: action.article,
    error: null,
    loading: false,
  });
};

const fetchSingleArticleFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SINGLE_ARTICLE_START:
      return fetSingleArticleStart(state, action);
    case actionTypes.FETCH_SINGLE_ARTICLE_FAIL:
      return fetchSingleArticleFail(state, action);
    case actionTypes.FETCH_SINGLE_ARTICLE_SUCCESS:
      return fetchSingleArticleSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
