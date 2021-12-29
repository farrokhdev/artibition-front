import React from 'react';
import { t } from 'i18next';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import classnames from 'classnames';
import {GetLanguage} from '../../utils/utils';

import cloude_upload_icon from '../../assets/img/cloud-upload.svg';

function PanelCreateContent() {
    return (
        <>
            <HeaderPanel t={t} />

            <div className="panel-style container mx-auto px-0 w-100 bg-white ">

                
                <h2 className="default-title aligncenter mt-3">{t("content-panel-create-content.title")}</h2>
                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 create-exhibition">
                        <h3 className="info-title mrgt64 require text-dir">{t("content-panel-create-content.upload_poster.title")}</h3>
                        <ul className="content-type ">
                            <div className="d-block d-md-flex ">
                                <div className="col  px-0">
                                    <div className="d-flex box-dir-reverse">
                                        <li>
                                            <label className="container-radio text-dir">{t("content-panel-create-content.upload_poster.report")}
                                                <input type="radio" checked="checked" name="radio"/>
                                                <span className="checkmark-radio"></span>
                                            </label>
                                        </li>
                                    </div>
                                </div>
                                <div className="col  px-0">
                                    <div className="d-flex box-dir-reverse">
                                        <li><label className="container-radio">{t("content-panel-create-content.upload_poster.text_content")}
                                            <input type="radio" name="radio"/>
                                                <span className="checkmark-radio"></span>
                                            </label>
                                        </li>
                                    </div>
                                </div>
                                <div className="col px-0">
                                    <div className="d-flex box-dir-reverse">
                                        <li>
                                            <label className="container-radio">{t("content-panel-create-content.upload_poster.link")}
                                                <input type="radio" name="radio"/>
                                                <span className="checkmark-radio"></span>
                                            </label>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </ul>
                        <h3 className="info-title mrgt64 require text-dir">{t("content-panel-create-content.upload.title")}</h3>
                        <div className="upload-img-artwork">
                            <div className="btn-upload-artwork">
                                <img src={cloude_upload_icon} width="64" height="57" alt="" className=""/>
                                <p>{t("content-panel-create-content.upload.text")}
                                    <br/>
                                    {t("content-panel-create-content.upload.or")}</p>
                                <label for="file-upload" className="btn-blue">{t("content-panel-create-content.upload.btn")}</label>
                                <p className="upload-size"> {t("content-panel-create-content.upload.tip")}</p>
                            </div>
                            <input id="file-upload" type="file"/>
                        </div>
                        <div className="info-sec">
                            <div className="row">
                                <div 
                                    className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "d-none": GetLanguage() === 'en-US'
                                    })}
                                
                                >
                                    <div className="public-group">
                                        <input className="form-control input-public " required
                                            placeholder="" value=""/>
                                        <label className="lable-public">{t("content-panel-create-content.subject_fa")}</label>
                                    </div>
                                </div>
                                <div 
                                    className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "col w-100": GetLanguage() === 'en-US'
                                    })}
                                
                                >
                                    <div className="public-group en">
                                        <input className="form-control input-public en-lang " required
                                            placeholder=""
                                            value=""/>
                                        <label className="lable-public en-lang">{t("content-panel-create-content.subject_en")}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div 
                                
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "d-none": GetLanguage() === 'en-US'
                                })}
                                
                                >
                                    <div className="form-group">
                                        <textarea id="info-213" className="form-control "
                                                placeholder={t("content-panel-create-content.placeholder_fa")}
                                                rows="8"></textarea>
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
                                        <textarea className="form-control" placeholder={t("content-panel-create-content.placeholder_en")}
                                                rows="8"></textarea>
                                        <label className="lable-public"></label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="public-group en">
                                    <input className="form-control input-public " required
                                        placeholder="" value=""/>
                                    <label className="lable-public">{t("content-panel-create-content.link")}</label>
                                </div>
                            </div>
                        </div>
                        <div className="adv-btn">
                            <button type="button" className="btn-default pull-dir graycolor">{t("content-panel-create-content.btn_cancel")}</button>
                            <button type="button" className="btn-black pull-dir">{t("content-panel-create-content.btn_create_content")}</button>
                        </div>

                    </div>


            </div>
                <BasketFooterPanel />
    </>
    )
}

export default PanelCreateContent;
