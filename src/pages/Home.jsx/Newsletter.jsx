import { message } from "antd";
import axios from "axios";
import { t } from "i18next";
import { isNil } from "lodash";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import newsletter from "../../assets/img/newsletter.svg";
import { NEWS_LETTER_MEMBERSHIP } from "../../utils";
import apiServices from "../../utils/api.services";
import { isLogin } from "../../utils/utils";

export default function Newslatter() {
  const [userEmail, setUserEmail] = useState();
  const { i18n } = useTranslation();






  const addToNewsLetter = () => {
    if (isNil(userEmail) || userEmail?.length < 1) return;
    let mail_format = /\S+@\S+\.\S+/;

    if (!mail_format.test(userEmail)) {
      message.error(
        `${
          i18n.language === "fa-IR"
            ? "آدرس ایمیل معتبر نیست"
            : "Enter a valid email address"
        }`
      );
      return;
    }
    apiServices
      .post(NEWS_LETTER_MEMBERSHIP, { email: userEmail })
      .then((res) => {
        if (res.data) {
          message.success(
            `${i18n.language === "fa-IR" ? "ایمیل ثبت شد" : "Email Added"}`
          );
          setUserEmail("");
        } else {
          message.error(
            `${
              i18n.language === "fa-IR"
                ? "خطا در ثبت ایمیل"
                : "Add Email Failed"
            }`
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="newsletter">
      <div className="d-block d-lg-flex dir">
        <div className="col ">
          <div className="row w-100">
            <div className="newsletter-right w-100">
              <img
                src={newsletter}
                className="pull-right"
                width="96"
                height="80"
                alt="خبرنامه-آرتیبیشن"
              />
              <h3 className="default-title">
                {t("subscribe-newsletter-home.title")}
              </h3>
              <p className="newsletter-text">
                {t("subscribe-newsletter-home.text-info")}
              </p>
              <div className="d-block d-md-flex nl-input">
                <input
                  placeholder={t("subscribe-newsletter-home.placeholder-email")}
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <button type="button" onClick={addToNewsLetter}>
                  {t("subscribe-newsletter-home.submit-email-btn")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix visible-xs"></div>
        <div className="col ">
          {/* <div className="row w-100"> */}
          <div className="row-right-15 w-100">
            <div className="newsletter-left w-100">
              {isLogin() ? (
                <Link to="/panel/profile">
                  <button type="button" className="btn-nlupload">
                    {t("upload")}
                  </button>
                </Link>
              ) : (
                <Link to="/auth/login">
                  <button type="button" className="btn-nlupload">
                    {t("upload")}
                  </button>
                </Link>
              )}
            </div>
          </div>

          {/* </div> */}
        </div>
      </div>
    </div>
    //     <div className="newsletter">
    //     <div className="d-block d-lg-flex">
    //         <div className="col ">
    //             <div className="d-flex row">
    //                 <div className="newsletter-right">
    //                     <img src={newsletter} className="pull-right" width="96" height="80" alt="خبرنامه-آرتیبیشن"/>
    //                     <h3 className="default-title">{t("subscribe-newsletter-home.title")}</h3>
    //                     <p className="newsletter-text">{t("subscribe-newsletter-home.text-info")}</p>
    //                     <div className="nl-input">
    //                         <input placeholder={t("subscribe-newsletter-home.placeholder-email")}/>
    //                         <button type="button">{t("subscribe-newsletter-home.submit-email-btn")}</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="clearfix visible-xs"></div>
    //         <div className="col ">
    //             <div className=" row-right-15 w-100">
    //                 <div className="newsletter-left w-100">
    //                     <button type="button" className="btn-nlupload">{t("upload")}</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
}
