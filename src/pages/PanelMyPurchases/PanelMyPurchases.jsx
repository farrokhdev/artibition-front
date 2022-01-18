import React, { useEffect } from 'react';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import { t } from 'i18next';
import { Tabs } from 'antd';
import Paid from './Paid';
import Delivered from './Delivered';
import Bidding from './Bidding';
import Returned from './Returned';
import Canceled from './Canceled';
import apiServices from '../../utils/api.services';
import {ORDER_BUYERS} from '../../utils/index'
import react from 'react';
import queryString from 'query-string'

function PanelMyPurchases() {

    const { TabPane } = Tabs;

    const [purchase, setPurchase] = react.useState()
    const [params, setParams] = react.useState({
        paid_status:"pending"
    })

    function callback(key) {
        console.log(key);
        setParams({paid_status:key})
    }

    const getMyPurchasesInPanel = () => {
        apiServices.get(ORDER_BUYERS, queryString.stringify(params))
            .then(res => {
                if (res.data){
                    // console.log(res.data.data.results)
                    setPurchase(res.data.data.results)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }



    useEffect(()=>{
        console.log("purchase",purchase);
    },[purchase])

    useEffect(()=>{
        getMyPurchasesInPanel()
    },[params])

    return (
        <>
            <HeaderPanel t={t} />

            <div className="panel-style margin-top-20">
                <SidebarPanel />
                <div className="custom-container " id="main">
                    <div className="box box-2">
                        <div className="sec6">
                            <div className="public-header">
                                <div className="pull-dir">
                                    <h2 className="default-title">{t("content-panel-mypurchases.title")}</h2>
                                </div>
                            </div>
                            <div className="default-tab tab-3 tab-interval purchase ">
                                <Tabs className='dir' defaultActiveKey="paid" onChange={callback}>
                                    <TabPane className="mx-4" tab={t("content-panel-mypurchases.paid.title")} key="paid">
                                        <Paid purchasesProp={purchase} />
                                    </TabPane>
                                    <TabPane tab={t("content-panel-mypurchases.delivered.title")} key="delivered">
                                        <Delivered />
                                    </TabPane>
                                    {/* <TabPane tab={t("content-panel-mypurchases.bidding.title")} key="3">
                                        <Bidding />
                                    </TabPane> */}
                                    <TabPane tab={t("content-panel-mypurchases.returned.title")} key="returned">
                                        <Returned />
                                    </TabPane>
                                    <TabPane tab={t("content-panel-mypurchases.canceled.title")} key="canceled">
                                        <Canceled />
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>

                <BasketFooterPanel />
            </div>
        </>
    )
}

export default PanelMyPurchases;