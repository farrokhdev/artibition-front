import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import { Tabs } from 'antd';
import { t } from 'i18next';
import FAQPartOne from './FAQPartOne';
import FAQPartTwo from './FAQPartTwo';

export default function FAQ() {

    const { TabPane } = Tabs;
    const [activeTabe, setactiveTabe] = useState("1");

    const callBack = (key) => {
        console.log(key)
        setactiveTabe(key)
    }

    return (
        <>
            <div className="container">
                <Header />
                <Menu />
                <div class="container">
                    <div class="banner">
                        <div class="content-banner">
                            <h2 class="content-title">{t("FAQ")}</h2>
                            <div class="nl-input">
                                <input placeholder={t("filter-header.placeholder-input-search")} />
                                <button type="button" class="btn-black">{t("artworkList.box-banner.btn")}</button>
                            </div>
                        </div>
                    </div>
                    <div class="default-content">
                        <div class="inner-vertical-tab">
                            <div class="row dir">
                                {/* <div class="col-md-2 col-sm-3">
                                    <ul class="nav nav-tabs text-dir">
                                        <li class=""><a data-toggle="tab" href="#faq1">{t("all_faq")}</a></li>
                                        <li><a data-toggle="tab" href="#faq2">{t("artist_profile.artists")}</a></li>
                                        <li><a data-toggle="tab" href="#faq3">{t("artist_profile.collection")}</a></li>
                                        <li><a data-toggle="tab" href="#faq4">{t("artist_profile.buyers")}</a></li>
                                    </ul>
                                </div> */}
                                <div className="col-md-3 col-sm-3">
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



                                <div class="col-md-7 col-sm-9">
                                    <div class="tab-content text-dir">
                                        {activeTabe === "1" && <FAQPartOne />}
                                        {activeTabe === "2" && <FAQPartTwo />}
                                        {activeTabe === "3" &&
                                            <div id="faq3" class="tab-pane fade  in active">
                                                <h3>Menu 2</h3>
                                                <p>Some content in menu 2.</p>
                                            </div>
                                        }
                                        {activeTabe === "4" &&
                                            <div id="faq4" class="tab-pane fade  in active">
                                                <h3>Menu 2</h3>
                                                <p>Some content in menu 2.</p>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
