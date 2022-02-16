import React, { useState, useEffect } from 'react'
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import { t } from 'i18next';
import { message, Pagination } from 'antd';

import TableOrders from './TableOrders';
import apiServices from '../../utils/api.services';
import { ORDER_SELERS } from '../../utils/index'
import queryString from 'query-string';
import { useSelector } from 'react-redux';

function PanelOrders() {

    const [loading, setLoading] = useState(false);
    const [orderList, setOrderList] = useState("");
    const [suggestionsCount, setSuggestionsCount] = useState("");
    const [params, setParams] = useState({
        page: 1,
        status: "",
    });


    const { roles } = useSelector((state) => state.authReducer)
    const { gallery_id } = useSelector((state) => state.galleryReducer)
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



    // Receive the list of orders
    const getIgetOrdersLisItems = () => {
        setLoading(true)
        if (getUserRole() === "gallery") {
            apiServices.get(`/gallery/${gallery_id}/orders/`, queryString.stringify(params))
                .then(res => {
                    if (res.data) {
                        setLoading(false)
                        setOrderList(res.data.data.results)
                        setSuggestionsCount(res.data.data.count)
                    } else {
                        message.error(res.response.data.message)
                    }

                }).catch(err => {
                    setLoading(false)
                    console.log(err);
                })
        }
        else {
            apiServices.get(ORDER_SELERS, queryString.stringify(params))
                .then(resp => {
                    setLoading(false)
                    setOrderList(resp.data.data.results)
                    setSuggestionsCount(resp.data.data.count)
                })
                .catch(err => {
                    setLoading(false)
                    console.error(err);
                })
        }
    }


    // This section is for filtering the status of orders
    const handleStatus = (e) => {
        setParams({
            ...params, status: e
        })
    }

    // Shows us the position of the page we are on
    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }


    useEffect(() => {
        getIgetOrdersLisItems()
    }, [params])


    return (
        <>
            <HeaderPanel t={t} />
            <div className="panel-style margin-top-20">
                <SidebarPanel />
                <div className="custom-container">

                    <div className="box artistpanel-5 dir">

                        <div className="public-header mrgb32">
                            <h2 className=" default-title text-dir">{t("content-panel-dashboard.tables.orders")}</h2>
                        </div>
                        <div className="row box-dir-reverse text-dir">
                            <div className="col-12 col-sm-6 col-xl-3 px-0">
                                <label className="container-radio">{t("content-panel-orders.filters.all")}
                                    <input
                                        id="tab-11" data-bs-toggle="tab"
                                        data-bs-target="#profiletab1"
                                        role="tab" aria-controls="profiletab1"
                                        aria-selected="true"

                                        type="radio" name="radio" onClick={() => handleStatus("")} />
                                    <span className="checkmark-radio"></span>
                                </label>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3 px-0">
                                <label className="container-radio">{t("content-panel-orders.filters.to_artibition")}
                                    <input
                                        id="tab-21" data-bs-toggle="tab"
                                        data-bs-target="#profiletab2"
                                        role="tab" aria-controls="profiletab2"
                                        aria-selected="false"

                                        type="radio" name="radio" onClick={() => handleStatus("pending")} />
                                    <span className="checkmark-radio"></span>
                                </label>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3 px-0">
                                <label className="container-radio">{t("content-panel-orders.filters.artibition_to_customer")}
                                    <input
                                        id="tab-31" data-bs-toggle="tab"
                                        data-bs-target="#profiletab3"
                                        role="tab" aria-controls="profiletab3"
                                        aria-selected="false"

                                        type="radio" name="radio" onClick={() => handleStatus("sent_to_buyer")} />
                                    <span className="checkmark-radio"></span>
                                </label>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3 px-0">
                                <label className="container-radio">{t("content-panel-orders.filters.delivered")}
                                    <input type="radio" name="radio" onClick={() => handleStatus("delivered")} />
                                    <span className="checkmark-radio"></span>
                                </label>
                            </div>
                        </div>


                        <TableOrders orderList={orderList} />


                        <div className=" row-pagination">
                            <Pagination
                                defaultCurrent={1}
                                total={suggestionsCount}
                                defaultPageSize={10}
                                onChange={(e) => handeSelectPage(e)} />
                        </div>

                    </div>


                </div>
                <BasketFooterPanel />
            </div>
        </>
    )
}

export default PanelOrders;
