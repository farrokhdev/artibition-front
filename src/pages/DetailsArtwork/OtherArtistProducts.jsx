import React from "react";
import { numDiscriminant } from "../../utils/discriminant";
import { useTranslation } from "react-i18next";

export const OtherArtistProducts = ({
  artistProduct,
  navigate,
  toggle,
  setToggle,
  follow,
}) => {
  const { i18n, t } = useTranslation();
  return (
    <>
      {artistProduct?.results?.map((item, index) => (
        <div className="cols mx-4 pb-3">
          <div className="col-img">
            <img
              src={item.medias[0]?.exact_url}
              width="840"
              height="840"
              alt="آرتیبیشن"
              className="img-responsive"
            />
            <div className="tab-overly">
              <a
                onClick={() => {
                  navigate(
                    `/site/artworks-detail/?id=${item.id}&artist_id=${item.artist_id}`
                  );
                  setToggle(!toggle);
                }}
                className="btn-see"
              >
                <span className="view-icon pull-right"></span>
                <span>{t("artwork.view-artwork")}</span>
              </a>
              <a href="#" className="btn-sale">
                {t("artwork.btn-action-to-shop")}
              </a>
              <a
                href="#"
                className="like-icon"
                onClick={() =>
                  follow({
                    content: "product",
                    activity: "like",
                    object_id: item.id,
                  })
                }
              ></a>
            </div>
          </div>
          <div className="col-body">
            <h6 className="col-title">
              <span className="col-name">
                {i18n.language === "fa-IR"
                  ? item.translations?.fa?.artist_name
                  : item.translations?.en?.artist_name}
              </span>
            </h6>
            <div className="col-dimension">
              <span className="col-dimension-title">ابعاد:</span>
              <span className="col-dimension-body">
                <span className="dimension-width">{item.width}</span>
                <span> در </span>
                <span className="dimension-height">{item.height}</span>
              </span>
            </div>
            <div className="col-price text-dir">
              <span className="col-price-num">
                {i18n.language === "fa-IR"
                  ? numDiscriminant(item.toman_price)
                  : numDiscriminant(item.dollar_price)}
              </span>
              <span className="col-price-unit">تومان</span>
              <span className="persian-num col-price-off">
                {i18n.language === "fa-IR"
                  ? item?.discount?.type === "percentage"
                    ? numDiscriminant(
                        (item.toman_price * Math.floor(item?.discount?.type)) /
                          100
                      ) + "تومان"
                    : ""
                  : numDiscriminant(item.dollar_price)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
