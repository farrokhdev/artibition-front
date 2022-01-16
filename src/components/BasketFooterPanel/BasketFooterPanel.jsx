import React from 'react';
import logo from '../../assets/img/logo.svg';
import { t } from 'i18next';

function BasketFooterPanel() {
    return (
        <div className=" box basket-footer ">
            <div className="d-flex custom-container justify-content-between box-dir-reverse">
                <div className="col col-md-8 px-0">
                    <div className="d-block d-sm-flex box-dir-reverse">
                        <div className="col col-sm-8 col-md-7 col-lg-6  px-0 ">
                            <div className="d-flex justify-content-center">
                                <span>{t("text-footer-auth.info")}</span>
                            </div>
                        </div>
                        <div className="col px-0 ">
                            <div className="d-flex justify-content-center">
                                <span className="persian-num">{t("text-footer-auth.mobile")}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-md-4 col-md-5 col-lg-6 hidden-xs px-0">
                    <div className="d-flex justify-content-center w-100">
                        <img src={logo} width="240" height="62" alt="لوگو-آرتیبیشن"
                            className="img-responsive pull-left" />
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}

export default BasketFooterPanel
