import types from './advistory.types';

const initial_state = {
    advistoryform: {},
    chooseProducts: []
}

const advistoryReducer = (state = initial_state, { type, payload }) => {
    console.log(state, "state")
    switch (type) {

        case types.ADVISTORY_FORM:
            console.log("payload===>", payload);
            return {
                ...state,
                advistoryform: payload,
            }
        case types.CHOOSE_PRODUCT:
            console.log("payload=+++>", payload);
            return {
                ...state,
                chooseProducts: payload
            }

        default:
            return state;
    }
}

export default advistoryReducer;