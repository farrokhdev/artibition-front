import React from "react";
import { t } from 'i18next';


import artwork1 from '../../assets/img/artworks/jpaytrkase@3x.jpg'
import artwork2 from '../../assets/img/artworks/hnrpqkfiup@3x.jpg'
import artwork3 from '../../assets/img/artworks/nqliiocbif@3x.jpg'
import artwork4 from '../../assets/img/artworks/ucuurcufbm@3x.jpg'
import artwork5 from '../../assets/img/artworks/jpaytrkase@3x.jpg'
import artwork6 from '../../assets/img/artworks/3.jpg'
import artwork7 from '../../assets/img/artworks/rdbewaopdm@3x.jpg'
import artwork8 from '../../assets/img/artworks/hezvtaokhv@3x.jpg'
import artwork9 from '../../assets/img/artworks/ffhxzfmfyx@3x.jpg'
import artwork10 from '../../assets/img/artworks/lhggrzlgoc@3x.jpg'
import artwork11 from '../../assets/img/artworks/hyxvpfinmx@3x.jpg'
import artwork12 from '../../assets/img/artworks/ayvglbkdfo@3x.jpg'
import artwork13 from '../../assets/img/artworks/gbazvsspbk@3x.jpg'
import gift from '../../assets/img/gift.svg'


function SelectFavoriteArtworkStep({ prev, next }) {
    return (
        <>
            <div className="container advisory-select mrgt0">
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
                        <div className="adv-content">
                            <h2 className="adv-title">{t("advisory.select_favorite_artwork_step.title")}</h2>
                            <p className="aligncenter">{t("advisory.select_favorite_artwork_step.description")}</p>
                        </div>
                    </div>
                    <div className="row-gridimg mrgt64">
                        <div className="row align-item-flex-start">
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork1} width="840" height="1259" alt="آرتیبیشن" className="img-responsive" />
                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork2} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>
                                        <span className="tag-gift"><img src={gift} width="22" height="22" alt="" /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix visible-xs"></div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <div className="tags tags-off persian-num">30 %</div>
                                        <img src={artwork3} width="840" height="924" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <div className="tags tags-spacial">{t("advisory.select_favorite_artwork_step.spacial")}</div>
                                        <div className="tags tags-off persian-num">33 %</div>
                                        <img src={artwork4} width="840" height="1259" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork5} width="840" height="1259" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork6} width="840" height="850" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="clearfix visible-xs"></div>
                            <div className="cols col-sm-3 col-xs-6 finished text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork7} width="840" height="1120" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <div className="finished-tag">{t("advisory.select_favorite_artwork_step.sold_out")}</div>

                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork8} width="840" height="1130" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork9} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork10} width="840" height="1130" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="clearfix visible-xs"></div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork10} width="840" height="1130" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork11} width="840" height="1259" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork12} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork13} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="clearfix visible-xs"></div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork7} width="840" height="1120" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork6} width="840" height="850" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="cols col-sm-3 col-xs-6 finished text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork7} width="840" height="1120" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <div className="finished-tag">{t("advisory.select_favorite_artwork_step.sold_out")}</div>

                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork8} width="840" height="1130" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="clearfix visible-xs"></div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork9} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                            <div className="cols col-sm-3 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value="" />
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork10} width="840" height="1130" alt="آرتیبیشن" className="img-responsive" />

                                    </div>
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
                                    </h6>
                                    <div className="col-dimension">

                                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                                        <span className="col-dimension-body">
                                            <span className="dimension-width">60</span>
                                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                                            <span className="dimension-height">60</span>
                                        </span>
                                    </div>
                                    <div className="col-price">
                                        <span className="col-price-num">22.000.000</span>
                                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="adv-btn" style={{ backgroundColor: "white" }}>
                <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 d-flex justify-content-space-between">
                    <button type="button" className="btn-prev dir-rtl" onClick={()=>{prev()}}>{t("advisory.select_favorite_artwork_step.btn_prev")}</button>
                    <button type="button" className="btn-next dir-rtl" onClick={()=>{next()}}>{t("advisory.select_favorite_artwork_step.btn_next")}</button>
                </div>
            </div>
        </>
    )
}

export default SelectFavoriteArtworkStep