import React from "react";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import { Breadcrumb, Pagination, Tabs } from 'antd';
import { t } from 'i18next';

import promotion_image from '../../assets/img/promotion/promotion-1.png'
import more_icon from '../../assets/img/more.svg'
import logo_icon from '../../assets/img/promotion/logo-icon.png'
import info_icon from '../../assets/img/info.svg'
import promotion2 from '../../assets/img/promotion/promotion-2.jpg'
import promotion3 from '../../assets/img/promotion/promotion-3.jpg'
import promotion4 from '../../assets/img/promotion/promotion-4.jpg'
import dates_icon from '../../assets/img/dates.svg'
import filter_icon from '../../assets/img/Filter.svg'
import clear_icon from '../../assets/img/clear.svg'
import awards_icon from '../../assets/img/awards.svg'
import FilterSidBarInArtworks from "../GalleryIntroduction/FilterSidBarInArtworks";
import Artwork from "../../components/Artwork/Artwork";
import Promotion from "../GalleryPanelDashboard/Promotion";





function PromotionCompetition() {
    return (
        <>
            <div className=" mx-auto px-0 w-100">
                <div className="container">
                    <Header />
                </div>
                <div className=" promotions-banner finished">
                    <div className="container">
                        <div className="row dir">
                            <div className="col-sm-6">
                                <img src={promotion_image} width="340" height="262" alt="" className="center-block img-responsive" />
                            </div>
                            <div className="col-sm-6 center-xs mrgt16-xs text-dir">
                                <span className="finished-tag">{t("promotion-competition.banner.finished")}</span>
                                <h6>{t("promotion-competition.banner.promotions")}</h6>
                                <h3>Lighting Illustration Contest</h3>
                                <div className="promotion-button">
                                    <a href="#promotion" className="btn btn-default bolder-title">{t("promotion-competition.banner.competition_info_btn")}</a>
                                    <a href="#" className="btn btn-pink bolder-title" style={{ margin: "0 16px" }}>{t("promotion-competition.banner.register_btn")}</a>
                                </div>
                                <div className="promotion-date">
                                    <span>1</span>
                                    <span>-</span>
                                    <span>25</span>
                                    <span>May</span>
                                </div>
                                <a href="#" className="promotion-link" data-toggle="modal" data-target="#promotion-result">
                                    <span>{t("promotion-competition.banner.participants")}</span>
                                    <i className="glyphicon glyphicon-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <button className="btn-pro">
                        <img src={more_icon} width="40" height="40" alt="" style={{ left: "0" }} />
                    </button>
                </div>




                <div className="container dir">
                    <div className="promotin-title text-dir">
                        <h6>
                            <img src={logo_icon} width="259" height="259" alt="" className="img-responsive pull-dir" />
                            <span>{t("promotion-competition.arthibition_holding_competition")}</span>
                        </h6>
                        <h2>مسابقه تصویرگری روشنایی</h2>
                    </div>
                    <div className="promotion-body text-dir">
                        <div className="row">
                            <div className="col-sm-7">
                                <p className="mrgt40">
                                    این مسابقه رقابتی است با هدف فراهم کردن فرصتی برای به اشتراک گذاشتن آثار متنوع هنری ایجاد شده با
                                    استفاده از ارتباطات
                                    طرفداران در سراسر جهان برای الهام گرفتن از یکدیگر و کمک به تجارب خلاقانه آن ها. در این مسابقه
                                    هیچ دسته بندی و موضوع خاصی وجود ندارد. این جایزه عمدا این هدف را برای تشویق تخیل نگه داشته است
                                    متقاضیان میبایست هنرمندانی انفرادی باشند نه گروهی. ورود محدود به آثار هنری است که از طریق مسابقه
                                    یا نمایشگاه دیگری (به استثنای نمایشگاه‌ شخصی یا صفحات رسانه‌های اجتماعی شخصی هنرمند) قبلا در
                                    معرض نمایش عمومی قرار نگرفته‌اند. برای هر نفر فقط یک قطعه اثر هنری ارسال می‌شود
                                    .آثار هنری شما باید با استفاده از محصولات ایجاد شده باشد
                                    .هزینه‌ی ورودی وجود ندارد و این مسابقه رایگان است
                                </p>
                                <h5 className="mrgt40">{t("promotion-competition.condition")}</h5>
                                <p>
                                    برای همه در سراسر جهان باز است هیچ گونه محدودیتی برای ملیت، سن، تجربه، محل اقامت و غیره وجود
                                    ندارد. کلیه متقاضیان
                                    .زیر ۱۳ سال نیاز به رضایت والدین یا سرپرست قانونی دارند
                                </p>
                                <h5 className="mrgt40">
                                    {t("promotion-competition.prize")}
                                </h5>
                                <p>
                                    .این جایزه بزرگ شامل ۱۰ جایزه ۱ میلیون تومانی، دعوت از مراسم اهدای جوایز در گالری آرتیبیشن
                                    می‌باشد
                                    .آخرین مهلت ثبت نام ۱۵ مرداد ۱۳۹۹ می‌باشد
                                </p>
                            </div>
                            <div className="col-sm-5">
                                <div className="promotion-detail">
                                    <h3>
                                        <img src={info_icon} width="18" height="18" alt="" className="pull-dir" />
                                        <span>{t("promotion-competition.competition_info")}</span>
                                    </h3>
                                    <ul>
                                        <li>
                                            <span>موضوعات نقاشی:</span>
                                            <span>طبیعت، حیوانات</span>
                                        </li>
                                        <li>
                                            <span>برگزارکننده:</span>
                                            <span>گالری آرتیبیشن</span>
                                        </li>
                                        <li>
                                            <span>ورود رایگان برای تمامی علاقه‌مندان</span>
                                        </li>
                                    </ul>
                                    <h3>
                                        <img src={dates_icon} width="18" height="18" alt="" className="pull-dir" />
                                        <span>{t("promotion-competition.key_dates")}</span>
                                    </h3>
                                    <ul>
                                        <li>
                                            <span>مهلت ارسال آثار:</span>
                                            <span>۱ تا ۱۵ مرداد</span>
                                        </li>
                                        <li>
                                            <span>داوری آثار:</span>
                                            <span>۱۶ تا ۲۰ مرداد</span>
                                        </li>
                                        <li>
                                            <span>اعلام نتایج:</span>
                                            <span>۲۰ مرداد</span>
                                        </li>
                                    </ul>
                                    <h3>
                                        <img src={awards_icon} width="18" height="18" alt="" className="pull-dir" />
                                        <span>{t("promotion-competition.prize_")}</span>
                                    </h3>
                                    <ul>
                                        <li>میلیون تومان برای ۱۰ نفر</li>
                                        <li>رونمایی از ۳۰ اثر برگزیده در نمایشگاه <span className="bluestyle">گالری آرتیبیشن</span></li>
                                    </ul>
                                    <button className="btn btn-continue" type="button">{t("promotion-competition.join_upload_btn")}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>











                <div className="container">
                    <div className="promotion-result">
                        <h2 className="default-title text-dir">{t("promotion-competition.selected_artworks")}</h2>
                        <div className="row dir">
                            <div className="col-sm-4 text-dir">
                                <h3 className="ranks pull-dir persian-num">1</h3>
                                <div className="proresult-img">
                                    <div className="col-img">
                                        <img src={promotion2} width="840" height="1130" alt="نفر اول" className="img-responsive" />
                                    </div>
                                    <div className="col-body">
                                        <h6 className="col-title">
                                            <span className="col-name">آیدین</span>
                                            <span className="col-name">آغداشلو</span>
                                        </h6>
                                        <div className="col-dimension">
                                            <span className="col-dimension-title">{t("promotion-competition.artwork.size")}</span>
                                            <span className="col-dimension-body">
                                                <span className="dimension-width">60</span>
                                                <span>{t("promotion-competition.artwork.x")}</span>
                                                <span className="dimension-height">80</span>
                                            </span>
                                        </div>
                                        <div className="col-price">
                                            <span className="col-price-num">50.000.000</span>
                                            <span className="col-price-unit">{t("promotion-competition.artwork.price_unit")}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 text-dir">
                                <h3 className="ranks pull-dir persian-num">2</h3>
                                <div className="proresult-img">
                                    <div className="col-img">
                                        <img src={promotion3} width="840" height="850" alt="نفر دوم" className="img-responsive" />
                                    </div>
                                    <div className="col-body">
                                        <h6 className="col-title">
                                            <span className="col-name">آیدین</span>
                                            <span className="col-name">آغداشلو</span>
                                        </h6>
                                        <div className="col-dimension">
                                            <span className="col-dimension-title">{t("promotion-competition.artwork.size")}</span>
                                            <span className="col-dimension-body">
                                                <span className="dimension-width">60</span>
                                                <span>{t("promotion-competition.artwork.x")}</span>
                                                <span className="dimension-height">60</span>
                                            </span>
                                        </div>
                                        <div className="col-price">
                                            <span className="col-price-num">50.000.000</span>
                                            <span className="col-price-unit">{t("promotion-competition.artwork.price_unit")}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 text-dir">
                                <h3 className="ranks pull-dir persian-num">3</h3>
                                <div className="proresult-img">
                                    <div className="col-img">
                                        <img src={promotion4} width="840" height="1120" alt="نفر اول" className="img-responsive" />
                                    </div>
                                    <div className="col-body">
                                        <h6 className="col-title">
                                            <span className="col-name">آیدین</span>
                                            <span className="col-name">آغداشلو</span>
                                        </h6>
                                        <div className="col-dimension">
                                            <span className="col-dimension-title">{t("promotion-competition.artwork.size")}</span>
                                            <span className="col-dimension-body">
                                                <span className="dimension-width">60</span>
                                                <span>{t("promotion-competition.artwork.x")}</span>
                                                <span className="dimension-height">80</span>
                                            </span>
                                        </div>
                                        <div className="col-price">
                                            <span className="col-price-num">50.000.000</span>
                                            <span className="col-price-unit">{t("promotion-competition.artwork.price_unit")}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="default-content">
                            <div className="content-header">
                                <div className="row dir">
                                    <div className="col-sm-3 col-xs-6">
                                        <div type="button" className="filter-btn">
                                            <img src={filter_icon} width="16" height="15" alt="" />
                                            <span>{t("promotion-competition.filter")}</span>
                                            <button className="btn clear-tag">
                                                <img src={clear_icon} width="10" height="10" alt="" />
                                                <span>{t("promotion-competition.remove_all")}</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 d-none-orginal d-sm-block d-md-block d-lg-block"></div>
                                    <div className="col-xs-6">
                                        <div className="form-group pull-dir-rev">
                                            <select className="form-control" id="sel1">
                                                <option>{t("promotion-competition.last_update_select")}</option>
                                                <option>{t("promotion-competition.sell_select")}</option>
                                                <option>{t("promotion-competition.visite_select")}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-body">
                                <div className="row dir">





                                    <FilterSidBarInArtworks />







                                    <div className="col-md-9">
                                        <div className="row-gridimg">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <Artwork />
                                                    <Artwork />
                                                    <Artwork />
                                                </div>
                                                <div className="col-sm-4">
                                                    <Artwork />
                                                    <Artwork />
                                                </div>
                                                <div className="col-sm-4">
                                                    <Artwork />
                                                    <Artwork />
                                                    <Artwork />
                                                    <Artwork />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-pagination">
                                            <Pagination total={50} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>







            </div>
            <Footer />
        </>
    )
}

export default PromotionCompetition