import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { PromotionsMain } from "../../components/PromotionsComponents/PromotionsMain";


export default function Promotions() {
  return (
    <>
      <div className="container mx-auto px-0 w-100">
        <Header />
        <Menu />
        <div className="container">
          <PromotionsMain />
        </div>
        <Footer />
      </div>
    </>
  )
}
