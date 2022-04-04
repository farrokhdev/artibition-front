import React from "react";
import {
  ExhibitionsBanner,
  ExhibitionsList,
} from "../../components/ExhibitionComponents/ExhibitionsPage";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";

const ExhibitionsPage = () => {
  return (
    <>
      <div className="container mx-auto px-0 w-100">
        <Header />
        <Menu />
      </div>
      <ExhibitionsBanner />
      <ExhibitionsList />
      <Footer />
    </>
  );
};

export default ExhibitionsPage;
