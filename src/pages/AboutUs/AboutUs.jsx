import React, { useState } from 'react'
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import { Tabs } from "antd";
import aboutus from "../../assets/img/mainpage/aboutus.jpg"
import user from '../../assets/img/user.jpg'
import gallery2 from '../../assets/img/gallery/2.jpg'
import Slider from "react-slick";
import Footer from '../../components/Footer/Footer';
import AboutUsDetails from './AboutUsDetails';

const { TabPane } = Tabs;


function AboutUs() {

    const [activeTabe, setactiveTabe] = useState("1");

    const callBack = (key) => {
        console.log(key)
        setactiveTabe(key)
    }
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
                <Header />
                <Menu />

                <div className="container  mx-auto px-0 w-100">
                    <div className=" about-page default-content">
                        <div className="inner-vertical-tab">
                            <div className="row">
                                <div className=" col-md-3 col-lg-3">
                                    <div className="tab-overflow">


                                        <Tabs className="nav nav-tabs" activeKey={activeTabe} id="content-page" tabPosition="left" onChange={callBack}>
                                            <TabPane tab="درباره ما" key="1">

                                            </TabPane>
                                            <TabPane tab="توافق نامه کاربری آرتیبیشن" key="2">

                                            </TabPane>
                                            <TabPane tab="حریم خصوصی" key="3">

                                            </TabPane>
                                            <TabPane tab="کپی رایت" key="4">

                                            </TabPane>
                                            <TabPane tab="سوالات متداول" key="5">

                                            </TabPane>
                                        </Tabs>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-9 col-lg-9">
                                    {activeTabe === "1" && <AboutUsDetails />}
                                    {activeTabe === "2" &&
                                        <div id="about3" className="tab-pane fade in active">
                                            توافق نامه کاربری آرتیبیشن
                                        </div>
                                    }
                                    {activeTabe === "3" &&
                                        <div id="about3" className="tab-pane fade in active">
                                            حریم خصوصی
                                        </div>
                                    }
                                    {activeTabe === "4" &&
                                        <div id="about4" className="tab-pane fade in active">
                                            کپی رایت
                                        </div>
                                    }
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
export default AboutUs;