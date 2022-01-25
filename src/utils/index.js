export const BASE_URL = "https://api.artibition.gallery/api/v1";
// export const BASE_URL = "http://185.226.116.16/api/v1";
// export const BASE_URL = "http://192.168.0.113:8000/api/v1";  //mohammad-nabati
// export const BASE_URL = "http://192.168.0.113:8000/api/v1";


export const COOKIE_EXPIRES = 1;
export const LOGIN = "/account/login/";
export const REGISTER = "/account/register/";
export const VERIFY = "/account/verify/";
export const PROFILE = "/account/profile/";
export const OPT = "/account/sendotp/";
export const RECOVER_PASSWORD = "/account/recover-password/";
export const ORDER_BUYERS = "/orders/buyers/";
export const ORDER_SELERS = "/orders/sellers/"
export const WALLET = "/accounting/wallet/me/"
export const WALLET_TRANSACTIONS = "/accounting/wallet-transactions/"
export const GALLERY_PANEL_DASHBOARD = (galleryId) => { return (`/gallery/${galleryId}/dashboard/`) }
export const PROMOTIONS = "/events/promotions/"
export const EXHIBITION = (galleryId) => { return (`/${galleryId}/exhibition/`) }
export const GALLERY_ARTISTS = (galleryId) => { return (`/${galleryId}/artists/`) }
