import { combineReducers } from 'redux';
import loginReducer from './login';
import signupReducer from './signup';
import currentUser from './getCurrentUser';

//@ create root reducer

const rootReducer = combineReducers({
  login: loginReducer,
  register: signupReducer,
  currentUser: currentUser
});

export default rootReducer;
