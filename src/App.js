import React from "react";
import "./App.scss";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Body/> */}
      <div className="body"></div>
      <Footer />
    </div>
  );
}

export default App;
