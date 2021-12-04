import React from 'react';

import logo from '../../assets/img/logo.svg'
import logonamad from '../../assets/img/logo@3x.jpg'
import logomelihonar from '../../assets/img/melihonar@3x.jpg'

export default function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="d-block d-md-flex flex-row-reverse row-footer ">
                    {/* <div class="col-sm-6 col-sm-push-6"> */}
                    <div class="col  my-auto">
                        <ul class="social">
                            <li><a href="#" id="twitter"></a></li>
                            <li><a href="#" id="aparat"></a></li>
                            <li><a href="#" id="instagram"></a></li>
                            <li><a href="#" id="telegram"></a></li>
                            <li><a href="#" id="linkedin"></a></li>
                            <li><a href="#" id="youtube"></a></li>
                        </ul>
                    </div>
                    {/* <div class="col-sm-6 col-sm-pull-6 "> */}
                    <div class="col">
                        <div class="max-w490">
                            <div class="nl-input">
                                <input placeholder="ایمیل خود را وارد نمایید"/>
                                <button type="button">ثبت ایمیل</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-block d-md-flex">
                    <div class="col">
                        <div class="max-w490 text-right">
                            <img src={logo} width="160" height="42" alt="لوگو آرتیبیشن" class="logo-footer"/>
                            <p>
                                آرتیبیشن نمایشگاه و بازار آنلاین هنرهای تجسمی با محوریت هنر اصیل ایرانی است که با ایجاد دسترسی
                                آسان،
                                طراحی زیبا، ارائه‌‌‌ی بین‌ المللی و به صورت دو زبانه و نیز حضور در شبکه‌های اجتماعی توانسته است
                                اعتماد بسیاری از هنرمندان ممتاز ایرانی را بدست آورد. آرتیبیشن در زمستان ۱۳۹۳ برای وصل کردن
                                هنرمندان
                                توانمند، مجموعه‌داران و گالری‌ها به هنر دوستان و خریداران آثار هنری که ارزش گران‌بهای هنر را
                                می‌دانند در تهران / ایران خلق شده است
                            </p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row ">
                            <div class="col-md-4 col-xs-5">
                                <div class="footer-nav text-right">
                                    <h6 class="footer-nav-header">راهنما</h6>
                                    <ul class="footer-nav-body">
                                        <li><a href="#">راهنمای عضویت</a></li>
                                        <li><a href="#">راهنمای عضویت هنرمند</a></li>
                                        <li><a href="#">راهنمای ساخت گالری</a></li>
                                        <li><a href="#">راهنمای خرید از سایت</a></li>
                                        <li><a href="#">سوالات متداول</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 col-xs-3">
                                <div class="footer-nav text-right">
                                    <h6 class="footer-nav-header">مقررات</h6>
                                    <ul class="footer-nav-body">
                                        <li><a href="#">کپی رایت</a></li>
                                        <li><a href="#">قوانین</a></li>
                                        <li><a href="#">حریم خصوصی</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 col-xs-4">
                                <div class="footer-nav text-right">
                                    <h6 class="footer-nav-header">درباره</h6>
                                    <ul class="footer-nav-body">
                                        <li><a href="#">درباره ما</a></li>
                                        <li><a href="#">تماس با ما</a></li>
                                        <li><a href="#">همکاری با ما</a></li>
                                        <li><a href="#">همکاران</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <ul class="certification">
                        <li><a href="#">
                            <img src={logonamad} width="375" height="" class="img-responsive"
                                            alt="نماد اعتماد الکترونیکی آرتیبیشن"/></a></li>
                        <li><a href="#">
                            <img src={logomelihonar} 
                                width="375" height="" 
                                class="img-responsive"
                                        alt="شبکه ملی فرهنگ آرتیبیشن"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="reserve">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8">
                            <span>کلیه حقوق مادی و معنوی این سایت و برند آرتیبیشن متعلق به</span>
                            <a href="#">شرکت گالری آرتیبیشن</a>
                            <span>می‌باشد.</span>
                        </div>
                        <div class="col-sm-4 text-left hidden-xs">
                            <span>ساخته شده با</span>
                            <span><img src="img/love.svg" width="14" height="13" alt="آرتیبیشن" class="love"/> </span>
                            <span>توسط گالری</span>
                            <span><img src="img/logo.svg" width="94" height="26" alt="لوگو آرتیبیشن" class="smalllogo"/> </span>
                        </div>
                    </div>
                </div>
            </div>
    </footer>

    )
}
