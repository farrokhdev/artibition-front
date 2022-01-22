import React from "react";
import { t } from 'i18next';
import BasketFooterPanelNoBox from "../GalleryPanelSelectArtworkSource/BasketFooterPanelNoBox";
import HeaderPayment from "../../components/HeaderPayment/HeaderPayment";
import payment_successful from '../../assets/img/payment_successful.svg'



function SuccessPayment() {
    return (
        <>
            <div style={{ height: "100vh" }}>
                <HeaderPayment />
                <div className="container">
                    <div className="payment-state payment-successful dir">
                        <img src={payment_successful} width="200" height="200" alt="" className="img-responsive" />
                        <h1>{t("success-payment.title")}</h1>
                        <div className="tracking-id">
                            <span className="pull-dir">{t("success-payment.tracing_no")}</span>
                            <span className="persian-num">۱۲۶۲۳</span>
                        </div>
                        <h2>{t("success-payment.return_website")}</h2>
                        <span className="payment-count persian-num">۰۰:۱۴</span>
                        <button type="button" className="btn-default btn">{t("success-payment.finalize_purchase_btn")}</button>
                    </div>
                </div>
            </div>
            <BasketFooterPanelNoBox />
        </>
    )
}

export default SuccessPayment