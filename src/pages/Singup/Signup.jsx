import React, { useState } from "react";
import { Form, Input, message } from "antd";
import google_icon from "../../assets/img/google.jpg";
import signup from "../../assets/img/login.jpg";
import { Link } from "react-router-dom";
import ModalOtp from "./ModalOtp";
import user_icon from "../../assets/img/username.png";
import lock_icon from "../../assets/img/password.png";
import Statistics from "../../components/Statistics/Statistics";
import BasketFooter from "../../components/BasketFooter/BasketFooter";
import HeaderAuthPages from "../../components/HeaderAuthPages/HeaderAuthPages";
import { t } from "i18next";
import APIService from "../../utils/api.services";

import { REGISTER, OPT } from "../../utils";
import GoogleLoginButton from "../../components/GoogleLoginButton/GoogleLoginButton";

export default function Signup() {

  const [visibleOtpModal, setVisibleOtpModal] = useState(false);
  const [mobile, setMobile] = useState();

  const [form] = Form.useForm();

  function validateUserName(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    if (/^[0]?[789]\d{9}$/.test(mail)) {
      return true;
    }
    message.error(t("empty-error.invalid-username"));

    return false;
  }
  function validatePassword(password) {
    if (/^[\u0600-\u06FF\s]+$/.test(password)) {
      message.error(t("empty-error.invalid-password"));
      return false;
    }
    return true;
  }
  const sendSignUpInfo = (values) => {
    APIService.post(REGISTER, values).then((res) => {
      if (res.data) {
        setTimeout(() => {
          setVisibleOtpModal(true);
          setMobile(values["username"]);

        }, 200);
      } else {
        message.error(res.response.data.message);
      }
    });
  };

  const onFinish = (values) => {
    if (!validateUserName(values.username)) {
      return;
    }
    if (!validatePassword(values.password)) {
      return;
    }

    values["confirmed_password"] = values["password"];
    sendSignUpInfo(values);
  };
  const resendOTP = () => {
    return new Promise((resolve, reject) => {
      APIService.post(OPT, { user_name: mobile }).then((res) => {
        if (res.data) {
          resolve({ success: true });
        } else {
          // message.error(res.response.data.message);
          reject({ success: false, msg: res.response.data.message });
        }
      });
    });
  };

  return (
    <div className="page-fixed">
      <div className="container container-fixed">
        <div className="default-header promotion-head">
          <div className="d-flex content-box-header-auth">
            <HeaderAuthPages />
          </div>
        </div>
        <div className="d-block  login-content">
          <div className="row content-auth-page">
            <div className="col-lg-5 col-lg-offset-1  col-md-offset-1">
              <h2 className="login-title">{t("signup_title")}</h2>

              <Form className="" form={form} onFinish={onFinish}>
                <Form.Item
                  className="w-100"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: t("empty-error.username"),
                    },
                  ]}
                >
                  <Input
                    prefix={<img src={user_icon} />}
                    type="text"
                    className="input-public form-control border-0 px-2  d-flex"
                    placeholder={t("placeholder-username")}
                  />
                </Form.Item>

                <Form.Item
                  className="w-100"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: t("empty-error.password"),
                    },
                  ]}
                >
                  <Input.Password
                    iconRender={(visible) =>
                      visible ? t("hidden-password") : t("show-password")
                    }
                    prefix={<img src={lock_icon} />}
                    type="password"
                    className="input-public form-control border-0 px-2  d-flex"
                    placeholder={t("placeholder-password")}
                  />
                </Form.Item>

                <p className="login-term">
                  {t("describtion-low.text-info-part1")}
                  <Link className="mx-2" to="#">

                    {t("describtion-low.text-link")}{" "}

                  </Link>
                  {t("describtion-low.text-info-part2")}
                </p>
                <div className="clearfix"></div>
                <button className="btn btn-signup">
                  {t("signup_btn-text")}
                </button>
              </Form>

              {/* <button type="button" className="btn btn-google">
                                <img src={google_icon} width="26" height="26" alt="google-icon" className=""/>
                                <span>{t("google-login-text-button")}</span>
                            </button> */}
              <GoogleLoginButton />
              <p className="login-term1">
                {t("forget-signup-text.text")}
                <Link to="/auth/login">{t("forget-signup-text.link")}</Link>
              </p>
            </div>
            <div className="col-lg-5  hidden-sm hidden-xs px-0">
              <img
                src={signup}
                width="730"
                height="902"
                alt=""
                className="img-responsive"
              />
            </div>
          </div>

          <div className="clearfix"></div>
          <Statistics />
        </div>
      </div>
      <div className="clearfix"></div>
      <BasketFooter />

      <ModalOtp
        visibleOtpModal={visibleOtpModal}
        setVisibleOtpModal={setVisibleOtpModal}
        resendOTP={resendOTP}
        phone={mobile}
      />
    </div>
  );
}
