import React from "react";
import { t } from 'i18next';
import GalleryPanelArtistList from "./GalleryPanelArtistList";
import CreateArtist from "./CreateArtisit";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import SidebarPanel from "../../components/SidebarPanel/SidebarPanel";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";


function GalleryPanelArtisit(){
    return(
        <>
            <HeaderPanel t={t} />
            <div className="panel-style margin-top-20">
                <SidebarPanel />
                <div className="custom-container" style={{ minHeight: "820px" }}>
                    <div className="row box-dir-reverse dir">
                        <div className="col-md-8">
                            <GalleryPanelArtistList />
                        </div>
                        <div className="col-md-4">
                            <CreateArtist />
                        </div>
                    </div>
                </div>
                <BasketFooterPanel/>
            </div>
        </>
    )
}

export default GalleryPanelArtisit