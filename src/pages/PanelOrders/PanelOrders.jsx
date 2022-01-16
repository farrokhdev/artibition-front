import React from 'react'
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import { t } from 'i18next';
import { Pagination } from 'antd';

import TableOrders from './TableOrders';

function PanelOrders() {
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
                        <input type="radio" checked="checked" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                </div>
                <div className="col-12 col-sm-6 col-xl-3 px-0">
                    <label className="container-radio">{t("content-panel-orders.filters.to_artibition")}
                        <input type="radio" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                </div>
                <div className="col-12 col-sm-6 col-xl-3 px-0">
                    <label className="container-radio">{t("content-panel-orders.filters.artibition_to_customer")}
                        <input type="radio" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                </div>
                <div className="col-12 col-sm-6 col-xl-3 px-0">
                    <label className="container-radio">{t("content-panel-orders.filters.delivered")}
                        <input type="radio" name="radio"/>
                        <span className="checkmark-radio"></span>
                    </label>
                </div>
            </div>


            <TableOrders/>
            

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

export default PanelOrders;
