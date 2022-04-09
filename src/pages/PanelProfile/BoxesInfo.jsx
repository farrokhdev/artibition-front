import React from 'react';
import { t } from 'i18next';

import felsh_left from '../../assets/img/felsh-left.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { message } from 'antd';
import classnames from 'classnames'
import CreateGallery from '../GalleryPanelMyGallery/CreateGallery';

function BoxesInfo({ items }) {

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

    const getRequsetStatus = (requestStatus, requestType) => {
        console.log(requestStatus);
        console.log(requestType);

        switch (requestStatus) {
            case "not_requested":
                return (
                    <>
                        <div className="pull-dir">
                            <h2 className={classnames("text-dir", {
                                "purplecolor": requestType === "artist",
                                "pinkcolor": requestType === "seller"
                            })}>{requestType === "seller" ? t("content-panel-profile.info-box.seller.title") : t("content-panel-profile.info-box.artists.title")}</h2>
                            <p className="text-dir">
                                {requestType === "seller" ?
                                    t("content-panel-profile.info-box.seller.text") :
                                    t("content-panel-profile.info-box.artists.text")
                                }
                            </p>
                        </div>
                        {items?.is_approved ?
                            <Link to={requestType === "artist" ? "/panel/registration-artists" : "/panel/become-seller"}
                                className={classnames("btn-box-1 pull-left", {
                                    "btn-purple": requestType === "artist",
                                    "btn-pink": requestType === "seller",
                                })}>
                                <img src={felsh_left} width="16" height="16" className="center-block" />
                            </Link>
                            :
                            <Link to=""
                                onClick={() => {
                                    message.error({
                                        content: 'لطفاابتدااطلاعات پروفایل خود را تکمیل کنید', style: {
                                            marginTop: '10vh',
                                        },
                                    })
                                }}
                                className={classnames("btn-box-1 pull-left", {
                                    "btn-purple": requestType === "artist",
                                    "btn-pink": requestType === "seller",
                                })}>
                                <img src={felsh_left} width="16" height="16" className="center-block" />
                            </Link>
                        }
                        <div className="clearfix"></div>
                    </>
                )


            case "created":
                return (
                    <>
                        <div className="pull-dir">
                            <h2 className={classnames("text-dir", {
                                "purplecolor": requestType === "artist",
                                "pinkcolor": requestType === "seller"
                            })}>{requestType === "seller" ? t("content-panel-profile.info-box.seller.title") : t("content-panel-profile.info-box.artists.title")}</h2>
                            <p className="text-dir">{t("content-panel-profile.info-box.register.created")}</p>
                        </div>
                        <div className="clearfix"></div>
                    </>

                )

            case "pending":
                return (
                    <>
                        <div className="pull-dir">
                            <h2 className={classnames("text-dir", {
                                "purplecolor": requestType === "artist",
                                "pinkcolor": requestType === "seller"
                            })}>{requestType === "seller" ? t("content-panel-profile.info-box.seller.title") : t("content-panel-profile.info-box.artists.title")}</h2>
                            <p className="text-dir">{t("content-panel-profile.info-box.register.pending")}</p>
                        </div>
                        <div className="clearfix"></div>
                    </>
                )


            case "correction":
                return (
                    <>
                        <div className="pull-dir">
                            <h2 className={classnames("text-dir", {
                                "purplecolor": requestType === "artist",
                                "pinkcolor": requestType === "seller"
                            })}>{requestType === "seller" ? t("content-panel-profile.info-box.seller.title") : t("content-panel-profile.info-box.artists.title")}</h2>
                            <p className="text-dir text-warning">{t("content-panel-profile.info-box.register.correction")}</p>
                        </div>
                        <Link to={requestType === "artist" ? "/panel/registration-artists" : "/panel/become-seller"}
                            className={classnames("btn-box-1 pull-left", {
                                "btn-purple": requestType === "artist",
                                "btn-pink": requestType === "seller",
                            })}>
                            <img src={felsh_left} width="16" height="16" className="center-block" />
                        </Link>
                        <div className="clearfix"></div>
                    </>
                )




            case "rejected":
                return (
                    <>
                        <div className="pull-dir">
                            <h2 className={classnames("text-dir", {
                                "purplecolor": requestType === "artist",
                                "pinkcolor": requestType === "seller"
                            })}>{requestType === "seller" ? t("content-panel-profile.info-box.seller.title") : t("content-panel-profile.info-box.artists.title")}</h2>
                            <p className="text-dir text-danger">{t("content-panel-profile.info-box.register.rejected")}</p>
                        </div>
                        <div className="clearfix"></div>
                    </>
                )
                

            case "approved":
                return (
                    <>
                        <div className="pull-dir">
                            <h2 className={classnames("text-dir", {
                                "purplecolor": requestType === "artist",
                                "pinkcolor": requestType === "seller"
                            })}>{requestType === "seller" ? t("content-panel-profile.info-box.seller.title") : t("content-panel-profile.info-box.artists.title")}</h2>
                            <p className="text-dir text-success">{t("content-panel-profile.info-box.register.approved")}</p>
                        </div>
                        <div className="clearfix"></div>
                    </>
                )
            default:
                break;
        }
    }



    return (
        <div className="row dir">
            {getUserRole() === "artist" &&
                <>
                    <div className="col-md-4">
                        <div className="box box-1">
                            {items?.request_seller &&
                                getRequsetStatus(items.request_seller, "seller")
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box box-1">
                            {items?.request_artist &&
                                getRequsetStatus(items.request_artist, "artist")
                            }
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <CreateGallery />
                    </div>
                </>
            }
            {getUserRole() === "seller" &&
                <>
                    <div className="col-md-4">
                        <div className="box box-1">
                            {items?.request_seller &&
                                getRequsetStatus(items.request_seller, "seller")
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box box-1">
                            {items?.request_artist &&
                                getRequsetStatus(items.request_artist, "artist")
                            }
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <CreateGallery />
                    </div>
                </>
            }
            {getUserRole() === "user" &&
                <>
                    <div className="col-md-4">
                        <div className="box box-1">
                            {items?.request_seller &&
                                getRequsetStatus(items.request_seller, "seller")
                            }
                        </div >
                    </div >
                    <div className="col-md-4">
                        <div className="box box-1">
                            {items?.request_artist &&
                                getRequsetStatus(items.request_artist, "artist")
                            }
                        </div >
                    </div >
                    <div className="col-md-4 ">
                        <CreateGallery />
                    </div>
                </>
            }
        </div >
    )
}

export default BoxesInfo
