import types from './filters.types';


export const setFilters = (data) => (
    {
        type: types.FILTERS_COLLAPSE,
        payload: data
    }
)
export const clearFilterStorage = () => (
    {
        type: types.CLEAR_FILTER_STORAGE,
    }
)