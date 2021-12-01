import React from 'react';
import Header from '../../components/Header/Header';
import hyxvpfinm840 from '../../assets/img/mainpage/hyxvpfinm840.jpg';
import vitrin from '../../assets/img/mainpage/menu-vitrin.jpg'
import bohmer from '../../assets/img/mainpage/rene-bohmer-YeUVDKZWSZ4-unsplash@3x.jpg'
import slider1 from '../../assets/img/mainpage/slider-1.jpg'
import slider2 from '../../assets/img/mainpage/slider-2.jpg'
import previousIcon from '../../assets/img/previous.svg'
import nextIcon from '../../assets/img/next.svg'
import hnrpqkfiup from '../../assets/img/mainpage/hnrpqkfiup@3x.jpg'
import mainpage from '../../assets/img/mainpage/2.jpg'

function Home() {
    return (
        <div className="container">
           <Header/>

        <div class="menu">
        <div class="row">
            <div class="col-md-1 "></div>
            <div class="col-md-10 col-sm-11 col-xs-12">
                <nav class="navbar">
                    <div class="collapse navbar-collapse" id="menu">
                        <button class="nav-close" type="button"></button>
                        {/* <ul class="nav navbar-nav"> */}
                        <ul class="nav ">
                            
                            <li class="dropdown mega-dropdown ">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">آثار هنری</a>
                                <div class="dropdown-menu mega-dropdown-menu vertical-tabs bg-dropdown-menu">
                                    <div class="row ">
                                        <div class="col-sm-3">
                                            <ul class="nav nav-tabs">
                                                <li class="active"><a data-toggle="tab" href="#nav1">رشته هنری</a></li>
                                                <li><a data-toggle="tab" href="#nav2">موضوع</a></li>
                                                <li><a data-toggle="tab" href="#nav3">مناسب بودجه شما</a></li>
                                                <li><a data-toggle="tab" href="#nav4">تخفیف‌ها</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm-9">
                                            <div class="tab-content">
                                                <div id="nav1" class="tab-pane fade in active">
                                                    <div class="row">
                                                        <div class="col-md-7 col-sm-6">
                                                            <ul class="vertical-nav">
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
                                                        <div class="col-md-5 col-sm-6">
                                                            <img src={hyxvpfinm840} width="840"
                                                                 height="840" alt="" class="img-responsive w-100"/>
                                                            <button type="button" class="btn-gift">
                                                                <img src="img/gift.svg" width="22" height="22" alt=""
                                                                     class=""/>
                                                                <span>هنر برای هدیه</span>
                                                                <i class="glyphicon glyphicon-chevron-left"></i>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div id="nav2" class="tab-pane fade">
                                                    <h3>Menu 1</h3>
                                                    <p>Some content in menu 1.</p>
                                                </div>
                                                <div id="nav3" class="tab-pane fade">
                                                    <h3>Menu 2</h3>
                                                    <p>Some content in menu 2.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="dropdown mega-dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">تالار</a>
                                <div class="dropdown-menu mega-dropdown-menu vertical-tabs bg-dropdown-menu">
                                    <div class="row ">
                                        <div class="col-sm-3">
                                            <ul class="nav nav-tabs">
                                                <li class="active"><a data-toggle="tab" href="#nav11">هنرمندان</a></li>
                                                <li><a data-toggle="tab" href="#nav12">گالری‌ها</a></li>
                                                <li><a data-toggle="tab" href="#nav13">رویدادها</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm-9">
                                            <div class="tab-content">
                                                <div id="nav11" class="tab-pane fade in active">
                                                    <div class="row">
                                                        <div class="col-md-7 col-sm-6">
                                                            <ul class="vertical-nav">
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
                                                        <div class="col-md-5 col-sm-6">
                                                            <img src={vitrin} width="831"
                                                                 height="963" alt="" class="img-responsive"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="nav12" class="tab-pane fade">
                                                    <h3>Menu 1</h3>
                                                    <p>Some content in menu 1.</p>
                                                </div>
                                                <div id="nav13" class="tab-pane fade">
                                                    <h3>Menu 2</h3>
                                                    <p>Some content in menu 2.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="dropdown mega-dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">نمایشگاه‌های مجازی</a>
                                <div class="dropdown-menu mega-dropdown-menu bg-dropdown-menu">
                                    <div class="owl-carousel" id="menu-exhibition">
                                        <div>
                                            <a href="#" class="cols">
                                                <div class="col-img">
                                                    <div class="tags tags-events">مجازی</div>
                                                    <img src={bohmer}
                                                         width="840"
                                                         height="840"
                                                         alt="آرتیبیشن"
                                                         class="img-responsive"/>
                                                </div>
                                                <div class="col-body">
                                                    <div class="finished-tag">پایان یافته</div>
                                                    <h6 class="col-title">
                                                        <span class="col-name">نمایشگاه مجازی هنر نورانی نئون</span>
                                                    </h6>
                                                    <div class="col-dimension">
                                                        <span class="col-dimension-title">گالری آرتیبیشن</span>
                                                    </div>
                                                    <div class="coundown">
                                                        <div class="timers" data-newdate="August 10, 2021 12:00 PDT">
                                                            <span class="end">تا پایان</span>
                                                            <div class="days"></div>
                                                            <div class="hours"></div>
                                                            <div class="minutes"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="#" class="cols">
                                                <div class="col-img">
                                                    <div class="tags tags-events">مجازی</div>
                                                    <img src={bohmer}
                                                         width="840"
                                                         height="840"
                                                         alt="آرتیبیشن"
                                                         class="img-responsive"/>
                                                </div>
                                                <div class="col-body">
                                                    <div class="finished-tag">پایان یافته</div>
                                                    <h6 class="col-title">
                                                        <span class="col-name">نمایشگاه مجازی هنر نورانی نئون</span>
                                                    </h6>
                                                    <div class="col-dimension">
                                                        <span class="col-dimension-title">گالری آرتیبیشن</span>
                                                    </div>
                                                    <div class="coundown">
                                                        <div class="timers" data-newdate="August 10, 2021 12:00 PDT">
                                                            <span class="end">تا پایان</span>
                                                            <div class="days"></div>
                                                            <div class="hours"></div>
                                                            <div class="minutes"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="#" class="cols">
                                                <div class="col-img">
                                                    <div class="tags tags-events">مجازی</div>
                                                    <img src={bohmer}
                                                         width="840"
                                                         height="840"
                                                         alt="آرتیبیشن"
                                                         class="img-responsive"/>
                                                </div>
                                                <div class="col-body">
                                                    <div class="finished-tag">پایان یافته</div>
                                                    <h6 class="col-title">
                                                        <span class="col-name">نمایشگاه مجازی هنر نورانی نئون</span>
                                                    </h6>
                                                    <div class="col-dimension">
                                                        <span class="col-dimension-title">گالری آرتیبیشن</span>
                                                    </div>
                                                    <div class="coundown">
                                                        <div class="timers" data-newdate="August 10, 2021 12:00 PDT">
                                                            <span class="end">تا پایان</span>
                                                            <div class="days"></div>
                                                            <div class="hours"></div>
                                                            <div class="minutes"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="#" class="cols">
                                                <div class="col-img">
                                                    <div class="tags tags-events">مجازی</div>
                                                    <img src={bohmer}
                                                         width="840"
                                                         height="840"
                                                         alt="آرتیبیشن"
                                                         class="img-responsive"/>
                                                </div>
                                                <div class="col-body">
                                                    <div class="finished-tag">پایان یافته</div>
                                                    <h6 class="col-title">
                                                        <span class="col-name">نمایشگاه مجازی هنر نورانی نئون</span>
                                                    </h6>
                                                    <div class="col-dimension">
                                                        <span class="col-dimension-title">گالری آرتیبیشن</span>
                                                    </div>
                                                    <div class="coundown">
                                                        <div class="timers" data-newdate="August 10, 2021 12:00 PDT">
                                                            <span class="end">تا پایان</span>
                                                            <div class="days"></div>
                                                            <div class="hours"></div>
                                                            <div class="minutes"></div>
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
                                <a href="#" class="sales">مشاوره خرید</a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
            <div class="col-md-1 col-sm-1 show-xs">
                <a href="#" class="btn-show-xs btn-shoppingcard pull-left">
                    <img src="img/shopping_basket.svg" width="24" height="24" alt=""/>
                </a>
                <a href="#" class="btn-show-xs pull-left visible-xs search-xs">
                    <img src="img/search.svg" width="24" height="24" alt=""/>
                </a>
            </div>
            <div class="input-xs">
                <input type="text" class="form-control" id="search-xs"
                       placeholder="جستجوی نام اثر، نام هنرمند، گالری و غیره"
                       name="search" autocomplete="off"/>
                <div class="autocomplete" id="autocomplete-xs">
                    <ul class="predict">
                        <li><a href="#">پرویز تناولی</a></li>
                        <li><a href="#">پرویز اعتصامی</a></li>
                        <li><a href="#">پرتو فرومنش</a></li>
                        <li><a href="#">پروین اعتصامی</a></li>
                        <li><a href="#">پرتره</a></li>
                        <li><a href="#">گالری هان - نمایشگاه عکاسی پرندگان</a></li>
                        <li><a href="#">گالری آرتیبیشن - نمایشگاه نقاشی آبرنگ پرتره</a></li>
                    </ul>
                    <div class="predict-cat">
                        {/* <span class="graycolor">فیلتر نتایج بر اساس:</span> */}
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



    <div class="slider">
        <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
            <div class="carousel-inner">
                <div class="item active">
                    <img src={slider1} width="3648" height="1200" alt="آرتیبیشن"/>
                    <div class="carousel-txt">
                        <div class="coundown">
                            <h6 class="countdown-title hidden-sm hidden-xs">مهلت ارسال آثار:</h6>
                            <div class="timers" data-newdate="september 16, 2020 12:00 PDT">
                                <div class="days"></div>
                                <div class="hours"></div>
                                <div class="minutes"></div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <button type="button" class="btn btn-default">مشاهده جزئیات</button>
                    </div>
                </div>
                <div class="item">
                    <img src={slider2} height="1200" width="3648" alt="آرتیبیشن"/>
                </div>
            </div>
            <a class="left carousel-control hidden-xs" href="#myCarousel" data-slide="prev">
                <img src={previousIcon} width="58" height="58" alt=""/>
            </a>
            <a class="right carousel-control hidden-xs" href="#myCarousel" data-slide="next">
                <img src={nextIcon} width="58" height="58" alt=""/>
            </a>
        </div>
    </div>



    <div class="allproducts">
        <div class="row">
            <div class="public-header">
                <div class="col-xs-8 visible-sm visible-xs">
                    <h2 class="default-title">آثار</h2>
                </div>
                <a href="#" class="btn-readmore pull-left">مشاهده همه</a>
            </div>
            <div class="clearfix"></div>
            <div class="col-sm-12">
                <div class="default-tab tab-1 tab-interval">
                    <div class="tab-overflow">
                        <ul class="nav nav-tabs alltab-1" id="alltab-1">
                            <li class="active"><a data-toggle="tab" href="#home">همه آثار</a></li>
                            <li><a data-toggle="tab" href="#menu1">نقاشی</a></li>
                            <li><a data-toggle="tab" href="#menu2">عکاسی</a></li>
                            <li><a data-toggle="tab" href="#menu3">مجسمه</a></li>
                            <li><a data-toggle="tab" href="#menu4">نقاشی خط</a></li>
                            <li><a data-toggle="tab" href="#menu5">خوشنویسی</a></li>
                            <li><a data-toggle="tab" href="#menu6">چاپ دستی</a></li>
                            <li><a data-toggle="tab" href="#menu7">گرافیک</a></li>
                            <li><a data-toggle="tab" href="#menu8">طراحی</a></li>
                        </ul>
                    </div>
                    <div class="tab-content">
                        <div id="home" class="tab-pane fade in active">

                            <div class="owl-carousel d-flex" id="tab1">


                                <a href="#" class="cols  mx-4">
                                    <div class="col-img">
                                        <img  
                                            style={{width : '280px' , height : '280px'}}
                                            src={hnrpqkfiup} 
                                             alt="آرتیبیشن"
                                             class="img-responsive"/>
                                        <div class="tab-overly">
                                            <span class="btn-see hidden-xs hidden-sm">
                                                <span class="view-icon pull-right"></span>
                                                <span>مشاهده اثر</span>
                                            </span>
                                            <button type="button" class="btn-sale">
                                                <span class="hidden-xs hidden-sm">درخواست خرید</span>
                                                <span class="shopping-cart-xs visible-xs visible-sm"></span>
                                            </button>
                                            <button type="button" class="like-icon isLike"></button>
                                        </div>
                                    </div>
                                    <div class="col-body">
                                        <h6 class="col-title">
                                            <span class="col-name">رضا</span>
                                            <span class="col-name">حسینی</span>
                                        </h6>
                                        <div class="col-dimension">
                                            <span class="col-dimension-title">ابعاد:</span>
                                            <span class="col-dimension-body">
                                        <span class="dimension-width">60</span>
                                        <span> در </span>
                                        <span class="dimension-height">60</span>
                                    </span>
                                        </div>
                                        <div class="col-price">
                                            <span class="col-price-num">22.000.000</span>
                                            <span class="col-price-unit">تومان</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="cols mx-4">
                                    <div class="col-img">
                                        <img 
                                            src={mainpage}
                                            style={{width : '280px' , height : '280px'}}
                                            
                                             alt="آرتیبیشن"
                                             class="img-responsive"/>
                                        <div class="tab-overly">
                                            <span class="btn-see hidden-xs hidden-sm">
                                                <span class="view-icon pull-right"></span>
                                                <span>مشاهده اثر</span>
                                            </span>
                                            <button type="button" class="btn-sale">
                                                <span class="hidden-xs hidden-sm">درخواست خرید</span>
                                                <span class="shopping-cart-xs visible-xs visible-sm"></span>
                                            </button>
                                            <button type="button" class="like-icon isLike"></button>
                                        </div>
                                    </div>
                                    <div class="col-body">
                                        <h6 class="col-title">
                                            <span class="col-name">رضا</span>
                                            <span class="col-name">حسینی</span>
                                        </h6>
                                        <div class="col-dimension">
                                            <span class="col-dimension-title">ابعاد:</span>
                                            <span class="col-dimension-body">
                                        <span class="dimension-width">60</span>
                                        <span> در </span>
                                        <span class="dimension-height">60</span>
                                    </span>
                                        </div>
                                        <div class="col-price">
                                            <span class="col-price-num">22.000.000</span>
                                            <span class="col-price-unit">تومان</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="cols mx-4">
                                    <div class="col-img">
                                        <img 
                                             src={mainpage}
                                             style={{width : '280px' , height : '280px'}}
                                             alt="آرتیبیشن"
                                             class="img-responsive"/>
                                        <div class="tab-overly">
                                            <span class="btn-see hidden-xs hidden-sm">
                                                <span class="view-icon pull-right"></span>
                                                <span>مشاهده اثر</span>
                                            </span>
                                            <button type="button" class="btn-sale">
                                                <span class="hidden-xs hidden-sm">درخواست خرید</span>
                                                <span class="shopping-cart-xs visible-xs visible-sm"></span>
                                            </button>
                                            <button type="button" class="like-icon isLike"></button>
                                        </div>
                                    </div>
                                    <div class="col-body">
                                        <h6 class="col-title">
                                            <span class="col-name">رضا</span>
                                            <span class="col-name">حسینی</span>
                                        </h6>
                                        <div class="col-dimension">
                                            <span class="col-dimension-title">ابعاد:</span>
                                            <span class="col-dimension-body">
                                        <span class="dimension-width">60</span>
                                        <span> در </span>
                                        <span class="dimension-height">60</span>
                                    </span>
                                        </div>
                                        <div class="col-price">
                                            <span class="col-price-num">22.000.000</span>
                                            <span class="col-price-unit">تومان</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" class="cols mx-4">
                                    <div class="col-img">
                                        <img 
                                             src={mainpage}
                                             style={{width : '280px' , height : '280px'}}
                                             alt="آرتیبیشن"
                                             class="img-responsive"/>
                                        <div class="tab-overly">
                                            <span class="btn-see hidden-xs hidden-sm">
                                                <span class="view-icon pull-right"></span>
                                                <span>مشاهده اثر</span>
                                            </span>
                                            <button type="button" class="btn-sale">
                                                <span class="hidden-xs hidden-sm">درخواست خرید</span>
                                                <span class="shopping-cart-xs visible-xs visible-sm"></span>
                                            </button>
                                            <button type="button" class="like-icon isLike"></button>
                                        </div>
                                    </div>
                                    <div class="col-body">
                                        <h6 class="col-title">
                                            <span class="col-name">رضا</span>
                                            <span class="col-name">حسینی</span>
                                        </h6>
                                        <div class="col-dimension">
                                            <span class="col-dimension-title">ابعاد:</span>
                                            <span class="col-dimension-body">
                                        <span class="dimension-width">60</span>
                                        <span> در </span>
                                        <span class="dimension-height">60</span>
                                    </span>
                                        </div>
                                        <div class="col-price">
                                            <span class="col-price-num">22.000.000</span>
                                            <span class="col-price-unit">تومان</span>
                                        </div>
                                    </div>
                                </a>


                                
                            </div>
                        </div>
                        <div id="menu1" class="tab-pane fade">
                            <h3>Menu 1</h3>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo
                                consequat.</p>
                        </div>
                        <div id="menu2" class="tab-pane fade">
                            <h3>Menu 2</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium,
                                totam rem aperiam.</p>
                        </div>
                        <div id="menu3" class="tab-pane fade">
                            <h3>Menu 3</h3>
                            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                explicabo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>




        </div>
    )
}

export default Home;
