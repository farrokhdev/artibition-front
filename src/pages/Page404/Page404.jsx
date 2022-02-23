import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { message, Modal } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import remove from '../../assets/img/remove.svg'
import { setOpenModal } from '../../redux/reducers/auth/auth.actions';
import { Link } from "react-router-dom";
import { isLogin } from '../../utils/utils'
import icon404 from '../../assets/img/404_error.svg'
import { t } from "i18next";


function Page404() {

    return (
        <>
            <div className="container mx-auto px-0 w-100">
                <Header />
                <Menu />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto ">
                            <div className="not-found">
                                <img src={icon404} width="236" height="213" alt="صفحه مورد نظر یافت نشد" className="img-responsive center-block" />
                                <span className="default-title">{t("page404.title")}</span>
                                <Link to="/" className="btn-black">{t("page404.btn")}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Page404;
