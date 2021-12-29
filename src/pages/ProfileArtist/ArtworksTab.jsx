import React from 'react';

import artist1 from '../../assets/img/artists/artist-1.jpg';
import artist2 from '../../assets/img/artists/artist-2.jpg';
import artist3 from '../../assets/img/artists/artist-3.jpg';
import artist4 from '../../assets/img/artists/artist-4.jpg';
import artist5 from '../../assets/img/artists/artist-5.jpg';
import artist6 from '../../assets/img/artists/artist-6.jpg';
import artist7 from '../../assets/img/artists/artist-7.jpg';
import artist8 from '../../assets/img/artists/artist-8.jpg';
import artist9 from '../../assets/img/artists/artist-9.jpg';
import artist10 from '../../assets/img/artists/artist-10.jpg';
import { t } from 'i18next';

function ArtworksTab() {
    return (
        <div id="artist1" className="tab-pane fade in active">
                        <div className="content-header">
                            <div className="d-flex">
                                <div className="col ">
                                    <div className="d-flex justify-custom box-dir-reverse">
                                        <div className="form-group pull-dir">
                                            <select className="form-control text-dir" id="sel1">
                                                <option>{t("artworkList.filter.last_update")}</option>
                                                <option>{t("artworkList.filter.sell")}</option>
                                                <option>{t("artworkList.filter.visite")}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-body">
                            <div className="d-flex">
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="cols">
                                        <div className="col-img">
                                            <img src={artist1} width="936" height="1212" alt="آرتیبیشن"
                                                 className="img-responsive"/>
                                            <div className="tab-overly">
                                                <a href="#" className="btn-see">
                                                    <span className="view-icon pull-right"></span>
                                                    <span>{t("card_artwork.veiw")}</span>
                                                </a>
                                                <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                                                <a href="#" className="like-icon"></a>
                                            </div>
                                        </div>
                                        <div className="col-body ">
                                            <h6 className="col-title text-dir">
                                                <span className="col-name">آیدین</span>
                                                <span className="col-name">آغداشلو</span>
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
                                                </div>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="cols">
                                        <div className="col-img">
                                            <img src={artist2} width="942" height="1232" alt="آرتیبیشن"
                                                 className="img-responsive"/>
                                            <div className="tab-overly">
                                                <a href="#" className="btn-see">
                                                    <span className="view-icon pull-right"></span>
                                                    <span>{t("card_artwork.veiw")}</span>
                                                </a>
                                                <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                                                <a href="#" className="like-icon"></a>
                                            </div>
                                        </div>
                                        <div className="col-body ">
                                            <h6 className="col-title text-dir">
                                                <span className="col-name">آیدین</span>
                                                <span className="col-name">آغداشلو</span>
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
                                                </div>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="clearfix "></div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="cols">
                                        <div className="col-img">
                                            <img src={artist3} width="930" height="1236" alt="آرتیبیشن"
                                                 className="img-responsive"/>
                                            <div className="tab-overly">
                                                <a href="#" className="btn-see">
                                                    <span className="view-icon pull-right"></span>
                                                    <span>{t("card_artwork.veiw")}</span>
                                                </a>
                                                <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                                                <a href="#" className="like-icon"></a>
                                            </div>
                                        </div>
                                        <div className="col-body ">
                                            <h6 className="col-title text-dir">
                                                <span className="col-name">آیدین</span>
                                                <span className="col-name">آغداشلو</span>
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
                                                </div>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="clearfix "></div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="cols">
                                        <div className="col-img">
                                            <img src={artist4} width="936" height="1221" alt="آرتیبیشن"
                                                 className="img-responsive"/>
                                            <div className="tab-overly">
                                                <a href="#" className="btn-see">
                                                    <span className="view-icon pull-right"></span>
                                                    <span>{t("card_artwork.veiw")}</span>
                                                </a>
                                                <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                                                <a href="#" className="like-icon"></a>
                                            </div>
                                        </div>
                                        <div className="col-body ">
                                            <h6 className="col-title text-dir">
                                                <span className="col-name">آیدین</span>
                                                <span className="col-name">آغداشلو</span>
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
                                                </div>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="clearfix "></div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="cols">
                                        <div className="col-img">
                                            <img src={artist5} width="921" height="1218" alt="آرتیبیشن"
                                                 className="img-responsive"/>
                                            <div className="tab-overly">
                                                <a href="#" className="btn-see">
                                                    <span className="view-icon pull-right"></span>
                                                    <span>{t("card_artwork.veiw")}</span>
                                                </a>
                                                <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                                                <a href="#" className="like-icon"></a>
                                            </div>
                                        </div>
                                        <div className="col-body ">
                                            <h6 className="col-title text-dir">
                                                <span className="col-name">آیدین</span>
                                                <span className="col-name">آغداشلو</span>
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
                                                </div>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="cols">
                                        <div className="col-img">
                                            <img src={artist6} width="933" height="1236" alt="آرتیبیشن"
                                                 className="img-responsive"/>
                                            <div className="tab-overly">
                                                <a href="#" className="btn-see">
                                                    <span className="view-icon pull-right"></span>
                                                    <span>{t("card_artwork.veiw")}</span>
                                                </a>
                                                <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                                                <a href="#" className="like-icon"></a>
                                            </div>
                                        </div>
                                        <div className="col-body ">
                                            <h6 className="col-title text-dir">
                                                <span className="col-name">آیدین</span>
                                                <span className="col-name">آغداشلو</span>
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
                                                </div>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="clearfix "></div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="cols">
                                        <div className="col-img">
                                            <img src={artist7} width="981" height="1513" alt="آرتیبیشن"
                                                 className="img-responsive"/>
                                            <div className="tab-overly">
                                                <a href="#" className="btn-see">
                                                    <span className="view-icon pull-right"></span>
                                                    <span>{t("card_artwork.veiw")}</span>
                                                </a>
                                                <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                                                <a href="#" className="like-icon"></a>
                                            </div>
                                        </div>
                                        <div className="col-body ">
                                            <h6 className="col-title text-dir">
                                                <span className="col-name">آیدین</span>
                                                <span className="col-name">آغداشلو</span>
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
                                                </div>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="cols">
                                        <div className="col-img">
                                            <img src={artist8} width="840" height="840" alt="آرتیبیشن"
                                                 className="img-responsive"/>
                                            <div className="tab-overly">
                                                <a href="#" className="btn-see">
                                                    <span className="view-icon pull-right"></span>
                                                    <span>{t("card_artwork.veiw")}</span>
                                                </a>
                                                <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                                                <a href="#" className="like-icon"></a>
                                            </div>
                                        </div>
                                        <div className="col-body ">
                                            <h6 className="col-title text-dir">
                                                <span className="col-name">آیدین</span>
                                                <span className="col-name">آغداشلو</span>
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
                                                </div>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="clearfix "></div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="cols">
                                        <div className="col-img">
                                            <img src={artist9} width="2283" height="1526"
                                                 alt="آرتیبیشن"
                                                 className="img-responsive"/>
                                            <div className="tab-overly">
                                                <a href="#" className="btn-see">
                                                    <span className="view-icon pull-right"></span>
                                                    <span>{t("card_artwork.veiw")}</span>
                                                </a>
                                                <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                                                <a href="#" className="like-icon"></a>
                                            </div>
                                        </div>
                                        <div className="col-body ">
                                            <h6 className="col-title text-dir">
                                                <span className="col-name">آیدین</span>
                                                <span className="col-name">آغداشلو</span>
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
                                                </div>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="clearfix "></div>
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="cols">
                                        <div className="col-img">
                                            <img src={artist10} width="912" height="1208"
                                                 alt="آرتیبیشن"
                                                 className="img-responsive"/>
                                            <div className="tab-overly">
                                                <a href="#" className="btn-see">
                                                    <span className="view-icon pull-right"></span>
                                                    <span>{t("card_artwork.veiw")}</span>
                                                </a>
                                                <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                                                <a href="#" className="like-icon"></a>
                                            </div>
                                        </div>
                                        <div className="col-body ">
                                            <h6 className="col-title text-dir">
                                                <span className="col-name">آیدین</span>
                                                <span className="col-name">آغداشلو</span>
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
                                                </div>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default ArtworksTab;
