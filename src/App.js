import React from "react";
import "./App.scss";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Body from "./pages/body.main";
// import { uploadShopData,  } from "./firebase/setupStore";
// import { getImage } from "./firebase/getImages";

function App() {
  // uploadShopData();
  // uploadShopImages();
  // const img = getImage();

  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
