import React, { useState } from "react";
import classnames from "classnames";
import { GetLanguage, Token } from "../../utils/utils";
import { t } from "i18next";
import artwork1 from "../../assets/img/artworks/artwork-1.jpg";
import artwork2 from "../../assets/img/mainpage/rdbewaopdm840.jpg";
import { isNil } from "lodash";
import { useTranslation } from "react-i18next";
import { Input, message } from "antd";
import axios from "axios";
import { APPLY_DISCOUNT, COMPLETE_ORDER } from "../../utils";
import apiServices from "../../utils/api.services";
import { useNavigate } from "react-router-dom";

function PayStep({ next, prev, order }) {
  const navigate = useNavigate();
  const [voucher_code, setvoucherCode] = useState();
  const [payment_method, setPaymentMethod] = useState("online");
  const { t, i18n } = useTranslation();
  const price = (
    i18n.language === "fa-IR"
      ? order.total_order_toman
      : order.total_order_dollar
  )
    ?.toString()
    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const discount = (
    i18n.language === "fa-IR"
      ? order?.toman_discount_value
      : order?.dollar_discount_value
  )
    ?.toString()
    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const paymentPrice = (
    i18n.language === "fa-IR"
      ? order.total_order_toman - order?.toman_discount_value
      : order.total_order_dollar - order?.dollar_discount_value
  )
    ?.toString()
    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const applyVoucherCode = () => {
    if (voucher_code?.length < 1) return;
    let token = Token() ? "Bearer " + Token() : undefined;

    const tempHeader = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    };
    axios
      .put(
        APPLY_DISCOUNT(order.id),
        { voucher_code },
        {
          headers: tempHeader,
        }
      )
      .then((res) => {
        if (res?.data?.code === 200) {
          const successText =
            i18n.language === "fa-IR"
              ? "کد تخفیف با موفقیت اعمال شد"
              : "Discount code applied successfully";
          message.success(successText);
        }
      })
      .catch((res) => {
        if (res.response?.status === 400) {
          message.error(res.response?.data?.message);
        }
      });
  };
  const handleNextClick = () => {
    apiServices
      .post(COMPLETE_ORDER(order?.id), { payment_method })
      .then((res) => {
        if (res?.data?.code === 200) {
          navigate("/panel/success-payment");
        }
        if (res.response?.status === 400) {
          message.error(res.response?.data?.message);

          navigate("/panel/unsuccess-payment");
        }
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        navigate("/panel/unsuccess-payment");
      });
  };
  return (
    <>
      <div className="public-header">
        <div className="row dir">
          <div className="col-xs-7">
            <h2 className="default-title pull-dir">
              {t("payment.pay_step.title")}
            </h2>
          </div>
          <div className="col-xs-1"></div>
          <div className="col-xs-4 dir-rtl">
            <button
              type="button"
              className="btn-back pull-dir-rev"
              onClick={() => {
                prev();
              }}
            >
              <i className="glyphicon glyphicon-chevron-right"></i>
              <span>
                {t("payment.pay_step.back_btn")}
                <span className="hidden-xs">
                  {t("payment.pay_step.prev_step")}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="basket-list address">
        <div className="row dir">
          {/* ------------------ NO ADDRESS STATE ---------------------- */}
          {/* <div className="col-md-8 col-sm-6">
                        <div className=" no-address">
                            <img src={no_address} width="570" height="188" alt="" className="img-responsive" />
                            <span className="notice">{t("payment.address_step.no_address_message")}</span>
                            <button type="button" className="btn btn-default" data-toggle="modal" data-target="#exampleModal">
                                {t("payment.address_step.new_address_btn")}
                            </button>
                        </div>
                    </div> */}
          {/* ------------------ NO ADDRESS STATE ---------------------- */}

          {/* ------------------ WITH ADDRESS STATE ---------------------- */}
          {/* <div className="col-md-7">
                        <label className="container-radio text-dir">تهران، خیابان ولیعصر، بالاتر از پارک ساعی، پلاک ۱۰، زنگ ۱۰
                            <input type="radio" checked name="radio" />
                            <span className="checkmark-radio"></span>
                            <a href="#" className="edit-address">
                                <img src={edit_name} width="32" height="32" className="pull-dir-rev" alt="" />
                            </a>
                        </label>
                        <label className="container-radio text-dir">تهران، خیابان ولیعصر، پایین‌تر از پارک وی، کوچه مهناز، ساختمان شماره ۸
                            <input type="radio" name="radio" />
                            <span className="checkmark-radio"></span>
                            <a href="#" className="edit-address">
                                <img src={edit_name} width="32" height="32" className="pull-dir-rev" alt="" />
                            </a>
                        </label>
                    </div>

                    <div className="col-md-1 hidden-sm"></div> */}
          {/* ------------------ WITH ADDRESS STATE ---------------------- */}

          <div className="col-md-7 text-dir">
            <label className="container-radio">
              {t("payment.pay_step.online")}
              <input
                type="radio"
                checked="checked"
                name="radio"
                onChange={() => setPaymentMethod("online")}
              />
              <span className="checkmark-radio"></span>
            </label>
            <label className="container-radio">
              {t("payment.pay_step.cash")}
              <input
                type="radio"
                name="radio"
                onChange={() => setPaymentMethod("cash")}
              />
              <span className="checkmark-radio"></span>
            </label>
            <div className="basket-story">
              <h3 className="table-title">
                {t("payment.pay_step.order_summery")}
              </h3>
              <table className="table basket-story-table">
                <thead>
                  <tr>
                    <th>{t("payment.pay_step.num")}</th>
                    <th>{t("payment.pay_step.image")}</th>
                    <th>{t("payment.pay_step.owner")}</th>
                    <th>{t("payment.pay_step.code")}</th>
                    <th>{t("payment.pay_step.size")}</th>
                  </tr>
                </thead>
                <tbody>
                  {order?.order_items?.map((item, index) => {
                    const { product } = item?.product_item;
                    const {
                      owner,
                      medias,
                      unique_code,

                      length,
                      width,
                      height,
                    } = product;
                    let imgSrc = "";
                    if (medias?.length > 0) {
                      imgSrc = medias?.find(
                        (media) => media?.is_default
                      )?.exact_url;
                      if (isNil(imgSrc)) {
                        imgSrc = !isNil(medias[0]?.exact_url)
                          ? medias[0]?.exact_url
                          : "";
                      }
                    }

                    let lanIndex = "";
                    if (i18n.language === "fa-IR") {
                      lanIndex = "fa";
                    } else {
                      lanIndex = "en";
                    }
                    let ownerName = `${owner?.translations?.[lanIndex]?.first_name} ${owner?.translations?.[lanIndex]?.last_name}`;
                    ownerName = ownerName.replace(/null/g, "");
                    ownerName = ownerName.replace(/undefined/g, "");
                    return (
                      <tr key={index}>
                        <td className="persian-num">{index + 1}</td>
                        <td>
                          <img
                            src={imgSrc}
                            width="1776"
                            height="1776"
                            alt=""
                            className="img-responsive"
                            style={{ width: "50px" }}
                          />
                        </td>
                        <td>{ownerName}</td>
                        <td className="persian-num">{unique_code}</td>
                        <td>
                          <span className="persian-num">{length}</span>
                          {!isNil(length) && (
                            <span>{t("payment.pay_step.x")}</span>
                          )}
                          <span className="persian-num">{width}</span>
                          {!isNil(width) && (
                            <span>{t("payment.pay_step.x")}</span>
                          )}
                          <span className="persian-num">{height}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-1 hidden-sm"></div>

          <div className="col-md-4">
            <div className="basket-total mrg0">
              <div className="basket-price">
                <div className="price-row d-flex">
                  <div className="col text-dir text-dir">
                    {t("invoice.price")}
                    <span className="asar">(2 {t("invoice.artworks")})</span>
                  </div>
                  <div className="col-xs-7">
                    <div className="basket-pricestyle pull-dir-rev">
                      <span className="persian-num">{price}</span>
                      <span>{t("invoice.price_unit")}</span>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="price-row off d-flex">
                  <div className="col-xs-5 text-dir">
                    {t("invoice.discount")}
                  </div>
                  <div className="col-xs-7">
                    <div className="basket-pricestyle pull-dir-rev">
                      <span className="persian-num">{discount}</span>
                      <span>{t("invoice.price_unit")}</span>
                    </div>
                  </div>
                </div>
                <div className="price-row d-flex">
                  <div className="col-xs-5 text-dir">
                    {t("invoice.shipment_fee")}
                  </div>
                  <div className="col-xs-7">
                    <div className="basket-pricestyle pull-dir-rev">
                      <span className="greencolor">{t("invoice.free")}</span>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div
                  className="price-row total d-flex"
                  style={{ paddingTop: "16px", borderTop: "2px solid #e4e6e9" }}
                >
                  <div className="col-xs-5 text-dir">
                    {t("invoice.total_price")}
                  </div>
                  <div className="col-xs-7">
                    <div className="basket-pricestyle pull-dir-rev">
                      <span className="persian-num">{paymentPrice}</span>
                      <span>{t("invoice.price_unit")}</span>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="offstyle text-dir">
                    <span className="">
                      {t("payment.pay_step.click_discount_code")}
                    </span>
                    <div className="nl-input row mrg0">
                      <input
                        placeholder={t("payment.pay_step.enter_code")}
                        style={{ width: "70%" }}
                        value={voucher_code}
                        onChange={(e) => {
                          if (e.target.value.length > 8) return;
                          setvoucherCode(e.target.value);
                        }}
                      />
                      <button
                        type="button"
                        style={{
                          width: "30%",
                          border: "1px solid #141414",
                          backgroundColor: "white",
                        }}
                        onClick={applyVoucherCode}
                      >
                        {t("payment.pay_step.submit_code")}
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-continue "
                    onClick={handleNextClick}
                  >
                    {t("payment.pay_step.pay_btn")}
                  </button>
                  <span>{t("payment.pay_step.saman_bank")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PayStep;
