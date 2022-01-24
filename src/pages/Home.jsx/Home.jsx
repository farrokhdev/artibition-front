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


function Home() {
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
                    <h3 className="persian-num font24">حراج بزرگ آرتیبیشن</h3>
                    <div className="clearfix"></div>
                    <p className="" style={{ textAlign: "center" }}>
                      تنها ۳ روز دیگر تا پایان جشنواره پاییزه آرتیبیشن فرصت
                      باقیست. هم اکنون با استفاده از کد زیر از تخفیف ۲۰
                      درصدی تمام آثار هنری آرتیبیشن بهره‌مند شوید.
                    </p>
                    <div className="offer-code">
                      <button className="btn-copy pull-dir" onClick={() => { copyToClipboard() }}></button>
                      <span className="greencolor" id="code">ARTHIBITION_99</span>
                    </div>
                    <button type="button" className="btn-white">مشاهده آثار</button>
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
