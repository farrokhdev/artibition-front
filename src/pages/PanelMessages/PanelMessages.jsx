import React from 'react'
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import { Tabs } from 'antd';
import { t } from 'i18next';
import NotificationTab from './NotificationTab';
import MessageMembersTab from './MessageMembersTab';
import TicketsTab from './TicketsTab';

function PanelMessages() {

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
        <div className="box box-2 dir">
            <div className="sec6">
                <div className="public-header">
                    <div className="pull-dir">
                        <h2 className="default-title">{t("content-panel-messages.title")}</h2>
                    </div>
                </div>


                <div className="default-tab tab-3 tab-interval purchase ">

                    <Tabs className='' defaultActiveKey="1" onChange={callback}>
                            <TabPane className="mx-4" tab={t("content-panel-messages.tabs.notifications")} key="1">
                                <NotificationTab/>
                            </TabPane>
                            <TabPane tab={t("content-panel-messages.tabs.members.title")} key="2">
                                <MessageMembersTab/>
                            </TabPane>
                            <TabPane tab={t("content-panel-messages.tabs.tickets.title")} key="3">
                                <TicketsTab/>
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

export default PanelMessages;
