import React from "react";
import { t } from 'i18next';


import viewBlue from '../../assets/img/view-blue.svg'
import artwork1 from '../../assets/img/artworks/artwork-1.jpg';


function GalleryPanelArtistList() {
    return (
        <div className="box artistpanel-5">
            <div className="public-header">
                <h2 className="default-title text-dir">{t("gallery-panel-artist.title")}</h2>
            </div>
            <table className="table dir">
                <thead>
                    <tr>
                        <td>{t("gallery-panel-artist.table.row")}</td>
                        <td>{t("gallery-panel-artist.table.image")}</td>
                        <td>{t("gallery-panel-artist.table.artist_name")}</td>
                        <td>{t("gallery-panel-artist.table.exhibitions")}</td>
                        <td>{t("gallery-panel-artist.table.details")}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label={t("gallery-panel-artist.table.row")} className="persian-num">1</td>
                        <td data-label={t("gallery-panel-artist.table.image")}><img src={artwork1} width="1776" height="1776"
                            alt=""
                            className="img-responsive center-block" /></td>
                        <td data-label={t("gallery-panel-artist.table.artist_name")}>...نگاهی به هنر مائوریتزیو کاتلان</td>
                        <td data-label={t("gallery-panel-artist.table.exhibitions")} className="status">
                        <a href="#" className="bluestyle">{t("gallery-panel-artist.table.exhibitions_list")}</a>
                        </td>
                        <td data-label={t("gallery-panel-artist.table.details")} className="status">
                            <button type="button" className="btn-outline-blue">{t("gallery-panel-artist.table.edit")}</button>
                        </td>
                    </tr>
                    <tr>
                        <td data-label={t("gallery-panel-artist.table.row")} className="persian-num">1</td>
                        <td data-label={t("gallery-panel-artist.table.image")}><img src={artwork1} width="1776" height="1776"
                            alt=""
                            className="img-responsive center-block" /></td>
                        <td data-label={t("gallery-panel-artist.table.artist_name")}>...نگاهی به هنر مائوریتزیو کاتلان</td>
                        <td data-label={t("gallery-panel-artist.table.exhibitions")} className="status">
                        <a href="#" className="bluestyle">{t("gallery-panel-artist.table.exhibitions_list")}</a>
                        </td>
                        <td data-label={t("gallery-panel-artist.table.details")} className="status">
                            <button type="button" className="btn-outline-blue">{t("gallery-panel-artist.table.edit")}</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GalleryPanelArtistList