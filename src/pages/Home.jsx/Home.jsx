import React, { useEffect, useState } from "react";
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
import { message, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import remove from "../../assets/img/remove.svg";
import { setOpenModal } from "../../redux/reducers/auth/auth.actions";
import { Link } from "react-router-dom";
import { isLogin } from "../../utils/utils";
import apiServices from "../../utils/api.services";
import { PRODUCTS_CATEGORIES } from "../../utils";

function Home() {
  const dispatch = useDispatch();
  const { is_Open_Modal } = useSelector((state) => state.authReducer);
  const { t, i18n } = useTranslation();

  const [showPromotion, setShowPromotion] = useState(false);
  const [categories, setCats] = useState([]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(document.getElementById("code").innerHTML);
    message.success({
      content: t("clipboard.success_message"),
      style: { marginTop: "110px" },
    });
  };

  useEffect(() => {
    apiServices
      .get(PRODUCTS_CATEGORIES, "")
      .then((res) => {
        if (res.data) {
          setCats(res.data.data.results);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <>
      {!!is_Open_Modal ? (
        <div class="notification-signup ">
          <button type="button" class="remove-noti">
            <img
              src={remove}
              width="19"
              height="19"
              alt=""
              onClick={() => dispatch(setOpenModal(!is_Open_Modal))}
            />
          </button>
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <p>
                  عضویت با موفقیت انجام شد. اگر می‌خواهید به عنوان هنرمند فعالیت
                  نمایید دکمه روبرو را کلیک کنید. برای فعالیت به عنوان گالری‌دار
                  از
                  <a href="#">اینجا</a>
                  وارد شوید.
                </p>
              </div>
              <div class="col-sm-3">
                {isLogin() ? (
                  <Link
                    to={"/panel/profile"}
                    onClick={() => {
                      message.error({
                        content: "لطفا ابتدا اطلاعات پروفایل خود را تکمیل کنید",
                        style: {
                          marginTop: "110px",
                        },
                      });
                    }}
                    type="button"
                    class="btn-noti"
                    data-toggle="modal"
                    data-target="#verify-artist"
                  >
                    فعالیت به عنوان هنرمند
                  </Link>
                ) : (
                  <Link
                    to={"/auth/login"}
                    onClick={() => {
                      message.error("لطفا ابتدا وارد حساب کاربری شوید");
                    }}
                    type="button"
                    class="btn-noti"
                    data-toggle="modal"
                    data-target="#verify-artist"
                  >
                    فعالیت به عنوان هنرمند
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="container mx-auto px-0 w-100">
        <Header />
        <Menu />
        <Slider />
        <AllProducts categories={categories} />
        <Artists />
        <Events />
        <News />
        <Suggestions categories={categories} />
        <RecentlyVeiws categories={categories} />
        <Newsletter />
        <Collection />
        <Modal
          visible={showPromotion}
          footer={[]}
          width={800}
          className="promotion-popup"
        >
          <div
            className="modal-content"
            style={{ backgroundColor: "#141414", color: "white" }}
          >
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setShowPromotion(false);
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <div className="row dir">
                <div className="col-sm-6">
                  <div className="aligncenter right-pro">
                    <h2 className="persian-num font24">20 درصد تخفیف</h2>
                    <h3 className="persian-num font24">
                      {t("home-modal-exhibition-sale-title")}
                    </h3>
                    <div className="clearfix"></div>
                    <p className="" style={{ textAlign: "center" }}>
                      {t("home-modal-exhibition-sale-content")}
                    </p>
                    <div className="offer-code">
                      <button
                        className="btn-copy pull-dir"
                        onClick={() => {
                          copyToClipboard();
                        }}
                      ></button>
                      <span className="greencolor" id="code">
                        ARTHIBITION_99
                      </span>
                    </div>
                    <button type="button" className="btn-white">
                      {t("promotion.popup.view_artworks")}
                    </button>
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
