import React, { useState } from "react";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import SidebarPanel from "../../components/SidebarPanel/SidebarPanel";
import { t } from "i18next";
import { GetLanguage } from "../../utils/utils";
import classnames from "classnames";

import flesh_left from "../../assets/img/felsh-left.png";
import edit_icon from "../../assets/img/edit_name.svg";
import rdbewaopdm840 from "../../assets/img/mainpage/rdbewaopdm840.jpg";
import ModalAddGallery from "./ModalAddGallery";
import RecentlyVeiws from "./RecentlyVeiws";
import Suggestions from "./Suggestions";

function PanleMyAlbums() {
  const [visibleAddGallery, setVisibleAddGallery] = useState(false);

  const handleShowAddGallery = () => {
    setVisibleAddGallery(true);
  };

  return (
    <>
      <HeaderPanel t={t} />
      <div className="panel-style margin-top-20">
        <SidebarPanel />
        <div className="custom-container">
          <div className="d-flex box-dir-reverse box box-1">
            <div className="text-dir">
              <h2 className="greencolor text-dir">ثبت گالری</h2>
              <p className="text-dir">اگر صاحب گالری هستید آن را ثبت نمایید</p>
            </div>
            <a href="#" className="btn-box-1 btn-green pull-left">
              <img
                src={flesh_left}
                width="16"
                height="16"
                className="center-block"
              />
            </a>
            <div className="clearfix"></div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="box box-2">
                <div className="sec4">
                  <div className="public-header">
                    <div className="d-flex box-dir-reverse">
                      <div className="col">
                        <div className="d-flex pull-dir">
                          <h2 className="default-title ">مجموعه‌ها</h2>
                        </div>
                      </div>
                      <div className="col w-100">
                        <div className="d-flex justify-custom w-100">
                          <button
                            onClick={handleShowAddGallery}
                            type="button"
                            className="btn btn-more"
                            data-target="#addnewcollection"
                            data-toggle="modal"
                          >
                            افزودن مجموعه
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pull-dir"></div>
                  </div>
                  <table className="table upload-art dir">
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
                        <td data-label="عنوان">
                          <span>Lorem</span>
                        </td>
                        <td data-label="تعداد آثار">
                          <span>10</span>
                        </td>
                        <td data-label="آخرین ویرایش">
                          <span>20/05/02</span>
                        </td>
                        <td data-label="جزئیات">
                          <button
                            type="button"
                            className="btn-outline-blue"
                            data-target="#addnewcollection"
                            data-toggle="modal"
                          >
                            ویرایش
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="ردیف">2</td>
                        <td data-label="عنوان">
                          <span>Ipsum</span>
                        </td>
                        <td data-label="تعداد آثار">
                          <span>11</span>
                        </td>
                        <td data-label="آخرین ویرایش">
                          <span>19/03/03</span>
                        </td>
                        <td data-label="جزئیات">
                          <button
                            type="button"
                            className="btn-outline-blue"
                            data-target="#addnewcollection"
                            data-toggle="modal"
                          >
                            ویرایش
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className=" box box-3">
                <div className="d-flex box-dir-reverse public-header">
                  <div className="col-9">
                    <div className="d-flex pull-dir">
                      <h2 className="default-title text-dir">اطلاعات هنری</h2>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex justify-custom">
                      <a href="#">
                        <img src={edit_icon} width="32" height="32" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="box3-body">
                  <div
                    className={classnames("", {
                      "fa-resume": GetLanguage() === "fa-IR",
                      "d-none": GetLanguage() === "en-US",
                    })}
                    // className="fa-resume"
                  >
                    <div className="bolder-title text-dir">رزومه</div>
                    <p className="text-justify">
                      ،آیدین آغداشلو (زاده ۸ آبان ۱۳۱۹ در رشت) نقاش، گرافیست
                      نویسنده، منتقد فیلم تصویرگر کتاب‌های درسی ایران، مجلات، و
                      مؤسسه‌های خصوصی است. او مدتی مدیر امور فرهنگی و هنری «دفتر
                      مخصوص شهبانو فرح پهلوی و از کارکنان موزه هنرهای معاصر
                      تهران و موزه رضا عباسی بود. آغداشلو تاکنون تنها دو بار در
                      ایران نمایشگاه فردی برگزار کرده ‌است، که اولین آن در سال
                      ۱۳۵۴ در انجمن ایران و آمریکا در تهران بود و در دومین بار
                      در آبان ۱۳۹۳ در گالری اثر او نوشته ‌هایی در نقد هنری و
                      سینمایی، پژوهش‌های تاریخ هنر و سفر نامه انجام داده است
                    </p>
                  </div>
                  <div className="en-resume en">
                    <span className="bolder-title">Resume</span>
                    <p className="text-justify">
                      Aydin Aghdashloo, son of Mohammad-Beik Aghdashloo (Haji
                      Ouf) and Nahid Nakhjevan was born on October 30, 1940 in
                      the Afakhray neighborhood of Rasht, Iran. His father was a
                      Caucasian-Azerbaijani and a member of the Equality
                      Caucasian Party and his family assumes their surname from
                      the small town of Agdash After seeing Aydin's talent in
                      painting at school and his hand-made models, Mohammad-Beik
                      took him to Habib Mohammadi, a painter and a teacher from
                      Rasht. Aghdashloo's aunt and her husband were merchants
                      and wealthy ones. While living with them, Aghdashloo
                      passed much time painting alone.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-default"
                    data-toggle="modal"
                    data-target="#exhibition-list"
                  >
                    لیست نمایشگاه‌ها
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="box box-4">
            <div className="suggestions">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="default-title">آثار پیشنهادی</h2>
                    </div>
                    <div className="col-xs-12">
                        <div className="default-tab tab-2 tab-interval">
                            <div className="tab-overflow">
                                <ul className="nav nav-tabs" id="alltab-2">
                                    <li className="active"><a data-toggle="tab" href="#all">همه آثار</a></li>
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
                            <div className="tab-content">
                                <div id="all" className="tab-pane fade in active">
                                    <div className="owl-carousel" id="tab12">
                                        <div className="cols">
                                            <div className="col-img">
                                                <div className="tags tags-off persian-num">30 %</div>
                                                <img src={rdbewaopdm840} width="840" height="840"
                                                     alt="آرتیبیشن"
                                                     className="img-responsive"/>
                                                <div className="tab-overly">
                                                    <a href="#" className="btn-see">
                                                        <span className="view-icon pull-right"></span>
                                                        <span>مشاهده اثر</span>
                                                    </a>
                                                    <a href="#" className="btn-sale">درخواست خرید</a>
                                                    <a href="#" className="like-icon"></a>
                                                </div>
                                            </div>
                                            <div className="col-body">
                                                <h6 className="col-title">
                                                    <span className="col-name">بهنام</span>
                                                    <span className="col-name">کامرانی</span>
                                                </h6>
                                                <div className="col-dimension">
                                                    <span className="col-dimension-title">ابعاد:</span>
                                                    <span className="col-dimension-body">
                                        <span className="dimension-width">60</span>
                                        <span> در </span>
                                        <span className="dimension-height">60</span>
                                    </span>
                                                </div>
                                                <div className="col-price">
                                                    <span className="col-price-num">1.400.000</span>
                                                    <span className="col-price-unit">تومان</span>
                                                    <span className="persian-num col-price-off">2.000.000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cols">
                                            <div className="col-img">
                                                <div className="tags tags-off persian-num">58 %</div>
                                                <img src="img/mainpage/hyxvpfinm840.jpg" width="840" height="840"
                                                     alt="آرتیبیشن"
                                                     className="img-responsive"/>
                                                <div className="tab-overly">
                                                    <a href="#" className="btn-see">
                                                        <span className="view-icon pull-right"></span>
                                                        <span>مشاهده اثر</span>
                                                    </a>
                                                    <a href="#" className="btn-sale">درخواست خرید</a>
                                                    <a href="#" className="like-icon"></a>
                                                </div>
                                            </div>
                                            <div className="col-body">
                                                <h6 className="col-title">
                                                    <span className="col-name">ساناز</span>
                                                    <span className="col-name">دزفولیان</span>
                                                </h6>
                                                <div className="col-dimension">
                                                    <span className="col-dimension-title">ابعاد:</span>
                                                    <span className="col-dimension-body">
                                        <span className="dimension-width">60</span>
                                        <span> در </span>
                                        <span className="dimension-height">60</span>
                                    </span>
                                                </div>
                                                <div className="col-price">
                                                    <span className="col-price-num">2.100.000</span>
                                                    <span className="col-price-unit">تومان</span>
                                                    <span className="persian-num col-price-off">5.000.000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cols">
                                            <div className="col-img">
                                                <div className="tags tags-off persian-num">30 %</div>
                                                <img src="img/mainpage/3.jpg" width="840" height="840" alt="آرتیبیشن"
                                                     className="img-responsive"/>
                                                <div className="tab-overly">
                                                    <a href="#" className="btn-see">
                                                        <span className="view-icon pull-right"></span>
                                                        <span>مشاهده اثر</span>
                                                    </a>
                                                    <a href="#" className="btn-sale">درخواست خرید</a>
                                                    <a href="#" className="like-icon"></a>
                                                </div>
                                            </div>
                                            <div className="col-body">
                                                <h6 className="col-title">
                                                    <span className="col-name">مرتضی</span>
                                                    <span className="col-name">گودرزی دیباج</span>
                                                </h6>
                                                <div className="col-dimension">
                                                    <span className="col-dimension-title">ابعاد:</span>
                                                    <span className="col-dimension-body">
                                        <span className="dimension-width">60</span>
                                        <span> در </span>
                                        <span className="dimension-height">60</span>
                                    </span>
                                                </div>
                                                <div className="col-price">
                                                    <span className="col-price-num">22.000.000</span>
                                                    <span className="col-price-unit">تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cols">
                                            <div className="col-img">
                                                <img src="img/mainpage/hezvtaokhv840.jpg" width="840" height="840"
                                                     alt="آرتیبیشن"
                                                     className="img-responsive"/>
                                                <div className="tab-overly">
                                                    <a href="#" className="btn-see">
                                                        <span className="view-icon pull-right"></span>
                                                        <span>مشاهده اثر</span>
                                                    </a>
                                                    <a href="#" className="btn-sale">درخواست خرید</a>
                                                    <a href="#" className="like-icon"></a>
                                                </div>
                                            </div>
                                            <div className="col-body">
                                                <h6 className="col-title">
                                                    <span className="col-name">سعید</span>
                                                    <span className="col-name">امدادیان</span>
                                                </h6>
                                                <div className="col-dimension">
                                                    <span className="col-dimension-title">ابعاد:</span>
                                                    <span className="col-dimension-body">
                                        <span className="dimension-width">60</span>
                                        <span> در </span>
                                        <span className="dimension-height">60</span>
                                    </span>
                                                </div>
                                                <div className="col-price">
                                                    <span className="col-price-num">6.000.000</span>
                                                    <span className="col-price-unit">تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="all1" className="tab-pane fade">
                                    <h3>Menu 1</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea
                                        commodo
                                        consequat.</p>
                                </div>
                                <div id="all2" className="tab-pane fade">
                                    <h3>Menu 2</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque
                                        laudantium,
                                        totam rem aperiam.</p>
                                </div>
                                <div id="all3" className="tab-pane fade">
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
        </div> */}

          <Suggestions />
          <RecentlyVeiws />

          <ModalAddGallery
            setVisibleAddGallery={setVisibleAddGallery}
            visibleAddGallery={visibleAddGallery}
          />
        </div>
        <BasketFooterPanel />
      </div>
    </>
  );
}

export default PanleMyAlbums;
