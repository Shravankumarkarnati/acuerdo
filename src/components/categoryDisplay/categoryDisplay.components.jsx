import React from "react";
import "./category.styles.scss";
import styled from "styled-components";
import { withRouter } from "react-router";

const CategoryStyled = styled.div`
  border: 4px solid ${(props) => props.theme.colorBlack};
  overflow: hidden;
  border-radius: 0.5rem;
  &:hover {
    & div {
      transform: scale(1.1);
      & p {
        opacity: 0;
      }
    }
  }
  & div {
    width: 100%;
    height: 100%;
    background: ${(props) => `url(${props.bg})` || "red"};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    & p {
      font-size: 3rem;
      padding: 2rem;
      border: 2px solid ${(props) => props.theme.colorBlack};
      background: ${(props) => props.theme.colorWhite};
      text-transform: uppercase;
      opacity: 1;
      transition: all 0.3s;
    }
  }
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

const CategoryDisplay = ({ history }) => {
  const handleCategoryClick = (cat) => {
    history.push(`/category/${cat.toLowerCase()}`);
  };
  return (
    <div className="categories">
      <div className="categoryDisplay">
        {categories.map((cur, index) => {
          const image = require(`../../images/Images/${cur.toLowerCase()}_display.jpg`);
          return (
            <CategoryStyled
              bg={image}
              key={index}
              onClick={() => handleCategoryClick(cur)}
            >
              <div>
                <p>{cur}</p>
              </div>
            </CategoryStyled>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(CategoryDisplay);
