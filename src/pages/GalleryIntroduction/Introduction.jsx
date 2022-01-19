import React from 'react'
import { t } from 'i18next';
import GalleyRelatedContent from './GalleyRelatedContent';
import IntroducingTheExhibition from './IntroducingTheExhibition';
import { Breadcrumb, Tabs } from 'antd';
import AllArtworks from './AllArtworks';
import gallery400 from '../../assets/img/gallery/400.jpg';
import articles100 from '../../assets/img/articles/100.jpg';

function Introduction() {

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }

    return (
        <div className="tab-content">
            <div id="gallery1" className="tab-pane fade in active">
                <div className="content-body">
                    <IntroducingTheExhibition />
                </div>
                <div className="events" style={{ marginLeft: '30px' }}>

                    <div class="row ">
                        <div class="d-flex public-header">
                            <div class="col-xs-8">
                                <h2 class="text-right default-title">{t("artist_profile.tabs.exhibitions")}</h2>
                            </div>
                            <div class="col-xs-4">
                                <a href="#" class="btn-readmore pull-left">{t("artist_profile.tabs.all_exhibitions")}</a>

                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>

                <GalleyRelatedContent />

                <div className="events" style={{ marginLeft: '30px' }}>
                    <div className="row">
                        <div className="d-flex public-header">
                            <div className="col-xs-8">
                                <h2 className="text-right default-title">{t("nav-menu-artworks")}</h2>
                            </div>
                            <div className="col-xs-4">
                                <a href="#" className="btn-readmore pull-left">{t("nav-submenu.artworks.artField.all")}</a>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="default-tab tab-3 tab-interval">
                    <div className="row">
                        <div className="tab-overflow">
                            <div className="col-md-12">

                                <ul className="nav ">
                                    <Tabs defaultActiveKey="1" onChange={callback}>
                                        <TabPane className="mx-5" tab={t("nav-submenu.artworks.artField.all_artworks")} key="1">
                                            <AllArtworks />
                                        </TabPane>
                                        <TabPane tab={t("filter-header.category.painting")} key="2">

                                            {/* <div id="menu1" className="tab-pane fade">
                                                <h3>Menu 1</h3>
                                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo
                                                    consequat.</p>
                                            </div> */}

                                        </TabPane>
                                        <TabPane tab={t("filter-header.category.photography")} key="3">
                                            {/* <div id="menu2" className="tab-pane fade">
                                                <h3>Menu 2</h3>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                                    laudantium,
                                                    totam rem aperiam.</p>
                                            </div> */}
                                        </TabPane>
                                        <TabPane tab={t("filter-header.category.sculpture")} key="4">
                                            {/* <div id="menu3" className="tab-pane fade">
                                                <h3>Menu 3</h3>
                                                <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                                    explicabo.</p>

                                            </div> */}
                                        </TabPane>
                                        <TabPane tab={t("filter-header.category.calligram")} key="5">

                                        </TabPane>
                                        <TabPane tab={t("filter-header.category.calligraphy")} key="6">

                                        </TabPane>
                                        <TabPane tab={t("filter-header.category.printmaking")} key="7">

                                        </TabPane>
                                        <TabPane tab={t("filter-header.category.graphic")} key="8">

                                        </TabPane>
                                        <TabPane tab={t("filter-header.category.drawing")} key="9">

                                        </TabPane>

                                    </Tabs>
                                </ul>
                            </div>
                            <div className="col-md-2 visible-md">
                                <select className="form-control pull-left">
                                    <option>محبوب ترین‌ها</option>
                                    <option>پرفروش</option>
                                    <option>پربازدید</option>
                                </select>
                            </div>


                            <div class="gallery-artists">
                                <div className="events">
                                    <div className="row">
                                        <div className="d-flex public-header">
                                            <div className="col-xs-9">
                                                <h2 className="text-right default-title">{t("artist_profile.artists")}</h2>
                                            </div>
                                            <div className="col-xs-4 w-auto">
                                                <a href="#" className="btn-readmore pull-left ">{t("nav-submenu.showroom.category.all")}</a>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>


                                <div style={{ overflow: 'auto' }} className="owl-carousel d-flex" id="gallery-artists">
                                    {[1, 2, 3, 4, 5, 6].map((artist) => {
                                        return (

                                            <div className="gallery-artist-img">
                                                <img src={gallery400} width="192" height="192" alt=""
                                                    className="ml-5 pl-3 img-fluid" />
                                                <h6 className="gallery-artist-name">
                                                    <span>آیدین</span>
                                                    <span>آغداشلو</span>
                                                </h6>
                                                <button type="button" class=" btn-follow">{t("artwork.follow")}</button>

                                            </div>
                                        )
                                    })}
                                </div>

                                <div class="articles">
                                    <div class="public-header">
                                        <div class="row">
                                            <div class="col-xs-12 w-auto">
                                                <h2 class="default-title">{t("news-and-article-art.articles")}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="row">
                                        {[1, 2, 3].map((article) => {
                                            return (

                                                <div className="col-sm-4">
                                                    <a href="#" className="articles-block">
                                                        <div className="news-imgblock">
                                                            <div className="news-date">
                                                                <span className="persian-num">29</span>
                                                                <span>اردیبهشت</span>
                                                            </div>
                                                            <img src={articles100} width="840" height="840"
                                                                className="img-responsive" alt="آرتیبیشن" />
                                                        </div>
                                                        <div className="articles-txt">
                                                            <h5 className="articles-title">
                                                                مروری بر نقاشی های جلال شباهنگی (از دشت ها و کویرها گل و مرغ
                                                                ها و حجم های شیشه ای)
                                                            </h5>
                                                            <p>
                                                                او در سال ۱۳۱۴ در تـهران به دنیا آمد و در جوانی با علاقه‌‌ای که به
                                                                تصویر و نقاشی داشت،
                                                                پیگیر
                                                                یادگیری هنرهای تجسمی بود. او برای تحصیل وارد دانشگـاه سن خوزه‌ی
                                                                ایالت کالیفرنیا شد و با
                                                                مدرک
                                                                کارشناسی ارشد در طراحی و گرافیک از آن دانشگاه فارغ‌ شد. در سال ۱۳۴۷
                                                                به عضویت هیئت علمی
                                                                دانشکده هنر های زیبای تهران
                                                            </p>
                                                        </div>
                                                        <button class="btn-readmore-black d-block">{t("news-and-article-art.more")}</button>
                                                    </a>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Introduction;