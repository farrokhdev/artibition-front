import types from './artwork.types';

const initial_state = {
    is_send_invitation: false,
    lastform: {},
    artistform: {}
}

const artworkReducer = (state = initial_state, { type, payload }) => {
    switch (type) {

        case types.ARTWORK_FORM:
            console.log("payload=>", payload);
            return {
                ...state,
                lastform: payload,
            }

        case types.ARTIST_FORM:
            console.log("payload=>", payload);
            return {
                ...state,
                artistform: payload,
            }

        default:
            return state;
    }
}

export default artworkReducer;