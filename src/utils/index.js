export const BASE_URL = "https://api.artibition.gallery/api/v1";
// export const BASE_URL = "http://192.168.0.113:8000/api/v1";


export const COOKIE_EXPIRES = 1;
export const LOGIN = "/account/login/";
export const REGISTER = "/account/register/";
export const VERIFY = "/account/verify/";
export const PROFILE = "/account/profile/";
export const OPT = "/account/sendotp/";
export const RECOVER_PASSWORD = "/account/recover-password/";
export const ORDER_BUYERS = "/orders/buyers/";
export const ORDER_SELERS =  "/orders/sellers/";
export const PRODUCTS_ME = "/products/me/";
export const PRODUCTS = "/products/";
export const PRE_UPLOAD = "/core/upload/";
export const  PRODUCTS_CATEGORIES ="/products/categories/";
export const SUBJECTS_CATEGORISE = id =>`/products/categories/${id}/subjects/`;
export const TECHNIQUS_CATEGORIES = id => `/products/categories/${id}/techniques/`;
export const MATERIALS_CATEGORIES = id => `/products/categories/${id}/materials/`;
export const SOCIAL_NETWORK_COLLECTIONS = "/social-network/collections/" 
