import React from 'react';
import { t } from 'i18next';

import new_artwork from '../../assets/img/new-artwork.png';
import add_icon from '../../assets/img/add.png';

function BoxStatusArtwork() {
    return (
        <div className="box artistpanel-1">
                        <div className="d-blcok d-lg-flex box-dir-reverse ">
                            <div className="col-12 col-md-3 px-0 w-100">
                                <img src={new_artwork} width="40" height="30" alt="new-artwork" className="center-block"/>
                                <button type="button" className="d-flex align-items-center justify-content-center box-dir-reverse btn-outline-blue">
                                    <img src={add_icon} width="12" height="12" alt="add-icon" className="mx-2"/>
                                    <span>{t("content-panel-dashboard.box_status.btn")}</span>
                                </button>
                            </div>
                            <div className="col">
                                <div className="col col-md-3 px-0">
                                    <div className="status-block">
                                        <span className="persian-num greencolor font24">5</span>
                                        <span className="graycolor font17">{t("content-panel-dashboard.box_status.approved")}</span>
                                        <a href="#" className="btn-back-blue">{t("content-panel-dashboard.box_status.veiw")}</a>
                                    </div>
                                </div>
                                <div className="col col-md-3 px-0">
                                    <div className="status-block">
                                        <span className="persian-num font24">1</span>
                                        <span className="graycolor font17">{t("content-panel-dashboard.box_status.modification")}</span>
                                        <a href="#" className="btn-back-blue">{t("content-panel-dashboard.box_status.veiw")}</a>
                                    </div>
                                </div>
                                <div className="col col-md-3 px-0">
                                    <div className="status-block">
                                        <span className="persian-num orangecolor font24">1</span>
                                        <span className="graycolor font17">{t("content-panel-dashboard.box_status.pending")}</span>
                                        <a href="#" className="btn-back-blue">{t("content-panel-dashboard.box_status.veiw")}</a>
                                    </div>
                                </div>
                                <div className="col col-md-3 px-0 ">
                                    <div className="status-block">
                                        <span className="persian-num pinkcolor font24">1</span>
                                        <span className="graycolor font17">{t("content-panel-dashboard.box_status.not_approved")}</span>
                                        <a href="#" className="btn-back-blue">{t("content-panel-dashboard.box_status.veiw")}</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
    )
}

export default BoxStatusArtwork
