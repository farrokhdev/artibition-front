import React, { useState, useEffect } from 'react'
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import { t } from 'i18next';
import { Pagination } from 'antd';
import TableArtworks from './TableArtworks';

import add_icon from '../../assets/img/add.png';
import { GALLERY_PRODUCTS, PRODUCTS_ME } from '../../utils/index'
import queryString from 'query-string';
import apiServices from '../../utils/api.services';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PanelArtManagement() {

    const [loading, setLoading] = useState(false);
    const [productList, setProductList] = useState([]);
    const [suggestionsCount, setSuggestionsCount] = useState("");
    const [params, setParams] = useState({
        page: 1,
        status: "",

    });

    const { id } = useSelector((state) => state.galleryReducer)


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



    // Get my product list
    const getProductList = () => {
        setLoading(true)
        if (getUserRole() === "gallery") {
            apiServices.get(GALLERY_PRODUCTS(id), queryString.stringify(params))
                .then(res => {
                    setLoading(false)
                    setProductList(res.data.data.results)
                    setSuggestionsCount(res.data.data.count)
                })
                .catch(err => {
                    setLoading(false)
                    console.error(err);
                })
        }
        else {
            apiServices.get(PRODUCTS_ME, queryString.stringify(params))
                .then(resp => {
                    setLoading(false)
                    setProductList(resp.data.data.results)
                    setSuggestionsCount(resp.data.data.count)
                })
                .catch(err => {
                    setLoading(false)
                    console.error(err);
                })
        }

    }

    // This section is for filtering the status of the list of works
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
        getProductList()
    }, [params])




    return (
        <>
            <HeaderPanel t={t} />
            <div className="panel-style margin-top-20">
                <SidebarPanel />
                <div className="custom-container">

                    <div className="box artistpanel-5">
                        {/* <div className="public-header mrgb32">
                <h2 className=" default-title text-dir">{t("content-panel-dashboard.tables.orders")}</h2>
            </div> */}

                        <div className="d-flex box-dir-reverse public-header mrgb32">
                            <div className="col">
                                <div className="d-flex justify-custom">
                                    <h2 className="default-title w-100 text-dir">{t("content-panel-manage-artworks.title")}</h2>
                                </div>
                            </div>
                            <div className="col ">
                                <div className="d-flex justify-custom">
                                    <Link
                                        to={"/panel/add-artwork"}
                                        state={{ from: "/panel/art-management" }}
                                        type="button" className="btn-outline-blue">
                                        <img src={add_icon} width="12" height="12" alt="" className="mx-2" />
                                        <span>{t("content-panel-manage-artworks.btn")}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row box-dir-reverse text-dir">
                            <div className="col-12 col-sm-6 col-xl-3 ">
                                <label className="container-radio">{t("content-panel-manage-artworks.filters.all")}
                                    <input id="tab-11" data-bs-toggle="tab"
                                        data-bs-target="#profiletab1"
                                        role="tab" aria-controls="profiletab1"
                                        aria-selected="true"
                                        type="radio" name="radio" onClick={() => handleStatus("")} />
                                    <span className="checkmark-radio"></span>
                                </label>
                                <p className='text-dir mx-4 px-3'>1</p>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3 ">
                                <label className="container-radio">{t("content-panel-manage-artworks.filters.active")}
                                    <input id="tab-17" data-bs-toggle="tab"
                                        data-bs-target="#profiletab1"
                                        role="tab" aria-controls="profiletab1"
                                        aria-selected="true"
                                        type="radio" name="radio" onClick={() => handleStatus("active")} />
                                    <span className="checkmark-radio"></span>
                                </label>
                                <p className='text-dir mx-4 px-3'>1</p>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3 ">
                                <label className="container-radio">{t("content-panel-manage-artworks.filters.modification")}
                                    <input id="tab-13" data-bs-toggle="tab"
                                        data-bs-target="#profiletab1"
                                        role="tab" aria-controls="profiletab1"
                                        aria-selected="true"
                                        type="radio" name="radio" onClick={() => handleStatus("pending edition")} />
                                    <span className="checkmark-radio"></span>
                                </label>
                                <p className='text-dir mx-4 px-3'>1</p>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3 ">
                                <label className="container-radio">{t("content-panel-manage-artworks.filters.pending")}
                                    <input id="tab-14" data-bs-toggle="tab"
                                        data-bs-target="#profiletab1"
                                        role="tab" aria-controls="profiletab1"
                                        aria-selected="true"
                                        type="radio" name="radio" onClick={() => handleStatus("pending")} />
                                    <span className="checkmark-radio"></span>
                                </label>
                                <p className='text-dir mx-4 px-3'>1</p>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3 ">
                                <label className="container-radio">{t("content-panel-manage-artworks.filters.not_approved")}
                                    <input id="tab-15" data-bs-toggle="tab"
                                        data-bs-target="#profiletab1"
                                        role="tab" aria-controls="profiletab1"
                                        aria-selected="true"
                                        type="radio" name="radio" onClick={() => handleStatus("rejected")} />
                                    <span className="checkmark-radio"></span>
                                </label>
                                <p className='text-dir mx-4 px-3'>1</p>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-3 ">
                                <label className="container-radio">{t("content-panel-manage-artworks.filters.sold")}
                                    <input id="tab-16" data-bs-toggle="tab"
                                        data-bs-target="#profiletab1"
                                        role="tab" aria-controls="profiletab1"
                                        aria-selected="true"
                                        type="radio" name="radio" onClick={() => handleStatus("")} />
                                    <span className="checkmark-radio"></span>
                                </label>
                                <p className='text-dir mx-4 px-3'>1</p>
                            </div>

                        </div>


                        <TableArtworks id productList={productList} />


                        <div className=" row-pagination">
                            <Pagination defaultCurrent={1}
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

export default PanelArtManagement;
