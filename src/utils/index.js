export const BASE_URL = "https://api.artibition.gallery/api/v1";



export const COOKIE_EXPIRES = 1;
export const LOGIN = "/account/login/";
export const REGISTER = "/account/register/";
export const VERIFY = "/account/verify/";
export const PROFILE = "/account/profile/";
export const OPT = "/account/sendotp/";
export const RECOVER_PASSWORD = "/account/recover-password/";
export const ORDER_BUYERS = "/orders/buyers/"
export const ORDER_SELERS = "/orders/sellers/"
export const GALLERY_PANEL_DASHBOARD = (galleryId) => { return (`/gallery/${galleryId}/dashboard/`) }
export const PROMOTIONS = "/events/promotions/";
export const EXHIBITION = (galleryId) => { return (`/${galleryId}/exhibition/`) };
export const PRODUCTS_ME = "/products/me/";
export const PRODUCTS = "/products/";
export const PRE_UPLOAD = "/core/upload/";
export const CORE_CONTENT = "/core/content/";
export const CORE_CATEGORIS = "/core/category/";
export const PRODUCTS_CATEGORIES = "/products/categories/";
export const SUBJECTS_CATEGORISE = id => `/products/categories/${id}/subjects/`;
export const TECHNIQUS_CATEGORIES = id => `/products/categories/${id}/techniques/`;
export const MATERIALS_CATEGORIES = id => `/products/categories/${id}/materials/`;
export const SOCIAL_NETWORK_COLLECTIONS = "/social-network/collections/"
export const GALLERY_LIST = "/gallery/";
export const GALLERY = id => `/gallery/${id}/`
export const GALLERY_EXHIBITION = id => `/${id}/exhibition/`
export const GALLERY_ARTISTS = id => `/${id}/artists/`
export const GALLERY_CONTENT = id => `/${id}/content/`
export const ARTIST = "/artist/";
export const ARTIST_ME = "/artist/me/";

export const ARTIST_ALBUMS = "/artist/albums/"
export const ARTIST_PRODUCTS = "/products/";
export const ARTIST_CATEGORY = "/social-network/collections/";
export const ARTIST_PROFILE = id => `/artist/${id}/`;
export const ARTIST_CONTENT = "/artist/content/";
export const ARTIST_EXHIBITION = "/artist/exhibition/";
export const WALLET = "/accounting/wallet/me/";
export const WALLET_TRANSACTIONS = "/accounting/wallet-transactions/";
export const GALLERY_FOLLOW = "/social-network/follow/";
export const FOLLOW_PRODUCTS = "/social-network/follow/products/";
export const ARTIST_BY_GALLERY = id => `/${id}/artists/define/`;
export const ACCOUNT_PROFILE = "/account/profile/";
export const PRODUCT_DETAIL = id => `/products/${id}/`
export const MESSAGES_ASSERTION = "/message/assertion/";
export const ARTWORK_BY_GALLERY = ((gallereyId, artistId) => { return (`/${gallereyId}/exhibition/artist/${artistId}/product/`) })
export const MESSAGES_INBOX = "/message/inbox/";
