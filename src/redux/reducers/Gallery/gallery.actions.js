import types from './gallery.types';


export const galleryId = (data) => (
    {
        type: types.GALLERY_ID,
        payload: data
    }
)

export const galleryProfile = (data) => (
    {
        type: types.GALLERY_PROFILE,
        payload: data
    }
)

export const selectedArtworkRedux = (data) => (
    {
        type: types.SELECTED_ARTWORKS ,
        payload: data
    }
)

export const editGalleryMode = (data) => (
    {
        type: types.EDIT_GALLERY_MODE ,
        payload: data
    }
)

export const editExhibitionMode = (data) => (
    {
        type: types.EDIT_EXHIBITION_MODE ,
        payload: data
    }
)