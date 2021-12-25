import React from 'react';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import { t } from 'i18next';

function PanleMyAlbums() {
    return (
        <>
        <HeaderPanel t={t} />
        <div className="panel-style margin-top-fa">
          <SidebarPanel />
          <div className="custom-container">
  
          <div class="box box-1">
            <div class="pull-right">
                <h2 class="greencolor">ثبت گالری</h2>
                <p>اگر صاحب گالری هستید آن را ثبت نمایید</p>
            </div>
            <a href="#" class="btn-box btn-green pull-left">
                <img src="img/felsh-left.png" width="16" height="16" class="center-block"/>
            </a>
            <div class="clearfix"></div>
        </div>
        <div class="row">
            <div class="col-lg-8">
                <div class="box box-2">
                    <div class="sec4">
                        <div class="public-header">
                            <div class="pull-right">
                                <h2 class="default-title">مجموعه‌ها</h2>
                            </div>
                            <div class="pull-left">
                                <button type="button" class="btn btn-more" data-target="#addnewcollection"
                                        data-toggle="modal">افزودن مجموعه
                                </button>
                            </div>
                        </div>
                        <table class="table upload-art">
                            <thead>
                            <tr>
                                <th scope="col">ردیف</th>
                                <th scope="col">عنوان</th>
                                <th scope="col">تعداد آثار</th>
                                <th scope="col">آخرین ویرایش</th>
                                <th scope="col">جزئیات</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td data-label="ردیف">1</td>
                                <td data-label="عنوان"><span>Lorem</span></td>
                                <td data-label="تعداد آثار"><span>10</span></td>
                                <td data-label="آخرین ویرایش"><span>20/05/02</span></td>
                                <td data-label="جزئیات">
                                    <button type="button" class="btn-outline-blue" data-target="#addnewcollection"
                                            data-toggle="modal">ویرایش
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="ردیف">2</td>
                                <td data-label="عنوان"><span>Ipsum</span></td>
                                <td data-label="تعداد آثار"><span>11</span></td>
                                <td data-label="آخرین ویرایش"><span>19/03/03</span></td>
                                <td data-label="جزئیات">
                                    <button type="button" class="btn-outline-blue" data-target="#addnewcollection"
                                            data-toggle="modal">ویرایش
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="box box-3">
                    <div class="public-header">
                        <h2 class="default-title pull-right">اطلاعات هنری</h2>
                        <div class="pull-left">
                            <a href="#">
                                <img src="img/edit_name.svg" width="32" height="32"/>
                            </a>
                        </div>
                    </div>
                    <div class="box3-body">
                        <div class="fa-resume">
                            <span class="bolder-title">رزومه</span>
                            <p class="text-justify">
                                ،آیدین آغداشلو (زاده ۸ آبان ۱۳۱۹ در رشت) نقاش، گرافیست
                                نویسنده، منتقد فیلم تصویرگر کتاب‌های درسی ایران، مجلات،
                                و مؤسسه‌های خصوصی است. او مدتی مدیر امور فرهنگی و
                                هنری «دفتر مخصوص شهبانو فرح پهلوی و از کارکنان موزه
                                هنرهای معاصر تهران و موزه رضا عباسی بود. آغداشلو تاکنون
                                تنها دو بار در ایران نمایشگاه فردی برگزار کرده ‌است، که اولین
                                آن در سال ۱۳۵۴ در انجمن ایران و آمریکا در تهران بود و در
                                دومین بار در آبان ۱۳۹۳ در گالری اثر او نوشته ‌هایی در نقد
                                هنری و سینمایی، پژوهش‌های تاریخ هنر و سفر نامه انجام
                                داده است
                            </p>
                        </div>
                        <div class="en-resume en">
                            <span class="bolder-title">Resume</span>
                            <p class="text-justify">
                                Aydin Aghdashloo, son of Mohammad-Beik
                                Aghdashloo (Haji Ouf) and Nahid Nakhjevan was
                                born on October 30, 1940 in the Afakhray
                                neighborhood of Rasht, Iran. His father was a
                                Caucasian-Azerbaijani and a member of the
                                Equality Caucasian Party and his family assumes
                                their surname from the small town of Agdash
                                After seeing Aydin's talent in painting at school
                                and his hand-made models, Mohammad-Beik
                                took him to Habib Mohammadi, a painter and a
                                teacher from Rasht. Aghdashloo's aunt and her
                                husband were merchants and wealthy ones.
                                While living with them, Aghdashloo passed much
                                time painting alone.
                            </p>
                        </div>
                        <button type="button" class="btn btn-default" data-toggle="modal"
                                data-target="#exhibition-list">لیست نمایشگاه‌ها
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="box box-4">
            <div class="suggestions">
                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="default-title">آثار پیشنهادی</h2>
                    </div>
                    <div class="col-xs-12">
                        <div class="default-tab tab-2 tab-interval">
                            <div class="tab-overflow">
                                <ul class="nav nav-tabs" id="alltab-2">
                                    <li class="active"><a data-toggle="tab" href="#all">همه آثار</a></li>
                                    <li><a data-toggle="tab" href="#all1">نقاشی</a></li>
                                    <li><a data-toggle="tab" href="#all2">عکاسی</a></li>
                                    <li><a data-toggle="tab" href="#all3">مجسمه</a></li>
                                    <li><a data-toggle="tab" href="#all3">نقاشی خط</a></li>
                                    <li><a data-toggle="tab" href="#all3">خوشنویسی</a></li>
                                    <li><a data-toggle="tab" href="#all3">چاپ دستی</a></li>
                                    <li><a data-toggle="tab" href="#all3">گرافیک</a></li>
                                    <li><a data-toggle="tab" href="#all3">طراحی</a></li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div id="all" class="tab-pane fade in active">
                                    <div class="owl-carousel" id="tab12">
                                        <div class="cols">
                                            <div class="col-img">
                                                <div class="tags tags-off persian-num">30 %</div>
                                                <img src="img/mainpage/rdbewaopdm840.jpg" width="840" height="840"
                                                     alt="آرتیبیشن"
                                                     class="img-responsive"/>
                                                <div class="tab-overly">
                                                    <a href="#" class="btn-see">
                                                        <span class="view-icon pull-right"></span>
                                                        <span>مشاهده اثر</span>
                                                    </a>
                                                    <a href="#" class="btn-sale">درخواست خرید</a>
                                                    <a href="#" class="like-icon"></a>
                                                </div>
                                            </div>
                                            <div class="col-body">
                                                <h6 class="col-title">
                                                    <span class="col-name">بهنام</span>
                                                    <span class="col-name">کامرانی</span>
                                                </h6>
                                                <div class="col-dimension">
                                                    <span class="col-dimension-title">ابعاد:</span>
                                                    <span class="col-dimension-body">
                                        <span class="dimension-width">60</span>
                                        <span> در </span>
                                        <span class="dimension-height">60</span>
                                    </span>
                                                </div>
                                                <div class="col-price">
                                                    <span class="col-price-num">1.400.000</span>
                                                    <span class="col-price-unit">تومان</span>
                                                    <span class="persian-num col-price-off">2.000.000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cols">
                                            <div class="col-img">
                                                <div class="tags tags-off persian-num">58 %</div>
                                                <img src="img/mainpage/hyxvpfinm840.jpg" width="840" height="840"
                                                     alt="آرتیبیشن"
                                                     class="img-responsive"/>
                                                <div class="tab-overly">
                                                    <a href="#" class="btn-see">
                                                        <span class="view-icon pull-right"></span>
                                                        <span>مشاهده اثر</span>
                                                    </a>
                                                    <a href="#" class="btn-sale">درخواست خرید</a>
                                                    <a href="#" class="like-icon"></a>
                                                </div>
                                            </div>
                                            <div class="col-body">
                                                <h6 class="col-title">
                                                    <span class="col-name">ساناز</span>
                                                    <span class="col-name">دزفولیان</span>
                                                </h6>
                                                <div class="col-dimension">
                                                    <span class="col-dimension-title">ابعاد:</span>
                                                    <span class="col-dimension-body">
                                        <span class="dimension-width">60</span>
                                        <span> در </span>
                                        <span class="dimension-height">60</span>
                                    </span>
                                                </div>
                                                <div class="col-price">
                                                    <span class="col-price-num">2.100.000</span>
                                                    <span class="col-price-unit">تومان</span>
                                                    <span class="persian-num col-price-off">5.000.000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cols">
                                            <div class="col-img">
                                                <div class="tags tags-off persian-num">30 %</div>
                                                <img src="img/mainpage/3.jpg" width="840" height="840" alt="آرتیبیشن"
                                                     class="img-responsive"/>
                                                <div class="tab-overly">
                                                    <a href="#" class="btn-see">
                                                        <span class="view-icon pull-right"></span>
                                                        <span>مشاهده اثر</span>
                                                    </a>
                                                    <a href="#" class="btn-sale">درخواست خرید</a>
                                                    <a href="#" class="like-icon"></a>
                                                </div>
                                            </div>
                                            <div class="col-body">
                                                <h6 class="col-title">
                                                    <span class="col-name">مرتضی</span>
                                                    <span class="col-name">گودرزی دیباج</span>
                                                </h6>
                                                <div class="col-dimension">
                                                    <span class="col-dimension-title">ابعاد:</span>
                                                    <span class="col-dimension-body">
                                        <span class="dimension-width">60</span>
                                        <span> در </span>
                                        <span class="dimension-height">60</span>
                                    </span>
                                                </div>
                                                <div class="col-price">
                                                    <span class="col-price-num">22.000.000</span>
                                                    <span class="col-price-unit">تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cols">
                                            <div class="col-img">
                                                <img src="img/mainpage/hezvtaokhv840.jpg" width="840" height="840"
                                                     alt="آرتیبیشن"
                                                     class="img-responsive"/>
                                                <div class="tab-overly">
                                                    <a href="#" class="btn-see">
                                                        <span class="view-icon pull-right"></span>
                                                        <span>مشاهده اثر</span>
                                                    </a>
                                                    <a href="#" class="btn-sale">درخواست خرید</a>
                                                    <a href="#" class="like-icon"></a>
                                                </div>
                                            </div>
                                            <div class="col-body">
                                                <h6 class="col-title">
                                                    <span class="col-name">سعید</span>
                                                    <span class="col-name">امدادیان</span>
                                                </h6>
                                                <div class="col-dimension">
                                                    <span class="col-dimension-title">ابعاد:</span>
                                                    <span class="col-dimension-body">
                                        <span class="dimension-width">60</span>
                                        <span> در </span>
                                        <span class="dimension-height">60</span>
                                    </span>
                                                </div>
                                                <div class="col-price">
                                                    <span class="col-price-num">6.000.000</span>
                                                    <span class="col-price-unit">تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="all1" class="tab-pane fade">
                                    <h3>Menu 1</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea
                                        commodo
                                        consequat.</p>
                                </div>
                                <div id="all2" class="tab-pane fade">
                                    <h3>Menu 2</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque
                                        laudantium,
                                        totam rem aperiam.</p>
                                </div>
                                <div id="all3" class="tab-pane fade">
                                    <h3>Menu 3</h3>
                                    <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                        dicta sunt
                                        explicabo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="box box-5">
            <div class="recently-view">
                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="default-title">بازدیدهای اخیر من</h2>
                    </div>
                    <div class="col-xs-12">
                        <div class="default-tab tab-3 tab-interval">
                            <div class="tab-overflow">
                                <ul class="nav nav-tabs" id="alltab-3">
                                    <li class="active"><a data-toggle="tab" href="#view">همه آثار</a></li>
                                    <li><a data-toggle="tab" href="#view1">نقاشی</a></li>
                                    <li><a data-toggle="tab" href="#view2">عکاسی</a></li>
                                    <li><a data-toggle="tab" href="#view3">مجسمه</a></li>
                                    <li><a data-toggle="tab" href="#view3">نقاشی خط</a></li>
                                    <li><a data-toggle="tab" href="#view3">خوشنویسی</a></li>
                                    <li><a data-toggle="tab" href="#view3">چاپ دستی</a></li>
                                    <li><a data-toggle="tab" href="#view3">گرافیک</a></li>
                                    <li><a data-toggle="tab" href="#view3">طراحی</a></li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div id="view" class="tab-pane fade in active">
                                    <div class="owl-carousel" id="tab4">
                                        <div class="cols">
                                            <div class="col-img">
                                                <img src="img/mainpage/ayvglbkdfo@3x.jpg" width="840" height="840"
                                                     alt="آرتیبیشن"
                                                     class="img-responsive"/>
                                                <div class="tab-overly">
                                                    <a href="#" class="btn-see">
                                                        <span class="view-icon pull-right"></span>
                                                        <span>مشاهده اثر</span>
                                                    </a>
                                                    <a href="#" class="btn-sale">درخواست خرید</a>
                                                    <a href="#" class="like-icon"></a>
                                                </div>
                                            </div>
                                            <div class="col-body">
                                                <h6 class="col-title">
                                                    <span class="col-name">مجید</span>
                                                    <span class="col-name">کورنگ بهشتی</span>
                                                </h6>
                                                <div class="col-dimension">
                                                    <span class="col-dimension-title">ابعاد:</span>
                                                    <span class="col-dimension-body">
                                        <span class="dimension-width">60</span>
                                        <span> در </span>
                                        <span class="dimension-height">60</span>
                                    </span>
                                                </div>
                                                <div class="col-price">
                                                    <span class="col-price-num">2.100.000</span>
                                                    <span class="col-price-unit">تومان</span>
                                                    <span class="persian-num col-price-off">5.000.000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cols">
                                            <div class="col-img">
                                                <div class="tags tags-spacial">ویژه</div>
                                                <div class="tags tags-off persian-num">30 %</div>
                                                <img src="img/mainpage/3.jpg" width="840" height="840" alt="آرتیبیشن"
                                                     class="img-responsive"/>
                                                <div class="tab-overly">
                                                    <a href="#" class="btn-see">
                                                        <span class="view-icon pull-right"></span>
                                                        <span>مشاهده اثر</span>
                                                    </a>
                                                    <a href="#" class="btn-sale">درخواست خرید</a>
                                                    <a href="#" class="like-icon"></a>
                                                </div>
                                                <div class="tab-overly">
                                                    <a href="#" class="btn-see">
                                                        <span class="view-icon pull-right"></span>
                                                        <span>مشاهده اثر</span>
                                                    </a>
                                                    <a href="#" class="btn-sale">درخواست خرید</a>
                                                    <a href="#" class="like-icon"></a>
                                                </div>
                                            </div>
                                            <div class="col-body">
                                                <h6 class="col-title">
                                                    <span class="col-name">مرتضی</span>
                                                    <span class="col-name">گودرزی دیباج</span>
                                                </h6>
                                                <div class="col-dimension">
                                                    <span class="col-dimension-title">ابعاد:</span>
                                                    <span class="col-dimension-body">
                                        <span class="dimension-width">60</span>
                                        <span> در </span>
                                        <span class="dimension-height">60</span>
                                    </span>
                                                </div>
                                                <div class="col-price">
                                                    <span class="col-price-num">22.000.000</span>
                                                    <span class="col-price-unit">تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cols finished">
                                            <div class="col-img">
                                                <img src="img/mainpage/rdbewaopdm840.jpg" width="840" height="840"
                                                     alt="آرتیبیشن"
                                                     class="img-responsive"/>
                                                <div class="tab-overly">
                                                    <a href="#" class="btn-see">
                                                        <span class="view-icon pull-right"></span>
                                                        <span>مشاهده اثر</span>
                                                    </a>
                                                    <a href="#" class="btn-sale">درخواست خرید</a>
                                                    <a href="#" class="like-icon"></a>
                                                </div>
                                            </div>
                                            <div class="col-body ">
                                                <div class="finished-tag">فروخته شد</div>
                                                <h6 class="col-title">
                                                    <span class="col-name">بهنام</span>
                                                    <span class="col-name">کامرانی</span>
                                                </h6>
                                                <div class="col-dimension">
                                                    <span class="col-dimension-title">ابعاد:</span>
                                                    <span class="col-dimension-body">
                                        <span class="dimension-width">60</span>
                                        <span> در </span>
                                        <span class="dimension-height">60</span>
                                    </span>
                                                </div>
                                                <div class="col-price">
                                                    <span class="col-price-num">1.400.000</span>
                                                    <span class="col-price-unit">تومان</span>
                                                    <span class="persian-num col-price-off">2.000.000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cols">
                                            <div class="col-img">
                                                <img src="img/mainpage/hezvtaokhv840.jpg" width="840" height="840"
                                                     alt="آرتیبیشن"
                                                     class="img-responsive"/>
                                                <div class="tab-overly">
                                                    <a href="#" class="btn-see">
                                                        <span class="view-icon pull-right"></span>
                                                        <span>مشاهده اثر</span>
                                                    </a>
                                                    <a href="#" class="btn-sale">درخواست خرید</a>
                                                    <a href="#" class="like-icon"></a>
                                                </div>
                                            </div>
                                            <div class="col-body">
                                                <h6 class="col-title">
                                                    <span class="col-name">سعید</span>
                                                    <span class="col-name">امدادیان</span>
                                                </h6>
                                                <div class="col-dimension">
                                                    <span class="col-dimension-title">ابعاد:</span>
                                                    <span class="col-dimension-body">
                                        <span class="dimension-width">60</span>
                                        <span> در </span>
                                        <span class="dimension-height">60</span>
                                    </span>
                                                </div>
                                                <div class="col-price">
                                                    <span class="col-price-num">6.000.000</span>
                                                    <span class="col-price-unit">تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="view1" class="tab-pane fade">
                                    <h3>Menu 1</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea
                                        commodo
                                        consequat.</p>
                                </div>
                                <div id="view2" class="tab-pane fade">
                                    <h3>Menu 2</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque
                                        laudantium,
                                        totam rem aperiam.</p>
                                </div>
                                <div id="view3" class="tab-pane fade">
                                    <h3>Menu 3</h3>
                                    <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                        dicta sunt
                                        explicabo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
      
          </div>
          <BasketFooterPanel />
        </div>
      </>
    )
}

export default PanleMyAlbums;
