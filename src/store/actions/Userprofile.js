import axiosOrders from "../../axios/axios-orders";

import * as actionTypes from "./actionTypes";

export const fetchProfileUserSuccess = (profile) => {
  return {
    type: actionTypes.FETCH_PROFILE_USER_SUCCESS,
    profile,
  };
};

export const fetchProfileUserFail = (error) => {
  return {
    type: actionTypes.FETCH_PROFILE_USER_FAIL,
    error: error,
  };
};

export const fetchProfileUserStart = () => {
  return {
    type: actionTypes.FETCH_PROFILE_USER_START,
  };
};

export const fetchProfileUser = (id) => {
  return async (dispatch) => {
    dispatch(fetchProfileUserStart());
    try {
      const response = await axiosOrders.get(`profile/${id}`);
      dispatch(fetchProfileUserSuccess(response.data.profile));
    } catch ({ response }) {
      dispatch(fetchProfileUserFail(response));
    }
  };
};

export const editProfileUserSuccess = (profile) => {
  return {
    type: actionTypes.EDIT_PROFILE_USER_SUCCESS,
    profile,
  };
};

export const editProfileUserFail = (error) => {
  return {
    type: actionTypes.EDIT_PROFILE_USER_FAIL,
    error: error,
  };
};

export const editProfileUserStart = () => {
  return {
    type: actionTypes.EDIT_PROFILE_USER_START,
  };
};

export const editProfileUser = (userId, body = {}, cd) => {
  const {
    bio,
    avatar,
    address,
    company,
    facebook,
    instagram,
    linkedin,
    location,
    occupation,
    twitter,
    website,
    youtube,
  } = body;

  const formData = new FormData();
  if (bio !== null) formData.append("bio", bio);
  if (address !== null) formData.append("address", address);
  if (avatar !== null) formData.append("avatar", avatar);
  if (company !== null) formData.append("company", company);
  if (facebook !== null) formData.append("facebook", facebook);
  if (instagram !== null) formData.append("instagram", instagram);
  if (linkedin !== null) formData.append("linkedin", linkedin);
  if (location !== null) formData.append("location", location);
  if (occupation !== null) formData.append("occupation", occupation);
  if (twitter !== null) formData.append("twitter", twitter);
  if (website !== null) formData.append("website", website);
  if (youtube !== null) formData.append("youtube", youtube);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
      "content-type": "multipart/form-data",
    },
  };

  return async (dispatch) => {
    dispatch(editProfileUserStart());
    try {
      const response = await axiosOrders.put(
        `profile/edit/${userId}`,
        formData,
        config
      );

      cd(response);
      dispatch(editProfileUserSuccess(response.data.profile));
    } catch ({ response }) {
      dispatch(editProfileUserFail(response));
    }
  };
};

export const createProfileUserSuccess = (profile) => {
  return {
    type: actionTypes.CREATE_PROFILE_USER_SUCCESS,
    profile,
  };
};

export const createProfileUserFail = (error) => {
  return {
    type: actionTypes.CREATE_PROFILE_USER_FAIL,
    error: error,
  };
};

export const createProfileUserStart = () => {
  return {
    type: actionTypes.CREATE_PROFILE_USER_START,
  };
};

export const createProfileUser = (body = {}, cd) => {
  return async (dispatch) => {
    dispatch(createProfileUserStart());
    try {
      const response = await axiosOrders.post(`profile/create`, body);

      cd(response);
      dispatch(createProfileUserSuccess(response.data.profile));
    } catch ({ response }) {
      dispatch(createProfileUserFail(response));
    }
  };
};
