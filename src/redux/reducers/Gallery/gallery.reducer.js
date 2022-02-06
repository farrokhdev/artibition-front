import types from './gallery.types';

const initial_state = {
    is_send_invitation: false,
    id: "",
    selected_artwork_redux: [],
    galleryProfile: null,
    editGalleryMode: false,
    editExhibitionMode: false
}

const galleryReducer = (state = initial_state, { type, payload }) => {
    switch (type) {

        case types.GALLERY_ID:
            console.log("payload=>", payload);
            return {
                ...state,
                id: payload,
            }
        case types.GALLERY_PROFILE:
            console.log("payload=>", payload);
            return {
                ...state,
                galleryProfile: payload,
            }
        case types.EDIT_GALLERY_MODE:
            console.log("payload=>", payload);
            return {
                ...state,
                editGalleryMode: payload,
            }
        case types.EDIT_EXHIBITION_MODE:
            console.log("payload=>", payload);
            return {
                ...state,
                editExhibitionMode: payload,
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