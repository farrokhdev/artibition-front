import React from "react";
import Header from "../../components/Header/Header";

import Footer from "../../components/Footer/Footer";
import Collection from "./Collection";
import Newsletter from "./Newsletter";
import RecentlyVeiws from "./RecentlyVeiws";
import Suggestions from "./Suggestions";
import News from "./News";
import Events from "./Events";
import Artists from "./Artists";
import AllProducts from "./AllProducts";
import Slider from "./Slider";
import Menu from "./Menu";

function Home() {
  return (
    <>
      <div className="container mx-auto px-0 w-100">
        <Header />
        <Menu />
        <Slider />
        <AllProducts />
        <Artists />
        <Events />
        <News />
        <Suggestions />
        <RecentlyVeiws />
        <Newsletter />
        <Collection />
      </div>

      <Footer />
    </>
  );
}

export default Home;
