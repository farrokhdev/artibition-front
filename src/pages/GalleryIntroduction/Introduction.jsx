import React from 'react'
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
        <div class="tab-content">
            <div id="gallery1" class="tab-pane fade in active">
                <div class="content-body">
                    <IntroducingTheExhibition />
                </div>
                <div className="events" style={{ marginLeft: '30px' }}>
                    <div class="row ">
                        <div class="d-flex public-header">
                            <div class="col-xs-8">
                                <h2 class="text-right default-title">نمایشگاه‌ها</h2>
                            </div>
                            <div class="col-xs-4">
                                <a href="#" class="btn-readmore pull-left">همه نمایشگاه‌ها</a>
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
                                <h2 className="text-right default-title">آثار هنری</h2>
                            </div>
                            <div className="col-xs-4">
                                <a href="#" className="btn-readmore pull-left">همه آثار</a>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div class="default-tab tab-3 tab-interval">
                    <div class="row">
                        <div class="tab-overflow">
                            <div class="col-md-12">

                                <ul className="nav ">
                                    <Tabs defaultActiveKey="1" onChange={callback}>
                                        <TabPane className="mx-5" tab="همه آثار" key="1">
                                            <AllArtworks />
                                        </TabPane>
                                        <TabPane tab="نقاشی" key="2">

                                            {/* <div id="menu1" className="tab-pane fade">
                                                <h3>Menu 1</h3>
                                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo
                                                    consequat.</p>
                                            </div> */}

                                        </TabPane>
                                        <TabPane tab="عکاسی" key="3">
                                            {/* <div id="menu2" className="tab-pane fade">
                                                <h3>Menu 2</h3>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                                    laudantium,
                                                    totam rem aperiam.</p>
                                            </div> */}
                                        </TabPane>
                                        <TabPane tab="مجسمه" key="4">
                                            {/* <div id="menu3" className="tab-pane fade">
                                                <h3>Menu 3</h3>
                                                <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                                    explicabo.</p>
                                            </div> */}
                                        </TabPane>
                                        <TabPane tab="نقاشی خط" key="5">

                                        </TabPane>
                                        <TabPane tab="خوشنویسی" key="6">

                                        </TabPane>
                                        <TabPane tab="چاپ دستی" key="7">

                                        </TabPane>
                                        <TabPane tab="گرافیک" key="8">

                                        </TabPane>
                                        <TabPane tab="طراحی" key="9">

                                        </TabPane>

                                    </Tabs>
                                </ul>
                            </div>
                            <div class="col-md-2 visible-md">
                                <select class="form-control pull-left">
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
                                                <h2 className="text-right default-title">هنرمندان</h2>
                                            </div>
                                            <div className="col-xs-4 w-auto">
                                                <a href="#" className="btn-readmore pull-left ">همه هنرمندان</a>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>


                                <div style={{ overflow: 'auto' }} className="owl-carousel d-flex" id="gallery-artists">
                                    {[1, 2, 3, 4, 5, 6].map((artist) => {
                                        return (

                                            <div class="gallery-artist-img">
                                                <img src={gallery400} width="192" height="192" alt=""
                                                    class="ml-5 pl-3 img-fluid" />
                                                <h6 class="gallery-artist-name">
                                                    <span>آیدین</span>
                                                    <span>آغداشلو</span>
                                                </h6>
                                                <button type="button" class=" btn-follow">دنبال کردن</button>
                                            </div>
                                        )
                                    })}
                                </div>


                                <div class="articles">
                                    <div class="public-header">
                                        <div class="row">
                                            <div class="col-xs-12 w-auto">
                                                <h2 class="default-title">مقالات</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="row">
                                        {[1, 2, 3].map((article) => {
                                            return (

                                                <div class="col-sm-4">
                                                    <a href="#" class="articles-block">
                                                        <div class="news-imgblock">
                                                            <div class="news-date">
                                                                <span class="persian-num">29</span>
                                                                <span>اردیبهشت</span>
                                                            </div>
                                                            <img src={articles100} width="840" height="840"
                                                                class="img-responsive" alt="آرتیبیشن" />
                                                        </div>
                                                        <div class="articles-txt">
                                                            <h5 class="articles-title">
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
                                                        <button class="btn-readmore-black d-block">مطالعه خبر</button>
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