import React from 'react';
import { t } from 'i18next';

import empty_list_icon from '../../assets/img/empty_list.svg';
import add_white_icon from '../../assets/img/add-white.png';
import artwork1 from '../../assets/img/artworks/artwork-1.jpg';


function TableActiveOrders() {
    return (
        <div className=" box artistpanel-3 ">
                        <div className="col w-100 px-0">
                        <div className="public-header">
                            <h2 className="default-title pull-dir">{t("content-panel-dashboard.tables.order_active")}</h2>
                        </div>
                        <div>
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
                                                <td data-label={t("content-panel-dashboard.tables.status")} className="persian-num status text-center">منتظر ارسال اثر به آرتیبیشن</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} className=""> </td>
                                                <td data-label={t("content-panel-dashboard.tables.action")}>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-price">{t("content-panel-dashboard.tables.veiw")}
                                                    </button>
                                                </td>
                                            </tr>

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
                                                <td data-label={t("content-panel-dashboard.tables.status")} className="persian-num status text-center">منتظر ارسال اثر به آرتیبیشن</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} className=""> </td>
                                                <td data-label={t("content-panel-dashboard.tables.action")}>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-price">{t("content-panel-dashboard.tables.veiw")}
                                                    </button>
                                                </td>
                                            </tr>

                                            <tr className='delivered-state'>
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
                                                <td data-label={t("content-panel-dashboard.tables.status")} className="persian-num status text-center">منتظر ارسال اثر به آرتیبیشن</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} className=""> </td>
                                                <td data-label={t("content-panel-dashboard.tables.action")}>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-price">{t("content-panel-dashboard.tables.veiw")}
                                                    </button>
                                                </td>
                                            </tr>
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
                                                <td data-label={t("content-panel-dashboard.tables.status")} className="persian-num status text-center">منتظر ارسال اثر به آرتیبیشن</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} className=""> </td>
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
                        </div>

                        <div className="empty-order box">
                            <img src={empty_list_icon} width="72" height="72" alt="empty-icon"
                                className="center-block img-responsive"/>
                            <span className="bolder-title">{t("content-panel-dashboard.tables.empty_active_order.title")}</span>
                            <p>
                            {t("content-panel-dashboard.tables.empty_active_order.info.text1")}
                                <br/>
                                {t("content-panel-dashboard.tables.empty_active_order.info.text2")}
                            </p>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn-blue d-flex box-dir-reverse align-items-center">
                                    <img src={add_white_icon} width="12" height="12" alt="" className="mx-2"/>
                                    <span>{t("content-panel-dashboard.box_status.btn")}</span>
                                </button>
                            </div>
                        </div>
                        </div>
                        
                    </div>
    )
}

export default TableActiveOrders
