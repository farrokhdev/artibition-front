import types from './exhibition.types';


export const exhibitionForm = (data) => (
    {
        type: types.EXHIBITION_FORM,
        payload: data
    }
)

export const editExhibitionModeFunc = (data) => (
    {
        type: types.EDIT_EXHIBITION_MODE,
        payload: data
    }
)

export const editContentModeFunc = (data) => (
    {
        type: types.EDIT_CONTENT_MODE,
        payload: data
    }
)


export const exhibitionId = (data) => (
    {
        type: types.EXHIBITION_ID,
        payload: data
    }
)


export const reduxSelectedArtworksFunc = (data) => (
    {
        type: types.REDUX_SELECTED_ARTWORKS,
        payload: data
    }
)