import React , {useState} from 'react';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import { Breadcrumb , Tabs } from 'antd';
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

function DetailsArtwork() {

    const [visibleEditOfferModal, setVisibleEditOfferModal] = useState(false)
    const [visibleSimilarArtworksModal, setVisibleSimilarArtworksModal] = useState(false)
    const [visibleBiddingModal, setVisibleBiddingModal] = useState(false)

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


    return (
        <>
      <div className="container mx-auto px-0 w-100">
        <Header />
        <Menu />



        <div class="container">
            <Breadcrumb class="d-flex box-dir-reverse breadcrumb" separator="">
                <Breadcrumb.Item>{t("artwork.artibition")}</Breadcrumb.Item>
                <Breadcrumb.Separator>{'>'}</Breadcrumb.Separator>
                <Breadcrumb.Item href="">{t("artwork.field.calligram")}</Breadcrumb.Item>
                <Breadcrumb.Separator>{'>'}</Breadcrumb.Separator>
                <Breadcrumb.Item href="">بهروز زیندشتی</Breadcrumb.Item>
                <Breadcrumb.Separator>{'>'}</Breadcrumb.Separator>
                <Breadcrumb.Item class="active persian-num">۲۵۷۲۷۰۱۴۷۴</Breadcrumb.Item>
            </Breadcrumb>

            <div class="clearfix"></div>
            <div class="d-block d-md-flex box-dir-reverse">
                <div class="col-md-6 px-0 px-sm-3">
                    <div class="artwork-imggallery">
                        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="item active">
                                    <img src={artwork1} alt="Los Angeles"/>
                                </div>

                                <div class="item">
                                    <img src={artwork1} alt="Chicago"/>
                                </div>
                            </div>
                            <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active">
                                    <img src={artwork1} height="1776" width="1776" alt=""
                                        class="img-responsive"/>
                                </li>
                                <li data-target="#myCarousel" data-slide-to="0" class="active">
                                    <img src={artwork1} height="1776" width="1776" alt=""
                                        class="img-responsive"/>
                                </li>
                                <li data-target="#myCarousel" data-slide-to="0" class="active">
                                    <img src={artwork1} height="1776" width="1776" alt=""
                                        class="img-responsive"/>
                                </li>
                                <li data-target="#myCarousel" data-slide-to="1">
                                    <img src={live_veiw_icon} height="72" width="72" alt="" class="img-responsive"/>
                                </li>
                                <li data-target="#myCarousel" data-slide-to="0" class="active">
                                    <img src={artwork1} height="1776" width="1776" alt=""
                                        class="img-responsive"/>
                                </li>
                                <li data-target="#myCarousel" data-slide-to="0" class="active">
                                    <img src={artwork1} height="1776" width="1776" alt=""
                                        class="img-responsive"/>
                                </li>
                            </ol>
                            <div class=" artwork-options pull-dir ">
                                <div class="share-option ">
                                    <img src={share_icon} height="31" width="31" alt=""/>
                                </div>
                                <div class="like-option">
                                    <img src={like_selected_icon} height="31" width="31" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 px-0 px-sm-3">
                    <div class="artwork-detail artwork-defaultpadding">
                        <div class="d-flex box-dir-reverse ">
                            <div class="col-xs-3">
                                <div class="artist-avatar">
                                    <img src={artist4} width="408" height="408" alt=""
                                        class="img-responsive pull-right "/>
                                </div>
                            </div>
                            <div class="col-xs-9">
                                <div class="row box-dir-reverse">
                                    <div class="col-sm-6">
                                        <h2 class="artist-fullname text-dir">بهروز زیندشتی</h2>
                                        <button type="button" class="btn btn-galleryfollow pull-dir">
                                            <div className="d-flex box-dir-reverse">
                                                <img src={circle_plus} width="17" height="17" alt="" class="pull-right"/>
                                                <span>{t("artwork.follow")}</span>
                                            </div>
                                        </button>
                                    </div>
                                    <div class="col-sm-6">
                                        <button type="button" class="btn-askme pull-left">
                                            <img src={ask_me_icon} width="24" height="24" alt="" class="pull-right"/>
                                            <span>{t("artwork.ask_me")}</span>
                                        </button>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="col-xs-12">
                                        <h3 class="artwork-name text-dir">{t("artwork.untitle")}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="artwork-microdetail">
                            <div class="d-flex">
                                <div class="col-xs-12">
                                    <div class="d-flex box-dir-reverse row-listdetail">
                                        <span class="col-xs-4 detail-title text-dir">{t("artwork.code")}</span>
                                        <span class="col-xs-8 detail-name persian-num text-dir">۲۵۷۲۷۰۱۴۷۴</span>
                                    </div>
                                    <div class="d-flex box-dir-reverse row-listdetail">
                                        <span class="col-xs-4 detail-title text-dir">{t("artwork.field.title")}</span>
                                        <h3 class="col-xs-8 detail-name text-dir">{t("artwork.field.calligram")}</h3>
                                    </div>
                                    <div class="d-flex box-dir-reverse row-listdetail">
                                        <span class="col-xs-4 detail-title text-dir">{t("artwork.technique")}</span>
                                        <h3 class="col-xs-8 detail-name text-dir">{t("artwork.tags.composition")}</h3>
                                    </div>
                                    <div class="d-flex box-dir-reverse row-listdetail">
                                        <span class="col-xs-4 detail-title text-dir">{t("artwork.material")}</span>
                                        <h3 class="col-xs-8 detail-name text-dir">{t("artwork.tags.canvas")}</h3>
                                    </div>
                                    <div class="d-flex box-dir-reverse row-listdetail">
                                        <span class="col-xs-4 detail-title text-dir">{t("artwork.create_date")}</span>
                                        <h3 class="col-xs-8 detail-name persian-num text-dir">۱۳۹۵</h3>
                                    </div>
                                    <div class="d-flex box-dir-reverse row-listdetail">
                                        <span class="col-xs-4 detail-title text-dir">{t("artwork.size")}</span>
                                        <h3 class="col-xs-8 detail-name text-dir">
                                            <span class="dimension-width persian-num">60</span>
                                            <span> در </span>
                                            <span class="dimension-height persian-num">60</span>
                                        </h3>
                                    </div>
                                    <div class="d-flex box-dir-reverse row-listdetail">
                                        <span class="col-xs-4 detail-title text-dir">{t("artwork.count.title")}</span>
                                        <div class="col-xs-8 text-dir">
                                            <div className="d-flex box-dir-reverse">
                                                <h3 class="detail-name ">
                                                    <span class="persian-num">3</span>
                                                    <span>{t("artwork.count.number")}</span>
                                                </h3>
                                                <select class="form-control num-select text-dir" id="sel1">
                                                    <option> ادیشن 1</option>
                                                    <option>ادیشن 2</option>
                                                    <option>ادیشن 3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="artwork-seller text-dir">
                            <div className="d-flex box-dir-reverse">
                                <img src={alert_icon} width="20" height="20" alt=""/>
                                <span class="orangecolor">{t("artwork.alarm")}</span>
                            </div>
                        </div>
          

                        <div className="d-block d-md-flex box-dir-reverse artwork-priceblock ">
                            <div className="col px-0">
                                <div class="d-flex justify-content-center artwork-price">
                                    <span class="artwork-pricenum persian-num">۴,۰۰۰,۰۰۰</span>
                                    <span>{t("toman")}</span>
                                </div>
                            </div>
                            <div className="col px-0">
                                <div className="d-flex justify-content-center">
                                    <button type="button" class="btn btn-artwork-sell w-100">{t("artwork.request_buy")}</button>
                                </div>
                            </div>
                        </div>

                        <div className="d-block d-md-flex box-dir-reverse artwork-priceblock soldout">
                            <div className="col px-0">
                                <div class="d-flex justify-content-center artwork-price">
                                    <span class="artwork-pricenum persian-num">۴,۰۰۰,۰۰۰</span>
                                    <span>{t("toman")}</span>
                                </div>
                            </div>
                            <div className="col px-0">
                                <div className="d-flex justify-content-center">
                                    <button type="button" class="btn btn-artwork-sell w-100">{t("artwork.sold_out")}</button>
                                </div>
                            </div>
                        </div>

                     
                        <div class="artwork-offer">
                            <div class="d-block d-lg-flex box-dir-reverse justify-content-between">
                                <div class="col px-0">
                                    <p class="pull-dir">{t("artwork.bid_artwork.text1")}
                                        <strong class="persian-num px-1">۳,۵۰۰,۰۰۰</strong>
                                        {t("artwork.bid_artwork.text2")} {t("toman")}  </p>
                                    
                                </div>
                                <div className="col-2 px-0">
                                <a href="#" data-toggle="modal" data-target="#modal-edit-offer">
                                        <img onClick={handleShowModalEditOffer} src={edit_icon} width="32" height="32" alt="" class="pull-dir"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="artwork-property">
                            <ul>
                                <div className="d-block d-lg-flex box-dir-reverse">
                                    <li class="col-lg-6 text-dir ">{t("artwork.veiw_home")}</li>
                                    <li class="col-lg-6 important text-dir">{t("artwork.shipment")}</li>
                                </div>
                                <div className="d-block d-lg-flex box-dir-reverse">
                                    <li class="col-lg-6 text-dir ">{t("artwork.show_collector")}</li>
                                    <li class="col-lg-6 text-dir ">{t("artwork.visit_artwork")}</li>
                                </div>
                            </ul>
                            <div class="clearfix"></div>
                            <div class="d-flex box-dir-reverse">
                                <div class="col-xs-6">
                                    <button onClick={handleShowModalBidding} type="button" class="btn btn-artworksimilar" data-toggle="modal"
                                            data-target="#modal-replied-suggestion1">
                                        <div class="d-flex box-dir-reverse">
                                            <img src={auction_black_icon} width="24" height="24" alt=""/>
                                            <span>{t("artwork.bidding")}</span>
                                        </div>
                                    </button>
                                </div>
                                <div class="col-xs-6">
                                    <button onClick={handleShowSimilarArtworks} type="button" class="btn btn-artworksimilar" data-toggle="modal"
                                            data-target="#modal-similar-artwork">
                                        <div class="d-flex box-dir-reverse">
                                            <img src={similar_icon} width="24" height="24" alt=""/>
                                            <span>{t("artwork.simillar_artworks")}</span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-12">
                                    <button onClick={handleShowSimilarArtworks} type="button" class="btn btn-artworksimilar" data-toggle="modal"
                                            data-target="#modal-similar-artwork">
                                        <div class="d-flex box-dir-reverse justify-content-center">
                                            <img src={similar_icon} width="24" height="24" alt=""/>
                                            <span>{t("artwork.veiw_simillar_artworks")}</span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div className="d-blcok d-lg-flex box-dir-reverse row-property">
                <div className="col">
                    <div className="row box-dir-reverse ">
                        <div className="col-12 col-md-6 col-xl-3">
                            <div className="d-flex box-dir-reverse align-items-center p-2">
                                <img src={shiping_icon} width="40" height="40" alt="" class="pull-dir"/>
                                <h6>{t("artwork.delivery")}</h6>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <div className="d-flex box-dir-reverse align-items-center p-2">
                                <img src={refund_icon} width="40" height="40" alt="" class="pull-dir"/>
                                <h6><span class="persian-num">7</span>{t("artwork.referral")}</h6>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <div className="d-flex box-dir-reverse align-items-center p-2">
                                <img src={secure_payment_icon} width="40" height="40" alt="" class="pull-dir"/>
                                <h6>{t("artwork.safe_payment")}</h6>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                            <div className="d-flex box-dir-reverse align-items-center p-2">
                                <img src={original_icon} width="40" height="40" alt="" class="pull-dir"/>
                                <h6>{t("artwork.originality_guaranteed")}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



                    <Tabs className='' defaultActiveKey="1" onChange={callback}>
                            <TabPane className="mx-4" tab={t("artwork.about_artwork.tab_title")} key="1">
                                <p class="text-dir">
                                {t("artwork.about_artwork.text")}
                                    <button type="button" class="btn-moredown">
                                        <span>{t("artwork.about_artwork.more")}</span>
                                        <img src={more_icon} width="16" height="16" alt="" class="pull-dir px-2"/>
                                    </button>
                                </p>
                            </TabPane>
                            <TabPane tab={t("artwork.about_artist.tab_title")} key="2">
                                <div class="text-dir">
                                    <h3>Menu 1</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo
                                        consequat.
                                    </p>
                                </div>
                            </TabPane>   
                            
                    </Tabs>


            <div class="row box-dir-reverse content-tags">
                <div className="col">
                    <div class="public-header">
                        <h2 class="default-title text-dir">{t("artwork.tags.title")}</h2>
                    </div>
                    <ul class="d-flex tags-horizontal box-dir-reverse">
                        <li><a href="#">{t("artwork.tags.calligram")}</a></li>
                        <li><a href="#">{t("artwork.tags.composition")}</a></li>
                        <li><a href="#">{t("artwork.tags.canvas")}</a></li>
                    </ul>
                </div>
            </div>
            <div class=" artwork-artist">
                <div class="public-header">
                    <div class="row box-dir-reverse">
                        <div class="col-xs-8 text-dir">
                            <h2 class="default-title text-dir"> {t("artwork.other_artworks")} بهروز زیندشتی</h2>
                        </div>
                        <div class="col-xs-4">
                            <div className="d-flex box-dir-reverse justify-custom">
                                {/* <a href="#" class="btn-readmore pull-dir">همه آثار<span class="hidden-xs">هنرمند</span></a> */}
                                <div className="btn-readmore pull-left ">{t("artwork.all_artworks_artist.text1")}<span class="hidden-xs">{t("artwork.all_artworks_artist.text2")}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{overflow : 'auto'}} class="d-flex owl-carousel">
                    <div class="cols mx-4 pb-3">
                        <div class="col-img">
                            <img src={rdbewaopdm840} width="840" height="840"
                                alt="آرتیبیشن"
                                class="img-responsive"/>
                            <div class="tab-overly">
                                <a href="#" class="btn-see">
                                    <span class="view-icon pull-right"></span>
                                    <span>مشاهده اثر</span>
                                </a>
                                <a href="#" class="btn-sale">درخواست خرید</a>
                                <a href="#" class="like-icon"></a>
                            </div>
                        </div>
                        <div class="col-body">
                            <h6 class="col-title">
                                <span class="col-name">بهنام</span>
                                <span class="col-name">کامرانی</span>
                            </h6>
                            <div class="col-dimension">
                                <span class="col-dimension-title">ابعاد:</span>
                                <span class="col-dimension-body">
                                                <span class="dimension-width">60</span>
                                                <span> در </span>
                                                <span class="dimension-height">60</span>
                                            </span>
                            </div>
                            <div class="col-price">
                                <span class="col-price-num">1.400.000</span>
                                <span class="col-price-unit">تومان</span>
                                <span class="persian-num col-price-off">2.000.000</span>
                            </div>
                        </div>
                    </div>
                    <div class="cols mx-4 pb-3">
                        <div class="col-img">
                            <img src={hyxvpfinm840} width="840" height="840" alt="آرتیبیشن"
                                class="img-responsive"/>
                            <div class="tab-overly">
                                <a href="#" class="btn-see">
                                    <span class="view-icon pull-right"></span>
                                    <span>مشاهده اثر</span>
                                </a>
                                <a href="#" class="btn-sale">درخواست خرید</a>
                                <a href="#" class="like-icon"></a>
                            </div>
                        </div>
                        <div class="col-body">
                            <h6 class="col-title">
                                <span class="col-name">ساناز</span>
                                <span class="col-name">دزفولیان</span>
                            </h6>
                            <div class="col-dimension">
                                <span class="col-dimension-title">ابعاد:</span>
                                <span class="col-dimension-body">
                                                <span class="dimension-width">60</span>
                                                <span> در </span>
                                                <span class="dimension-height">60</span>
                                            </span>
                            </div>
                            <div class="col-price">
                                <span class="col-price-num">2.100.000</span>
                                <span class="col-price-unit">تومان</span>
                                <span class="persian-num col-price-off">5.000.000</span>
                            </div>
                        </div>
                    </div>
                    <div class="cols mx-4 pb-3">
                        <div class="col-img">
                            <img src={mainpage_3} width="840" height="840" alt="آرتیبیشن"
                                class="img-responsive"/>
                            <div class="tab-overly">
                                <a href="#" class="btn-see">
                                    <span class="view-icon pull-right"></span>
                                    <span>مشاهده اثر</span>
                                </a>
                                <a href="#" class="btn-sale">درخواست خرید</a>
                                <a href="#" class="like-icon"></a>
                            </div>
                        </div>
                        <div class="col-body">
                            <h6 class="col-title">
                                <span class="col-name">مرتضی</span>
                                <span class="col-name">گودرزی دیباج</span>
                            </h6>
                            <div class="col-dimension">
                                <span class="col-dimension-title">ابعاد:</span>
                                <span class="col-dimension-body">
                                                <span class="dimension-width">60</span>
                                                <span> در </span>
                                                <span class="dimension-height">60</span>
                                            </span>
                            </div>
                            <div class="col-price">
                                <span class="col-price-num">22.000.000</span>
                                <span class="col-price-unit">تومان</span>
                            </div>
                        </div>
                    </div>
                    <div class="cols mx-4 pb-3">
                        <div class="col-img">
                            <img src={hezvtaokhv840} width="840" height="840"
                                alt="آرتیبیشن"
                                class="img-responsive"/>
                            <div class="tab-overly">
                                <a href="#" class="btn-see">
                                    <span class="view-icon pull-right"></span>
                                    <span>مشاهده اثر</span>
                                </a>
                                <a href="#" class="btn-sale">درخواست خرید</a>
                                <a href="#" class="like-icon"></a>
                            </div>
                        </div>
                        <div class="col-body">
                            <h6 class="col-title">
                                <span class="col-name">سعید</span>
                                <span class="col-name">امدادیان</span>
                            </h6>
                            <div class="col-dimension">
                                <span class="col-dimension-title">ابعاد:</span>
                                <span class="col-dimension-body">
                                                <span class="dimension-width">60</span>
                                                <span> در </span>
                                                <span class="dimension-height">60</span>
                                            </span>
                            </div>
                            <div class="col-price">
                                <span class="col-price-num">6.000.000</span>
                                <span class="col-price-unit">تومان</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>


                <div class="public-header">
                    <h2 class="default-title text-dir">{t("suggestion-home.title")}</h2>
                </div>
                <div style={{overflow : 'auto'}} className="owl-carousel d-flex" id="tab4">

                                    <a href="#" className="cols  mx-4 pb-4">
                                            <div className="col-img">
                                                <div className="tags tags-off persian-num">30 %</div>
                                                <img  
                                                
                                                    src={ayvglbkdfo3} 
                                                    alt="آرتیبیشن"
                                                    className="img-responsive"/>
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
                                                <div class="col-dimension text-dir">

                                                    <div className="d-flex box-dir-reverse">
                                                    <span class="col-dimension-title">{t("card_artwork.size.title")}</span>
                                                    <span class="col-dimension-body mx-2">
                                                        <div className="d-flex">
                                                        <span class="dimension-width">60</span>
                                                        <span class="mx-2">{t("card_artwork.size.in")}</span>
                                                        <span class="dimension-height ">60</span>
                                                        </div>
                                                    </span>
                                                    </div>
                                                </div>
                                                <div class="col-price text-dir">
                                                    <div className="d-flex box-dir-reverse">
                                                        <span class="col-price-num">22.000.000</span>
                                                        <span class="col-price-unit">{t("toman")}</span>
                                                        <span className="persian-num col-price-off">5.000.000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                        <a href="#" className="cols mx-4 pb-4">
                                            <div className="col-img">
                                                <div class="tags tags-spacial">ویژه</div>
                                                <div className="tags tags-off persian-num">30 %</div>
                                                <img  
                                                
                                                    src={mainpage_3} 
                                                    alt="آرتیبیشن"
                                                    className="img-responsive"/>
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
                                                <div class="col-dimension text-dir">

                                                    <div className="d-flex box-dir-reverse">
                                                    <span class="col-dimension-title">{t("card_artwork.size.title")}</span>
                                                    <span class="col-dimension-body mx-2">
                                                        <div className="d-flex">
                                                        <span class="dimension-width">60</span>
                                                        <span class="mx-2">{t("card_artwork.size.in")}</span>
                                                        <span class="dimension-height ">60</span>
                                                        </div>
                                                    </span>
                                                    </div>
                                                </div>
                                                <div class="col-price text-dir">
                                                    <div className="d-flex box-dir-reverse">
                                                        <span class="col-price-num">22.000.000</span>
                                                        <span class="col-price-unit">{t("toman")}</span>
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
                                                    className="img-responsive"/>
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
                                                <div class="col-dimension text-dir">

                                                    <div className="d-flex box-dir-reverse">
                                                    <span class="col-dimension-title">{t("card_artwork.size.title")}</span>
                                                    <span class="col-dimension-body mx-2">
                                                        <div className="d-flex">
                                                        <span class="dimension-width">60</span>
                                                        <span class="mx-2">{t("card_artwork.size.in")}</span>
                                                        <span class="dimension-height ">60</span>
                                                        </div>
                                                    </span>
                                                    </div>
                                                </div>
                                                <div class="col-price text-dir">
                                                    <div className="d-flex box-dir-reverse">
                                                        <span class="col-price-num">22.000.000</span>
                                                        <span class="col-price-unit">{t("toman")}</span>
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
                                                    className="img-responsive"/>
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
                                                <div class="col-dimension text-dir">

                                                    <div className="d-flex box-dir-reverse">
                                                    <span class="col-dimension-title">{t("card_artwork.size.title")}</span>
                                                    <span class="col-dimension-body mx-2">
                                                        <div className="d-flex">
                                                        <span class="dimension-width">60</span>
                                                        <span class="mx-2">{t("card_artwork.size.in")}</span>
                                                        <span class="dimension-height ">60</span>
                                                        </div>
                                                    </span>
                                                    </div>
                                                </div>
                                                <div class="col-price text-dir">
                                                    <div className="d-flex box-dir-reverse">
                                                        <span class="col-price-num">22.000.000</span>
                                                        <span class="col-price-unit">{t("toman")}</span>
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

                                <div style={{overflow : 'auto'}} className="owl-carousel d-flex" id="tab4">
                                    <a href="#" className="cols  mx-4 pb-4">
                                            <div className="col-img">
                                                <div className="tags tags-off persian-num">30 %</div>
                                                <img  
                                                
                                                    src={ayvglbkdfo3} 
                                                    alt="آرتیبیشن"
                                                    className="img-responsive"/>
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
                                                <div class="col-dimension text-dir">

                                                    <div className="d-flex box-dir-reverse">
                                                    <span class="col-dimension-title">{t("card_artwork.size.title")}</span>
                                                    <span class="col-dimension-body mx-2">
                                                        <div className="d-flex">
                                                        <span class="dimension-width">60</span>
                                                        <span class="mx-2">{t("card_artwork.size.in")}</span>
                                                        <span class="dimension-height ">60</span>
                                                        </div>
                                                    </span>
                                                    </div>
                                                </div>
                                                <div class="col-price text-dir">
                                                    <div className="d-flex box-dir-reverse">
                                                        <span class="col-price-num">22.000.000</span>
                                                        <span class="col-price-unit">{t("toman")}</span>
                                                        <span className="persian-num col-price-off">5.000.000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                        <a href="#" className="cols mx-4 pb-4">
                                            <div className="col-img">
                                                <div class="tags tags-spacial">ویژه</div>
                                                <div className="tags tags-off persian-num">30 %</div>
                                                <img  
                                                
                                                    src={mainpage_3} 
                                                    alt="آرتیبیشن"
                                                    className="img-responsive"/>
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
                                                <div class="col-dimension text-dir">

                                                    <div className="d-flex box-dir-reverse">
                                                    <span class="col-dimension-title">{t("card_artwork.size.title")}</span>
                                                    <span class="col-dimension-body mx-2">
                                                        <div className="d-flex">
                                                        <span class="dimension-width">60</span>
                                                        <span class="mx-2">{t("card_artwork.size.in")}</span>
                                                        <span class="dimension-height ">60</span>
                                                        </div>
                                                    </span>
                                                    </div>
                                                </div>
                                                <div class="col-price text-dir">
                                                    <div className="d-flex box-dir-reverse">
                                                        <span class="col-price-num">22.000.000</span>
                                                        <span class="col-price-unit">{t("toman")}</span>
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
                                                    className="img-responsive"/>
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
                                                <div class="col-dimension text-dir">

                                                    <div className="d-flex box-dir-reverse">
                                                    <span class="col-dimension-title">{t("card_artwork.size.title")}</span>
                                                    <span class="col-dimension-body mx-2">
                                                        <div className="d-flex">
                                                        <span class="dimension-width">60</span>
                                                        <span class="mx-2">{t("card_artwork.size.in")}</span>
                                                        <span class="dimension-height ">60</span>
                                                        </div>
                                                    </span>
                                                    </div>
                                                </div>
                                                <div class="col-price text-dir">
                                                    <div className="d-flex box-dir-reverse">
                                                        <span class="col-price-num">22.000.000</span>
                                                        <span class="col-price-unit">{t("toman")}</span>
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
                                                    className="img-responsive"/>
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
                                                <div class="col-dimension text-dir">

                                                    <div className="d-flex box-dir-reverse">
                                                    <span class="col-dimension-title">{t("card_artwork.size.title")}</span>
                                                    <span class="col-dimension-body mx-2">
                                                        <div className="d-flex">
                                                        <span class="dimension-width">60</span>
                                                        <span class="mx-2">{t("card_artwork.size.in")}</span>
                                                        <span class="dimension-height ">60</span>
                                                        </div>
                                                    </span>
                                                    </div>
                                                </div>
                                                <div class="col-price text-dir">
                                                    <div className="d-flex box-dir-reverse">
                                                        <span class="col-price-num">22.000.000</span>
                                                        <span class="col-price-unit">{t("toman")}</span>
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
        />

        <ModalBidding
            visibleBiddingModal={visibleBiddingModal}
            setVisibleBiddingModal={setVisibleBiddingModal}
        />

        <ModalSimilarArtworks
            setVisibleSimilarArtworksModal={setVisibleSimilarArtworksModal}
            visibleSimilarArtworksModal={visibleSimilarArtworksModal}
        />

      </div>

      <Footer />
    </>
    )
}

export default DetailsArtwork
