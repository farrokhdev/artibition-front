import React , {useEffect, useState} from 'react';

import logo from '../../assets/img/logo.svg';
import login from '../../assets/img/login.jpg';
import logo_icon from '../../assets/img/logo-icon.png';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import NavbarMenuHeader from '../NavbarMenuHeader/NavbarMenuHeader';

function HeaderAuthPages() {

    const {t, i18n} = useTranslation();
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    

    return (
        <>
            <div className="col">
                        <Link to="/" className="artibition-logo">
                            <img src={logo} width="160" height="42" alt="Artibition-logo"
                                 className="hidden-sm img-responsive"/>
                            <img src={logo_icon} width="1079" height="1079" alt="Artibition-logo"
                                 className="visible-sm img-responsive"/>
                        </Link>
                        <div className="visible-xs">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                        </div>
                        <div className="clearfix visible-xs"></div>

                        <NavbarMenuHeader t={t}/>

                        {/* <nav className="navbar ">
                            <div className="collapse navbar-collapse " id="myNavbar">
                                <ul className="nav d-flex">
                                    <li className="active"><a href="#">{t("nav-menu-artworks")}</a></li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">{t("nav-menu-showroom")}
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">آثار هنری</a></li>
                                            <li><a href="#">تالار</a></li>
                                            <li><a href="#">نمایشگاه مجازی</a></li>
                                            <li><a href="#">بلاگ</a></li>
                                            <li><a href="#">مشاوره خرید</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">{t("nav-menu-online-exhibition")}</a></li>
                                    <li><a href="#">{t("nav-menu-blog")}</a></li>
                                    <li className="sales"><a href="#">{t('nav-menu-sales-advisor')}</a></li>
                                </ul>
                            </div>
                        </nav> */}


                    </div>

                    <div className="col-sm-2   hidden-xs px-0 ">
                        <div className="head-leftbtn hidden-xs">
                            <button onClick={()=>changeLanguage(i18n.language !== 'fa-IR' ? 'fa-IR' : 'en-US' )} type="button" className="btn-changelang pull-left">{t("title_lang-header")}</button>
                            <button type="button" className="btn-login pull-left">{t("redirect-login-header")}</button>
                        </div>
                    </div>
        </>
    )
}

export default HeaderAuthPages
