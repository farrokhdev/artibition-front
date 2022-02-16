import React, { useEffect, useState } from "react";
import { t } from 'i18next';
import apiServices from "../../utils/api.services";
import { message } from "antd";
import { GALLERY_PANEL_DASHBOARD } from "../../utils";
import { useSelector } from 'react-redux'

function CounterStatus() {

    const { gallery_id } = useSelector((state) => state.galleryReducer)

    const [artworksStatus, setArtworkSatus] = useState()

    useEffect(() => {
        apiServices.get(GALLERY_PANEL_DASHBOARD(gallery_id), "")
            .then(res => {
                if (res.data) {
                    setArtworkSatus(res.data.data)
                } else {
                    message.error(res.response.data.message)
                }

            })
    }, [])


    return (

        <div className="box artistpanel-1">
            <div className="row box-dir-reverse">
                {artworksStatus &&
                    <>
                        <div className="col-sm-2 col-xs-6">
                            <div className="status-block">
                                <span className="persian-num font24">{artworksStatus.exhibition_num}</span>
                                <span className="graycolor font17">{t("gallery-panel-dashboard.counter_status.exhibition")}</span>
                                <a href="#" className="btn-back-blue">{t("gallery-panel-dashboard.counter_status.view")}</a>
                            </div>
                        </div>
                        <div className="col-sm-2 col-xs-6">
                            <div className="status-block">
                                <span className="persian-num font24">{artworksStatus.virtual_exhibition_num}</span>
                                <span className="graycolor font17">{t("gallery-panel-dashboard.counter_status.online_exhibition")}</span>
                                <a href="#" className="btn-back-blue">{t("gallery-panel-dashboard.counter_status.view")}</a>
                            </div>
                        </div>
                        <div className="col-sm-2 col-xs-6">
                            <div className="status-block">
                                <span className="persian-num greencolor font24">{artworksStatus.approve_gallery_product_num}</span>
                                <span className="graycolor font17">{t("gallery-panel-dashboard.counter_status.approved")}</span>
                                <a href="#" className="btn-back-blue">{t("gallery-panel-dashboard.counter_status.view")}</a>
                            </div>
                        </div>
                        <div className="col-sm-2 col-xs-6">
                            <div className="status-block">
                                <span className="persian-num  font24">{artworksStatus.pending_edition_gallery_product_num}</span>
                                <span className="graycolor font17">{t("gallery-panel-dashboard.counter_status.require_modification")}</span>
                                <a href="#" className="btn-back-blue">{t("gallery-panel-dashboard.counter_status.view")}</a>
                            </div>
                        </div>
                        <div className="col-sm-2 col-xs-6">
                            <div className="status-block">
                                <span className="persian-num orangecolor font24">{artworksStatus.pending_gallery_product_num}</span>
                                <span className="graycolor font17">{t("gallery-panel-dashboard.counter_status.pending")}</span>
                                <a href="#" className="btn-back-blue">{t("gallery-panel-dashboard.counter_status.view")}</a>
                            </div>
                        </div>
                        <div className="col-sm-2 col-xs-6">
                            <div className="status-block">
                                <span className="persian-num pinkcolor font24">{artworksStatus.reject_gallery_product_num}</span>
                                <span className="graycolor font17">{t("gallery-panel-dashboard.counter_status.not_approved")}</span>
                                <a href="#" className="btn-back-blue">{t("gallery-panel-dashboard.counter_status.view")}</a>
                            </div>
                        </div>
                    </>
                }

            </div>
        </div>
    )
}

export default CounterStatus