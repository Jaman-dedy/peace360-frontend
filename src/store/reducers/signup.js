import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../../shared/utility";
import initialState from "./initialState";
import logout from "./logout";

const registerStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const registerSuccess = (state, action) => {
  return updatedObject(state, {
    token: action.token,
    userId: action.userId,
    error: null,
    loading: false,
  });
};

const registerFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
  });
};
const setAuthRedirectPath = (state, action) => {
  return updatedObject(state, { authRedirectPath: action.path });
};

const authLogout = (state, action) => {
  return logout(state, action);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_START:
      return registerStart(state, action);
    case actionTypes.REGISTER_SUCCESS:
      return registerSuccess(state, action);
    case actionTypes.REGISTER_FAIL:
      return registerFail(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
