import React from 'react';
import { t } from 'i18next';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import edit_icon from '../../assets/img/edit_name.svg';
import go from '../../assets/img/go.svg';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';

function PanelBiddingPrice() {
    return (
        <>
            <HeaderPanel t={t} />
            <div className="panel-style margin-top-20">
                <SidebarPanel />
                <div className="custom-container " id="main">
                    <div className="box box-2">
                        <div className="sec6">
                            <div className="public-header">
                                <div className="pull-dir">
                                    <h2 className="default-title">{t("drawer-panel.biding-price")}</h2>
                                </div>
                            </div>
                            <div className="default-tab tab-3 tab-interval purchase ">


                                <div className="basket-list-row">
                                    <div className="d-block d-lg-flex box-dir-reverse">
                                        <div className="col ">
                                            <div className="row box-dir-reverse">
                                                <div className="col-12 col-sm-4 ">
                                                    <div className="col-img">
                                                        <img src={artwork1} width="1776" height="1776" alt="artwork-pic"
                                                            className="img-responsive basket-img" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-8 my-4 my-lg-0">
                                                    <div className="row-listdetail ">
                                                        <div className="d-flex box-dir-reverse">
                                                            <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.artwork-title")}</span>
                                                            <span className="col-xs-7 detail-name">بدون عنوان</span>
                                                        </div>
                                                    </div>
                                                    <div className="row-listdetail">
                                                        <div className="d-flex box-dir-reverse">
                                                            <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.owner")}</span>
                                                            <h3 className="col-xs-7 detail-name">ساناز دزفولیان</h3>
                                                        </div>
                                                    </div>
                                                    <div className="row-listdetail">
                                                        <div className="d-flex box-dir-reverse">
                                                            <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.code")}</span>
                                                            <h3 className="col-xs-7 detail-name persian-num">۲۵۷۲۷۰۱۴۸۲</h3>
                                                        </div>
                                                    </div>
                                                    <div className="row-listdetail">
                                                        <div className="d-flex box-dir-reverse">
                                                            <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.size")}</span>
                                                            <h3 className="col-xs-7 detail-name">
                                                                <span className="dimension-width persian-num">60</span>
                                                                <span> {t("content-panel-mypurchases.x")}</span>
                                                                <span className="dimension-height persian-num">60</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col mx-auto">
                                            <div className="basket-moredetail my-0 my-md-3 my-lg-0">
                                                <div className="row ">
                                                    <div className="col-sm-12 ">
                                                        <div className="basket-price ">
                                                            <div className="d-flex  price-row box-dir-reverse">
                                                                <div className="col-xs-5  graycolor">{t("content-panel-mypurchases.price-artwork")}</div>
                                                                <div className="col-xs-7">
                                                                    <div className="d-flex justify-custom">
                                                                        <div className=" basket-pricestyle">
                                                                            <span className="persian-num">۴,۰۰۰,۰۰۰</span>
                                                                            <span>{t("toman")}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex price-row box-dir-reverse">
                                                                <div className="col-xs-5  graycolor">{t("content-panel-mypurchases.your-bidding")}</div>
                                                                <div className="col-xs-7">
                                                                    <div className="d-flex justify-custom basket-pricestyle box-dir-reverse">
                                                                        <span className="persian-num bluestyle">۱,۲۰۰,۰۰۰</span>
                                                                        <span className="bluestyle">{t("toman")}</span>
                                                                        <a href="#" className="purchase-link">
                                                                            <img src={edit_icon} width="32" height="32" alt="edit-icon" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex price-row box-dir-reverse">
                                                                <div className="col-xs-5 graycolor">{t("content-panel-mypurchases.status")}</div>
                                                                <div className="col-xs-7">
                                                                    <div className="d-flex justify-custom">
                                                                        <div className="basket-pricestyle">
                                                                            <span className="purchase-status pending bolder-title">در انتظار پاسخ</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="d-flex btn-back-blue box-dir-reverse justify-custom ">
                                                            <span className=" bluestyle">{t("content-panel-mypurchases.order-details")}</span>
                                                            <img src={go} className='show-detail-arrow' width="16" height="16" alt="go-pic" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>





                                <div className="basket-list-row">
                                    <div className="d-block d-lg-flex box-dir-reverse">
                                        <div className="col ">
                                            <div className="row box-dir-reverse">
                                                <div className="col-12 col-sm-4 ">
                                                    <div className="col-img">
                                                        <img src={artwork1} width="1776" height="1776" alt="artwork-pic"
                                                            className="img-responsive basket-img" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-8 my-4 my-lg-0">
                                                    <div className="row-listdetail ">
                                                        <div className="d-flex box-dir-reverse">
                                                            <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.artwork-title")}</span>
                                                            <span className="col-xs-7 detail-name">بدون عنوان</span>
                                                        </div>
                                                    </div>
                                                    <div className="row-listdetail">
                                                        <div className="d-flex box-dir-reverse">
                                                            <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.owner")}</span>
                                                            <h3 className="col-xs-7 detail-name">ساناز دزفولیان</h3>
                                                        </div>
                                                    </div>
                                                    <div className="row-listdetail">
                                                        <div className="d-flex box-dir-reverse">
                                                            <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.code")}</span>
                                                            <h3 className="col-xs-7 detail-name persian-num">۲۵۷۲۷۰۱۴۸۲</h3>
                                                        </div>
                                                    </div>
                                                    <div className="row-listdetail">
                                                        <div className="d-flex box-dir-reverse">
                                                            <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.size")}</span>
                                                            <h3 className="col-xs-7 detail-name">
                                                                <span className="dimension-width persian-num">60</span>
                                                                <span> {t("content-panel-mypurchases.x")}</span>
                                                                <span className="dimension-height persian-num">60</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col mx-auto">
                                            <div className="basket-moredetail my-0 my-md-3 my-lg-0">
                                                <div className="row ">
                                                    <div className="col-sm-12 ">
                                                        <div className="basket-price ">
                                                            <div className="d-flex price-row box-dir-reverse">
                                                                <div className="col-xs-5  graycolor">{t("content-panel-mypurchases.price-artwork")}</div>
                                                                <div className="col-xs-7">
                                                                    <div className="d-flex justify-custom">
                                                                        <div className="basket-pricestyle">
                                                                            <span className="persian-num">۴,۰۰۰,۰۰۰</span>
                                                                            <span>{t("toman")}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex price-row box-dir-reverse">
                                                                <div className="col-xs-5  graycolor">{t("content-panel-mypurchases.your-bidding")}</div>
                                                                <div className="col-xs-7">
                                                                    <div className="d-flex justify-custom">
                                                                        <div className="basket-pricestyle">
                                                                            <span className="persian-num ">۱,۲۰۰,۰۰۰</span>
                                                                            <span>{t("toman")}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex price-row box-dir-reverse">
                                                                <div className="col-xs-5 graycolor">{t("content-panel-mypurchases.status")}</div>
                                                                <div className="col-xs-7">
                                                                    <div className="d-flex justify-custom">
                                                                        <div className="basket-pricestyle">
                                                                            <span className="purchase-status accept bolder-title">پیشنهاد قبول شد</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex box-dir-reverse">
                                                                <div className="col-xs-5">

                                                                </div>
                                                                <div className="col-xs-7">
                                                                    <button type="button" className="btn-pink pull-dir">{t("content-panel-mypurchases.artwok-return")}</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="d-flex btn-back-blue box-dir-reverse justify-custom ">
                                                            <span className=" bluestyle">{t("content-panel-mypurchases.order-details")}</span>
                                                            <img src={go} className='show-detail-arrow' width="16" height="16" alt="go-pic" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>





                                <div className="basket-list-row">
                                    <div className="d-block d-lg-flex box-dir-reverse">
                                        <div className="col ">
                                            <div className="row box-dir-reverse">
                                                <div className="col-12 col-sm-4 ">
                                                    <div className="col-img">
                                                        <img src={artwork1} width="1776" height="1776" alt="artwork-pic"
                                                            className="img-responsive basket-img" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-8 my-4 my-lg-0">
                                                    <div className="row-listdetail ">
                                                        <div className="d-flex box-dir-reverse">
                                                            <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.artwork-title")}</span>
                                                            <span className="col-xs-7 detail-name">بدون عنوان</span>
                                                        </div>
                                                    </div>
                                                    <div className="row-listdetail">
                                                        <div className="d-flex box-dir-reverse">
                                                            <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.owner")}</span>
                                                            <h3 className="col-xs-7 detail-name">ساناز دزفولیان</h3>
                                                        </div>
                                                    </div>
                                                    <div className="row-listdetail">
                                                        <div className="d-flex box-dir-reverse">
                                                            <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.code")}</span>
                                                            <h3 className="col-xs-7 detail-name persian-num">۲۵۷۲۷۰۱۴۸۲</h3>
                                                        </div>
                                                    </div>
                                                    <div className="row-listdetail">
                                                        <div className="d-flex box-dir-reverse">
                                                            <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.size")}</span>
                                                            <h3 className="col-xs-7 detail-name">
                                                                <span className="dimension-width persian-num">60</span>
                                                                <span> {t("content-panel-mypurchases.x")}</span>
                                                                <span className="dimension-height persian-num">60</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col mx-auto">
                                            <div className="basket-moredetail my-0 my-md-3 my-lg-0">
                                                <div className="row ">
                                                    <div className="col-sm-12 ">
                                                        <div className="basket-price ">
                                                            <div className="d-flex price-row box-dir-reverse">
                                                                <div className="col-xs-5  graycolor">{t("content-panel-mypurchases.price-artwork")}</div>
                                                                <div className="col-xs-7">
                                                                    <div className="d-flex justify-custom">
                                                                        <div className="basket-pricestyle">
                                                                            <span className="persian-num">۴,۰۰۰,۰۰۰</span>
                                                                            <span>{t("toman")}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex price-row box-dir-reverse">
                                                                <div className="col-xs-5  graycolor">{t("content-panel-mypurchases.your-bidding")}</div>
                                                                <div className="col-xs-7">
                                                                    <div className="d-flex justify-custom">
                                                                        <div className="basket-pricestyle">
                                                                            <span className="persian-num ">۱,۲۰۰,۰۰۰</span>
                                                                            <span>{t("toman")}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex price-row box-dir-reverse">
                                                                <div className="col-xs-5 graycolor">{t("content-panel-mypurchases.status")}</div>
                                                                <div className="col-xs-7">
                                                                    <div className="d-flex justify-custom">
                                                                        <div className="basket-pricestyle">
                                                                            <span className="purchase-status deny bolder-title">پیشنهاد رد شد</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex price-row box-dir-reverse suggest-artist">
                                                                <div className="col-xs-5  greencolor bolder-title">{t("content-panel-mypurchases.artist-bidding")}</div>
                                                                <div className="col-xs-7">
                                                                    <div className="d-flex justify-custom">
                                                                        <div className="basket-pricestyle">
                                                                            <span className="persian-num ">۱,۲۰۰,۰۰۰</span>
                                                                            <span>{t("toman")}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex box-dir-reverse">
                                                                <div className="col-xs-5">
                                                                    <button type="button" className="btn btn-more pull-left">پیشنهاد جدید</button>
                                                                </div>
                                                                <div className="col-xs-7">
                                                                    <button type="button" className="btn-pink pull-left">{t("content-panel-mypurchases.artwok-return")}</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="d-flex btn-back-blue box-dir-reverse justify-custom ">
                                                            <span className=" bluestyle">{t("content-panel-mypurchases.order-details")}</span>
                                                            <img src={go} className='show-detail-arrow' width="16" height="16" alt="go-pic" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            <BasketFooterPanel />
            </div>
        </>
    );
}

export default PanelBiddingPrice;