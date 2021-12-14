import React from 'react';
import { t } from 'i18next';

import logo from '../../assets/img/logo.svg';

function BasketFooter() {
    return (
        <div className="box basket-footer">
            <div className="container">
                <div className="d-flex content-box-basket-footer">
                    <div className="col-sm-9">
                        <div className="d-flex content-box-basket-footer">
                            <span>{t("text-footer-auth.info")}</span>
                            <span className="persian-num mx-2">{t("text-footer-auth.mobile")}</span>
                        </div>
                    </div>
                    <div className="col-sm-3 hidden-xs">
                        <div className="d-flex ">
                            <img src={logo} width="240" height="62" alt="لوگو-آرتیبیشن"
                            className="img-responsive pull-left"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketFooter
