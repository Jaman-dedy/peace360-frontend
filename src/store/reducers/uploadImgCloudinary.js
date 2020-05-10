import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
  imgUrl: null,
  error: null,
  loading: false
};

const uploadImgStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const uploadImgSuccess = (state, action) => {
  return updatedObject(state, {
    imgUrl: action.imgUrl,
    error: null,
    loading: false
  });
};

const uploadImgFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPLOAD_IMG_START:
      return uploadImgStart(state, action);
    case actionTypes.UPLOAD_IMG_SUCCESS:
      return uploadImgSuccess(state, action);
    case actionTypes.UPLOAD_IMG_FAIL:
      return uploadImgFail(state, action);
    default:
      return state;
  }
};

export default reducer;
