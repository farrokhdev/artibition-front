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
                                                <td>{t("content-panel-manage-artworks.tables.row")}</td>
                                                <td>{t("content-panel-manage-artworks.tables.image")}</td>
                                                <td>{t("content-panel-manage-artworks.tables.code")}</td>
                                                <td className='min-width-td-2'>{t("content-panel-manage-artworks.tables.edition")}</td>
                                                <td className='min-width-td-2'>{t("content-panel-manage-artworks.tables.size")}</td>
                                                <td className='min-width-td-4'>{t("content-panel-manage-artworks.tables.price")}</td>
                                                <td className='min-width-td-1'>{t("content-panel-manage-artworks.tables.discount")}</td>
                                                <td className='min-width-td-1'>{t("content-panel-manage-artworks.tables.last_edition")}</td>
                                                <td className='min-width-td-2'>{t("content-panel-manage-artworks.tables.date_registration")}</td>
                                                <td className='min-width-td-4'>{t("content-panel-manage-artworks.tables.paid")}</td>
                                                <td className="min-width-td-6">{t("content-panel-manage-artworks.tables.status")}</td>
                                                <td>{t("content-panel-manage-artworks.tables.details")}</td>
                                                <td>{t("content-panel-manage-artworks.tables.action")}</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='pending-state'>
                                                <td data-label={t("content-panel-manage-artworks.tables.row")} className="persian-num">1</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.image")}>
                                                    <img 
                                                        src={artwork1} 
                                                        width="1776" height="1776" alt=""
                                                        className="img-responsive "
                                                    />
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.code")} className="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.edition")} className="persian-num">۲</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.size")} className="persian-num">60 در 60</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.price")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.discount")} className="persian-num">۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.last_edition")} className="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.date_registration")} className="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.paid")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td 
                                                    data-label={t("content-panel-manage-artworks.tables.status")} 
                                                    className="persian-num status text-dir text-md-center">
                                                        {t("content-panel-manage-artworks.tables.Waiting_to_send")}
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.details")} className="">
                                                    {t("content-panel-manage-artworks.tables.details")}     
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.action")}>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-price">{t("content-panel-manage-artworks.tables.veiw")}
                                                    </button>
                                                </td>
                                            </tr>

                                            <tr className='pending-state'>
                                            <td data-label={t("content-panel-manage-artworks.tables.row")} className="persian-num">2</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.image")}>
                                                    <img 
                                                        src={artwork1} 
                                                        width="1776" height="1776" alt=""
                                                        className="img-responsive "
                                                    />
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.code")} className="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.edition")} className="persian-num">۲</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.size")} className="persian-num">60 در 60</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.price")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.discount")} className="persian-num">۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.last_edition")} className="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.date_registration")} className="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.paid")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td 
                                                    data-label={t("content-panel-manage-artworks.tables.status")} 
                                                    className="persian-num status text-dir text-md-center"
                                                >
                                                        {t("content-panel-manage-artworks.tables.pending")}
                                                </td>
                                                <td 
                                                    data-label={t("content-panel-manage-artworks.tables.details")} 
                                                    className=""
                                                >
                                                        {t("content-panel-manage-artworks.tables.details")} 
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.action")}>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-price">{t("content-panel-manage-artworks.tables.veiw")}
                                                    </button>
                                                </td>
                                            </tr>

                                            <tr className='delivered-state'>
                                            <td data-label={t("content-panel-manage-artworks.tables.row")} className="persian-num">3</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.image")}>
                                                    <img 
                                                        src={artwork1} 
                                                        width="1776" height="1776" alt=""
                                                        className="img-responsive "
                                                    />
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.code")} className="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.edition")} className="persian-num">۲</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.size")} className="persian-num">60 در 60</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.price")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.discount")} className="persian-num">۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.last_edition")} className="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.date_registration")} className="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.paid")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.status")} className="persian-num status text-dir text-md-center">
                                                    {t("content-panel-manage-artworks.tables.active")}
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.details")} className="">
                                                    {t("content-panel-manage-artworks.tables.details")}     
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.action")}>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-price">{t("content-panel-manage-artworks.tables.veiw")}
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className ='noapprove-state'>
                                            <td data-label={t("content-panel-manage-artworks.tables.row")} className="persian-num">4</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.image")}>
                                                    <img 
                                                        src={artwork1} 
                                                        width="1776" height="1776" alt=""
                                                        className="img-responsive justify-custom"
                                                    />
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.code")} className="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.edition")} className="persian-num">۲</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.size")} className="persian-num">60 در 60</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.price")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.discount")} className="persian-num">۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.last_edition")} className="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.date_registration")} className="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.paid")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.status")} className="persian-num status text-dir text-md-center">
                                                    <span>{t("content-panel-manage-artworks.tables.not_approved")}</span>
                                                    <span className="bluestyle">{t("content-panel-manage-artworks.tables.review")}</span>
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.details")} className="">
                                                    {t("content-panel-manage-artworks.tables.details")}     
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.action")}>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-price">{t("content-panel-manage-artworks.tables.veiw")}
                                                    </button>
                                                </td>
                                            </tr>

                                            <tr className ='inactive-state'>
                                                <td data-label={t("content-panel-manage-artworks.tables.row")} className="persian-num">5</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.image")}>
                                                    <img 
                                                        src={artwork1} 
                                                        width="1776" height="1776" alt=""
                                                        className="img-responsive justify-custom"
                                                    />
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.code")} className="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.edition")} className="persian-num">۲</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.size")} className="persian-num">60 در 60</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.price")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.discount")} className="persian-num">۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.last_edition")} className="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.date_registration")} className="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.paid")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.status")} className="persian-num status text-dir text-md-center">
                                                    <span>{t("content-panel-manage-artworks.tables.deactive")}</span>
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.details")} className="">
                                                    {t("content-panel-manage-artworks.tables.details")}     
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.action")}>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                            data-target="#modal-replied-price">{t("content-panel-manage-artworks.tables.veiw")}
                                                    </button>
                                                </td>
                                            </tr>

                                            <tr className ='soldout-state'>
                                                <td data-label={t("content-panel-manage-artworks.tables.row")} className="persian-num">6</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.image")}>
                                                    <img 
                                                        src={artwork1} 
                                                        width="1776" height="1776" alt=""
                                                        className="img-responsive justify-custom"
                                                    />
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.code")} className="persian-num">۱۲۷۵</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.edition")} className="persian-num">۲</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.size")} className="persian-num">60 در 60</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.price")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.discount")} className="persian-num">۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.last_edition")} className="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.date_registration")} className="persian-num">۹۹/۰۵/۲۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.paid")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                                                <td data-label={t("content-panel-manage-artworks.tables.status")} className="persian-num status text-dir text-md-center">
                                                    {t("content-panel-manage-artworks.tables.sold")}
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.details")} className="">
                                                    {t("content-panel-manage-artworks.tables.details")}     
                                                </td>
                                                <td data-label={t("content-panel-manage-artworks.tables.action")}>
                                                    <button className="btn-outline-blue uneditable" type="button">
                                                         {t("content-panel-manage-artworks.tables.uneditable")}
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
