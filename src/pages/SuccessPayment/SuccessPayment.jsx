import React, { useEffect, useState } from "react";
import { t } from "i18next";
import BasketFooterPanelNoBox from "../GalleryPanelSelectArtworkSource/BasketFooterPanelNoBox";
import HeaderPayment from "../../components/HeaderPayment/HeaderPayment";
import payment_successful from "../../assets/img/payment_successful.svg";
import { useNavigate } from "react-router-dom";

function SuccessPayment() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(14);
  useEffect(() => {
    function tick() {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }
    setInterval(() => tick(), 1000);
    const timer = setTimeout(() => {
      navigate("/");
    }, 14000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div style={{ height: "100vh" }}>
        <HeaderPayment />
        <div className="container">
          <div className="payment-state payment-successful dir">
            <img
              src={payment_successful}
              width="200"
              height="200"
              alt=""
              className="img-responsive"
            />
            <h1>{t("success-payment.title")}</h1>
            <div className="tracking-id">
              <span className="pull-dir">
                {t("success-payment.tracing_no")}
              </span>
              <span className="persian-num">۱۲۶۲۳</span>
            </div>
            <h2>{t("success-payment.return_website")}</h2>
            <span className="payment-count persian-num">۰۰:{seconds}</span>
            <button
              type="button"
              className="btn-default btn"
              onClick={() => navigate("/")}
            >
              {t("success-payment.finalize_purchase_btn")}
            </button>
          </div>
        </div>
      </div>
      <BasketFooterPanelNoBox />
    </>
  );
}

export default SuccessPayment;
