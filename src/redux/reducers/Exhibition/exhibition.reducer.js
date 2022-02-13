import types from './exhibition.types';

const initial_state = {
    is_send_invitation: false,
    lastform: {},
    editExhibitionMode: false,
    exhibitionId: null
}

const exhibitionReducer = (state = initial_state, { type, payload }) => {
    switch (type) {

        case types.EXHIBITION_FORM:
            console.log("payload=>", payload);
            return {
                ...state,
                lastform: payload,
            }
        case types.EXHIBITION_ID:
            console.log("payload=>", payload);
            return {
                ...state,
                exhibitionId: payload,
            }
        case types.EDIT_EXHIBITION_MODE:
            console.log("payload=>", payload);
            return {
                ...state,
                editExhibitionMode: payload,
            }
        default:
            return state;
    }
}

export default exhibitionReducer;