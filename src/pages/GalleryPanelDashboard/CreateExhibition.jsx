import React from "react";
import { t } from 'i18next';

import whitePlus from "../../assets/img/plus-white.png"
import { Link } from "react-router-dom";


function CreateExhibition() {
    return (
        <div className="box box-dir-reverse box-1 create-ex">
            <div className="pull-dir">
                <span className="bolder-title">{t("gallery-panel-exhibition.create_exhibition")}</span>
            </div>
            <Link to="/panel/create-exhibition" className="btn-box-1 btn-pink pull-left">
                <img src={whitePlus} width="16" height="16" className="center-block" />
            </Link>
            <div className="clearfix"></div>
        </div>
    )
}

export default CreateExhibition