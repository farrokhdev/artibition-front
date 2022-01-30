import React from "react";
import classnames from "classnames";
import rdbewaopdm3 from "../../assets/img/artworks/rdbewaopdm@3x.jpg";
import delete_icon from "../../assets/img/delete.svg";

import { t } from "i18next";
import { isNil } from "lodash";
import { useTranslation } from "react-i18next";

function CartItemDisable({ removeProduct, singleProduct }) {
  const { t, i18n } = useTranslation();
  const {
    edition_number,
    dollar_price,
    toman_price,
    discountPercent,
    discountCash,
    paymentPrice,
  } = singleProduct;

  const { product } = singleProduct;

  const {
    id,
    translations,
    owner,
    medias,
    unique_code,
    category,
    material,
    technique,
    jalali_creation_year,
    christian_creation_year,
    seller_type,
    length,
    width,
    height,
  } = product;
  let index = "";
  if (i18n.language === "fa-IR") {
    index = "fa";
  } else {
    index = "en";
  }
  let title = translations?.[index]?.title;
  title = title.replace(/null/g, "");
  title = title.replace(/undefined/g, "");
  let ownerName = `${owner?.translations?.[index]?.first_name} ${owner?.translations?.[index]?.last_name}`;
  ownerName = ownerName.replace(/null/g, "");
  ownerName = ownerName.replace(/undefined/g, "");
  const price = i18n.language === "fa-IR" ? toman_price : dollar_price;

  const categoryName = category?.translations?.[index]?.title;
  const materialName = material?.translations?.[index]?.title;
  const techniqueName = technique?.translations?.[index]?.title;
  const creationYear =
    i18n.language === "fa-IR" ? jalali_creation_year : christian_creation_year;
  let imgSrc = "";
  if (medias?.length > 0) {
    imgSrc = medias?.find((media) => media?.is_default)?.exact_url;
    if (isNil(imgSrc)) {
      imgSrc = medias[0];
    }
  }
  let discountText = "";
  let paymentPriceText = "";

  discountText = discountCash
    ?.toString()
    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  paymentPriceText = paymentPrice
    ?.toString()
    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const sellerType =
    i18n.language === "fa-IR"
      ? seller_type === "artist"
        ? "هنرمند"
        : "مجموعه دار"
      : seller_type === "artist"
      ? "artist"
      : "gallery";
  return (
    <div className="basket-list-row disabled">
      <div className="row">
        <div className="col-md-3 col-xs-6">
          <div className="col-img">
            {discountPercent > 0 && (
              <span
                className="persian-num text-dir "
                style={{
                  backgroundColor: "#ec008c",
                  padding: "4px",
                  color: "white",
                }}
              >
                {discountPercent}%
              </span>
            )}
            <img
              src={imgSrc}
              width="840"
              height="840"
              alt=""
              className="img-responsive basket-img"
            />
          </div>
        </div>
        <div className="col-md-4 col-xs-6">
          <h2 className="text-dir">{ownerName}</h2>
          <h4 className="text-dir">{title}</h4>
          <div className="row-listdetail text-dir">
            <div className="row">
              <span className="col-xs-4 detail-title">
                {t("cart.order.code")}
              </span>
              <span className="col-xs-8 detail-name persian-num">
                {unique_code}
              </span>
            </div>
          </div>
          <div className="row-listdetail text-dir">
            <div className="row">
              <span className="col-xs-4 detail-title">
                {t("cart.order.category")}
              </span>
              <h3 className="col-xs-8 detail-name">{categoryName}</h3>
            </div>
          </div>
          <div className="row-listdetail text-dir">
            <div className="row">
              <span className="col-xs-4 detail-title">
                {t("cart.order.technique")}
              </span>
              <h3 className="col-xs-8 detail-name">{techniqueName}</h3>
            </div>
          </div>
          <div className="row-listdetail text-dir">
            <div className="row">
              <span className="col-xs-4 detail-title">
                {t("cart.order.material")}
              </span>
              <h3 className="col-xs-8 detail-name">{materialName}</h3>
            </div>
          </div>
          <div className="row-listdetail text-dir">
            <div className="row">
              <span className="col-xs-4 detail-title">
                {t("cart.order.date_creation")}
              </span>
              <h3 className="col-xs-8 detail-name persian-num">
                {creationYear}
              </h3>
            </div>
          </div>
          <div className="row-listdetail text-dir">
            <div className="row">
              <span className="col-xs-4 detail-title">
                {t("cart.order.size")}
              </span>
              <h3 className="col-xs-8 detail-name">
                <span className="dimension-width persian-num">{length}</span>
                {!isNil(length) && <span>{t("cart.order.x")}</span>}
                <span className="dimension-height persian-num">{width}</span>
                {!isNil(width) && <span>{t("cart.order.x")}</span>}
                <span className="dimension-height persian-num">{height}</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="clearfix visible-sm visible-xs"></div>
        <div className="col-md-4">
          <div className="basket-moredetail">
            <div className="row">
              <div className="col-md-12 col-sm-7 text-dir">
                <span className="greencolor">
                  {t("cart.order.delivery_call_desctiption")}
                </span>
                <br />
                <span>
                  {t("cart.order.sold_by_collector_1")}
                  <strong>{t("cart.order.collector")}</strong>
                  {t("cart.order.sold_by_collector_2")}
                </span>
              </div>
              <div className="col-md-12 col-sm-5 btm-absolute">
                <div className="basket-price-orginal">
                  <div className="col-xs-12">
                    <span className="pull-dir">
                      {t("cart.order.artwork_not_available")}
                    </span>
                    <span className="pull-left finished-tag">
                      {t("cart.order.sold")}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-remove pull-left"
                onClick={() => removeProduct(id, edition_number)}
              >
                <img
                  src={delete_icon}
                  width="32"
                  height="32"
                  alt=""
                  className="pull-dir"
                />
                <span>{t("cart.order.remove")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemDisable;
