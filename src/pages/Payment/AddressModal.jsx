import React, { useState } from "react";
import { Modal, message } from "antd";
import { useTranslation } from "react-i18next";
import { isNil } from "lodash";
import { ostan, shahr } from "iran-cities-json";
import edit_name_blue from "../../assets/img/edit_name_blue.svg";

const AddressModal = ({
  showAddress,
  setShowAddress,
  submitFormAddress,
  formFields,
  setFormFields,
  setShowMap,
}) => {
  const [selectedOstan, setSelectedOstan] = useState(8);

  const { t } = useTranslation();

  return (
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
            <form className="row dir" onSubmit={submitFormAddress}>
              <div className="col-sm-6">
                <div className="public-group">
                  <select
                    name="state"
                    className="input-public"
                    required
                    // value={
                    //   ostan.find((item) => item.id === formFields.state)?.name
                    // }
                    value={formFields.state}
                    onChange={(e) => {
                      setFormFields({
                        ...formFields,
                        state: parseInt(e.target.value),
                        city: 0,
                      });
                      setSelectedOstan(parseInt(e.target.value));
                    }}
                    onInput={(e) => e.target.setCustomValidity("")}
                    onInvalid={(e) =>
                      e.target.setCustomValidity(
                        t("payment.address_step.modal.enter_the_state")
                      )
                    }
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
                  <select
                    className="input-public"
                    name="city"
                    value={formFields.city}
                    onChange={(e) => {
                      console.log("e.target.value", typeof e.target.value);
                      if (e.target.value.length < 1) {
                        message.error("select city");
                        return;
                      }
                      setFormFields({
                        ...formFields,
                        city: parseInt(e.target.value),
                      });
                    }}
                    onInput={(e) => e.target.setCustomValidity("")}
                    onInvalid={(e) =>
                      e.target.setCustomValidity(
                        t("payment.address_step.modal.enter_the_city")
                      )
                    }
                  >
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
                    value={formFields.address}
                    onChange={(e) => {
                      setFormFields({
                        ...formFields,
                        address: e.target.value,
                      });
                    }}
                    onInput={(e) => e.target.setCustomValidity("")}
                    onInvalid={(e) => {
                      console.log(
                        "🚀 ~ file: AddressStep.jsx ~ line 471 ~ ?.map ~ e",
                        e
                      );

                      e.target.setCustomValidity(
                        t("payment.address_step.modal.enter_the_address")
                      );
                    }}
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
                    type="number"
                    name="postal_code"
                    value={formFields.postal_code}
                    onChange={(e) => {
                      setFormFields({
                        ...formFields,
                        postal_code: e.target.value,
                      });
                    }}
                    onInput={(e) => e.target.setCustomValidity("")}
                    onInvalid={(e) => {
                      // console.log(e);
                      e.target.setCustomValidity(
                        t("payment.address_step.modal.enter_the_postal_code")
                      );
                    }}
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
  );
};

export default AddressModal;
