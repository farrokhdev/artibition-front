import React from 'react';
import { t } from 'i18next';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import classnames from 'classnames';
import { GetLanguage } from '../../utils/utils';

import cloude_upload_icon from '../../assets/img/cloud-upload.svg';
import change from '../../assets/img/change.png';
import add_white from '../../assets/img/add-white@2x.png';
import Aydin_Aghdashloo from '../../assets/img/Aydin_Aghdashloo_04@3x.jpg';

function GalleryPanelCreateArtistArtwork() {
    return (
        <>
            <HeaderPanel t={t} />

            <div className="panel-style container mx-auto px-0 w-100 bg-white ">


                <h2 className="default-title aligncenter mt-3">{t("gallery-panel-create-artist-artwork.title")}</h2>
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 create-exhibition">
                    <div className="artist-name-row">
                        <div className="artist-avatar pull-dir">
                            <img className="img-responsive" src={Aydin_Aghdashloo} height="192" width="192" alt="آیدین آغداشلو" />
                        </div>
                        <h4 className="artists-name text-dir">
                            <span>آیدین</span>
                            <span>آغداشلو</span>
                        </h4>
                    </div>
                    <h3 className="info-title mrgt64 require text-dir">{t("gallery-panel-create-artist-artwork.upload.title")}</h3>
                    <div className="upload-img-artwork">
                        <div className="btn-upload-artwork">
                            <img src={cloude_upload_icon} width="64" height="57" alt="" className="" />
                            <p>{t("gallery-panel-create-artist-artwork.upload.text")}
                                <br />
                                {t("gallery-panel-create-artist-artwork.upload.or")}</p>
                            <label for="file-upload" className="btn-blue">{t("gallery-panel-create-artist-artwork.upload.btn")}</label>
                            <p className="upload-size"> {t("gallery-panel-create-artist-artwork.upload.tip")}</p>
                        </div>
                        <input id="file-upload" type="file" />
                    </div>

                    <div className="info-sec">
                        <h3 className="info-title mrgt64 text-dir">{t("gallery-panel-create-artist-artwork.artwork_info.title")}</h3>
                        <div className="row dir">
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "d-none": GetLanguage() === 'en-US'
                                })}

                            >
                                <div className="public-group">
                                    <input className="form-control input-public " required
                                        placeholder="" value="" />
                                    <label className="lable-public">{t("gallery-panel-create-artist-artwork.artwork_info.artwork_name_fa")}</label>
                                </div>
                            </div>
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "col-sm-12": GetLanguage() === 'en-US'
                                })}
                            >
                                <div className="public-group en">
                                    <input className="form-control input-public en-lang " required
                                        placeholder=""
                                        value="" />
                                    <label className="lable-public en-lang">{t("gallery-panel-create-artist-artwork.artwork_info.artwork_name_en")}</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="public-group">
                                    <select className="input-public">
                                        <option>نقاشی</option>
                                        <option>خطاطی</option>
                                    </select>
                                    <label className="lable-public">{t("gallery-panel-create-artist-artwork.artwork_info.category")}</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="public-group">
                                    <select className="input-public">
                                        <option>نقاشی</option>
                                        <option>خطاطی</option>
                                    </select>
                                    <label className="lable-public">{t("gallery-panel-create-artist-artwork.artwork_info.subject")}</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="public-group">
                                    <select className="input-public">
                                        <option>نقاشی</option>
                                        <option>خطاطی</option>
                                    </select>
                                    <label className="lable-public">{t("gallery-panel-create-artist-artwork.artwork_info.technique")}</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="public-group">
                                    <select className="input-public">
                                        <option>نقاشی</option>
                                        <option>خطاطی</option>
                                    </select>
                                    <label className="lable-public">{t("gallery-panel-create-artist-artwork.artwork_info.material")}</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="public-group">
                                    <input className="form-control input-public persian-num " required placeholder="" value="" />
                                    <label className="lable-public">{t("gallery-panel-create-artist-artwork.artwork_info.creation_date")}</label>
                                </div>
                            </div>
                            <div className="col-sm-2 col-xs-6">
                                <div className="public-group">
                                    <input className="form-control input-public persian-num " required placeholder="" value="" />
                                    <label className="lable-public">{t("gallery-panel-create-artist-artwork.artwork_info.width")}</label>
                                </div>
                            </div>
                            <div className="col-sm-2 col-xs-6">
                                <div className="public-group">
                                    <input className="form-control input-public persian-num " required placeholder="" value="" />
                                    <label className="lable-public">{t("gallery-panel-create-artist-artwork.artwork_info.length")}</label>
                                </div>
                            </div>
                            <div className="col-sm-2 col-xs-6">
                                <div className="public-group">
                                    <input className="form-control input-public persian-num " required placeholder="" value="" />
                                    <label className="lable-public">{t("gallery-panel-create-artist-artwork.artwork_info.height")}</label>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xs-6">
                                <div className="public-group">
                                    <input className="form-control input-public persian-num " required placeholder="" value="" />
                                    <label className="lable-public">{t("gallery-panel-create-artist-artwork.artwork_info.weight")}</label>
                                </div>
                            </div>
                            <div className="clearfix visible-xs"></div>
                            <div className="col-sm-6 text-dir">
                                <label className="lable-checkbox mrgt45">
                                    <input type="checkbox" value="" />
                                    <span>{t("gallery-panel-create-artist-artwork.artwork_info.multipl_edition")}</span>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <h3 className="infotitle-default text-dir">{t("gallery-panel-create-artist-artwork.sale_info.title")}</h3>
                        <div className='row dir'>
                            <div className="col-sm-12 text-dir">
                                <label className="lable-checkbox public-group">
                                    <input type="checkbox" value="" />
                                    <span>{t("gallery-panel-create-artist-artwork.sale_info.display_only")}</span>
                                    <span className="checkmark"></span>
                                    <span className="input-help">{t("gallery-panel-create-artist-artwork.sale_info.display_only_description")}</span>
                                </label>
                            </div>
                            <div className="col-sm-6">
                                <div className="public-group">
                                    <input className="form-control input-public persian-num " required placeholder="" value="" />
                                    <label className="lable-public">{t("gallery-panel-create-artist-artwork.sale_info.price_irr")}</label>
                                </div>
                                <a href="#" className="btn-change">
                                    <img src={change} width="24" height="24" alt="" className="" />
                                </a>
                            </div>
                            <div className="col-sm-6">
                                <div className="public-group">
                                    <input className="form-control input-public persian-num " required placeholder="" value="" />
                                    <label className="lable-public">{t("gallery-panel-create-artist-artwork.sale_info.price_usd")}</label>
                                </div>
                            </div>
                            <div className="col-sm-12 text-dir">
                                <label className="lable-checkbox public-group">
                                    <input type="checkbox" value="" />
                                    <span>{t("gallery-panel-create-artist-artwork.sale_info.artwork_sold")}</span>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="col-sm-12 text-dir">
                                <label className="lable-checkbox public-group">
                                    <input type="checkbox" checked="" value="" />
                                    <span>{t("gallery-panel-create-artist-artwork.sale_info.could_offer_price")}</span>
                                    <span className="checkmark"></span>
                                    <span className="input-help">{t("gallery-panel-create-artist-artwork.sale_info.could_offer_price_description")}</span>
                                </label>
                            </div>
                        </div>
                        <button type="button" className="btn-add-artist margin_top_bottom_64">
                            <img src={add_white} width="24" height="24" alt="" className="img-responsive" />
                            <span>{t("gallery-panel-create-artist-artwork.sale_info.upload_another_artwork")}</span>
                        </button>
                    </div>
                    <br />
                    <div className="adv-btn-orginal">
                        <button type="button" className="btn-black pull-dir-rev ">{t("gallery-panel-create-artist-artwork.sale_info.btn")}</button>
                    </div>
                </div>
            </div>
            <BasketFooterPanel />
        </>
    )
}

export default GalleryPanelCreateArtistArtwork;
