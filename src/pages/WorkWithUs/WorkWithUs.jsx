import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import { message } from "antd";
import apiServices from "../../utils/api.services";
import { WORK_WITH_US } from "../../utils";
import { isNil } from "lodash";

function WorkWithUs() {
  const { t, i18n } = useTranslation();
  const [contactInfo, setContactInfo] = useState();
  const sendContactInfo = () => {
    console.log(
      "🚀 ~ file: WorkWithUs.jsx ~ line 17 ~ sendContactInfo ~ contactInfo",
      contactInfo
    );
    if (isNil(contactInfo)) {
      message.error({
        content: t("contact-us.messages.please_enter_the_information"),

        style: {
          marginTop: "10vh",
        },
      });
      return;
    }
    // if (contactInfo?.full_name?.length < 7) {
    //   message.error({
    //     content: t("contact-us.messages.full_name_least_characters_long"),
    //     style: {
    //       marginTop: "10vh",
    //     },
    //   });
    //   return;
    // }
    // if (contactInfo?.contact_info?.length < 9) {
    //   message.error({
    //     content: t("contact-us.messages.email_phone_least_characters_long"),
    //     style: {
    //       marginTop: "10vh",
    //     },
    //   });
    //   return;
    // }
    // if (contactInfo?.message?.length < 1) {
    //   message.error({
    //     content: t("contact-us.messages.enter_message"),
    //     style: {
    //       marginTop: "10vh",
    //     },
    //   });
    //   return;
    // }
    apiServices
      .post(WORK_WITH_US, contactInfo)
      .then((res) => {
        if (res.data) {
          setContactInfo({ full_name: "", contact_info: "", message: "" });
          message.success({
            content: t("contact-us.messages.successful_sent"),
            className: "alerts alert-success",
            style: {
              marginTop: "110px",
            },
          });
        } else {
          message.error({
            content: t("contact-us.messages.send_message_failed"),
            style: {
              marginTop: "10vh",
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container mx-auto px-0 w-100 overflow-hidden">
        <Header />
        <Menu />

        <div className="container">
          <div
            // className="row partner-page default-content"
            className={`${
              i18n.language === "fa-IR"
                ? "row partner-page default-content"
                : "row partner-page default-content flex-row-reverse"
            }`}
          >
            <div className="col-md-6 text-dir">
              <h2 className="font24 mrgb32">
                {t("work-with-us.terms_cooperation")}
              </h2>
              <p>{t("work-with-us.terms_cooperation_description")}</p>

              <ul className="content-list mrgt16">
                <li>{t("work-with-us.preparation_art_news")}</li>
                <li>{t("work-with-us.introducing_artists")}</li>
                <li>{t("work-with-us.introducing_galleries")}</li>
                <li>{t("work-with-us.art_education")}</li>
                <li>{t("work-with-us.interviewing_artists")}</li>
              </ul>
            </div>
            <div className="col-md-6 text-dir">
              <h2 className="font24 mrgb32 mrgt64-xs">
                {t("work-with-us.contact_us")}
              </h2>
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder={t("work-with-us.fullname")}
                        value={contactInfo?.full_name}
                        onChange={(e) =>
                          setContactInfo({
                            ...contactInfo,
                            full_name: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder={t("work-with-us.email")}
                        value={contactInfo?.email}
                        onChange={(e) =>
                          setContactInfo({
                            ...contactInfo,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder={t("work-with-us.phone")}
                        value={contactInfo?.mobile}
                        onChange={(e) =>
                          setContactInfo({
                            ...contactInfo,
                            mobile: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="upload-resume form-group">
                      <label for="upload-resume">
                        {t("work-with-us.upload_resume")}
                      </label>
                      <input type="file" id="upload-resume" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows="6"
                        placeholder={t("work-with-us.description")}
                        value={contactInfo?.message}
                        onChange={(e) =>
                          setContactInfo({
                            ...contactInfo,
                            message: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <button
                      className="btn btn-black pull-left"
                      onClick={() => sendContactInfo()}
                      //   onClick={() => console.log("test")}
                    >
                      {t("work-with-us.submit")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default WorkWithUs;
