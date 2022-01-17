import React from "react";
import { t } from 'i18next';
import classnames from 'classnames';
import { GetLanguage } from "../../utils/utils";


function WelcomeToAdvistoryStep({ prev, next }) {
    return (
        <div className="col-lg-7 col-md-10 float-none mx-auto">
            <div className="adv-content">
                <h2 className="adv-title">{t("advisory.welcome_step.title")}</h2>
                <p className="text-justify">{t("advisory.welcome_step.description")}</p>
                <ul className="adv-list">
                    <li className="row">
                        <div className={classnames("text-dir", {
                            "col-sm-6": GetLanguage() === 'fa-IR',
                            "col-sm-8": GetLanguage() === 'en-US'
                        })}>
                            <span className="persian-num">1)</span>
                            <label for="adv1">{t("advisory.welcome_step.adv_question.pecific_category_question")}</label>
                        </div>
                        <div className={classnames("", {
                            "col-sm-6": GetLanguage() === 'fa-IR',
                            "col-sm-4": GetLanguage() === 'en-US'
                        })}>
                            <div className="form-group">
                                <select className="form-control" id="adv1">
                                    <option>{t("advisory.welcome_step.adv_question.no_difference")}</option>
                                    <option>{t("advisory.welcome_step.adv_question.different")}</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li className="row">
                        <div className={classnames("text-dir", {
                            "col-sm-6": GetLanguage() === 'fa-IR',
                            "col-sm-8": GetLanguage() === 'en-US'
                        })}>
                            <span className="persian-num">2)</span>
                            <label for="adv2">{t("advisory.welcome_step.adv_question.investment_question")}</label>
                        </div>
                        <div className={classnames("", {
                            "col-sm-6": GetLanguage() === 'fa-IR',
                            "col-sm-4": GetLanguage() === 'en-US'
                        })}>
                            <div className="form-group">
                                <select className="form-control" id="adv2">
                                    <option>{t("advisory.welcome_step.adv_question.yes")}</option>
                                    <option>{t("advisory.welcome_step.adv_question.no")}</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li className="row">
                        <div className={classnames("text-dir", {
                            "col-sm-6": GetLanguage() === 'fa-IR',
                            "col-sm-8": GetLanguage() === 'en-US'
                        })}>
                            <span className="persian-num">3)</span>
                            <label for="adv3">{t("advisory.welcome_step.adv_question.type_investment_question")}</label>
                        </div>
                        <div className={classnames("", {
                            "col-sm-6": GetLanguage() === 'fa-IR',
                            "col-sm-4": GetLanguage() === 'en-US'
                        })}>
                            <div className="form-group">
                                <select className="form-control" id="adv3">
                                    <option>{t("advisory.welcome_step.adv_question.investing_teenagers")}</option>
                                    <option>{t("advisory.welcome_step.adv_question.investing_young_people")}</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li className="row">
                        <div className={classnames("text-dir", {
                            "col-sm-6": GetLanguage() === 'fa-IR',
                            "col-sm-8": GetLanguage() === 'en-US'
                        })}>
                            <span className="persian-num">4)</span>
                            <label for="adv4">{t("advisory.welcome_step.adv_question.specific_artist_question")}</label>
                        </div>
                        <div className={classnames("", {
                            "col-sm-6": GetLanguage() === 'fa-IR',
                            "col-sm-4": GetLanguage() === 'en-US'
                        })}>
                            <div className="form-group">
                                <select className="form-control" id="adv4">
                                    <option>{t("advisory.welcome_step.adv_question.yes")}</option>
                                    <option>{t("advisory.welcome_step.adv_question.no")}</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder={t("advisory.welcome_step.adv_question.Enter_artist_name")} />
                            </div>
                        </div>
                    </li>
                    <li className="row">
                        <div className={classnames("text-dir", {
                            "col-sm-6": GetLanguage() === 'fa-IR',
                            "col-sm-8": GetLanguage() === 'en-US'
                        })}>
                            <span className="persian-num">5)</span>
                            <label for="adv5">{t("advisory.welcome_step.adv_question.budget_question")}</label>
                        </div>
                        <div className={classnames("", {
                            "col-sm-6": GetLanguage() === 'fa-IR',
                            "col-sm-4": GetLanguage() === 'en-US'
                        })}>
                            <div className="form-group">
                                <select className="form-control" id="adv5">
                                    <option>{t("advisory.welcome_step.adv_question.less_price")}</option>
                                    <option>{t("advisory.welcome_step.adv_question.more_price")}</option>
                                </select>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="adv-btn" style={{ backgroundColor: "white" }}>
                <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 padding-0 m-dir-rev-auto">
                    <button type="button" className="btn-next pull-dir-rev dir-rtl" onClick={() => next()}>{t("advisory.welcome_step.next_btn")}</button>
                </div>
            </div>
        </div>
    )
}

export default WelcomeToAdvistoryStep