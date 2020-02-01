import { combineReducers } from 'redux';
import loginReducer from './login';
import signupReducer from './signup';

//@ create root reducer

const rootReducer = combineReducers({
  login: loginReducer,
  register: signupReducer
});

export default rootReducer;
