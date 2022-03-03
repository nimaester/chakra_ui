import React from "react";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Upcoming from "./components/Upcoming";
import Header from "./components/Header";
import Popular from "./components/Popular";
import StayConnected from "./components/StayConnected";
import Stories from "./components/Stories";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Info />
      <Upcoming />
      <Popular />
      <StayConnected />
      <Stories />
      <Footer />
    </div>
  );
};

export default App;
