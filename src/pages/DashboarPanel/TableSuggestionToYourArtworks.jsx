import React from 'react';
import { t } from 'i18next';

import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import empty_list_icon from '../../assets/img/empty_list.svg';


function TableSuggestionToYourArtworks() {
    return (
        <div class=" box artistpanel-3 ">
                        <div className="col w-100">
                        <div class="public-header">
                            <h2 class="default-title pull-dir">{t("content-panel-dashboard.tables.suggestion_artwork")}</h2>
                        </div>
                        <div>
                        <div className="d-flex box-dir-reverse">
                            <div collapse className="table-responsive ">
                                <table className="table  wallet-table  dir">
                                        <thead>
                                        <tr>
                                            <td>{t("content-panel-dashboard.tables.row")}</td>
                                            <td>{t("content-panel-dashboard.tables.image")}</td>
                                            <td>{t("content-panel-dashboard.tables.code")}</td>
                                            <td className='min-width-td-4'>{t("content-panel-dashboard.tables.price")}</td>
                                            <td className='min-width-td-4'>{t("content-panel-dashboard.tables.discount")}</td>
                                            <td className='min-width-td-4'>{t("content-panel-dashboard.tables.suggested")}</td>
                                            <td>{t("content-panel-dashboard.tables.date_registration")}</td>
                                            <td className='min-width-td-4'>{t("content-panel-dashboard.tables.your_respond")}</td>
                                            <td className="min-width-td-6">{t("content-panel-dashboard.tables.status")}</td>
                                            <td>{t("content-panel-dashboard.tables.details")}</td>
                                            <td>{t("content-panel-dashboard.tables.action")}</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="failed-state">
                                                <td data-label={t("content-panel-dashboard.tables.row")} class="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776"
                                                                            alt=""
                                                                            class="img-responsive"/></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} class="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} class="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} class="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} class="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} class="persian-num status text-center">رد شده</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} class="status"></td>
                                                <td>
                                                    <button class="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-suggestion">{t("content-panel-dashboard.tables.reply")}
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr class="replied-state">
                                            <td data-label={t("content-panel-dashboard.tables.row")} class="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776"
                                                                            alt=""
                                                                            class="img-responsive"/></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} class="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} class="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} class="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} class="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} class="persian-num status text-center">رد شده</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} class="status"></td>
                                                <td>
                                                    <button class="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-suggestion">{t("content-panel-dashboard.tables.reply")}
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr class="delivered-state">
                                            <td data-label={t("content-panel-dashboard.tables.row")} class="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776"
                                                                            alt=""
                                                                            class="img-responsive"/></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} class="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} class="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} class="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} class="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} class="persian-num status text-center">رد شده</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} class="status"></td>
                                                <td>
                                                    <button class="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-suggestion">{t("content-panel-dashboard.tables.reply")}
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr class="pending-state">
                                            <td data-label={t("content-panel-dashboard.tables.row")} class="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776"
                                                                            alt=""
                                                                            class="img-responsive"/></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} class="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} class="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} class="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} class="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} class="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} class="persian-num status text-center">رد شده</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} class="status"></td>
                                                <td>
                                                    <button class="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-suggestion">{t("content-panel-dashboard.tables.reply")}
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                        </div>

                        <div class="empty-order box">
                            <img src={empty_list_icon} width="72" height="72" alt="empty-icon"
                                class="center-block img-responsive"/>
                            <span class="bolder-title">{t("content-panel-dashboard.tables.empty_offers_artworks.title")}</span>
                            
                        </div>
                        </div>
                        
                    </div>
    )
}

export default TableSuggestionToYourArtworks;
