import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import Menu from '../../components/Menu/Menu';
import classnames from 'classnames';
import { GetLanguage } from '../../utils/utils';

import empty from '../../assets/img/Empty.svg';


import { t } from 'i18next';
import ArthibitionProperties from '../../components/ArthibitionProperies/ArthibitionProperties';
import CartItem from '../Cart/CartItem';






function Invoice() {
    return (
        <>
            <div className="container mx-auto px-0 w-100 bg-white">
                <Header />
                <Menu />
                <div className="container dir">
                    <div className="public-header">
                        <div className="col-xs-12">
                            <h2 className="default-title pull-dir">{t("cart.full.cart")}</h2>
                            <div className="basket-notification pull-dir ">
                                <span className="persian-num">2</span>
                            </div>
                        </div>
                    </div>
                    <div className="basket-list">
                        <CartItem />
                        <CartItem />
                        <div className="clearfix"></div>








                        {/* <div className="row">
                            <div className={classnames("", {
                                "col-md-4 col-md-offset-8": GetLanguage() === 'fa-IR',
                                "col-md-5 col-md-offset-7": GetLanguage() === 'en-US'
                            })}>
                                <div className="basket-total">
                                    <div className="basket-price">
                                        <div className="clearfix"></div>
                                        <div className="price-row d-flex">
                                            <div className="col-xs-5 text-dir">{t("cart.full.total_price")}</div>
                                            <div className="col-xs-7">
                                                <div className="basket-pricestyle pull-dir-rev">
                                                    <span className="persian-num">۲,۸۰۰,۰۰۰</span>
                                                    <span>{t("cart.full.price_unit")}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <span className="greencolor">
                                                {t("cart.full.less_price_received_separately")}
                                            </span>
                                            <button type="button" className="btn btn-continue">{t("cart.full.next")}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}









                        <div className="row">
                            <div className={classnames("", {
                                "col-md-4 col-md-offset-8": GetLanguage() === 'fa-IR',
                                "col-md-5 col-md-offset-7": GetLanguage() === 'en-US'
                            })}>
                                <div className="basket-total">
                                    <div className="basket-price">
                                        <div className="price-row d-flex">
                                            <div className="col text-dir text-dir">
                                                {t("invoice.price")}
                                                <span className="asar">
                                                    (2 {t("invoice.artworks")})
                                                </span>
                                            </div>
                                            <div className="col-xs-7">
                                                <div className="basket-pricestyle pull-dir-rev">
                                                    <span className="persian-num">۴,۰۰۰,۰۰۰</span>
                                                    <span>{t("invoice.price_unit")}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="price-row off d-flex">
                                            <div className="col-xs-5 text-dir">{t("invoice.discount")}</div>
                                            <div className="col-xs-7">
                                                <div className="basket-pricestyle pull-dir-rev">
                                                    <span className="persian-num">۱,۲۰۰,۰۰۰</span>
                                                    <span>{t("invoice.price_unit")}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price-row d-flex">
                                            <div className="col-xs-5 text-dir">{t("invoice.shipment_fee")}</div>
                                            <div className="col-xs-7">
                                                <div className="basket-pricestyle pull-dir-rev">
                                                    <span className="greencolor">{t("invoice.free")}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="price-row total d-flex" style={{ paddingTop: "16px", borderTop: "2px solid #e4e6e9" }}>
                                            <div className="col-xs-5 text-dir">{t("invoice.total_price")}</div>
                                            <div className="col-xs-7">
                                                <div className="basket-pricestyle pull-dir-rev">
                                                    <span className="persian-num">۲,۸۰۰,۰۰۰</span>
                                                    <span>{t("invoice.price_unit")}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <button type="button" className="btn btn-continue">{t("invoice.next_btn")}</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>








                    </div>
                    <ArthibitionProperties />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Invoice;