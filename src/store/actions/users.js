import axiosOrders from '../../axios/axios-orders';
import * as actionTypes from './actionTypes';

export const editUserPicSuccess = (profile) => {
    return {
      type: actionTypes.EDIT_USER_PIC_SUCCESS,
      profile,
    };
  };
  
  export const editUserPicFail = (error) => {
    return {
      type: actionTypes.EDIT_USER_PIC_FAIL,
      error: error,
    };
  };
  
  export const editUserPicStart = () => {
    return {
      type: actionTypes.EDIT_USER_PIC_START,
    };
  };
  
  export const editUserPic = (avatar) => {
    return async (dispatch) => {
      dispatch(editUserPicStart());
      try {
        const response = await axiosOrders.put(`users/updateImage`, avatar);
      } catch ({ response }) {
        dispatch(editUserPicFail(response));
      }
    };
  };

  
  