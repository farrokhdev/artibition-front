import React from 'react'
import { t } from 'i18next';
import artwork1 from '../../assets/img/artworks/artwork-1.jpg';

function TableOrders() {
    return (
        <div className=" box artistpanel-3 ">
                        <div className="col w-100">
                        <div className="public-header">
                            <h2 className="default-title pull-dir">{t("content-panel-dashboard.tables.orders")}</h2>
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
                                            <tr className="failed-state">
                                                <td data-label={t("content-panel-dashboard.tables.row")} className="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776"
                                                                            alt=""
                                                                            className="img-responsive"/></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} className="persian-num">????????</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} className="persian-num">??,??????,??????</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} className="persian-num">??</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} className="persian-num">??,??????,??????</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} className="persian-num">????/????/????</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} className="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} className="persian-num status text-center">???? ??????</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} className="status"></td>
                                                <td>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-suggestion">{t("content-panel-dashboard.tables.reply")}
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="failed-state">
                                                <td data-label={t("content-panel-dashboard.tables.row")} className="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776"
                                                                            alt=""
                                                                            className="img-responsive"/></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} className="persian-num">????????</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} className="persian-num">??,??????,??????</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} className="persian-num">??</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} className="persian-num">??,??????,??????</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} className="persian-num">????/????/????</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} className="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} className="persian-num status text-center">???? ??????</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} className="status"></td>
                                                <td>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-suggestion">{t("content-panel-dashboard.tables.reply")}
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="failed-state">
                                                <td data-label={t("content-panel-dashboard.tables.row")} className="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776"
                                                                            alt=""
                                                                            className="img-responsive"/></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} className="persian-num">????????</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} className="persian-num">??,??????,??????</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} className="persian-num">??</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} className="persian-num">??,??????,??????</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} className="persian-num">????/????/????</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} className="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} className="persian-num status text-center">???? ??????</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} className="status"></td>
                                                <td>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-suggestion">{t("content-panel-dashboard.tables.reply")}
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="pending-state">
                                                <td data-label={t("content-panel-dashboard.tables.row")} className="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776"
                                                                            alt=""
                                                                            className="img-responsive"/></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} className="persian-num">????????</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} className="persian-num">??,??????,??????</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} className="persian-num">??</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} className="persian-num">??,??????,??????</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} className="persian-num">????/????/????</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} className="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} className="persian-num status text-center">???? ??????</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} className="status"></td>
                                                <td>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-suggestion">{t("content-panel-dashboard.tables.reply")}
                                                    </button>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                        </div>

                        
                        </div>
                        
                    </div>
    )
}

export default TableOrders;
