import React from 'react';
import searchIcon from '../../assets/img/search.svg';
import filterIcon from '../../assets/img/Filter.svg';
import logo from '../../assets/img/logo.svg';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {isLogin, GetLanguage} from '../../utils/utils'

function Header() {
    
    const {t, i18n} = useTranslation();
    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }



    return (
       
    <div class="default-header ">
        <div class="row">
            <div class="col-md-4 col-sm-3 col-xs-6">
                <div class="artibition-logo">
                    <Link to="/">
                        <img src={logo} width="160" height="42" alt="Artibition-logo"/>
                    </Link>
                </div>
            </div>
            <div class="col-md-4 col-sm-5 hidden-xs">
                <div class="search-container dropdown">
                    <input type="text" placeholder="جستجوی نام اثر، نام هنرمند، گالری و غیره" name="search"
                           autocomplete="off" class="mainsearch"/>
                    <button class="btn-searchicon" type="submit">
                        <img src={searchIcon} width="24" height="24" alt="جستجو"/></button>
                    <button class="btn-searchfilter hidden-sm" type="button" data-toggle="collapse"
                            data-target="#top-filter">
                        <img src={filterIcon} height="15" width="16" alt="فیلتر"/>
                        <span>فیلتر</span>
                    </button>
                </div>
                <div class="autocomplete">
                    <ul class="predict">
                        <li><a href="#">پرویز تناولی</a></li>
                        <li><a href="#">پرویز اعتصامی</a></li>
                        <li><a href="#">پرتو فرومنش</a></li>
                        <li><a href="#">پروین اعتصامی</a></li>
                        <li><a href="#">پرتره</a></li>
                        <li><a href="#">گالری هان - نمایشگاه عکاسی پرندگان</a></li>
                        <li><a href="#">گالری آرتیبیشن - نمایشگاه نقاشی آبرنگ پرتره</a></li>
                    </ul>
                    <div class="predict-cat">
                        <span class="graycolor">فیلتر نتایج بر اساس:</span>
                        <ul>
                            <li><a href="#">هنرمند</a></li>
                            <li><a href="#">نام اثر</a></li>
                            <li><a href="#">نمایشگاه</a></li>
                            <li><a href="#">گالری</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="collapse filter-dropdown hidden-sm bg-filter-header" id="top-filter">
                <div  class="container ">


     

                   

                   

                    

                    <div class="col-md-2 ">
                        
                        <h3 class="filter-menu-title">ابعاد</h3>
                        <div class="filter-menu-body">
                            <label class="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>کوچک</span>
                                <span class="checkmark"></span>
                            </label>
                            <label class="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>متوسط</span>
                                <span class="checkmark"></span>
                            </label>
                            <label class="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>بزرگ</span>
                                <span class="checkmark"></span>
                            </label>
                            <label class="lable-checkbox">
                                <input type="checkbox" value="" id="custom-dim"/>
                                <span>ابعاد دلخواه</span>
                                <span class="checkmark"></span>
                            </label>
                            <div class="add-dimention">
                                <div class="add-dimention-row">
                                    <div class="graycolor">عرض
                                        <span data-toggle="modal" data-target="#select-dimention"
                                              class="edit-dimention"></span>
                                    </div>
                                    <span class="persian-num">60</span>
                                    <span>تا</span>
                                    <span class="persian-num">90</span>
                                    <span>سانتی‌متر</span>
                                </div>
                                <div class="add-dimention-row">
                                    <div class="graycolor">طول
                                        <span data-toggle="modal" data-target="#select-dimention"
                                              class="edit-dimention"></span>
                                    </div>
                                    <span class="persian-num">60</span>
                                    <span>تا</span>
                                    <span class="persian-num">90</span>
                                    <span>سانتی‌متر</span>
                                </div>
                                <div class="add-dimention-row">
                                    <div class="graycolor">ارتفاع
                                        <span data-toggle="modal" data-target="#select-dimention"
                                              class="edit-dimention"></span>
                                    </div>
                                    <span class="persian-num">60</span>
                                    <span>تا</span>
                                    <span class="persian-num">90</span>
                                    <span>سانتی‌متر</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-2 ">
                        
                        <h3 class="filter-menu-title">رنگ</h3>
                        <div class="filter-menu-body">
                            <table class="table table-responsive color">
                                <tbody>
                                <tr>
                                    <td id="color201"></td>
                                    <td id="color202"></td>
                                    <td id="color203"></td>
                                    <td id="color204"></td>
                                </tr>
                                <tr>
                                    <td id="color205"></td>
                                    <td id="color206"></td>
                                    <td id="color207"></td>
                                    <td id="color208"></td>
                                </tr>
                                <tr>
                                    <td id="color209"></td>
                                    <td id="color210"></td>
                                    <td id="color211"></td>
                                    <td id="color212"></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                     {/* <div class="col-md-3 col-md-offset-1 bg-primary"> */}
                     <div class="col-md-3 ">
                        
                        <h3 class="filter-menu-title">تخفیف</h3>
                        <div class="filter-menu-body">
                            <label class="switch pull-right">
                                <input type="checkbox" checked/>
                                <span class="switchbtn round"></span>
                                <span class="label-switchbtn">نمایش آثار تخفیف‌دار</span>
                            </label>
                            <div class="clearfix"></div>
                            <div class="md-mrgt30">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span>تخفیف بالای 20 درصد</span>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span>تخفیف بالای 30 درصد</span>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span>تخفیف بالای 50 درصد</span>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-2 ">
                       
                        <h3 class="filter-menu-title">قیمت</h3>
                        <div class="filter-menu-body">
                            <div class="rangeslider">
                                <div id="slider" dir="rtl"></div>
                            </div>
                            <div class="row row-inputs">
                                <div class="col-xs-12 ">
                                    <label>حداقل قیمت (تومان)</label>
                                    <input type="text" class="value persian-num" data-index="0" value="0"/>
                                </div>
                                <div class="col-xs-12 mrgt16">
                                    <label>حداکثر قیمت (تومان)</label>
                                    <input type="text" class="value  persian-num" data-index="1" value="4"/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-2 ">
                        
                        <h3 class="filter-menu-title">رشته‌ هنری</h3>
                        <div class="filter-menu-body">
                            <label class="lable-checkbox">
                                <input type="checkbox" checked value=""/>
                                <span>همه رشته‌ها</span>
                                <span class="checkmark"></span>
                            </label>
                            <label class="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>نقاشی</span>
                                <span class="checkmark"></span>
                            </label>
                            <label class="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>عکاسی</span>
                                <span class="checkmark"></span>
                            </label>
                            <label class="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>مجسمه</span>
                                <span class="checkmark"></span>
                            </label>
                            <label class="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>نقاشی خط</span>
                                <span class="checkmark"></span>
                            </label>
                            <label class="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>خوشنویسی</span>
                                <span class="checkmark"></span>
                            </label>
                            <label class="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>چاپ دستی</span>
                                <span class="checkmark"></span>
                            </label>
                            <label class="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>گرافیک</span>
                                <span class="checkmark"></span>
                            </label>
                            <label class="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>طراحی</span>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="clearfix"></div>
                    <div class="col-md-4 col-md-offset-4">
                        <button type="button" class="btn-black btn-doFilter">اعمال فیلتر</button>
                    </div>
                </div>
            </div>
            {/* <div class="col-md-4 col-sm-4 bg-warning"> */}
            <div class="col ">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="head-leftbtn hidden-xs">
                    <button onClick={()=>handleChangeLanguage('fa')} type="button" class="btn-changelang pull-left">{t("title_lang-heade")}</button>
                    <button type="button" class="btn-login pull-left">عضویت / ورود</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header;
