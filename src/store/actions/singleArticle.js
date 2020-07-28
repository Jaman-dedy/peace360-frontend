import axiosOrders from "../../axios/axios-orders";

import * as actionTypes from "./actionTypes";

export const fetchSingleArticleSuccess = (article) => {
  return {
    type: actionTypes.FETCH_SINGLE_ARTICLE_SUCCESS,
    article: article,
  };
};

export const fetchSingleArticleFail = (error) => {
  return {
    type: actionTypes.FETCH_SINGLE_ARTICLE_FAIL,
    error: error,
  };
};

export const fetchSingleArticleStart = () => {
  return {
    type: actionTypes.FETCH_SINGLE_ARTICLE_START,
  };
};

export const fetchSingleArticle = (articleId) => {
  return async (dispatch) => {
    dispatch(fetchSingleArticleStart());
    try {
      const response = await axiosOrders.get(`article/${articleId}`);
      dispatch(fetchSingleArticleSuccess(response.data.article));
    } catch ({ response }) {
      dispatch(fetchSingleArticleFail(response.data.message));
    }
  };
};
