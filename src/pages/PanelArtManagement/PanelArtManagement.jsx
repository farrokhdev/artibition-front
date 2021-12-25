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
      <div className="panel-style margin-top-fa">
        <SidebarPanel />
        <div className="custom-container">

        <div className="box artistpanel-5">

            {/* <div className="public-header mrgb32">
                <h2 className=" default-title text-dir">{t("content-panel-dashboard.tables.orders")}</h2>
            </div> */}

            <div class="public-header mrgb32">
                <div class="pull-right">
                    <h2 class="default-title text-dir">لیست آثار</h2>
                </div>
                <div class="pull-left">
                    <button type="button" class="btn-outline-blue">
                        <img src={add_icon} width="12" height="12" alt="" class=""/>
                        <span>افزودن اثر جدید</span>
                    </button>
                </div>
            </div>
            <div className="row box-dir-reverse text-dir">
                <div className="col-12 col-sm-6 col-xl-2 px-0">
                    <label className="container-radio">همه آثار من
                        <input type="radio" checked="checked" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                    <p className='text-dir mx-4 px-3'>1</p>
                </div>
                <div className="col-12 col-sm-6 col-xl-2 px-0">
                    <label className="container-radio">آثار تایید شده
                        <input type="radio" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                    <p className='text-dir mx-4 px-3'>1</p>
                </div>
                <div className="col-12 col-sm-6 col-xl-2 px-0">
                    <label className="container-radio">آثار نیازمند اصلاح
                        <input type="radio" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                    <p className='text-dir mx-4 px-3'>1</p>
                </div>
                <div className="col-12 col-sm-6 col-xl-2 px-0">
                    <label className="container-radio">آثار در حال بررسی
                        <input type="radio" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                    <p className='text-dir mx-4 px-3'>1</p>
                </div>
                <div className="col-12 col-sm-6 col-xl-2 px-0">
                    <label className="container-radio">تایید نشده
                        <input type="radio" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                    <p className='text-dir mx-4 px-3'>1</p>
                </div>
                <div className="col-12 col-sm-6 col-xl-2 px-0">
                    <label className="container-radio">فروخته شده
                        <input type="radio" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                    <p className='text-dir mx-4 px-3'>1</p>
                </div>
                <div className="col-12 col-sm-6 col-xl-2 px-0">
                    <label className="container-radio">فعالیت در سایت
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
