import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;