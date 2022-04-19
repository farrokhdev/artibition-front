import React, { useEffect, useState } from "react";
import i18next, { t } from "i18next";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";
import classnames from "classnames";
import { GetLanguage } from "../../utils/utils";

import {
  Form,
  Input,
  Modal,
  Select,
  Button,
  Checkbox,
  message,
  TimePicker,
} from "antd";
import { Map, TileLayer, Marker } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import "../../assets/style/leaflet.scss";
import apiServices from "../../utils/api.services";
import { CORE_CATEGORIS, EXHIBITION_INFO, GALLERY_ARTISTS } from "../../utils";
import { exhibitionForm } from "../../redux/reducers/Exhibition/exhibition.action";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker2";
import moment from "jalali-moment";
import queryString from "query-string";
import ExhibitionUploadPoster from "../../components/ExhibitionUploadPoster/ExhibitionUploadPoster";
import { getTranslation } from "../../utils/fetchTranslation";

const { Option } = Select;
const { TextArea } = Input;

function GalleryPanelCreateExhibition() {
  const [showMap, setShowMap] = useState(false);
  const [point, setPoint] = useState({});
  const [zoom, setZoom] = useState(11);
  const [artistsOption, setArtistOption] = useState([]);
  const [posters, setPosters] = useState([]);
  const [categories, setCategories] = useState([]);
  const [nameEn, setNameEn] = useState("");
  const applyTranslation = async (name, fn) => {
    if (name?.length < 1) return;
    const tempFirstNameEn = await getTranslation(name);
    fn(tempFirstNameEn);
  };
  const [categoryDefaultValue, setCategoryDefaultValue] = useState([]);
  const [params, setParams] = useState({
    page_size: 9999999,
  });
  const [categoryParams, setCategoryParams] = useState({
    usage: "exhibition",
  });
  const [exhibitionType, setExhibitionType] = useState(undefined);
  const dispatch = useDispatch();
  const { gallery_id } = useSelector((state) => state.galleryReducer);
  const { exhibitionId } = useSelector((state) => state.exhibitionReducer);
  const { editExhibitionMode } = useSelector(
    (state) => state.exhibitionReducer
  );
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (form) => {
    if (editExhibitionMode || posters.length > 0) {
      if (form.type) {
        if (form.category && form.category.length > 0) {
          const payload = {
            translations: {
              en: {
                name: nameEn,
                statement: form.statement_en,
                activity_time: form.activity_time_en,
              },
              fa: {
                name:
                  i18next.language === "fa-IR" ? form.exhibition_name_fa : "",
                statement:
                  i18next.language === "fa-IR" ? form.statement_fa : "",
                activity_time:
                  i18next.language === "fa-IR" ? form.activity_time_fa : "",
              },
            },
            type: form.type,
            category: form.category,
            product_status: "sale",
            // "virtual_start_date": form.virtual_start_date ? `${form.virtual_start_date?.format("YYYY-MM-DD")}${form.virtual_start_time?.toISOString().slice(10)}` : null,
            // "virtual_end_date": form.virtual_end_date ? `${form.virtual_end_date?.format("YYYY-MM-DD")}${form.virtual_end_time?.toISOString().slice(10)}` : null,
            // "real_start_date": form.real_start_date ? `${form.real_start_date?.format("YYYY-MM-DD")}${form.real_start_time?.toISOString().slice(10)}` : null,
            // "real_end_date": form.real_end_date ? `${form.real_end_date?.format("YYYY-MM-DD")}${form.real_end_time?.toISOString().slice(10)}` : null,
            virtual_start_date: form.virtual_start_date
              ? form.virtual_start_date
                  ?.set({
                    hour: form.virtual_start_time?.get("hour"),
                    minute: form.virtual_start_time?.get("minute"),
                    second: 0,
                    millisecond: 0,
                  })
                  .toISOString()
              : null,

            virtual_end_date: form.virtual_end_date
              ? form.virtual_end_date
                  ?.set({
                    hour: form.virtual_end_time?.get("hour"),
                    minute: form.virtual_end_time?.get("minute"),
                    second: 0,
                    millisecond: 0,
                  })
                  .toISOString()
              : null,

            real_start_date: form.real_start_date
              ? form.real_start_date
                  ?.set({
                    hour: form.real_start_time?.get("hour"),
                    minute: form.real_start_time?.get("minute"),
                    second: 0,
                    millisecond: 0,
                  })
                  .toISOString()
              : null,

            real_end_date: form.real_end_date
              ? form.real_end_date
                  ?.set({
                    hour: form.real_end_time?.get("hour"),
                    minute: form.real_end_time?.get("minute"),
                    second: 0,
                    millisecond: 0,
                  })
                  .toISOString()
              : null,

            address: [
              {
                // "point": point?.latitude ? point : null,
                translations: {
                  fa: {
                    address:
                      i18next.language === "fa-IR" ? form.address_fa : "",
                    city: "",
                    state: "",
                    country: "",
                  },
                  en: {
                    address: form.address_en,
                    city: "",
                    state: "",
                    country: "",
                  },
                },
                postal_code: "",
                is_default: true,
              },
            ],
            phone: form.phone,
            artist: form.artists,
            poster: posters,
            product: [],
          };
          if (form?.type === "virtual") {
          } else if (form?.type === "real") {
            payload.address[0]["point"] = point;
          } else if (form?.type === "virtual_real") {
            payload.address[0]["point"] = point;
          }
          dispatch(exhibitionForm(payload));
          navigate("/panel/upload-exhibition-artwotk");
        } else {
          message.error({
            content: "حداقل باید یک رشته هنری انتخاب کنید",
            style: { marginTop: "110px" },
          });
        }
      } else {
        message.error({
          content: "لطفا نوع نمایشگاه خود را انتخاب کنید",
          style: { marginTop: "110px" },
        });
      }
    } else {
      message.error({
        content: "لطفا پوستر نمایشگاه خود را آپلود کنید",
        style: { marginTop: "110px" },
      });
    }
  };
  const getExhibitionCategories = () => {
    apiServices
      .get(CORE_CATEGORIS, queryString.stringify(categoryParams))
      .then((res) => {
        if (res.data) {
          const temp = res?.data?.data?.results?.map((element) => ({
            label:
              i18next.language === "fa-IR"
                ? element.translations?.fa?.title
                : element.translations?.fa?.title,
            value: element.id,
          }));

          setCategories(temp);
        } else {
        }
        message.error(res?.response?.data?.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const setFormFieldsValue = (value) => {
    setPoint(value.address?.find((e) => e.is_default === true)?.point);
    setExhibitionType(value.type);
    const tempCategory = [];
    value.category.map((item) => {
      tempCategory.push(item?.id);
    });
    setNameEn(value.translations?.en?.name);
    form.setFieldsValue({
      exhibition_name_fa: value.translations?.fa?.name,
      exhibition_name_en: value.translations?.en?.name,
      type: value.type,
      virtual_start_time: moment
        .utc(value.start_date.virtual_start_date)
        .local(),
      real_start_time: moment.utc(value.start_date.real_start_date).local(),
      virtual_end_time: moment.utc(value.end_date.virtual_end_date).local(),
      real_end_time: moment.utc(value.end_date.real_end_date).local(),
      virtual_start_date: moment
        .utc(value.start_date.virtual_start_date)
        .local(),
      real_start_date: moment.utc(value.start_date.real_start_date).local(),
      virtual_end_date: moment.utc(value.end_date.virtual_end_date).local(),
      real_end_date: moment.utc(value.end_date.real_end_date).local(),
      activity_time_en: value.translations?.en?.activity_time,
      activity_time_fa: value.translations?.fa?.activity_time,
      statement_en: value.translations?.en?.statement,
      statement_fa: value.translations?.fa?.statement,
      address_fa: value.address?.find((e) => e.is_default === true)
        ?.translations?.fa?.address,
      address_en: value.address?.find((e) => e.is_default === true)
        ?.translations?.en?.address,
      phone: value.phone,
      artists: value.artist,
      category: tempCategory,
    });
  };
  const getExhibitionInfo = () => {
    apiServices
      .get(EXHIBITION_INFO(gallery_id, exhibitionId), "")
      .then((res) => {
        if (res.data) {
          const value = res.data.data;
          setFormFieldsValue(value);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getGalleryArtists = () => {
    apiServices
      .get(GALLERY_ARTISTS(gallery_id), queryString.stringify(params))
      .then((res) => {
        if (res.data) {
          const options = res?.data?.data?.results?.map((artist) => ({
            label: `${artist?.owner?.translations?.fa?.first_name} ${artist?.owner?.translations?.fa?.last_name} | ${artist?.owner?.translations?.en?.first_name} ${artist?.owner?.translations?.en?.last_name}`,
            value: artist.id,
          }));

          setArtistOption(options);
        } else {
          message.error(res?.response?.data?.message);
        }
      });
  };
  useEffect(() => {
    getExhibitionCategories();
    getGalleryArtists();
    if (editExhibitionMode && gallery_id) {
      getExhibitionInfo();
    }
  }, []);

  return (
    <>
      <HeaderPanel t={t} />
      <div className="panel-style container mx-auto px-0 w-100 bg-white ">
        <h2 className="default-title aligncenter mt-3">
          {t("gallery-panel-create-exhibition.title")}
        </h2>
        <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 create-exhibition">
          <Form onFinish={onFinish} form={form}>
            <h3 className="info-title mrgt64 require text-dir">
              {t("gallery-panel-create-exhibition.upload_poster.title")}
            </h3>
            <p className="mrgb20 text-dir">
              {t("gallery-panel-create-exhibition.upload_poster.description")}
            </p>
            {/* <MultipleUpload uploadList={posters} setUploadList={setPosters} defaultName={"عکس اصلی"} /> */}
            <ExhibitionUploadPoster
              uploadList={posters}
              setUploadList={setPosters}
              defaultName={"عکس اصلی"}
            />
            <div className="info-sec">
              <h3 className="info-title mrgt64 text-dir">
                {t("gallery-panel-create-exhibition.exhibition_info")}
              </h3>
              <div className="row">
                <div
                  className={classnames("", {
                    "col-sm-6": GetLanguage() === "fa-IR",
                    "d-none": GetLanguage() === "en-US",
                  })}
                >
                  <div className="public-group">
                    <Form.Item
                      name={"exhibition_name_fa"}
                      rules={[
                        {
                          required: i18next.language === "fa-IR" ? true : false,
                          message: t(
                            "gallery-panel-create-exhibition.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <Input
                        className="form-control input-public "
                        //   required={i18next.language === "fa-IR" ? true : false}
                        placeholder={t(
                          "gallery-panel-create-exhibition.exhibition_name_fa"
                        )}
                        rules={[
                          {
                            required: true,
                            message: t(
                              "gallery-panel-edit-gallery-info.please-fill-out-this-field"
                            ),
                          },
                        ]}
                        onChange={async (e) => {
                          applyTranslation(e.target.value, setNameEn);
                        }}
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
                  <div className="public-group en">
                    <Form.Item
                      //   name={"exhibition_name_en"}
                      rules={[
                        {
                          required: true,
                          message: t(
                            "gallery-panel-create-exhibition.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <Input
                        className="form-control input-public en-lang "
                        required
                        onInput={(e) => e.target.setCustomValidity("")}
                        onInvalid={(e) =>
                          e.target.setCustomValidity(
                            t(
                              "content-panel-add-artwork.please-fill-out-this-field"
                            )
                          )
                        }
                        value={nameEn}
                        onChange={(e) => setNameEn(e.target.value)}
                        placeholder={t(
                          "gallery-panel-create-exhibition.exhibition_name_en"
                        )}
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="public-group">
                    <Form.Item name={"type"}>
                      <Select
                        required
                        className="form-control input-public dir"
                        id="info-203"
                        placeholder={t(
                          "gallery-panel-create-exhibition.exhibition_type"
                        )}
                        value={exhibitionType}
                        onChange={(value) => {
                          setExhibitionType(value);
                        }}
                      >
                        <Option value={"virtual_real"}>
                          {t(
                            "gallery-panel-create-exhibition.local_online_exhibition"
                          )}
                        </Option>
                        <Option value={"real"}>
                          {t(
                            "gallery-panel-create-exhibition.local_exhibition"
                          )}
                        </Option>
                        <Option value={"virtual"}>
                          {t(
                            "gallery-panel-create-exhibition.online_exhibition"
                          )}
                        </Option>
                      </Select>
                    </Form.Item>
                  </div>
                  {/* --------------- date field --------------- */}
                  {exhibitionType !== "real" ? (
                    <>
                      <div className="col-sm-3">
                        <div className="public-group">
                          <Form.Item
                            name={"virtual_start_date"}
                            rules={[
                              {
                                required: true,
                                message: t(
                                  "gallery-panel-create-exhibition.please-fill-out-this-field"
                                ),
                              },
                            ]}
                          >
                            {/* <Input className="form-control input-public persian-num" required placeholder={t("gallery-panel-create-exhibition.online_start")} /> */}
                            <DatePicker
                              className="form-control input-public border-0 px-4  d-flex required"
                              placeholder="تاریخ شروع مجازی"
                              timePicker={false}
                              isGregorian={false}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="public-group">
                          <Form.Item
                            name={"virtual_end_date"}
                            rules={[
                              {
                                required: true,
                                message: t(
                                  "gallery-panel-create-exhibition.please-fill-out-this-field"
                                ),
                              },
                            ]}
                          >
                            {/* <Input className="form-control input-public persian-num" required placeholder={t("gallery-panel-create-exhibition.online_end")} /> */}
                            <DatePicker
                              className="form-control input-public border-0 px-4  d-flex required"
                              placeholder="تاریخ پایان مجازی"
                              timePicker={false}
                              isGregorian={false}
                            />
                          </Form.Item>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {exhibitionType !== "virtual" ? (
                    <>
                      <div className="col-sm-3">
                        <div className="public-group">
                          <Form.Item
                            name={"real_start_date"}
                            rules={[
                              {
                                required: true,
                                message: t(
                                  "gallery-panel-create-exhibition.please-fill-out-this-field"
                                ),
                              },
                            ]}
                          >
                            {/* <Input className="form-control input-public persian-num" required placeholder={t("gallery-panel-create-exhibition.local_start")} /> */}
                            <DatePicker
                              className="form-control input-public border-0 px-4  d-flex required"
                              placeholder="تاریخ شروع حضوری"
                              timePicker={false}
                              isGregorian={false}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="public-group">
                          <Form.Item
                            name={"real_end_date"}
                            rules={[
                              {
                                required: true,
                                message: t(
                                  "gallery-panel-create-exhibition.please-fill-out-this-field"
                                ),
                              },
                            ]}
                          >
                            {/* <Input className="form-control input-public persian-num" required placeholder={t("gallery-panel-create-exhibition.local_end")} /> */}
                            <DatePicker
                              className="form-control input-public border-0 px-4  d-flex required"
                              placeholder="تاریخ پایان حضوری"
                              timePicker={false}
                              isGregorian={false}
                            />
                          </Form.Item>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {/* --------------- date field --------------- */}
                  {/* --------------- time field --------------- */}
                  {exhibitionType !== "real" ? (
                    <>
                      <div className="col-sm-3">
                        <div className="public-group">
                          <Form.Item
                            name={"virtual_start_time"}
                            rules={[
                              {
                                required: true,
                                message: t(
                                  "gallery-panel-create-exhibition.please-fill-out-this-field"
                                ),
                              },
                            ]}
                          >
                            {/* <Input className="form-control input-public persian-num" required placeholder={t("gallery-panel-create-exhibition.online_start")} /> */}
                            <TimePicker
                              className="form-control input-public border-0 px-4  d-flex required padding-0"
                              placeholder="ساعت شروع مجازی"
                              format={"HH:mm"}
                              onChange={(r) => {
                                console.log(
                                  `2022-10-09${r.toISOString().slice(10)}`
                                );
                              }}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="public-group">
                          <Form.Item
                            name={"virtual_end_time"}
                            rules={[
                              {
                                required: true,
                                message: t(
                                  "gallery-panel-create-exhibition.please-fill-out-this-field"
                                ),
                              },
                            ]}
                          >
                            {/* <Input className="form-control input-public persian-num" required placeholder={t("gallery-panel-create-exhibition.online_end")} /> */}
                            <TimePicker
                              className="form-control input-public border-0 px-4  d-flex required padding-0"
                              placeholder="ساعت پایان مجازی"
                              format={"HH:mm"}
                            />
                          </Form.Item>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {exhibitionType !== "virtual" ? (
                    <>
                      <div className="col-sm-3">
                        <div className="public-group">
                          <Form.Item
                            name={"real_start_time"}
                            rules={[
                              {
                                required: true,
                                message: t(
                                  "gallery-panel-create-exhibition.please-fill-out-this-field"
                                ),
                              },
                            ]}
                          >
                            {/* <Input className="form-control input-public persian-num" required placeholder={t("gallery-panel-create-exhibition.local_start")} /> */}
                            <TimePicker
                              className="form-control input-public border-0 px-4  d-flex required padding-0"
                              placeholder="ساعت شروع حضوری"
                              format={"HH:mm"}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="public-group">
                          <Form.Item
                            name={"real_end_time"}
                            rules={[
                              {
                                required: true,
                                message: t(
                                  "gallery-panel-create-exhibition.please-fill-out-this-field"
                                ),
                              },
                            ]}
                          >
                            {/* <Input className="form-control input-public persian-num" required placeholder={t("gallery-panel-create-exhibition.local_end")} /> */}
                            <TimePicker
                              className="form-control input-public border-0 px-4  d-flex required padding-0"
                              placeholder="ساعت پایان حضوری"
                              format={"HH:mm"}
                            />
                          </Form.Item>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {/* --------------- time field --------------- */}
                </div>
              </div>
              <h3 className="info-title mrgt64 text-dir">
                {t("gallery-panel-create-exhibition.art_categories")}
              </h3>
              <div className="row">
                <div className="col-sm-12 col-xs-6 text-dir">
                  <Form.Item
                    name={"category"}
                    className="exhibitionFormCategory"
                  >
                    <Checkbox.Group
                      required
                      options={categories}
                      // defaultValue={categoryDefaultValue}
                      // defaultValue={["2"]}
                    />
                  </Form.Item>
                </div>
              </div>
              <h3 className="info-title mrgt64 text-dir">
                {t("gallery-panel-create-exhibition.artists")}
              </h3>
              <div className="row dir">
                <div className={"col-sm-12"}>
                  <div className="public-group">
                    <Form.Item name={"artists"}>
                      <Select
                        mode="multiple"
                        className="form-control input-public"
                        style={{ height: "100%" }}
                        options={artistsOption}
                        placeholder={t(
                          "gallery-panel-create-exhibition.enter_artist_name"
                        )}
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <h3 className="info-title mrgt64 text-dir">
                {t("gallery-panel-create-exhibition.notice_visiting_hours")}
              </h3>
              <div className="row dir">
                <div
                  className={classnames("", {
                    "col-sm-6": GetLanguage() === "fa-IR",
                    "d-none": GetLanguage() === "en-US",
                  })}
                >
                  <div className="form-group">
                    <Form.Item
                      name={"statement_fa"}
                      rules={[
                        {
                          required: i18next.language === "fa-IR",
                          message: t(
                            "gallery-panel-create-exhibition.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <TextArea
                        dir="rtl"
                        id="info-213"
                        className="form-control "
                        placeholder={t(
                          "gallery-panel-create-exhibition.exhibition_contact_placeholder_fa"
                        )}
                        rows="8"
                      ></TextArea>
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
                      name={"statement_en"}
                      rules={[
                        {
                          required: true,
                          message: t(
                            "gallery-panel-create-exhibition.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <TextArea
                        dir="ltr"
                        className="form-control"
                        placeholder={t(
                          "gallery-panel-create-exhibition.exhibition_contact_placeholder_en"
                        )}
                        rows="8"
                      ></TextArea>
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
                      name={"activity_time_fa"}
                      rules={[
                        {
                          required: i18next.language === "fa-IR",
                          message: t(
                            "gallery-panel-create-exhibition.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <TextArea
                        dir="rtl"
                        id="info-213"
                        className="form-control "
                        placeholder={t(
                          "gallery-panel-create-exhibition.exhibition_time_work_placeholder_fa"
                        )}
                        rows="6"
                      ></TextArea>
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
                      name={"activity_time_en"}
                      rules={[
                        {
                          required: true,
                          message: t(
                            "gallery-panel-create-exhibition.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <TextArea
                        dir="ltr"
                        className="form-control"
                        placeholder={t(
                          "gallery-panel-create-exhibition.exhibition_time_work_placeholder_en"
                        )}
                        rows="6"
                      ></TextArea>
                    </Form.Item>
                  </div>
                </div>
              </div>
              <h3 className="info-title mrgt64 text-dir">
                {t("gallery-panel-create-exhibition.address_contact_info")}
              </h3>
              <div className="row dir">
                {exhibitionType !== "virtual" ? (
                  <>
                    <div
                      className={classnames("", {
                        "col-sm-9": i18next.language === "fa-IR",
                        "d-none": i18next.language === "en-US",
                      })}
                    >
                      <div className="public-group ">
                        <Form.Item
                          name={"address_fa"}
                          rules={[
                            {
                              required: i18next.language === "fa-IR",
                              message: t(
                                "gallery-panel-create-exhibition.please-fill-out-this-field"
                              ),
                            },
                          ]}
                        >
                          <Input
                            className="form-control input-public "
                            placeholder={t(
                              "gallery-panel-create-exhibition.address_fa"
                            )}
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <button
                        type="button"
                        className="btn-blue"
                        data-toggle="modal"
                        data-target="#show-map"
                        onClick={() => {
                          setShowMap(true);
                        }}
                      >
                        {t("gallery-panel-create-exhibition.select_on_map")}
                      </button>
                    </div>
                    <div className="clearfix"></div>
                    <div
                      className={classnames("", {
                        "col-sm-12": i18next.language === "fa-IR",
                        "col-sm-9": i18next.language === "en-US",
                      })}
                    >
                      <div className="public-group en">
                        <Form.Item
                          name={"address_en"}
                          rules={[
                            {
                              required: true,
                              message: t(
                                "gallery-panel-create-exhibition.please-fill-out-this-field"
                              ),
                            },
                          ]}
                        >
                          <Input
                            className="form-control input-public en-lang "
                            placeholder={t(
                              "gallery-panel-create-exhibition.address_en"
                            )}
                          />
                        </Form.Item>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <div className="col-sm-6">
                  <div className="public-group">
                    <Form.Item
                      name={"phone"}
                      rules={[
                        {
                          required: true,
                          message: t(
                            "gallery-panel-create-exhibition.please-fill-out-this-field"
                          ),
                        },
                      ]}
                    >
                      <Input
                        type={"tel"}
                        className="form-control input-public  persian-num"
                        placeholder={t(
                          "gallery-panel-create-exhibition.phone_number"
                        )}
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="adv-btn">
              <Button
                htmlType="submit"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {t("gallery-panel-create-exhibition.btn_confirm_next")}
              </Button>
            </div>
          </Form>
        </div>
      </div>
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
              onClick={() => {
                setShowMap(false);
              }}
            >
              {t("payment.address_step.modal.confirm_btn")}
            </button>
          </div>
        </div>
      </Modal>
      <BasketFooterPanel />
    </>
  );
}

export default GalleryPanelCreateExhibition;
