import types from './filters.types';

const initial_state = {
    filters_reducer: null
}

const filtersReducer = (state = initial_state, { type, payload }) => {
    switch (type) {

        case types.FILTERS_COLLAPSE:
            // console.log("filters_collapse=>", payload);
            return {
                ...state,
                filters_reducer: payload,
            }
        case types.CLEAR_FILTER_STORAGE:
            console.log('CLEAR_FILTER_STORAGE')
            return {
                ...state,
                filters_reducer: null
            }

        default:
            return state;
    }
}

export default filtersReducer;