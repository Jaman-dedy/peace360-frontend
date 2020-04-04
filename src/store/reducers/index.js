import { combineReducers } from 'redux';
import loginReducer from './login';
import signupReducer from './signup';
import currentUser from './getCurrentUser';
import category from './category';
import singleArticleReducer from './singleArticle';
import postCommentReducer from './comment';
import userProfile from './userProfile';
import categories from './categories';

//@ create root reducer

const rootReducer = combineReducers({
  login: loginReducer,
  register: signupReducer,
  currentUser: currentUser,
  fetchCategories: category,
  fetchSingleArticle: singleArticleReducer,
  postComment: postCommentReducer,
  userProfile,
  categories: categories
});

export default rootReducer;
