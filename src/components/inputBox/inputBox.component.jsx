import React from "react";
import { GrSearch } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";
import "./inputBox.styles.scss";

const handleSubmit = (e) => {
  e.preventDefault();
};

const InputBox = () => {
  return (
    <form className="inputBox">
      <GrSearch className="inputBox-svg" />
      <input type="text" className="inputBox-input" placeholder="Search..." />
      <button
        type="submit"
        className="inputBox-btn"
        onClick={(e) => handleSubmit(e)}
      >
        <BsArrowRight />
      </button>
    </form>
  );
};

export default InputBox;
