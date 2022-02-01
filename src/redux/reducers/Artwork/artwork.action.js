import types from './artwork.types';


export const artworkForm = (data) => (
    {
        type: types.ARTWORK_FORM,
        payload: data
    }
)

export const artistForm =(data) =>(
    {
        type: types.ARTIST_FORM,
        payload :data
    }
)