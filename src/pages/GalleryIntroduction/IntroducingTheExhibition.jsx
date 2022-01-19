import React from 'react';
import gallery201 from '../../assets/img/gallery/201.jpg';
import HanLogo from '../../assets/img/gallery/hanlogo.jpg';

function IntroducingTheExhibition() {
    return (
        <div className="row gallery-ex">
            <div className="col-md-6 col-sm-3">
                <div className="col-img">
                    <div className="tags tags-events">حضوری</div>
                    <img src={gallery201} width="1776" height="1776"
                        alt="آرتیبیشن"
                        className="img-responsive" />
                </div>
            </div>
            <div className="col-md-6 col-sm-9 md-padr100">
                <h3 className="gallery-innername text-align">نمایشگاه نقاشی آبرنگ</h3>
                <div className="row-galleryinfo">
                    <div className="col-sm-12 d-flex justify-content-center">
                        <img src={HanLogo} width="110" height="110" alt=""
                            className="img-responsive pull-right" />
                        <div className="gallery-innerinfo">
                            <h3>گالری آران</h3>
                            <p>تهران</p>
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
                <div className="clearfix visible-sm"></div>
                <div className="col-md-12 md-padr100">
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
                    <button type="button" className="btn btn-default d-block">مشاهده جزئیات</button>
                </div>
            </div>
        </div>
    )
}

export default IntroducingTheExhibition; 