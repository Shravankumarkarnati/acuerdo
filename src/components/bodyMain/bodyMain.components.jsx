import React from "react";
import "./bodyMain.styles.scss";

import ImageSlider from "../imageSlider/imageSlider.component";
import CategoryDisplay from "../categoryDisplay/categoryDisplay.components";

const BodyMain = () => {
  return (
    <main className="bodyMain">
      <ImageSlider />
      <CategoryDisplay />
    </main>
  );
};

export default BodyMain;
