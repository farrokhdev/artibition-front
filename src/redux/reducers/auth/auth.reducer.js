import types from './auth.types';
import { removeToken, Token } from '../../../utils/utils';

const initial_state = {
    pending: false,
    error: null,
    otp: null,
    is_logged_in: Boolean(Token()),
    profile: null,
    id: null,
    roles: null,
    editingLocation:{}
}

const authReducer = (state = initial_state, { type, payload }) => {
    switch (type) {
        case types.LOGIN_START:
            console.log('LOGIN_START')
            return {
                ...state,
                pending: true,

                error: null
            }

        case types.SET_PHONENUMBER:
            console.log('SET_PHONENUMBER')
            return {
                ...state,
                mobile: payload.mobile
            }


        case types.LOGIN_SUCCESS:
            console.log('LOGIN_SUCCESS')
            return {
                ...state,
                pending: false,
                is_logged_in: true
            }

        case types.LOGIN_ERROR:
            console.log('REGISTER_ERROR')

            return {
                ...state,
                pending: false,
                error: payload
            }

        case types.CLEAR_STORAGE:
            console.log('CLEAR_STORAGE')
            removeToken()
            return {
                ...state,
                profile: null,
                roles: null
            }

        case types.SET_PROFILE:
            console.log('Set Profile Done', payload)
            if (payload.id) {
                return {
                    ...state,
                    profile: payload?.profile,
                    id: payload?.id,
                    roles: payload?.roles
                }
            } else {
                return {
                    ...state,
                    profile: payload?.profile,
                    roles: payload?.roles
                }
            }


        case types.GET_OTP:
            console.log('Get Otp Code Done', payload)
            return {
                ...state,
                otp: payload.otp,

            }

        
        case types.EDITING_LOCATION:
            console.log('editingLocation' , payload);
            return{
                ...state,
                editingLocation : payload
            }
        default:
            return state;
    }
}

export default authReducer;