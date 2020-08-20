import React, { useEffect } from "react";
import "./resultsCard.styles.scss";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import { useHistory } from "react-router-dom";
import { selectedItem } from "../../redux/reducers/results/results.actions";

import { connect } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
} from "../../redux/reducers/cart/cart.actions";

import {
  addToWishList,
  removeFromWishList,
} from "../../redux/reducers/wishlist/wishlist.actions";

const wordShortner = (word) => {
  let wordShortDashed = word;
  let wordShortSpaced = word;
  if (word.split("-").length) {
    wordShortDashed = word.split("-")[0];
  }
  if (word.split(" ").length) {
    wordShortSpaced = word.split(" ")[0];
  }

  let wordShort =
    wordShortDashed.length > wordShortSpaced.length
      ? wordShortSpaced
      : wordShortDashed;

  return wordShort;
};

const ResultsCard = ({
  result,
  selectItemDispatch,
  selectedItemState,
  cartItems,
  wishlistItems,
  addToCart,
  addToWishList,
  removeFromCart,
  removeFromWishList,
}) => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (res, res_id) => {
    history.push(`/product/${res_id}`);
    const { id: stateId } = res;
    if (selectedItemState) {
      if (!(selectedItemState.id === stateId)) {
        selectItemDispatch(res);
      }
    } else {
      selectItemDispatch(res);
    }
  };

  const liked = (e, res) => {
    e.stopPropagation();
    if (id in wishlistItems) {
      removeFromWishList(res.id);
    } else {
      addToWishList(res);
    }
  };

  const { brand, category, price, product_name, id } = result;

  const image_url = require(`../../images/Images/${category.toLowerCase()}_title.jpg`);
  return (
    <div className="card" onClick={() => handleCardClick(result, id)}>
      <div className="card--image">
        <img className="card--image-img" src={image_url} alt={product_name} />
        <button className="card--image-view">View</button>
      </div>
      <div className="card--details">
        <p className="card--details-name">{wordShortner(product_name)}</p>
        <p className="card--details-brand">{wordShortner(brand)}</p>
        <p className="card--details-price">
          <span>$</span>
          {price.split("$")[1]}
        </p>
      </div>
      <div className="card--btns">
        {!(id in cartItems) ? (
          <button
            className="card--btns-buy"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(result);
            }}
          >
            Add to cart
          </button>
        ) : (
          <button
            className="card--btns-buy"
            onClick={(e) => {
              e.stopPropagation();
              removeFromCart(id);
            }}
          >
            Remove From cart
          </button>
        )}
        <span
          className="card--btns-like"
          onClick={(e) => {
            liked(e, result);
          }}
        >
          {id in wishlistItems ? <FaHeart /> : <FaRegHeart />}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedItemState: state.results.selectedItem,
    wishlistItems: state.wishlist.items,
    cartItems: state.cart.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectItemDispatch: (item) => dispatch(selectedItem(item)),
    addToCart: (item) => dispatch(addItemToCart(item)),
    removeFromCart: (id) => dispatch(removeItemFromCart(id)),
    addToWishList: (item) => dispatch(addToWishList(item)),
    removeFromWishList: (id) => dispatch(removeFromWishList(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsCard);
