import React from 'react';
import gallery201 from '../../assets/img/gallery/201.jpg';
import HanLogo from '../../assets/img/gallery/hanlogo.jpg';

function IntroducingTheExhibition() {
    return (
        <div class="row gallery-ex">
            <div class="col-md-6 col-sm-3">
                <div class="col-img">
                    <div class="tags tags-events">حضوری</div>
                    <img src={gallery201} width="1776" height="1776"
                        alt="آرتیبیشن"
                        class="img-responsive" />
                </div>
            </div>
            <div class="col-md-6 col-sm-9 md-padr100">
                <h3 class="gallery-innername text-align">نمایشگاه نقاشی آبرنگ</h3>
                <div class="row-galleryinfo">
                    <div class="col-sm-12 d-flex justify-content-center">
                        <img src={HanLogo} width="110" height="110" alt=""
                            class="img-responsive pull-right" />
                        <div class="gallery-innerinfo">
                            <h3>گالری آران</h3>
                            <p>تهران</p>
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
                <div class="clearfix visible-sm"></div>
                <div class="col-md-12 md-padr100">
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
                    <button type="button" class="btn btn-default d-block">مشاهده جزئیات</button>
                </div>
            </div>
        </div>
    )
}

export default IntroducingTheExhibition; 