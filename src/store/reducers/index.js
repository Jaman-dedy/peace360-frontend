import { combineReducers } from 'redux';
import loginReducer from './login';
import signupReducer from './signup';
import currentUser from './getCurrentUser';
import category from './category';

//@ create root reducer

const rootReducer = combineReducers({
  login: loginReducer,
  register: signupReducer,
  currentUser: currentUser,
  fetchCategories: category
});

export default rootReducer;
