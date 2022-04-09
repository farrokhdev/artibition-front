import React from "react";
import { t } from 'i18next';


import flashLeft from '../../assets/img/felsh-left.png'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editGalleryModeFunc } from "../../redux/reducers/Gallery/gallery.actions";
import { setProfile } from "../../redux/reducers/auth/auth.actions";
import { useSelector } from "react-redux";
import { message } from "antd";



function CreateGallery() {
    const dispatch = useDispatch()
    const navigate = useNavigate()



    const { profile } = useSelector((state) => state.authReducer)

    const goToNewGallery = () => {
        if (profile?.is_approved) {
            dispatch(editGalleryModeFunc(false))
            navigate("/panel/gallery-info")
        } else {
            message.error({
                content: 'لطفاابتدااطلاعات پروفایل خود را تکمیل کنید',
                style: { marginTop: '10vh' }
            })
        }

    }

    return (
        <div className="d-flex box-dir-reverse box box-1 dir">
            <div className="text-dir">
                <h2 className="greencolor">{t("content-panel-dashboard.box_gallery.new_gallery")}</h2>
                <p>{t("content-panel-dashboard.box_gallery.info_gallery")}</p>
            </div>
            <div className="btn-box-1 btn-green pull-left" style={{ cursor: "pointer" }} onClick={goToNewGallery}>
                <img src={flashLeft} width="16" height="16" className="center-block" />
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default CreateGallery