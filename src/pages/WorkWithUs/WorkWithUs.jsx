import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import apiServices from "../../utils/api.services";
import { WORK_WITH_US } from "../../utils";
import { isNil } from "lodash";
import { Upload, message } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import { PRE_UPLOAD } from "../../utils/index";
import UploadAxios from "../../utils/uploadRequest";
import { t } from "i18next";
import add_icon from "../../assets/img/add_pic.svg";
import download from "../../assets/img/download.svg";
const { Dragger } = Upload;

function OneUpload({ uploadList, setUploadList, fileType = "image" }) {
  const propsUpload = {
    maxCount: 1,

    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
      }
      if (status === "done") {
      } else if (status === "error") {
        info.fileList.filter((item) => item.uid !== info.file.uid);
        //if status error, image not added to list upload
        setUploadList(uploadList.filter((item) => item.uid !== info.file.uid));
      }

      return info;
    },

    progress: {
      strokeColor: {
        "0%": "#e6007e",
        "100%": "#e6007e",
      },
      width: "50%",
      strokeWidth: 3,
      format: (percent) => `${parseFloat(percent.toFixed(2))}%`,
    },

    onRemove: (file) => {
      setUploadList(uploadList.filter((item) => item.uid !== file.uid));
    },

    showUploadList: {
      showDownloadIcon: false,
      downloadIcon: "download ",
      showRemoveIcon: true,
    },

    defaultFileList: [],
  };

  return (
    <React.Fragment>
      <Upload
        accept=".pdf"
        {...propsUpload}
        className="upload-list-inline"
        customRequest={async (e) => {
          const { file, onSuccess, onError } = e;

          await apiServices
            .post(PRE_UPLOAD, {
              content_type: fileType,
            })
            .then((res) => {
              onSuccess({ status: "success" });

              let uploadImage;
              uploadImage = {
                file_key: res.data.data.file_key,
                media_path: res.data.data.upload_url,
                type: fileType,
                bucket_name: fileType,
                is_default: uploadList?.length === 0 ? true : false,
                uid: file.uid,
              };
              if (
                res.data.data.upload_url &&
                (file?.type.split("/")[0] === fileType || "application")
              ) {
                UploadAxios.put(res.data.data.upload_url, file)
                  .then((res) => {
                    setUploadList([uploadImage]);
                    message.success({
                      content: "با موفقیت بارگذاری شد",
                      style: {
                        marginTop: "110px",
                      },
                    });
                  })
                  .catch((err) => {
                    console.error(err);
                    onError({ status: "error" });
                    message.error({
                      content: "بارگذاری  با خطا مواجه شد.",
                      style: {
                        marginTop: "10vh",
                      },
                    });
                  });
              } else {
              }
            })
            .catch((err) => {
              console.error(err);
              onError({ status: "error" });
            });
        }}
      >
        <div className="upload-resume form-group">
          <label for="upload-resume">{t("work-with-us.upload_resume")}</label>
        </div>
      </Upload>
    </React.Fragment>
  );
}

function WorkWithUs() {
  const { t, i18n } = useTranslation();
  const [contactInfo, setContactInfo] = useState();
  const [uploadList, setUploadList] = useState([]);
  const sendContactInfo = () => {
    console.log(
      "🚀 ~ file: WorkWithUs.jsx ~ line 17 ~ sendContactInfo ~ contactInfo",
      uploadList
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
    if (contactInfo?.full_name?.length < 7) {
      message.error({
        content: t("contact-us.messages.full_name_least_characters_long"),
        style: {
          marginTop: "10vh",
        },
      });
      return;
    }
    if (!contactInfo?.mobile || contactInfo?.mobile?.length < 9) {
      message.error({
        content: t("contact-us.messages.email_phone_least_characters_long"),
        style: {
          marginTop: "10vh",
        },
      });
      return;
    }
    if (!contactInfo?.description || contactInfo?.description?.length < 1) {
      message.error({
        content: t("contact-us.messages.enter_message"),
        style: {
          marginTop: "10vh",
        },
      });
      return;
    }
    if (uploadList?.length < 1) {
      message.error({
        content: t("contact-us.messages.upload_resume"),
        style: {
          marginTop: "10vh",
        },
      });
      return;
    }
    apiServices
      .post(WORK_WITH_US, {
        ...contactInfo,
        ...(uploadList?.length > 0 && { resume: uploadList[0] }),
      })
      .then((res) => {
        if (res.data) {
          setContactInfo({
            full_name: "",
            mobile: "",
            email: "",
            description: "",
          });
          setUploadList([]);
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
                    <OneUpload
                      setUploadList={setUploadList}
                      uploadList={uploadList}
                    />
                    {/* <div className="upload-resume form-group">
                      <label for="upload-resume">
                        {t("work-with-us.upload_resume")}
                      </label>
                      <input type="file" id="upload-resume" accept=".pdf" />
                    </div> */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows="6"
                        placeholder={t("work-with-us.description")}
                        value={contactInfo?.description}
                        onChange={(e) =>
                          setContactInfo({
                            ...contactInfo,
                            description: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="button"
                      className="btn btn-black pull-left"
                      onClick={sendContactInfo}
                      value={t("work-with-us.submit")}
                    />
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
