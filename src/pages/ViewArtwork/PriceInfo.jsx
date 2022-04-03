import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Switch,
  message,
  Button,
  Space,
  Spin,
} from "antd";
import change_icon from "../../assets/img/change.png";
import classnames from "classnames";
import { GetLanguage } from "../../utils/utils";
import i18next, { t } from "i18next";
import { useSelector, useDispatch } from "react-redux";
import apiServices from "../../utils/api.services";
import {
  ARTIST_BY_GALLERY,
  ARTWORK_BY_GALLERY,
  GALLERY_PRODUCTS,
  PRODUCTS,
} from "../../utils";
import { artworkForm } from "../../redux/reducers/Artwork/artwork.action";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import DatePicker, { Calendar } from "react-datepicker2";
import moment from "moment-jalaali";
import { isNil } from "lodash";
import { LoadingOutlined } from "@ant-design/icons";
const PriceInfo = ({ next, prev, data }) => {
  const Language = GetLanguage();
  console.log(
    "🚀 ~ file: GeneralInfo.jsx ~ line 9 ~ GeneralInfo ~ data",
    data,
    data?.items?.[0]?.edition_number === null
  );
  try {
    return (
      <>
        {console.log("test")}
        <Spin
          tip="لطفا شکیبا باشید"
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          spinning={isNil(data)}
        >
          <div className="enter-price">
            <h3 className="infotitle-default text-dir">
              {t("content-panel-add-artwork.sale_info")}
            </h3>

            <Form layout="vertical">
              {data?.view_only && (
                <div className="row">
                  <div className="col-sm-12">
                    <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir">
                      <Form.Item noStyle>
                        <Checkbox
                          type="checkbox"
                          checked={data?.view_only}
                        ></Checkbox>
                      </Form.Item>
                      <span className="mx-2">
                        {t("content-panel-add-artwork.display_only")}
                      </span>

                      <span className="input-help">
                        {t("content-panel-add-artwork.display_only_text")}
                      </span>
                    </label>
                  </div>
                </div>
              )}
              {!data?.view_only && (
                <>
                  {data?.items?.[0]?.edition_number === null && (
                    <div className="d-block d-sm-flex box-dir-reverse w-100">
                      <div
                        className={classnames("", {
                          "col-sm-6": Language === "fa-IR",
                          "d-none": Language === "en-US",
                        })}
                      >
                        <div className="public-group view-artwork">
                          <Form.Item
                            className="w-100"
                            label="قیمت اثر به تومان"
                          >
                            <Input
                              type="text"
                              id="info-215"
                              className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                              style={{
                                backgroundColor: "transparent",
                                color: "#787878",
                                fontSize: "16px",
                              }}
                              value={data?.items?.[0]?.base_toman_price}
                              disabled
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div
                        className={classnames("", {
                          "col-sm-6": Language === "fa-IR",
                          "col w-100": Language === "en-US",
                        })}
                      >
                        <div className="public-group view-artwork">
                          <Form.Item
                            className="w-100"
                            label="معادل قیمت به دلار"
                          >
                            <Input
                              type="text"
                              id="info-216"
                              className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                              style={{
                                backgroundColor: "transparent",
                                color: "#787878",
                                fontSize: "16px",
                              }}
                              value={data?.items?.[0]?.base_dollar_price}
                              disabled
                            />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
              <div className="row">
                <div className="col-sm-12">
                  {data?.items?.[0]?.edition_number !== null && (
                    <>
                      <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir pr-0">
                        <Form.Item
                          name="remember"
                          valuePropName="checked"
                          noStyle
                        >
                          <Checkbox
                            type="checkbox"
                            checked={data?.items?.[0]?.edition_number !== null}
                          ></Checkbox>
                        </Form.Item>
                        <span className="mx-2">
                          {t(
                            "content-panel-add-artwork.art_info.multi_edition"
                          )}
                        </span>
                      </label>
                      <div className="d-flex box-dir-reverse">
                        {data?.items?.[0]?.edition_number !== null && (
                          <div className="col-sm-12 pt-4">
                            {/* <Form.List name="items"> */}
                            {data?.items?.map((item, key) => (
                              <>
                                <Space
                                  key={key}
                                  style={{ display: "flex", marginBottom: 8 }}
                                  align="baseline"
                                >
                                  <div className="public-group view-artwork">
                                    <Form.Item
                                      className="w-100"
                                      label={t(
                                        "content-panel-add-artwork.edition"
                                      )}
                                    >
                                      <Input
                                        type="text"
                                        id="info-207"
                                        className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                        style={{
                                          backgroundColor: "transparent",
                                          color: "#787878",
                                          fontSize: "16px",
                                        }}
                                        value={item?.edition_number}
                                        disabled
                                      />
                                    </Form.Item>
                                  </div>

                                  <div className="public-group view-artwork">
                                    <Form.Item
                                      className="w-100"
                                      label={t(
                                        "content-panel-add-artwork.price_ir"
                                      )}
                                    >
                                      <Input
                                        type="text"
                                        id="info-201"
                                        className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                        style={{
                                          backgroundColor: "transparent",
                                          color: "#787878",
                                          fontSize: "16px",
                                        }}
                                        value={item?.base_toman_price}
                                        disabled
                                      />
                                    </Form.Item>
                                  </div>
                                  <div className="public-group view-artwork">
                                    <Form.Item
                                      className="w-100"
                                      label={t(
                                        "content-panel-add-artwork.edition_usd"
                                      )}
                                    >
                                      <Input
                                        type="text"
                                        id="info-207"
                                        className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                        style={{
                                          backgroundColor: "transparent",
                                          color: "#787878",
                                          fontSize: "16px",
                                        }}
                                        value={item?.base_dollar_price}
                                        disabled
                                      />
                                    </Form.Item>
                                  </div>
                                </Space>
                              </>
                            ))}
                            {/* </Form.List> */}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="row">
                <>
                  <div className="col-sm-12">
                    <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir pr-0">
                      <Form.Item>
                        <Checkbox
                          type="checkbox"
                          checked={data?.is_sold}
                        ></Checkbox>
                      </Form.Item>

                      <span className="mx-2">
                        {t("content-panel-add-artwork.artwork_sold")}
                      </span>
                    </label>
                  </div>

                  <div className="col-sm-12">
                    <label className="d-flex box-dir-reverse lable-checkbox public-group text-dir pr-0">
                      <Form.Item>
                        <Checkbox
                          type="checkbox"
                          checked={data?.can_bid}
                        ></Checkbox>
                      </Form.Item>
                      <span className="mx-2">
                        {t("content-panel-add-artwork.could_offer")}
                      </span>

                      <span className="input-help">
                        {t("content-panel-add-artwork.could_offer_text")}
                      </span>
                    </label>
                  </div>
                  <div className="col-sm-12">
                    <label className="lable-checkbox public-group text-dir pr-0  mt-5">
                      <Form.Item valuePropName="checked">
                        <Switch
                          type="checkbox"
                          checked={data?.discount?.value !== null}
                        ></Switch>
                      </Form.Item>

                      <span className="label-switchbtn">
                        {t("content-panel-add-artwork.discount_price")}
                      </span>
                    </label>
                  </div>
                </>

                {data?.discount?.value !== null && (
                  <div className="col-sm-12  ">
                    <div
                      className={classnames(
                        "d-flex  form-group public-group  view-artwork",
                        {
                          "justify-content-start": Language === "fa-IR",
                          "justify-content-end": Language === "en-US",
                        }
                      )}
                    >
                      <Form.Item
                        label={t("content-panel-add-artwork.discount_base")}
                      >
                        <Input
                          className="form-control"
                          id="sel1"
                          style={{
                            backgroundColor: "transparent",
                            color: "#787878",
                            fontSize: "16px",
                          }}
                          value={
                            data?.discount?.type === "percentage"
                              ? data?.discount?.value
                              : ""
                          }
                          disabled
                        ></Input>
                      </Form.Item>
                    </div>
                  </div>
                )}
              </div>
              {console.log("test")}

              {data?.discount?.value !== null && (
                <>
                  <div className="d-flex box-dir-reverse">
                    <div className="col-sm-6">
                      <div className="public-group">
                        <Form.Item
                          className="w-100"
                          label={t(
                            "content-panel-add-artwork.discount_percent_ir"
                          )}
                        >
                          <Input
                            type="text"
                            id="info-207"
                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                            style={{
                              backgroundColor: "transparent",
                              color: "#787878",
                              fontSize: "16px",
                            }}
                            value={
                              data?.discount?.type === "toman"
                                ? data?.discount?.value
                                : ""
                            }
                            disabled
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="public-group">
                        <Form.Item
                          className="w-100"
                          label={t(
                            "content-panel-add-artwork.discount_percent_usd"
                          )}
                        >
                          <Input
                            type="text"
                            id="info-207"
                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                            style={{
                              backgroundColor: "transparent",
                              color: "#787878",
                              fontSize: "16px",
                            }}
                            value={
                              data?.discount?.type === "dollar"
                                ? data?.discount?.value
                                : ""
                            }
                            disabled
                          />
                        </Form.Item>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex box-dir-reverse">
                    <div className="col-sm-4">
                      <h4 className="bolder-title mrgt10">
                        {t("content-panel-add-artwork.discount_period")}
                      </h4>
                      <div className="public-group">
                        <Form.Item
                          className="w-100"
                          // label={t("content-panel-add-artwork.date")}
                        >
                          <Input
                            className="form-control input-public "
                            style={{
                              backgroundColor: "transparent",
                              color: "#787878",
                              fontSize: "16px",
                            }}
                            value={data?.discount?.duration}
                            disabled
                          />
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {console.log("test")}

              <div className="clearfix"></div>
              <div className="adv-btn">
                <button onClick={() => prev()} className="btn-prev  ">
                  {t("content-panel-add-artwork.previous_step")}
                </button>
                <button onClick={() => next()} className="btn-next">
                  <span>{t("content-panel-add-artwork.art_info.cencel")}</span>
                </button>
              </div>
            </Form>
          </div>
        </Spin>
      </>
    );
  } catch (error) {
    console.log("error", error);
  }
};

export default PriceInfo;
