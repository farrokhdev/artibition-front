import React, { useState, useEffect } from 'react'
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import { t } from 'i18next';
import { Pagination, Radio } from 'antd';
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
    const [products, setProducts] = useState({});


    const [params, setParams] = useState({
        page: 1,
        status: "",
        is_sold: ""

    });

    const { gallery_id } = useSelector((state) => state.galleryReducer)


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




    const countStatus = {
        "pending": 0,
        "pending_edition": 0,
        "rejected": 0,
        "active": 0
    }

    const AllCountStatus = products.active + products['pending_edition'] + products.pending + products.rejected


    // Get my product list
    const getProductList = () => {
        setLoading(true)
        if (getUserRole() === "gallery") {
            apiServices.get(GALLERY_PRODUCTS(gallery_id), queryString.stringify(params))
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

                    resp.data.data.results.map((item) => {
                        switch (item.status) {
                            case "pending":
                                countStatus.pending += 1
                                break;
                            case "active":
                                countStatus.active += 1
                                break;
                            case "rejected":
                                countStatus.rejected += 1
                                break;
                            case "pending_edition":
                                countStatus['pending_edition'] += 1
                                break;
                            default:
                                break;
                        }

                    })
                    setProducts(countStatus)
                })
                .catch(err => {
                    setLoading(false)
                    console.error(err);
                })
        }

    }

    // This section is for filtering the status of the list of works
    const handleStatus = (e) => {
        if (e === "is_sold") {

            setParams({
                ...params, is_sold: true
            })
        } else {

            setParams({
                ...params, status: e, is_sold: false
            })
        }
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
                            {getUserRole() !== "gallery" &&
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
                            }
                        </div>
                        <div className="row box-dir-reverse text-dir">

                            <Radio.Group
                                onChange={(e) => { handleStatus(e.target.value) }}
                            >
                                <Radio value={""} style={{ margin: "0 30px" }}>
                                    {t("content-panel-manage-artworks.filters.all")}
                                    <p className='text-dir mx-4 px-3'>
                                        {AllCountStatus ? AllCountStatus : 0}
                                    </p>
                                </Radio>
                                <Radio value={"active"} style={{ margin: "0 30px" }}>
                                    {t("content-panel-manage-artworks.filters.active")}
                                    <p className='text-dir mx-4 px-3'>{products.active}</p>
                                </Radio>
                                <Radio value={"pending_edition"} style={{ margin: "0 30px" }}>
                                    {t("content-panel-manage-artworks.filters.modification")}
                                    <p className='text-dir mx-4 px-3'>{products['pending_edition']}</p>
                                </Radio>
                                <Radio value={"pending"} style={{ margin: "0 30px" }}>
                                    {t("content-panel-manage-artworks.filters.pending")}
                                    <p className='text-dir mx-4 px-3'>{products.pending}</p>
                                </Radio>
                                <Radio value={"rejected"} style={{ margin: "0 30px" }}>
                                    {t("content-panel-manage-artworks.filters.not_approved")}
                                    <p className='text-dir mx-4 px-3'>{products.rejected}</p>
                                </Radio>
                                <Radio value={"is_sold"} style={{ margin: "0 30px" }}>
                                    {t("content-panel-manage-artworks.filters.sold")}
                                    {/* <p className='text-dir mx-4 px-3'>{products.is_sold}</p> */}
                                </Radio>

                            </Radio.Group>

                            {/* <div className="col-12 col-sm-6 col-xl-3 ">
                                <label className="container-radio">{t("content-panel-manage-artworks.filters.all")}
                                    <input id="tab-11" data-bs-toggle="tab"
                                        data-bs-target="#profiletab1"
                                        role="tab" aria-controls="profiletab1"
                                        aria-selected="true"
                                        type="radio" name="radio" onClick={() => handleStatus("")} />
                                    <span className="checkmark-radio"></span>
                                </label>
                                <p className='text-dir mx-4 px-3'>1</p>
                            </div> */}
                            {/* <div className="col-12 col-sm-6 col-xl-3 ">
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
                                        type="radio" name="radio" onChange={(e) => handleIsSold(e) } />
                                    <span className="checkmark-radio"></span>
                                </label>
                                <p className='text-dir mx-4 px-3'>1</p>
                            </div> */}

                        </div>


                        <TableArtworks productList={productList} />


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
