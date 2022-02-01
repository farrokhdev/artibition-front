import React, { useEffect, useState } from "react";
import i18next, { t } from 'i18next';


import viewBlue from '../../assets/img/view-blue.svg'
import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authReducer from "../../redux/reducers/auth/auth.reducer";
import apiServices from "../../utils/api.services";
import { GALLERY_LIST } from "../../utils";
import { message } from "antd";
import queryString from "query-string";
import moment from "jalali-moment";
import { galleryId } from "../../redux/reducers/Gallery/gallery.actions";
import { useNavigate } from 'react-router-dom'
import { setProfile } from "../../redux/reducers/auth/auth.actions";


function GalleryPanelMyGalleryList() {
    const [galleries, setGalleries] = useState([])
    const { id } = useSelector((state) => state.authReducer)
    const [params, setParams] = useState({
        owner_id: id
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()



    const goToGalleryProfile = (id) => {
        dispatch(galleryId(id))
        dispatch(setProfile({ roles: "gallery" }))
        navigate("/panel/dashboard")
    }




    useEffect(() => {
        apiServices.get(GALLERY_LIST, queryString.stringify(params))
            .then(res => {
                if (res.data) {
                    console.log(res.data.data.results);
                    setGalleries(res.data.data.results)
                } else {
                    message.error({
                        content: res.response.data.message,
                        style: { marginTop: "110px" }
                    })
                }
            }
            ).catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className="box artistpanel-5">
            <div className="public-header">
                <h2 className="default-title text-dir">{t("gallery-panel-my-gallery.title")}</h2>
            </div>
            <table className="table dir">
                <thead>
                    <tr>
                        <td>{t("gallery-panel-my-gallery.table.row")}</td>
                        <td>{t("gallery-panel-my-gallery.table.logo")}</td>
                        <td>{t("gallery-panel-my-gallery.table.gallery_name")}</td>
                        <td>{t("gallery-panel-my-gallery.table.number_exhibition")}</td>
                        <td>{t("gallery-panel-my-gallery.table.last_edition")}</td>
                        <td>{t("gallery-panel-my-gallery.table.profile")}</td>
                        <td>{t("gallery-panel-my-gallery.table.details")}</td>
                    </tr>
                </thead>
                <tbody>
                    {galleries.map((gallery, galleryIndex) => {
                        return (
                            <tr>
                                <td data-label={t("gallery-panel-my-gallery.table.row")} className="persian-num">{galleryIndex + 1}</td>
                                <td data-label={t("gallery-panel-my-gallery.table.logo")}><img src={artwork1} width="1776" height="1776"
                                    alt=""
                                    className="img-responsive center-block" /></td>
                                <td data-label={t("gallery-panel-my-gallery.table.gallery_name")}>{i18next.language === 'fa-IR' ? gallery.translations?.fa?.title : gallery.translations?.en?.title}</td>
                                <td data-label={t("gallery-panel-my-gallery.table.number_exhibition")}>{gallery.exhibition_num}</td>
                                <td data-label={t("gallery-panel-my-gallery.table.last_edition")}>{moment(gallery.modified_date).locale(i18next.language === 'fa-IR' ? 'fa' : 'en').format('YYYY/MM/DD')}</td>
                                <td data-label={t("gallery-panel-my-gallery.table.profile")} className="status">
                                    <button onClick={() => {
                                        goToGalleryProfile(gallery.id)
                                    }}>
                                        <img src={viewBlue} width="18" height="18" alt="" className="" />
                                    </button>
                                </td>
                                <td data-label={t("gallery-panel-my-gallery.table.details")} className="status">
                                    <button className="btn-outline-blue">
                                        {t("gallery-panel-my-gallery.table.edit")}
                                    </button>
                                    {/* <button type="button" className="btn-outline-blue">{t("gallery-panel-my-gallery.table.edit")}</button> */}
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default GalleryPanelMyGalleryList