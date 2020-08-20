import cartTypes from "./cart.types";

export const addItemToCart = (item) => {
  return {
    type: cartTypes.ADD_TO_CART,
    payload: item,
  };
};

export const removeItemFromCart = (item_id) => {
  return {
    type: cartTypes.REMOVE_FROM_CART,
    payload: item_id,
  };
};

export const clearCart = () => {
  return {
    type: cartTypes.CLEAR_CART,
  };
};
