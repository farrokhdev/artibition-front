import React from "react";
import { t } from 'i18next';

import whitePlus from "../../assets/img/plus-white.png"
import { Link } from "react-router-dom";


function CreateArtist() {
    return (
        <div className="box box-1 create-ex">
            <div className="pull-dir">
                <span className="bolder-title">{t("gallery-panel-artist.create_artist")}</span>
            </div>
            <Link to={'/panel/select-artist-source'} className="btn-box-1 btn-pink pull-left">
                <img src={whitePlus} width="16" height="16" className="center-block" />
            </Link>
            <div className="clearfix"></div>
        </div>
    )
}

export default CreateArtist