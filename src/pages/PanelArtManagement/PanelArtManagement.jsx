import React from 'react'
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import { t } from 'i18next';
import { Pagination } from 'antd';
import TableArtworks from './TableArtworks';

import add_icon from '../../assets/img/add.png';

function PanelArtManagement() {
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
                        <button type="button" className="btn-outline-blue">
                            <img src={add_icon} width="12" height="12" alt="" className="mx-2"/>
                            <span>{t("content-panel-manage-artworks.btn")}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row box-dir-reverse text-dir">
                <div className="col-12 col-sm-6 col-xl-3 ">
                    <label className="container-radio">{t("content-panel-manage-artworks.filters.all")}
                        <input type="radio" checked="checked" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                    <p className='text-dir mx-4 px-3'>1</p>
                </div>
                <div className="col-12 col-sm-6 col-xl-3 ">
                    <label className="container-radio">{t("content-panel-manage-artworks.filters.approved")}
                        <input type="radio" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                    <p className='text-dir mx-4 px-3'>1</p>
                </div>
                <div className="col-12 col-sm-6 col-xl-3 ">
                    <label className="container-radio">{t("content-panel-manage-artworks.filters.modification")}
                        <input type="radio" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                    <p className='text-dir mx-4 px-3'>1</p>
                </div>
                <div className="col-12 col-sm-6 col-xl-3 ">
                    <label className="container-radio">{t("content-panel-manage-artworks.filters.pending")}
                        <input type="radio" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                    <p className='text-dir mx-4 px-3'>1</p>
                </div>
                <div className="col-12 col-sm-6 col-xl-3 ">
                    <label className="container-radio">{t("content-panel-manage-artworks.filters.not_approved")}
                        <input type="radio" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                    <p className='text-dir mx-4 px-3'>1</p>
                </div>
                <div className="col-12 col-sm-6 col-xl-3 ">
                    <label className="container-radio">{t("content-panel-manage-artworks.filters.sold")}
                        <input type="radio" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                    <p className='text-dir mx-4 px-3'>1</p>
                </div>
                <div className="col-12 col-sm-6 col-xl-3 ">
                    <label className="container-radio">{t("content-panel-manage-artworks.filters.active")}
                        <input type="radio" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                    <p className='text-dir mx-4 px-3'>1</p>
                </div>
            </div>


            <TableArtworks/>
            

            <div className=" row-pagination">
                <Pagination  total={50} />
            </div>

        </div>

    
        </div>
        <BasketFooterPanel />
      </div>
    </>
    )
}

export default PanelArtManagement;
