import React, { useState, useEffect } from "react";
import { message, Modal } from "antd";
import edit_icon from "../../assets/img/edit_name.svg";
import close_icon from "../../assets/img/clear.svg";
import { Form, Input } from "antd";
import ver_code from "../../assets/img/ver_code.svg";
import { t } from "i18next";

import search_icon from "../../assets/img/search.svg";
import jpaytrkase3 from "../../assets/img/artworks/jpaytrkase@3x.jpg";

import TextArea from "antd/es/input/TextArea";
import apiServices from "../../utils/api.services";
import {
  FOLLOW_PRODUCTS,
  PRODUCTS_ME,
  SOCIAL_NETWORK_COLLECTIONS,
} from "../../utils";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import { GetLanguage } from "../../utils/utils";
import { handleShowImage } from "../../utils/showImageProduct";

function ModalAddCollections(props) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  let Language = GetLanguage();
  const { visibleAddCollections, setVisibleAddCollections } = props;
  const [chooseFollowProducts, setchooseFollowProducts] = useState([]);
  const [chooseProduct, setchooseProduct] = useState([]);
  const [params, setParams] = useState({
    activity_type: "like",
    content_type: "product",
  });

  console.log("chooseFollowProducts", chooseFollowProducts);

  const onFinish = (values) => {
    if (chooseProduct?.length < 1) {
      message.error("لطفا آثار کالکشن را انتخاب کنید.");
      return;
    }

    let payload = {
      translations: {
        fa: {
          title: values?.title,
          description: values?.description,
        },
        en: {
          title: values?.title_en,
          description: values?.description_en,
        },
      },
      products_id: chooseProduct,
      // "likes": chooseProduct
    };
    apiServices.post(SOCIAL_NETWORK_COLLECTIONS, payload).then((res) => {
      if (res.data) {
        message.success({
          content: "اثر با موفقیت ثبت شد",
          style: {
            marginTop: "10vh",
          },
        });
        setTimeout(() => {
          setVisibleAddCollections(false);
        }, 500);
      } else {
        console.log(res.response);
        message.error({
          content: "خطا در ثبت اطلاعات",
          style: {
            marginTop: "10vh",
          },
        });
      }
    });
  };

  const getProductsFollow = () => {
    apiServices
      .get(FOLLOW_PRODUCTS, queryString.stringify(params))
      .then((res) => {
        console.log("res.data.data.results==>>", res.data.data.results);
        setchooseFollowProducts(res.data.data.results);
      });
  };
  const handleClose = () => {
    setVisibleAddCollections(false);
  };

  useEffect(() => {
    getProductsFollow();
  }, []);

  return (
    <React.Fragment>
      <Modal
        centered
        className=""
        style={{ marginTop: "100px" }}
        visible={visibleAddCollections}
        onOk={handleClose}
        onCancel={handleClose}
        width={"100vw"}
        footer={[]}
      >
        <Form className="" form={form} onFinish={onFinish}>
          <div className="modal-content px-0 px-md-0">
            <div className="d-flex justify-content-end">
              <button type="reset">
                <span
                  onClick={handleClose}
                  aria-hidden="true"
                  aria-label="Close"
                >
                  <img
                    className="btn-close-modal"
                    src={close_icon}
                    alt="close-icon"
                  />
                </span>
              </button>
            </div>
            <div className="modal-header">
              <h5 className="fontbold28 aligncenter" id="exampleModalLabel">
                {t("artwork.modal_similar_artwork.title1")}
              </h5>
            </div>
            <div className="modal-body">
              <div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">
                <div className="info-sec">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="public-group ">
                        <Form.Item
                          className="w-100 "
                          name="title"
                          rules={[
                            {
                              required: true,
                              message: "required",
                            },
                          ]}
                        >
                          <Input
                            type="text"
                            id="info-201"
                            className="form-control input-public border-0 px-2  d-flex"
                            placeholder="عنوان مجموعه"
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="public-group en">
                        <Form.Item
                          className="w-100 "
                          name="title_en"
                          rules={[
                            {
                              required: true,
                              message: "required",
                            },
                          ]}
                        >
                          <Input
                            type="text"
                            id="info-201"
                            className="form-control input-public border-0 px-2  d-flex"
                            placeholder="Collection title"
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group ">
                        <Form.Item
                          className="w-100"
                          name="description"
                          rules={[
                            {
                              required: true,
                              message: "required",
                            },
                          ]}
                        >
                          <TextArea
                            className="default-input"
                            placeholder="توضیحات به فارسی"
                            rows="6"
                          />
                        </Form.Item>

                        <label className="lable-public"></label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group en">
                        <Form.Item
                          className="w-100"
                          name="description_en"
                          rules={[
                            {
                              required: true,
                              message: "required",
                            },
                          ]}
                        >
                          <TextArea
                            className="default-input"
                            placeholder="Description in English"
                            rows="6"
                          />
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="adv-content  col-sm-8 col-sm-offset-2 ">
                  <h2 className="adv-title">
                    آثار مورد نظر خود را انتخاب کنید.
                  </h2>
                  <div className="nl-input filter-search">
                    <input placeholder="جستجوی اثر" />
                    <button className="noborder" type="button">
                      <img src={search_icon} width="24" height="24" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="container advisory-select">
                <div className="row-gridimg">
                  <div className="row">
                    {chooseFollowProducts?.map((artworksLike) => {
                      return (
                        <div className="cols col-sm-3 col-xs-6">
                          <label className="lable-checkbox">
                            <input
                              type="checkbox"
                              value={artworksLike?.id}
                              checked={chooseProduct.includes(artworksLike?.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setchooseProduct([
                                    ...chooseProduct,
                                    artworksLike?.id,
                                  ]);
                                } else {
                                  setchooseProduct(
                                    chooseProduct.filter(
                                      (item) => item !== artworksLike?.id
                                    )
                                  );
                                }
                              }}
                            />
                            <span className="checkmark"></span>
                            <div className="col-img">
                              <img
                                src={
                                  artworksLike && handleShowImage(artworksLike)
                                }
                                // src={artworksLike?.medias[0].exact_url}
                                width="840"
                                height="1259"
                                alt="آرتیبیشن"
                                className="img-responsive"
                              />
                              <div className="tab-overly">
                                <a href="#" className="btn-see">
                                  <span className="view-icon pull-right"></span>
                                  <span>مشاهده اثر</span>
                                </a>
                                <a href="#" className="btn-sale">
                                  درخواست خرید
                                </a>
                                <a href="#" className="like-icon"></a>
                              </div>
                            </div>
                          </label>
                          <div className="col-body">
                            <h6 className="col-title">
                              <span className="col-name">
                                {Language === "fa-IR"
                                  ? artworksLike?.translations?.fa?.artist_name
                                  : artworksLike?.translations?.en?.artist_name}
                              </span>
                              {/* <span className="col-name">آغداشلو</span> */}
                            </h6>
                            <div className="col-dimension">
                              <span className="col-dimension-title">
                                {t(
                                  "content-panel-my-albums.collections.dimentions"
                                )}
                              </span>
                              <span className="col-dimension-body">
                                <span className="dimension-width">
                                  {artworksLike?.width}
                                </span>
                                <span> در </span>
                                <span className="dimension-height">
                                  {artworksLike?.height}
                                </span>
                              </span>
                            </div>
                            <div className="col-price">
                              <span className="col-price-num">
                                {Language === "fa-IR"
                                  ? artworksLike?.toman_price
                                  : artworksLike?.dollar_price}
                              </span>
                              <span className="col-price-unit">تومان</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="adv-btn">
                <button
                  htmlType="submit"
                  className="btn btn-black center-block"
                >
                  ثبت
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Modal>
    </React.Fragment>
  );
}

export default ModalAddCollections;
