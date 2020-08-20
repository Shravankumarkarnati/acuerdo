import React from "react";
import "./productPage.styles.scss";

import { connect } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GrNext, GrPrevious } from "react-icons/gr";
const ProductPage = ({ productDetails }) => {
  const {
    // available,
    brand,
    category,
    // gender,
    // id,
    price,
    product_name,
    size,
  } = productDetails;
  const rating = Math.floor(Math.random() * 5) + 1;
  console.log(rating);
  return (
    <div className="product-page">
      <div className="product">
        <div className="product--slider">
          <div className="product--slider-image">
            <img
              alt={product_name}
              src="https://images.unsplash.com/photo-1597800235425-ef23b8bcdffd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=200"
            />
          </div>
          <button className="product--slider-prev">
            <GrPrevious />
          </button>
          <button className="product--slider-next">
            <GrNext />
          </button>
          <div className="product--slider-dotter">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="product--details">
          <div className="product--title">
            <p className="product--title-name">{product_name}</p>
            <p className="product--title-brand">
              <span className="by">by</span>
              <span className="brand">{brand}</span>
            </p>
          </div>
          <div className="product--rating">
            <div className="product--rating-number"></div>
            <div className="product--rating-star">
              {[0, 1, 2, 3, 4].map((cur) =>
                cur < rating ? (
                  <AiFillStar key={cur} />
                ) : (
                  <AiOutlineStar key={cur} />
                )
              )}
            </div>
          </div>
          <div className="product--price">{price}</div>
          <div className="product--description">
            <p>
              A loss a day will keep you focus. Crisp ppt we’re all in this
              together, even if our businesses function differently for bake it
              in cloud strategy nor imagineer. Globalize build on a culture of
              contribution and inclusion yet knowledge process outsourcing but
              dog and pony show offline this discussion we have put the apim
              bol, temporarily so that we can later put the monitors on mumbo
              jumbo. Nail jelly to the hothouse wall peel the onion focus on the
              customer journey bench mark old boys club can you champion this
              60% to 30% is a lot of persent. Touch base streamline, meeting
              assassin, yet pipeline, yet the horse is out of the barn and we’re
              all in this together, even if our businesses function differently.
            </p>

            <p>
              This proposal is a win-win situation which will cause a stellar
              paradigm shift, and produce a multi-fold increase in deliverables
              going forward, but circle back, face time what are the
              expectations and Bob called an all-hands this afternoon. Staff
              engagement going forward, or my capacity is full gain traction
              we’re starting to formalize flexible opinions around our
              foundations focus on the customer journey. 4-blocker pro-sumer
              software, yet manage expectations can I just chime in on that one
              rock Star/Ninja.
            </p>
          </div>
          <div className="product--size">
            <span
              className={
                ["XS", "S"].includes(size)
                  ? "product--size-span active"
                  : "product--size-span"
              }
              data-cat="1"
            >
              S
            </span>
            <span
              className={
                ["M"].includes(size)
                  ? "product--size-span active"
                  : "product--size-span"
              }
              data-cat="2"
            >
              M
            </span>
            <span
              className={
                ["L"].includes(size)
                  ? "product--size-span active"
                  : "product--size-span"
              }
              data-cat="3"
            >
              L
            </span>
            <span
              className={
                ["XL"].includes(size)
                  ? "product--size-span active"
                  : "product--size-span"
              }
              data-cat="4"
            >
              XL
            </span>
            <span
              className={
                ["2XL", "3XL", "4XL"].includes(size)
                  ? "product--size-span active"
                  : "product--size-span"
              }
              data-cat="5"
            >
              XXL
            </span>
          </div>
          <div className="product--buttons">
            <button className="buy-now">Buy Now</button>
            <button className="add-cart">Add to cart</button>
            <button className="save">Add to wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// available: false
// brand: "Heller-Jast"
// category: "Books"
// gender: "Male"
// id: 112
// price: "$338.33"
// product_name: "portal"
// size: "2XL"

const mapStateToProps = (state) => {
  return {
    productDetails: state.results.selectedItem,
  };
};

export default connect(mapStateToProps)(ProductPage);
