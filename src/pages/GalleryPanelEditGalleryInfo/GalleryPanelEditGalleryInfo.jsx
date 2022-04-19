import React, { useEffect, useState } from "react";
import { t } from "i18next";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";
import classnames from "classnames";
import { GetLanguage } from "../../utils/utils";
import TextArea from "antd/es/input/TextArea";
import { Form, Input, Button, Space, message, Modal } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import CoverUpload from "../../components/CoverUpload/CoverUpload";
import CoverUploadLogo from "../../components/CoverUploadLogo/CoverUploadLogo";
import DatePicker, { Calendar } from "react-datepicker2";
import apiServices from "../../utils/api.services";
import { GALLERY, GALLERY_LIST } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { useDispatch } from "react-redux";
import { editGalleryModeFunc } from "../../redux/reducers/Gallery/gallery.actions";

function GalleryPanelEditGalleryInfo() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [uploadListCover, setUploadListCover] = useState([]);
  const [uploadListLogo, setUploadListLogo] = useState([]);
  const [point, setPoint] = useState({});
  const [zoom, setZoom] = useState(11);
  const [showMap, setShowMap] = useState(false);

  const { gallery_id, editGalleryMode } = useSelector(
    (state) => state.galleryReducer
  );

  const Language = GetLanguage();
  const dispatch = useDispatch();

  useEffect(() => {
    if (gallery_id && editGalleryMode) {
      apiServices
        .get(GALLERY(gallery_id), "")
        .then((res) => {
          if (res.data) {
            const value = res.data.data;
            form.setFieldsValue({
              title_en: value.translations?.en?.title,
              title: value.translations?.fa?.title,
              city:
                Language === "fa-IR"
                  ? value?.locations[0]?.translations?.fa?.city
                  : value?.locations[0]?.translations?.en?.city,
              country:
                Language === "fa-IR"
                  ? value.locations[0]?.translations?.fa?.country
                  : value.locations[0]?.translations?.en?.country,
              description_en: value.translations?.en?.description,
              description: value.translations?.fa?.description,
              work_hours_en: value.translations?.en?.work_hours,
              work_hours: value.translations?.fa?.work_hours,
              address_en: value?.locations[0]?.translations?.en?.address,
              address: value?.locations[0]?.translations?.fa?.address,
              phone: value.phone,
            });
            setPoint(value.locations[0]?.point);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const onFinish = (values) => {
    if (uploadListCover?.length < 1) {
      // message.error();
      message.error({
        content: t("gallery-panel-edit-gallery-info.required-cover-image"),
        className: "custom-class",
        style: {
          marginTop: "20vh",
        },
      });
      return;
    }
    if (uploadListLogo?.length < 1) {
      message.error({
        content: t("gallery-panel-edit-gallery-info.required-logo-image"),
        className: "custom-class",
        style: {
          marginTop: "20vh",
        },
      });
      return;
    }
    let payload = {
      translations: {
        en: {
          title: values?.title_en,
          // "address": values?.address_en,
          // "city": Language === "fa-IR" ? null : values?.city,
          // "country": Language === "fa-IR" ? null : values?.country,
          work_hours: values?.work_hours_en,
          description: values?.description_en,
        },
        fa: {
          title: values?.title,
          // "address": values?.address,
          // "city": Language === "fa-IR" ? values?.city : null,
          // "country": Language === "fa-IR" ? values?.country : null,
          work_hours: values?.work_hours,
          description: values?.description,
        },
      },
      exhibition_history: values?.items,
      // "exhibition_num": values?.items?.exhibition_num,
      // "creation_date": values?.items?.creation_date,
      // "modified_date": values?.items?.modified_date,
      locations: [
        {
          translations: {
            en: {
              address: values?.address_en,
              city: Language === "fa-IR" ? null : values?.city,
              country: Language === "fa-IR" ? null : values?.country,
            },
            fa: {
              address: values?.address,
              city: Language === "fa-IR" ? values?.city : null,
              country: Language === "fa-IR" ? values?.country : null,
            },
          },
          // point,
        },
      ],
      phone: values?.phone,
      cover:
        uploadListCover && uploadListCover.length > 0
          ? uploadListCover[0]
          : undefined,
      logo:
        uploadListLogo && uploadListLogo.length > 0
          ? uploadListLogo[0]
          : undefined,
    };
    if (gallery_id && editGalleryMode) {
      apiServices
        .patch(GALLERY(gallery_id), payload)
        .then((res) => {
          if (res.data) {
            dispatch(editGalleryModeFunc(false));
            message.success({
              content: "اطلاعات شما با موفقیت ویرایش شد",
              style: {
                marginTop: "110px",
              },
            });
            navigate("/panel/profile");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      apiServices.post(GALLERY_LIST, payload).then((res) => {
        if (res.data) {
          message.success({
            content: t("gallery-panel-edit-gallery-info.successfully_sent"),
            style: {
              marginTop: "110px",
            },
          });
          navigate("/panel/profile");
        } else {
          message.error(res.response.data.message);
        }
      });
    }
  };
  return (
    <>
      <HeaderPanel t={t} />
      <Form className="" form={form} onFinish={onFinish}>
        <div className="panel-style container mx-auto px-0 w-100 bg-white ">
          <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 create-exhibition">
            <h3 className="info-title mrgt64 require text-dir">
              {t("gallery-panel-edit-gallery-info.upload_gallery_cover_photo")}
            </h3>
            <div class="upload-img-artwork">
              <CoverUpload
                uploadList={uploadListCover}
                setUploadList={setUploadListCover}
              />
              <h3 className="info-title mrgt64 require text-dir">
                {t("gallery-panel-edit-gallery-info.upload_gallery_logo_photo")}
              </h3>{" "}
              <CoverUploadLogo
                uploadList={uploadListLogo}
                setUploadList={setUploadListLogo}
              />
              <span class="require graycolor dir">
                {t("gallery-panel-edit-gallery-info.select_logo")}
              </span>
            </div>

            <div className="info-sec">
              <h3 className="info-title mrgt64 text-dir">
                {t("gallery-panel-edit-gallery-info.gallery_info")}
              </h3>
              <div className="row dir">
                <div
                  className={classnames("", {
                    "col-sm-6": GetLanguage() === "fa-IR",
                    "d-none": GetLanguage() === "en-US",
                  })}
                >
                  <div className="public-group">
                    <Form.Item
                      className="w-100 "
                      name="title"
                      rules={[
                        {
                          required: true,
                          message: t(
                            "gallery-panel-edit-gallery-info.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <Input
                        type="text"
                        id="info-201"
                        className="form-control input-public border-0 px-2  d-flex"
                        placeholder={t(
                          "gallery-panel-edit-gallery-info.gallery_name_fa"
                        )}
                      />
                    </Form.Item>
                  </div>
                </div>
                <div
                  className={classnames("", {
                    "col-sm-6": GetLanguage() === "fa-IR",
                    "col-sm-12": GetLanguage() === "en-US",
                  })}
                >
                  <div className="public-group en">
                    <Form.Item
                      className="w-100 "
                      name="title_en"
                      rules={[
                        {
                          required: true,
                          message: t(
                            "gallery-panel-edit-gallery-info.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <Input
                        type="text"
                        id="info-201"
                        className="form-control input-public border-0 px-2  d-flex"
                        placeholder={t(
                          "gallery-panel-edit-gallery-info.gallery_name_en"
                        )}
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className={"col-sm-6"}>
                  <div className="public-group">
                    <Form.Item
                      className="w-100 "
                      name="country"
                      rules={[
                        {
                          required: true,
                          message: t(
                            "gallery-panel-edit-gallery-info.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <Input
                        type="text"
                        id="info-201"
                        className="form-control input-public border-0 px-2  d-flex"
                        placeholder={t(
                          "gallery-panel-edit-gallery-info.country_name"
                        )}
                      />
                    </Form.Item>
                    {/* <input className="form-control input-public " required
                                            placeholder="" value="" />
                                        <label className="lable-public">{t("gallery-panel-edit-gallery-info.country_name")}</label> */}
                  </div>
                </div>
                <div className={"col-sm-6"}>
                  <div className="public-group en">
                    <Form.Item
                      className="w-100 "
                      name="city"
                      rules={[
                        {
                          required: true,
                          message: t(
                            "gallery-panel-edit-gallery-info.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <Input
                        type="text"
                        id="info-201"
                        className="form-control input-public border-0 px-2  d-flex"
                        placeholder={t(
                          "gallery-panel-edit-gallery-info.city_name"
                        )}
                      />
                    </Form.Item>
                    {/* <input className="form-control input-public en-lang " required
                                            placeholder=""
                                            value="" />
                                        <label className="lable-public en-lang">{t("gallery-panel-edit-gallery-info.city_name")}</label> */}
                  </div>
                </div>
                <div
                  className={classnames("", {
                    "col-sm-6": GetLanguage() === "fa-IR",
                    "d-none": GetLanguage() === "en-US",
                  })}
                >
                  <div className="form-group">
                    <Form.Item
                      className="w-100"
                      name="description"
                      rules={[
                        {
                          required: true,
                          message: t(
                            "gallery-panel-edit-gallery-info.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <TextArea
                        className="default-input"
                        placeholder={t(
                          "gallery-panel-edit-gallery-info.exhibition_contact_placeholder_fa"
                        )}
                        rows="8"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div
                  className={classnames("", {
                    "col-sm-6": GetLanguage() === "fa-IR",
                    "col w-100": GetLanguage() === "en-US",
                  })}
                >
                  <div className="form-group ">
                    <Form.Item
                      className="w-100"
                      name="description_en"
                      rules={[
                        {
                          required: true,
                          message: t(
                            "gallery-panel-edit-gallery-info.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <TextArea
                        className="default-input"
                        placeholder={t(
                          "gallery-panel-edit-gallery-info.exhibition_contact_placeholder_en"
                        )}
                        rows="8"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div
                  className={classnames("", {
                    "col-sm-6": GetLanguage() === "fa-IR",
                    "d-none": GetLanguage() === "en-US",
                  })}
                >
                  <div className="form-group">
                    <Form.Item
                      className="w-100"
                      name="work_hours"
                      rules={[
                        {
                          required: true,
                          message: t(
                            "gallery-panel-edit-gallery-info.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <TextArea
                        className="default-input"
                        placeholder={t(
                          "gallery-panel-edit-gallery-info.exhibition_time_work_placeholder_fa"
                        )}
                        rows="8"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div
                  className={classnames("", {
                    "col-sm-6": GetLanguage() === "fa-IR",
                    "col w-100": GetLanguage() === "en-US",
                  })}
                >
                  <div className="form-group ">
                    <Form.Item
                      className="w-100"
                      name="work_hours_en"
                      rules={[
                        {
                          required: true,
                          message: t(
                            "gallery-panel-edit-gallery-info.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <TextArea
                        className="default-input"
                        placeholder={t(
                          "gallery-panel-edit-gallery-info.exhibition_time_work_placeholder_en"
                        )}
                        rows="8"
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <h3 className="info-title mrgt64 text-dir">
                {t("gallery-panel-edit-gallery-info.address_contact_info")}
              </h3>
              <div class="row dir">
                <div className={"col-sm-9"}>
                  <div class="public-group ">
                    <Form.Item
                      className="w-100 "
                      name="address"
                      rules={[
                        {
                          required: true,
                          message: t(
                            "gallery-panel-edit-gallery-info.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <Input
                        type="text"
                        id="info-201"
                        className="form-control input-public border-0 px-2  d-flex"
                        placeholder={t(
                          "gallery-panel-edit-gallery-info.address_fa"
                        )}
                      />
                    </Form.Item>
                  </div>
                </div>
                <div class="col-sm-3">
                  <button
                    type="button"
                    class="btn-blue"
                    data-toggle="modal"
                    data-target="#show-map"
                    onClick={() => {
                      setShowMap(true);
                    }}
                  >
                    {t("gallery-panel-edit-gallery-info.select_on_map")}
                  </button>
                </div>
                <div class="clearfix"></div>
                <div
                  className={classnames("", {
                    "col-sm-12": GetLanguage() === "fa-IR",
                    "d-none": GetLanguage() === "en-US",
                  })}
                >
                  <div class="public-group en">
                    <Form.Item
                      className="w-100 "
                      name="address_en"
                      rules={[
                        {
                          required: true,
                          message: t(
                            "gallery-panel-edit-gallery-info.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <Input
                        type="text"
                        id="info-201"
                        className="form-control input-public border-0 px-2  d-flex"
                        placeholder={t(
                          "gallery-panel-edit-gallery-info.address_en"
                        )}
                      />
                    </Form.Item>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="public-group">
                    <Form.Item
                      className="w-100 "
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: t(
                            "gallery-panel-edit-gallery-info.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <Input
                        type="tel"
                        id="info-201"
                        className="form-control input-public border-0 px-2  d-flex"
                        placeholder={t(
                          "gallery-panel-edit-gallery-info.phone_number"
                        )}
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <h3 className="info-title mrgt64 text-dir">
                {t("gallery-panel-edit-gallery-info.exhibitions")}
              </h3>

              <div className="col-sm-12 pt-4">
                <Form.List name="items">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <Space
                          key={key}
                          style={{ display: "flex", marginBottom: 8 }}
                          align="baseline"
                        >
                          <div className="public-group">
                            <Form.Item
                              className="w-100"
                              {...restField}
                              name={[name, "exhibition_name"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing first name",
                                },
                              ]}
                            >
                              <Input
                                type="text"
                                id="info-207"
                                className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                placeholder={t(
                                  "gallery-panel-edit-gallery-info.exhibition_name"
                                )}
                              />
                            </Form.Item>
                          </div>

                          <div className="public-group">
                            <Form.Item
                              className="w-100"
                              {...restField}
                              name={[name, "creation_date"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing last name",
                                },
                              ]}
                            >
                              <DatePicker
                                className="form-control input-public border-0 px-4  d-flex"
                                placeholder={t(
                                  "gallery-panel-edit-gallery-info.from_date"
                                )}
                                timePicker={false}
                                isGregorian={false}
                                name="birth_date"
                                id="birth_date"
                              />
                            </Form.Item>
                          </div>
                          <div className="public-group">
                            <Form.Item
                              className="w-100"
                              {...restField}
                              name={[name, "modified_date"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing last name",
                                },
                              ]}
                            >
                              <DatePicker
                                className="form-control input-public border-0 px-4  d-flex"
                                placeholder={t(
                                  "gallery-panel-edit-gallery-info.to_date"
                                )}
                                timePicker={false}
                                isGregorian={false}
                                name="birth_date"
                                id="birth_date"
                              />
                            </Form.Item>
                          </div>
                          <MinusCircleOutlined onClick={() => remove(name)} />
                        </Space>
                      ))}
                      <Form.Item>
                        <Button
                          onClick={() => add()}
                          shape="circle"
                          type="primary"
                          className="btn-blue add-row pull-left"
                          icon={<PlusOutlined />}
                        />
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </div>
            </div>

            <br />
            <div className="adv-btn">
              <button
                htmlType="submit"
                className="btn-black center-block"
                style={{ width: "400px" }}
              >
                {t("gallery-panel-edit-gallery-info.btn_confirm_info")}
              </button>
            </div>
            {GetLanguage() === "fa-IR" ? (
              <p class="aligncenter">
                در صورتی که میخواهید گالری خود را حذف نمایید{" "}
                <a href="#" class="bluestyle">
                  اینجا
                </a>{" "}
                کلیک نمایید
              </p>
            ) : (
              <p class="aligncenter">
                To delete the gallery click
                <a href="#" class="bluestyle">
                  here
                </a>
              </p>
            )}
          </div>
        </div>
      </Form>
      <BasketFooterPanel />
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
              onClick={(e) => {
                e.preventDefault();
                setShowMap(false);
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="modal-body">
            <Map
              center={
                point?.latitude && point?.longitude
                  ? [point?.latitude, point?.longitude]
                  : ["35.690655", "51.380518"]
              }
              zoom={zoom}
              onzoomend={(e) => setZoom(e.target._zoom)}
              style={{ width: "100%", height: "500px" }}
              onclick={(e) => {
                setPoint({ latitude: e.latlng.lat, longitude: e.latlng.lng });
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

          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-black"
              onClick={(e) => {
                e.preventDefault();
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

export default GalleryPanelEditGalleryInfo;
