import React from "react";
import { t } from 'i18next';


import flashLeft from '../../assets/img/felsh-left.png'
import { Link } from "react-router-dom";

function CreateGallery() {
    return (
        <div className="d-flex box-dir-reverse box box-1">
            <div className="text-dir">
                <h2 className="greencolor">{t("content-panel-dashboard.box_gallery.new_gallery")}</h2>
                <p>{t("content-panel-dashboard.box_gallery.info_gallery")}</p>
            </div>
            <Link to={"/panel/gallery-info"} className="btn-box-1 btn-green pull-left">
                <img src={flashLeft} width="16" height="16" className="center-block" />
            </Link>
            <div className="clearfix"></div>
        </div>
    )
}

export default CreateGallery