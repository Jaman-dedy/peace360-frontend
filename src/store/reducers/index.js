import { combineReducers } from 'redux';
import loginReducer from './login';
import signupReducer from './signup';
import currentUser from './getCurrentUser';
import category from './category';
import singleArticleReducer from './singleArticle';
import postCommentReducer from './comment';
import userProfile from './userProfile';
import categories from './categories';
import postArticleReducer from './postArticle';
import followUserReducer from './followUser';
import myFollowersReducer from './getFollowers';
import myFollowingReducer from './getFollowing';
import likeArticleReducer from './likeArticle';
import uploadImgReducer from './uploadImgCloudinary';
// import usersReducer from './users'


//@ create root reducer

const rootReducer = combineReducers({
  login: loginReducer,
  register: signupReducer,
  currentUser: currentUser,
  fetchCategories: category,
  fetchSingleArticle: singleArticleReducer,
  postComment: postCommentReducer,
  userProfile,
  categories: categories,
  postArticle: postArticleReducer,
  followUser: followUserReducer,
  myFollowers: myFollowersReducer,
  myFollowings: myFollowingReducer,
  likeArticle: likeArticleReducer,
  uploadImg: uploadImgReducer,
  // user: usersReducer
});

export default rootReducer;
