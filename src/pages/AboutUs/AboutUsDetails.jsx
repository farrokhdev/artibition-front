import React from 'react'
import aboutus from "../../assets/img/mainpage/aboutus.jpg"
import user from '../../assets/img/user.jpg'
import gallery2 from '../../assets/img/gallery/2.jpg'
import Slider from "react-slick";

function AboutUsDetails() {

    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        rtl: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="">
            <div className="tab-content">
                <div id="about1" className="tab-pane fade in active">
                    <div className="about-content">
                        <div className="about-banner">
                            <img src={aboutus} width="2400" height="720"
                                alt="درباره آرتیبیشن" className="img-responsive" />
                        </div>
                        <div className="about-body mrgt45">
                            <h2 className="fontbold28 aligncenter">هنر سرمایه‌ی ماندگار</h2>
                            <p className="text-justify mrgt32">
                                آرتیبیشن نمایشگاه و بازار آنلاین هنرهای تجسمی با محوریت هنر اصیل ایرانی است
                                که با ایجاد دسترسی آسان، طراحی زیبا، ارائه‌ی بین المللی و دوزبانه و
                                حضور در تمام شبکه‌های اجتماعی توانسته است اعتماد بسیاری از هنرمندان ممتاز
                                ایرانی را بدست آورد. آرتیبیشن در زمستان 1393 برای وصل کردن هنرمندان
                                توانمند، مجموعه‌داران و گالری‌ها به هنردوستان و خریداران آثار هنری که ارزش
                                گرانبهای هنر را می‌دانند در تهران/ایران خلق شده است.
                            </p>
                            <h3 className="default-title mrgt32 d-flex">حمایت از هنردوستان</h3>
                            <p className="text-justify mrgt32">
                                هنر از دل می‌جوشد و وقتی با مهارت و تجربه پیوند می‌خورد جلا می‌یابد. در
                                آرتیبیشن، شما به راحتی و بی واسطه می‌توانید آثار اصیل هنریِ هنرمندان توانمند
                                را در منزل یا محل کار خود مشاهده، جست‌وجو/مقایسه و ارزیابی کنید؛ سپس اثر
                                مورد
                                نظر خود را با اطمینان تهیّه کنید؛ می‌بیند که لذت خریدتان دو چندان
                                می‌شود.
                            </p>
                            <ul className="content-list mrgt16 text-dir">
                                <li classNameName="d-flex ">تضمین اصالت 100 % آثار هنری و خرید اثآر اصیل به همراه شناسنامه اثر</li>
                                <li classNameName="d-flex ">امکان پس دادن اثر و بازگشت 100 % وجه تا یک روز پس از دریافت اثر</li>
                                <li classNameName="d-flex ">خرید مستقیم، آسان و بی‌واسطه‌ی آثار هنری از خود هنرمند یا مالک فعلی
                                    اثر
                                </li>
                                <li classNameName="d-flex ">تنوع بالای آثار هنری در رشته‌های مختلف هنرهای تجسمی</li>
                                <li classNameName="d-flex ">امکان شرکت در حراجی‌های معتبر به صورت برخط (آنلاین) بدون صرف هزینه و
                                    زمان زیاد
                                </li>
                                <li classNameName="d-flex ">دسترسی سریع و به‌روز به اخبار و پژوهش‌های هنری</li>
                                <li classNameName="d-flex ">اطلاع از جدیدترین آثار هنرمندان محبوب</li>
                            </ul>
                        </div>


                        <div className="about-body mrgt64">
                            <h2 className="fontbold28 aligncenter">معرفی افراد</h2>
                            <p className="aligncenter mrgt16">ما همواره برآنیم تا خدماتی باکیفیت و شایسته را به
                                هنر دوستان ارائه دهیم</p>
                            <div className="row users">

                                {[1, 2, 3, 4, 5, 6]?.map((item) => {
                                    return (
                                        <div className="col-sm-3 col-xs-6">
                                            <img src={user} width="335" height="335" alt=""
                                                className="img-responsive center-block" />
                                            <h5 className="font18">حسین محسنی</h5>
                                            <span className="graycolor">مدیر عامل</span>
                                            <ul className="gray-social">
                                                <li className="linkedin"><a href="#"></a></li>
                                                <li className="instagram"><a href="#"></a></li>
                                            </ul>
                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                        <div className="about-body mrgt64">
                            <h2 className="fontbold28 aligncenter">همکاران</h2>
                            <p className="aligncenter mrgt16">مجموعه‌های متعددی با آرتیبیشن در ارتباط و همکاری
                                هستند</p>

                            <div className="owl-carousel partner-block">
                                <Slider classNameName="mt-5" {...settings}>
                                    {[1, 2, 3, 4]?.map((item) => {
                                        return (
                                            <a href="#" className="partners">
                                                <img src={gallery2} height="240" width="240" alt=""
                                                    className="img-responsive center-block"
                                                    style={{ minWidth: '114px', minHeight: '114px', maxWidth: '105px', maxHeight: '263px' }} />
                                                <h6 className="font18">گالری آران</h6>
                                                <p className="aligncenter font17">همکاری با مجموعه آران در برگزاری نمایشگاه‌ها و
                                                    رویدادهای هنری</p>
                                            </a>
                                        )
                                    })}

                                </Slider>
                            </div>
                        </div>

                        <div className="about-body mrgt64">
                            <h2 className="fontbold28 aligncenter">شبکه‌های اجتماعی</h2>
                            <p className="aligncenter mrgt16">برای اطلاع از آخرین اخبار آرتیبیشن و همچنین دنیای هنر،
                                ما را در شبکه‌های اجتماعی دنبال نمایید</p>
                            <ul className="social">
                                <li><a href="#" id="twitter"></a></li>
                                <li><a href="#" id="aparat"></a></li>
                                <li><a href="#" id="instagram"></a></li>
                                <li><a href="#" id="telegram"></a></li>
                                <li><a href="#" id="linkedin"></a></li>
                                <li><a href="#" id="youtube"></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUsDetails; 