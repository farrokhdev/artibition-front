import { t } from 'i18next';
import React from 'react';
import newsletter from '../../assets/img/newsletter.svg';
export default function Newslatter() {
    return (
        <div className="newsletter">
        <div className="d-block d-md-flex">
            <div className="col ">
                <div className="row-left-15">
                    <div className="newsletter-right">
                        <img src={newsletter} className="pull-right" width="96" height="80" alt="خبرنامه-آرتیبیشن"/>
                        <h3 className="default-title">{t("subscribe-newsletter-home.title")}</h3>
                        <p className="newsletter-text">{t("subscribe-newsletter-home.text-info")}</p>
                        <div className="nl-input">
                            <input placeholder={t("subscribe-newsletter-home.placeholder-email")}/>
                            <button type="button">{t("subscribe-newsletter-home.submit-email-btn")}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix visible-xs"></div>
            <div className="col ">
                <div className="row-right-15">
                    <div className="newsletter-left">
                        <button type="button" className="btn-nlupload">{t("upload")}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
