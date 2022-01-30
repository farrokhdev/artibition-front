import React, { useEffect, useState } from "react";
import i18next, { t } from 'i18next';


import viewBlue from '../../assets/img/view-blue.svg'
import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import apiServices from "../../utils/api.services";
import { GALLERY_ARTISTS } from "../../utils";
import queryString from "query-string";
import { useSelector } from "react-redux";


function GalleryPanelArtistList() {

    const [artists, setArtists] = useState([])
    const [params, setParams] = useState({
        page_size: 9999999
    })

    const { id } = useSelector((state) => state.galleryReducer)

    useEffect(() => {
        console.log(id);
        apiServices.get(GALLERY_ARTISTS(id), queryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setArtists(res.data.data.results)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

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
                    {artists.map((artist, index) => {
                        return (
                            <tr>
                                <td data-label={t("gallery-panel-artist.table.row")} className="persian-num">{index + 1}</td>
                                <td data-label={t("gallery-panel-artist.table.image")}><img src={artist?.bg_image?.exact_url} width="1776" height="1776"
                                    alt=""
                                    className="img-responsive center-block" /></td>
                                <td data-label={t("gallery-panel-artist.table.artist_name")}>{i18next.language === 'fa-IR' ? artist.translations?.fa?.nick_name : artist.translations?.en?.nick_name}</td>
                                <td data-label={t("gallery-panel-artist.table.exhibitions")} className="status">
                                    <a href="#" className="bluestyle">{t("gallery-panel-artist.table.exhibitions_list")}</a>
                                </td>
                                <td data-label={t("gallery-panel-artist.table.details")} className="status">
                                    <button type="button" className="btn-outline-blue">{t("gallery-panel-artist.table.edit")}</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default GalleryPanelArtistList