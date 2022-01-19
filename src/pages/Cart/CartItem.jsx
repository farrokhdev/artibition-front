import React from 'react';
import classnames from 'classnames';


import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import delete_icon from '../../assets/img/delete.svg';
import { t } from 'i18next';
import { GetLanguage } from '../../utils/utils';






function CartItem() {
    return (
        <div className="basket-list-row">
            <div className="row">
                <div className="col-md-3 col-xs-6">
                    <div className="col-img">
                        <label className="lable-checkbox">
                            <input type="checkbox" checked />
                            <span className="checkmark green"></span>
                        </label>
                        <img src={artwork1} width="1776" height="1776" alt="" className="img-responsive basket-img" />
                    </div>
                </div>
                <div className="col-md-4 col-xs-6">
                    <h2 className="text-dir">بهروز زیندشتی</h2>
                    <h4 className="text-dir">بدون عنوان</h4>
                    <div className="row-listdetail text-dir">
                        <div className="row">
                            <span className="col-xs-4 detail-title">{t("cart.order.code")}</span>
                            <span className="col-xs-8 detail-name persian-num">۲۵۷۲۷۰۱۴۷۴</span>
                        </div>
                    </div>
                    <div className="row-listdetail text-dir">
                        <div className="row">
                            <span className="col-xs-4 detail-title">{t("cart.order.category")}</span>
                            <h3 className="col-xs-8 detail-name">نقاشی خط</h3>
                        </div>
                    </div>
                    <div className="row-listdetail text-dir">
                        <div className="row">
                            <span className="col-xs-4 detail-title">{t("cart.order.technique")}</span>
                            <h3 className="col-xs-8 detail-name">ترکیب مواد</h3>
                        </div>
                    </div>
                    <div className="row-listdetail text-dir">
                        <div className="row">
                            <span className="col-xs-4 detail-title">{t("cart.order.material")}</span>
                            <h3 className="col-xs-8 detail-name">بوم</h3>
                        </div>
                    </div>
                    <div className="row-listdetail text-dir">
                        <div className="row">
                            <span className="col-xs-4 detail-title">{t("cart.order.date_creation")}</span>
                            <h3 className="col-xs-8 detail-name persian-num">۱۳۹۵</h3>
                        </div>
                    </div>
                    <div className="row-listdetail text-dir">
                        <div className="row">
                            <span className="col-xs-4 detail-title">{t("cart.order.size")}</span>
                            <h3 className="col-xs-8 detail-name">
                                <span className="dimension-width persian-num">60</span>
                                <span>{t("cart.order.x")}</span>
                                <span className="dimension-height persian-num">60</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="clearfix visible-sm visible-xs"></div>
                <div className={classnames("", {
                    "col-md-4": GetLanguage() === 'fa-IR',
                    "col-md-5": GetLanguage() === 'en-US'
                })}>
                    <div className="basket-moredetail">
                        <div className="row">
                            <div className="col-md-12 col-sm-7 text-dir">
                                <span className="greencolor">{t("cart.order.delivery_call_desctiption")}</span>
                                <br />
                                <span>{t("cart.order.sold_by_collector_1")}<strong>{t("cart.order.collector")}</strong>{t("cart.order.sold_by_collector_2")}</span>
                            </div>






                            {/* <div className="col-md-12 col-sm-5 btm-absolute">
                                <div className="basket-price-orginal">
                                    <div className="price-row mrg0 d-flex">
                                        <div className="col-xs-4 text-dir">{t("cart.order.price")}</div>
                                        <div className="col-xs-8">
                                            <div className="basket-pricestyle pull-dir-rev">
                                                <span className="persian-num">۴,۰۰۰,۰۰۰</span>
                                                <span>{t("cart.order.price_unit")}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}







                            <div className="col-md-12 col-sm-5 btm-absolute">
                                <div className="basket-price-orginal">
                                    <div className="price-row d-flex">
                                        <div className="col-xs-5 text-dir">{t("cart.order.price")}</div>
                                        <div className="col-xs-7">
                                            <div className="basket-pricestyle pull-dir-rev">
                                                <span className="persian-num">۴,۰۰۰,۰۰۰</span>
                                                <span>{t("cart.order.price_unit")}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="price-row off d-flex">
                                        <div className="col-xs-5 text-dir">{t("cart.order.discount")}</div>
                                        <div className="col-xs-7">
                                            <div className="basket-pricestyle pull-dir-rev">
                                                <span className="persian-num">۱,۲۰۰,۰۰۰</span>
                                                <span>{t("cart.order.price_unit")}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="price-row total d-flex" style={{ paddingTop: "16px", borderTop: "2px solid #e4e6e9" }}>
                                        <div className="col-xs-5 text-dir">{t("cart.order.total_price")}</div>
                                        <div className="col-xs-7">
                                            <div className="basket-pricestyle pull-dir-rev">
                                                <span className="persian-num">۲,۸۰۰,۰۰۰</span>
                                                <span>{t("cart.order.price_unit")}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>










                            <button type="button" className="btn btn-remove pull-left">
                                <img src={delete_icon} width="32" height="32" alt="" className="pull-dir" />
                                <span>{t("cart.order.remove")}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;