import React from "react";
import { ExhabitionsMain } from "../../components/ExhabitionComponents/ExhabitionsMain";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { useTranslation } from "react-i18next";

export const Exhabitions = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="container mx-auto px-0 w-100">
        <Header />
        <Menu />
        <div className="container">
          <ExhabitionsMain t={t} i18n={i18n} />
        </div>
        <Footer />
      </div>
    </>
  );
};
