import types from './exhibition.types';


export const exhibitionForm = (data) => (
    {
        type: types.EXHIBITION_FORM,
        payload: data
    }
)