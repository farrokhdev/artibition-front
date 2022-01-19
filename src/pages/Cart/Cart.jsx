import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import Menu from '../../components/Menu/Menu';
import classnames from 'classnames';
import { GetLanguage } from '../../utils/utils';

import empty from '../../assets/img/Empty.svg';


import { t } from 'i18next';
import CartItem from './CartItem';
import CartItemDisable from './CartItemDisable';
import ArthibitionProperties from '../../components/ArthibitionProperies/ArthibitionProperties';






function Cart() {
    return (
        <>
            <div className="container mx-auto px-0 w-100 bg-white">
                <Header />
                <Menu />

                {/* ------------- EMPTY STATE -------------- */}
                <div className="container dir">
                    <div className="emptystate">
                        <img src={empty} width="103" height="98" alt="" />
                        <h3>{t("cart.empty.title")}</h3>
                        <p>
                            {t("cart.empty.description")}
                        </p>
                        <button type="button" className="btn btn-artworksimilar">{t("cart.empty.btn")}</button>
                    </div>
                </div>
                {/* ------------- EMPTY STATE -------------- */}





                {/* ------------- FULL STATE -------------- */}
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
                        <CartItem />
                        <CartItemDisable />


                        <div className="clearfix"></div>
                        <div className="row">
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
                        </div>
                    </div>
                    <ArthibitionProperties />
                </div>
                {/* ------------- FULL STATE -------------- */}


            </div>

            <Footer />
        </>
    )
}

export default Cart;