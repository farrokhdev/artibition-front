import React from "react";
import {
  ExhibitionsBanner,
  ExhibitionsList,
} from "../../components/ExhibitionComponents/ExhibitionsPage";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import { useTranslation } from "react-i18next";

const ExhibitionsPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="container mx-auto px-0 w-100">
        <Header />
        <Menu />
      </div>
      <div className={`${i18n.language === "fa-IR" ? "fa-page" : "en-page"} `}>
        <ExhibitionsBanner />
        <ExhibitionsList />
      </div>
      <Footer />
    </>
  );
};

export default ExhibitionsPage;
