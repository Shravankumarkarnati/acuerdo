import React from "react";
import "./category.styles.scss";
import styled from "styled-components";

const CategoryStyled = styled.div`
  background: ${(props) => `url(${props.bg})` || "red"};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const categories = [
  "Books",
  "Sports",
  "Movies",
  "Grocery",
  "Games",
  "Jewelery",
  "Garden",
  "Shoes",
  "Outdoors",
  "Beauty",
  "Automotive",
  "Clothing",
  "Baby",
  "Tools",
  "Kids",
  "Music",
  "Home",
  "Electronics",
  "Industrial",
  "Computers",
  "Health",
  "Toys",
];

const CategoryDisplay = () => {
  return (
    <div className="categories">
      <div className="categoryDisplay">
        {categories.map((cur, index) => {
          const image = require(`../../images/Images/${cur.toLowerCase()}_display.jpg`);
          return (
            <CategoryStyled bg={image} key={index}>
              <p>{cur}</p>
            </CategoryStyled>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDisplay;
