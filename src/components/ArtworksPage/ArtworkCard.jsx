import React from "react";
import classnames from "classnames";
import { numDiscriminant } from "../../utils/discriminant";
import { follow } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ArtworkCard = ({ product, callBack = () => console.log("") }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const discountPrice = (price, discount, type) => {
    if (type === "percentage") {
      return numDiscriminant(((100 - discount) * price) / 100);
    } else {
      return numDiscriminant(price - discount);
    }
  };
  return (
    <>
      <div className="col-sm-4 ">
        <div
          className={classnames("cols", {
            finished: product?.is_sold,
          })}
        >
          <div className="col-img">
            {product?.is_special && (
              <div className="tags tags-spacial">
                {t("card_artwork.spacial")}
              </div>
            )}
{
  product?.discount?.value && (

              <div class="tags tags-off persian-num">
              {
                discountPrice(
                  product?.toman_price,
                  product?.discount?.value,
                  product?.discount?.type,
                  product?.dollar_price
                )
              }
              </div>
  )
}
            {/* {product?.discount?.value ? (
              <div class="tags tags-off persian-num">
                {" "}
                {numDiscriminant(product?.discount?.value)}
                {product?.discount?.type === "percentage"
                  ? "%"
                  : t("toman")}{" "}
              </div>
            ) : (
              ""
            )} */}
            <img
              src={product.medias && product.medias[0]?.exact_url}
              width="280"
              alt="آرتیبیشن"
              className="img-responsive"
              style={{
                height: 280,
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
            <div className="tab-overly">
              <a
                onClick={() =>
                  navigate(
                    `/site/artworks-detail/?id=${product.id}&artist_id=${product.artist_id}`
                  )
                }
                className="btn-see"
              >
                <span className="view-icon pull-right"></span>
                <span>{t("card_artwork.veiw")}</span>
              </a>
              <a
                href="#"
                onClick={() =>
                  navigate(
                    `/site/artworks-detail/?id=${product.id}&artist_id=${product.artist_id}`
                  )
                }
                className="btn-sale"
              >
                {t("card_artwork.request_buy")}
              </a>
              <button
                className={"like-icon " + (product?.likes ? "isLike" : "")}
                onClick={() =>
                  follow({
                    content: "product",
                    activity: "like",
                    object_id: product?.id,
                    action: product?.likes,
                    callBack,
                  })
                }
              ></button>
            </div>
          </div>
          <div className="col-body ">
            {product?.is_sold ? (
              <div className="finished-tag">{t("card_artwork.sold")}</div>
            ) : (
              ""
            )}
            <h6 className="col-title text-dir">
              {i18n.language === "fa-IR" ? (
                <span className="col-name">
                  {product?.translations?.fa?.artist_name}
                </span>
              ) : (
                <span className="col-name">
                  {product?.translations?.en?.artist_name}
                </span>
              )}
            </h6>
            <div className="col-dimension text-dir">
              <div className="d-flex box-dir-reverse">
                <span className="col-dimension-title">
                  {t("card_artwork.size.title")}
                </span>
                <span className="col-dimension-body mx-2">
                  <div className="d-flex">
                    <span className="dimension-width">{product.width ? product.width : t("artworkList.filter.size.no_width")}</span>
                    <span className="mx-2">{t("card_artwork.size.in")}</span>
                    <span className="dimension-height ">{product.height ? product.height : t("artworkList.filter.size.no_height")}</span>
                  </div>
                </span>
              </div>
            </div>
            <div className="col-price text-dir">
              <div className="d-flex box-dir-reverse">
                <span className="col-price-num">
                  {product?.discount
                    ? discountPrice(
                        product?.toman_price,
                        product?.discount?.value,
                        product?.discount?.type,
                        product?.dollar_price
                      )
                    : numDiscriminant(product?.toman_price)}
   
                </span>
                {/* <span className="col-price-unit">
                                      {t("toman")}
                                    </span> */}
                {/* {product?.discount?.value && (
                  <span
                    className={`persian-num ${
                      product?.discount ? "col-price-off" : ""
                    }`}
                  >
                    {numDiscriminant(product.toman_price)}{" "}
                    {product?.toman_price ? t("toman") : ""}
                  </span>
                )} */}

                {/* <span className="tag-gift  w-100">
                                      <div className="d-flex text-dir position-gift-card-artwork">
                                        <img
                                          className=""
                                          src={gift_icon}
                                          width="22"
                                          height="22"
                                          alt=""
                                        />
                                      </div>
                                    </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtworkCard;
