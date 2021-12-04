import React from 'react';
import lfpqikbjzo from '../../assets/img/mainpage/lfpqikbjzo@3x.jpg';
import pqjkkwfnml from '../../assets/img/mainpage/pqjkkwfnml@3x.jpg';

export default function News() {
    return (
        <div  className="news">
        <div  className="row">
            <div className="public-header">
                <div className="d-flex">
                    <h2 className="default-title">اخبار و مقالات هنر</h2>
                </div>
            </div>
            <div style={{overflowX : 'hidden'}} className="d-flex news-body">

                <a href="#" className="news-col col-md-6">
                    <div className="row">
                        <div className="col col-md-6 col-sm-4">
                            <div className="news-imgblock">
                                <div className="news-date">
                                    <span className="persian-num">29</span>
                                    <span>اردیبهشت</span>
                                </div>
                                <img src={pqjkkwfnml} width="840" height="840"
                                     className="img-responsive"
                                     alt="آرتیبیشن"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-8">
                            <h3 className="news-title">نگاهی به هنر مائوریتزیو کاتلان به بهانه اثر کمدین یا موز رو کی
                                خورد؟</h3>
                            <p className="news-short-body hidden-xs">
                                او در سال ۱۳۱۴ در تـهران به دنیا آمد و در جوانی با علاقه‌‌ای که به تصویر و نقاشی داشت،
                                پیگیر
                                یادگیری هنرهای تجسمی بود. او برای تحصیل وارد دانشگـاه سن خوزه‌ی ایالت کالیفرنیا شد.
                            </p>
                            <div className="btn-readmore-black">مطالعه خبر</div>
                        </div>
                    </div>
                </a>
                <a href="#" className="news-col col-md-6">
                    <div className="row">
                        <div className="col-md-6 col-sm-4">
                            <div className="news-imgblock">
                                <div className="news-date">
                                    <span className="persian-num">29</span>
                                    <span>اردیبهشت</span>
                                </div>
                                <img src={lfpqikbjzo} width="840" height="840"
                                     className="img-responsive"
                                     alt="آرتیبیشن"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-8">
                            <h3 className="news-title">مروری بر نقاشی های جلال
                                شباهنگی (از دشت ها و کویرها گل
                                (و مرغ ها و حجم های شیشه ای
                            </h3>
                            <p className="news-short-body hidden-xs">
                                او در سال ۱۳۱۴ در تـهران به دنیا آمد و در جوانی با علاقه‌‌ای که به تصویر و نقاشی داشت،
                                پیگیر
                                یادگیری هنرهای تجسمی بود. او برای تحصیل وارد دانشگـاه سن خوزه‌ی ایالت کالیفرنیا شد.
                            </p>
                            <div className="btn-readmore-black">مطالعه خبر</div>
                        </div>
                    </div>
                </a>
                
                <button className="btn btn-default more-news hidden-xs">
                    مشاهده خبرهای بیشتر
                    <span className="glyphicon glyphicon-menu-left"></span>
                </button>
            </div>
        </div>
    </div>
    )
}
