import types from './gallery.types';

const initial_state = {
    is_send_invitation: false,
    id: "",
    selected_artwork_redux: []
}

const galleryReducer = (state = initial_state, { type, payload }) => {
    switch (type) {

        case types.GALLERY_ID:
            console.log("payload=>", payload);
            return {
                ...state,
                id: payload,
            }
        case types.SELECTED_ARTWORKS:
            console.log("payload=>", payload);
            return {
                ...state,
                selected_artwork_redux: payload,
            }

        default:
            return state;
    }
}

export default galleryReducer;