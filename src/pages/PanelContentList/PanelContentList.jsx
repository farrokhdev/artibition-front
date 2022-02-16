import React, { useState, useEffect } from 'react';
import { t } from 'i18next';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';

import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import plus_white_icon from '../../assets/img/plus-white.png';
import { Link } from 'react-router-dom';
import apiServices from '../../utils/api.services';
import { ARTIST_CONTENT, ARTIST_ME, GALLERY_CONTENT } from '../../utils';
import queryString from 'query-string';
import { useSelector } from 'react-redux';
import moment from 'jalali-moment';
import { GetLanguage } from '../../utils/utils'


function PanelContentList() {

    const { gallery_id } = useSelector((state) => state.galleryReducer)
    const Language = GetLanguage();
    const [artistContent, setArtistContent] = useState();
    const [artistProfile, setArtistProfile] = useState({});

    const { roles } = useSelector((state) => state.authReducer)
    const getUserRole = () => {
        let userRole = "user"
        if (typeof roles === "string") {
            return roles
        } else {
            if (roles && roles.length > 0) {
                if (roles.includes("seller")) {
                    userRole = "seller"
                }
                if (roles.includes("artist")) {
                    userRole = "artist"
                }
            } else {
                userRole = 'user'
            }
        }
        return userRole
    }

    const [params, setParams] = useState({

    })

    const getArtistContent = () => {
        if (getUserRole() === "gallery") {
            apiServices.get(GALLERY_CONTENT(gallery_id), "")
                .then(res => {
                    if (res.data) {
                        setArtistContent(res.data.data.results)
                    }
                })
                .catch(err => {
                    console.log("err", err)
                })
        } else {
            apiServices.get(ARTIST_CONTENT, queryString.stringify(params))
                .then(res => {
                    if (res.data) {
                        setArtistContent(res.data.data.results)
                    }
                })
                .catch(err => {
                    console.log("err", err)
                })
        }

    }


    const getArtistDetails = () => {
        apiServices.get(ARTIST_ME, "")
            .then(res => {

                setArtistProfile(res.data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }


    useEffect(() => {
        setParams({ artist_content__id: artistProfile?.id })
    }, [artistProfile?.id]);

    useEffect(() => {
        if (Object?.keys(params).length) {
            getArtistContent();

        }
    }, [params]);

    useEffect(() => {
        getArtistDetails();
    }, []);

    return (
        <>
            <HeaderPanel t={t} />
            <div className="panel-style margin-top-20">
                <SidebarPanel />
                <div className="custom-container">



                    <div className="d-block d-md-flex box-dir-reverse">
                        <div className="col-md-8">
                            <div className="box artistpanel-5">
                                <div className="public-header">
                                    <h2 className="default-title text-dir">{t("content-panel-contents.title")}</h2>
                                </div>
                                <table className="table wallet-table dir">
                                    <thead>
                                        <tr>
                                            <td>{t("content-panel-contents.table.row")}</td>
                                            <td>{t("content-panel-contents.table.image")}</td>
                                            <td>{t("content-panel-contents.table.subject")}</td>
                                            <td>{t("content-panel-contents.table.type")}</td>
                                            <td>{t("content-panel-contents.table.date_publish")}</td>
                                            <td>{t("content-panel-contents.table.status")}</td>
                                            <td>{t("content-panel-contents.table.details")}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {artistContent?.map((content, index) => {
                                            return (
                                                <tr>
                                                    <td data-label={t("content-panel-contents.table.row")} className="persian-num">{index + 1}</td>
                                                    <td data-label={t("content-panel-contents.table.image")}><img
                                                        src={content?.poster?.exact_url}
                                                        width="1776" height="1776"
                                                        alt=""
                                                        className="img-responsive center-block" /></td>
                                                    <td data-label={t("content-panel-contents.table.subject")}>{content?.translations?.fa?.title}</td>
                                                    <td data-label={t("content-panel-contents.table.type")}>{content?.type}</td>
                                                    <td data-label={t("content-panel-contents.table.date_publish")} className="persian-num">{moment(content?.creation_date).locale(Language === 'fa-IR' ? 'fa' : 'en').format('YYYY/MM/DD')}</td>
                                                    <td data-label={t("content-panel-contents.table.status")}>{content?.is_active ? t("content-panel-contents.table.active") : t("content-panel-contents.table.inactive")}</td>
                                                    <td data-label={t("content-panel-contents.table.details")} className="status">
                                                        {/* <button type="button" className="btn-outline-blue">{t("content-panel-contents.table.edit")}</button> */}
                                                        <Link to={`/panel/create-content?content_id=${content.id}`} className="btn-outline-blue">
                                                            {t("content-panel-contents.table.edit")}
                                                        </Link>
                                                    </td>
                                                </tr>

                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box box-1 create-ex">
                                <div className="pull-dir">
                                    <span className="bolder-title">{t("content-panel-contents.create_content")}</span>
                                </div>
                                <Link to="/panel/create-content" className="btn-box-1 btn-pink pull-left">
                                    <img src={plus_white_icon} width="16" height="16" className="center-block" />
                                </Link>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>


                </div>
                <BasketFooterPanel />
            </div>
        </>
    )
}

export default PanelContentList;
