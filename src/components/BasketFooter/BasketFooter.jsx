import React from 'react';
import { t } from 'i18next';

import logo from '../../assets/img/logo.svg';

function BasketFooter() {
    return (
        <div class="basket-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-9">
                        <span>{t("text-footer-auth.info")}</span>
                        <span class="persian-num">{t("text-footer-auth.mobile")}</span>
                    </div>
                    <div class="col-sm-3 hidden-xs">
                        <img src={logo} width="240" height="62" alt="لوگو-آرتیبیشن"
                            class="img-responsive pull-left"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketFooter
