import React from 'react';
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

function PanelMyPurchases() {

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
      }

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

                    <Tabs className='' defaultActiveKey="1" onChange={callback}>
                            <TabPane className="mx-4" tab={t("content-panel-mypurchases.paid.title")} key="1">
                                <Paid/>
                            </TabPane>
                            <TabPane tab={t("content-panel-mypurchases.delivered.title")} key="2">
                                <Delivered/>
                            </TabPane>
                            <TabPane tab={t("content-panel-mypurchases.bidding.title")} key="3">
                                <Bidding/>
                            </TabPane>   
                            <TabPane tab={t("content-panel-mypurchases.returned.title")} key="4">
                                <Returned/>
                            </TabPane>   
                            <TabPane tab={t("content-panel-mypurchases.canceled.title")} key="5">
                                <Canceled/>
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