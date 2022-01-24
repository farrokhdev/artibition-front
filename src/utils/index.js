export const BASE_URL = "https://api.artibition.gallery/api/v1";


export const COOKIE_EXPIRES = 1;
export const LOGIN = "/account/login/";
export const REGISTER = "/account/register/";
export const VERIFY = "/account/verify/";
export const PROFILE = "/account/profile/";
export const OPT = "/account/sendotp/";
export const RECOVER_PASSWORD = "/account/recover-password/";
export const ORDER_BUYERS = "/orders/buyers/";
export const GALLERY_LIST = "/gallery/";
export const GALLERY = id => `/gallery/${id}/`
export const GALLERY_EXHIBITION = id => `/${id}/exhibition/`
export const GALLERY_ARTISTS = id => `/${id}/artists/`
export const GALLERY_CONTENT = id => `/${id}/content/`
export const ARTIST = "/artist/";
export const ARTIST_PRODUCTS = "/products/";
export const ARTIST_CATEGORY = "/social-network/collections/";
export const ARTIST_PROFILE = id => `/artist/${id}/`
export const ARTIST_CONTENT = "/artist/content/"
export const ARTIST_EXHIBITION = "/artist/exhibition/"
export const ORDER_SELERS =  "/orders/sellers/"
export const WALLET =  "/accounting/wallet/me/"
export const WALLET_TRANSACTIONS =  "/accounting/wallet-transactions/"
export const GALLERY_FOLLOW = '/social-network/follow/'