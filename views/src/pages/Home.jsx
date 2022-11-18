// built in hooks
import React from "react";

// components imports
import Header from "../components/Header";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <header>
        <Header />
        <Hero />
      </header>
      <Filters />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
