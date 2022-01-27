import types from './gallery.types';


export const galleryId = (data) => (
    {
        type: types.GALLERY_ID,
        payload: data
    }
)

export const selectedArtworkRedux = (data) => (
    {
        type: types.SELECTED_ARTWORKS ,
        payload: data
    }
)