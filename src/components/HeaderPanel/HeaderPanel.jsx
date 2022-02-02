import React from "react";
import { Link } from "react-router-dom";
import NavbarMenuHeader from "../../components/NavbarMenuHeader/NavbarMenuHeader";
import { useTranslation } from "react-i18next";

import logo from "../../assets/img/logo.svg";
import logo_icon from "../../assets/img/logo-icon.png";
import profile from "../../assets/img/profile.svg";
import message from "../../assets/img/message.svg";
import search from "../../assets/img/search.svg";
import shopping_basket from "../../assets/img/shopping_basket.svg";
import { removeToken } from "../../utils/utils";
import { connect } from "react-redux";
import { clearStorage } from "../../redux/reducers/auth/auth.actions";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_CART } from "../../redux/reducers/cart/cart.types";
function HeaderPanel(props) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.cartReducer);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  return (
    <div className="d-flex header panel-header box-dir-reverse dir right-0">
      <div className="col col-lg-2  px-0">
        <div className="d-flex box-dir-reverse">
          <div className="artibition-logo pull-dir">
            <Link to="/">
              <img
                src={logo}
                width="240"
                height="62"
                className="img-responsive hidden-sm"
                alt="آرتیبیشن"
              />
              <img
                src={logo_icon}
                width="1079"
                height="1079"
                className="img-responsive visible-sm"
                alt="آرتیبیشن"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="col col-lg-8  px-0">
        <div className="d-none d-lg-flex box-dir-reverse justify-content-center ">
          <NavbarMenuHeader t={t} />
        </div>
      </div>
      <div className="col col-lg-2  px-0">
        <div className="d-flex box-dir-reverse ">
          <div className="d-flex box-dir-reverse">
            <a href="/panel/cart" className="btn-panel-header btn-shoppingcard">
              <img src={shopping_basket} width="24" height="24" alt="" />
              <div className="basket-notification ">
                <span className="persian-num">{count}</span>
              </div>
            </a>
            <a href="#" className="btn-panel-header">
              <img src={search} width="24" height="24" alt="pull-dir" />
            </a>
            <a
              href="#"
              className="btn-panel-header btn-sidebar hidden-lg hidden-md"
            >
              <img
                src={profile}
                width="24"
                height="24"
                alt="پروفایل کاربری آرتیبیشن"
                className="pull-dir"
              />
            </a>
            <a href="#" className="btn-panel-header hidden-sm hidden-xs">
              <img src={message} width="24" height="24" alt="pull-dir" />
            </a>
            <a href="#" className="btn-panel-header btn-changelang">
              <button
                onClick={() =>
                  changeLanguage(i18n.language !== "fa-IR" ? "fa-IR" : "en-US")
                }
              >
                {t("title_lang-header")}
              </button>
            </a>
            <a href="#" className="btn-panel-header btn-changelang">
              <button
                onClick={() => {
                  props.clearStorage();
                  removeToken();
                  dispatch({
                    type: UPDATE_CART,
                    payload: 0,
                  });
                }}
              >
                {t("logout_Title")}
              </button>
            </a>
          </div>
          <div className="btn-panel-header visible-xs">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#panel-navbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
        </div>
      </div>

      {/* <div className="col col-md-9 pl-0 ">
                <div className="d-flex box-dir-reverse">
                    <div className="col-2 ">
                        <div className="artibition-logo pull-dir">
                            <Link to="/">
                                <img src={logo} width="240" height="62" className="img-responsive hidden-sm" alt="آرتیبیشن" />
                                <img src={logo_icon} width="1079" height="1079" className="img-responsive visible-sm"
                                    alt="آرتیبیشن" />
                            </Link>
                        </div>
                    </div>
                            
                <div className="col bg-danger">
                        <div className="d-none d-xl-flex  justify-content-center align-items-center ">
                            <NavbarMenuHeader t={t} />
                        </div>
                </div>
                </div>
            </div>


            <div className="col  col-md-3 px-0">
                <div className="d-flex head-leftbtn pull-dir justify-custom  w-100">
                    <div className="btn-panel-header visible-xs">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#panel-navbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                
                
                    <div className="d-flex box-dir-reverse">
                        <a href="#" className="btn-panel-header btn-shoppingcard">
                            <img src={shopping_basket} width="24" height="24" alt="" />
                            <div className="basket-notification ">
                                <span className="persian-num">2</span>
                            </div>
                        </a>
                        <a href="#" className="btn-panel-header">
                            <img src={search} width="24" height="24" alt="pull-dir" />
                        </a>
                        <a href="#" className="btn-panel-header btn-sidebar hidden-lg hidden-md">
                            <img src={profile} width="24" height="24" alt="پروفایل کاربری آرتیبیشن" className="pull-dir" />
                        </a>
                        <a href="#" className="btn-panel-header hidden-sm hidden-xs">
                            <img src={message} width="24" height="24" alt="pull-dir" />
                        </a>
                        <a href="#"  className="btn-panel-header btn-changelang"> 
                        <button onClick={()=>changeLanguage(i18n.language !== 'fa-IR' ? 'fa-IR' : 'en-US' )}>En</button>
                        
                        </a>
                    </div>


                </div>
            </div> */}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearStorage: (data) => dispatch(clearStorage(data)),
  };
};

const mapStateToProps = (store) => {
  return {
    auth: store.authReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderPanel);
