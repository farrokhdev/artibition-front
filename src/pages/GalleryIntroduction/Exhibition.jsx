import React from 'react';
import gallery201 from '../../assets/img/gallery/201.jpg';
import HanLogo from '../../assets/img/gallery/hanlogo.jpg';
import gallery102 from '../../assets/img/gallery/102.jpg';
import { t } from 'i18next';

function Exhibition() {
    return (
        <div id="gallery2" class="tab-pane fade in active">
 
            <div class="row gallery-ex">
                <div class="col-md-6 col-sm-3 sm-absolute">
                    <div class="col-img">
                        <div class="tags tags-events">حضوری</div>
                        <img src={gallery201} width="1776" height="1776" alt="آرتیبیشن"
                            className="img-responsive" />
                    </div>
                </div>
                <div class="clearfix visible-sm"></div>
                <div class="col-md-6 ">
                    <div class="row">
                        <div class="col-sm-9">
                            <h3 class="gallery-innername">نمایشگاه نقاشی آبرنگ</h3>
                            <div class="row-galleryinfo">
                                <div class="col-sm-7">
                                    <img src={HanLogo} width="110" height="110" alt=""
                                        class="img-responsive pull-right" />
                                    <div class="gallery-innerinfo">
                                        <h3>گالری آران</h3>
                                        <p>تهران</p>
                                    </div>
                                </div>
                                <div class="col-sm-5">
                                    <div class="gallery-daterow">
                                        <span class="gallery-date">آغاز</span>
                                        <span class="gallery-datenum persian-num">۱۳۹۹/۰۴/۲۸</span>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="gallery-daterow">
                                        <span class="gallery-date">پایان</span>
                                        <span class="gallery-datenum persian-num">۱۳۹۹/۰۵/۰۲</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="gallery-txt">
                        <p>
                            ،نمایشگاه انفرادی نقاشی‌های ایرج شافعی این روزها در گالری آرتیبیشن برپاست.
                            این نمایشگاه
                            نوزدهمین نمایشگاه انفرادی ایرج شافعی، جوان مستعدی است که زمستان ۱۳۶۲ آموزش
                            نقاشی
                            .را نزد آغداشلو آغاز کرد و یادگیری تکنیک‌های مختلف را یکی پس از دیگری پشت سر
                            گذاشت
                            <br />
                            <br />
                            هنرمندی که تا امروز با برگزاری بیش از صد نمایشگاه گروهی نقاط مختلف جهان با
                            دستمایه قرار
                            دادن طرح‌هایی از گل مرغ و پرنده تا خط، سفالینه‌ها، ظروف و نشانه‌هایی از
                            دوران تاریخی ایران
                            .و فرهنگ ایرانی توانسته نه‌تنها بر هم‌نسلان بلکه بر همه اقشار عاشق ایران در
                            جهان اثر بگذارد
                        </p>
                    </div>
                    <button type="button" class="btn btn-default">{t("show-details")}</button>
                </div>

            </div>


            <div class="public-header">
                <h2 class="default-title">{t("artist_profile.tabs.upcoming_exhibitions")}</h2>
            </div>

            <div class="row gallery-ex">
                <div class="col-md-6 ">
                    <div class="row">
                        <div class="col-sm-9">
                            <h3 class="gallery-innername">نمایشگاه نقاشی آبرنگ</h3>
                            <div class="row-galleryinfo">
                                <div class="col-sm-7">
                                    <img src={HanLogo} width="110" height="110" alt=""
                                        className="img-responsive pull-right" />
                                    <div className="gallery-innerinfo">
                                        <h3>گالری آران</h3>
                                        <p>تهران</p>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="gallery-daterow">
                                        <span className="gallery-date">آغاز</span>
                                        <span className="gallery-datenum persian-num">۱۳۹۹/۰۴/۲۸</span>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="gallery-daterow">
                                        <span className="gallery-date">پایان</span>
                                        <span className="gallery-datenum persian-num">۱۳۹۹/۰۵/۰۲</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-txt">
                        <p>
                            ،نمایشگاه انفرادی نقاشی‌های ایرج شافعی این روزها در گالری آرتیبیشن برپاست.
                            این نمایشگاه
                            نوزدهمین نمایشگاه انفرادی ایرج شافعی، جوان مستعدی است که زمستان ۱۳۶۲ آموزش
                            نقاشی
                            .را نزد آغداشلو آغاز کرد و یادگیری تکنیک‌های مختلف را یکی پس از دیگری پشت سر
                            گذاشت
                            <br />
                            <br />
                            هنرمندی که تا امروز با برگزاری بیش از صد نمایشگاه گروهی نقاط مختلف جهان با
                            دستمایه قرار
                            دادن طرح‌هایی از گل مرغ و پرنده تا خط، سفالینه‌ها، ظروف و نشانه‌هایی از
                            دوران تاریخی ایران
                            .و فرهنگ ایرانی توانسته نه‌تنها بر هم‌نسلان بلکه بر همه اقشار عاشق ایران در
                            جهان اثر بگذارد
                        </p>
                    </div>
                    <button type="button" class="btn btn-default">{t("show-details")}</button>
                </div>
                <div className="clearfix visible-sm"></div>
                <div className="col-md-6 col-sm-3 sm-absolute">
                    <div className="col-img">
                        <div className="tags tags-events">حضوری</div>
                        <img src={gallery201} width="1776" height="1776" alt="آرتیبیشن"
                            className="img-responsive" />
                    </div>
                </div>
            </div>
            <div class="public-header">
                <h2 class="default-title">{t("artist_profile.tabs.Previous_exhibitions")}</h2>
            </div>
            <div className="previous-ex">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((details) => {
                    return (
                        <div className="col-sm-3">
                            <a href="#" className="cols finished">
                                <div className="col-img">
                                    <div className="tags tags-events">حضوری</div>
                                    <img src={gallery102} width="840" height="840" alt="آرتیبیشن"
                                        className="img-responsive" />
                                </div>
                                <div className="col-body ">
                                    <div className="finished-tag">پایان یافته</div>
                                    <h6 className="col-title">
                                        <span className="col-name">نمایشگاه رضا حسینی</span>
                                    </h6>
                                    <div className="col-dimension">
                                        <span className="col-dimension-title">گالری آرتیبیشن</span>
                                    </div>
                                    <div className="col-date">
                                        <span className="persian-num">16</span>
                                        <span>الی</span>
                                        <span className="persian-num">22</span>
                                        <span>اردیبهشت</span>
                                    </div>
                                </div>
                            </a>
                        </div>

                    )
                })}

            </div>
            <div className="clearfix"></div>
            <div className="row-pagination">
                <ul className="pagination">
                    <li><a href="#">1</a></li>
                    <li className="active"><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Exhibition;