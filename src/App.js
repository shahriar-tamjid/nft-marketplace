import React from "react";
import Choose from "./components/Choose";
import Clients from "./components/Clients";
import CreateAndSell from "./components/CreateAndSell";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Marketplace from "./components/Marketplace";
import ScrollToTop from "./components/ScrollToTop";
import Subscribe from "./components/Subscribe";

const App = () => {
  return (
    <div>
      <Home />
      <Clients />
      <CreateAndSell />
      <Choose />
      <Marketplace />
      <Subscribe />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
