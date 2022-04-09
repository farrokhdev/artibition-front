import React from "react";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import { t } from 'i18next';
import SidebarPanel from "../../components/SidebarPanel/SidebarPanel";
import GalleryPanelExhibitionList from "./GalleryPanelExhibitionList";
import CreateExhibition from "../GalleryPanelDashboard/CreateExhibition";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";

function GalleryPanelExhibition() {
    
    return (
        <>
            <HeaderPanel t={t} />
            <div className="panel-style margin-top-20">
                <SidebarPanel />
                <div className="custom-container" style={{ minHeight: "820px" }}>
                    <div className="row box-dir-reverse dir">
                        <div className="col-md-8">
                            <GalleryPanelExhibitionList />
                        </div>
                        <div className="col-md-4">
                            <CreateExhibition />
                        </div>
                    </div>
                </div>
                <BasketFooterPanel/>
            </div>
        </>
    )
}

export default GalleryPanelExhibition