import React, { useState } from "react";
import "./imageSlider.styles.scss";

import { GrPrevious, GrNext } from "react-icons/gr";

import SliderImage1 from "../../images/Slider/slider1.jpg";
import SliderImage2 from "../../images/Slider/slider2.jpg";
import SliderImage3 from "../../images/Slider/slider3.jpg";
import SliderImage4 from "../../images/Slider/slider4.jpg";

import styled from "styled-components";

const Slide = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-image: ${(props) => `url(${props.bg})` || props.theme.colorWhite};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const sliderContent = [
  {
    img: SliderImage1,
    title: "all your needs",
    tagline: "at one place",
    btn: "shop now",
  },
  {
    img: SliderImage2,
    title: "Coupons and gift vouchers",
    tagline: "savings upto 40% off on everday essentials",
    btn: "shop coupons",
  },
  {
    img: SliderImage3,
    title: "Free delivery and  warrenty",
    tagline: "on selected items",
    btn: "save now",
  },
  {
    img: SliderImage4,
    title: "Easy returns",
    tagline: "On tech and automobile parts",
    btn: "Learn more",
  },
];

const ImageSlider = () => {
  const [curSlide, setCurSlide] = useState(0);

  const handleClick = (e) => {
    const type = e.target.closest("button").dataset.type;
    if (type === "prev") {
      if (curSlide === 0) {
        setCurSlide(3);
      } else {
        setCurSlide(curSlide - 1);
      }
    } else {
      if (curSlide === 3) {
        setCurSlide(0);
      } else {
        setCurSlide(curSlide + 1);
      }
    }
  };

  return (
    <div className="slider">
      <div className="slider-container">
        <button
          className="slider-btn slider-btn--prev"
          data-type="prev"
          onClick={(e) => handleClick(e)}
        >
          <GrPrevious />
        </button>
        <button
          className="slider-btn slider-btn--next"
          data-type="next"
          onClick={(e) => handleClick(e)}
        >
          <GrNext />
        </button>
        <div className="slider-main">
          <Slide bg={sliderContent[curSlide].img}>
            <div className="slide">
              <div className="slide-container">
                <p className="slide-title">{sliderContent[curSlide].title}</p>
                <p className="slide-tagline">
                  {sliderContent[curSlide].tagline}
                </p>
                <button className="slide-btn">
                  {sliderContent[curSlide].btn}
                </button>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
