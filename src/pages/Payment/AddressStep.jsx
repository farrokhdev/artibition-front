import React, { useEffect, useState } from "react";
import no_address from "../../assets/img/no_address@3x.png";
import edit_name from "../../assets/img/edit_name.svg";
import { message, Modal } from "antd";
import { ostan, shahr } from "iran-cities-json";
import "../../assets/style/leaflet.scss";
import apiServices from "../../utils/api.services";
import { ADDRESSES, ADDRESSES_EDIT, ORDER } from "../../utils";
import { useTranslation } from "react-i18next";
import { isNil } from "lodash";
import AddressModal from "./AddressModal";
import MapModal from "./MapModal";

const initialFormFields = {
  id: 0,
  name: "",
  address: "",
  postal_code: "",
  city: 394,
  state: 8,
};
function AddressStep({ next, prev, order }) {
  const [showAddress, setShowAddress] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [point, setPoint] = useState({});
  console.log(
    "🚀 ~ file: AddressStep.jsx ~ line 26 ~ AddressStep ~ point",
    point
  );
  const { t, i18n } = useTranslation();
  const [addresses, setAddresses] = useState();
  const [isEditAddress, setIsEditAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState();
  const [formFields, setFormFields] = useState(initialFormFields);
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
    setIsEditAddress(true);
    const tempSelectedAddress = addresses.find((item) => item.id === id);

    setPoint(tempSelectedAddress.point);
    const tempState = ostan.find(
      (item) => item.name === tempSelectedAddress?.translations?.fa?.state
    )?.id;
    const tempCity = shahr.find(
      (item) => item.name === tempSelectedAddress?.translations?.fa?.city
    )?.id;
    setFormFields({
      id: tempSelectedAddress?.id,
      postal_code: tempSelectedAddress.postal_code,
      state:
        i18n.language === "fa-IR"
          ? tempState
          : tempSelectedAddress?.translations?.en?.city,
      city:
        i18n.language === "fa-IR"
          ? tempCity
          : tempSelectedAddress?.translations?.en?.city,
      address:
        i18n.language === "fa-IR"
          ? tempSelectedAddress?.translations?.fa?.address
          : tempSelectedAddress?.translations?.en?.address,
    });
    setShowAddress(true);
  };
  const postAddress = () => {
    const { city, state, address, postal_code } = formFields;
    const tempCity = shahr.find((item) => item.id === parseInt(city))?.name;
    const tempState = ostan.find((item) => item.id === parseInt(state))?.name;
    let translations = {};
    i18n.language === "fa-IR"
      ? (translations.fa = {
          address,
          city: tempCity,
          state: tempState,
        })
      : (translations.en = {
          address,
          city: tempCity,
          state: tempState,
        });
    let tempPayload = {
      postal_code,
      translations,
    };
    if (!isNil(point)) tempPayload = { ...tempPayload, point };
    console.log("postAddress --------- tempPayload", tempPayload);
    if (isEditAddress) {
      apiServices
        .patch(ADDRESSES_EDIT(formFields?.id), tempPayload)
        .then((res) => {
          getData();
          setFormFields(initialFormFields);
          setIsEditAddress(false);
        });
    } else {
      apiServices
        .post(ADDRESSES, tempPayload)
        .then((res) => getData())
        .catch((err) => console.log(err?.response?.data?.message));
    }
  };
  const submitFormAddress = (e) => {
    e.preventDefault();
    if (isNil(formFields?.city)) {
      message.error("enter city");
      return;
    }
    postAddress();
    setShowAddress(false);
    e.target.reset();
  };
  const goNextStep = () => {
    if (isNil(selectedAddress)) {
      message.error(t("payment.address_step.address_select"));
      return;
    }
    apiServices
      .patch(ORDER(order?.id), { location: selectedAddress })
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
                    setIsEditAddress(false);

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
      <AddressModal
        showAddress={showAddress}
        setShowAddress={setShowAddress}
        submitFormAddress={submitFormAddress}
        formFields={formFields}
        setFormFields={setFormFields}
        setShowMap={setShowMap}
      />

      <MapModal
        showMap={showMap}
        setShowMap={setShowMap}
        point={point}
        setPoint={setPoint}
      />
    </>
  );
}

export default AddressStep;
