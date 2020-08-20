import wishlistTypes from "./wishlist.types";

export const addToWishList = (item) => {
  return {
    type: wishlistTypes.ADD_TO_WISHLIST,
    payload: item,
  };
};

export const removeFromWishList = (id) => {
  return {
    type: wishlistTypes.REMOVE_FROM_WISHLIST,
    payload: id,
  };
};

export const clearWishList = () => {
  return {
    type: wishlistTypes.CLEAR_WISHLIST,
  };
};
