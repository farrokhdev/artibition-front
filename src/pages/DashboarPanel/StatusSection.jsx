import React from "react";
import { t } from "i18next";

import edit_icon from '../../assets/img/edit_name.svg';
import upload_icon from '../../assets/img/upload.png';


function StatusSection() {
  return (
    <div className="box artistpanel-2 ">
      <div className="row box-dir-reverse">
        <div className=" col-xs-6">
          <div className="status-step passed">
            <span className="step-title text-dir">
              {t("content-panel-dashboard.box_status.user_status")}
            </span>
            <span className="graycolor text-dir">{t("content-panel-dashboard.box_status.approved_artist")}</span>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="status-step passed">
            <span className="step-title text-dir">
              {t("content-panel-dashboard.box_status.contact_status")}
            </span>
            <span className="graycolor text-dir">{t("content-panel-dashboard.box_status.approved_1")}</span>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="col-xs-6">
          <div className="status-step failed">
            <span className="d-flex box-dir-reverse step-title text-dir">
              {" "}
              {t("content-panel-dashboard.box_status.email_status")}
              <a href="#">
                <img src={edit_icon} width="26" height="26" alt="" />
              </a>
            </span>
            <span className="graycolor text-dir">{t("content-panel-dashboard.box_status.not_approved")}</span>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="status-step failed">
            <span className="d-flex box-dir-reverse step-title text-dir">
              {t("content-panel-dashboard.box_status.resume")}
              <a href="#">
                <img src={upload_icon} width="20" height="20" alt="" />
              </a>
            </span>
            <span className="graycolor text-dir">{t("content-panel-dashboard.box_status.not_send")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusSection;
