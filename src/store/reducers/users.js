import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
  user: {
   avatar:''
  },
  error: null,
  loading: false,
};

const editUserPicStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const editUserPicSuccess = (state, action) => {
  return updatedObject(state, {
    profile: action,
    error: null,
    loading: false,
  });
};

const editUserPicFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
  });
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_USER_PIC_START:
        return editUserPicStart(state, action);
      case actionTypes.EDIT_USER_PIC_FAIL:
        return editUserPicFail(state, action);
      case actionTypes.EDIT_USER_PIC_SUCCESS:
        return editUserPicSuccess(state, action)  
    default:
      return state;
  }
};

export default reducer;
