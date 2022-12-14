import types from './gallery.types';

const initial_state = {
    is_send_invitation: false,
    gallery_id: "",
    selected_artwork_redux: [],
    galleryProfile: null,
    editGalleryMode: false,

}

const galleryReducer = (state = initial_state, { type, payload }) => {
    switch (type) {

        case types.GALLERY_ID:
            console.log("payload=>", payload);
            return {
                ...state,
                gallery_id: payload,
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