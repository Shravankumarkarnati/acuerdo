import React, { useEffect } from "react";
import "./resultsCard.styles.scss";
import { FaRegHeart } from "react-icons/fa";
// FaHeart
import { useHistory } from "react-router-dom";

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

const ResultsCard = ({ result }) => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (res, res_id) => {
    history.push(`/product/${res_id}`);
    console.log(res);
  };

  const { brand, category, price, product_name, id } = result;

  const image_url = require(`../../images/Images/${category.toLowerCase()}_title.jpg`);
  return (
    <div className="card" onClick={() => handleCardClick(result, id)}>
      <div className="card--image">
        <img src={image_url} alt={product_name} />
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
        <button className="card--btns-buy">Add to cart</button>
        <span className="card--btns-like">
          <FaRegHeart />
        </span>
      </div>
    </div>
  );
};

export default ResultsCard;

// available: false
// brand: "Ullrich-Weissnat"
// category: "Games"
// gender: "Female"
// id: 92
// price: "$447.38"
// product_name: "impactful"
// size: "S"
