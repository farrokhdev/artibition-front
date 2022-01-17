import React from "react";
import { t } from 'i18next';

function CounterStatus() {
    return (
        <div className="box artistpanel-1">
            <div className="row box-dir-reverse">
                <div className="col-sm-2 col-xs-6">
                    <div className="status-block">
                        <span className="persian-num font24">0</span>
                        <span className="graycolor font17">{t("gallery-panel-dashboard.counter_status.exhibition")}</span>
                        <a href="#" className="btn-back-blue">{t("gallery-panel-dashboard.counter_status.view")}</a>
                    </div>
                </div>
                <div className="col-sm-2 col-xs-6">
                    <div className="status-block">
                        <span className="persian-num font24">1</span>
                        <span className="graycolor font17">{t("gallery-panel-dashboard.counter_status.online_exhibition")}</span>
                        <a href="#" className="btn-back-blue">{t("gallery-panel-dashboard.counter_status.view")}</a>
                    </div>
                </div>
                <div className="col-sm-2 col-xs-6">
                    <div className="status-block">
                        <span className="persian-num greencolor font24">10</span>
                        <span className="graycolor font17">{t("gallery-panel-dashboard.counter_status.approved")}</span>
                        <a href="#" className="btn-back-blue">{t("gallery-panel-dashboard.counter_status.view")}</a>
                    </div>
                </div>
                <div className="col-sm-2 col-xs-6">
                    <div className="status-block">
                        <span className="persian-num  font24">0</span>
                        <span className="graycolor font17">{t("gallery-panel-dashboard.counter_status.require_modification")}</span>
                        <a href="#" className="btn-back-blue">{t("gallery-panel-dashboard.counter_status.view")}</a>
                    </div>
                </div>
                <div className="col-sm-2 col-xs-6">
                    <div className="status-block">
                        <span className="persian-num orangecolor font24">0</span>
                        <span className="graycolor font17">{t("gallery-panel-dashboard.counter_status.pending")}</span>
                        <a href="#" className="btn-back-blue">{t("gallery-panel-dashboard.counter_status.view")}</a>
                    </div>
                </div>
                <div className="col-sm-2 col-xs-6">
                    <div className="status-block">
                        <span className="persian-num pinkcolor font24">0</span>
                        <span className="graycolor font17">{t("gallery-panel-dashboard.counter_status.not_approved")}</span>
                        <a href="#" className="btn-back-blue">{t("gallery-panel-dashboard.counter_status.view")}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterStatus