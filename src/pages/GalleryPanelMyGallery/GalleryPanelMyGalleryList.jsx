import React from "react";
import { t } from 'i18next';


import viewBlue from '../../assets/img/view-blue.svg'
import artwork1 from '../../assets/img/artworks/artwork-1.jpg';


function GalleryPanelMyGalleryList() {
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
                    <tr>
                        <td data-label={t("gallery-panel-my-gallery.table.row")} className="persian-num">1</td>
                        <td data-label={t("gallery-panel-my-gallery.table.logo")}><img src={artwork1} width="1776" height="1776"
                            alt=""
                            className="img-responsive center-block" /></td>
                        <td data-label={t("gallery-panel-my-gallery.table.gallery_name")}>...نگاهی به هنر مائوریتزیو کاتلان</td>
                        <td data-label={t("gallery-panel-my-gallery.table.number_exhibition")}>5</td>
                        <td data-label={t("gallery-panel-my-gallery.table.last_edition")}>1399/05/12</td>
                        <td data-label={t("gallery-panel-my-gallery.table.profile")} className="status">
                        <a href="#"><img src={viewBlue} width="18" height="18" alt="" className=""/></a>
                        </td>
                        <td data-label={t("gallery-panel-my-gallery.table.details")} className="status">
                            <button type="button" className="btn-outline-blue">{t("gallery-panel-my-gallery.table.edit")}</button>
                        </td>
                    </tr>
                    <tr>
                        <td data-label={t("gallery-panel-my-gallery.table.row")} className="persian-num">1</td>
                        <td data-label={t("gallery-panel-my-gallery.table.logo")}><img src={artwork1} width="1776" height="1776"
                            alt=""
                            className="img-responsive center-block" /></td>
                        <td data-label={t("gallery-panel-my-gallery.table.gallery_name")}>...نگاهی به هنر مائوریتزیو کاتلان</td>
                        <td data-label={t("gallery-panel-my-gallery.table.number_exhibition")}>8</td>
                        <td data-label={t("gallery-panel-my-gallery.table.last_edition")}>1398/11/02</td>
                        <td data-label={t("gallery-panel-my-gallery.table.profile")} className="status">
                        <a href="#"><img src={viewBlue} width="18" height="18" alt="" className=""/></a>
                        </td>
                        <td data-label={t("gallery-panel-my-gallery.table.details")} className="status">
                            <button type="button" className="btn-outline-blue">{t("gallery-panel-my-gallery.table.edit")}</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GalleryPanelMyGalleryList