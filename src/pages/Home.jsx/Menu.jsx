import React from 'react';
import hyxvpfinm840 from '../../assets/img/mainpage/hyxvpfinm840.jpg';
import vitrin from '../../assets/img/mainpage/menu-vitrin.jpg';
import bohmer from '../../assets/img/mainpage/rene-bohmer-YeUVDKZWSZ4-unsplash@3x.jpg';
import gift from '../../assets/img/gift.svg';
import search from '../../assets/img/search.svg';
import shopping_basket from '../../assets/img/shopping_basket.svg';

export default function Menu() {
    return (
        <div className="menu">
        <div className="row">
        <div className="col-md-1 "></div>
        <div className="col-md-10 col-sm-11 col-xs-12 w-100">
            <nav className="navbar">
                <div className="collapse navbar-collapse" id="menu">
                    <button className="nav-close" type="button"></button>
                    {/* <ul className="nav navbar-nav"> */}
                    <ul className="nav ">
                        
                        <li className="dropdown mega-dropdown ">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">آثار هنری</a>
                            <div className="dropdown-menu mega-dropdown-menu vertical-tabs bg-dropdown-menu">
                                <div className="row ">
                                    <div className="col-sm-3">
                                        <ul className="nav nav-tabs">
                                            <li className="active"><a data-toggle="tab" href="#nav1">رشته هنری</a></li>
                                            <li><a data-toggle="tab" href="#nav2">موضوع</a></li>
                                            <li><a data-toggle="tab" href="#nav3">مناسب بودجه شما</a></li>
                                            <li><a data-toggle="tab" href="#nav4">تخفیف‌ها</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="tab-content">
                                            <div id="nav1" className="tab-pane fade in active">
                                                <div className="row">
                                                    <div className="col-md-7 col-sm-6">
                                                        <ul className="vertical-nav">
                                                            <li><a href="#">همه آثار</a></li>
                                                            <li><a href="#">نقاشی</a></li>
                                                            <li><a href="#">خوشنویسی</a></li>
                                                            <li><a href="#">عکاسی</a></li>
                                                            <li><a href="#">مجسمه</a></li>
                                                            <li><a href="#">نقاشی خط</a></li>
                                                            <li><a href="#">گرافیک</a></li>
                                                            <li><a href="#">چاپ دستی</a></li>
                                                            <li><a href="#">کاریکاتور</a></li>
                                                            <li><a href="#">طراحی</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-5 col-sm-6">
                                                        <img src={hyxvpfinm840} width="840"
                                                             height="840" alt="" className="img-responsive w-100"/>
                                                        <button type="button" className="btn-gift">
                                                            <img src={gift} width="22" height="22" alt=""
                                                                 className=""/>
                                                            <span>هنر برای هدیه</span>
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
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">تالار</a>
                            <div className="dropdown-menu mega-dropdown-menu vertical-tabs bg-dropdown-menu">
                                <div className="row ">
                                    <div className="col-sm-3">
                                        <ul className="nav nav-tabs">
                                            <li className="active"><a data-toggle="tab" href="#nav11">هنرمندان</a></li>
                                            <li><a data-toggle="tab" href="#nav12">گالری‌ها</a></li>
                                            <li><a data-toggle="tab" href="#nav13">رویدادها</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="tab-content">
                                            <div id="nav11" className="tab-pane fade in active">
                                                <div className="row">
                                                    <div className="col-md-7 col-sm-6">
                                                        <ul className="vertical-nav">
                                                            <li><a href="#">همه هنرمندان</a></li>
                                                            <li><a href="#">نقاش</a></li>
                                                            <li><a href="#">خوشنویس</a></li>
                                                            <li><a href="#">عکاس</a></li>
                                                            <li><a href="#">مجسمه ساز</a></li>
                                                            <li><a href="#">نقاش خط</a></li>
                                                            <li><a href="#">گرافیست</a></li>
                                                            <li><a href="#">چاپ دستی</a></li>
                                                            <li><a href="#">کاریکاتوریست</a></li>
                                                            <li><a href="#">طراح</a></li>
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
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">نمایشگاه‌های مجازی</a>
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
                        <li>
                            <a href="#">بلاگ</a>
                        </li>
                        <li>
                            <a href="#" className="sales">مشاوره خرید</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
        <div className="col-md-1  show-xs">
            <a href="#" className="btn-show-xs btn-shoppingcard pull-left">
                <img src={shopping_basket} width="24" height="24" alt=""/>
            </a>
            <a href="#" className="btn-show-xs pull-left visible-xs search-xs">
                <img src={search} width="24" height="24" alt=""/>
            </a>
        </div>
        <div className="input-xs">
            <input type="text" className="form-control" id="search-xs"
                   placeholder="جستجوی نام اثر، نام هنرمند، گالری و غیره"
                   name="search" autocomplete="off"/>
            <div className="autocomplete" id="autocomplete-xs">
                <ul className="predict">
                    <li><a href="#">پرویز تناولی</a></li>
                    <li><a href="#">پرویز اعتصامی</a></li>
                    <li><a href="#">پرتو فرومنش</a></li>
                    <li><a href="#">پروین اعتصامی</a></li>
                    <li><a href="#">پرتره</a></li>
                    <li><a href="#">گالری هان - نمایشگاه عکاسی پرندگان</a></li>
                    <li><a href="#">گالری آرتیبیشن - نمایشگاه نقاشی آبرنگ پرتره</a></li>
                </ul>
                <div className="predict-cat">
                    {/* <span className="graycolor">فیلتر نتایج بر اساس:</span> */}
                    <ul>
                        <li><a href="#">هنرمند</a></li>
                        <li><a href="#">نام اثر</a></li>
                        <li><a href="#">نمایشگاه</a></li>
                        <li><a href="#">گالری</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}
