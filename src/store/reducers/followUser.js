import * as actionTypes from "../actions/actionTypes";
import { updatedObject } from "../../shared/utility";

const initialState = {
  msg: {},
  followDetails: [],
  error: null,
  loading: false,
};

const followUserStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const followUserSuccess = (state, action) => {
  return updatedObject(state, {
    msg: action.msg,
    error: null,
    loading: false,
    followDetails: [...state.followDetails, action.msg.data],
  });
};

const followUserFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_FOLLOW:
      return {
        ...state,
        followDetails: [],
      };
    case actionTypes.FOLLOW_USER_START:
      return followUserStart(state, action);
    case actionTypes.FOLLOW_USER_SUCCESS:
      return followUserSuccess(state, action);
    case actionTypes.FOLLOW_USER_FAIL:
      return followUserFail(state, action);
    default:
      return state;
  }
};

export default reducer;
