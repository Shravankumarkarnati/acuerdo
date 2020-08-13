import React from "react";
import "./headerOptions.styles.scss";
import { useHistory } from "react-router-dom";

import { FaShoppingCart, FaHeart as FaHeartFilled } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const HeaderOptions = () => {
  const history = useHistory();

  return (
    <div className="header-options">
      <button title="Your Wish List" onClick={() => history.push("/wishlist")}>
        <span>
          <span>0</span>
        </span>
        <FaHeartFilled />
      </button>
      <button title="Your Carts" onClick={() => history.push("/cart")}>
        <span>
          <span>40</span>
        </span>
        <FaShoppingCart />
      </button>
      <button onClick={() => history.push("/account")}>
        <BsFillPersonFill title="Your Account" />
      </button>
    </div>
  );
};

export default HeaderOptions;
