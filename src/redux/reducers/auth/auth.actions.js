import types from "./auth.types";

export const clearStorage = () => ({
  type: types.CLEAR_STORAGE,
});

export const setPhoneNumber = (data) => ({
  type: types.SET_PHONENUMBER,
  payload: data,
});

export const setProfile = (data) => ({
  type: types.SET_PROFILE,
  payload: data,
});

export const setOpenModal = (data) => ({
  type: types.OPEN_MODAL,
  payload: data,
});

export const loginSuccess = (data) => ({
  type: types.LOGIN_SUCCESS,
  payload: data,
});

export const getOtp = (data) => ({
  type: types.GET_OTP,
  payload: data,
});

export const editingLocation = (data) => ({
  type: types.EDITING_LOCATION,
  payload: data,
});

export const showEditProfileVisible = (data) => ({
  type: types.PROFILE_MODAL_VISIBLE,
  payload: data,
});

export const editMyAulbumModeFunc = (data) => ({
  type: types.EDIT_MY_AULBUM_MODE,
  payload: data,
});

export const registerSuccess = (data) => ({
  type: types.REGISTER_SUCCESS,
  payload: data,
});
