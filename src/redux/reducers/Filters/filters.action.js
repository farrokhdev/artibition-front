import types from './filters.types';


export const setFilters = (data) => (
    {
        type: types.FILTERS_COLLAPSE,
        payload: data
    }
)