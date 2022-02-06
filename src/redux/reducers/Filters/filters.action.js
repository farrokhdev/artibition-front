import types from './exhibition.types';


export const filtersReducer = (data) => (
    {
        type: types.FILTERS_COLLAPSE,
        payload: data
    }
)