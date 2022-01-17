import React from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import HanLogo from '../../assets/img/gallery/hanlogo.jpg';
import circleplus1 from '../../assets/img/circle-plus-1.png';
import { Breadcrumb, Tabs } from 'antd';
import { t } from 'i18next';
import Introduction from './Introduction';
import Footer from '../../components/Footer/Footer';
import Exhibition from './Exhibition';
import Artworks from './Artworks';
import Artist from './Artist';
import Journal from './Journal';
import GalleryContact from './GalleryContact';
import { useTranslation } from 'react-i18next';


function GalleryIntroduction() {

    const { TabPane } = Tabs;
    const { t, i18n } = useTranslation();

    function callback(key) {
        console.log(key);
    }

    return (
        <>
            <div className="container">
                <Header />
                <Menu />

                <div className="container">
                    <ul className="breadcrumb">
                        <li><a href="#">{t("artwork.artibition")}</a></li>
                        <li><a href="#">{t("artist_profile.artists")}</a></li>
                        <li><a href="#">{t("gallery-panel-my-gallery.my_gallery")}</a></li>
                        <li class="active">{t("artist_profile.introduction")}</li>
                    </ul>
                    <div className="gallery-cover"></div>
                    <div className="gallery-info">
                        <div className="gallery-logo">
                            <img src={HanLogo} width="110" height="110" alt="هان گالری" className="img-responsive" />
                        </div>
                        <h2 className="gallery-name">{t("gallery-panel-my-gallery.my_gallery")}</h2>
                        <span className="gallery-location">تهران</span>
                        <p className="text-justify">{t("lorem.lorem_ipsum")}</p>
                        <button className="btn btn-galleryfollow">
                            <img src={circleplus1} height="17" width="17" alt="" />
                            <span>{t("artwork.follow")}</span>
                        </button>
                    </div>

                    <div class="page-intro gallery-page">
                        <div class="default-tab tab-1 tab-interval">
                            <div class="tab-overflow">
                                <div class="inner-tab">
                                    <ul className="nav d-block ">
                                        <Tabs className="antd-tabnav" defaultActiveKey="1" onChange={callback}>
                                            <TabPane className="mx-5 antd-tabnav" tab={t("artist_profile.introduction")} key="1">
                                                <Introduction />
                                            </TabPane>
                                            <TabPane tab={t("drawer-panel.nav-exhibitions")} key="2">
                                                <Exhibition />
                                            </TabPane>
                                            <TabPane tab={t("nav-menu-artworks")} key="3">
                                                <Artworks />
                                            </TabPane>
                                            <TabPane tab={t("artist_profile.artists")} key="4">
                                                <Artist />
                                            </TabPane>
                                            <TabPane tab={t("Journal")} key="5">
                                                <Journal />
                                            </TabPane>
                                            <TabPane tab={t("gallery-panel-edit-gallery-info.contact_info")} key="6">
                                                <GalleryContact />
                                            </TabPane>


                                        </Tabs>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}
export default GalleryIntroduction
