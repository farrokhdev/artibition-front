import React, { useEffect, useState } from "react";

import no_address from "../../assets/img/no_address@3x.png";
import edit_name from "../../assets/img/edit_name.svg";
import { message, Modal } from "antd";

import "../../assets/style/leaflet.scss";
import apiServices from "../../utils/api.services";
import { ORDER } from "../../utils";
import { useTranslation } from "react-i18next";
import { isNil } from "lodash";
const initialRecieverInfo = {
  name: "",
  national_code: "",
  mobile: "",
};
const ReceiverStep = ({ next, prev, order }) => {
  const [showAddress, setShowAddress] = useState(false);

  const { t, i18n } = useTranslation();

  const [receiverInfo, setReceiverInfo] = useState();
  const [self_received, setSelf_received] = useState(false);
  const [receiverText, setReceiverText] = useState();
  const [foreign, setForeign] = useState(false);
  useEffect(() => {
    if (self_received) {
      setReceiverInfo(initialRecieverInfo);
      setForeign(false);
    }
  }, [self_received]);
  useEffect(() => {
    if (foreign) setReceiverInfo({ ...receiverInfo, national_code: "" });
  }, [foreign]);
  console.log("useEffect --------- foreign", foreign);
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
  const handleAddReceiver = () => {
    if (!self_received) {
      if (isNil(receiverInfo)) {
        message.error(
          t("payment.address_step.modal.enter_recipient_information")
        );
        return;
      }
      if (receiverInfo?.name?.length < 1) {
        message.error(t("payment.address_step.modal.enter_the_recipient_name"));
        setShowAddress(true);
        return;
      }
      if (isNil(receiverInfo?.mobile) || receiverInfo?.mobile?.length < 1) {
        message.error(t("payment.address_step.modal.enter_the_mobile_number"));
        return;
      }
      if (
        !foreign &&
        (isNil(receiverInfo?.national_code) ||
          receiverInfo?.national_code?.length < 1)
      ) {
        message.error(t("payment.address_step.modal.enter_the_national_code"));
        return;
      }
    }
    setReceiverText(
      self_received
        ? t("payment.address_step.modal.receiver_checkbox")
        : `${receiverInfo?.name} ${receiverInfo?.mobile}`
    );
    setShowAddress(false);
  };
  const paymentPrice = (
    i18n.language === "fa-IR"
      ? order.total_order_toman - order?.toman_discount_value
      : order.total_order_dollar - order?.dollar_discount_value
  )
    ?.toString()
    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {}, []);
  const editReceiver = () => {
    setShowAddress(true);
  };

  const submitFormAddReciever = (e) => {
    e.preventDefault();

    setShowAddress(false);
  };
  const goNextStep = () => {
    if (
      !self_received &&
      (receiverInfo?.name.length < 1 || receiverInfo?.mobile.length < 1)
    ) {
      return;
    }
    if (!self_received && !foreign && receiverInfo?.national_code.length < 1) {
      return;
    }

    let tempReceiverInfo = {};
    if (self_received) {
      tempReceiverInfo = { self_received };
    } else {
      tempReceiverInfo = {
        mobile: receiverInfo?.mobile,
        national_code: receiverInfo?.national_code,
      };
      let fullname_fa, fullname_en;
      if (i18n.language === "fa-IR") {
        fullname_fa = receiverInfo?.name;
        tempReceiverInfo = {
          ...tempReceiverInfo,
          fullname_fa,
        };
      } else {
        fullname_en = receiverInfo?.name;
        tempReceiverInfo = { ...tempReceiverInfo, fullname_en };
      }
    }
    console.log("goNextStep --------- tempReceiverInfo", tempReceiverInfo);
    apiServices
      .patch(ORDER(order?.id), {
        receiver_info: tempReceiverInfo,
        self_received,
      })
      .then((res) => next())
      .catch((err) => console.log(err?.response?.data?.message));
  };
  console.log(receiverInfo, isNil(receiverInfo));
  let index = "";
  if (i18n.language === "fa-IR") {
    index = "fa";
  } else {
    index = "en";
  }
  console.log("receiverText", receiverText);
  return (
    <>
      <div className="public-header">
        <div className="row dir">
          <div className="col-xs-7">
            <h2 className="default-title pull-dir">
              {t("payment.address_step.modal.receiver_information")}
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
                {t("payment.address_step.back_btn")}
                <span className="hidden-xs">
                  {t("payment.address_step.prev_step")}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="basket-list address">
        <div className="row dir">
          {/* ------------------ NO Receiver STATE ---------------------- */}
          <div className="col-md-8 col-sm-6">
            {isNil(receiverInfo) && (
              <div className=" no-address">
                <img
                  src={no_address}
                  width="570"
                  height="188"
                  alt=""
                  className="img-responsive"
                />
                <button
                  type="button"
                  className="btn btn-default"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => {
                    console.log("click me");
                    setShowAddress(true);
                  }}
                >
                  {t("payment.address_step.modal.receiver_select")}
                </button>
              </div>
            )}
          </div>

          {/* ------------------ WITH receiver STATE ---------------------- */}
          {!isNil(receiverInfo) && (
            <div className="col-md-7">
              <label className="container-radio text-dir">
                {receiverText}
                <a
                  onClick={() => {
                    editReceiver();
                  }}
                  className="edit-address"
                >
                  <img
                    src={edit_name}
                    width="32"
                    height="32"
                    className="pull-dir-rev"
                    alt=""
                  />
                </a>
              </label>
            </div>
          )}

          {/* ------------------------- basket ---------------------------------- */}
          <div className={"col-md-4 col-sm-6"}>
            <div className="basket-total mrgt0">
              <div className="basket-price">
                <div className="price-row d-flex">
                  <div className="col text-dir text-dir">
                    {t("invoice.price")}
                    <span className="asar">
                      ({order?.order_items?.length} {t("invoice.artworks")})
                    </span>
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
                  <button
                    type="button"
                    className="btn btn-continue"
                    onClick={() => {
                      goNextStep();
                    }}
                  >
                    {t("invoice.next_btn")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------- modal receiver ------------------------------- */}
      <Modal visible={showAddress} width={800} footer={[]}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {t("payment.address_step.modal.receiver_information")}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setShowAddress(false);
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="modal-body">
            <div className="enter-address">
              <div className="row-addaddress"></div>
              <form className="row dir">
                <div className="col-sm-6">
                  <div className="public-group">
                    <input
                      className="form-control input-public "
                      value={receiverInfo?.name}
                      onChange={(e) =>
                        setReceiverInfo({
                          ...receiverInfo,
                          name: e.target.value,
                        })
                      }
                    />
                    <label className="lable-public">
                      {t("payment.address_step.modal.receiver_fullname")}
                    </label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="public-group">
                    <input
                      type="number"
                      className="form-control input-public "
                      value={receiverInfo?.mobile}
                      onChange={(e) =>
                        setReceiverInfo({
                          ...receiverInfo,
                          mobile: e.target.value,
                        })
                      }
                    />
                    <label className="lable-public">
                      {t("payment.address_step.modal.phone_number")}
                    </label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="public-group">
                    <input
                      type="number"
                      className="form-control input-public "
                      value={receiverInfo?.national_code}
                      onChange={(e) =>
                        setReceiverInfo({
                          ...receiverInfo,
                          national_code: e.target.value,
                        })
                      }
                    />
                    <label className="lable-public">
                      {t("payment.address_step.modal.national_code")}
                    </label>
                    <span className="input-help">
                      {t(
                        "payment.address_step.modal.national_code_description"
                      )}
                    </span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <label className="lable-checkbox public-group text-dir">
                    <input
                      type="checkbox"
                      checked={foreign}
                      onChange={() => setForeign(!foreign)}
                    />
                    <span>
                      {t("payment.address_step.modal.foreign_checkbox")}
                    </span>
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="col-sm-12 text-dir">
                  <label className="lable-checkbox public-group">
                    <input
                      type="checkbox"
                      value={self_received}
                      onChange={() => setSelf_received(!self_received)}
                    />
                    <span>
                      {t("payment.address_step.modal.receiver_checkbox")}
                    </span>
                    <span className="checkmark"></span>
                  </label>
                </div>

                <div className="w-100 row justify-content-center">
                  <input
                    // type="submit"
                    className="btn btn-black"
                    value={t(
                      "filter-header.size.dimention.select-custom-size.submit"
                    )}
                    onClick={handleAddReceiver}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ReceiverStep;
