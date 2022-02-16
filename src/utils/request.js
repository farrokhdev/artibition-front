import { getRefreshToken, getTokenObject, removeToken, setToken } from "./utils";
import * as axios from "axios";
import { BASE_URL } from ".";

const instance = axios.create({});
instance.interceptors.request.use(config => {
    if (!config.headers.Authorization) {
        let token = getTokenObject()
        if (token) {
            config.headers.Authorization = `Bearer ${token.Authorization}`;
        }
    }

    return config;
}, error => Promise.reject(error));


instance.interceptors.response.use((response) => {
    return response
}, async function (error) {
    if (error.response.status === 401) {
        if (getRefreshToken()) {
            axios.post(`${BASE_URL}/account/token/refresh/`, { "refresh": getRefreshToken() })
                .then(res => {
                    if (res.data) {
                        setToken({
                            "access": res.data.data.access,
                            "refresh": getRefreshToken()
                        })
                        window.location.reload()
                    }
                    else {
                        removeToken()
                        window.location.href = "/auth/login"
                    }
                })
                .catch(err => {
                    removeToken()
                    window.location.href = "/auth/login"
                })
        } else {
            removeToken()
            window.location.href = "/auth/login"
        }
    }
    return Promise.reject(error);
});


export default instance;
