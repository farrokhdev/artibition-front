import React, { useState, useEffect } from "react";
import { t } from "i18next";
import { message, Modal } from "antd";
import close_icon from "../../assets/img/clear.svg";
import { Form, Input, Checkbox } from "antd";
import { ADDRESSES, EDIT_ADDRESSES } from "../../utils";
import apiServices from "../../utils/api.services";
import { Map, TileLayer, Marker } from "react-leaflet";
import { GetLanguage } from "../../utils/utils";
import { useSelector, useDispatch } from "react-redux";
import { editingLocation as EditingLocationsActions } from "../../redux/reducers/auth/auth.actions";

function ModalAddAddress({
  setVisibleAddAddress,
  visibleAddAddress,
  locations,
  getItems,
}) {
  const [form] = Form.useForm();
  const dispach = useDispatch();
  const { editingLocation } = useSelector((state) => state.authReducer);
  const [zoom, setZoom] = useState(11);
  const [point, setPoint] = useState({});
  const Language = GetLanguage();

  // console.log("editingLocationss===> ", editingLocation);

  const handleClose = () => {
    setVisibleAddAddress(false);
    dispach(EditingLocationsActions({}));
  };

  const onFinish = (values) => {
    let payload = {
      translations: {
        fa: {
          address: Language === "fa-IR" ? values?.address : null,
          city: Language === "fa-IR" ? values?.city : null,
          country: Language === "fa-IR" ? values?.country : null,
          state: Language === "fa-IR" ? values?.state : null,
        },
        en: {
          address: Language === "fa-IR" ? null : values?.address,
          city: Language === "fa-IR" ? null : values?.city,
          country: Language === "fa-IR" ? null : values?.country,
          state: Language === "fa-IR" ? null : values?.state,
        },
      },
      is_default: values?.is_default,
      point: point,
      postal_code: values?.postal_code,
    };
    if (editingLocation?.id) {
      apiServices
        .patch(EDIT_ADDRESSES(editingLocation?.id), payload)
        .then((res) => {
          if (res.data) {
            handleClose();
            message.success({
              content: "اطلاعات با موفقیت ویرایش شد",
              style: { marginTop: "10vh" },
            });
            getItems();
          }
        });
    } else {
      apiServices.post(ADDRESSES, payload).then((res) => {
        if (res.data) {
          setVisibleAddAddress(false);
          message.success({
            content: "اطلاعات با موفقیت ثبت شد",
            style: { marginTop: "10vh" },
          });
          getItems();
        } else {
          // console.log(res.response)
          message.error({
            content: "خطا در ثبت اطلاعات",
            style: { marginTop: "10vh" },
          });
        }
      });
    }
  };

  useEffect(() => {
    if (editingLocation?.id) {
      // console.log("editingLocation?.city", editingLocation?.translations?.fa?.city)
      form.setFieldsValue({
        city: editingLocation?.translations?.fa?.city,
        address: editingLocation?.translations?.fa?.address,
        country: editingLocation?.translations?.fa?.country,
        state: editingLocation?.translations?.fa?.state,
        postal_code: editingLocation?.postal_code,
        point: {
          latitude: editingLocation?.porint?.latitude,
          longitude: editingLocation?.porint?.longitude,
        },
      });
      // console.log(form.getFieldValue("address"));
    }
  }, [editingLocation]);

  return (
    <React.Fragment>
      <Modal
        centered
        className=" mt-5 pt-5"
        visible={visibleAddAddress}
        onOk={handleClose}
        onCancel={handleClose}
        width={600}
        footer={[]}
      >
        <Form form={form} onFinish={onFinish}>
          <div class="modal-content mt-5">
            <div class="modal-header">
              {editingLocation?.id ? (
                <h5 class="modal-title mx-auto" id="exampleModalLabel">
                  ویرایش آدرس{" "}
                </h5>
              ) : (
                <h5 class="modal-title mx-auto" id="exampleModalLabel">
                  افزودن آدرس جدید
                </h5>
              )}
              <span onClick={handleClose} aria-hidden="true" aria-label="Close">
                <img
                  className="btn-close-modal"
                  src={close_icon}
                  alt="close-icon"
                />
              </span>
            </div>
            <div class="modal-body">
              <div class="enter-address">
                <div class="row-addaddress">
                  <div class="col-xs-12">
                    <h3 class="addressform-title text-right">اطلاعات آدرس</h3>
                  </div>
                </div>
                <div class="col-sm-6">
                  <Form.Item
                    className="public-group flex-start"
                    name="state"
                    rules={[
                      {
                        required: true,
                        message: "تکمیل این فیلد ضروری می باشد",
                      },
                    ]}
                  >
                    <Input
                      className="form-control input-public "
                      placeholder="استان"
                    />
                  </Form.Item>
                </div>
                <div class="col-sm-6">
                  <Form.Item
                    className="public-group flex-start"
                    name="country"
                    rules={[
                      {
                        required: true,
                        message: "تکمیل این فیلد ضروری می باشد",
                      },
                    ]}
                  >
                    <Input
                      className="form-control input-public "
                      placeholder="کشور"
                    />
                  </Form.Item>
                </div>

                <div class="col-sm-6">
                  <Form.Item
                    className="public-group flex-start"
                    name="postal_code"
                    rules={[
                      {
                        pattern: /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/,
                        message: " کدپستی صحیح وارد کنید",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      className="form-control input-public "
                      placeholder="کد پستی"
                    />

                    {/* <span class="input-help">کد پستی می‌بایست ۱۰ رقم و بدون خط تیره باشد</span> */}
                  </Form.Item>
                </div>

                <div class="col-sm-6">
                  <Form.Item
                    className="public-group flex-start"
                    name="city"
                    rules={[
                      {
                        required: true,
                        message: "تکمیل این فیلد ضروری می باشد",
                      },
                    ]}
                  >
                    <Input
                      className="form-control input-public "
                      placeholder="شهر"
                    />
                  </Form.Item>
                </div>

                <div class="col-sm-12">
                  <Form.Item
                    className="public-group flex-start"
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: "تکمیل این فیلد ضروری می باشد",
                      },
                    ]}
                  >
                    <Input
                      className="form-control input-public "
                      placeholder="آدرس"
                    />
                  </Form.Item>
                </div>

                <div class="col-sm-24">
                  <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir">
                    <Form.Item
                      name="is_default"
                      valuePropName="checked"
                      noStyle
                    >
                      <Checkbox type="checkbox" class="checkmark"></Checkbox>
                    </Form.Item>
                    <span className="px-3">آدرس پیش فرض</span>
                  </label>
                </div>
              </div>
              <div className="modal-body">
                <Map
                  center={["35.690655", "51.380518"]}
                  zoom={zoom}
                  onzoomend={(e) => setZoom(e.target._zoom)}
                  style={{ width: "100%", height: "500px" }}
                  onclick={(e) => {
                    setPoint({
                      latitude: e.latlng.lat,
                      longitude: e.latlng.lng,
                    });
                  }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                  <Marker
                    position={
                      point?.latitude && point?.longitude
                        ? [point?.latitude, point?.longitude]
                        : ["", ""]
                    }
                  ></Marker>
                </Map>
              </div>
            </div>
            <div class="modal-footer">
              <button htmlType="submit" class="btn btn-black">
                ثبت و تأیید آدرس
              </button>
            </div>
          </div>
        </Form>
      </Modal>
    </React.Fragment>
  );
}

export default ModalAddAddress;
