import wishlistTypes from "./wishlist.types";

const INITIAL_STATE = {
  items: {},
  count: 0,
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case wishlistTypes.ADD_TO_WISHLIST:
      const { id } = action.payload;
      state.items[id] = action.payload;
      return {
        ...state,
        items: { ...state.items },
        count: state.count + 1,
      };
    case wishlistTypes.REMOVE_FROM_WISHLIST:
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

export default wishlistReducer;
