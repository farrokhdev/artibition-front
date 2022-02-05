import React, { useState } from "react";
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
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";


function Home() {
  const {t, i18n} = useTranslation();

  const [showPromotion, setShowPromotion] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(document.getElementById("code").innerHTML);
    alert("successfully copied!")
  }

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
        <Modal
          visible={showPromotion}
          footer={[]}
          width={800}
          className="promotion-popup">
          <div className="modal-content" style={{ backgroundColor: "#141414", color: "white" }}>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowPromotion(false) }}>
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <div className="row dir">
                <div className="col-sm-6">
                  <div className="aligncenter right-pro">
                    <h2 className="persian-num font24">20 درصد تخفیف</h2>
                    <h3 className="persian-num font24">{t('home-modal-exhibition-sale-title')}</h3>
                    <div className="clearfix"></div>
                    <p className="" style={{ textAlign: "center" }}>
                      {t('home-modal-exhibition-sale-content')}
                    </p>
                    <div className="offer-code">
                      <button className="btn-copy pull-dir" onClick={() => { copyToClipboard() }}></button>
                      <span className="greencolor" id="code">ARTHIBITION_99</span>
                    </div>
                    <button type="button" className="btn-white">{t('promotion.popup.view_artworks')}</button>
                  </div>
                </div>
                <div className="col-sm-6 hidden-xs">
                  <div className="left-pro"></div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>

      <Footer />
    </>
  );
}

export default Home;
