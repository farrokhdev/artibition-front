import { UPDATE_CART } from "./cart.types";

const initialState = {
  count: 0,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return { ...state, count: action.payload };

    default:
      return state;
  }
};
export default cartReducer;
