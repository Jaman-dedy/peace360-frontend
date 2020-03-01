import { combineReducers } from 'redux';
import loginReducer from './login';
import signupReducer from './signup';
import currentUser from './getCurrentUser';
import category from './category';
import singleArticleReducer from './singleArticle';
import postCommentReducer from './comment';

//@ create root reducer

const rootReducer = combineReducers({
  login: loginReducer,
  register: signupReducer,
  currentUser: currentUser,
  fetchCategories: category,
  fetchSingleArticle: singleArticleReducer,
  postComment: postCommentReducer
});

export default rootReducer;
