import React, { useEffect, useState } from "react";
import { t } from "i18next";
import BasketFooterPanelNoBox from "../GalleryPanelSelectArtworkSource/BasketFooterPanelNoBox";
import HeaderPayment from "../../components/HeaderPayment/HeaderPayment";
import payment_unsuccessful from "../../assets/img/payment_unsuccessful.svg";
import { useNavigate } from "react-router-dom";

function UnsuccessPayment() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ height: "100vh" }}>
        <HeaderPayment />
        <div className="container">
          <div className="payment-state payment-unsuccessful dir">
            <img
              src={payment_unsuccessful}
              width="200"
              height="200"
              alt=""
              className="img-responsive"
            />
            <h1>{t("unsuccess-payment.title")}</h1>
            <div className="tracking-id">
              <span className="pull-dir">
                {t("unsuccess-payment.tracing_no")}
              </span>
              <span className="persian-num">۱۲۶۲۳</span>
            </div>
            <h2>{t("unsuccess-payment.try_again")}</h2>
            <button
              onClick={() => navigate("/")}
              type="button"
              className="btn-default btn"
            >
              {t("unsuccess-payment.return_site_btn")}
            </button>
          </div>
        </div>
      </div>
      <BasketFooterPanelNoBox />
    </>
  );
}

export default UnsuccessPayment;
