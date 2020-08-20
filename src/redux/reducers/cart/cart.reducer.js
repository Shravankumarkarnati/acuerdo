import cartTypes from "./cart.types";

const INITIAL_STATE = {
  items: {},
  count: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      const { id } = action.payload;
      state.items[id] = action.payload;
      return {
        ...state,
        items: { ...state.items },
        count: state.count + 1,
      };
    case cartTypes.REMOVE_FROM_CART:
      if (state.items[action.payload]) {
        delete state.items[action.payload];
      } else {
        return {
          ...state,
        };
      }
      return {
        ...state,
        items: {
          ...state.items,
        },
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
