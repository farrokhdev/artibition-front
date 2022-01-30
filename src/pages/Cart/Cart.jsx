import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import classnames from "classnames";
import { GetLanguage, Token } from "../../utils/utils";
import { useTranslation } from "react-i18next";
import empty from "../../assets/img/Empty.svg";
import CartItem from "./CartItem";
import CartItemDisable from "./CartItemDisable";
import ArthibitionProperties from "../../components/ArthibitionProperies/ArthibitionProperties";
import apiServices from "../../utils/api.services";
import {
  CART_ME,
  CART_ME_CHECKOUT,
  CART_ME_CLEAR_CART,
  CART_ME_REMOVE_ITEM,
  ORDER,
} from "../../utils";
import { useNavigate } from "react-router-dom";
import { isNil } from "lodash";
import axios from "axios";
import { message } from "antd";
function Cart() {
  const { t, i18n } = useTranslation();
  const [product_items, setProduct_items] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const getData = () => {
    apiServices
      .get(CART_ME, "")
      .then((res) => {
        if (res?.data?.data?.product_items?.length > 0) {
          const tempProductItems = res?.data?.data?.product_items.map(
            (product_item) => {
              const { discount, toman_price, dollar_price } =
                product_item?.product;
              const price =
                i18n.language === "fa-IR" ? toman_price : dollar_price;
              let discountCash = 0;
              let paymentPrice = parseInt(price);
              let discountPercent = 0;
              if (!isNil(discount)) {
                if (discount?.type === "percentage") {
                  discountPercent = discount?.value;
                  discountCash =
                    (parseInt(price) * parseFloat(discountPercent)) / 100;
                  paymentPrice = price - discountCash;
                } else {
                  discountCash = parseInt(discount?.value);
                  discountPercent = (discountCash / parseInt(price)) * 100;
                  paymentPrice = parseInt(price) - discountCash;
                }
              }
              return {
                ...product_item,
                discountCash,
                paymentPrice,
                discountPercent,
              };
            }
          );
          const totalPriceTemp = tempProductItems?.reduce(
            (acc, item) => acc + parseInt(item.paymentPrice),
            0
          );
          setTotalPrice(totalPriceTemp);
          setProduct_items(tempProductItems);
        } else {
          setProduct_items(res?.data?.data?.product_items);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const removeSingleProduct = (id, edition_number) => {
    let token = Token() ? "Bearer " + Token() : undefined;

    const tempHeader = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    };
    axios
      .put(
        CART_ME_REMOVE_ITEM,
        { product_id: id, edition_number },
        {
          headers: tempHeader,
        }
      )
      .then((res) => {
        if (res?.data?.code === 200) {
          getData();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCheckoutCart = () => {
    let token = Token() ? "Bearer " + Token() : undefined;

    const tempHeader = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    };
    axios
      .put(
        CART_ME_CHECKOUT,
        {},
        {
          headers: tempHeader,
        }
      )
      .then((res) => {
        if (res?.data?.code === 200) {
          const orderId = res?.data?.data?.order;
          axios
            .put(
              CART_ME_CLEAR_CART,
              {},
              {
                headers: tempHeader,
              }
            )
            .then((res) => {
              navigate("/panel/payment", { state: { orderId } });
            });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container mx-auto px-0 w-100 bg-white">
        <Header />
        <Menu />

        {/* ------------- EMPTY STATE -------------- */}
        {product_items?.length < 1 && (
          <div className="container dir">
            <div className="emptystate">
              <img src={empty} width="103" height="98" alt="" />
              <h3>{t("cart.empty.title")}</h3>
              <p>{t("cart.empty.description")}</p>
              <button
                type="button"
                className="btn btn-artworksimilar"
                onClick={() => navigate("/site/artworks")}
              >
                {t("cart.empty.btn")}
              </button>
            </div>
          </div>
        )}
        {/* ------------- EMPTY STATE -------------- */}

        {/* ------------- FULL STATE -------------- */}
        <div className="container dir">
          {product_items?.length > 0 && (
            <div className="public-header">
              <div className="col-xs-12">
                <h2 className="default-title pull-dir">
                  {t("cart.full.cart")}
                </h2>
                <div className="basket-notification pull-dir ">
                  <span className="persian-num">{product_items?.length}</span>
                </div>
              </div>
            </div>
          )}
          <div className="basket-list">
            {product_items?.map((product_item) => {
              if (product_item?.is_sold) {
                return (
                  <CartItemDisable
                    removeProduct={removeSingleProduct}
                    singleProduct={product_item}
                  />
                );
              }
              return (
                <CartItem
                  removeProduct={removeSingleProduct}
                  singleProduct={product_item}
                />
              );
            })}
          </div>

          <div className="clearfix"></div>
          <div className="row">
            <div
              className={classnames("", {
                "col-md-4 col-md-offset-8": GetLanguage() === "fa-IR",
                "col-md-5 col-md-offset-7": GetLanguage() === "en-US",
              })}
            >
              {product_items?.length > 0 && (
                <div className="basket-total">
                  <div className="basket-price">
                    <div className="clearfix"></div>
                    <div className="price-row d-flex">
                      <div className="col-xs-5 text-dir">
                        {t("cart.full.total_price")}
                      </div>
                      <div className="col-xs-7">
                        <div className="basket-pricestyle pull-dir-rev">
                          <span className="persian-num">
                            {totalPrice
                              ?.toString()
                              ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </span>
                          <span>{t("cart.full.price_unit")}</span>
                        </div>
                      </div>
                    </div>
                    <div className="price-row d-flex">
                      {i18n.language === "fa-IR" && totalPrice >= 1000000 && (
                        <div className="col-xs-5 text-dir">
                          {t("invoice.shipment_fee")}
                        </div>
                      )}
                      <div className="col-xs-7">
                        <span className="greencolor">
                          {i18n.language === "fa-IR"
                            ? totalPrice >= 1000000
                              ? "رایگان"
                              : t("cart.full.less_price_received_separately")
                            : ""}
                        </span>
                        <button
                          type="button"
                          className="btn btn-continue"
                          onClick={() => {
                            handleCheckoutCart();
                          }}
                        >
                          {t("cart.full.next")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <ArthibitionProperties />
        </div>
        {/* ------------- FULL STATE -------------- */}
      </div>

      <Footer />
    </>
  );
}

export default Cart;
