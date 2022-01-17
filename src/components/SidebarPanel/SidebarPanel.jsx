import React from 'react';

import profile_pic from '../../assets/img/profile_pic.svg';
import edit from '../../assets/img/edit.svg';
import invite from '../../assets/img/invite.svg';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

function SidebarPanel() {
    return (
        
        <div className="sidebar active " id="mySidebar">
            <div className="inner-sidebar" data-spy="affix" data-offset-top="205">
                <div className="sidebar-info mb-5">
                    <img src={profile_pic} width="56" height="56" alt=""
                        className="pull-dir sidebar-avatar img-responsive"/>
                    <div className="sidebar-personal-info text-dir">
                        <span className="sidebar-name ">آیدین آغداشلو</span>
                        <div className="sidebar-mobile">
                            <span className="persian-num pull-dir">۴۸۴۰۴۷۵ ۰۹۱۲</span>
                            <a href="#">
                                <img src={edit} width="32" height="32" alt="" className="pull-dir img-responsive"/>
                            </a>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="clearfix"></div>

                <div className="d-block mt-5">
                <ul className="text-dir">
                    <li className="sidebar-icon" id="home"><Link to="/panel/dashboard"><span className="sidebar-nav-margin">{t("drawer-panel.nav-dashboard")}</span></Link></li>
                    <li className="sidebar-icon" id="home"><Link to="/panel/dashboard"><span className="sidebar-nav-margin">{t("drawer-panel.nav-dashboard-gallery")}</span></Link></li>
                    <li className="sidebar-icon my-4" id="manage-artworks"><Link to="/panel/art-management"><span className="sidebar-nav-margin">{t("drawer-panel.nav-art-management")}</span></Link></li>
                    <li className="sidebar-icon my-4" id="mypurchase"><Link to="/panel/purchases"><span className="sidebar-nav-margin">{t("drawer-panel.nav-mypurchases")}</span></Link></li>
                    <li className="sidebar-icon my-4" id="financial"><Link to="/panel/orders"><span className="sidebar-nav-margin">{t("drawer-panel.nav-orders")}</span></Link></li>
                    <li className="sidebar-icon my-4" id="wallet"><Link to="/panel/wallet"><span className="sidebar-nav-margin">{t("drawer-panel.nav-wallet")}</span></Link></li>
                    <li className="sidebar-icon my-4" id="my-albums"><Link to="/panel/my-albums"><span className="sidebar-nav-margin">{t("drawer-panel.nav-my-albums")}</span></Link></li>
                    <li className="sidebar-icon my-4" id="my-albums"><Link to="/panel/my-albums"><span className="sidebar-nav-margin">{t("drawer-panel.nav-exhibitions")}</span></Link></li>
                    <li className="sidebar-icon my-4" id="liked"><Link to="/panel/favorites"><span className="sidebar-nav-margin">{t("drawer-panel.nav-favorits")}</span></Link></li>
                    <li className="sidebar-icon my-4 " id="messages"><Link to="/panel/messages"><span className="sidebar-nav-margin">{t("drawer-panel.nav-messages")}</span></Link></li>
                    <li className="sidebar-icon active" id="profile"><Link to="/panel/profile"><span className="sidebar-nav-margin">{t("drawer-panel.nav-profile")}</span></Link></li>
                </ul>
                </div>

                <div className=" justify-content-end ">
                    <button type="button" className="d-flex btn-outline-pink box-dir-reverse">
                        <img src={invite} className="mx-2 mt-1" width="20" height="20" alt=""/>
                        <span className="">{t("drawer-panel.invite.btn")}</span>
                    </button>
                    <p>{t("drawer-panel.invite.text")}</p>
                </div>
            </div>
        </div>
    )
}

export default SidebarPanel;
