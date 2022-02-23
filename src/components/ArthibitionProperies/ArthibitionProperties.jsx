import React from 'react';

import classnames from 'classnames';


import shipping_icon from '../../assets/img/shipping.svg';
import refund_icon from '../../assets/img/refund.svg';
import secure_payment_icon from '../../assets/img/secure_payment.svg';
import original_icon from '../../assets/img/original.svg';


import { t } from 'i18next';






function ArthibitionProperties() {
    return (
        <div className="row-property d-flex dir">
            <div className="col-md-3 col-sm-6 d-flex flex-wrap">
                <img src={shipping_icon} width="40" height="40" alt="" className="pull-right" />
                <h6>{t("cart.properties.delivery_arthibition")}</h6>
            </div>
            <div className="col-md-3 col-sm-6 d-flex">
                <img src={refund_icon} width="40" height="40" alt="" className="pull-right" />
                <h6>{t("cart.properties.referral_return")}</h6>
            </div>
            <div className="col-md-3 col-sm-6 d-flex">
                <img src={secure_payment_icon} width="40" height="40" alt="" className="pull-right" />
                <h6>{t("cart.properties.safe_payment")}</h6>
            </div>
            <div className="col-md-3 col-sm-6 d-flex">
                <img src={original_icon} width="40" height="40" alt="" className="pull-right" />
                <h6>{t("cart.properties.originality_guaranteed")}</h6>
            </div>
        </div>
    )
}

export default ArthibitionProperties;