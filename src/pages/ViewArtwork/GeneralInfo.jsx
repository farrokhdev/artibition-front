import React, { useEffect } from "react";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import { t } from "i18next";
import { Form, Image, Input, Select, Spin } from "antd";
import classnames from "classnames";
import { GetLanguage } from "../../utils/utils";
import { isNil } from "lodash";
import { LoadingOutlined } from "@ant-design/icons";
const GeneralInfo = ({ next, prev, data }) => {
  console.log("🚀 ~ file: GeneralInfo.jsx ~ line 9 ~ GeneralInfo ~ data", data);

  //   if (isNil(data)) return <></>;
  return (
    <>
      <HeaderPanel t={t} />
      <Spin
        tip="لطفا شکیبا باشید"
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
        spinning={isNil(data)}
      >
        <div className="panel-style container mx-auto px-0 w-100 bg-white">
          <h3 className="info-title mrgt64  text-dir">
            {t("gallery-panel-create-artist-artwork.upload_artwork.image")}
          </h3>
          <Form layout="vertical" initialValues={data}>
            <div className="info-sec dir">
              <h3 className="infotitle-default require text-dir">
                {t("content-panel-add-artwork.art_info.title")}
              </h3>
              {data?.medias?.map((item) => (
                <Image src={item?.exact_url} key={item?.id} />
              ))}
              <div className="row">
                <div className="d-block d-sm-flex box-dir-reverse w-100">
                  <div
                    className={classnames("", {
                      "col-sm-6": GetLanguage() === "fa-IR",
                      "d-none": GetLanguage() === "en-US",
                    })}
                  >
                    <div className="public-group view-artwork">
                      <Form.Item
                        className="w-100 "
                        label={t(
                          "content-panel-add-artwork.art_info.artwork_title"
                        )}
                      >
                        <Input
                          type="text"
                          className="form-control input-public border-0 px-2  d-flex"
                          style={{
                            backgroundColor: "transparent",
                            color: "#787878",
                            fontSize: "16px",
                          }}
                          value={data?.translations?.fa?.title}
                          disabled
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
                    <div className="public-group en view-artwork">
                      <Form.Item
                        className="w-100"
                        label={t(
                          "content-panel-add-artwork.art_info.artwork_title"
                        )}
                      >
                        <Input
                          type="text"
                          id="info-202"
                          className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                          style={{
                            backgroundColor: "transparent",
                            color: "#787878",
                            fontSize: "16px",
                          }}
                          value={data?.translations?.en?.title}
                          disabled
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>

                {/* {!(getUserRole() === "gallery") && */}
                {/* !searchParams.get("artist_id") && ( */}
                <div className="d-block d-sm-flex box-dir-reverse w-100">
                  <div
                    className={classnames("", {
                      "col-sm-6": GetLanguage() === "fa-IR",
                      "d-none": GetLanguage() === "en-US",
                    })}
                  >
                    <div className="public-group  view-artwork">
                      <Form.Item
                        className="w-100 "
                        label={t(
                          "content-panel-add-artwork.art_info.artist_name"
                        )}
                      >
                        <Input
                          type="text"
                          id="info-201"
                          className="form-control input-public border-0 px-2  d-flex"
                          style={{
                            backgroundColor: "transparent",
                            color: "#787878",
                            fontSize: "16px",
                          }}
                          value={data?.translations?.fa?.artist_name}
                          disabled
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
                    <div className="public-group en  view-artwork">
                      <Form.Item
                        className="w-100"
                        label={t(
                          "content-panel-add-artwork.art_info.artwork_name"
                        )}
                      >
                        <Input
                          type="text"
                          id="info-202"
                          className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                          style={{
                            backgroundColor: "transparent",
                            color: "#787878",
                            fontSize: "16px",
                          }}
                          value={data?.translations?.en?.artist_name}
                          disabled
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
                {/* )} */}

                <div className="d-block d-sm-flex box-dir-reverse w-100">
                  <div className="col-sm-6">
                    <div className="public-group  view-artwork">
                      <Form.Item
                        className="border-0 w-100"
                        label={t(
                          "content-panel-add-artwork.art_info.artwork_field"
                        )}
                      >
                        {/* -------   input select categories   ------- */}

                        <Input
                          className="form-control input-public text-dir border-0 px-2  d-flex"
                          id="info-203"
                          style={{
                            backgroundColor: "transparent",
                            color: "#787878",
                            fontSize: "16px",
                          }}
                          value={
                            GetLanguage() === "fa-IR"
                              ? data?.category?.translations?.fa?.title
                              : data?.category?.translations?.en?.title
                          }
                          disabled
                        ></Input>
                      </Form.Item>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="public-group  view-artwork">
                      <Form.Item
                        className="border-0 w-100"
                        label={t(
                          "content-panel-add-artwork.art_info.artwork_subject"
                        )}
                      >
                        <Input
                          className="form-control input-public text-dir border-0 px-2  d-flex"
                          id="info-204"
                          style={{
                            backgroundColor: "transparent",
                            color: "#787878",
                            fontSize: "16px",
                          }}
                          value={
                            GetLanguage() === "fa-IR"
                              ? data?.subject?.translations?.fa?.title
                              : data?.subject?.translations?.en?.title
                          }
                          disabled
                        ></Input>
                      </Form.Item>
                    </div>
                  </div>
                </div>
                <div className="d-block d-sm-flex box-dir-reverse w-100">
                  <div className="col-sm-6">
                    <div className="public-group  view-artwork">
                      <Form.Item
                        className="border-0 w-100"
                        label={t(
                          "content-panel-add-artwork.art_info.artwork_technique"
                        )}
                      >
                        <Input
                          className="form-control input-public text-dir border-0 px-2  d-flex"
                          id="info-205"
                          style={{
                            backgroundColor: "transparent",
                            color: "#787878",
                            fontSize: "16px",
                          }}
                          value={
                            GetLanguage() === "fa-IR"
                              ? data?.technique?.translations?.fa?.title
                              : data?.technique?.translations?.en?.title
                          }
                          disabled
                        ></Input>
                      </Form.Item>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="public-group  view-artwork">
                      <Form.Item
                        className="border-0 w-100"
                        label={t(
                          "content-panel-add-artwork.art_info.artwork_material"
                        )}
                      >
                        <Input
                          className="form-control input-public text-dir border-0 px-2  d-flex"
                          id="info-206"
                          style={{
                            backgroundColor: "transparent",
                            color: "#787878",
                            fontSize: "16px",
                          }}
                          value={
                            GetLanguage() === "fa-IR"
                              ? data?.material?.translations?.fa?.title
                              : data?.material?.translations?.en?.title
                          }
                          disabled
                        ></Input>
                      </Form.Item>
                    </div>
                  </div>
                </div>
                <div className="d-block d-sm-flex box-dir-reverse w-100">
                  <div className="col-sm-6">
                    <div className="public-group  view-artwork">
                      <Form.Item
                        className="w-100"
                        label={t(
                          "content-panel-add-artwork.art_info.create_date"
                        )}
                      >
                        <Input
                          type="number"
                          id="info-207"
                          className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                          style={{
                            backgroundColor: "transparent",
                            color: "#787878",
                            fontSize: "16px",
                          }}
                          value={
                            GetLanguage() === "fa-IR"
                              ? data?.jalali_creation_year
                              : data?.christian_creation_year
                          }
                          disabled
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex box-dir-reverse ">
                      <div className="col-sm-4 col-xs-6 ">
                        <div className="public-group  view-artwork">
                          <Form.Item
                            className="w-100"
                            label={t(
                              "content-panel-add-artwork.art_info.width"
                            )}
                          >
                            <Input
                              type="number"
                              id="info-207"
                              className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                              style={{
                                backgroundColor: "transparent",
                                color: "#787878",
                                fontSize: "16px",
                              }}
                              value={data?.width}
                              disabled
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-sm-4 col-xs-6">
                        <div className="public-group  view-artwork">
                          <Form.Item
                            className="w-100"
                            label={t(
                              "content-panel-add-artwork.art_info.length"
                            )}
                          >
                            <Input
                              type="number"
                              id="info-207"
                              className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                              style={{
                                backgroundColor: "transparent",
                                color: "#787878",
                                fontSize: "16px",
                              }}
                              value={data?.length}
                              disabled
                            />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-block d-sm-flex box-dir-reverse w-100">
                  <div className="col-sm-6">
                    <div className="public-group  view-artwork">
                      {/* <Form.Item
                                        className="border-0 w-100"
                                        name="collection"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Select
                                            className='form-control input-public text-dir border-0 px-2  d-flex'
                                            placeholder={t("content-panel-add-artwork.art_info.select_gallery")}
                                            allowClear
                                            options={sotialCollection}
                                            id="info-206"
                                        >

                                        </Select>

                                    </Form.Item> */}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="public-group  view-artwork">
                      <Form.Item
                        className="w-100"
                        label={t("content-panel-add-artwork.art_info.weight")}
                      >
                        <Input
                          type="number"
                          id="info-207"
                          className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                          style={{
                            backgroundColor: "transparent",
                            color: "#787878",
                            fontSize: "16px",
                          }}
                          value={data?.weight}
                          disabled
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
                <div className="d-block d-sm-flex box-dir-reverse w-100">
                  <div
                    className={classnames("", {
                      "col-sm-6": GetLanguage() === "fa-IR",
                      "d-none": GetLanguage() === "en-US",
                    })}
                  >
                    <div className="form-group view-artwork">
                      <Form.Item
                        label={t(
                          "content-panel-add-artwork.art_info.description_fa"
                        )}
                      >
                        <Input.TextArea
                          id="info-213"
                          rows={6}
                          showCount
                          maxLength={200}
                          style={{
                            backgroundColor: "transparent",
                            color: "#787878",
                            fontSize: "16px",
                          }}
                          value={data?.translations?.fa?.about}
                          disabled
                        />
                      </Form.Item>

                      <label
                        htmlFor="info-213"
                        className="lable-public"
                      ></label>
                    </div>
                  </div>
                  <div
                    className={classnames("", {
                      "col-sm-6": GetLanguage() === "fa-IR",
                      "col w-100": GetLanguage() === "en-US",
                    })}
                  >
                    <div className="form-group  view-artwork">
                      <Form.Item
                        className=""
                        label={t(
                          "content-panel-add-artwork.art_info.description_en"
                        )}
                      >
                        <Input.TextArea
                          className=""
                          id="info-214"
                          rows={6}
                          showCount
                          maxLength={200}
                          style={{
                            backgroundColor: "transparent",
                            color: "#787878",
                            fontSize: "16px",
                          }}
                          value={data?.translations?.en?.about}
                          disabled
                        />
                      </Form.Item>

                      <label
                        htmlFor="info-214"
                        className="lable-public"
                      ></label>
                    </div>
                  </div>
                </div>
                <div className="d-block d-sm-flex box-dir-reverse w-100">
                  <div
                    className={classnames("", {
                      "col-sm-6": GetLanguage() === "fa-IR",
                      "d-none": GetLanguage() === "en-US",
                    })}
                  >
                    <div className="public-group  view-artwork">
                      <Form.Item
                        className="w-100"
                        label={t("content-panel-add-artwork.art_info.tag_fa")}
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
                          value={data?.tags?.filter?.(
                            (item) => item.language === "fa"
                          )}
                          disabled
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
                    <div className="public-group  view-artwork">
                      <Form.Item
                        className="w-100"
                        label={t("content-panel-add-artwork.art_info.tag_en")}
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
                          value={data?.tags?.filter?.(
                            (item) => item.language === "en"
                          )}
                          disabled
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="adv-btn">
              <button
                onClick={() => prev()}
                type="button"
                className="btn-prev "
              >
                <span>{t("content-panel-add-artwork.art_info.cencel")}</span>
              </button>
              <button
                htmlType="submit"
                className="btn-next pull-left"
                onClick={() => next()}
              >
                {t("content-panel-add-artwork.art_info.next_step")}
              </button>
            </div>
          </Form>
        </div>
      </Spin>
    </>
  );
};

export default GeneralInfo;
