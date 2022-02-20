import React from "react";
import { t } from 'i18next';

import whitePlus from "../../assets/img/plus-white.png"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editExhibitionModeFunc, exhibitionId, reduxSelectedArtworksFunc } from "../../redux/reducers/Exhibition/exhibition.action";


function CreateExhibition() {


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleGoToExhibition = () => {
        dispatch(editExhibitionModeFunc(false))
        dispatch(reduxSelectedArtworksFunc([]))
        dispatch(exhibitionId(null))
        navigate("/panel/create-exhibition")
    }

    return (
        <div className="box box-dir-reverse box-1 create-ex">
            <div className="pull-dir">
                <span className="bolder-title">{t("gallery-panel-exhibition.create_exhibition")}</span>
            </div>
            <button onClick={() => { handleGoToExhibition() }} className="btn-box-1 btn-pink pull-left">
                <img src={whitePlus} width="16" height="16" style={{ top: "2px" }} className="center-block" />
            </button>
            <div className="clearfix"></div>
        </div>
    )
}

export default CreateExhibition