import React, {useEffect, useState} from 'react'
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import {Tabs} from "antd";
import aboutus from "../../assets/img/mainpage/aboutus.jpg"
import user from '../../assets/img/user.jpg'
import gallery2 from '../../assets/img/gallery/2.jpg'
import Slider from "react-slick";
import Footer from '../../components/Footer/Footer';
import AboutUsDetails from './AboutUsDetails';
import apiServices from "../../utils/api.services";
import {CONTENT_DETAIL, PRODUCTS_CATEGORIES} from "../../utils";
import queryString from "query-string";
import {useTranslation} from "react-i18next";

const {TabPane} = Tabs;


function AboutUs() {
    const {t, i18n} = useTranslation();
    const [activeTabe, setactiveTabe] = useState("1");
    const [data, setData] = useState([]);
    const [slug, setSlug] = useState('about-us');

    const callBack = (key) => {
        setSlug(key)
        setactiveTabe(key)
    }

    const getContent = (slug) => {
        apiServices
            .get(CONTENT_DETAIL(slug), "")
            .then((res) => {
                if (res.data) {
                    setData(res.data.data);
                }
            })
            .catch((err) => {
                console.log("err", err);
            });
    }

    useEffect(() => {
        getContent(slug)
    }, [slug])

    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        rtl: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="container mx-auto px-0 w-100 overflow-hidden">
                <Header/>
                <Menu/>

                <div className="container  mx-auto px-0 w-100">
                    <div className=" about-page default-content">
                        <div className="inner-vertical-tab">
                            <div className="row">
                                <div className=" col-md-3 col-lg-3">
                                    <div className="tab-overflow">


                                        <Tabs className="nav nav-tabs" activeKey={activeTabe} id="content-page"
                                              tabPosition="left" onChange={callBack}>
                                            <TabPane tab="درباره ما" key="about-us" />
                                            <TabPane tab="توافق نامه کاربری آرتیبیشن" key="agreement" />
                                            <TabPane tab="حریم خصوصی" key="privacy" />
                                            <TabPane tab="کپی رایت" key="copy-right" />
                                        </Tabs>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-9 col-lg-9">
                                    <div className="tab-pane fade in"
                                         dangerouslySetInnerHTML=
                                             {i18n.language === "fa-IR" ?
                                                 {__html: data?.translations?.fa?.content} :
                                                 {__html: data?.translations?.en?.content}
                                             }
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AboutUs;