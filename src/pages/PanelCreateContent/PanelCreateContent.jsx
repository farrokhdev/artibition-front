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

                
                <h2 class="default-title aligncenter mt-3">{t("content-panel-create-content.title")}</h2>
                    <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 create-exhibition">
                        <h3 class="info-title mrgt64 require text-dir">{t("content-panel-create-content.upload_poster.title")}</h3>
                        <ul class="content-type ">
                            <div className="d-block d-md-flex ">
                                <div className="col  px-0">
                                    <div className="d-flex box-dir-reverse">
                                        <li>
                                            <label class="container-radio text-dir">{t("content-panel-create-content.upload_poster.report")}
                                                <input type="radio" checked="checked" name="radio"/>
                                                <span class="checkmark-radio"></span>
                                            </label>
                                        </li>
                                    </div>
                                </div>
                                <div className="col  px-0">
                                    <div className="d-flex box-dir-reverse">
                                        <li><label class="container-radio">{t("content-panel-create-content.upload_poster.text_content")}
                                            <input type="radio" name="radio"/>
                                                <span class="checkmark-radio"></span>
                                            </label>
                                        </li>
                                    </div>
                                </div>
                                <div className="col px-0">
                                    <div className="d-flex box-dir-reverse">
                                        <li>
                                            <label class="container-radio">{t("content-panel-create-content.upload_poster.link")}
                                                <input type="radio" name="radio"/>
                                                <span class="checkmark-radio"></span>
                                            </label>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </ul>
                        <h3 class="info-title mrgt64 require text-dir">{t("content-panel-create-content.upload.title")}</h3>
                        <div class="upload-img-artwork">
                            <div class="btn-upload-artwork">
                                <img src={cloude_upload_icon} width="64" height="57" alt="" class=""/>
                                <p>{t("content-panel-create-content.upload.text")}
                                    <br/>
                                    {t("content-panel-create-content.upload.or")}</p>
                                <label for="file-upload" class="btn-blue">{t("content-panel-create-content.upload.btn")}</label>
                                <p class="upload-size"> {t("content-panel-create-content.upload.tip")}</p>
                            </div>
                            <input id="file-upload" type="file"/>
                        </div>
                        <div class="info-sec">
                            <div class="row">
                                <div 
                                    className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "d-none": GetLanguage() === 'en-US'
                                    })}
                                
                                >
                                    <div class="public-group">
                                        <input class="form-control input-public " required
                                            placeholder="" value=""/>
                                        <label class="lable-public">{t("content-panel-create-content.subject_fa")}</label>
                                    </div>
                                </div>
                                <div 
                                    className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "col w-100": GetLanguage() === 'en-US'
                                    })}
                                
                                >
                                    <div class="public-group en">
                                        <input class="form-control input-public en-lang " required
                                            placeholder=""
                                            value=""/>
                                        <label class="lable-public en-lang">{t("content-panel-create-content.subject_en")}</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div 
                                
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "d-none": GetLanguage() === 'en-US'
                                })}
                                
                                >
                                    <div class="form-group">
                                        <textarea id="info-213" class="form-control "
                                                placeholder={t("content-panel-create-content.placeholder_fa")}
                                                rows="8"></textarea>
                                        <label for="info-213" class="lable-public"></label>
                                    </div>
                                </div>
                                <div 
                                    className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "col w-100": GetLanguage() === 'en-US'
                                    })}
                                >
                                    <div class="form-group ">
                                        <textarea class="form-control" placeholder={t("content-panel-create-content.placeholder_en")}
                                                rows="8"></textarea>
                                        <label class="lable-public"></label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="public-group en">
                                    <input class="form-control input-public " required
                                        placeholder="" value=""/>
                                    <label class="lable-public">{t("content-panel-create-content.link")}</label>
                                </div>
                            </div>
                        </div>
                        <div class="adv-btn">
                            <button type="button" class="btn-default pull-dir graycolor">{t("content-panel-create-content.btn_cancel")}</button>
                            <button type="button" class="btn-black pull-dir">{t("content-panel-create-content.btn_create_content")}</button>
                        </div>

                    </div>


            </div>
                <BasketFooterPanel />
    </>
    )
}

export default PanelCreateContent;
