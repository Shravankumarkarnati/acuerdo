import React from "react";
import "./headerOptions.styles.scss";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { FaShoppingCart, FaHeart as FaHeartFilled } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const HeaderOptions = ({ cart, wishlist }) => {
  const history = useHistory();

  return (
    <div className="header-options">
      <button title="Your Wish List" onClick={() => history.push("/wishlist")}>
        {wishlist ? (
          <span>
            <span>{wishlist}</span>
          </span>
        ) : null}
        <FaHeartFilled />
      </button>
      <button title="Your Carts" onClick={() => history.push("/cart")}>
        {cart ? (
          <span>
            <span>{cart}</span>
          </span>
        ) : null}
        <FaShoppingCart />
      </button>
      <button onClick={() => history.push("/account")}>
        <BsFillPersonFill title="Your Account" />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.count,
    wishlist: state.wishlist.count,
  };
};

export default connect(mapStateToProps)(HeaderOptions);
