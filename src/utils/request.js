import {getTokenObject} from "./utils";
import * as axios from "axios";

const instance = axios.create({});

let timeOut = false;
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
    if ((error.response.status === 401) && ( !timeOut)) {
        timeOut = true ;

        timeOut = false;


    }
    return Promise.reject(error);
});


export default instance;
