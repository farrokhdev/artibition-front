import React from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import poster1 from '../../assets/img/artworks/poster1.jpg';
import poster2 from '../../assets/img/artworks/poster2.jpg';
import articles101 from '../../assets/img/articles/101.jpg'
import { t } from 'i18next';
import Footer from '../../components/Footer/Footer';


function GalleryContentPage() {
    return (
        <>
            <div className="container">
                <Header />
                <Menu />

                <div class="body-overly"></div>
                <div class="container">
                    <ul class="breadcrumb">
                        <li><a href="#">{t("artwork.artibition")}</a></li>
                        <li><a href="#">{t("artist_profile.artists")}</a></li>
                        <li><a href="#">{t("gallery-panel-my-gallery.my_gallery")}</a></li>
                        <li><a href="#">{t("Journal")}</a></li>
                        <li class="active">{t("Lorem_ipsum_Arthibition_gallery")}</li>
                    </ul>
                    <div class="row">
                        <div class="col-sm-8">
                            <div id="myCarousel" class="carousel slide content-carousel" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="item active">
                                        <img src={poster1} width="1200" height="675" alt="artibition"
                                            class="img-responsive" />
                                    </div>
                                    <div class="item">
                                        <img src={poster2} width="1200" height="675" alt="artibition"
                                            class="img-responsive" />
                                    </div>
                                </div>
                                <div class="row">
                                    <ol class="carousel-indicators ">
                                        <li data-target="#myCarousel" data-slide-to="0" class="col-sm-3 active">
                                            <img src={poster1} width="1200" height="675" alt="artibition"
                                                class="img-responsive" />
                                        </li>
                                        <li data-target="#myCarousel" data-slide-to="1" class="col-sm-3">
                                            <img src={poster2} width="1200" height="675" alt="artibition"
                                                class="img-responsive" />
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div class="content-txt">
                                <h2 class="fontbold28">{t("Lorem_ipsum_Arthibition_gallery")}</h2>
                                <div class="content-date">
                                    <span class="persian-num">22</span>
                                    <span>تیر</span>
                                    <span class="persian-num">99</span>
                                </div>
                                <p class="text-justify">
                                    31 مردادماه مجموعه‌ای از آثاری با سایز کوچک از نقاشی‌ها، طراحی‌ها و چاپ‌های دستی اساتید بنام و
                                    هنرمندان نوظهور و آینده‌دار در گالری آرتیبیشن به نمایش گذاشته می‌شود. این نمایشگاه در پی ایجاد علاقه
                                    به آثار هنری با اندازه‌های کوچک بوده که با هدف تعدیل اذهان و اعتقادات ناشی از انحصار بازار هنر در
                                    دست آثار هنری بزرگ و ارزشمندتر بودن آثار با سایز بزرگ به وجود آمد. این نمایشگاه با قالبی متفاوت نه
                                    بر دیوارهای گالری که در مجموعه‌هایی 15 الی 20تایی در آلبوم‌ها و کاتالوگ‌هایی آماده در قطع 50 در 60
                                    به نمایش گذاشته می‌شوند تا نگه‌داری آنها برای مجموعه‌دارانشان به سهولت انجام گیرد. این امر باعث‌شده
                                    تا دشواری نگه‌داری آثار کوچک که غالبا با مشکلاتی روبرو بوده، مرتفع گردد. 300 اثر جمع آوری شده‌ی این
                                    نمایشگاه از سه مدیای متفاوت چون طراحی، نقاشی و چاپ جمع‌اوری شده‌اند و ویژگی مشترک همه آن‌ها قطع
                                    کوچکشان است.
                                </p>
                                <p class="text-justify">
                                    انتخاب هنرمندان این نمایشگاه با سیاستی از پیش تعیین‌شده بر روی هنرمندان برجسته تاریخ هنر ایران،
                                    اساتید بنام و شاگردان آنها و جوانان مستعد این حوزه و همچنین سایر مدرسان دانشگاه‌ها و هنرجویان آنها
                                    که همگی از هنرمندان آینده‌دار خواهند بود، تمرکز داشته است.
                                </p>
                                <h3 class="default-title">
                                    مجموعه آثار چاپ، طراحی و نقاشی در گالری آرتیبیشن
                                </h3>
                                <p class="text-justify">
                                    اما از آنجا که نمایشگاه با تاکید بر فرهنگ مجموعه‌داری، ترویج خرید کارهای چاپ، طراحی و نقاشی‌هایی با
                                    سایز کوچک بوده است در میان آثار این نمایشگاه اسامی هنرمندان پیشکسوتی چون علی اکبرصادقی، اردشیر محصص،
                                    هانیبال الخاص، رضا بانگیز، مهدی حسینی، کامبیز درمبخش، همایون سلیمی، عبدی اسبقی و... حضور دارد،
                                    همچنین تعدادی از آلبوم‌ها نیز با جمع‌آوری آثاری از بهترین هنرجویان اساتید دانشگاه‌ها انتخاب شده است.
                                </p>
                                <p class="text-justify">
                                    نمایش و فروش آثار نمایشگاه آرشیو راس ساعت 16، روز جمعه 31 مرداد 98 افتتاح و تا 15 شهریور ادامه خواهد
                                    داشت. مخاطبین می‌توانند به مدت 16روز برای بازدید از این نمایشگاه به گالری آرتیبیشن واقع در خیابان
                                    شریعتی، پایین‌تر از حسینیۀ ارشاد، نرسیده‌به همت، گل‌نبی(غرب)، میدان احمدی‌روشن(کتابی)، خیابان
                                    ساسانی‌پور، خیابان قندی(دریا)، پلاک 6 مراجعه نمایند. همچنین آثار این نمایشگاه برای علاقمندانی که در
                                    تهران سکونت ندارند به‌صورت آنلاین در سایت آرتیبیشن(www.Artibition.net) به نمایش گذاشته خواهند شد.
                                </p>
                            </div>
                            <div class="content-share">
                                <span class="bolder-title pull-right">{t("share")}:</span>
                                <ul class="share shares">
                                    <li><a href="#" class="share-instagram"></a></li>
                                    <li><a href="#" class="share-telegram"></a></li>
                                    <li><a href="#" class="share-linkedin"></a></li>
                                    <li><a href="#" class="share-twitter"></a></li>
                                </ul>
                                <div class="clearfix"></div>
                                <span class="bolder-title pull-right">{t("artwork.tags.title")}:</span>
                                <ul class="content-tags shares">
                                    <li><a href="#">{t("artwork.artibition")}</a></li>
                                    <li><a href="#">{t("gallery-panel-dashboard.counter_status.exhibition")}</a></li>
                                    <li><a href="#">{t("filter-header.category.painting")}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <h3 class="default-title mrgb32 mrgt16">سایر محتوای گالری هان</h3>
                            {[1, 2, 3, 4].map((item) => {
                                return (
                                    <div class="more-articles">
                                        <img src={articles101} width="1152" height="1152" alt=""
                                            class="img-responsive pull-right" />
                                        <div class="more-articles-title">
                                            <h6 >مروری بر نقاشی های جلال شباهنگی (از دشتها و کویرها گل و مرغ ها و حجم های شیشه‌ای)</h6>
                                            <div class="content-date">
                                                <span class="persian-num">22</span>
                                                <span>تیر</span>
                                                <span class="persian-num">99</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-md-8 col-sm-12">
                            <div class="content-more">
                                <h3 class="default-title">{t("read_more")}</h3>
                                <div class="row">
                                    {[1, 2, 3, 4].map((item) => {
                                        return (
                                            <div class="col-sm-6">
                                                <div class="more-articles">
                                                    <img src={articles101} width="1152" height="1152" alt=""
                                                        class="img-responsive pull-right" />
                                                    <div class="more-articles-title">
                                                        <h6 >مروری بر نقاشی های جلال شباهنگی (از دشتها و کویرها گل و مرغ ها و حجم های شیشه‌ای)</h6>
                                                        <div class="content-date">
                                                            <span class="persian-num">22</span>
                                                            <span>تیر</span>
                                                            <span class="persian-num">99</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
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

export default GalleryContentPage;