import React from 'react';

import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import reload from '../../assets/img/reload.svg';
import go from '../../assets/img/go.svg';
import { t } from 'i18next';

function Delivered() {
return (
<>

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
                                    <div className="col-xs-6  graycolor text-dir">{t("content-panel-mypurchases.order")}</div>
                                    <div className="col-xs-6">
                                        <div className="basket-pricestyle">
                                            <span className="persian-num">۶۳۷۱</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex price-row box-dir-reverse">
                                    <div className="col-xs-6  graycolor text-dir">{t("content-panel-mypurchases.your-bidding")}</div>
                                    <div className="col-xs-6">
                                        <div className="basket-pricestyle">
                                            <span className="persian-num">۱,۲۰۰,۰۰۰</span>
                                            <span>تومان</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex price-row box-dir-reverse">
                                    <div className="col-xs-6  graycolor text-dir">{t("content-panel-mypurchases.payment-date")}</div>
                                    <div className="col-xs-6">
                                        <div className="basket-pricestyle">
                                            <span className="persian-num">۱۳۹۹/۰۵/۲۰</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex price-row box-dir-reverse">
                                    <div className="col-xs-6 graycolor text-dir">{t("content-panel-mypurchases.status")}</div>
                                    <div className="col-xs-6">
                                        <div className="basket-pricestyle">
                                            <span className="purchase-status accept bolder-title">تحویل شده</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex price-row box-dir-reverse">
                                    <div className="d-flex box-dir-reverse">
                                        <div className="col-xs-6">
                                            <button type="button" className="btn btn-default">
                                                {t("content-panel-mypurchases.btn-sell")}
                                            </button>
                                        </div>
                                        <div className="col-xs-6">
                                            <button type="button" className="btn btn-outline-pink" data-toggle="modal"
                                                data-target="#modal-return-artwork">
                                                <img src={reload} width="16" height="18" alt="reload-pic" />
                                                <span>{t("content-panel-mypurchases.artwok-return")}</span>
                                            </button>
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
                                    <div className="col-xs-6  graycolor text-dir">{t("content-panel-mypurchases.order")}</div>
                                    <div className="col-xs-6">
                                        <div className="basket-pricestyle">
                                            <span className="persian-num">۶۳۷۱</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex price-row box-dir-reverse">
                                    <div className="col-xs-6  graycolor text-dir">{t("content-panel-mypurchases.your-bidding")}</div>
                                    <div className="col-xs-6">
                                        <div className="basket-pricestyle">
                                            <span className="persian-num">۱,۲۰۰,۰۰۰</span>
                                            <span>تومان</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex price-row box-dir-reverse">
                                    <div className="col-xs-6  graycolor text-dir">{t("content-panel-mypurchases.payment-date")}</div>
                                    <div className="col-xs-6">
                                        <div className="basket-pricestyle">
                                            <span className="persian-num">۱۳۹۹/۰۵/۲۰</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex price-row box-dir-reverse">
                                    <div className="col-xs-6 graycolor text-dir">{t("content-panel-mypurchases.status")}</div>
                                    <div className="col-xs-6">
                                        <div className="basket-pricestyle">
                                            <span className="purchase-status accept bolder-title">تحویل شده</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex price-row box-dir-reverse">
                                    <div className="d-flex box-dir-reverse">
                                        <div className="col-xs-6">
                                            <button type="button" className="btn btn-default">
                                                {t("content-panel-mypurchases.btn-sell")}
                                            </button>
                                        </div>
                                        <div className="col-xs-6">
                                            <button type="button" className="btn btn-outline-pink" data-toggle="modal"
                                                data-target="#modal-return-artwork">
                                                <img src={reload} width="16" height="18" alt="reload-pic" />
                                                <span>{t("content-panel-mypurchases.artwok-return")}</span>
                                            </button>
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

</>
)
}

export default Delivered