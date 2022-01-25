import React, { useEffect, useState } from "react";
import { message, Pagination } from 'antd';
import { t } from 'i18next';
import moment from 'jalali-moment'

import artwork1 from "../../assets/img/artworks/artwork-1.jpg"
import apiServices from "../../utils/api.services";

function OrderStatus() {


    const [orders, setOrders] = useState([])


    useEffect(() => {
        apiServices.get(`/gallery/${1}/orders/`, "")
            .then(res => {
                if (res.data) {
                    setOrders(res.data.data.results)
                } else {
                    message.error(res.response.data.message)
                }

            })
    }, [])


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
                        <td>{t("gallery-panel-dashboard.tables.date")}</td>
                        <td>{t("gallery-panel-dashboard.tables.status")}</td>
                        <td>{t("gallery-panel-dashboard.tables.details")}</td>
                    </tr>
                </thead>
                <tbody>
                    {orders &&
                        orders.map((order, index) => {
                            console.log(order);
                            return (
                                <tr className="pending-state">
                                    <td data-label={t("gallery-panel-dashboard.tables.row")} className="persian-num">{index + 1}</td>
                                    <td data-label={t("gallery-panel-dashboard.tables.image")}><img src={order.product_item.product.medias[0]} width="1776" height="1776" alt="" className="img-responsive" /></td>
                                    <td data-label={t("gallery-panel-dashboard.tables.code")} className="persian-num">{order.product_item.product.unique_code.substr(order.product_item.product.unique_code.length - 12)}</td>
                                    <td data-label={t("gallery-panel-dashboard.tables.edition")} className="persian-num">{order.product_item.edition_number}</td>
                                    <td data-label={t("gallery-panel-dashboard.tables.price")} className="persian-num">{order.product_item.toman_price}</td>
                                    <td data-label={t("gallery-panel-dashboard.tables.discount")} className="persian-num">{order.product_item.product.discount.value}{order.product_item.product.discount.type === "percentage" ? "%" : ""}</td>
                                    <td data-label={t("gallery-panel-dashboard.tables.paid")} className="persian-num">{order.product_item.reserved_toman_price}</td>
                                    {/* <td data-label={t("gallery-panel-dashboard.tables.status")} className="persian-num">{moment(order.product_item.creation_date).locale('fa').format('YYYY/MM/DD')}</td> */}
                                    <td data-label={t("gallery-panel-dashboard.tables.status")} className="persian-num">{moment('2022-01-23T09:40:25.593Z').locale('fa').format('YYYY/MM/DD')}</td>
                                    <td data-label={t("gallery-panel-dashboard.tables.details")} className="status">{t("gallery-panel-dashboard.tables.Waiting_to_send")}</td>
                                    <td>
                                        <button className="btn-outline-blue" type="button" data-toggle="modal" data-target="#modal-replied-price">
                                            {t("gallery-panel-dashboard.tables.view")}
                                        </button>
                                    </td>
                                </tr>
                            )
                        })

                    }






                    {/* <tr className="pending-state">
                        <td data-label={t("gallery-panel-dashboard.tables.row")} className="persian-num">1</td>
                        <td data-label={t("gallery-panel-dashboard.tables.image")}><img src={artwork1} width="1776" height="1776" alt="" className="img-responsive" /></td>
                        <td data-label={t("gallery-panel-dashboard.tables.code")} className="persian-num">۱۲۷۵</td>
                        <td data-label={t("gallery-panel-dashboard.tables.edition")} className="persian-num">۲</td>
                        <td data-label={t("gallery-panel-dashboard.tables.price")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.discount")} className="persian-num">۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.paid")} className="persian-num">۴,۰۰۰,۰۰۰</td>
                        <td data-label={t("gallery-panel-dashboard.tables.status")} className="persian-num">{moment('2022-01-03T09:40:25.593Z').locale('fa').format('YYYY/MM/DD')}</td>
                        <td data-label={t("gallery-panel-dashboard.tables.details")} className="status">{t("gallery-panel-dashboard.tables.Waiting_to_send")}</td>
                        <td>
                            <button className="btn-outline-blue" type="button" data-toggle="modal" data-target="#modal-replied-price">
                                {t("gallery-panel-dashboard.tables.view")}
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
                            <button className="btn-outline-blue" type="button" data-toggle="modal" data-target="#modal-replied-price">
                                {t("gallery-panel-dashboard.tables.view")}
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
                            <button className="btn-outline-blue" type="button" data-toggle="modal" data-target="#modal-replied-price">
                                {t("gallery-panel-dashboard.tables.view")}
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
                            <button className="btn-outline-blue" type="button" data-toggle="modal" data-target="#modal-replied-price">
                                {t("gallery-panel-dashboard.tables.view")}
                            </button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
            <div className="row-pagination">
                <Pagination total={50} />
            </div>
        </div>
    )
}

export default OrderStatus