import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import { Breadcrumb, message, Tabs } from "antd";
import share_icon from "../../assets/img/share.svg";
import like_selected_icon from "../../assets/img/liked_selected.svg";
import liked_icon from "../../assets/img/Liked.svg";
import circle_plus from "../../assets/img/circle-plus-1.png";
import ask_me_icon from "../../assets/img/ask_me.svg";
import alert_icon from "../../assets/img/alert.svg";
import auction_black_icon from "../../assets/img/auction-black.svg";
import similar_icon from "../../assets/img/similar.svg";
import more_icon from "../../assets/img/more.svg";
import edit_icon from "../../assets/img/edit_name.svg";
import ModalEditOffer from "./ModalEditOffer";
import ModalSimilarArtworks from "./ModalSimilarArtworks";
import ModalBidding from "./ModalBidding";
import ModalSendMessage from "../ProfileArtist/ModalSendMessage";

import {
  ARTIST_PRODUCTS,
  ARTIST_PROFILE,
  CART_ME_ADD_ITEM,
  ORDER_BUYER_ME,
  PRODUCT_DETAIL,
} from "../../utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import apiServices from "../../utils/api.services";
import QueryString from "qs";
import { useTranslation } from "react-i18next";
import moment from "moment-jalaali";
import momentJalaali from "moment-jalaali";
import { follow, isLogin, Token } from "../../utils/utils";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_CART } from "../../redux/reducers/cart/cart.types";
import { discountPrice, numDiscriminant } from "../../utils/discriminant";
import { DEFAULT_URL_IMAGE } from "../../utils/defaultImage";
import ArthibitionProperties from "../../components/ArthibitionProperies/ArthibitionProperties";
import Suggestions from "../Home.jsx/Suggestions";
import RecentlyNews from "../Home.jsx/RecentlyVeiws";
import ModalShare from "../../components/DetailArtwork/ModalShare";
import { isNil } from "lodash";

function DetailsArtwork() {
  let navigate = useNavigate();

  const { t, i18n } = useTranslation();

  // GET USER ROLE
  const { roles } = useSelector((state) => state.authReducer);
  // GET USER ROLE ENDS
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  var id;
  var artist_id;
  var query = useQuery();
  id = query.get("id");
  artist_id = query.get("artist_id");

  const dispatch = useDispatch();
  const [visibleEditOfferModal, setVisibleEditOfferModal] = useState(false);
  const [visibleSimilarArtworksModal, setVisibleSimilarArtworksModal] =
    useState(false);
  const [visibleBiddingModal, setVisibleBiddingModal] = useState(false);
  const [productDetail, setProductDetail] = useState();
  const [editionValue, setEditionValue] = useState({});

  const [artistProduct, setArtistProduct] = useState();
  const [showShare, setShowShare] = useState(false);
  const [showSendMessage, setShowSendMessage] = useState(false);
  const [offerValue, setOfferValue] = useState();
  const [messageReceiverId, setMessageReceiverId] = useState(null);
  const [artistBiography, setArtistBiography] = useState("");
  const [toggle, setToggle] = useState(false);
  const [params, setParams] = useState({
    search: "",
    page: 1,
  });
  const [artistParams, setArtistParams] = useState({
    ...(artist_id !== "undefined" && { artist_id: artist_id }),
    status: "active",
    search: "",
    page: 1,
  });
  const getArtistProfile = () => {
    apiServices
      .get(ARTIST_PROFILE(artist_id), "")
      .then((res) => {
        if (res.data) {
          i18n.language === "fa-IR"
            ? setArtistBiography(res?.data?.data?.translations?.fa?.biography)
            : setArtistBiography(res?.data?.data?.translations?.en?.biography);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    getArtistProfile();
  }, []);
  const handleShowModalEditOffer = () => {
    setVisibleEditOfferModal(true);
  };

  const handleShowModalBidding = () => {
    setVisibleBiddingModal(true);
  };

  const handleShowSimilarArtworks = () => {
    setVisibleSimilarArtworksModal(true);
  };

  const { TabPane } = Tabs;

  function callback(key) {
    // console.log(key);
  }

  const getProductDetail = () => {
    apiServices
      .get(PRODUCT_DETAIL(id), QueryString.stringify(params))
      .then((res) => {
        if (res.data) {
          setProductDetail(res.data.data);
          setEditionValue(res.data.data?.items[0]);
          setMessageReceiverId(res?.data?.data?.owner?.id);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const callBack = () => {
    getProductDetail();
  };
  const getArtistProduct = () => {
    apiServices
      .get(ARTIST_PRODUCTS, QueryString.stringify(artistParams))
      .then((res) => {
        if (res.data) {
          setArtistProduct(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const getOfferValue = () => {
    apiServices
      .get(ORDER_BUYER_ME, QueryString.stringify(params))
      .then((res) => {
        if (res.data) {
          setOfferValue(res.data.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getProductDetail();
    getArtistProduct();
    if (isLogin()) {
      getOfferValue();
    }
  }, [params, toggle]);

  const handleAddToCart = () => {
    //post productDetail.id and editionValue to a simple
    if (!Token()) {
      message.error(t("cart.general.login_error"));
      return;
    }
    let token = Token() ? "Bearer " + Token() : undefined;

    const tempHeader = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    };
    axios
      .put(
        CART_ME_ADD_ITEM,
        {
          product_id: productDetail.id,
          edition_number: editionValue.edition_number,
        },
        {
          headers: tempHeader,
        }
      )
      .then((res) => {
        if (res?.data?.code === 200) {
          dispatch({
            type: UPDATE_CART,
            payload: res?.data?.data?.product_items?.length,
          });
          navigate("/panel/cart");
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  // Carousel flag
  const [choosenImg, setChoosenImg] = useState("");

  const chooseHandler = (e) => {
    setChoosenImg(e.target.src);
  };

  let images = [
    {
      renderItem: (r) => {
        return (
          <div className="artwork_bg">
            <img
              className="artwork_bg_inside_img"
              src={productDetail?.medias[0].exact_url}
              style={{
                // width: ` ${productDetail?.width + "rem"}`,
                height: productDetail?.height
                  ? productDetail?.height + "px"
                  : productDetail?.width > 100
                  ? "90px"
                  : "30px",
              }}
              width={productDetail?.width}
              alt="Los Angeles"
            />
          </div>
        );
      },
    },
  ];

  productDetail?.medias.map((item) => {
    const details = {
      renderItem: () => {
        return (
          <img
            src={item.exact_url}
            style={{
              width: "100%",
              height: "100% ",
              objectPosition: "center",
              objectFit: "cover ",
            }}
            alt=""
          />
        );
      },

      thumbnail: item.exact_url,
    };
    images.push(details);
  });

  return (
    <>
      <div className="container mx-auto px-0 w-100">
        <Header />
        <Menu />

        <div className="container">
          <Breadcrumb
            className="d-flex box-dir-reverse breadcrumb"
            separator=""
          >
            <Breadcrumb.Item>{t("artwork.artibition")}</Breadcrumb.Item>
            <Breadcrumb.Separator>{">"}</Breadcrumb.Separator>
            <Breadcrumb.Item href="/site/artworks/">
              {i18n.language === "fa-IR"
                ? productDetail?.category?.translations?.fa?.title
                : productDetail?.category?.translations?.en?.title}
            </Breadcrumb.Item>
            <Breadcrumb.Separator>{">"}</Breadcrumb.Separator>
            {i18n.language === "fa-IR" ? (
              <Breadcrumb.Item href="">
                {productDetail?.translations?.fa?.artist_name}
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item href="">
                {productDetail?.translations?.en?.artist_name}
              </Breadcrumb.Item>
            )}
            <Breadcrumb.Separator>{">"}</Breadcrumb.Separator>
            <Breadcrumb.Item className="active persian-num">
              {productDetail?.unique_code.slice(-12)}
            </Breadcrumb.Item>
          </Breadcrumb>

          <div className="clearfix"></div>
          <div className="d-block d-md-flex box-dir-reverse dir">
            <div className="col-md-6 px-0 px-sm-3">
              <div className="artwork-imggallery">
                <div
                  id="myCarousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="item active">
                      {choosenImg ? (
                        <img
                          className=""
                          style={{
                            width: "500px",
                            height: "500px",
                            objectFit: "cover",
                            objectPosition: "center",
                            display: "block",
                            transition: "0.3s ease",
                          }}
                          src={choosenImg}
                          alt="Los Angeles"
                        />
                      ) : (
                        <div className="artwork_bg">
                          <img
                            className="artwork_bg_inside_img"
                            src={
                              productDetail?.medias &&
                              productDetail?.medias[0]?.exact_url
                            }
                            height={
                              productDetail?.height
                                ? (productDetail?.height / 150) * 172 + "px"
                                : "500px"
                            }
                            width={
                              productDetail?.width
                                ? (productDetail?.width / 180) * 216
                                : "500px"
                            }
                            alt="Los Angeles"
                          />
                        </div>
                      )}
                    </div>

                    <div className="item">
                      <img
                        src={
                          productDetail?.medias &&
                          productDetail?.medias[0]?.exact_url
                        }
                        alt="Chicago"
                      />
                    </div>
                  </div>
                  <ol className="carousel-indicators">
                    {productDetail?.medias &&
                      productDetail?.medias?.map((item) => (
                        <li
                          data-target="#myCarousel"
                          // data-slide-to="0"
                          className="active"
                          style={{ width: "120px", height: "80px" }}
                          onClick={(e) => chooseHandler(e)}
                        >
                          <img
                            src={item.exact_url}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "center",
                              display: "block",
                            }}
                            alt=""
                            className="img-responsive"
                          />
                        </li>
                      ))}
                    <li
                      // data-target="#myCarousel"
                      // data-slide-to="0"
                      className="active"
                      style={{
                        width: "120px",
                        height: "80px",
                        background: `url(https://api.artibition.gallery/static/img/roomview.jpg)`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        position: "relative",
                      }}
                      onClick={(e) => chooseHandler(e)}
                    >
                      <img
                        className="img-responsive"
                        src={
                          productDetail?.medias &&
                          productDetail?.medias[0]?.exact_url
                        }
                        style={{
                          width: "40%",
                          height: "40%",
                          position: "absolute",
                          top: "5px",
                          left: "50%",
                          boxShadow: " 0px 0px 2px 1px rgb(0, 0, 0)",
                          transform: "translateX(-50%)",
                          objectFit: "cover",
                          objectPosition: "center",
                          display: "block",
                        }}
                        alt="Los Angeles"
                      />
                    </li>
                  </ol>
                  <div className=" artwork-options pull-dir ">
                    <button
                      className="share-option"
                      onClick={() => {
                        setShowShare(true);
                      }}
                    >
                      <img src={share_icon} height="31" width="31" alt="" />
                    </button>
                    <div
                      className="like-option"
                      onClick={() =>
                        follow({
                          content: "product",
                          activity: "like",
                          object_id: productDetail?.id,
                          action: productDetail?.likes,
                          callBack,
                        })
                      }
                    >
                      {productDetail?.likes ? (
                        <img src={liked_icon} height="31" width="31" alt="" />
                      ) : (
                        <img
                          src={like_selected_icon}
                          height="31"
                          width="31"
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="artwork-imggallery">
                <ImageGallery items={images} />
              </div> */}
            </div>
            <div className="col-md-6 px-0 px-sm-3">
              <div className="artwork-detail artwork-defaultpadding">
                <div className="d-flex box-dir-reverse ">
                  <div className="col-xs-3">
                    <div className="artist-avatar">
                      <img
                        src={
                          productDetail?.artist_image?.exact_url
                            ? productDetail?.artist_image?.exact_url
                            : DEFAULT_URL_IMAGE
                        }
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        alt=""
                        className="img-responsive pull-right "
                      />
                    </div>
                  </div>
                  <div className="col-xs-9">
                    <div className="row box-dir-reverse">
                      <div className="col-sm-6">
                        <h2 className="artist-fullname text-dir">
                          {i18n.language === "fa-IR"
                            ? productDetail?.translations?.fa?.artist_name
                            : productDetail?.translations?.en?.artist_name}
                        </h2>
                        {artist_id === "null" ? (
                          ""
                        ) : (
                          <button
                            type="button"
                            className="btn btn-galleryfollow pull-dir"
                            onClick={() =>
                              follow({
                                content: "artist",
                                activity: "following",
                                object_id: artist_id,
                              })
                            }
                          >
                            <div className="d-flex box-dir-reverse">
                              <img
                                src={circle_plus}
                                width="17"
                                height="17"
                                alt=""
                                className="pull-right"
                              />
                              <span>{t("artwork.follow")}</span>
                            </div>
                          </button>
                        )}
                      </div>
                      {roles && (
                        <div className="col-sm-6">
                          <button
                            type="button"
                            className="btn-askme pull-left"
                            onClick={() => {
                              setShowSendMessage(true);
                            }}
                          >
                            <img
                              src={ask_me_icon}
                              width="24"
                              height="24"
                              alt=""
                              className="pull-right"
                            />
                            <span>{t("artwork.ask_me")}</span>
                          </button>
                        </div>
                      )}
                      <div className="clearfix"></div>
                      <div className="col-xs-12">
                        <h3 className="artwork-name text-dir">
                          {i18n.language === "fa-IR"
                            ? productDetail?.translations?.fa?.title
                            : productDetail?.translations?.en?.title}
                          {/* {t("artwork.untitle")} */}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="artwork-microdetail">
                  <div className="d-flex">
                    <div className="col-xs-12">
                      <div className="d-flex box-dir-reverse row-listdetail">
                        <span className="col-xs-4 detail-title text-dir">
                          {t("artwork.code")}
                        </span>
                        <span className="col-xs-8 detail-name persian-num text-dir">
                          {productDetail?.unique_code.slice(-12)}
                        </span>
                      </div>
                      <div className="d-flex box-dir-reverse row-listdetail">
                        <span className="col-xs-4 detail-title text-dir">
                          {t("artwork.field.title")}
                        </span>
                        <h3 className="col-xs-8 detail-name text-dir">
                          {i18n.language === "fa-IR"
                            ? productDetail?.category?.translations?.fa?.title
                            : productDetail?.category?.translations?.en?.title}
                        </h3>
                      </div>
                      <div className="d-flex box-dir-reverse row-listdetail">
                        <span className="col-xs-4 detail-title text-dir">
                          {t("artwork.technique")}
                        </span>
                        <h3 className="col-xs-8 detail-name text-dir">
                          {i18n.language === "fa-IR"
                            ? productDetail?.technique?.translations?.fa?.title
                            : productDetail?.technique?.translations?.en?.title}
                        </h3>
                      </div>
                      <div className="d-flex box-dir-reverse row-listdetail">
                        <span className="col-xs-4 detail-title text-dir">
                          {t("artwork.material")}
                        </span>
                        <h3 className="col-xs-8 detail-name text-dir">
                          {i18n.language === "fa-IR"
                            ? productDetail?.material?.translations?.fa?.title
                            : productDetail?.material?.translations?.en?.title}
                        </h3>
                      </div>
                      <div className="d-flex box-dir-reverse row-listdetail">
                        <span className="col-xs-4 detail-title text-dir">
                          {t("artwork.create_date")}
                        </span>
                        <h3 className="col-xs-8 detail-name persian-num text-dir">
                          {i18n.language === "fa-IR"
                            ? productDetail?.jalali_creation_year
                            : !isNil(productDetail?.christian_creation_year)
                            ? productDetail?.christian_creation_year
                            : moment(
                                productDetail?.jalali_creation_year,
                                "jYYYY"
                              ).format("YYYY") === "Invalid date"
                            ? ""
                            : moment(
                                productDetail?.jalali_creation_year,
                                "jYYYY"
                              ).format("YYYY")}
                          {console.log(
                            "test",
                            productDetail,
                            productDetail?.christian_creation_year,
                            isNil(productDetail?.christian_creation_year)
                          )}
                        </h3>
                      </div>
                      <div className="d-flex box-dir-reverse row-listdetail">
                        <span className="col-xs-4 detail-title text-dir">
                          {t("artwork.size")}
                        </span>
                        <h3 className="col-xs-8 detail-name text-dir">
                          <span className="dimension-width persian-num">
                            {productDetail?.width}
                          </span>
                          <span> در </span>
                          {isNil(productDetail?.height) ? (
                            t("undefined")
                          ) : (
                            <span className="dimension-height persian-num">
                              {productDetail?.height}
                            </span>
                          )}
                        </h3>
                      </div>
                      <div className="d-flex box-dir-reverse row-listdetail">
                        {productDetail?.items[0]?.edition_number ? (
                          <span className="col-xs-4 detail-title text-dir">
                            {t("artwork.count.title")}
                          </span>
                        ) : (
                          ""
                        )}
                        <div className="col-xs-8 text-dir">
                          <div className="d-flex box-dir-reverse">
                            {productDetail?.items[0]?.edition_number ? (
                              <h3 className="detail-name ">
                                <span claclassNamess="persian-num">
                                  {productDetail?.items?.length}
                                </span>
                                <span>{t("artwork.count.number")}</span>
                              </h3>
                            ) : (
                              ""
                            )}

                            {productDetail?.items[0]?.edition_number ? (
                              <select
                                className="form-control num-select text-dir"
                                id="sel1"
                                onChange={(event) =>
                                  setEditionValue(event.target.value)
                                }
                              >
                                {productDetail?.items?.map((item, index) =>
                                  item.edition_number ? (
                                    <option
                                      key={index}
                                      value={item}
                                      selected={index === 0 ? "selected" : null}
                                    >
                                      {i18n.language === "fa-IR"
                                        ? ` ادیشن ${item.edition_number}`
                                        : ` eddition number ${item.edition_number}`}
                                    </option>
                                  ) : (
                                    ""
                                  )
                                )}
                              </select>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="artwork-seller text-dir">
                  {!productDetail?.view_only && (
                    <div className="d-flex box-dir-reverse">
                      <img src={alert_icon} width="20" height="20" alt="" />
                      <span className="orangecolor">
                        {i18n.language === "fa_IR"
                          ? momentJalaali(productDetail?.creation_date)
                              .locale("fa")
                              .fromNow()
                          : moment(productDetail?.creation_date)
                              .locale("fa")
                              .fromNow()}{" "}
                        این اثر قیمت گذاری شده است
                      </span>
                    </div>
                  )}
                </div>

                {editionValue?.is_sold ? (
                  <>
                    <div className="d-block d-md-flex box-dir-reverse artwork-priceblock soldout">
                      <div className="col px-0">
                        <div className="d-flex justify-content-center artwork-price">
                          <span className="artwork-pricenum persian-num">
                            {i18n.language === "fa-IR"
                              ? numDiscriminant(
                                  Math.floor(productDetail?.toman_price)
                                )
                              : numDiscriminant(
                                  Math.floor(productDetail?.dollar_price)
                                )}
                          </span>
                          <span>{t("toman")}</span>
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="d-flex justify-content-center">
                          <button
                            type="button"
                            className="btn btn-artwork-sell w-100"
                          >
                            {t("artwork.sold_out")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="d-block d-md-flex box-dir-reverse artwork-priceblock ">
                    {!productDetail?.view_only ? (
                      <>
                        <div className="col px-0">
                          <div className="d-flex justify-content-center artwork-price">
                            <span className="artwork-pricenum persian-num">
                              {i18n.language === "fa-IR"
                                ? productDetail?.discount
                                  ? discountPrice(
                                      productDetail.toman_price,
                                      productDetail?.discount?.value,
                                      productDetail?.discount?.type,
                                      productDetail?.dollar_price
                                    )
                                  : numDiscriminant(productDetail?.toman_price)
                                : numDiscriminant(productDetail?.dollar_price)}
                            </span>
                            <span>{t("toman")}</span>
                          </div>
                        </div>
                        <div className="col px-0">
                          <div className="d-flex justify-content-center">
                            <button
                              type="button"
                              className="btn btn-artwork-sell w-100"
                              onClick={() => handleAddToCart()}
                            >
                              {t("artwork.request_buy")}
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <span className="text-muted mx-auto text-center">
                        این اثر فقط برای نمایش است
                      </span>
                    )}
                  </div>
                )}

                <div className="artwork-offer">
                  {offerValue?.results?.map(
                    (item) =>
                      item.product_item_id === editionValue?.id && (
                        <div className="d-block d-lg-flex box-dir-reverse justify-content-between">
                          <div className="col px-0">
                            <p className="pull-dir">
                              {t("artwork.bid_artwork.text1")}
                              <strong className="persian-num px-1">
                                {i18n.language === "fa-IR"
                                  ? numDiscriminant(item.toman_price) +
                                    t("toman") +
                                    " "
                                  : numDiscriminant(item.dollar_price) +
                                    t("toman") +
                                    " "}
                              </strong>
                              {t("artwork.bid_artwork.text2")}
                            </p>
                          </div>
                          <div className="col-2 px-0">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal-edit-offer"
                            >
                              {item.status === "modified" && (
                                <img
                                  onClick={handleShowModalEditOffer}
                                  src={edit_icon}
                                  width="32"
                                  height="32"
                                  alt=""
                                  className="pull-dir"
                                />
                              )}
                            </a>
                          </div>
                        </div>
                      )
                  )}
                </div>
                <div className="artwork-property">
                  <ul>
                    <div className="d-block d-lg-flex box-dir-reverse">
                      <li className="col-lg-6 text-dir ">
                        {t("artwork.veiw_home")}
                      </li>
                      {productDetail?.fast_delivery && (
                        <li className="col-lg-6 important text-dir">
                          {t("artwork.shipment")}
                        </li>
                      )}
                    </div>
                    <div className="d-block d-lg-flex box-dir-reverse">
                      {/* <li className="col-lg-6 text-dir ">
                        {t("artwork.show_collector")}
                      </li> */}
                      <li className="col-lg-6 text-dir ">
                        {t("artwork.visit_artwork")}
                      </li>
                    </div>
                  </ul>
                  <div className="clearfix"></div>
                  {editionValue?.is_sold ? (
                    <div className="row">
                      <div className="col-xs-12">
                        <button
                          onClick={handleShowSimilarArtworks}
                          type="button"
                          className="btn btn-artworksimilar"
                          data-toggle="modal"
                          data-target="#modal-similar-artwork"
                        >
                          <div className="d-flex box-dir-reverse justify-content-center">
                            <img
                              src={similar_icon}
                              width="24"
                              height="24"
                              alt=""
                            />
                            <span>{t("artwork.veiw_simillar_artworks")}</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  ) : offerValue?.results?.map((item) =>
                      item.product_item_id === editionValue?.id ? true : false
                    ) ? (
                    <div className="row">
                      <div className="col-xs-12">
                        <button
                          onClick={handleShowSimilarArtworks}
                          type="button"
                          className="btn btn-artworksimilar"
                          data-toggle="modal"
                          data-target="#modal-similar-artwork"
                        >
                          <div className="d-flex box-dir-reverse justify-content-center">
                            <img
                              src={similar_icon}
                              width="24"
                              height="24"
                              alt=""
                            />
                            <span>{t("artwork.veiw_simillar_artworks")}</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="d-flex box-dir-reverse">
                      <div className="col-xs-6">
                        <button
                          onClick={handleShowModalBidding}
                          disabled={!productDetail?.can_bid}
                          type="button"
                          className="btn btn-artworksimilar"
                          data-toggle="modal"
                          data-target="#modal-replied-suggestion1"
                        >
                          <div className="d-flex box-dir-reverse">
                            <img
                              src={auction_black_icon}
                              width="24"
                              height="24"
                              alt=""
                            />
                            <span>{t("artwork.bidding")}</span>
                          </div>
                        </button>
                      </div>
                      <div className="col-xs-6">
                        <button
                          onClick={handleShowSimilarArtworks}
                          type="button"
                          className="btn btn-artworksimilar"
                          data-toggle="modal"
                          data-target="#modal-similar-artwork"
                        >
                          <div className="d-flex box-dir-reverse">
                            <img
                              src={similar_icon}
                              width="24"
                              height="24"
                              alt=""
                            />
                            <span>{t("artwork.simillar_artworks")}</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <ArthibitionProperties />

          <Tabs className="tab-m-0" defaultActiveKey="1" onChange={callback}>
            <TabPane
              className="mx-4"
              tab={t("artwork.about_artwork.tab_title")}
              key="1"
            >
              <p className="text-dir">
                {i18n.language === "fa-IR"
                  ? productDetail?.translations?.fa?.about
                  : productDetail?.translations?.en?.about}
                {((i18n.language === "fa-IR" &&
                  productDetail?.translations?.fa?.about?.length > 0) ||
                  (i18n.language !== "fa-IR" &&
                    productDetail?.translations?.en?.about)) && (
                  <button type="button" className="btn-moredown">
                    <span>{t("artwork.about_artwork.more")}</span>
                    <img
                      src={more_icon}
                      width="16"
                      height="16"
                      alt=""
                      className="pull-dir px-2"
                    />
                  </button>
                )}
              </p>
            </TabPane>
            <TabPane tab={t("artwork.about_artist.tab_title")} key="2">
              <div className="text-dir">
                <h3>
                  {i18n.language === "fa-IR"
                    ? productDetail?.translations?.fa?.artist_name
                    : productDetail?.translations?.en?.artist_name}
                </h3>
                <p>{artistBiography}</p>
              </div>
            </TabPane>
          </Tabs>

          <div className="row box-dir-reverse content-tags">
            <div className="col">
              <div className="public-header">
                <h2 className="default-title text-dir">
                  {t("artwork.tags.title")}
                </h2>
              </div>
              <ul className="d-flex tags-horizontal box-dir-reverse dir">
                {productDetail?.tags?.map((item) => (
                  <li>
                    <a href="#">{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" artwork-artist">
            <div className="public-header">
              <div className="row box-dir-reverse dir">
                <div className="col-xs-8 text-dir">
                  <h2 className="default-title text-dir">
                    {" "}
                    {t("artwork.other_artworks")}{" "}
                    {i18n.language === "fa-IR"
                      ? productDetail?.translations?.fa?.artist_name
                      : productDetail?.translations?.en?.artist_name}
                  </h2>
                </div>
                <div className="col-xs-4">
                  <div className="d-flex box-dir-reverse pull-dir-rev">
                    <Link
                      to={`/site/artist-profile/?id=${artist_id}`}
                      className="btn-readmore pull-left "
                    >
                      {t("artwork.all_artworks_artist.text1")}
                      <span className="hidden-xs">
                        {t("artwork.all_artworks_artist.text2")}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ overflow: "auto" }}
              className="d-flex owl-carousel dir"
            >
              {artistProduct?.results?.map((item, index) => (
                <div className="cols mx-4 pb-3">
                  <div className="col-img">
                    <img
                      src={item.medias[0]?.exact_url}
                      width="840"
                      height="840"
                      alt="آرتیبیشن"
                      className="img-responsive"
                    />
                    <div className="tab-overly">
                      <a
                        onClick={() => {
                          navigate(
                            `/site/artworks-detail/?id=${item.id}&artist_id=${item.artist_id}`
                          );
                          setToggle(!toggle);
                        }}
                        className="btn-see"
                      >
                        <span className="view-icon pull-right"></span>
                        <span>{t("artwork.view-artwork")}</span>
                      </a>
                      <a href="#" className="btn-sale">
                        {t("artwork.btn-action-to-shop")}
                      </a>
                      <a
                        href="#"
                        className="like-icon"
                        onClick={() =>
                          follow({
                            content: "product",
                            activity: "like",
                            object_id: item.id,
                          })
                        }
                      ></a>
                    </div>
                  </div>
                  <div className="col-body">
                    <h6 className="col-title">
                      <span className="col-name">
                        {i18n.language === "fa-IR"
                          ? item.translations?.fa?.artist_name
                          : item.translations?.en?.artist_name}
                      </span>
                    </h6>
                    <div className="col-dimension">
                      <span className="col-dimension-title">ابعاد:</span>
                      <span className="col-dimension-body">
                        <span className="dimension-width">{item.width}</span>
                        <span> در </span>
                        {isNil(item?.height) ? (
                          t("undefined")
                        ) : (
                          <span className="dimension-height">
                            {item.height}
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="col-price text-dir">
                      <span className="col-price-num">
                        {i18n.language === "fa-IR"
                          ? numDiscriminant(item.toman_price)
                          : numDiscriminant(item.dollar_price)}
                      </span>
                      <span className="col-price-unit">تومان</span>
                      <span className="persian-num col-price-off">
                        {i18n.language === "fa-IR"
                          ? item?.discount?.type === "percentage"
                            ? numDiscriminant(
                                (item.toman_price *
                                  Math.floor(item?.discount?.type)) /
                                  100
                              ) + "تومان"
                            : ""
                          : numDiscriminant(item.dollar_price)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="clearfix"></div>
          <Suggestions />

          <RecentlyNews />
        </div>

        <ModalEditOffer
          setVisibleEditOfferModal={setVisibleEditOfferModal}
          visibleEditOfferModal={visibleEditOfferModal}
          editionValue={editionValue}
          offerValue={offerValue}
          productDetail={productDetail}
        />

        <ModalBidding
          visibleBiddingModal={visibleBiddingModal}
          setVisibleBiddingModal={setVisibleBiddingModal}
          editionValue={editionValue}
          productDetail={productDetail}
        />

        <ModalSimilarArtworks
          setVisibleSimilarArtworksModal={setVisibleSimilarArtworksModal}
          visibleSimilarArtworksModal={visibleSimilarArtworksModal}
          artistProduct={artistProduct}
          productDetail={productDetail}
          artist_id={artist_id}
          getProductDetail={getProductDetail}
        />

        <ModalSendMessage
          visibleShowSendMessage={showSendMessage}
          setVisibleShowSendMessage={setShowSendMessage}
          receiverId={messageReceiverId}
        />
      </div>

      <Footer />
      <ModalShare showShare={showShare} setShowShare={setShowShare} />
    </>
  );
}

export default DetailsArtwork;
