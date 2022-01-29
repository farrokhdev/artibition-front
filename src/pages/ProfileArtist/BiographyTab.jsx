import React, { useEffect, useState } from 'react'
import { t } from 'i18next';
import { ARTIST_CATEGORY, ARTIST_EXHIBITION } from '../../utils';
import QueryString from 'qs';
import apiServices from '../../utils/api.services';
import { useTranslation } from 'react-i18next';

function BiographyTab({artistBio,artistId}) {
    const { t, i18n } = useTranslation();
    const [artistExhibition, setArtistExhibition] = useState();
    const [params, setParams] = useState({
        // search: "",
        page: 1,
  
    })
    const getArtistExhibition = () => {
        apiServices.get(ARTIST_EXHIBITION(artistId), QueryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setArtistExhibition(res.data.data)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    useEffect(() => {
        getArtistExhibition()
    }, [params]);
    console.log("exhibition",artistExhibition)
    return (
        <div id="artist3" className="tab-pane ">
                        <div className="d-flex box-dir-reverse ">
                            <div className="col-sm-7">
                                <h5 className="custom-title text-dir">{t("artist_profile.introduction")}</h5>
                                <p className="text-justify"> 
                                {i18n.language === 'fa-IR' ?
                                artistBio?.fa?.biography
                                    :
                                artistBio?.en?.biography

                                }
                                {/* آیدین آغداشلو (زاده ۸ آبان ۱۳۱۹ در رشت) نقاش، گرافیست، نویسنده،
                                    منتقد فیلم تصویرگر کتاب‌های درسی ایران، مجلات، و مؤسسه‌های خصوصی است. او همچنین مدتی
                                    مدیر امور فرهنگی و هنری «دفتر مخصوص شهبانو
                                    فرح پهلوی و از کارکنان موزه هنرهای معاصر تهران و موزه رضا عباسی بود. آغداشلو تاکنون
                                    تنها دو بار در ایران نمایشگاه فردی برگزار کرده ‌است، که نخستین آن در سال ۱۳۵۴ در
                                    انجمن ایران و آمریکا در تهران بود و دومین بار در
                                    .آبان ۱۳۹۳ در گالری اثر او همچنین نوشته‌هایی در نقد هنری و سینمایی، پژوهش‌های تاریخ
                                    هنر، و سفرنامه انجام داده است */}
                                </p>
                                <h5 className="custom-title mrgt16 text-dir">{t("artist_profile.style")}</h5>
                                {/* <p className="text-justify">
                                    
                                    آیدین آغداشلو (زاده ۸ آبان ۱۳۱۹ در رشت) نقاش، گرافیست، نویسنده، منتقد فیلم تصویرگر
                                    کتاب‌های درسی ایران، مجلات، و مؤسسه‌های خصوصی است. او همچنین مدتی مدیر امور فرهنگی و
                                    هنری «دفتر مخصوص شهبانو
                                    فرح پهلوی و از کارکنان موزه هنرهای معاصر تهران و موزه رضا عباسی بود. آغداشلو تاکنون
                                    تنها دو بار در ایران نمایشگاه فردی برگزار کرده ‌است، که نخستین آن در سال ۱۳۵۴ در
                                    انجمن ایران و آمریکا در تهران بود و دومین بار در
                                    .آبان ۱۳۹۳ در گالری اثر او همچنین نوشته‌هایی در نقد هنری و سینمایی، پژوهش‌های تاریخ
                                    هنر، و سفرنامه انجام داده است
                                    <br/>
                                    سبک آغداشلو روش ریزه‌کاری و «استادکاری» در نقاشی کلاسیک را پیگیری نمود و با
                                    تأثیرپذیری از کارهای سالوادور دالی، نقاش فرا واقع‌گرای اسپانیایی، به نقاشی با فرمی
                                    آزاد پرداخت. این همان شیوه یی بود که او در جوانی با تصویرگری کتاب‌های درسی تاریخ
                                    نوشته شده توسط باستانی پاریزی در آن مهارت یافته بود

                                    آغداشلو با وارد کردن فضاهای سورئال در کارهای خود و نقاشی کردن اشیای معلق که سایه‌شان
                                    بر زمین می‌افتاد از شیوهٔ ساندرو بوتیچلی پیروی می نمود. او سپس به فضایی سورئالیستی
                                    جورجو دکی ریکو روی آورد و در
                                    آثار او در دوره پیش از انقلاب ۱۳۵۷، تقلیدی از شیوه‌های رنسانس و مکتب مجموعه سال‌های
                                    آتش و برف به کشیدن آدمکهایی پرداخت که صورت نداشتند تا بتواند بدین گونه ناخودآگاه
                                    مرموز و وهم‌آمیز آناترا تصویر نماید
                                    .فلاندری بود. اما پس از انقلاب، هنر ایرانی – همچون طراحی، نگارگری و خوشنویسی – جای
                                    هنر ایتالیایی را در کارهای او گرفت

                                    پس از انقلاب ۱۳۵۷ و جنگ ۸ ساله، بیشتر کارهای آغداشلو با تأثیر از از ویرانی‌ها ی جنگ
                                    در نماد کلبه‌ها و مناظر متروک، پنجره‌های پوسیده چوبی سبز رنگ با شیشه‌های شکسته،
                                    درهای کهنه با قفل‌های زنگاربسته، و تصویر
                                    تیغه‌های مرگبار که نشانی از موشک‌های فرودآمده بر شهرها بود پدیدار شد.او کارهای دوران
                                    جنگ خودرا خود تک‌چهره‌نقاش در ۴۸ سالگی و شفاعت فرشتگان نامید که بیانگری افسردگی و نا
                                    آرامی‌های ناشی از ویرانی جنگ و اعتراض بود
                                </p> */}
                            </div>
                            <div className="col-sm-5">
                                <h5 className="custom-title mrgr104 text-dir">{t("artist_profile.activities")}</h5>
                                <div className="row-timeline">
                                    <div className="pull-dir">
                                        <h5 className="persian-num year-timeline">1399</h5>
                                    </div>
                                    <div className="sec-timeline">
                                        <h6 className="title-timeline text-dir">{t("artist_profile.versions")}</h6>
                                        <div className="text-dir">{t("artist_profile.aknon_gallery")}</div>
                                        <div className="date-timeline text-dir">
                                            <span className="persian-num">22</span>
                                            <span>خرداد</span>
                                            <span className="persian-num">1399</span>
                                        </div>
                                    </div>
                                    <div className="sec-timeline">
                                        <h6 className="title-timeline text-dir">{t("artist_profile.versions")}</h6>
                                        <div className="text-dir">{t("artist_profile.aknon_gallery")}</div>
                                        <div className="date-timeline text-dir">
                                            <span className="persian-num">22</span>
                                            <span>خرداد</span>
                                            <span className="persian-num">1399</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row-timeline">
                                    <div className="pull-dir">
                                        <h5 className="persian-num year-timeline">1398</h5>
                                    </div>
                                    <div className="sec-timeline">
                                        <h6 className="title-timeline text-dir">{t("artist_profile.man")}</h6>
                                        <div className="text-dir">{t("artist_profile.aknon_gallery")}</div>
                                        <div className="date-timeline text-dir">
                                            <span className="persian-num">22</span>
                                            <span>خرداد</span>
                                            <span className="persian-num">1398</span>
                                        </div>
                                    </div>
                                    <a className="sec-timeline" href="#">
                                        <h6 className="title-timeline text-dir">{t("artist_profile.collection")} ۵</h6>
                                        <button className="d-flex align-items-center  box-dir-reverse d-flex align-items-center  box-dir-reverse btn-readmore">{t("artist_profile.veiw")}</button>
                                        <div className="text-dir">{t("artist_profile.aknon_gallery")}</div>
                                        <div className="date-timeline text-dir">
                                            <span className="persian-num">22</span>
                                            <span>خرداد</span>
                                            <span className="persian-num">1399</span>
                                        </div>
                                    </a>
                                    <div className="sec-timeline">
                                        <h6 className="title-timeline text-dir">{t("artist_profile.versions")}</h6>
                                        <div className="text-dir">{t("artist_profile.aknon_gallery")}</div>
                                        <div className="date-timeline text-dir">
                                            <span className="persian-num">22</span>
                                            <span>خرداد</span>
                                            <span className="persian-num">1399</span>
                                        </div>
                                    </div>
                                    <div className="sec-timeline">
                                        <h6 className="title-timeline text-dir">{t("artist_profile.versions")}</h6>
                                        <div className="text-dir">{t("artist_profile.aknon_gallery")}</div>
                                        <div className="date-timeline text-dir">
                                            <span className="persian-num">22</span>
                                            <span>خرداد</span>
                                            <span className="persian-num">1399</span>
                                        </div>
                                    </div>
                                    <a className="sec-timeline" href="#">
                                        <h6 className="title-timeline text-dir">{t("artist_profile.collection")} 3</h6>
                                        <button className="d-flex align-items-center  box-dir-reverse btn-readmore">{t("artist_profile.veiw")}</button>
                                        <div className="text-dir">{t("artist_profile.aknon_gallery")}</div>
                                        <div className="date-timeline text-dir">
                                            <span className="persian-num">22</span>
                                            <span>خرداد</span>
                                            <span className="persian-num">1399</span>
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default BiographyTab;
