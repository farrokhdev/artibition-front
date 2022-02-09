import types from './filters.types';

const initial_state = {

}

const filtersReducer = (state = initial_state, { type, payload }) => {
    switch (type) {

        case types.FILTERS_COLLAPSE:
            // console.log("filters_collapse=>", payload);
            return {
                ...state,
                filters_reducer: payload,
            }

        default:
            return state;
    }
}

export default filtersReducer;