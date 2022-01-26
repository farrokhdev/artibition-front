import React from "react"
import { t } from "i18next"

import logo from '../../assets/img/logo.svg'



function BasketFooterPanelNoBox() {
    return (
        <div className="basket-footer dir w-100">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 text-dir">
                        <span>{t("text-footer-auth.info")}</span>
                        <span className="persian-num">{t("text-footer-auth.mobile")}</span>
                    </div>
                    <div className="col-sm-3 hidden-xs">
                        <img src={logo} width="240" height="62" alt="لوگو-آرتیبیشن" className="img-responsive pull-left" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketFooterPanelNoBox