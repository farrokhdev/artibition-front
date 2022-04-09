import React, { useEffect, useState } from "react";
import { message, Pagination } from 'antd';
import { t } from 'i18next';
import moment from 'jalali-moment'
import { useSelector } from 'react-redux'
import artwork1 from "../../assets/img/artworks/artwork-1.jpg"
import apiServices from "../../utils/api.services";
import galleryReducer from "../../redux/reducers/Gallery/gallery.reducer";
import { ORDER_SELERS } from '../../utils/index'
import queryString from 'query-string';
import { isAccept } from "../../utils/converToPersian";
import { handleShowImage } from '../../utils/showImageProduct';

function OrderStatus() {


    const [orders, setOrders] = useState([])
    const { gallery_id } = useSelector((state) => state.galleryReducer)
    const [orderList, setOrderList] = useState("");
    const [suggestionsCount, setSuggestionsCount] = useState("");
    const [params, setParams] = useState({
        page: 1,
        status: "",
    });

    const { roles } = useSelector((state) => state.authReducer)
    const getUserRole = () => {
        let userRole = "user"
        if (typeof roles === "string") {
            return roles
        } else {
            if (roles && roles.length > 0) {
                if (roles.includes("seller")) {
                    userRole = "seller"
                }
                if (roles.includes("artist")) {
                    userRole = "artist"
                }
            } else {
                userRole = 'user'
            }
        }
        return userRole
    }

    useEffect(() => {
        if (getUserRole() === "gallery") {
            apiServices.get(`/gallery/${gallery_id}/orders/`, "")
                .then(res => {
                    if (res.data) {
                        setOrders(res.data.data.results)
                    } else {
                        message.error(res.response.data.message)
                    }

                }).catch(err => {
                    console.log(err);
                })
        } else {
            apiServices.get(ORDER_SELERS, queryString.stringify(params))
                .then(resp => {
                    setOrderList(resp.data.data.results)
                    setSuggestionsCount(resp.data.data.count)
                })
                .catch(err => {
                    console.error(err);
                })
        }

    }, [])

    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }

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
                    {orderList &&
                        orderList?.map((order, index) => {
                            return (
                                <tr className="pending-state">
                                    <td data-label={t("gallery-panel-dashboard.tables.row")} className="persian-num">{index + 1}</td>
                                    <td data-label={t("gallery-panel-dashboard.tables.image")}><img src={order?.product_item?.product.medias[0]?.exact_url} width="1776" height="1776" alt="" className="img-responsive" /></td>
                                    <td data-label={t("gallery-panel-dashboard.tables.code")} className="persian-num">{order?.product_item.product.unique_code.substr(order?.product_item?.product?.unique_code?.length - 12)}</td>
                                    <td data-label={t("gallery-panel-dashboard.tables.edition")} className="persian-num">{order?.product_item?.edition_number}</td>
                                    <td data-label={t("gallery-panel-dashboard.tables.price")} className="persian-num">{order?.product_item?.toman_price}</td>
                                    <td data-label={t("gallery-panel-dashboard.tables.discount")} className="persian-num">{order?.product_item?.product?.discount?.value}{order?.product_item?.product?.discount?.type === "percentage" ? "%" : ""}</td>
                                    <td data-label={t("gallery-panel-dashboard.tables.paid")} className="persian-num">{order?.product_item?.reserved_toman_price}</td>
                                    <td data-label={t("gallery-panel-dashboard.tables.status")} className="persian-num">{moment(order?.creation_date).locale('fa').format('YYYY/MM/DD')}</td>
                                    <td data-label={t("gallery-panel-dashboard.tables.details")} className="status">{isAccept(order?.status).title}</td>
                                    <td>
                                        <button className="btn-outline-blue" type="button" data-toggle="modal" data-target="#modal-replied-price">
                                            {t("gallery-panel-dashboard.tables.view")}
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}


                </tbody>
            </table>


            <div className="row-pagination">
                <Pagination defaultCurrent={1}
                    total={suggestionsCount}
                    defaultPageSize={10}
                    onChange={(e) => handeSelectPage(e)} />
            </div>
        </div>
    )
}

export default OrderStatus