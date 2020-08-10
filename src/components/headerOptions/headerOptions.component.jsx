import React from "react";
import "./headerOptions.styles.scss";

import { FaShoppingCart, FaHeart as FaHeartFilled } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const HeaderOptions = () => {
  return (
    <div className="header-options">
      <button title="Your Wish List">
        <span>
          <span>0</span>
        </span>
        <FaHeartFilled />
      </button>
      <button title="Your Carts">
        <span>
          <span>40</span>
        </span>
        <FaShoppingCart />
      </button>
      <button>
        <BsFillPersonFill title="Your Account" />
      </button>
    </div>
  );
};

export default HeaderOptions;
