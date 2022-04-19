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
import flashLeft from "../../assets/img/felsh-left.png";
import apiServices from "../../utils/api.services";
import {
  CART_ME,
  CART_ME_CHECKOUT,
  CART_ME_CLEAR_CART,
  CART_ME_REMOVE_ITEM,
  GET_ORDERS,
  ORDER,
} from "../../utils";
import { useNavigate } from "react-router-dom";
import { isNil } from "lodash";
import axios from "axios";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { UPDATE_CART } from "../../redux/reducers/cart/cart.types";
function Cart() {
  const { t, i18n } = useTranslation();
  const [product_items, setProduct_items] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [pendingOrders, setPendingOrders] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getData = () => {
    apiServices
      .get(CART_ME, "")
      .then((res) => {
        if (res?.data?.data?.product_items?.length > 0) {
          const tempProductItems = res?.data?.data?.product_items.map(
            (product_item) => {
              const { discount } = product_item?.product;
              const { toman_price, dollar_price } = product_item;
              const price =
                i18n.language === "fa-IR" ? toman_price : dollar_price;

              let discountCash = 0;
              let paymentPrice = parseInt(price);
              let discountPercent = 0;
              if (!isNil(discount) && !isNil(discount?.value)) {
                if (discount?.type === "percentage") {
                  discountPercent = discount?.value;
                  discountCash =
                    (parseInt(price) * parseFloat(discountPercent)) / 100;
                  paymentPrice = price - discountCash;
                } else {
                  discountCash = parseInt(discount?.value);
                  discountPercent = (
                    (discountCash / parseInt(price)) *
                    100
                  ).toFixed(2);
                  paymentPrice = parseInt(price) - discountCash;
                }
              }

              return {
                ...product_item,
                discountCash,
                paymentPrice,
                price,
                discountPercent,
              };
            }
          );
          const totalPriceTemp = tempProductItems?.reduce((acc, item) => {
            if (item?.in_stock && !item?.is_sold) {
              return acc + parseInt(item.paymentPrice);
            } else return acc;
          }, 0);
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
  const getPendingOrders = async () => {
    let token = Token() ? "Bearer " + Token() : undefined;

    const tempHeader = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    };
    axios
      .get(GET_ORDERS, {
        headers: tempHeader,
        params: { status: "pending-payment" },
      })
      .then((res) => {
        if (res?.data?.code === 200) {
          if (res?.data?.data?.results?.length > 0) {
            const tempPendingOrders = res?.data?.data?.results?.map((item) => ({
              id: item.id,
              tracking_code: item.tracking_code,
            }));
            setPendingOrders(tempPendingOrders);
          }
        }
      });
  };
  useEffect(() => {
    getData();
    getPendingOrders();
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
          dispatch({
            type: UPDATE_CART,
            payload: res?.data?.data?.product_items?.length,
          });
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
              dispatch({
                type: UPDATE_CART,
                payload: 0,
              });
              navigate("/panel/payment", { state: { orderId } });
            });
        }
      })
      .catch((err) => {
        console.log(err);
        message.error(err?.response?.data?.message);
      });
  };
  return (
    <>
      <div className="container mx-auto px-0 w-100 bg-white">
        <Header />
        <Menu />
        {pendingOrders?.length > 0 && (
          <div className="container dir">
            <div className="emptystate">
              <h3 className="persian-num">
                {i18n.language === "fa-IR"
                  ? `شما ${pendingOrders?.length} سفارش دارید `
                  : `You
                have ${pendingOrders?.length} orders, click to complete`}
              </h3>

              {pendingOrders?.map((item, index) => {
                return (
                  <div className="d-flex box-dir-reverse box box-1">
                    <div className="text-dir">
                      <h2 className="greencolor persian-num">
                        {i18n.language === "fa-IR" ? "سفارش" : "order"}
                        {index + 1}
                      </h2>
                      <p>{t("cart.view-pay")}</p>
                    </div>
                    <div
                      className="btn-box-1 btn-green pull-left"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate("/panel/payment", {
                          state: { orderId: item.id },
                        })
                      }
                    >
                      <img
                        src={flashLeft}
                        width="16"
                        height="16"
                        className="center-block"
                        alt=""
                      />
                    </div>
                    <div className="clearfix"></div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
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
            <div>
              {product_items?.map((product_item) => {
                if (product_item?.is_sold || !product_item?.in_stock) {
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
                {!isNil(
                  product_items?.find((item) => item?.in_stock === true)
                ) &&
                  product_items?.length > 0 && (
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
                          {i18n.language === "fa-IR" &&
                            totalPrice >= 1000000 && (
                              <div className="col-xs-5 text-dir">
                                {t("invoice.shipment_fee")}
                              </div>
                            )}
                          <div className="col-xs-7">
                            <span className="greencolor">
                              {i18n.language === "fa-IR"
                                ? totalPrice >= 1000000
                                  ? "رایگان"
                                  : t(
                                      "cart.full.less_price_received_separately"
                                    )
                                : ""}
                            </span>
                          </div>
                        </div>

                        <div className="price-row d-flex">
                          <div className="col-xs-9">
                            <button
                              type="button"
                              className="btn btn-continue"
                              onClick={() => navigate("/site/artworks")}
                            >
                              {t("cart.full.next")}
                            </button>
                          </div>
                          <div className="col-xs-9">
                            <button
                              type="button"
                              className="btn btn-continue"
                              onClick={() => {
                                handleCheckoutCart();
                              }}
                            >
                              {t("cart.full.add_order")}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
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
