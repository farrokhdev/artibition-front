import cookie from "react-cookies";
import qs from "qs";
import { t } from "i18next";
import {
  BASE_URL,
  COOKIE_EXPIRES,
  DELETE_FOLLOW,
  GALLERY_FOLLOW,
} from "./index";
import { message } from "antd";
import { useTranslation } from "react-i18next";
import momentJalaali from "moment-jalaali";
import apiServices from "./api.services";
export function Arraify(data) {
  if (!data) return [];

  if (Array.isArray(data)) {
    return data;
  } else {
    return [data];
  }
}
export function Header(options = {}) {
  let token = Token(),
    headers = new Headers();
  headers.set("Accept", "application/json");
  headers.set("Content-Type", "application/json");
  let heads = options;

  token && headers.set("Authorization", "Bearer " + token);
  options.headers &&
    Object.entries(options.headers).forEach(([k, v]) => headers.set(k, v));
  options.headers = headers;

  if (heads["Accept"]) {
    options.headers.set("Accept", heads["Accept"]);
  }
  return options;
}

export function Url(url = "", data = undefined) {
  if (url.charAt(0) !== "/") {
    url = "/" + url;
  }
  return (
    BASE_URL +
    url +
    (data ? `?${qs.stringify(data, { arrayFormat: "comma" })}` : ``)
  );
}

export function setToken(token) {
  const expires = new Date();
  expires.setDate(expires.getDate() + COOKIE_EXPIRES);
  cookie.save("token", token.access, { path: "/", expires });
  cookie.save("refresh", token.refresh, { path: "/", expires });
}

export function Token() {
  let token = cookie.load("token");
  if (token === "undefined") {
    return false;
  }
  return token;
}

export function isLogin() {
  let token = cookie.load("token");
  return token !== undefined;
}

export function getRefreshToken() {
  let refresh = cookie.load("refresh");
  if (refresh === "undefined") {
    return undefined;
  }

  return refresh;
}

export function removeToken() {
  cookie.remove("token", { path: "/" });
  cookie.remove("refresh", { path: "/" });
  window.sessionStorage.clear();
  if (!isLogin()) {
    message.success(t("loggout_success"));
    setTimeout(() => {
      window.location.href = "/";
    }, 400);
  }
}

export function getTokenObject() {
  let token = Token();
  if (token !== undefined) {
    return { Authorization: token };
  }
}

export function formatNumber(value) {
  let f = value.match(/\d+/);
  if (f) return f[0];
  return "";
}
export function UrlQuery(url = "", data = {}) {
  return url + `?${qs.stringify(data, { arrayFormat: "comma" })}`;
}

export function GetLanguage() {
  const { i18n } = useTranslation();
  return i18n.language;
}

export function timeToStr(time, format) {
  if (time) {
    return momentJalaali(time).locale("fa").format(format);
  }
  return "";
}

export const follow = ({ activity, content, object_id, callBack, action }) => {
  if (action) {
    apiServices
      .delete(DELETE_FOLLOW(object_id), "")
      .then((res) => {
        if (res.status === 204) {
          callBack();
          message.success({
            content: "اثر با موفقیت حذف شد",
            style: {
              marginTop: "110px",
            },
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  } else {
    const payload = {
      content_type: content,
      activity_type: activity,
      object_id: object_id,
    };
    apiServices
      .post(GALLERY_FOLLOW, payload)
      .then((res) => {
        if (res.data) {
          callBack();
          message.success({
            content: "درخواست شما با موفقیت ثبت شد",
            style: {
              marginTop: "110px",
            },
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
};
