import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import { Breadcrumb, Pagination, Tabs } from "antd";
import i18next, { t } from "i18next";

import more_icon from "../../assets/img/more.svg";
import promotion_5 from "../../assets/img/promotion/promotion-5.jpg";
import promotion_6 from "../../assets/img/promotion/promotion-6.jpg";
import promotion_4 from "../../assets/img/promotion/promotion-4.jpg";
import promotion_10 from "../../assets/img/promotion/promotion-10.jpg";
import shipping_1 from "../../assets/img/shipping-1.svg";
import box from "../../assets/img/box.svg";
import PromotionArtwork from "./PromotionArtwork";
import { PRODUCTS, PROMOTIONS } from "../../utils";
import apiServices from "../../utils/api.services";
import { Link } from "react-router-dom";

function DetailsPromotion() {
  const { TabPane } = Tabs;
  const [promotions, setPromotions] = useState();
  console.log(
    "🚀 ~ file: DetailsPromotion.jsx ~ line 22 ~ DetailsPromotion ~ promotions",
    promotions
  );
  const [params, setParams] = useState({
    status: "active",
    for_gifting: true,
    page: 1,
  });
  function callback(key) {
    console.log(key);
  }
  const getPromotions = () => {
    apiServices
      .get(PRODUCTS, "")
      .then((res) => {
        if (res.data) {
          setPromotions(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    getPromotions();
  }, [params]);

  return (
    <>
      <div className="container mx-auto px-0 w-100">
        <Header />
        <Menu />
        <div className="container">
          <Breadcrumb
            className="d-flex box-dir-reverse breadcrumb"
            separator=""
          >
            <Breadcrumb.Item>
              <Link to={"/"}>
                {t("artwork.artibition")}
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator>{i18next.language === "fa-IR" ? ">" : "<"}</Breadcrumb.Separator>
            <Breadcrumb.Item>
              {t("promotion.banner.title")}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="banner">
            <div className="content-banner">
              <h2 className="content-title">{t("promotion.banner.title")}</h2>
              <p className="txt-title">{t("promotion.banner.descriprion")}</p>
            </div>
            <div className="select-price">
              <ul className="nav nav-justified d-block dir">
                <li>
                  <a href="#">
                    {t("promotion.banner.price_1_btn")}
                    {t("promotion.price_unit")}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {t("promotion.banner.price_2_btn")}
                    {t("promotion.price_unit")}
                  </a>
                </li>
                <li className="active">
                  <a href="#">
                    {t("promotion.banner.price_3_btn")}
                    {t("promotion.price_unit")}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {t("promotion.banner.price_4_btn")}
                    {t("promotion.price_unit")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Tabs
            className="promotion-tabs"
            defaultActiveKey="1"
            onChange={callback}
            style={{ marginTop: "70px" }}
          >
            <TabPane className="" tab={t("promotion.categories.all")} key="1">
              <div className="tab-content">
                <div id="artforgift1" className="tab-pane fade active in">
                  <div className="row dir">
                    {promotions?.results?.map((item, index) => (
                      <div className="col-md-6 ">
                        <PromotionArtwork key={index} item={item} />
                      </div>
                    ))}
                    {/* <PromotionArtwork /> */}
                    {/* <div className="col-md-6">
                      <PromotionArtwork />
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div> */}
                  </div>
                  <div className="row-pagination">
                    <Pagination total={50} />
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab={t("promotion.categories.painting")} key="2">
              {/* <div className="tab-content">
                <div id="artforgift1" className="tab-pane fade active in">
                  <div className="row dir">
                    <div className="col-md-6 ">
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div>
                    <div className="col-md-6">
                      <PromotionArtwork />
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div>
                  </div>
                  <div className="row-pagination">
                    <Pagination total={50} />
                  </div>
                </div>
              </div> */}
            </TabPane>
            <TabPane tab={t("promotion.categories.photography")} key="3">
              {/* <div className="tab-content">
                <div id="artforgift1" className="tab-pane fade active in">
                  <div className="row dir">
                    <div className="col-md-6 ">
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div>
                    <div className="col-md-6">
                      <PromotionArtwork />
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div>
                  </div>
                  <div className="row-pagination">
                    <Pagination total={50} />
                  </div>
                </div>
              </div> */}
            </TabPane>
            <TabPane tab={t("promotion.categories.sculpture")} key="4">
              {/* <div className="tab-content">
                <div id="artforgift1" className="tab-pane fade active in">
                  <div className="row dir">
                    <div className="col-md-6 ">
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div>
                    <div className="col-md-6">
                      <PromotionArtwork />
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div>
                  </div>
                  <div className="row-pagination">
                    <Pagination total={50} />
                  </div>
                </div>
              </div> */}
            </TabPane>
            <TabPane tab={t("promotion.categories.calligram")} key="5">
              {/* <div className="tab-content">
                <div id="artforgift1" className="tab-pane fade active in">
                  <div className="row dir">
                    <div className="col-md-6 ">
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div>
                    <div className="col-md-6">
                      <PromotionArtwork />
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div>
                  </div>
                  <div className="row-pagination">
                    <Pagination total={50} />
                  </div>
                </div>
              </div> */}
            </TabPane>
            <TabPane tab={t("promotion.categories.calligraphy")} key="6">
              {/* <div className="tab-content">
                <div id="artforgift1" className="tab-pane fade active in">
                  <div className="row dir">
                    <div className="col-md-6 ">
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div>
                    <div className="col-md-6">
                      <PromotionArtwork />
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div>
                  </div>
                  <div className="row-pagination">
                    <Pagination total={50} />
                  </div>
                </div>
              </div> */}
            </TabPane>
            <TabPane tab={t("promotion.categories.printmaking")} key="7">
              {/* <div className="tab-content">
                <div id="artforgift1" className="tab-pane fade active in">
                  <div className="row dir">
                    <div className="col-md-6 ">
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div>
                    <div className="col-md-6">
                      <PromotionArtwork />
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div>
                  </div>
                  <div className="row-pagination">
                    <Pagination total={50} />
                  </div>
                </div>
              </div> */}
            </TabPane>
            <TabPane tab={t("promotion.categories.graphic")} key="8">
              {/* <div className="tab-content">
                <div id="artforgift1" className="tab-pane fade active in">
                  <div className="row dir">
                    <div className="col-md-6 ">
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div>
                    <div className="col-md-6">
                      <PromotionArtwork />
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div>
                  </div>
                  <div className="row-pagination">
                    <Pagination total={50} />
                  </div>
                </div>
              </div> */}
            </TabPane>
            <TabPane tab={t("promotion.categories.drawing")} key="9">
              {/* <div className="tab-content">
                <div id="artforgift1" className="tab-pane fade active in">
                  <div className="row dir">
                    <div className="col-md-6 ">
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div>
                    <div className="col-md-6">
                      <PromotionArtwork />
                      <PromotionArtwork />
                      <PromotionArtwork />
                    </div>
                  </div>
                  <div className="row-pagination">
                    <Pagination total={50} />
                  </div>
                </div>
              </div> */}
            </TabPane>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailsPromotion;
