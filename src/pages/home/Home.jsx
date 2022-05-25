import React from "react";
import Equipment from "../../components/Equipment/Equipment";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Mapa from "../../components/Map/Mapa";
import Newsletter from "../../components/Newsletter/Newsletter";
import Presentation from "../../components/Presentation/Presentation";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Presentation />
      <Features />
      <Mapa />
      <Equipment />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
