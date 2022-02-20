import React, { useRef, useState } from "react";
import google_icon from "../../assets/img/google.jpg";
import { useTranslation } from "react-i18next";
import APIService from "../../utils/api.services";
import { BASE_URL, PROFILE } from "../../utils/index";
import { setToken } from "../../utils/utils";
import "antd/dist/antd.css";
import { message } from "antd";
import { setProfile } from "../../redux/reducers/auth/auth.actions";
import { useSelector, useDispatch } from "react-redux";
import { GoogleLogin } from 'react-google-login';
import * as axios from 'axios'

function GoogleLoginButton() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { roles } = useSelector((state) => state.authReducer);
    let userRole = "user";

    const handleGoogleLogin = (result) => {
        // console.log(result);
        axios.post(`${BASE_URL}/account/google-login/`, { "token": result.tokenId })
            .then(res => {
                if (res.data) {
                    setToken({
                        "access": res.data.data.access,
                        "refresh": res.data.data.refresh
                    })
                    getProfile().then((res) => {
                        message.success("به آرتیبیشن خوش آمدید");
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
            })

    }

    const handleGoogleFailure = () => {

    }

    async function getProfile() {
        await APIService.get(PROFILE, "").then((res) => {
            if (res.data) {
                dispatch(setProfile({
                    // ...props.state,
                    profile: res.data.data,
                    id: res.data.data.id,
                    roles: res.data.data.roles,
                }))
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

    return (
        <GoogleLogin
            // clientId="202027304973-72kvch2949e95ue1ecp7hmh2buh8mg62.apps.googleusercontent.com"
            clientId="571325083241-4hdsarr7dlo2ppsoa77ppqs952m8ige6.apps.googleusercontent.com"
            buttonText="Google Login"
            // GOOGLE_CLIENT_SECRET="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",
            onSuccess={handleGoogleLogin}
            onFailure={handleGoogleFailure}
            render={renderProps => (
                <button type="button" className="btn btn-google" onClick={renderProps.onClick}>
                    <img
                        src={google_icon}
                        width="26"
                        height="26"
                        alt="ثبت نام در آرتیبیشن"
                        className=""
                    />
                    <span>{t("google-login-text-button")}</span>
                </button>
            )} />
    );
}



export default GoogleLoginButton
