import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import HanLogo from '../../assets/img/gallery/hanlogo.jpg';
import circleplus1 from '../../assets/img/circle-plus-1.png';
import { Breadcrumb, message, Tabs } from 'antd';
import { t } from 'i18next';
import Introduction from './Introduction';
import Footer from '../../components/Footer/Footer';
import Exhibition from './Exhibition';
import Artworks from './Artworks';
import Artist from './Artist';
import Journal from './Journal';
import GalleryContact from './GalleryContact';
import { useTranslation } from 'react-i18next';
import { GALLERY, GALLERY_EXHIBITION } from '../../utils';
import apiServices from '../../utils/api.services';
import QueryString from 'qs';
import { useLocation } from 'react-router-dom';
import { follow } from '../../utils/utils';


function GalleryIntroduction() {
    const { TabPane } = Tabs;
    const { t, i18n } = useTranslation();
    const [galleryIntroduction, setGalleryIntroduction] = useState();
    const [galleryExhibition, setGalleryExhibition] = useState();
    const [params, setParams] = useState({
        search: "",
        page: 1,
        
    })
    
    function useQuery() {
        
        return new URLSearchParams(useLocation().search);
        
    }
    var id;

    var query = useQuery();

    id = query.get("id")

    function callback(key) {
        console.log(key);
    }
    const getGalleryIntroduction = () => {
        apiServices.get(GALLERY(id), QueryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setGalleryIntroduction(res.data.data)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    const getGalleryExhibition = () => {
        apiServices.get(GALLERY_EXHIBITION(id), QueryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setGalleryExhibition(res.data.data)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }
    useEffect(() => {
        getGalleryIntroduction()
        getGalleryExhibition()
    }, [params]);

    console.log("id",galleryIntroduction)
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
                    <div >
                        <img src={galleryIntroduction?.cover?.exact_url} className="align-items-center d-flex gallery-cover justify-content-center w-100" />
                    </div>
                    <div className="gallery-info">
                        <div className="gallery-logo">
                            <img src={galleryIntroduction?.logo?.exact_url} width="110" height="110" alt="هان گالری" className="img-responsive" />
                        </div>
                        {i18n.language === 'fa-IR' ?
                        <>
                        <h2 className="gallery-name">{galleryIntroduction?.translations?.fa?.title}</h2>
                        <span className="gallery-location">{galleryIntroduction?.locations[0]?.translations?.fa?.city}</span>
                        <p className="text-justify">{galleryIntroduction?.translations?.fa?.description}</p>
                        </>
                        :
                        <>
                        <h2 className="gallery-name">{galleryIntroduction?.translations?.en?.title}</h2>
                        <span className="gallery-location">{galleryIntroduction?.locations[0]?.translations?.en?.city}</span>
                        <p className="text-justify">{galleryIntroduction?.translations?.en?.description}</p>
                        </>
    }
                        <button className="btn btn-galleryfollow" onClick={() => follow({activity:'following',content:'gallery',object_id:id})}>
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
                                                <Introduction id={id} galleryIntroduction={galleryIntroduction} galleryExhibition={galleryExhibition}/>
                                            </TabPane>
                                            <TabPane tab={t("drawer-panel.nav-exhibitions")} key="2">
                                                <Exhibition id={id} galleryExhibition={galleryExhibition}/>
                                            </TabPane>
                                            <TabPane tab={t("nav-menu-artworks")} key="3">
                                                <Artworks id={id}/>
                                            </TabPane>
                                            <TabPane tab={t("artist_profile.artists")} key="4">
                                                <Artist id={id} />
                                            </TabPane>
                                            <TabPane tab={t("Journal")} key="5">
                                                <Journal id={id}/>
                                            </TabPane>
                                            <TabPane tab={t("gallery-panel-edit-gallery-info.contact_info")} key="6">
                                                <GalleryContact galleryIntroduction={galleryIntroduction}/>
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
