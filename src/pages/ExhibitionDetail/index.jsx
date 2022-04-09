import React from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { useTranslation } from "react-i18next";
import ExhibitionsMain from "../../components/ExhibitionComponents/ExhibitionDetail/ExhibitionsMain";

const ExhibitionDetail = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="container mx-auto px-0 w-100">
        <Header />
        <Menu />
        <div className="container">
          <ExhibitionsMain t={t} i18n={i18n} />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default ExhibitionDetail;
