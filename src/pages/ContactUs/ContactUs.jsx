import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import telegram from "../../assets/img/telegram.svg";
import whatsapp from "../../assets/img/whatsapp.svg";
import facebook from "../../assets/img/facebook.svg";
import twitter from "../../assets/img/twitter.svg";
import apparat from "../../assets/img/apparat.svg";
import instagram from "../../assets/img/instagram.svg";
import { isNil } from "lodash";
import { message } from "antd";
import apiServices from "../../utils/api.services";
import { CONTACT_US } from "../../utils";
import { t } from "i18next";
function ContactUs() {
  const [contactInfo, setContactInfo] = useState();
  const sendContactInfo = () => {
    console.log(
      "🚀 ~ file: ContactUs.jsx ~ line 19 ~ sendContactInfo ~ contactInfo",
      contactInfo
    );
    if (isNil(contactInfo)) {
      message.error("لطفا مشخصات را وارد کنید.");
      return;
    }
    if (contactInfo?.full_name?.length < 7) {
      message.error("نام و نام خانوادگی باید حدقل 7 کاراکتر باشد");
      return;
    }
    if (contactInfo?.contact_info?.length < 9) {
      message.error("اطلاعات تماس باید حدقل 9 کاراکتر باشد");
      return;
    }
    if (contactInfo?.message?.length < 1) {
      message.error("لطفا متن پیام را وارد کنید.");
      return;
    }
    apiServices
      .post(CONTACT_US, contactInfo)
      .then((res) => {
        if (res.data) {
          setContactInfo({ full_name: "", contact_info: "", message: "" });
          message.success({
            content: "پیام شما با موفقیت ارسال شد",
            style: {
              marginTop: "110px",
            },
          });
        } else {
          message.error({
            content: "خطا در ارسال اطلاعات",
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
          <div className="contact-page">
            <div className="row">
              <div className="col-sm-12 col-md-6 text-dir">
                <div className="contact-col right">
                  <h3 className="default-title">راه‌های ارتباطی</h3>
                  <div className="contact-row">
                    <h4 className="bolder-title contact-title" id="contact-tel">
                      شماره تماس پشتیبانی
                    </h4>
                    <a className="persian-num" href="tel:+982122922538">
                      22538 229 21 98+
                    </a>
                  </div>
                  <div className="contact-row">
                    <h4 className="bolder-title contact-title">
                      راهنمای هنرمندان
                    </h4>
                    <a className="persian-num" href="tel:+989376036968">
                      6036968 937 98+
                    </a>
                  </div>
                  <div className="contact-row">
                    <h4 className="bolder-title contact-title">
                      مشاوره در خرید آثار هنری
                    </h4>
                    <a className="persian-num" href="tel:+989122121030">
                      2121030 912 98+
                    </a>
                  </div>
                  <div className="contact-row">
                    <h4
                      className="bolder-title contact-title"
                      id="contact-mail"
                    >
                      آدرس ایمیل
                    </h4>
                    <a className="en-lang" href="info@arthibition.net">
                      info@arthibition.net
                    </a>
                  </div>
                  <div className="contact-row">
                    <h4
                      className="bolder-title contact-title"
                      id="contact-address"
                    >
                      نشانی
                    </h4>
                    <address>
                      تهران، خیابان شریعتی، پایین‌تر از حسینیه ارشاد، خیابان
                      کوشا، خیابان ناصری، خیابان قندی (دریا)، پلاک ۶
                    </address>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.926062044372!2d51.44203611561349!3d35.75262203365999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e05368687569d%3A0x8f743d766facda2d!2z2q_Yp9mE2LHbjCDYotix2KrbjNio24zYtNmGLSBBcnRpYml0aW9uIEFydCBHYWxsZXJ5!5e0!3m2!1sen!2s!4v1605106201669!5m2!1sen!2s"
                                            width="100%" height="250" frameborder="0" style="border:0;" allowfullscreen=""
                                            aria-hidden="false" tabindex="0"></iframe> */}
                  </div>
                  <div className="contact-row">
                    <ul className="contact-social">
                      <li>
                        <a href="#">
                          <img
                            src={telegram}
                            width="16"
                            height="14"
                            alt="تلگرام-آرتیبیشن"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={whatsapp}
                            width="16"
                            height="14"
                            alt="واتس آپ-آرتیبیشن"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={facebook}
                            width="16"
                            height="14"
                            alt="فیس بوک-آرتیبیشن"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={twitter}
                            width="16"
                            height="14"
                            alt="توییتر-آرتیبیشن"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={apparat}
                            width="16"
                            height="14"
                            alt="آپارات-آرتیبیشن"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={instagram}
                            width="16"
                            height="14"
                            alt="اینستاگرام-آرتیبیشن"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 text-dir">
                <div className="contact-col">
                  <h3 className="default-title">
                    {t("contact-us.keep_in_touch")}
                  </h3>
                  <p className="text-justify">
                    {t("contact-us.keep_in_touch_description")}
                  </p>
                  <div className="form-group">
                    <label for="contact-username"></label>
                    <input
                      id="contact-username"
                      type="text"
                      required
                      placeholder={t("contact-us.fullname")}
                      className="input-public form-control "
                      value={contactInfo?.full_name}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          full_name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label for="contact-email"></label>
                    <input
                      id="contact-email"
                      type="text"
                      required
                      placeholder={t("contact-us.email_phone")}
                      className="input-public form-control "
                      value={contactInfo?.contact_info}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          contact_info: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="clearfix"></div>
                  <div className="form-group mrgt16">
                    <span className="graycolor required ">
                      {t("contact-us.description")}
                    </span>
                    <textarea
                      className="form-control "
                      required
                      placeholder={t("contact-us.write_your_message")}
                      rows="12"
                      value={contactInfo?.message}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          message: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  <button
                    className="btn btn-black pull-left"
                    onClick={sendContactInfo}
                  >
                    {t("contact-us.send")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
