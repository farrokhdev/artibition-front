export const BASE_URL = "https://api.artibition.gallery/api/v1";

export const COOKIE_EXPIRES = 1;
export const LOGIN = "/account/login/";
export const REGISTER = "/account/register/";
export const VERIFY = "/account/verify/";
export const PROFILE = "/account/profile/";
export const OPT = "/account/sendotp/";
export const RECOVER_PASSWORD = "/account/recover-password/";
export const ORDER_BUYERS = "/orders/buyers/";
export const ORDER_SELERS = "/orders/sellers/";
export const GALLERY_PANEL_DASHBOARD = (galleryId) => {
  return `/gallery/${galleryId}/dashboard/`;
};
export const PROMOTIONS = "/events/promotions/";
export const EXHIBITION = (galleryId) => {
  return `/${galleryId}/exhibition/`;
};
export const PRODUCTS_ME = "/products/me/";
export const PRODUCTS = "/products/";
export const PRE_UPLOAD = "/core/upload/";
export const CORE_CONTENT = "/core/content/";
export const CORE_CATEGORIS = "/core/category/";
export const PRODUCTS_CATEGORIES = "/products/categories/";
export const PRODUCTS_TECHNIQUES = "/products/techniques/";
export const PRODUCTS_MATERIALS = "/products/materials/";
export const PRODUCTS_SIZES = "/products/sizes/";
export const SUBJECTS_CATEGORISE = id => `/products/categories/${id}/subjects/`;
export const TECHNIQUS_CATEGORIES = id => `/products/categories/${id}/techniques/`;
export const MATERIALS_CATEGORIES = id => `/products/categories/${id}/materials/`;
export const SOCIAL_NETWORK_COLLECTIONS = "/social-network/collections/"
export const GALLERY_LIST = "/gallery/";
export const GALLERY = (id) => `/gallery/${id}/`;
export const GALLERY_EXHIBITION = (id) => `/${id}/exhibition/`;
export const GALLERY_ARTISTS = (id) => `/${id}/artists/`;
export const GALLERY_CONTENT = (id) => `/${id}/content/`;
export const ARTIST = "/artist/";
export const ARTIST_ME = "/artist/me/";

export const ARTIST_ALBUMS = "/artist/albums/";
export const ARTIST_PRODUCTS = "/products/";
export const ARTIST_CATEGORY = "/social-network/collections/";
export const ARTIST_PROFILE = (id) => `/artist/${id}/`;
export const ARTIST_CONTENT = "/artist/content/";
export const ARTIST_EXHIBITION = (id) => `/artist/${id}/exhibition/`;
export const WALLET = "/accounting/wallet/me/";
export const WALLET_TRANSACTIONS = "/accounting/wallet-transactions/";
export const GALLERY_FOLLOW = "/social-network/follow/";
export const FOLLOW_PRODUCTS = "/social-network/follow/products/";
export const FOLLOW_COLLECTIONS = "/social-network/follow/collections/";
export const FOLLOW_ARTISTS = "/social-network/follow/artists/";
export const SELLERS_REQUEST = "/artist/sellers/";
export const ARTIST_BY_GALLERY = (id) => `/${id}/artists/define/`;

export const ACCOUNT_PROFILE = "/account/profile/";
export const PRODUCT_DETAIL = (id) => `/products/${id}/`;
export const MESSAGES_ASSERTION = "/message/assertion/";
export const ARTWORK_BY_GALLERY = (gallereyId, artistId) => {
  return `/${gallereyId}/exhibition/artist/${artistId}/product/`;
};
export const MESSAGES_INBOX = "/message/inbox/";
export const PRODUCT_BY_ARTIST =(galleryId,artistId) => `/${galleryId}/exhibition/artist/${artistId}/product/`
export const ARTISTS = '/artist/'
export const ORDER_BUYER_ME = '/orders/bids/buyers/me/';
export const ORDER_BUYER_ME_ID = id=> `/orders/bids/buyers/me/${id}/`;
export const ARTIST_BY_PRODUCT = '/artist/product/'

export const PRODUCT_BY_ARTIST = (galleryId, artistId) =>
  `/${galleryId}/exhibition/artist/${artistId}/product/`;
export const ARTISTS = "/artist/";
export const ORDER_BUYER_ME = "/orders/bids/buyers/me/";
export const RETERND_ORDER_ITEM = (id) => `/orders/buyers/${id}/return_item/`
export const ORDER_BUYER_ME_ID = (id) => `/orders/bids/buyers/me/${id}/`;

export const CART_ME = "/carts/me/";
export const CART_ME_REMOVE_ITEM = `${BASE_URL}/carts/remove/`;
export const CART_ME_CHECKOUT = `${BASE_URL}/carts/checkout/`;
export const CART_ME_CLEAR_CART = `${BASE_URL}/carts/clear/`;
export const ORDER = (id) => `/orders/${id}/`;
export const ADDRESSES = "/account/location/";
export const COMPLETE_ORDER = (id) => `/orders/${id}/complete_order/`;
export const APPLY_DISCOUNT = (id) =>
  `${BASE_URL}/orders/${id}/apply_discount/`;
export const ADDRESSES_EDIT = (id) => `/account/location/${id}/`;
