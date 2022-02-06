import types from './auth.types';

export const clearStorage = () => (
    {
        type : types.CLEAR_STORAGE,
    }
)

export const setPhoneNumber = (data) => (
    {
        type : types.SET_PHONENUMBER,
        payload : data
       
    }
)

export const setProfile = (data) => (
    {
        type : types.SET_PROFILE,
        payload : data
       
    }
)

export const loginSuccess = (data) => (
    {
        type : types.LOGIN_SUCCESS,
        payload : data
    }
)

export const getOtp = (data) => (
    {
        type : types.GET_OTP,
        payload : data
    }
)

export const editingLocation = (data)=>(
    {
        type : types.EDITING_LOCATION,
        payload: data
    }
)
 
