import React from "react";
import { t } from 'i18next';

import promotion_5 from '../../assets/img/promotion/promotion-5.jpg';
import promotion_6 from '../../assets/img/promotion/promotion-6.jpg';
import promotion_4 from '../../assets/img/promotion/promotion-4.jpg';
import promotion_10 from '../../assets/img/promotion/promotion-10.jpg';
import shipping_1 from '../../assets/img/shipping-1.svg';
import box from '../../assets/img/box.svg';


function PromotionArtwork() {
    return (
        <div className="row mrgb60 dir">
            <div className="col-sm-6">
                <div className="col-img">
                    <div className="tags tags-off persian-num">60 %</div>
                    <img src={promotion_5} width="840" height="1259" alt="آرتیبیشن" className="img-responsive" />
                </div>
            </div>
            <div className="col-sm-6 text-dir">
                <div className="col-details">
                    <h3 className="coldetail-title">ساناز دزفولیان</h3>
                    <div className="col-dimension">
                        <span className="col-dimension-title pull-dir">{t("promotion.artwork.size")}</span>
                        <span className="col-dimension-body">
                            <span className="dimension-width">60</span>
                            <span>{t("promotion.artwork.x")}</span>
                            <span className="dimension-height">60</span>
                        </span>
                    </div>
                    <div className="coldetails-more">

                        <div className="coldetails-row">
                            <img src={shipping_1} width="32" height="32" alt="" className="pull-dir" />
                            <span>{t("promotion.artwork.fast_secure_delivery")}</span>
                        </div>
                        <div className="coldetails-row">
                            <img src={box} width="23" height="23" alt="" className="pull-dir img-responsive" />
                            <span>{t("promotion.artwork.send_gift_recipient")}</span>
                        </div>
                    </div>
                    <div className="col-price">
                        <span className="col-price-num greencolor">1.400.000</span>
                        <span className="col-price-unit greencolor">{t("promotion.price_unit")}</span>
                        <span className="persian-num col-price-off">2.000.000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromotionArtwork