import React, { useEffect, useState } from 'react';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import { Breadcrumb, message, Tabs } from 'antd';
import { t } from 'i18next';

import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import live_veiw_icon from '../../assets/img/artworks/live_view.svg';
import share_icon from '../../assets/img/share.svg';
import like_selected_icon from '../../assets/img/liked_selected.svg';
import artist4 from '../../assets/img/artist-4.jpg';
import circle_plus from '../../assets/img/circle-plus-1.png';
import ask_me_icon from '../../assets/img/ask_me.svg';
import alert_icon from '../../assets/img/alert.svg';
import auction_black_icon from '../../assets/img/auction-black.svg';
import similar_icon from '../../assets/img/similar.svg';
import shiping_icon from '../../assets/img/shipping.svg';
import refund_icon from '../../assets/img/refund.svg';
import secure_payment_icon from '../../assets/img/secure_payment.svg';
import original_icon from '../../assets/img/original.svg';
import more_icon from '../../assets/img/more.svg';
import rdbewaopdm840 from '../../assets/img/mainpage/rdbewaopdm840.jpg';
import hyxvpfinm840 from '../../assets/img/mainpage/hyxvpfinm840.jpg';
import mainpage_3 from '../../assets/img/mainpage/3.jpg';
import hezvtaokhv840 from '../../assets/img/mainpage/hezvtaokhv840.jpg';
import ayvglbkdfo3 from '../../assets/img/mainpage/ayvglbkdfo@3x.jpg';
import edit_icon from '../../assets/img/edit_name.svg';
import ModalEditOffer from './ModalEditOffer';
import ModalSimilarArtworks from './ModalSimilarArtworks';
import ModalBidding from './ModalBidding';
import { ARTIST_PRODUCTS, ORDER_BUYER_ME, PRODUCT_DETAIL } from '../../utils';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import apiServices from '../../utils/api.services';
import QueryString from 'qs';
import queryString from 'query-string'
import { useTranslation } from 'react-i18next';
import moment from 'moment-jalaali';
import momentJalaali from "moment-jalaali";
import { follow } from '../../utils/utils';

function DetailsArtwork() {

    let navigate = useNavigate();

    const { t, i18n } = useTranslation();

    function useQuery() {

        return new URLSearchParams(useLocation().search);

    }
    var id;
    var artist_id;
    var query = useQuery();
    id = query.get("id")
    artist_id = query.get("artist_id")


    const [visibleEditOfferModal, setVisibleEditOfferModal] = useState(false)
    const [visibleSimilarArtworksModal, setVisibleSimilarArtworksModal] = useState(false)
    const [visibleBiddingModal, setVisibleBiddingModal] = useState(false)
    const [productDetail, setProductDetail] = useState();
    const [editionValue, setEditionValue] = useState({});
    const [artistProduct, setArtistProduct] = useState();
    const [offerValue, setOfferValue] = useState();
    const [toggle, setToggle] = useState(false);
    const [params, setParams] = useState({
        search: "",
        page: 1,

    })
    const [artistParams, setArtistParams] = useState({
        artist_id: artist_id,
        search: "",
        page: 1,

    });
    const [followParams, setfollowParams] = useState({
        activity_type : "following",
        content_type : "artist",
        page: 1
    });
    const handleShowModalEditOffer = () => {
        setVisibleEditOfferModal(true)
    }

    const handleShowModalBidding = () => {
        setVisibleBiddingModal(true)
    }

    const handleShowSimilarArtworks = () => {
        setVisibleSimilarArtworksModal(true)
    }


    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }

    const getProductDetail = () => {
        apiServices.get(PRODUCT_DETAIL(id), QueryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setProductDetail(res.data.data)
                    setEditionValue(res.data.data?.items[0])
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }
    const getArtistProduct = () => {
        apiServices.get(ARTIST_PRODUCTS, QueryString.stringify(artistParams))
            .then(res => {
                if (res.data) {
                    setArtistProduct(res.data.data)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }
    const getOfferValue = () => {
        apiServices.get(ORDER_BUYER_ME, QueryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setOfferValue(res.data.data)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    useEffect(() => {
        getProductDetail()
        getArtistProduct()
        getOfferValue()
    }, [params,toggle]);

    console.log("detail", productDetail)
    return (
        <>
            <div className="container mx-auto px-0 w-100">
                <Header />
                <Menu />



                <div className="container">
                    <Breadcrumb className="d-flex box-dir-reverse breadcrumb" separator="">
                        <Breadcrumb.Item>{t("artwork.artibition")}</Breadcrumb.Item>
                        <Breadcrumb.Separator>{'>'}</Breadcrumb.Separator>
                        <Breadcrumb.Item href="">{t("artwork.field.calligram")}</Breadcrumb.Item>
                        <Breadcrumb.Separator>{'>'}</Breadcrumb.Separator>
                        {i18n.language === 'fa-IR' ?
                            <Breadcrumb.Item href="">{productDetail?.translations?.fa?.artist_name}</Breadcrumb.Item>
                            :
                            <Breadcrumb.Item href="">{productDetail?.translations?.en?.artist_name}</Breadcrumb.Item>
                        }
                        <Breadcrumb.Separator>{'>'}</Breadcrumb.Separator>
                        <Breadcrumb.Item className="active persian-num">{productDetail?.unique_code.slice(-12)}</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="clearfix"></div>
                    <div className="d-block d-md-flex box-dir-reverse">
                        <div className="col-md-6 px-0 px-sm-3">
                            <div className="artwork-imggallery">
                                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src={productDetail?.medias && productDetail?.medias[0]?.exact_url} alt="Los Angeles" style={{ maxHeight: '660px' }} />
                                        </div>

                                        <div className="item">
                                            <img src={productDetail?.medias && productDetail?.medias[0]?.exact_url} alt="Chicago" />
                                        </div>
                                    </div>
                                    <ol className="carousel-indicators">
                                        {productDetail?.medias && productDetail?.medias?.map((item) =>
                                            <li data-target="#myCarousel" data-slide-to="0" className="active">
                                                <img src={item.exact_url} height="1776" width="1776" alt=""
                                                    className="img-responsive" />
                                            </li>
                                        )}
                                        {/* <li data-target="#myCarousel" data-slide-to="0" className="active">
                                            <img src={artwork1} height="1776" width="1776" alt=""
                                                className="img-responsive" />
                                        </li>
                                        <li data-target="#myCarousel" data-slide-to="0" className="active">
                                            <img src={artwork1} height="1776" width="1776" alt=""
                                                className="img-responsive" />
                                        </li>
                                        <li data-target="#myCarousel" data-slide-to="1">
                                            <img src={live_veiw_icon} height="72" width="72" alt="" className="img-responsive" />
                                        </li>
                                        <li data-target="#myCarousel" data-slide-to="0" className="active">
                                            <img src={artwork1} height="1776" width="1776" alt=""
                                                className="img-responsive" />
                                        </li>
                                        <li data-target="#myCarousel" data-slide-to="0" className="active">
                                            <img src={artwork1} height="1776" width="1776" alt=""
                                                className="img-responsive" />
                                        </li> */}
                                    </ol>
                                    <div className=" artwork-options pull-dir ">
                                        <div className="share-option ">
                                            <img src={share_icon} height="31" width="31" alt="" />
                                        </div>
                                        <div className="like-option" onClick={() => follow({content:"product",activity:"like"})}>
                                            <img src={like_selected_icon} height="31" width="31" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 px-0 px-sm-3">
                            <div className="artwork-detail artwork-defaultpadding">
                                <div className="d-flex box-dir-reverse ">
                                    <div className="col-xs-3">
                                        <div className="artist-avatar">
                                            <img src={artist4} width="408" height="408" alt=""
                                                className="img-responsive pull-right " />
                                        </div>
                                    </div>
                                    <div className="col-xs-9">
                                        <div className="row box-dir-reverse">
                                            <div className="col-sm-6">
                                                <h2 className="artist-fullname text-dir">
                                                    {i18n.language === 'fa-IR' ?
                                                        productDetail?.translations?.fa?.artist_name
                                                        :
                                                        productDetail?.translations?.en?.artist_name
                                                    }
                                                </h2>
                                                <button type="button" className="btn btn-galleryfollow pull-dir" onClick={() => follow({content:"artist",activity:"following",object_id:artist_id})}>
                                                    <div className="d-flex box-dir-reverse">
                                                        <img src={circle_plus} width="17" height="17" alt="" className="pull-right" />
                                                        <span>{t("artwork.follow")}</span>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="col-sm-6">
                                                <button type="button" className="btn-askme pull-left">
                                                    <img src={ask_me_icon} width="24" height="24" alt="" className="pull-right" />
                                                    <span>{t("artwork.ask_me")}</span>
                                                </button>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="col-xs-12">
                                                <h3 className="artwork-name text-dir">
                                                    {i18n.language === 'fa-IR' ?
                                                        productDetail?.translations?.fa?.title
                                                        :
                                                        productDetail?.translations?.en?.title
                                                    }
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
                                                <span className="col-xs-4 detail-title text-dir">{t("artwork.code")}</span>
                                                <span className="col-xs-8 detail-name persian-num text-dir">{productDetail?.unique_code.slice(-12)}</span>
                                            </div>
                                            <div className="d-flex box-dir-reverse row-listdetail">
                                                <span className="col-xs-4 detail-title text-dir">{t("artwork.field.title")}</span>
                                                <h3 className="col-xs-8 detail-name text-dir">
                                                    {i18n.language === 'fa-IR' ?
                                                        productDetail?.category?.translations?.fa?.title
                                                        :
                                                        productDetail?.category?.translations?.en?.title
                                                    }
                                                </h3>
                                            </div>
                                            <div className="d-flex box-dir-reverse row-listdetail">
                                                <span className="col-xs-4 detail-title text-dir">{t("artwork.technique")}</span>
                                                <h3 className="col-xs-8 detail-name text-dir">
                                                    {i18n.language === 'fa-IR' ?
                                                        productDetail?.technique?.translations?.fa?.title
                                                        :
                                                        productDetail?.technique?.translations?.en?.title
                                                    }
                                                </h3>
                                            </div>
                                            <div className="d-flex box-dir-reverse row-listdetail">
                                                <span className="col-xs-4 detail-title text-dir">{t("artwork.material")}</span>
                                                <h3 className="col-xs-8 detail-name text-dir">
                                                    {i18n.language === 'fa-IR' ?
                                                        productDetail?.material?.translations?.fa?.title
                                                        :
                                                        productDetail?.material?.translations?.en?.title
                                                    }
                                                </h3>
                                            </div>
                                            <div className="d-flex box-dir-reverse row-listdetail">
                                                <span className="col-xs-4 detail-title text-dir">{t("artwork.create_date")}</span>
                                                <h3 className="col-xs-8 detail-name persian-num text-dir">
                                                    {i18n.language === 'fa-IR' ?
                                                        productDetail?.jalali_creation_year
                                                        :
                                                        productDetail?.christian_creation_year
                                                    }

                                                </h3>
                                            </div>
                                            <div className="d-flex box-dir-reverse row-listdetail">
                                                <span className="col-xs-4 detail-title text-dir">{t("artwork.size")}</span>
                                                <h3 className="col-xs-8 detail-name text-dir">
                                                    <span className="dimension-width persian-num">{productDetail?.width}</span>
                                                    <span> در </span>
                                                    <span className="dimension-height persian-num">{productDetail?.height}</span>
                                                </h3>
                                            </div>
                                            <div className="d-flex box-dir-reverse row-listdetail">
                                                <span className="col-xs-4 detail-title text-dir">{t("artwork.count.title")}</span>
                                                <div className="col-xs-8 text-dir">
                                                    <div className="d-flex box-dir-reverse">
                                                        <h3 className="detail-name ">
                                                            <span claclassNamess="persian-num">{productDetail?.items?.length}</span>
                                                            <span>{t("artwork.count.number")}</span>
                                                        </h3>
                                                        <select className="form-control num-select text-dir" id="sel1" onChange={(event) => setEditionValue(event.target.value)}>
                                                            {productDetail?.items?.map((item, index) => <option key={index} value={item} selected={index === 0 ? 'selected' : null}>
                                                                {i18n.language === 'fa-IR' ?
                                                                    ` ادیشن ${item.edition_number}`
                                                                    :
                                                                    ` eddition number ${item.edition_number}`
                                                                }

                                                            </option>)}

                                                            {/* <option value="2">ادیشن 2</option>
                                                            <option value="3">ادیشن 3</option> */}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {console.log("value", editionValue)}
                                <div className="artwork-seller text-dir">
                                    <div className="d-flex box-dir-reverse">
                                        <img src={alert_icon} width="20" height="20" alt="" />
                                        <span className="orangecolor">{
                                            i18n.language === 'fa_IR' ?

                                                momentJalaali(productDetail?.creation_date).locale('fa').fromNow()
                                                :
                                                moment(productDetail?.creation_date).fromNow()
                                        } این اثر قیمت گذاری شده است
                                        </span>
                                    </div>
                                </div>

                                {editionValue?.is_sold ?
                                    <div className="d-block d-md-flex box-dir-reverse artwork-priceblock soldout">
                                        <div className="col px-0">
                                            <div className="d-flex justify-content-center artwork-price">
                                                <span className="artwork-pricenum persian-num">
                                                    {i18n.language === 'fa-IR' ?
                                                        editionValue?.toman_price
                                                        :
                                                        editionValue?.dollar_price
                                                    }</span>
                                                <span>{t("toman")}</span>
                                            </div>
                                        </div>
                                        <div className="col px-0">
                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn btn-artwork-sell w-100">{t("artwork.sold_out")}</button>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="d-block d-md-flex box-dir-reverse artwork-priceblock ">
                                        <div className="col px-0">
                                            <div className="d-flex justify-content-center artwork-price">
                                                <span className="artwork-pricenum persian-num">
                                                    {i18n.language === 'fa-IR' ?
                                                        editionValue?.toman_price
                                                        :
                                                        editionValue?.dollar_price
                                                    }
                                                </span>
                                                <span>{t("toman")}</span>
                                            </div>
                                        </div>
                                        <div className="col px-0">
                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn btn-artwork-sell w-100">{t("artwork.request_buy")}</button>
                                            </div>
                                        </div>
                                    </div>
                                }



                                <div className="artwork-offer">
                                    {offerValue?.results?.map(item => item.product_item_id === editionValue?.id ?
                                        <div className="d-block d-lg-flex box-dir-reverse justify-content-between">
                                            <div className="col px-0">
                                                <p className="pull-dir">{t("artwork.bid_artwork.text1")}
                                                    <strong className="persian-num px-1">
                                                        {i18n.language === 'fa-IR' ?
                                                            item.toman_price + t("toman") + ' '
                                                            :
                                                            item.dollar_price + t("toman") + ' '
                                                        }
                                                    </strong>
                                                    {t("artwork.bid_artwork.text2")} 
                                                    {/* {t("toman")}   */}
                                                    </p>

                                            </div>
                                            <div className="col-2 px-0">
                                                <a href="#" data-toggle="modal" data-target="#modal-edit-offer">
                                                    {item.status === "modified" ?
                                                    <img onClick={handleShowModalEditOffer} src={edit_icon} width="32" height="32" alt="" className="pull-dir" />
                                                    :
                                                    null}
                                                </a>
                                            </div>
                                        </div>

                                        : null)}
                                </div>
                                <div className="artwork-property">
                                    <ul>
                                        <div className="d-block d-lg-flex box-dir-reverse">
                                            <li className="col-lg-6 text-dir ">{t("artwork.veiw_home")}</li>
                                            <li className="col-lg-6 important text-dir">{t("artwork.shipment")}</li>
                                        </div>
                                        <div className="d-block d-lg-flex box-dir-reverse">
                                            <li className="col-lg-6 text-dir ">{t("artwork.show_collector")}</li>
                                            <li className="col-lg-6 text-dir ">{t("artwork.visit_artwork")}</li>
                                        </div>
                                    </ul>
                                    <div className="clearfix"></div>
                                    {editionValue?.is_sold ?

                                    <div className="row">
                                        <div className="col-xs-12">
                                            <button onClick={handleShowSimilarArtworks} type="button" className="btn btn-artworksimilar" data-toggle="modal"
                                                data-target="#modal-similar-artwork">
                                                <div className="d-flex box-dir-reverse justify-content-center">
                                                    <img src={similar_icon} width="24" height="24" alt="" />
                                                    <span>{t("artwork.veiw_simillar_artworks")}</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    :
                                    offerValue?.results?.map(item => item.product_item_id === editionValue?.id ? true : false) ?
                                        <div className="row">
                                        <div className="col-xs-12">
                                            <button onClick={handleShowSimilarArtworks} type="button" className="btn btn-artworksimilar" data-toggle="modal"
                                                data-target="#modal-similar-artwork">
                                                <div className="d-flex box-dir-reverse justify-content-center">
                                                    <img src={similar_icon} width="24" height="24" alt="" />
                                                    <span>{t("artwork.veiw_simillar_artworks")}</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    :
                                    <div className="d-flex box-dir-reverse">
                                        <div className="col-xs-6">
                                            <button onClick={handleShowModalBidding} disabled={!productDetail?.can_bid} type="button" className="btn btn-artworksimilar" data-toggle="modal"
                                                data-target="#modal-replied-suggestion1">
                                                <div className="d-flex box-dir-reverse">
                                                    <img src={auction_black_icon} width="24" height="24" alt="" />
                                                    <span>{t("artwork.bidding")}</span>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="col-xs-6">
                                            <button onClick={handleShowSimilarArtworks} type="button" className="btn btn-artworksimilar" data-toggle="modal"
                                                data-target="#modal-similar-artwork">
                                                <div className="d-flex box-dir-reverse">
                                                    <img src={similar_icon} width="24" height="24" alt="" />
                                                    <span>{t("artwork.simillar_artworks")}</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="d-blcok d-lg-flex box-dir-reverse row-property">
                        <div className="col">
                            <div className="row box-dir-reverse ">
                                <div className="col-12 col-md-6 col-xl-3">
                                    <div className="d-flex box-dir-reverse align-items-center p-2">
                                        <img src={shiping_icon} width="40" height="40" alt="" className="pull-dir" />
                                        <h6>{t("artwork.delivery")}</h6>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-3">
                                    <div className="d-flex box-dir-reverse align-items-center p-2">
                                        <img src={refund_icon} width="40" height="40" alt="" className="pull-dir" />
                                        <h6><span className="persian-num">7</span>{t("artwork.referral")}</h6>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-3">
                                    <div className="d-flex box-dir-reverse align-items-center p-2">
                                        <img src={secure_payment_icon} width="40" height="40" alt="" className="pull-dir" />
                                        <h6>{t("artwork.safe_payment")}</h6>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-3">
                                    <div className="d-flex box-dir-reverse align-items-center p-2">
                                        <img src={original_icon} width="40" height="40" alt="" className="pull-dir" />
                                        <h6>{t("artwork.originality_guaranteed")}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <Tabs className='' defaultActiveKey="1" onChange={callback}>
                        <TabPane className="mx-4" tab={t("artwork.about_artwork.tab_title")} key="1">
                            <p className="text-dir">
                                {/* {t("artwork.about_artwork.text")} */}
                                {i18n.language === 'fa-IR' ?
                                    productDetail?.translations?.fa?.about
                                    :
                                    productDetail?.translations?.en?.about
                                }
                                <button type="button" className="btn-moredown">
                                    <span>{t("artwork.about_artwork.more")}</span>
                                    <img src={more_icon} width="16" height="16" alt="" className="pull-dir px-2" />
                                </button>
                            </p>
                        </TabPane>
                        <TabPane tab={t("artwork.about_artist.tab_title")} key="2">
                            <div className="text-dir">
                                <h3>Menu 1</h3>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo
                                    consequat.
                                </p>
                            </div>
                        </TabPane>

                    </Tabs>


                    <div className="row box-dir-reverse content-tags">
                        <div className="col">
                            <div className="public-header">
                                <h2 className="default-title text-dir">{t("artwork.tags.title")}</h2>
                            </div>
                            <ul className="d-flex tags-horizontal box-dir-reverse">
                                {productDetail?.tags?.map(item =>
                                    <li><a href="#">{item.title}</a></li>
                                )}
                                {/* <li><a href="#">{t("artwork.tags.composition")}</a></li>
                                <li><a href="#">{t("artwork.tags.canvas")}</a></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className=" artwork-artist">
                        <div className="public-header">
                            <div className="row box-dir-reverse">
                                <div className="col-xs-8 text-dir">
                                    <h2 className="default-title text-dir"> {t("artwork.other_artworks")}
                                        {i18n.language === 'fa-IR' ?
                                            productDetail?.translations?.fa?.artist_name
                                            :
                                            productDetail?.translations?.en?.artist_name
                                        }


                                    </h2>
                                </div>
                                <div className="col-xs-4">
                                    <div className="d-flex box-dir-reverse justify-custom">
                                        {/* <a href="#" className="btn-readmore pull-dir">همه آثار<span className="hidden-xs">هنرمند</span></a> */}
                                        <div className="btn-readmore pull-left ">{t("artwork.all_artworks_artist.text1")}<span className="hidden-xs">{t("artwork.all_artworks_artist.text2")}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ overflow: 'auto' }} className="d-flex owl-carousel">
                            {/* {console.log("artistProduct",artistProduct)} */}
                            {artistProduct?.results?.map((item,index) => 
                            <div className="cols mx-4 pb-3">
                                <div className="col-img">
                                    <img src={item.medias[0]?.exact_url} width="840" height="840"
                                        alt="آرتیبیشن"
                                        className="img-responsive" />
                                    <div className="tab-overly">
                                        <a onClick={() => {
                                            navigate(`/site/artworks-detail/?id=${item.id}&artist_id=${item.artist_id}`)
                                            setToggle(!toggle)
                                    }}  className="btn-see">
                                            <span className="view-icon pull-right"></span>
                                            <span>مشاهده اثر</span>
                                        </a>
                                        <a href="#" className="btn-sale">درخواست خرید</a>
                                        <a href="#" className="like-icon"></a>
                                    </div>
                                </div>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">
                                        {i18n.language === 'fa-IR' ?
                                        item.translations?.fa?.artist_name
                                        :
                                        item.translations?.en?.artist_name
                                }
                                        </span>
                                    </h6>
                                    <div className="col-dimension">
                                        <span className="col-dimension-title">ابعاد:</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">{item.width}</span>
                                            <span> در </span>
                                            <span className="dimension-height">{item.height}</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">
                                        {i18n.language === 'fa-IR' ?
                                        item.toman_price
                                        :
                                        item.dollar_price
                            }
                                        </span>
                                        <span className="col-price-unit">تومان</span>
                                        <span className="persian-num col-price-off">2.000.000</span>
                                    </div>
                                </div>
                            </div>
                            )}
                            {/* <div className="cols mx-4 pb-3">
                                <div className="col-img">
                                    <img src={hyxvpfinm840} width="840" height="840" alt="آرتیبیشن"
                                        className="img-responsive" />
                                    <div className="tab-overly">
                                        <a href="#" className="btn-see">
                                            <span className="view-icon pull-right"></span>
                                            <span>مشاهده اثر</span>
                                        </a>
                                        <a href="#" className="btn-sale">درخواست خرید</a>
                                        <a href="#" className="like-icon"></a>
                                    </div>
                                </div>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">ساناز</span>
                                        <span className="col-name">دزفولیان</span>
                                    </h6>
                                    <div className="col-dimension">
                                        <span className="col-dimension-title">ابعاد:</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span> در </span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">2.100.000</span>
                                        <span className="col-price-unit">تومان</span>
                                        <span className="persian-num col-price-off">5.000.000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cols mx-4 pb-3">
                                <div className="col-img">
                                    <img src={mainpage_3} width="840" height="840" alt="آرتیبیشن"
                                        className="img-responsive" />
                                    <div className="tab-overly">
                                        <a href="#" className="btn-see">
                                            <span className="view-icon pull-right"></span>
                                            <span>مشاهده اثر</span>
                                        </a>
                                        <a href="#" className="btn-sale">درخواست خرید</a>
                                        <a href="#" className="like-icon"></a>
                                    </div>
                                </div>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">مرتضی</span>
                                        <span className="col-name">گودرزی دیباج</span>
                                    </h6>
                                    <div className="col-dimension">
                                        <span className="col-dimension-title">ابعاد:</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span> در </span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">تومان</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cols mx-4 pb-3">
                                <div className="col-img">
                                    <img src={hezvtaokhv840} width="840" height="840"
                                        alt="آرتیبیشن"
                                        className="img-responsive" />
                                    <div className="tab-overly">
                                        <a href="#" className="btn-see">
                                            <span className="view-icon pull-right"></span>
                                            <span>مشاهده اثر</span>
                                        </a>
                                        <a href="#" className="btn-sale">درخواست خرید</a>
                                        <a href="#" className="like-icon"></a>
                                    </div>
                                </div>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">سعید</span>
                                        <span className="col-name">امدادیان</span>
                                    </h6>
                                    <div className="col-dimension">
                                        <span className="col-dimension-title">ابعاد:</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span> در </span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">6.000.000</span>
                                        <span className="col-price-unit">تومان</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="clearfix"></div>


                        <div className="public-header">
                            <h2 className="default-title text-dir">{t("suggestion-home.title")}</h2>
                        </div>
                        <div style={{ overflow: 'auto' }} className="owl-carousel d-flex" id="tab4">

                            <a href="#" className="cols  mx-4 pb-4">
                                <div className="col-img">
                                    <div className="tags tags-off persian-num">30 %</div>
                                    <img

                                        src={ayvglbkdfo3}
                                        alt="آرتیبیشن"
                                        className="img-responsive" />
                                    <div className="tab-overly">
                                        <span className="btn-see hidden-xs hidden-sm">
                                            <span className="view-icon pull-right"></span>
                                            <span>مشاهده اثر</span>
                                        </span>
                                        <button type="button" className="btn-sale">
                                            <span className="hidden-xs hidden-sm">درخواست خرید</span>
                                            <span className="shopping-cart-xs visible-xs visible-sm"></span>
                                        </button>
                                        <button type="button" className="like-icon isLike"></button>
                                    </div>
                                </div>
                                <div className="col-body">
                                    <h6 className="col-title text-dir">
                                        <span className="col-name">رضا</span>
                                        <span className="col-name">حسینی</span>
                                    </h6>
                                    <div className="col-dimension text-dir">

                                        <div className="d-flex box-dir-reverse">
                                            <span className="col-dimension-title">{t("card_artwork.size.title")}</span>
                                            <span className="col-dimension-body mx-2">
                                                <div className="d-flex">
                                                    <span className="dimension-width">60</span>
                                                    <span className="mx-2">{t("card_artwork.size.in")}</span>
                                                    <span className="dimension-height ">60</span>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-price text-dir">
                                        <div className="d-flex box-dir-reverse">
                                            <span className="col-price-num">22.000.000</span>
                                            <span className="col-price-unit">{t("toman")}</span>
                                            <span className="persian-num col-price-off">5.000.000</span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="#" className="cols mx-4 pb-4">
                                <div className="col-img">
                                    <div className="tags tags-spacial">ویژه</div>
                                    <div className="tags tags-off persian-num">30 %</div>
                                    <img

                                        src={mainpage_3}
                                        alt="آرتیبیشن"
                                        className="img-responsive" />
                                    <div className="tab-overly">
                                        <span className="btn-see hidden-xs hidden-sm">
                                            <span className="view-icon pull-right"></span>
                                            <span>مشاهده اثر</span>
                                        </span>
                                        <button type="button" className="btn-sale">
                                            <span className="hidden-xs hidden-sm">درخواست خرید</span>
                                            <span className="shopping-cart-xs visible-xs visible-sm"></span>
                                        </button>
                                        <button type="button" className="like-icon isLike"></button>
                                    </div>
                                </div>
                                <div className="col-body">
                                    <h6 className="col-title text-dir">
                                        <span className="col-name">رضا</span>
                                        <span className="col-name">حسینی</span>
                                    </h6>
                                    <div className="col-dimension text-dir">

                                        <div className="d-flex box-dir-reverse">
                                            <span className="col-dimension-title">{t("card_artwork.size.title")}</span>
                                            <span className="col-dimension-body mx-2">
                                                <div className="d-flex">
                                                    <span className="dimension-width">60</span>
                                                    <span className="mx-2">{t("card_artwork.size.in")}</span>
                                                    <span className="dimension-height ">60</span>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-price text-dir">
                                        <div className="d-flex box-dir-reverse">
                                            <span className="col-price-num">22.000.000</span>
                                            <span className="col-price-unit">{t("toman")}</span>
                                            <span className="persian-num col-price-off">5.000.000</span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="#" className="cols  mx-4 pb-4">
                                <div className="col-img">
                                    <div className="tags tags-off persian-num">30 %</div>
                                    <img

                                        src={rdbewaopdm840}
                                        alt="آرتیبیشن"
                                        className="img-responsive" />
                                    <div className="tab-overly">
                                        <span className="btn-see hidden-xs hidden-sm">
                                            <span className="view-icon pull-right"></span>
                                            <span>مشاهده اثر</span>
                                        </span>
                                        <button type="button" className="btn-sale">
                                            <span className="hidden-xs hidden-sm">درخواست خرید</span>
                                            <span className="shopping-cart-xs visible-xs visible-sm"></span>
                                        </button>
                                        <button type="button" className="like-icon isLike"></button>
                                    </div>
                                </div>
                                <div className="col-body">
                                    <h6 className="col-title text-dir">
                                        <span className="col-name">رضا</span>
                                        <span className="col-name">حسینی</span>
                                    </h6>
                                    <div className="col-dimension text-dir">

                                        <div className="d-flex box-dir-reverse">
                                            <span className="col-dimension-title">{t("card_artwork.size.title")}</span>
                                            <span className="col-dimension-body mx-2">
                                                <div className="d-flex">
                                                    <span className="dimension-width">60</span>
                                                    <span className="mx-2">{t("card_artwork.size.in")}</span>
                                                    <span className="dimension-height ">60</span>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-price text-dir">
                                        <div className="d-flex box-dir-reverse">
                                            <span className="col-price-num">22.000.000</span>
                                            <span className="col-price-unit">{t("toman")}</span>
                                            <span className="persian-num col-price-off">5.000.000</span>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="#" className="cols  mx-4 pb-4">
                                <div className="col-img">
                                    <div className="tags tags-off persian-num">30 %</div>
                                    <img

                                        src={hezvtaokhv840}
                                        alt="آرتیبیشن"
                                        className="img-responsive" />
                                    <div className="tab-overly">
                                        <span className="btn-see hidden-xs hidden-sm">
                                            <span className="view-icon pull-right"></span>
                                            <span>مشاهده اثر</span>
                                        </span>
                                        <button type="button" className="btn-sale">
                                            <span className="hidden-xs hidden-sm">درخواست خرید</span>
                                            <span className="shopping-cart-xs visible-xs visible-sm"></span>
                                        </button>
                                        <button type="button" className="like-icon isLike"></button>
                                    </div>
                                </div>
                                <div className="col-body">
                                    <h6 className="col-title text-dir">
                                        <span className="col-name">رضا</span>
                                        <span className="col-name">حسینی</span>
                                    </h6>
                                    <div className="col-dimension text-dir">

                                        <div className="d-flex box-dir-reverse">
                                            <span className="col-dimension-title">{t("card_artwork.size.title")}</span>
                                            <span className="col-dimension-body mx-2">
                                                <div className="d-flex">
                                                    <span className="dimension-width">60</span>
                                                    <span className="mx-2">{t("card_artwork.size.in")}</span>
                                                    <span className="dimension-height ">60</span>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-price text-dir">
                                        <div className="d-flex box-dir-reverse">
                                            <span className="col-price-num">22.000.000</span>
                                            <span className="col-price-unit">{t("toman")}</span>
                                            <span className="persian-num col-price-off">5.000.000</span>
                                        </div>
                                    </div>
                                </div>
                            </a>




                        </div>
                    </div>


















                    <div className="recently-view">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="default-title text-dir">{t("my-recent-views-home.title")}</h2>
                            </div>
                            <div className="col-xs-12">
                                <div className="default-tab tab-3 tab-interval">
                                    <div className="tab-overflow">
                                        <ul className="nav nav-tabs" id="alltab-3">
                                            <li className="active"><a data-toggle="tab" href="#home">{t("nav-submenu.artworks.artField.all")}</a></li>
                                            <li><a data-toggle="tab" href="#menu1">{t("nav-submenu.artworks.artField.painting")}</a></li>
                                            <li><a data-toggle="tab" href="#menu2">{t("nav-submenu.artworks.artField.calligraphy")}</a></li>
                                            <li><a data-toggle="tab" href="#menu3">{t("nav-submenu.artworks.artField.photography")}</a></li>
                                            <li><a data-toggle="tab" href="#menu4">{t("nav-submenu.artworks.artField.sculpture")}</a></li>
                                            <li><a data-toggle="tab" href="#menu5">{t("nav-submenu.artworks.artField.calligram")}</a></li>
                                            <li><a data-toggle="tab" href="#menu6">{t("nav-submenu.artworks.artField.graphic")}</a></li>
                                            <li><a data-toggle="tab" href="#menu7">{t("nav-submenu.artworks.artField.printmaking")}</a></li>
                                            <li><a data-toggle="tab" href="#menu8">{t("nav-submenu.artworks.artField.drawing")}</a></li>
                                        </ul>
                                    </div>
                                    <div className="tab-content">
                                        <div id="view" className="tab-pane fade in active">

                                            <div style={{ overflow: 'auto' }} className="owl-carousel d-flex" id="tab4">
                                                <a href="#" className="cols  mx-4 pb-4">
                                                    <div className="col-img">
                                                        <div className="tags tags-off persian-num">30 %</div>
                                                        <img

                                                            src={ayvglbkdfo3}
                                                            alt="آرتیبیشن"
                                                            className="img-responsive" />
                                                        <div className="tab-overly">
                                                            <span className="btn-see hidden-xs hidden-sm">
                                                                <span className="view-icon pull-right"></span>
                                                                <span>مشاهده اثر</span>
                                                            </span>
                                                            <button type="button" className="btn-sale">
                                                                <span className="hidden-xs hidden-sm">درخواست خرید</span>
                                                                <span className="shopping-cart-xs visible-xs visible-sm"></span>
                                                            </button>
                                                            <button type="button" className="like-icon isLike"></button>
                                                        </div>
                                                    </div>
                                                    <div className="col-body">
                                                        <h6 className="col-title text-dir">
                                                            <span className="col-name">رضا</span>
                                                            <span className="col-name">حسینی</span>
                                                        </h6>
                                                        <div className="col-dimension text-dir">

                                                            <div className="d-flex box-dir-reverse">
                                                                <span className="col-dimension-title">{t("card_artwork.size.title")}</span>
                                                                <span className="col-dimension-body mx-2">
                                                                    <div className="d-flex">
                                                                        <span className="dimension-width">60</span>
                                                                        <span className="mx-2">{t("card_artwork.size.in")}</span>
                                                                        <span className="dimension-height ">60</span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-price text-dir">
                                                            <div className="d-flex box-dir-reverse">
                                                                <span className="col-price-num">22.000.000</span>
                                                                <span className="col-price-unit">{t("toman")}</span>
                                                                <span className="persian-num col-price-off">5.000.000</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a href="#" className="cols mx-4 pb-4">
                                                    <div className="col-img">
                                                        <div className="tags tags-spacial">ویژه</div>
                                                        <div className="tags tags-off persian-num">30 %</div>
                                                        <img

                                                            src={mainpage_3}
                                                            alt="آرتیبیشن"
                                                            className="img-responsive" />
                                                        <div className="tab-overly">
                                                            <span className="btn-see hidden-xs hidden-sm">
                                                                <span className="view-icon pull-right"></span>
                                                                <span>مشاهده اثر</span>
                                                            </span>
                                                            <button type="button" className="btn-sale">
                                                                <span className="hidden-xs hidden-sm">درخواست خرید</span>
                                                                <span className="shopping-cart-xs visible-xs visible-sm"></span>
                                                            </button>
                                                            <button type="button" className="like-icon isLike"></button>
                                                        </div>
                                                    </div>
                                                    <div className="col-body">
                                                        <h6 className="col-title text-dir">
                                                            <span className="col-name">رضا</span>
                                                            <span className="col-name">حسینی</span>
                                                        </h6>
                                                        <div className="col-dimension text-dir">

                                                            <div className="d-flex box-dir-reverse">
                                                                <span className="col-dimension-title">{t("card_artwork.size.title")}</span>
                                                                <span className="col-dimension-body mx-2">
                                                                    <div className="d-flex">
                                                                        <span className="dimension-width">60</span>
                                                                        <span className="mx-2">{t("card_artwork.size.in")}</span>
                                                                        <span className="dimension-height ">60</span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-price text-dir">
                                                            <div className="d-flex box-dir-reverse">
                                                                <span className="col-price-num">22.000.000</span>
                                                                <span className="col-price-unit">{t("toman")}</span>
                                                                <span className="persian-num col-price-off">5.000.000</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a href="#" className="cols  mx-4 pb-4">
                                                    <div className="col-img">
                                                        <div className="tags tags-off persian-num">30 %</div>
                                                        <img

                                                            src={rdbewaopdm840}
                                                            alt="آرتیبیشن"
                                                            className="img-responsive" />
                                                        <div className="tab-overly">
                                                            <span className="btn-see hidden-xs hidden-sm">
                                                                <span className="view-icon pull-right"></span>
                                                                <span>مشاهده اثر</span>
                                                            </span>
                                                            <button type="button" className="btn-sale">
                                                                <span className="hidden-xs hidden-sm">درخواست خرید</span>
                                                                <span className="shopping-cart-xs visible-xs visible-sm"></span>
                                                            </button>
                                                            <button type="button" className="like-icon isLike"></button>
                                                        </div>
                                                    </div>
                                                    <div className="col-body">
                                                        <h6 className="col-title text-dir">
                                                            <span className="col-name">رضا</span>
                                                            <span className="col-name">حسینی</span>
                                                        </h6>
                                                        <div className="col-dimension text-dir">

                                                            <div className="d-flex box-dir-reverse">
                                                                <span className="col-dimension-title">{t("card_artwork.size.title")}</span>
                                                                <span className="col-dimension-body mx-2">
                                                                    <div className="d-flex">
                                                                        <span className="dimension-width">60</span>
                                                                        <span className="mx-2">{t("card_artwork.size.in")}</span>
                                                                        <span className="dimension-height ">60</span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-price text-dir">
                                                            <div className="d-flex box-dir-reverse">
                                                                <span className="col-price-num">22.000.000</span>
                                                                <span className="col-price-unit">{t("toman")}</span>
                                                                <span className="persian-num col-price-off">5.000.000</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a href="#" className="cols  mx-4 pb-4">
                                                    <div className="col-img">
                                                        <div className="tags tags-off persian-num">30 %</div>
                                                        <img

                                                            src={hezvtaokhv840}
                                                            alt="آرتیبیشن"
                                                            className="img-responsive" />
                                                        <div className="tab-overly">
                                                            <span className="btn-see hidden-xs hidden-sm">
                                                                <span className="view-icon pull-right"></span>
                                                                <span>مشاهده اثر</span>
                                                            </span>
                                                            <button type="button" className="btn-sale">
                                                                <span className="hidden-xs hidden-sm">درخواست خرید</span>
                                                                <span className="shopping-cart-xs visible-xs visible-sm"></span>
                                                            </button>
                                                            <button type="button" className="like-icon isLike"></button>
                                                        </div>
                                                    </div>
                                                    <div className="col-body">
                                                        <h6 className="col-title text-dir">
                                                            <span className="col-name">رضا</span>
                                                            <span className="col-name">حسffffffffینی</span>
                                                        </h6>
                                                        <div className="col-dimension text-dir">

                                                            <div className="d-flex box-dir-reverse">
                                                                <span className="col-dimension-title">{t("card_artwork.size.title")}</span>
                                                                <span className="col-dimension-body mx-2">
                                                                    <div className="d-flex">
                                                                        <span className="dimension-width">60</span>
                                                                        <span className="mx-2">{t("card_artwork.size.in")}</span>
                                                                        <span className="dimension-height ">60</span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-price text-dir">
                                                            <div className="d-flex box-dir-reverse">
                                                                <span className="col-price-num">22.000.000</span>
                                                                <span className="col-price-unit">{t("toman")}</span>
                                                                <span className="persian-num col-price-off">5.000.000</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>

                                            </div>
                                        </div>
                                        <div id="view1" className="tab-pane fade">
                                            <h3>Menu 1</h3>
                                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo
                                                consequat.</p>
                                        </div>
                                        <div id="view2" className="tab-pane fade">
                                            <h3>Menu 2</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                                laudantium,
                                                totam rem aperiam.</p>
                                        </div>
                                        <div id="view3" className="tab-pane fade">
                                            <h3>Menu 3</h3>
                                            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                                explicabo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                />

            </div>

            <Footer />
        </>
    )
}

export default DetailsArtwork
