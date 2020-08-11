import React from "react";
import "./App.scss";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import BodyMain from "./components/bodyMain/bodyMain.components";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyMain />
      <Footer />
    </div>
  );
}

export default App;
