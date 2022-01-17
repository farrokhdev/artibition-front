const dev = {
    BASE_URL: "http://192.168.0.113:8000/api/v1",
    // PARAMS:
    COOKIE_EXPIRES: 1,
    WEB_SOCKET_BASE_URL: "ws://192.168.0.182:9002",

};

const test = {
    BASE_URL: "http://185.226.116.16/api/v1",
    // PARAMS:
    COOKIE_EXPIRES: 1,
    WEB_SOCKET_BASE_URL: "ws://185.226.116.16/api/v1/ws",
};

const prod = {
    BASE_URL: "http://185.226.116.16/api/v1",
    // PARAMS:
    COOKIE_EXPIRES: 1,
    WEB_SOCKET_BASE_URL: "ws://185.226.116.16/api/v1/ws",
};

let config = dev;

if (process.env.REACT_APP_STAGE === "production") {
    config = prod;
} else if (process.env.REACT_APP_STAGE === "test") {
    config = test;
}

//   Object.assign(module.exports, config);

//   export const BASE_URL = "http://192.168.0.113:8000/api/v1"
// export const BASE_URL = "http://185.226.116.16/api/v1"
export const BASE_URL = "https://api.artibition.gallery"
export const COOKIE_EXPIRES = 1
export const ORDERS_BUY = '/orders/buyers/'