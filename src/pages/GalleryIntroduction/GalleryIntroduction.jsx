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



function GalleryIntroduction() {

    const { TabPane } = Tabs;

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
                        <li><a href="#">آرتیبیشن</a></li>
                        <li><a href="#">هنرمندان</a></li>
                        <li><a href="#">گالری هان</a></li>
                        <li class="active">معرفی</li>
                    </ul>
                    <div className="gallery-cover"></div>
                    <div className="gallery-info">
                        <div className="gallery-logo">
                            <img src={HanLogo} width="110" height="110" alt="هان گالری" className="img-responsive" />
                        </div>
                        <h2 className="gallery-name">گالری هان</h2>
                        <span className="gallery-location">تهران</span>
                        <p className="text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                            با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
                            و متخصصان را می طلبد
                        </p>
                        <button className="btn btn-galleryfollow">
                            <img src={circleplus1} height="17" width="17" alt="" />
                            <span>دنبال کردن</span>
                        </button>
                    </div>

                    <div className="page-intro gallery-page">
                        <div className="default-tab tab-1 tab-interval">
                            <div className="tab-overflow">
                                <div className="inner-tab">
                                    <ul className="nav ">
                                        <Tabs defaultActiveKey="1" onChange={callback}>
                                            <TabPane className="mx-5" tab="معرفی" key="1">
                                                <Introduction />
                                            </TabPane>
                                            <TabPane tab="نمایشگاه‌ها" key="2">
                                                <Exhibition/>
                                            </TabPane>
                                            <TabPane tab="آثار" key="3">

                                            </TabPane>
                                            <TabPane tab="هنرمندان" key="4">

                                            </TabPane>
                                            <TabPane tab="مجله" key="5">

                                            </TabPane>
                                            <TabPane tab="اطلاعات تماس" key="6">

                                            </TabPane>

                                        </Tabs>
                                    </ul>
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
export default GalleryIntroduction
