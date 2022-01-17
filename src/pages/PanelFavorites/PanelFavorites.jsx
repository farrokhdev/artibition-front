import React from 'react'
import { t } from 'i18next';
import { Tabs } from 'antd';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import ArtworksTab from './ArtworksTab';
import FollowersTab from './FollowersTab';
import PanelCollectionsTab from './PanelCollectionsTab';

function PanelFavorites() {

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
                        <h2 className="default-title">{t("content-panel-favorites.title")}</h2>
                    </div>
                </div>


                <div className="default-tab tab-3 tab-interval purchase ">

                    <Tabs className='dir' defaultActiveKey="1" onChange={callback}>
                            <TabPane className="mx-4" tab={t("content-panel-favorites.tabs.artworks")} key="1">
                                <ArtworksTab/>
                            </TabPane>
                            <TabPane tab={t("content-panel-favorites.tabs.followers")} key="2">
                                <FollowersTab/>
                            </TabPane>
                            <TabPane tab={t("content-panel-favorites.tabs.collections")} key="3">
                                <PanelCollectionsTab/>
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

export default PanelFavorites;
