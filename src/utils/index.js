// export const BASE_URL = " http://192.168.0.23:8808/api/v1";
// export const BASE_URL = " http://192.168.0.100:8000/api/v1";
// export const BASE_URL = " http://192.168.0.113:8000/api/v1";
// export const BASE_URL = " http://192.168.0.145:8000/api/v1";
// export const BASE_URL = " http://192.168.0.141:8000/api/v1";
// export const BASE_URL = " http://192.168.0.100:8000/api/v1";
// export const BASE_URL = " http://192.168.0.182:8000/api/v1";
// export const BASE_URL = " http://local.devmoj.ir/api/v1";

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
export const CORE_CONTENT_ID = (id) => `/core/content/${id}/`;
export const CORE_CATEGORIS = "/core/category/";
export const PRODUCTS_CATEGORIES = "/products/categories/";
export const PRODUCTS_TECHNIQUES = "/products/techniques/";
export const PRODUCTS_MATERIALS = "/products/materials/";
export const PRODUCTS_SIZES = "/products/sizes/";
export const PRODUCTS_LAST = "/products/last_seen/";
export const PRODUCTS_SUGGESTION = "/products/suggestion/";
export const SUBJECTS_CATEGORISE = (id) =>
  `/products/categories/${id}/subjects/`;
export const TECHNIQUS_CATEGORIES = (id) =>
  `/products/categories/${id}/techniques/`;
export const MATERIALS_CATEGORIES = (id) =>
  `/products/categories/${id}/materials/`;
export const SOCIAL_NETWORK_COLLECTIONS = "/social-network/collections/";
export const SOCIAL_NETWORK_COLLECTIONS_ID = (id) =>
  `/social-network/collections/${id}/`;
export const GALLERY_LIST = "/gallery/";
export const GALLERY = (id) => `/gallery/${id}/`;
export const GALLERY_COUNT_PENDING = "/gallery/count_pending_orders/";
export const GALLERY_EXHIBITION = (id) => `/${id}/exhibition/`;
export const GALLERY_ARTISTS = (id) => `/${id}/artists/`;
export const GALLERY_CONTENT = (id) => `/${id}/content/`;
export const GALLERY_CONTENT_DETAILS = (gallery_id, content_id) =>
  `/${gallery_id}/content/${content_id}`;
export const ARTIST = "/artist/";
export const ARTIST_ME = "/artist/me/";

export const ARTIST_ALBUMS = "/artist/albums/";
export const ARTIST_ALBUMS_ID = (id) => `/artist/albums/${id}/`;
export const ARTIST_PRODUCTS = "/products/";
export const ARTIST_CATEGORY = "/social-network/collections/";
export const ARTIST_PROFILE = (id) => `/artist/${id}/`;
export const ARTIST_CONTENT = "/artist/content";
export const ARTIST_CONTENT_DETAILS = (content_id) =>
  `/artist/content/${content_id}`;
export const ARTIST_EXHIBITION = (id) => `/artist/${id}/exhibition/`;
export const WALLET = "/accounting/wallet/me/";
export const WALLET_TRANSACTIONS = "/accounting/wallet-transactions/";
export const WALLET_TRANSACTIONS_REQUEST = "/accounting/transaction-requests/";
export const GALLERY_FOLLOW = "/social-network/follow/";
export const DELETE_FOLLOW = (id) => `/social-network/follow/${id}`;
export const FOLLOW_PRODUCTS = "/social-network/follow/products/";
export const FOLLOW_COLLECTIONS = "/social-network/follow/collections/";
export const FOLLOW_ARTISTS = "/social-network/follow/artists/";
export const SELLERS_REQUEST = "/artist/sellers/";
export const ARTIST_BY_GALLERY = (id) => `/${id}/artists/define/`;
export const TICKET = "/ticket/";
export const TICKET_ID = (id) => `/ticket/${id}/`;
export const TICKET_REPLY = (id) => `/ticket/${id}/reply/`;
export const ACCOUNT_PROFILE = "/account/profile/";
export const PRODUCT_DETAIL = (id) => `/products/${id}/`;
export const MESSAGES_ASSERTION = "/message/assertion/";
export const ARTWORK_BY_GALLERY = (gallereyId, artistId) => {
  return `/${gallereyId}/exhibition/artist/${artistId}/product/`;
};
export const MESSAGES_INBOX = "/message/inbox/";

export const ADVISOR = "/advisor/advisor/";
export const ARTISTS = "/artist/";
export const ORDER_BUYER_ME = "/orders/bids/buyers/me/";
export const ORDER_BUYER_ME_ID = (id) => `/orders/bids/buyers/me/${id}/`;
export const GALLERY_BIDS = (gallery_id) => `/gallery/${gallery_id}/bids/`;
export const GALLERY_EDIT_BIDS = (gallery_id, bid_id) =>
  `/gallery/${gallery_id}/bids/${bid_id}/`;
export const ARTIST_BY_PRODUCT = "/artist/product/";
export const RETERND_ORDER_ITEM = (id) => `/orders/buyers/${id}/return_item/`;
export const PRODUCT_BY_ARTIST = (galleryId, artistId) =>
  `/${galleryId}/exhibition/artist/${artistId}/product/`;
export const CART_ME = "/carts/me/";
export const CART_ME_REMOVE_ITEM = `${BASE_URL}/carts/remove/`;
export const CART_ME_CHECKOUT = `${BASE_URL}/carts/checkout/`;
export const CART_ME_CLEAR_CART = `${BASE_URL}/carts/clear/`;
export const ORDER = (id) => `/orders/${id}/`;
export const ADDRESSES = "/account/location/";
export const EDIT_ADDRESSES = (id) => `/account/location/${id}/`;
export const COMPLETE_ORDER = (id) => `/orders/${id}/complete_order/`;
export const APPLY_DISCOUNT = (id) =>
  `${BASE_URL}/orders/${id}/apply_discount/`;
export const ADDRESSES_EDIT = (id) => `/account/location/${id}/`;
export const EXHIBITION_LIST = "/exhibition";
export const CART_ME_ADD_ITEM = `${BASE_URL}/carts/add/`;
export const ADD_ARTIST_TO_GALLERY = (galleryId) => `/${galleryId}/add-artists`;
export const EXHIBITION_INFO = (galleryId, exhibitionId) =>
  `/${galleryId}/exhibition/${exhibitionId}/`;
export const EXHIBITION_PRODUCT = (galleryId, exhibitionId) =>
  `/${galleryId}/exhibition/${exhibitionId}/artist-product`;
export const SEND_MESSAGE = `/message/sendmessage/`;
export const GALLERY_PRODUCTS = (galleryId) =>
  `/gallery/${galleryId}/products/`;
export const GET_ORDERS = `${BASE_URL}/orders/`;
export const SEARCH_PRODUCTS = `/search/products/`;
export const SEARCH = `/search/`;
export const FAQ_ = `/management/faqs/`;
export const FAQ_CATEGORY = `/management/faq-categories/`;
export const CONTENT_DETAIL = (slug) => `/management/content/${slug}/`;
// export const PROMOTIONS = '/events/promotions/'
export const SLIDER_PIC = "/management/content/get_slider_pic/";
export const NEWS_LETTER_MEMBERSHIP = "/account/membership/";
export const CONTACT_US = "/management/contact_us/";
export const WORK_WITH_US = "/management/work_with_us/";
export const SINGLE_EXHIBITION = (id) => `/exhibition/${id}`;
export const ARTIST_RESUME = (id) => `/artist/${id}/resume/`;
export const CORE_EXCHANGE = "/core/exchange/";
export const PROMOTIONS_ALL_PRODUCTS = "/events/promotions/all_products/";
