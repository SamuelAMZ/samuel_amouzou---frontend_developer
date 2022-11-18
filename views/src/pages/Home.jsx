// built in hooks
import React from "react";

// components imports
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <header style={{ backgroundImage: "url(./images/hero.png)" }}>
      <Header />
      <Hero />
    </header>
  );
};

export default Home;
