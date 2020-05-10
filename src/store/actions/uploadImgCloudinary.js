/* eslint-disable no-throw-literal */
import axios from 'axios'

import * as actionTypes from './actionTypes';

export const uploadImgStart = () => {
  return {
    type: actionTypes.UPLOAD_IMG_START,
  };
};

export const uploadImgSuccess = (imgUrl) => {
  return {
    type: actionTypes.UPLOAD_IMG_SUCCESS,
    imgUrl: imgUrl,
  };
};

export const uploadImgFail = (error) => {
  return {
    type: actionTypes.UPLOAD_IMG_FAIL,
    error: error,
  };
};

export const uploadImg = (imgFile) => {
const CLOUDINARY_URL ="https://api.cloudinary.com/v1_1/dvx8vwgk6/image/upload"
const CLOUDINARY_UPLOAD_PRESET="ovbdi5lz"
 
return (dispatch) => {
    dispatch(uploadImgStart());
    const formData = new FormData();
    formData.append('file', imgFile);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        },
        data: formData
    }).then(function(res){

        dispatch(uploadImgSuccess(res.data.secure_url))
       

    }).catch(function(err){
       dispatch(uploadImgFail())
    })
  };
};
