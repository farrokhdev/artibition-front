import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { GetLanguage } from "../../utils/utils";
import { t } from "i18next";
import no_address from "../../assets/img/no_address@3x.png";
import edit_name from "../../assets/img/edit_name.svg";
import edit_name_blue from "../../assets/img/edit_name_blue.svg";
import { message, Modal } from "antd";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import { ostan, shahr } from "iran-cities-json";

import "../../assets/style/leaflet.scss";
import apiServices from "../../utils/api.services";
import { ADDRESSES, COMPLETE_ORDER } from "../../utils";
import { useTranslation } from "react-i18next";
import { isNil } from "lodash";

function AddressStep({ next, prev, order }) {
  const [showAddress, setShowAddress] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [point, setPoint] = useState({});
  const { t, i18n } = useTranslation();
  const [zoom, setZoom] = useState(11);
  const [addresses, setAddresses] = useState();
  const [editAddressId, setEditAddressId] = useState();
  const [selectedOstan, setSelectedOstan] = useState();
  const [selectedAddress, setSelectedAddress] = useState();
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

  const getData = () => {
    apiServices
      .get(ADDRESSES)
      .then((res) => {
        if (res?.data?.code === 200) {
          setAddresses(res?.data?.data?.results);
        }
      })
      .catch((err) => {
        console.log(err);
        message.error("دریافت آدرس با خطا مواجه شد.");
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const editAddress = (id) => {
    setEditAddressId(id);
    setShowAddress(true);
  };
  const postAddress = (addr) => {
    let translations = {};
    i18n.language === "fa-IR"
      ? (translations.fa = {
          address: addr.address,
          city: addr.city,
          state: addr.state,
        })
      : (translations.en = {
          address: addr.address,
          city: addr.city,
          state: addr.state,
        });
    let tempPayload = {
      postal_code: addr.postal_code,
      translations,
    };
    if (!isNil(point)) tempPayload = { ...tempPayload, point };
    console.log("postAddress --------- tempPayload", tempPayload);
    apiServices
      .post(ADDRESSES, tempPayload)
      .then((res) => getData())
      .catch((err) => console.log(err?.response?.data?.message));
  };
  const submitFormAddress = (e) => {
    e.preventDefault();

    const city = shahr.find(
      (item) => item.id === parseInt(e.target.city.value)
    )?.name;

    const state = ostan.find(
      (item) => item.id === parseInt(e.target.state.value)
    )?.name;

    postAddress({
      address: e.target.address.value,
      state,
      city,
      postal_code: e.target.postal_code.value,
    });
    setShowAddress(false);
    e.target.reset();
  };
  const goNextStep = () => {
    apiServices
      .patch(COMPLETE_ORDER(order?.id), { location: selectedAddress })
      .then((res) => next())
      .catch((err) => console.log(err?.response?.data?.message));
  };
  return (
    <>
      <div className="public-header">
        <div className="row dir">
          <div className="col-xs-7">
            <h2 className="default-title pull-dir">
              {t("payment.address_step.title")}
            </h2>
            {addresses?.length > 0 && (
              <button
                type="button"
                className="btn btn-default pull-dir-rev new-address"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={() => {
                  setShowAddress(true);
                }}
              >
                <span className="glyphicon glyphicon-plus visible-xs"></span>
                <span className="hidden-xs">
                  {t("payment.address_step.new_address_btn")}
                </span>
              </button>
            )}
          </div>
          <div className="col-xs-1"></div>
          <div className="col-xs-4 dir-rtl">
            <button
              type="button"
              className="btn-back pull-dir-rev"
              onClick={() => {}}
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
          {/* ------------------ NO ADDRESS STATE ---------------------- */}
          <div className="col-md-8 col-sm-6">
            {addresses?.length < 1 && (
              <div className=" no-address">
                <img
                  src={no_address}
                  width="570"
                  height="188"
                  alt=""
                  className="img-responsive"
                />
                <span className="notice">
                  {t("payment.address_step.no_address_message")}
                </span>
                <button
                  type="button"
                  className="btn btn-default"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => {
                    setShowAddress(true);
                  }}
                >
                  {t("payment.address_step.new_address_btn")}
                </button>
              </div>
            )}
          </div>
          {/* ------------------ NO ADDRESS STATE ---------------------- */}

          {/* ------------------ WITH ADDRESS STATE ---------------------- */}
          {addresses?.length > 0 && (
            <div className="col-md-7">
              {addresses?.map((item) => {
                let index = "";
                if (i18n.language === "fa-IR") {
                  index = "fa";
                } else {
                  index = "en";
                }
                const { translations } = item;
                const textAddress = `${translations[index]?.state} ${translations[index]?.city} ${translations[index]?.address}`;
                // const{city,state, address}=item
                return (
                  <label className="container-radio text-dir">
                    {textAddress}
                    <input
                      type="radio"
                      name="address"
                      // value={item.id}
                      onChange={() => setSelectedAddress(item?.id)}
                    />
                    <span className="checkmark-radio"></span>
                    <a
                      onClick={() => {
                        editAddress(item?.id);
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
                );
              })}
            </div>
          )}

          {/* <div className="col-md-1 hidden-sm"></div> */}
          {/* ------------------ WITH ADDRESS STATE ---------------------- */}
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
      {/* ----------------------------- modal address ------------------------------- */}
      <Modal visible={showAddress} width={800} footer={[]}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {t("payment.address_step.modal.title")}
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
              <div className="row-addaddress">
                <div>
                  <h3 className="addressform-title text-dir">
                    {t("payment.address_step.modal.address_info")}
                  </h3>
                </div>
              </div>
              <form
                className="row dir"
                onSubmit={submitFormAddress}
                initialValues={{ address: "test" }}
              >
                <div className="col-sm-6">
                  <div className="public-group">
                    <select
                      name="state"
                      className="input-public"
                      required
                      onChange={(e) => {
                        setSelectedOstan(parseInt(e.target.value));
                      }}
                    >
                      <option></option>
                      {ostan?.map((item) => {
                        return (
                          <option value={item.id} key={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                    <label className="lable-public">
                      {t("payment.address_step.modal.province")}
                    </label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="public-group">
                    <select className="input-public" name="city">
                      <option></option>

                      {!isNil(selectedOstan) &&
                        shahr
                          .filter((city) => city.ostan === selectedOstan)
                          ?.map((item) => {
                            return (
                              <option value={item.id} key={item.id}>
                                {item.name}
                              </option>
                            );
                          })}
                    </select>
                    <label className="lable-public">
                      {t("payment.address_step.modal.city")}
                    </label>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="public-group">
                    <input
                      className="form-control input-public "
                      required
                      name="address"
                    />
                    <label className="lable-public">
                      {t("payment.address_step.modal.address")}
                    </label>
                  </div>
                </div>
                {/* <div className="col-sm-4">
                  <div className="public-group">
                    <input className="form-control input-public " required />
                    <label className="lable-public">
                      {t("payment.address_step.modal.no.")}
                    </label>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="public-group">
                    <input className="form-control input-public " required />
                    <label className="lable-public">
                      {t("payment.address_step.modal.unit")}
                    </label>
                  </div>
                </div> */}
                <div className="col-sm-4">
                  <div className="public-group">
                    <input
                      className="form-control input-public "
                      required
                      name="postal_code"
                    />
                    <label className="lable-public">
                      {t("payment.address_step.modal.postal_code")}
                    </label>
                    <span className="input-help text-dir">
                      {t("payment.address_step.modal.postal_code_description")}
                    </span>
                  </div>
                </div>
                <div className="w-100 row justify-content-center">
                  <button
                    type="button"
                    className="btn-back-blue"
                    onClick={() => {
                      setShowMap(true);
                    }}
                  >
                    <img
                      src={edit_name_blue}
                      width="32"
                      height="32"
                      alt=""
                      className="pull-right"
                    />
                    <span>
                      {t("payment.address_step.modal.select_address_map")}
                    </span>
                  </button>
                </div>
                <div className="w-100 row justify-content-center">
                  <input
                    type="submit"
                    className="btn btn-black"
                    value={t("payment.address_step.modal.confirm_btn")}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
      {/* --------------------- modal map --------------------------------- */}
      <Modal visible={showMap} width={800} footer={[]}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {t("payment.address_step.modal.title")}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setShowMap(false);
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="modal-body">
            <Map
              center={["35.690655", "51.380518"]}
              zoom={zoom}
              onzoomend={(e) => setZoom(e.target._zoom)}
              style={{ width: "100%", height: "500px" }}
              onclick={(e) => {
                setPoint({ latitude: e.latlng.lat, longitude: e.latlng.lng });
              }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // attribution="<a href=http://biithome.com>biit.home.com</a>"
              />

              <Marker
                position={
                  point?.latitude && point?.longitude
                    ? [point?.latitude, point?.longitude]
                    : ["", ""]
                }
              >
                {/* <Popup>موقعیت خانه حراجی</Popup> */}
              </Marker>
            </Map>
          </div>

          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-black"
              onClick={() => {
                setShowMap(false);
              }}
            >
              {t("payment.address_step.modal.confirm_btn")}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AddressStep;
