import React from "react";
import { t } from "i18next";

import promotion_5 from "../../assets/img/promotion/promotion-5.jpg";
import promotion_6 from "../../assets/img/promotion/promotion-6.jpg";
import promotion_4 from "../../assets/img/promotion/promotion-4.jpg";
import promotion_10 from "../../assets/img/promotion/promotion-10.jpg";
import shipping_1 from "../../assets/img/shipping-1.svg";
import box from "../../assets/img/box.svg";
import { useTranslation } from "react-i18next";
import { numDiscriminant } from "../../utils/discriminant";

function PromotionArtwork({ item }) {
  const { t, i18n } = useTranslation();

  return (
    <div className="row mrgb60 dir">
      <div className="col-sm-6">
        <div className="col-img">
          {item?.discount?.value ? (
            <div className="tags tags-off persian-num">
              {item?.discount?.value}
              {item?.discount?.type === "toman"
                ? t("toman")
                : item?.discount?.type === "percentage"
                ? "%"
                : "%"}
            </div>
          ) : (
            ""
          )}
          <img
            src={item?.medias && item.medias[0]?.exact_url}
            width="840"
            height="1259"
            alt="آرتیبیشن"
            className="img-responsive"
          />
        </div>
      </div>
      <div className="col-sm-6 text-dir">
        <div className="col-details">
          <h3 className="coldetail-title">
            {i18n.language === "fa-IR"
              ? item?.translations?.fa?.artist_name
              : item?.translations?.en?.artist_name}{" "}
          </h3>
          <div className="col-dimension">
            <span className="col-dimension-title pull-dir">
              {t("promotion.artwork.size")}
            </span>
            <span className="col-dimension-body">
              <span className="dimension-width">
                {item?.width ? item?.width : 0}
              </span>
              <span>{t("promotion.artwork.x")}</span>
              <span className="dimension-height">
                {item?.height ? item?.height : 0}
              </span>
            </span>
          </div>
          <div className="coldetails-more">
            <div className="coldetails-row">
              <img
                src={shipping_1}
                width="32"
                height="32"
                alt=""
                className="pull-dir"
              />
              <span>{t("promotion.artwork.fast_secure_delivery")}</span>
            </div>
            <div className="coldetails-row">
              <img
                src={box}
                width="23"
                height="23"
                alt=""
                className="pull-dir img-responsive"
              />
              <span>{t("promotion.artwork.send_gift_recipient")}</span>
            </div>
          </div>
          <div className="col-price">
            <span className="col-price-num greencolor">
              {numDiscriminant(
                item?.toman_price
                  ? item?.toman_price -
                      (item?.discount?.type === "percentage"
                        ? ((item?.discount?.value ? item?.discount?.value : 0) *
                            item?.toman_price) /
                          100
                        : item?.discount?.type === "toman"
                        ? item?.discount?.value
                        : 0)
                  : 0
              )}
            </span>
            <span className="col-price-unit greencolor">
              {t("promotion.price_unit")}
            </span>
            <span className="persian-num col-price-off">
              {numDiscriminant(item?.toman_price ? item?.toman_price : 0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromotionArtwork;
