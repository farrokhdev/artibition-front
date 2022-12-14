import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import user_icon from "../../assets/img/username.png";
import lock_icon from "../../assets/img/password.png";
import BasketFooter from "../../components/BasketFooter/BasketFooter";
import { useTranslation } from "react-i18next";
import HeaderAuthPages from "../../components/HeaderAuthPages/HeaderAuthPages";
import APIService from "../../utils/api.services";
import { BASE_URL, CART_ME, LOGIN, PROFILE } from "../../utils/index";
import { setToken } from "../../utils/utils";
import "antd/dist/antd.css";
import { message } from "antd";
import { connect } from "react-redux";
import { setProfile } from "../../redux/reducers/auth/auth.actions";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_CART } from "../../redux/reducers/cart/cart.types";
import * as axios from "axios";
import GoogleLoginButton from "../../components/GoogleLoginButton/GoogleLoginButton";
import { isNil } from "lodash";

function Login(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { roles } = useSelector((state) => state.authReducer);
  const [loginImage, setLoginImage] = useState();

  let userRole = "user";
  const getLoginImage = () => {
    axios
      .get(`${BASE_URL}/management/content/get_login_pic/`)
      .then((res) => {
        if (res.data.code === 200) {
          const data = res.data.data;
          if (!isNil(data?.exact_url)) {
            setLoginImage(data?.exact_url);
          }
        }
      })
      .catch((err) => console.log("GET_LOGIN_IMAGE_FAILED", err));
  };

  useEffect(() => {
    getLoginImage();
  }, []);
  const handleGoogleLogin = (result) => {
    axios
      .post(`${BASE_URL}/account/google-login/`, { token: result.tokenId })
      .then((res) => {
        if (res.data) {
          setToken({
            access: res.data.data.access,
            refresh: res.data.data.refresh,
          });
          getProfile().then((res) => {
            message.success(t("login_success"));
            console.log(userRole);
            if (userRole !== "user") {
              setTimeout(() => {
                window.location.href = "/panel/dashboard";
              }, 500);
            } else {
              setTimeout(() => {
                window.location.href = "/panel/profile";
              }, 500);
            }
          });
        }
      });
  };

  const handleGoogleFailure = () => {};

  async function getProfile() {
    await APIService.get(PROFILE, "").then((res) => {
      if (res.data) {
        props.setProfile({
          ...props.state,
          profile: res.data.data,
          id: res.data.data.id,
          roles: res.data.data.roles,
        });

        if (typeof roles === "string") {
          userRole = roles;
        } else {
          const rolesTemp = res.data.data.roles;

          if (rolesTemp && rolesTemp.length > 0) {
            if (rolesTemp.includes("seller")) {
              userRole = "seller";
            }
            if (rolesTemp.includes("artist")) {
              userRole = "artist";
            }
          } else {
            userRole = "user";
          }
        }
      } else {
        message.error(res.response.data.message);
      }
    });
  }

  const [form] = Form.useForm();
  async function onFinish(values) {
    APIService.post(LOGIN, values).then((res) => {
      if (res.data) {
        setToken(res.data.data);
        APIService.get(CART_ME, "").then((res) => {
          if (res.data.code === 200) {
            dispatch({
              type: UPDATE_CART,
              payload: res?.data?.data?.product_items?.length,
            });
          } else {
            console.log(res);
            message.error({
              content: res,
              style: { marginTop: "110px" },
            });
          }
        });
        getProfile().then((res) => {
          // props.auth.profile?.is_approved &&
          //   message.error({
          //     content: '???????? ?????????????? ?????????????? ?????? ???? ?????????? ????????', style: {
          //         marginTop: '220px',
          //     },
          // })

          message.success("???? ???????????????? ?????? ??????????");
          console.log(userRole);
          if (userRole !== "user") {
            setTimeout(() => {
              window.location.href = "/panel/dashboard";
            }, 500);
          } else {
            setTimeout(() => {
              window.location.href = "/panel/profile";
            }, 500);
          }
        });
      } else {
        console.log(res.response);
        message.error(res.response.data.message);
      }
    });
  }

  return (
    <div className="page-fixed">
      <div className="container container-fixed ">
        <div className="default-header promotion-head">
          <div className="d-flex content-box-header-auth">
            <HeaderAuthPages />
          </div>
        </div>
        <div className="d-block login-content">
          <div className="row content-auth-page">
            <div className="col-lg-5 col-lg-offset-1  col-md-offset-1 ">
              <h2 className="login-title">{t("login_Title")}</h2>

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
                    className="d-flex input-public form-control border-0 px-2  "
                    placeholder={t("placeholder-password")}
                  />
                </Form.Item>
                <p className="login-term">
                  <Link to="/auth/confirm-mobile">{t("forget-title")}</Link>
                </p>
                <div className="clearfix"></div>
                <button htmlType="submit" className="btn btn-signup">
                  {t("login-btn-text")}
                </button>
              </Form>

              <GoogleLoginButton />
              <p className="login-term1">
                {t("is-registered-question")}
                <Link to="/auth/signup">{t("signup-text")}</Link>
              </p>
            </div>

            <div className="col-lg-5   hidden-sm hidden-xs ">
              <img
                src={loginImage}
                width="730"
                height="902"
                alt=""
                className="img-responsive"
              />
            </div>
          </div>

          <div className="clearfix"></div>
          {/* Statistics was commented because product owner wants to upload an image
           instead of this component */}
          {/* <Statistics /> */}
          {/* <div className="col-lg-5   hidden-sm hidden-xs ">
            <img
              src={statisticImage}
              width="810"
              height="133"
              alt=""
              className="img-responsive"
            />
          </div> */}
        </div>
      </div>

      <BasketFooter />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProfile: (data) => dispatch(setProfile(data)),
  };
};

const mapStateToProps = (store) => {
  return {
    auth: store.authReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
