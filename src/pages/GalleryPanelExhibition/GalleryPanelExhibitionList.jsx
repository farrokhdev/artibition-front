import React from "react";
import { t } from 'i18next';


import viewBlue from '../../assets/img/view-blue.svg'
import artwork1 from '../../assets/img/artworks/artwork-1.jpg';


function GalleryPanelExhibitionList() {
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
                    <tr>
                        <td data-label={t("gallery-panel-exhibition.table.row")} className="persian-num">1</td>
                        <td data-label={t("gallery-panel-exhibition.table.image")}><img src={artwork1} width="1776" height="1776"
                            alt=""
                            className="img-responsive center-block" /></td>
                        <td data-label={t("gallery-panel-exhibition.table.gallery_name")}>...نگاهی به هنر مائوریتزیو کاتلان</td>
                        <td data-label={t("gallery-panel-exhibition.table.type")}>{t("gallery-panel-exhibition.table.presence_virtual")}</td>
                        <td data-label={t("gallery-panel-exhibition.table.start")} className="persian-num">۹۹/۰۶/۱۰</td>
                        <td data-label={t("gallery-panel-exhibition.table.end")} className="persian-num">۹۹/۰۶/۱۰</td>
                        <td data-label={t("gallery-panel-exhibition.table.profile")} className="status">
                        <a href="#"><img src={viewBlue} width="18" height="18" alt="" className=""/></a>
                        </td>
                        <td data-label={t("gallery-panel-exhibition.table.details")} className="status">
                            <button type="button" className="btn-outline-blue">{t("gallery-panel-exhibition.table.edit")}</button>
                            <button type="button" className="btn-outline-blue">{t("gallery-panel-exhibition.table.upload_artwotk")}</button>
                        </td>
                    </tr>
                    <tr>
                        <td data-label={t("gallery-panel-exhibition.table.row")} className="persian-num">1</td>
                        <td data-label={t("gallery-panel-exhibition.table.image")}><img src={artwork1} width="1776" height="1776"
                            alt=""
                            className="img-responsive center-block" /></td>
                        <td data-label={t("gallery-panel-exhibition.table.gallery_name")}>...نگاهی به هنر مائوریتزیو کاتلان</td>
                        <td data-label={t("gallery-panel-exhibition.table.type")}>{t("gallery-panel-exhibition.table.presence")}</td>
                        <td data-label={t("gallery-panel-exhibition.table.start")} className="persian-num">۹۹/۰۶/۱۰</td>
                        <td data-label={t("gallery-panel-exhibition.table.end")} className="persian-num">۹۹/۰۶/۱۰</td>
                        <td data-label={t("gallery-panel-exhibition.table.profile")} className="status">
                        <a href="#"><img src={viewBlue} width="18" height="18" alt="" className=""/></a>
                        </td>
                        <td data-label={t("gallery-panel-exhibition.table.details")} className="status">
                            <button type="button" className="btn-outline-blue">{t("gallery-panel-exhibition.table.edit")}</button>
                            <button type="button" className="btn-outline-blue">{t("gallery-panel-exhibition.table.upload_artwotk")}</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GalleryPanelExhibitionList