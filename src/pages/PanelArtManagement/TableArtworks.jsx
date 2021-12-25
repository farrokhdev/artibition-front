import React from 'react';
import { t } from 'i18next';

import artwork1 from '../../assets/img/artworks/artwork-1.jpg';

function TableArtworks() {
    return (
        <div className="d-flex box-dir-reverse ">
                <div collapse className="table-responsive ">
                    <table className="table  wallet-table  dir">
                                        <thead>
                                            <tr>
                                                <td>{t("content-panel-dashboard.tables.row")}</td>
                                                <td>{t("content-panel-dashboard.tables.image")}</td>
                                                <td>{t("content-panel-dashboard.tables.code")}</td>
                                                <td className='min-width-td-2'>{t("content-panel-dashboard.tables.edition")}</td>
                                                <td className='min-width-td-4'>{t("content-panel-dashboard.tables.price")}</td>
                                                <td className='min-width-td-1'>{t("content-panel-dashboard.tables.discount")}</td>
                                                <td className='min-width-td-4'>{t("content-panel-dashboard.tables.paid")}</td>
                                                <td className="min-width-td-6">{t("content-panel-dashboard.tables.status")}</td>
                                                <td>{t("content-panel-dashboard.tables.details")}</td>
                                                <td>{t("content-panel-dashboard.tables.action")}</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='pending-state'>
                                                <td data-label={t("content-panel-dashboard.tables.row")} className="persian-num">1</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}>
                                                    <img 
                                                        src={artwork1} 
                                                        width="1776" height="1776" alt=""
                                                        className="img-responsive "
                                                    />
                                                </td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} className="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.edition")} className="persian-num">۲</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} className="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.paid")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} className="persian-num status text-dir text-md-center">منتظر ارسال اثر به آرتیبیشن</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} className="">جزییات </td>
                                                <td data-label={t("content-panel-dashboard.tables.action")}>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-price">{t("content-panel-dashboard.tables.veiw")}
                                                    </button>
                                                </td>
                                            </tr>

                                            <tr className='pending-state'>
                                            <td data-label={t("content-panel-dashboard.tables.row")} className="persian-num">2</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}>
                                                    <img 
                                                        src={artwork1} 
                                                        width="1776" height="1776" alt=""
                                                        className="img-responsive "
                                                    />
                                                </td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} className="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.edition")} className="persian-num">۲</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} className="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.paid")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} className="persian-num status text-dir text-md-center">منتظر ارسال اثر به آرتیبیشن</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} className="">جزییات </td>
                                                <td data-label={t("content-panel-dashboard.tables.action")}>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-price">{t("content-panel-dashboard.tables.veiw")}
                                                    </button>
                                                </td>
                                            </tr>

                                            <tr className='delivered-state'>
                                            <td data-label={t("content-panel-dashboard.tables.row")} className="persian-num">3</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}>
                                                    <img 
                                                        src={artwork1} 
                                                        width="1776" height="1776" alt=""
                                                        className="img-responsive "
                                                    />
                                                </td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} className="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.edition")} className="persian-num">۲</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} className="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.paid")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} className="persian-num status text-dir text-md-center">منتظر ارسال اثر به آرتیبیشن</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} className="">جزییات </td>
                                                <td data-label={t("content-panel-dashboard.tables.action")}>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-price">{t("content-panel-dashboard.tables.veiw")}
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className ='pending-state'>
                                            <td data-label={t("content-panel-dashboard.tables.row")} className="persian-num">4</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}>
                                                    <img 
                                                        src={artwork1} 
                                                        width="1776" height="1776" alt=""
                                                        className="img-responsive justify-custom"
                                                    />
                                                </td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} className="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-dashboard.tables.edition")} className="persian-num">۲</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} className="persian-num">۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.paid")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} className="persian-num status text-dir text-md-center">منتظر ارسال اثر به آرتیبیشن</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} className="">جزییات </td>
                                                <td data-label={t("content-panel-dashboard.tables.action")}>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-price">{t("content-panel-dashboard.tables.veiw")}
                                                    </button>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default TableArtworks
