import React, { useEffect, useState } from "react";
import i18next, { t } from 'i18next';


import viewBlue from '../../assets/img/view-blue.svg'
import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import { Link, useNavigate } from "react-router-dom";
import apiServices from "../../utils/api.services";
import { EXHIBITION } from "../../utils";
import { message } from "antd";
import moment from "jalali-moment";
import { useSelector } from "react-redux";
import { sample } from "lodash";
import { useDispatch } from "react-redux";
import queryString from 'query-string';
import { editExhibitionModeFunc, exhibitionId } from "../../redux/reducers/Gallery/gallery.actions";


function GalleryPanelExhibitionList() {

    const [galleries, setGalleries] = useState([])
    const [params, setParams] = useState({
        page_size: 999999
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { id } = useSelector((state) => state.galleryReducer)



    const handleEditExhibition = (e, data) => {
        dispatch(exhibitionId(data.id))
        dispatch(editExhibitionModeFunc(true))
        navigate("/panel/create-exhibition")
    }

    useEffect(() => {
        apiServices.get(EXHIBITION(id), queryString.stringify(params))
            .then(res => {
                if (res.data) {
                    console.log(res.data.data.results);
                    setGalleries(res.data.data.results)
                } else {
                    message.error(res.response.data.message)
                }

            })
    }, [])


    return (
        <div className="box artistpanel-5">
            <div className="public-header">
                <h2 className="default-title text-dir">{t("gallery-panel-exhibition.title")}</h2>
            </div>
            <table className="table exhibition-table dir">
                <thead>
                    <tr>
                        <td>{t("gallery-panel-exhibition.table.row")}</td>
                        <td>{t("gallery-panel-exhibition.table.image")}</td>
                        <td>{t("gallery-panel-exhibition.table.gallery_name")}</td>
                        <td>{t("gallery-panel-exhibition.table.type")}</td>
                        <td>{t("gallery-panel-exhibition.table.start")}</td>
                        <td>{t("gallery-panel-exhibition.table.end")}</td>
                        <td>{t("gallery-panel-exhibition.table.profile")}</td>
                        <td>{t("gallery-panel-exhibition.table.details")}</td>
                    </tr>
                </thead>
                <tbody>
                    {galleries &&
                        galleries.map((gallery, index) => {
                            return (
                                <tr key={index}>
                                    <td data-label={t("gallery-panel-exhibition.table.row")} className="persian-num">{index + 1}</td>
                                    <td data-label={t("gallery-panel-exhibition.table.image")}><img src={gallery.poster[0]?.exact_url} width="1776" height="1776"
                                        alt=""
                                        className="img-responsive center-block" /></td>
                                    <td data-label={t("gallery-panel-exhibition.table.gallery_name")}>{i18next.language === 'fa-IR' ?
                                        gallery.translations?.fa?.name :
                                        gallery.translations?.en?.name
                                    }</td>
                                    <td data-label={t("gallery-panel-exhibition.table.type")}>{t(`gallery-panel-exhibition.table.${gallery.type}`)}</td>
                                    <td data-label={t("gallery-panel-exhibition.table.start")} className="persian-num">{moment(gallery.start_date.virtual_start_date).locale(i18next.language === 'fa-IR' ? 'fa' : 'en').format('YYYY/MM/DD')}</td>
                                    <td data-label={t("gallery-panel-exhibition.table.end")} className="persian-num">{moment(gallery.end_date.virtual_end_date).locale(i18next.language === 'fa-IR' ? 'fa' : 'en').format('YYYY/MM/DD')}</td>
                                    <td data-label={t("gallery-panel-exhibition.table.profile")} className="status">
                                        <a href="#"><img src={viewBlue} width="18" height="18" alt="" className="" /></a>
                                    </td>
                                    <td data-label={t("gallery-panel-exhibition.table.details")} className="status">
                                        <button onClick={(e) => { handleEditExhibition(e, gallery) }} className="btn-outline-blue">
                                            {t("gallery-panel-exhibition.table.edit")}
                                        </button>
                                        <button type="button" className="btn-outline-blue">{t("gallery-panel-exhibition.table.upload_artwotk")}</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {/* <tr>
                        <td data-label={t("gallery-panel-exhibition.table.row")} className="persian-num">1</td>
                        <td data-label={t("gallery-panel-exhibition.table.image")}><img src={artwork1} width="1776" height="1776"
                            alt=""
                            className="img-responsive center-block" /></td>
                        <td data-label={t("gallery-panel-exhibition.table.gallery_name")}>...نگاهی به هنر مائوریتزیو کاتلان</td>
                        <td data-label={t("gallery-panel-exhibition.table.type")}>{t("gallery-panel-exhibition.table.presence")}</td>
                        <td data-label={t("gallery-panel-exhibition.table.start")} className="persian-num">۹۹/۰۶/۱۰</td>
                        <td data-label={t("gallery-panel-exhibition.table.end")} className="persian-num">۹۹/۰۶/۱۰</td>
                        <td data-label={t("gallery-panel-exhibition.table.profile")} className="status">
                            <a href="#"><img src={viewBlue} width="18" height="18" alt="" className="" /></a>
                        </td>
                        <td data-label={t("gallery-panel-exhibition.table.details")} className="status">
                            <Link to={"/panel/create-exhibition"} className="btn-outline-blue">
                                {t("gallery-panel-exhibition.table.edit")}
                            </Link>
                            <button type="button" className="btn-outline-blue">{t("gallery-panel-exhibition.table.upload_artwotk")}</button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default GalleryPanelExhibitionList