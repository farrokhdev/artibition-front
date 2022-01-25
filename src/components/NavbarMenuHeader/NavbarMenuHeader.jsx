import React from 'react'
import hyxvpfinm840 from '../../assets/img/mainpage/hyxvpfinm840.jpg';
import vitrin from '../../assets/img/mainpage/menu-vitrin.jpg';
import bohmer from '../../assets/img/mainpage/rene-bohmer-YeUVDKZWSZ4-unsplash@3x.jpg';
import gift from '../../assets/img/gift.svg';
import { t } from 'i18next';
import { Tabs, Radio, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const { TabPane } = Tabs;
export default function NavbarMenuHeader(props) {

    let navigate = useNavigate();


    return (

        <nav className="navbar w-100 margin-dir">
        <div className=" collapse navbar-collapse  px-0 w-100" id="menu">
            <button className="nav-close" type="button"></button>
            <ul className=" nav nav-header-menu box-dir-reverse">
                
 

            <li className="dropdown mega-dropdown ">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">{t("nav-menu-artworks")}</a>
                    <div className="dropdown-menu mega-dropdown-menu vertical-tabs bg-dropdown-menu">
                        <div className="row ">
                            <div className="col-sm-3">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a data-toggle="tab" href="#nav1">{t("nav-submenu.artworks.artField.title")}</a></li>
                                    <li><a data-toggle="tab" href="#nav2">{t("nav-submenu.artworks.subject.title")}</a></li>
                                    <li><a data-toggle="tab" href="#nav3">{t("nav-submenu.artworks.budget.title")}</a></li>
                                    <li><a data-toggle="tab" href="#nav4">{t("nav-submenu.artworks.discounts.title")}</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-9">
                                <div className="tab-content">
                                    <div id="nav1" className="tab-pane fade in active">
                                        <div className="row">
                                            <div className="col-md-7 col-sm-6">
                                                <ul className="vertical-nav">
                                                    <li onClick={() => navigate('/site/artworks')}><a href="#">{t("nav-submenu.artworks.artField.all")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.artworks.artField.painting")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.artworks.artField.calligraphy")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.artworks.artField.photography")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.artworks.artField.sculpture")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.artworks.artField.calligram")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.artworks.artField.graphic")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.artworks.artField.printmaking")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.artworks.artField.drawing")}</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-5 col-sm-6">
                                                <img src={hyxvpfinm840} width="840"
                                                     height="840" alt="" className="img-responsive w-100"/>
                                                <button type="button" className="btn-gift">
                                                    <img src={gift} width="22" height="22" alt=""
                                                         className=""/>
                                                    <span>{t("nav-submenu.artworks.artField.art-for-gift")}</span>
                                                    <i className="glyphicon glyphicon-chevron-left"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div id="nav2" className="tab-pane fade">
                                        <h3>Menu 1</h3>
                                        <p>Some content in menu 1.</p>
                                    </div>
                                    <div id="nav3" className="tab-pane fade">
                                        <h3>Menu 2</h3>
                                        <p>Some content in menu 2.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="dropdown mega-dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">{t("nav-menu-showroom")}</a>
                    <div className="dropdown-menu mega-dropdown-menu vertical-tabs bg-dropdown-menu">
                        <div className="row ">
                            <div className="col-sm-3">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a data-toggle="tab" href="#nav11">{t("category")}</a></li>
                                    <li onClick={() => navigate('/site/all-galleris-list')}><a data-toggle="tab" href="#nav12">{t("galleries")}</a></li>
                                    <li><a data-toggle="tab" href="#nav13">{t("events")}</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-9">
                                <div className="tab-content">
                                    <div id="nav11" className="tab-pane fade in active">
                                        <div className="row">
                                            <div className="col-md-7 col-sm-6">
                                                <ul className="vertical-nav">
                                                    <li><a href="#">{t("nav-submenu.showroom.category.all")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.showroom.category.painter")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.showroom.category.calligrapher")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.showroom.category.photographer")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.showroom.category.sculptor")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.showroom.category.calligramer")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.showroom.category.graphist")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.showroom.category.printmaker")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.showroom.category.cartoonist")}</a></li>
                                                    <li><a href="#">{t("nav-submenu.showroom.category.sketcher")}</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-5 col-sm-6">
                                                <img src={vitrin} width="831"
                                                     height="963" alt="" className="img-responsive"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="nav12" className="tab-pane fade">
                                        <h3>Menu 1</h3>
                                        <p>Some content in menu 1.</p>
                                    </div>
                                    <div id="nav13" className="tab-pane fade">
                                        <h3>Menu 2</h3>
                                        <p>Some content in menu 2.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="dropdown mega-dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">{t("nav-menu-online-exhibition")}</a>
                    <div className="dropdown-menu mega-dropdown-menu bg-dropdown-menu">
                        <div className="owl-carousel" id="menu-exhibition">
                            <div>
                                <a href="#" className="cols">
                                    <div className="col-img">
                                        <div className="tags tags-events">مجازی</div>
                                        <img src={bohmer}
                                             width="840"
                                             height="840"
                                             alt="آرتیبیشن"
                                             className="img-responsive"/>
                                    </div>
                                    <div className="col-body">
                                        <div className="finished-tag">پایان یافته</div>
                                        <h6 className="col-title">
                                            <span className="col-name">نمایشگاه مجازی هنر نورانی نئون</span>
                                        </h6>
                                        <div className="col-dimension">
                                            <span className="col-dimension-title">گالری آرتیبیشن</span>
                                        </div>
                                        <div className="coundown">
                                            <div className="timers" data-newdate="August 10, 2021 12:00 PDT">
                                                <span className="end">تا پایان</span>
                                                <div className="days"></div>
                                                <div className="hours"></div>
                                                <div className="minutes"></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="#" className="cols">
                                    <div className="col-img">
                                        <div className="tags tags-events">مجازی</div>
                                        <img src={bohmer}
                                             width="840"
                                             height="840"
                                             alt="آرتیبیشن"
                                             className="img-responsive"/>
                                    </div>
                                    <div className="col-body">
                                        <div className="finished-tag">پایان یافته</div>
                                        <h6 className="col-title">
                                            <span className="col-name">نمایشگاه مجازی هنر نورانی نئون</span>
                                        </h6>
                                        <div className="col-dimension">
                                            <span className="col-dimension-title">گالری آرتیبیشن</span>
                                        </div>
                                        <div className="coundown">
                                            <div className="timers" data-newdate="August 10, 2021 12:00 PDT">
                                                <span className="end">تا پایان</span>
                                                <div className="days"></div>
                                                <div className="hours"></div>
                                                <div className="minutes"></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="#" className="cols">
                                    <div className="col-img">
                                        <div className="tags tags-events">مجازی</div>
                                        <img src={bohmer}
                                             width="840"
                                             height="840"
                                             alt="آرتیبیشن"
                                             className="img-responsive"/>
                                    </div>
                                    <div className="col-body">
                                        <div className="finished-tag">پایان یافته</div>
                                        <h6 className="col-title">
                                            <span className="col-name">نمایشگاه مجازی هنر نورانی نئون</span>
                                        </h6>
                                        <div className="col-dimension">
                                            <span className="col-dimension-title">گالری آرتیبیشن</span>
                                        </div>
                                        <div className="coundown">
                                            <div className="timers" data-newdate="August 10, 2021 12:00 PDT">
                                                <span className="end">تا پایان</span>
                                                <div className="days"></div>
                                                <div className="hours"></div>
                                                <div className="minutes"></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="#" className="cols">
                                    <div className="col-img">
                                        <div className="tags tags-events">مجازی</div>
                                        <img src={bohmer}
                                             width="840"
                                             height="840"
                                             alt="آرتیبیشن"
                                             className="img-responsive"/>
                                    </div>
                                    <div className="col-body">
                                        <div className="finished-tag">پایان یافته</div>
                                        <h6 className="col-title">
                                            <span className="col-name">نمایشگاه مجازی هنر نورانی نئون</span>
                                        </h6>
                                        <div className="col-dimension">
                                            <span className="col-dimension-title">گالری آرتیبیشن</span>
                                        </div>
                                        <div className="coundown">
                                            <div className="timers" data-newdate="August 10, 2021 12:00 PDT">
                                                <span className="end">تا پایان</span>
                                                <div className="days"></div>
                                                <div className="hours"></div>
                                                <div className="minutes"></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
           
              
                <li className="dropdown mega-dropdown">
                    <a className='dropdown-toggle' href="#">{t("nav-menu-blog")}</a>
                </li>
                <li className="dropdown mega-dropdown">
                    <a href="#" className="dropdown-toggle sales">{t('nav-menu-sales-advisor')}</a>
                </li>
            
             
            </ul>
        </div>

    </nav>
    )
}
