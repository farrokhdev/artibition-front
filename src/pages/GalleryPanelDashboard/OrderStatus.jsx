import React from "react";
import { Pagination } from 'antd';
import { t } from 'i18next';

import artwork1 from "../../assets/img/artworks/artwork-1.jpg"

function OrderStatus() {
    return (
        <div className="box artistpanel-5">
            <div className="public-header">
                <h2 className="default-title pull-dir">{t("gallery-panel-dashboard.title")}</h2>
            </div>
            <table className="table table-responsive table-order d-table dir">
                <thead>
                    <tr>
                        <td>{t("gallery-panel-dashboard.tables.row")}</td>
                        <td>{t("gallery-panel-dashboard.tables.image")}</td>
                        <td>{t("gallery-panel-dashboard.tables.code")}</td>
                        <td>{t("gallery-panel-dashboard.tables.edition")}</td>
                        <td>{t("gallery-panel-dashboard.tables.price")}</td>
                        <td>{t("gallery-panel-dashboard.tables.discount")}</td>
                        <td>{t("gallery-panel-dashboard.tables.paid")}</td>
                        <td>{t("gallery-panel-dashboard.tables.status")}</td>
                        <td>{t("gallery-panel-dashboard.tables.details")}</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="pending-state">
                        <td data-label={t("gallery-panel-dashboard.tables.row")} className="persian-num">1</td>
                        <td data-label={t("gallery-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776" alt="" className="img-responsive" /></td>
                        <td data-label={t("gallery-panel-dashboard.tables.code")} className="persian-num">۱۲۷۵</td>
                        <td data-label={t("gallery-panel-dashboard.tables.edition")} className="persian-num">۲</td>
                        <td data-label={t("gallery-panel-dashboard.tables.price")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.discount")} className="persian-num">۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.paid")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.status")} className="persian-num">۹۹/۰۵/۲۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.details")} className="status">{t("gallery-panel-dashboard.tables.Waiting_to_send")}</td>
                        <td>
                            <button className="btn-outline-blue" type="button" data-toggle="modal" data-target="#modal-replied-price">مشاهده
                            </button>
                        </td>
                    </tr>
                    <tr className="pending-state">
                        <td data-label={t("gallery-panel-dashboard.tables.row")} className="persian-num">1</td>
                        <td data-label={t("gallery-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776" alt="" className="img-responsive" /></td>
                        <td data-label={t("gallery-panel-dashboard.tables.code")} className="persian-num">۱۲۷۵</td>
                        <td data-label={t("gallery-panel-dashboard.tables.edition")} className="persian-num">۲</td>
                        <td data-label={t("gallery-panel-dashboard.tables.price")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.discount")} className="persian-num">۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.paid")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.status")} className="persian-num">۹۹/۰۵/۲۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.details")} className="status">{t("gallery-panel-dashboard.tables.Waiting_to_send")}</td>
                        <td>
                            <button className="btn-outline-blue" type="button" data-toggle="modal" data-target="#modal-replied-price">مشاهده
                            </button>
                        </td>
                    </tr>
                    <tr className="delivered-state">
                        <td data-label={t("gallery-panel-dashboard.tables.row")} className="persian-num">1</td>
                        <td data-label={t("gallery-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776" alt="" className="img-responsive" /></td>
                        <td data-label={t("gallery-panel-dashboard.tables.code")} className="persian-num">۱۲۷۵</td>
                        <td data-label={t("gallery-panel-dashboard.tables.edition")} className="persian-num">۲</td>
                        <td data-label={t("gallery-panel-dashboard.tables.price")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.discount")} className="persian-num">۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.paid")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.status")} className="persian-num">۹۹/۰۵/۲۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.details")} className="status">{t("gallery-panel-dashboard.tables.delivered")}</td>
                        <td>
                            <button className="btn-outline-blue" type="button" data-toggle="modal" data-target="#modal-replied-price">مشاهده
                            </button>
                        </td>
                    </tr>
                    <tr className="pending-state">
                        <td data-label={t("gallery-panel-dashboard.tables.row")} className="persian-num">1</td>
                        <td data-label={t("gallery-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776" alt="" className="img-responsive" /></td>
                        <td data-label={t("gallery-panel-dashboard.tables.code")} className="persian-num">۱۲۷۵</td>
                        <td data-label={t("gallery-panel-dashboard.tables.edition")} className="persian-num">۲</td>
                        <td data-label={t("gallery-panel-dashboard.tables.price")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.discount")} className="persian-num">۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.paid")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.status")} className="persian-num">۹۹/۰۵/۲۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.details")} className="status">{t("gallery-panel-dashboard.tables.Waiting_to_send")}</td>
                        <td>
                            <button className="btn-outline-blue" type="button" data-toggle="modal" data-target="#modal-replied-price">مشاهده
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="row-pagination">
                <Pagination total={50}/>
            </div>
        </div>
    )
}

export default OrderStatus