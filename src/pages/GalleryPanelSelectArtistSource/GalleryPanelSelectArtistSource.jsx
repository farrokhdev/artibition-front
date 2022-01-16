import React from "react";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import { t } from 'i18next';
import BasketFooterPanelNoBox from "../GalleryPanelSelectArtworkSource/BasketFooterPanelNoBox";

function GalleryPanelSelectArtisitSource() {
    return (
        <>
            <div style={{ minHeight: "100vh" }}>
                <HeaderPanel t={t} />
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 create-exhibition margin-top-100">
                    <div className="adv-btn-orginal">
                        <button type="button" className="btn-black center-block" data-target="#exist-artworks" data-toggle="modal">
                            {t("gallery-panel-select-artist-source.select_from_exist_artist")}
                        </button>
                        <button type="button" className="btn-black center-block mrgt16" data-target="#modal-edit-price" data-toggle="modal">
                            {t("gallery-panel-select-artist-source.add_new_artist")}
                        </button>
                    </div>
                </div>
            </div>
            <BasketFooterPanelNoBox />
        </>

    )
}

export default GalleryPanelSelectArtisitSource