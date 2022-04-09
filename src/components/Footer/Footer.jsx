import React, { useState } from "react";

import logo from "../../assets/img/logo.svg";
import logonamad from "../../assets/img/logo@3x.jpg";
import logomelihonar from "../../assets/img/melihonar@3x.jpg";
import love from "../../assets/img/love.svg";
import { t } from "i18next";
import { Link } from "react-router-dom";
import apiServices from "../../utils/api.services";
import { isNil } from "lodash";
import { message } from "antd";
import { NEWS_LETTER_MEMBERSHIP } from "../../utils";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [userEmail, setUserEmail] = useState();
  const { i18n } = useTranslation();

  const addToNewsLetter = () => {
    if (isNil(userEmail) || userEmail?.length < 1) return;
    let mail_format = /\S+@\S+\.\S+$/;
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
    <footer>
      <div className="container dir">
        <div className="d-block d-md-flex flex-row-reverse row-footer ">
          {/* <div className="col-sm-6 col-sm-push-6"> */}
          <div className="col  my-auto">
            <ul className="social">
              <li>
                <a href="#" id="twitter"></a>
              </li>
              <li>
                <a href="#" id="aparat"></a>
              </li>
              <li>
                <a href="#" id="instagram"></a>
              </li>
              <li>
                <a href="#" id="telegram"></a>
              </li>
              <li>
                <a href="#" id="linkedin"></a>
              </li>
              <li>
                <a href="#" id="youtube"></a>
              </li>
            </ul>
          </div>
          {/* <div className="col-sm-6 col-sm-pull-6 "> */}
          <div className="col">
            <div className="max-w490">
              <div className="nl-input">
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
        <div className="d-block d-lg-flex">
          <div className="col">
            <div className="text-dir">
              <img
                src={logo}
                width="160"
                height="42"
                alt="لوگو آرتیبیشن"
                className="logo-footer"
              />
              <p>{t("footer.text-info")}</p>
            </div>
          </div>
          <div className="col">
            <div className="row ">
              <div className="col-md-4 col-xs-5">
                <div className="footer-nav text-dir">
                  <h6 className="footer-nav-header">
                    {t("footer.guid.title")}
                  </h6>
                  <ul className="footer-nav-body">
                    <li>
                      <a href="/site/content/guid-signup">
                        {t("footer.guid.signup-login")}
                      </a>
                    </li>
                    <li>
                      <a href="/site/content/guid-artist-register">
                        {t("footer.guid.artist-register")}
                      </a>
                    </li>
                    <li>
                      <a href="/site/content/guid-gallery">
                        {t("footer.guid.create-gallery")}
                      </a>
                    </li>
                    <li>
                      <a href="/site/content/guid-purchase">
                        {t("footer.guid.purchase")}
                      </a>
                    </li>
                    <li>
                      <Link to="/site/faq">{t("footer.guid.faq")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-xs-3">
                <div className="footer-nav text-dir">
                  <h6 className="footer-nav-header">
                    {t("footer.terms-of-use.title")}
                  </h6>
                  <ul className="footer-nav-body">
                    <li>
                      <Link to="/site/content/copy-right">
                        {t("footer.terms-of-use.copyright")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/site/content/terms-and-conditional">
                        {t("footer.terms-of-use.terms-and-conditional")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/site/content/privacy">
                        {t("footer.terms-of-use.policy")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-xs-4">
                <div className="footer-nav text-dir">
                  <h6 className="footer-nav-header">
                    {t("footer.artibition.title")}
                  </h6>
                  <ul className="footer-nav-body">
                    <li>
                      <Link to="/site/about-us">
                        {t("footer.artibition.about-us")}
                      </Link>
                    </li>

                    <li>
                      <Link to="/site/contact-us">
                        {t("footer.artibition.contact-us")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/site/work-with-us">
                        {t("footer.artibition.collabration")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/site/content/collabrators">
                        {t("footer.artibition.collabrators")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <ul className="certification">
            <li>
              <a href="#">
                <img
                  src={logonamad}
                  width="375"
                  height=""
                  className="img-responsive"
                  alt="نماد اعتماد الکترونیکی آرتیبیشن"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={logomelihonar}
                  width="375"
                  height=""
                  className="img-responsive"
                  alt="شبکه ملی فرهنگ آرتیبیشن"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="reserve">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <span>{t("footer.text-copyright.text")}</span>
              <a href="#"> {t("footer.text-copyright.link-gallery")} </a>
              <span>{t("footer.text-copyright.text2")}</span>
            </div>
            <div className="col-sm-4 text-left hidden-xs content-builder-text">
              <span>{t("footer.text-build.text1")}</span>
              <span>
                <img
                  src={love}
                  width="14"
                  height="13"
                  alt="آرتیبیشن"
                  className="love"
                />{" "}
              </span>
              <span>{t("footer.text-build.text2")}</span>
              <span>
                <img
                  src={logo}
                  width="94"
                  height="26"
                  alt="لوگو آرتیبیشن"
                  className="smalllogo"
                />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
