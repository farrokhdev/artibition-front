import React from 'react';
import { t } from 'i18next';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import classnames from 'classnames';
import { GetLanguage } from '../../utils/utils';

import add_icon from '../../assets/img/add_pic.svg';
import logo_icon from '../../assets/img/logo-icon.png';
import edit_name from '../../assets/img/edit_name.svg';
import add_white from '../../assets/img/add-white@2x.png';
import delete_icon from '../../assets/img/delete.svg';

function GalleryPanelEditGalleryInfo() {
    return (
        <>
            <HeaderPanel t={t} />

            <div className="panel-style container mx-auto px-0 w-100 bg-white ">


                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 create-exhibition">
                    <h3 className="info-title mrgt64 require text-dir">{t("gallery-panel-edit-gallery-info.upload_gallery_cover_photo")}</h3>
                    <div class="upload-img-artwork">
                        <div class="btn-upload-artwork no-cursor">
                            <label for="file-upload" class="btn-outline-blue addcover dir">
                                <img src={add_icon} width="20" height="18" alt="" class="" />
                                {t("gallery-panel-edit-gallery-info.add_cover_photo")}
                            </label>
                        </div>
                        <input id="file-upload" type="file" />
                        <div class="add-logo">
                            <img src={logo_icon} width="1079" height="1079" alt="" class="img-responsive" />
                            <label for="file-upload1" class="btn-add-logo pull-dir">
                                <img src={edit_name} width="32" height="32" alt="" class="" />
                            </label>
                        </div>
                        <input id="file-upload1" type="file" />
                        <span class="require graycolor dir">{t("gallery-panel-edit-gallery-info.select_logo")}</span>
                    </div>


                    <div className="info-sec">
                        <h3 className="info-title mrgt64 text-dir">{t("gallery-panel-edit-gallery-info.gallery_info")}</h3>
                        <div className="row dir">
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "d-none": GetLanguage() === 'en-US'
                                })}>
                                <div className="public-group">
                                    <input className="form-control input-public " required
                                        placeholder="" value="" />
                                    <label className="lable-public">{t("gallery-panel-edit-gallery-info.gallery_name_fa")}</label>
                                </div>
                            </div>
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "col-sm-12": GetLanguage() === 'en-US'
                                })}>
                                <div className="public-group en">
                                    <input className="form-control input-public en-lang " required
                                        placeholder=""
                                        value="" />
                                    <label className="lable-public en-lang">{t("gallery-panel-edit-gallery-info.gallery_name_en")}</label>
                                </div>
                            </div>
                            <div className={"col-sm-6"}>
                                <div className="public-group">
                                    <input className="form-control input-public " required
                                        placeholder="" value="" />
                                    <label className="lable-public">{t("gallery-panel-edit-gallery-info.country_name")}</label>
                                </div>
                            </div>
                            <div className={"col-sm-6"}>
                                <div className="public-group en">
                                    <input className="form-control input-public en-lang " required
                                        placeholder=""
                                        value="" />
                                    <label className="lable-public en-lang">{t("gallery-panel-edit-gallery-info.city_name")}</label>
                                </div>
                            </div>
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "d-none": GetLanguage() === 'en-US'
                                })}>
                                <div className="form-group">
                                    <textarea id="info-213" className="form-control "
                                        placeholder={t("gallery-panel-edit-gallery-info.exhibition_contact_placeholder_fa")}
                                        rows="8"></textarea>
                                    <label for="info-213" className="lable-public"></label>
                                </div>
                            </div>
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "col w-100": GetLanguage() === 'en-US'
                                })}>
                                <div className="form-group ">
                                    <textarea className="form-control" placeholder={t("gallery-panel-edit-gallery-info.exhibition_contact_placeholder_en")}
                                        rows="8"></textarea>
                                    <label className="lable-public"></label>
                                </div>
                            </div>
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "d-none": GetLanguage() === 'en-US'
                                })}

                            >
                                <div className="form-group">
                                    <textarea id="info-213" className="form-control "
                                        placeholder={t("gallery-panel-edit-gallery-info.exhibition_time_work_placeholder_fa")}
                                        rows="6"></textarea>
                                    <label for="info-213" className="lable-public"></label>
                                </div>
                            </div>
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "col w-100": GetLanguage() === 'en-US'
                                })}
                            >
                                <div className="form-group ">
                                    <textarea className="form-control" placeholder={t("gallery-panel-edit-gallery-info.exhibition_time_work_placeholder_en")}
                                        rows="6"></textarea>
                                    <label className="lable-public"></label>
                                </div>
                            </div>
                        </div>
                        <h3 className="info-title mrgt64 text-dir">{t("gallery-panel-edit-gallery-info.address_contact_info")}</h3>
                        <div class="row dir">
                            <div className={"col-sm-9"}>
                                <div class="public-group ">
                                    <input class="form-control input-public " required placeholder="" value="" />
                                    <label class="lable-public en-lang">{t("gallery-panel-edit-gallery-info.address_fa")}</label>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <button type="button" class="btn-blue" data-toggle="modal" data-target="#show-map">
                                    {t("gallery-panel-edit-gallery-info.select_on_map")}
                                </button>
                            </div>
                            <div class="clearfix"></div>
                            <div className={classnames("", {
                                "col-sm-12": GetLanguage() === 'fa-IR',
                                "d-none": GetLanguage() === 'en-US'
                            })}
                            >
                                <div class="public-group en">
                                    <input class="form-control input-public en-lang " required placeholder="" value="" />
                                    <label class="lable-public en-lang">{t("gallery-panel-edit-gallery-info.address_en")}</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="public-group">
                                    <input class="form-control input-public  persian-num" required placeholder="" value="" />
                                    <label class="lable-public">{t("gallery-panel-edit-gallery-info.phone_number")}</label>
                                </div>
                            </div>
                        </div>
                        <h3 className="info-title mrgt64 text-dir">{t("gallery-panel-edit-gallery-info.exhibitions")}</h3>
                        <div class="row dir">
                            <div class="col-sm-6">
                                <div class="public-group">
                                    <input class="form-control input-public " required placeholder value="" />
                                    <label class="lable-public">{t("gallery-panel-edit-gallery-info.exhibition_name")}</label>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-6">
                                <div class="public-group">
                                    <input class="form-control input-public persian-num " required placeholder="" value="" />
                                    <label class="lable-public">{t("gallery-panel-edit-gallery-info.from_date")}</label>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-6">
                                <div class="public-group">
                                    <input class="form-control input-public persian-num " required placeholder="" value="" />
                                    <label class="lable-public">{t("gallery-panel-edit-gallery-info.to_date")}</label>
                                </div>
                            </div>
                        </div>
                        <button class="btn-blue pull-left add-row" type="button">
                            <img src={add_white} width="24" height="24" alt="" class="" />
                        </button>
                    </div>
                    <div class="clearfix"></div>
                    <table class="table table-responsive mrgt64 d-table dir">
                        <tbody>
                            <tr>
                                <td data-label={t("gallery-panel-edit-gallery-info.exhibition_name")}>من</td>
                                <td data-label={t("gallery-panel-edit-gallery-info.start_date")} class="persian-num">8 بهمن 1398</td>
                                <td data-label={t("gallery-panel-edit-gallery-info.end_date")} class="persian-num">20 بهمن 1398</td>
                                <td data-label={t("gallery-panel-edit-gallery-info.details")}>
                                    <button class="btn-remove" type="button">
                                        <img src={delete_icon} width="32" height="32" alt="" class="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td data-label={t("gallery-panel-edit-gallery-info.exhibition_name")}>من</td>
                                <td data-label={t("gallery-panel-edit-gallery-info.start_date")} class="persian-num">8 بهمن 1398</td>
                                <td data-label={t("gallery-panel-edit-gallery-info.end_date")} class="persian-num">20 بهمن 1398</td>
                                <td data-label={t("gallery-panel-edit-gallery-info.details")}>
                                    <button class="btn-remove" type="button">
                                        <img src={delete_icon} width="32" height="32" alt="" class="" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td data-label={t("gallery-panel-edit-gallery-info.exhibition_name")}>من</td>
                                <td data-label={t("gallery-panel-edit-gallery-info.start_date")} class="persian-num">8 بهمن 1398</td>
                                <td data-label={t("gallery-panel-edit-gallery-info.end_date")} class="persian-num">20 بهمن 1398</td>
                                <td data-label={t("gallery-panel-edit-gallery-info.details")}>
                                    <button class="btn-remove" type="button">
                                        <img src={delete_icon} width="32" height="32" alt="" class="" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <div className="adv-btn">
                        <button type="button" className="btn-black center-block">{t("gallery-panel-edit-gallery-info.btn_confirm_info")}</button>
                    </div>
                    {
                        GetLanguage() === 'fa-IR' ?
                            <p class="aligncenter">
                                در صورتی که میخواهید گالری خود را حذف نمایید <a href="#" class="bluestyle">اینجا</a> کلیک نمایید
                            </p>
                            :
                            <p class="aligncenter">
                                To delete the gallery click<a href="#" class="bluestyle">here</a>
                            </p>
                    }
                </div>
            </div>
            <BasketFooterPanel />
        </>
    )
}

export default GalleryPanelEditGalleryInfo;
