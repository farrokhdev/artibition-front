import React from 'react';
import classnames from 'classnames';
import rdbewaopdm3 from '../../assets/img/artworks/rdbewaopdm@3x.jpg';
import delete_icon from '../../assets/img/delete.svg';


import { t } from 'i18next';






function CartItemDisable() {
    return (
        <div className="basket-list-row disabled">
            <div className="row">
                <div className="col-md-3 col-xs-6">
                    <div className="col-img">
                        <label className="lable-checkbox">
                            <input type="checkbox" disabled />
                            <span className="checkmark green"></span>
                        </label>
                        <div className="tags tags-off persian-num">30 %</div>
                        <img src={rdbewaopdm3} width="840" height="840" alt="" className="img-responsive basket-img" />
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
                <div className="col-md-4">
                    <div className="basket-moredetail">
                        <div className="row">
                            <div className="col-md-12 col-sm-7 text-dir">
                                <span className="greencolor">{t("cart.order.delivery_call_desctiption")}</span>
                                <br />
                                <span>{t("cart.order.sold_by_collector_1")}<strong>{t("cart.order.collector")}</strong>{t("cart.order.sold_by_collector_2")}</span>
                            </div>
                            <div className="col-md-12 col-sm-5 btm-absolute">
                                <div className="basket-price-orginal">
                                    <div className="col-xs-12">
                                        <span className="pull-dir">{t("cart.order.artwork_not_available")}</span>
                                        <span className="pull-left finished-tag">{t("cart.order.sold")}</span>
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

export default CartItemDisable;