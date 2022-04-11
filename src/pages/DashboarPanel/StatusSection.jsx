import React, { useEffect, useState } from "react";
import { t } from "i18next";

import edit_icon from "../../assets/img/edit_name.svg";
import upload_icon from "../../assets/img/upload.png";
import { useSelector } from "react-redux";
import apiServices from "../../utils/api.services";
import { ARTIST_ME } from "../../utils";
import queryString from "query-string";
import { isDashboardStatus } from "../../utils/converToPersian";

function StatusSection() {
  const { roles, profile } = useSelector((state) => state.authReducer);

  console.log("profile", profile);
  const [artistState, setArtistState] = useState("");
  const getUserRole = () => {
    let userRole = "user";
    if (typeof roles === "string") {
      return roles;
    } else {
      if (roles && roles.length > 0) {
        if (roles.includes("seller")) {
          userRole = "seller";
        }
        if (roles.includes("artist")) {
          userRole = "artist";
        }
      } else {
        userRole = "user";
      }
    }
    return userRole;
  };

  useEffect(() => {
    apiServices
      .get(ARTIST_ME, "")
      .then((res) => {
        setArtistState(res.data.data);
        console.log("artistState?.approve_state", res.data.data.approve_state);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="box artistpanel-2 ">
      <div className="row box-dir-reverse">
        {getUserRole() === "gallery" && (
          <>
            <div className="col-xs-6">
              <div className="status-step passed">
                <span className="step-title text-dir">
                  {t("content-panel-dashboard.box_status.contact_status")}
                </span>
                <span className="graycolor text-dir">
                  {t("content-panel-dashboard.box_status.approved_1")}
                </span>
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
                <span className="graycolor text-dir">
                  {t("content-panel-dashboard.box_status.not_send")}
                </span>
              </div>
            </div>
          </>
        )}
        {getUserRole() === "artist" && (
          <>
            <div className=" col-xs-6">
              <div
                className={isDashboardStatus(artistState?.approve_state).css}
              >
                <span className="step-title text-dir">
                  {t("content-panel-dashboard.box_status.user_status")}
                </span>
                <span className="graycolor text-dir">
                  {isDashboardStatus(artistState?.approve_state).title}
                </span>
              </div>
            </div>
            <div className="col-xs-6">
              {profile?.email_approved === true ? (
                <div className="status-step passed">
                  <span className="d-flex box-dir-reverse step-title text-dir">
                    {t("content-panel-dashboard.box_status.email_status")}
                  </span>
                  <span className="graycolor text-dir">
                    {t("content-panel-dashboard.box_status.approved_1")}
                  </span>
                </div>
              ) : (
                <div className="status-step failed">
                  <span className="d-flex box-dir-reverse step-title text-dir">
                    {t("content-panel-dashboard.box_status.email_status")}
                    <a href="#">
                      <img src={edit_icon} width="26" height="26" alt="" />
                    </a>
                  </span>
                  <span className="graycolor text-dir">
                    {t("content-panel-dashboard.box_status.not_approved")}
                  </span>
                </div>
              )}
            </div>
            <div className="col-xs-6">
              {artistState?.about_me_file ? (
                <div className="status-step passed">
                  <span className="d-flex box-dir-reverse step-title text-dir">
                    {t("content-panel-dashboard.box_status.resume")}
                    <a href="#">
                      <img src={upload_icon} width="20" height="20" alt="" />
                    </a>
                  </span>
                  <span className="graycolor text-dir">
                    {t("content-panel-dashboard.box_status.send")}
                  </span>
                </div>
              ) : (
                <div className="status-step failed">
                  <span className="d-flex box-dir-reverse step-title text-dir">
                    {t("content-panel-dashboard.box_status.resume")}
                    <a href="#">
                      <img src={upload_icon} width="20" height="20" alt="" />
                    </a>
                  </span>
                  <span className="graycolor text-dir">
                    {t("content-panel-dashboard.box_status.not_send")}
                  </span>
                </div>
              )}
            </div>
          </>
        )}
        {
          getUserRole() === "seller" && (
            <>
              <div className=" col-xs-6">
                <div
                  className={isDashboardStatus(artistState?.approve_state).css}
                >
                  <span className="step-title text-dir">
                    {t("content-panel-dashboard.box_status.user_status")}
                  </span>
                  <span className="graycolor text-dir">
                    {isDashboardStatus(artistState?.approve_state).title}
                  </span>
                </div>
              </div>
              <div className="col-xs-6">
                {profile?.email_approved === true ? (
                  <div className="status-step passed">
                    <span className="d-flex box-dir-reverse step-title text-dir">
                      {t("content-panel-dashboard.box_status.email_status")}
                    </span>
                    <span className="graycolor text-dir">
                      {t("content-panel-dashboard.box_status.approved_1")}
                    </span>
                  </div>
                ) : (
                  <div className="status-step failed">
                    <span className="d-flex box-dir-reverse step-title text-dir">
                      {t("content-panel-dashboard.box_status.email_status")}
                      <a href="#">
                        <img src={edit_icon} width="26" height="26" alt="" />
                      </a>
                    </span>
                    <span className="graycolor text-dir">
                      {t("content-panel-dashboard.box_status.not_approved")}
                    </span>
                  </div>
                )}
              </div>
              <div className="col-xs-6">
                {artistState?.about_me_file ? (
                  <div className="status-step passed">
                    <span className="d-flex box-dir-reverse step-title text-dir">
                      {t("content-panel-dashboard.box_status.resume")}
                      <a href="#">
                        <img src={upload_icon} width="20" height="20" alt="" />
                      </a>
                    </span>
                    <span className="graycolor text-dir">
                      {t("content-panel-dashboard.box_status.send")}
                    </span>
                  </div>
                ) : (
                  <div className="status-step failed">
                    <span className="d-flex box-dir-reverse step-title text-dir">
                      {t("content-panel-dashboard.box_status.resume")}
                      <a href="#">
                        <img src={upload_icon} width="20" height="20" alt="" />
                      </a>
                    </span>
                    <span className="graycolor text-dir">
                      {t("content-panel-dashboard.box_status.not_send")}
                    </span>
                  </div>
                )}
              </div>
            </>
          )

          // <>
          //   <div className=" col-xs-6">
          //     <div className="status-step passed">
          //       <span className="step-title text-dir">
          //         {t("content-panel-dashboard.box_status.user_status")}
          //       </span>
          //       <span className="graycolor text-dir">{t("content-panel-dashboard.box_status.approved_artist")}</span>
          //     </div>
          //   </div>
          //   <div className="col-xs-6">
          //     <div className="status-step passed">
          //       <span className="step-title text-dir">
          //         {t("content-panel-dashboard.box_status.contact_status")}
          //       </span>
          //       <span className="graycolor text-dir">{t("content-panel-dashboard.box_status.approved_1")}</span>
          //     </div>
          //   </div>
          //   <div className="col-xs-6">
          //     <div className="status-step failed">
          //       <span className="d-flex box-dir-reverse step-title text-dir">
          //         {t("content-panel-dashboard.box_status.email_status")}
          //         <a href="#">
          //           <img src={edit_icon} width="26" height="26" alt="" />
          //         </a>
          //       </span>
          //       <span className="graycolor text-dir">{t("content-panel-dashboard.box_status.not_approved")}</span>
          //     </div>
          //   </div>
          // </>
        }
        {getUserRole() === "user" && (
          <>
            <div className=" col-xs-6">
              <div className="status-step passed">
                <span className="step-title text-dir">
                  {t("content-panel-dashboard.box_status.user_status")}
                </span>
                <span className="graycolor text-dir">
                  {t("content-panel-dashboard.box_status.approved_artist")}
                </span>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="status-step failed">
                <span className="d-flex box-dir-reverse step-title text-dir">
                  {t("content-panel-dashboard.box_status.email_status")}
                  <a href="#">
                    <img src={edit_icon} width="26" height="26" alt="" />
                  </a>
                </span>
                <span className="graycolor text-dir">
                  {t("content-panel-dashboard.box_status.not_approved")}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default StatusSection;
