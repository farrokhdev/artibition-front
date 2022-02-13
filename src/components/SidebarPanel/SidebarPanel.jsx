import React from 'react';
import profile_pic from '../../assets/img/profile_pic.svg';
import edit from '../../assets/img/edit.svg';
import invite from '../../assets/img/invite.svg';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import { setProfile, showEditProfileVisible } from "../../redux/reducers/auth/auth.actions";
import ModalEditProfile from '../../pages/PanelProfile/ModalEditProfile';
import { message } from 'antd';
import { editGalleryModeFunc, galleryId } from '../../redux/reducers/Gallery/gallery.actions';
import { useDispatch } from 'react-redux';

function SidebarPanel(props) {
    const { t, i18n } = useTranslation();
    const { roles } = useSelector((state) => state.authReducer)
    const { galleryProfile } = useSelector((state) => state.galleryReducer)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleShowModal = () => {
        props.showEditProfileVisible(true)
    }


    const goToEditGallery = () => {
        dispatch(galleryId(galleryProfile?.id))
        dispatch(editGalleryModeFunc(true))
        dispatch(setProfile({ roles: "gallery" }))
        navigate("/panel/gallery-info")
    }


    const copyToClipboard = () => {
        navigator.clipboard.writeText(`با دعوت دوستان خود از آرتیبیشن حمایت نمایید\n\n` + `${window.location.origin}`)
        message.success({
            content: "با موفقیت کپی شد",
            style: { marginTop: "110px" }
        })
    }

    const getUserRole = () => {
        let userRole = "user"
        if (typeof roles === "string") {
            return roles
        } else {
            if (roles && roles.length > 0) {
                if (roles.includes("seller")) {
                    userRole = "seller"
                }
                if (roles.includes("artist")) {
                    userRole = "artist"
                }
            } else {
                userRole = 'user'
            }
        }
        return userRole
    }

    return (
        <div className="sidebar active " id="mySidebar">
            <div className="inner-sidebar" data-spy="affix" data-offset-top="205">
                <div className="sidebar-info mb-5">
                    <img src={profile_pic} width="56" height="56" alt=""
                        className="pull-dir sidebar-avatar img-responsive" />
                    <div className="sidebar-personal-info text-dir">
                        <span className="sidebar-name ">
                            {getUserRole() === "gallery" ?
                                i18n.language === 'fa-IR' ?
                                    galleryProfile.translations?.fa?.title :
                                    galleryProfile.translations?.en?.title
                                :
                                i18n.language === 'fa-IR' ?
                                    props.auth?.profile?.translations?.fa?.first_name + " " +
                                    props.auth?.profile?.translations?.fa?.last_name :
                                    props.auth?.profile?.translations?.en?.first_name + " " +
                                    props.auth?.profile?.translations?.en?.last_name
                            }
                        </span>
                        {getUserRole() !== "gallery" ?
                            <div className="sidebar-mobile">
                                <span className="persian-num pull-dir">{props?.auth?.profile?.mobile}</span>
                                <a href="#">
                                    <img src={edit} onClick={handleShowModal} width="32" height="32" alt="" className="pull-dir img-responsive" />
                                </a>
                            </div>
                            :
                            <div className="sidebar-mobile">
                                {/* <span className="persian-num pull-dir">{props?.auth?.profile?.mobile}</span> */}
                                <div style={{ cursor: "pointer" }}>
                                    <img src={edit} onClick={goToEditGallery} width="32" height="32" alt="" className="pull-dir img-responsive" />
                                </div>
                            </div>
                        }
                    </div>
                    <div className="clearfix" />
                </div>
                <div className="clearfix" />

                <div className="d-block mt-5">
                    <ul className="text-dir">
                        {(getUserRole() === 'gallery') &&
                            <>
                                <li className="sidebar-icon" id="home"><Link to="/panel/dashboard"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-dashboard")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="manage-artworks"><Link to="/panel/art-management"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-art-management")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="financial"><Link to="/panel/orders"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-orders")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="content"><Link to="/panel/contents"><span
                                    className="sidebar-nav-margin">محتوا</span></Link></li>
                                <li className="sidebar-icon my-4" id="mypurchase"><Link to="/panel/bidding-price"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.biding-price")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="my-albums"><Link to="/panel/exhibitions"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-exhibitions")}</span></Link></li>
                                <li className="sidebar-icon  my-4" id="artists"><Link to="/panel/artists"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-artists")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="gallery"><Link to={"/panel/galleries"}><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-my-galleries")}</span></Link></li>
                            </>
                        }

                        {(getUserRole() === 'artist') &&
                            <>
                                <li className="sidebar-icon" id="home"><Link to="/panel/dashboard"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-dashboard")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="manage-artworks"><Link to="/panel/art-management"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-art-management")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="mypurchase"><Link to="/panel/purchases"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-mypurchases")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="financial"><Link to="/panel/orders"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-orders")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="wallet"><Link to="/panel/wallet"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-wallet")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="my-albums"><Link to="/panel/my-albums"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-my-albums")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="liked"><Link to="/panel/favorites"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-favorits")}</span></Link></li>
                                <li className="sidebar-icon my-4 " id="messages"><Link to="/panel/messages"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-messages")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="content"><Link to="/panel/contents"><span
                                    className="sidebar-nav-margin">محتوا</span></Link></li>
                                <li className="sidebar-icon my-4" id="my-albums"><Link to="/panel/my-collections"><span
                                    className="sidebar-nav-margin">کالکشن های من</span></Link></li>
                                <li className="sidebar-icon my-4" id="mypurchase"><Link to="/panel/bidding-price"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.biding-price")}</span></Link></li>
                                <li className="sidebar-icon " id="profile"><Link to="/panel/profile"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-profile")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="gallery"><Link to={"/panel/galleries"}><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-my-galleries")}</span></Link></li>
                            </>
                        }

                        {(getUserRole() === 'seller') &&
                            <>
                                <li className="sidebar-icon" id="home"><Link to="/panel/dashboard"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-dashboard")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="mypurchase"><Link to="/panel/purchases"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-mypurchases")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="financial"><Link to="/panel/orders"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-orders")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="wallet"><Link to="/panel/wallet"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-wallet")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="liked"><Link to="/panel/favorites"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-favorits")}</span></Link></li>
                                <li className="sidebar-icon my-4 " id="messages"><Link to="/panel/messages"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-messages")}</span></Link></li>
                                <li className="sidebar-icon " id="profile"><Link to="/panel/profile"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-profile")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="my-albums"><Link to="/panel/my-collections"><span
                                    className="sidebar-nav-margin">کالکشن های من</span></Link></li>
                                <li className="sidebar-icon my-4" id="mypurchase"><Link to="/panel/bidding-price"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.biding-price")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="gallery"><Link to={"/panel/galleries"}><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-my-galleries")}</span></Link></li>
                            </>
                        }

                        {(getUserRole() === 'user') &&
                            <>
                                <li className="sidebar-icon my-4" id="mypurchase"><Link to="/panel/purchases"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-mypurchases")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="wallet"><Link to="/panel/wallet"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-wallet")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="liked"><Link to="/panel/favorites"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-favorits")}</span></Link></li>
                                <li className="sidebar-icon my-4 " id="messages"><Link to="/panel/messages"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-messages")}</span></Link></li>
                                <li className="sidebar-icon " id="profile"><Link to="/panel/profile"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-profile")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="my-albums"><Link to="/panel/my-collections"><span
                                    className="sidebar-nav-margin">کالکشن های من</span></Link></li>
                                <li className="sidebar-icon my-4" id="mypurchase"><Link to="/panel/bidding-price"><span
                                    className="sidebar-nav-margin">{t("drawer-panel.biding-price")}</span></Link></li>
                                <li className="sidebar-icon my-4" id="gallery"><Link to={"/panel/galleries"}><span
                                    className="sidebar-nav-margin">{t("drawer-panel.nav-my-galleries")}</span></Link></li>
                            </>
                        }
                    </ul>
                </div>

                <div className=" justify-content-end ">
                    <button type="button" className="d-flex btn-outline-pink box-dir-reverse" onClick={() => { copyToClipboard() }}>
                        <img src={invite} className="mx-2 mt-1" width="20" height="20" alt="" />
                        <span className="">{t("drawer-panel.invite.btn")}</span>
                    </button>
                    <p>{t("drawer-panel.invite.text")}</p>
                </div>
            </div>
            <ModalEditProfile
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        showEditProfileVisible: (data) => dispatch(showEditProfileVisible(data))
    }
}

const mapStateToProps = (store) => {
    return {
        auth: store.authReducer,
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(SidebarPanel)