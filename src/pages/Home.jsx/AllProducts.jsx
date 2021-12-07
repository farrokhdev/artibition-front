import React from 'react';
import hnrpqkfiup from '../../assets/img/mainpage/hnrpqkfiup@3x.jpg';
import mainpage from '../../assets/img/mainpage/2.jpg';
import { t } from 'i18next';

export default function AllProducts() {
    return (
        <div className="allproducts">
        <div className="row">
            <div className="public-header">
                <div className="col-xs-8 visible-sm visible-xs">
                    <h2 className="default-title">آثار</h2>
                </div>
                <a href="#" className="btn-readmore pull-left">{t("see-all")}</a>
            </div>
            <div className="clearfix"></div>
            <div className="col-sm-12">
                <div className="default-tab tab-1 tab-interval">
                    <div className="tab-overflow">
                        <ul className="nav nav-tabs alltab-1" id="alltab-1">
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
                        <div id="home" className="tab-pane fade in active">

                            <div style={{overflow : 'auto'}} className="owl-carousel d-flex" id="tab1">


                                <a href="#" className="cols  mx-4">
                                    <div className="col-img">
                                        <img  
                                           
                                            src={hnrpqkfiup} 
                                             alt="artibition"
                                             className="img-responsive"/>
                                        <div className="tab-overly">
                                            <span className="btn-see hidden-xs hidden-sm">
                                                <span className="view-icon pull-right"></span>
                                                <span>{t("artwork.view-artwork")}</span>
                                            </span>
                                            <button type="button" className="btn-sale">
                                                <span className="hidden-xs hidden-sm">{t("artwork.btn-action-to-shop")}</span>
                                                <span className="shopping-cart-xs visible-xs visible-sm"></span>
                                            </button>
                                            <button type="button" className="like-icon isLike"></button>
                                        </div>
                                    </div>
                                    <div className="col-body">
                                        <h6 className="col-title">
                                            <span className="col-name">رضا</span>
                                            <span className="col-name">حسینی</span>
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
                                </a>
                                <a href="#" className="cols mx-4">
                                    <div className="col-img">
                                        <img 
                                            src={mainpage}
                                            style={{width : '280px' , height : '280px'}}
                                            
                                             alt="آرتیبیشن"
                                             className="img-responsive"/>
                                        <div className="tab-overly">
                                            <span className="btn-see hidden-xs hidden-sm">
                                                <span className="view-icon pull-right"></span>
                                                <span>{t("artwork.view-artwork")}</span>
                                            </span>
                                            <button type="button" className="btn-sale">
                                                <span className="hidden-xs hidden-sm">{t("artwork.btn-action-to-shop")}</span>
                                                <span className="shopping-cart-xs visible-xs visible-sm"></span>
                                            </button>
                                            <button type="button" className="like-icon isLike"></button>
                                        </div>
                                    </div>
                                    <div className="col-body">
                                        <h6 className="col-title">
                                            <span className="col-name">رضا</span>
                                            <span className="col-name">حسینی</span>
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
                                </a>
                                <a href="#" className="cols mx-4">
                                    <div className="col-img">
                                        <img 
                                             src={mainpage}
                                             style={{width : '280px' , height : '280px'}}
                                             alt="آرتیبیشن"
                                             className="img-responsive"/>
                                        <div className="tab-overly">
                                            <span className="btn-see hidden-xs hidden-sm">
                                                <span className="view-icon pull-right"></span>
                                                <span>{t("artwork.view-artwork")}</span>
                                            </span>
                                            <button type="button" className="btn-sale">
                                                <span className="hidden-xs hidden-sm">{t("artwork.btn-action-to-shop")}</span>
                                                <span className="shopping-cart-xs visible-xs visible-sm"></span>
                                            </button>
                                            <button type="button" className="like-icon isLike"></button>
                                        </div>
                                    </div>
                                    <div className="col-body">
                                        <h6 className="col-title">
                                            <span className="col-name">رضا</span>
                                            <span className="col-name">حسینی</span>
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
                                </a>
                                <a href="#" className="cols mx-4">
                                    <div className="col-img">
                                        <img 
                                             src={mainpage}
                                             style={{width : '280px' , height : '280px'}}
                                             alt="آرتیبیشن"
                                             className="img-responsive"/>
                                        <div className="tab-overly">
                                            <span className="btn-see hidden-xs hidden-sm">
                                                <span className="view-icon pull-right"></span>
                                                <span>{t("artwork.view-artwork")}</span>
                                            </span>
                                            <button type="button" className="btn-sale">
                                                <span className="hidden-xs hidden-sm">{t("artwork.btn-action-to-shop")}</span>
                                                <span className="shopping-cart-xs visible-xs visible-sm"></span>
                                            </button>
                                            <button type="button" className="like-icon isLike"></button>
                                        </div>
                                    </div>
                                    <div className="col-body">
                                        <h6 className="col-title">
                                            <span className="col-name">رضا</span>
                                            <span className="col-name">حسینی</span>
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
                                </a>


                                
                            </div>
                        </div>
                        <div id="menu1" className="tab-pane fade">
                            <h3>Menu 1</h3>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo
                                consequat.</p>
                        </div>
                        <div id="menu2" className="tab-pane fade">
                            <h3>Menu 2</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium,
                                totam rem aperiam.</p>
                        </div>
                        <div id="menu3" className="tab-pane fade">
                            <h3>Menu 3</h3>
                            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                explicabo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}
