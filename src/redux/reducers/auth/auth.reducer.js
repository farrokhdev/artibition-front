import types from "./auth.types";
import { removeToken, Token } from "../../../utils/utils";

const initial_state = {
  pending: false,
  error: null,
  otp: null,
  is_logged_in: Boolean(Token()),
  is_registered: Boolean(Token()),
  profile: null,
  id: null,
  roles: null,
  editingLocation: {},
  showEditProfileVisible: false,
  is_Open_Modal: false,
  editMyAulbumMode: false,
};

const authReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case types.LOGIN_START:
      console.log("LOGIN_START");
      return {
        ...state,
        pending: true,

        error: null,
      };
    case types.PROFILE_MODAL_VISIBLE:
      console.log("profile Modal Visible", payload);
      return {
        ...state,
        showEditProfileVisible: payload,
      };

    case types.OPEN_MODAL:
      console.log("open Modal", payload);
      return {
        ...state,
        is_Open_Modal: payload,
      };

    case types.SET_PHONENUMBER:
      console.log("SET_PHONENUMBER");
      return {
        ...state,
        mobile: payload.mobile,
      };

    case types.LOGIN_SUCCESS:
      console.log("LOGIN_SUCCESS");
      return {
        ...state,
        pending: false,
        is_logged_in: true,
      };
    case types.REGISTER_SUCCESS:
      console.log("REGISTER_SUCCESS");
      return {
        ...state,
        pending: payload?.pending,
        is_registered: payload.is_registered,
        is_Open_Modal: payload.is_Open_Modal,
      };

    case types.LOGIN_ERROR:
      console.log("REGISTER_ERROR");

      return {
        ...state,
        pending: false,
        error: payload,
      };

    case types.CLEAR_STORAGE:
      console.log("CLEAR_STORAGE");
      removeToken();
      return {
        ...state,
        profile: null,
        is_logged_in: false,
        roles: null,
      };

    case types.SET_PROFILE:
      console.log("Set Profile Done", payload);
      if (payload.id) {
        return {
          ...state,
          profile: payload?.profile,
          is_logged_in: true,
          id: payload?.id,
          roles: payload?.roles,
        };
      } else {
        return {
          ...state,
          profile: payload?.profile,
          roles: payload?.roles,
        };
      }

    case types.GET_OTP:
      console.log("Get Otp Code Done", payload);
      return {
        ...state,
        otp: payload.otp,
      };

    case types.EDIT_MY_AULBUM_MODE:
      console.log("payload ==>", payload);
      return {
        ...state,
        editMyAulbumMode: payload,
      };

    case types.EDITING_LOCATION:
      console.log("editingLocation", payload);
      return {
        ...state,
        editingLocation: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
