import React , {useState} from 'react';
import searchIcon from '../../assets/img/search.svg';
import filterIcon from '../../assets/img/Filter.svg';
import logo from '../../assets/img/logo.svg';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import ModalSetDimention from './ModalSetDimention';

function Header() {
    
    const {t, i18n} = useTranslation();

    const [visibleSetDimentionModal, setVisibleSetDimentionModal] = useState(false)
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);

        setTimeout(() => {
            window.location.reload()
        }, 100);
    };
    
    const handleShowModalsetDimention = () => {
        setTimeout(() => {
            setVisibleSetDimentionModal(true)
        }, 300);
    }



    return (
       
    <div className="default-header ">
        <div className="row content-header-site">
            <div className="col-md-4 col-sm-3 col-xs-6">
                <div className="d-flex artibition-logo">
                    <Link to="/">
                        <img src={logo}  alt="Artibition-logo"/>
                    </Link>
                </div>
            </div>
            <div className="col-md-4 col-sm-5 col-lg-5 hidden-xs">
                <div className="search-container dropdown">
                    <input type="text" placeholder={t("filter-header.placeholder-input-search")} name="search"
                           autocomplete="off" className="mainsearch"/>
                    <button className="btn-searchicon" type="submit">
                        <img src={searchIcon} width="24" height="24" alt="جستجو"/></button>
                    <button className="btn-searchfilter hidden-sm" type="button" data-toggle="collapse"
                            data-target="#top-filter">
                        <img src={filterIcon} height="15" width="16" alt="فیلتر"/>
                        <span>{t("filter-header.title")}</span>
                    </button>
                </div>
                <div className="autocomplete">
                    <ul className="predict">
                        <li><a href="#">پرویز تناولی</a></li>
                        <li><a href="#">پرویز اعتصامی</a></li>
                        <li><a href="#">پرتو فرومنش</a></li>
                        <li><a href="#">پروین اعتصامی</a></li>
                        <li><a href="#">پرتره</a></li>
                        <li><a href="#">گالری هان - نمایشگاه عکاسی پرندگان</a></li>
                        <li><a href="#">گالری آرتیبیشن - نمایشگاه نقاشی آبرنگ پرتره</a></li>
                    </ul>
                    <div className="predict-cat">
                        <span className="graycolor">فیلتر نتایج بر اساس:</span>
                        <ul>
                            <li><a href="#">هنرمند</a></li>
                            <li><a href="#">نام اثر</a></li>
                            <li><a href="#">نمایشگاه</a></li>
                            <li><a href="#">گالری</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="collapse filter-dropdown hidden-sm bg-filter-header" id="top-filter">
                <div  className="container ">

                    <div className="col-md-2 ">
                        
                        <h3 className="filter-menu-title">{t("filter-header.size.title")}</h3>
                        <div className="filter-menu-body">
                            <label className="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>{t("filter-header.size.small")}</span>
                                <span className="checkmark"></span>
                            </label>
                            <label className="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>{t("filter-header.size.medium")}</span>
                                <span className="checkmark"></span>
                            </label>
                            <label className="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>{t("filter-header.size.large")}</span>
                                <span className="checkmark"></span>
                            </label>
                            <label className="lable-checkbox">
                                <input type="checkbox" value="" id="custom-dim"/>
                                <span>{t("filter-header.size.custom")}</span>
                                <span className="checkmark"></span>
                            </label>
                            <div className="add-dimention ">
                                <div className="add-dimention-row">
                                    <div className="graycolor">{t("filter-header.size.dimention.width")}
                                        <span onClick={handleShowModalsetDimention} data-toggle="modal" data-target="#select-dimention"
                                            className="edit-dimention">
                                        </span>
                                    </div>
                                    <span className="persian-num">60</span>
                                    <span>{t("filter-header.size.dimention.to")}</span>
                                    <span className="persian-num">90</span>
                                    <span>{t("filter-header.size.dimention.unit")}</span>
                                </div>
                                <div className="add-dimention-row">
                                    <div className="graycolor">{t("filter-header.size.dimention.length")}
                                        <span onClick={handleShowModalsetDimention} data-toggle="modal" data-target="#select-dimention"
                                              className="edit-dimention"></span>
                                    </div>
                                    <span className="persian-num">60</span>
                                    <span>{t("filter-header.size.dimention.to")}</span>
                                    <span className="persian-num">90</span>
                                    <span>{t("filter-header.size.dimention.unit")}</span>
                                </div>
                                <div className="add-dimention-row">
                                    <div className="graycolor">{t("filter-header.size.dimention.height")}
                                        <span onClick={handleShowModalsetDimention} data-toggle="modal" data-target="#select-dimention"
                                              className="edit-dimention"></span>
                                    </div>
                                    <span className="persian-num">60</span>
                                    <span>{t("filter-header.size.dimention.to")}</span>
                                    <span className="persian-num">90</span>
                                    <span>{t("filter-header.size.dimention.unit")}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 ">
                        
                        <h3 className="filter-menu-title">{t("filter-header.color.title")}</h3>
                        <div className="filter-menu-body">
                            <table className="table table-responsive color">
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

                     <div className="col-md-3 ">
                        
                        <h3 className="filter-menu-title">{t("filter-header.discount.title")}</h3>
                        <div className="filter-menu-body">
                            <label className="switch pull-right">
                                <input type="checkbox" checked/>
                                <span className="switchbtn round"></span>
                                <span className="label-switchbtn">{t("filter-header.discount.text-switch")}</span>
                            </label>
                            <div className="clearfix"></div>
                            <div className="md-mrgt30">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span>{t("filter-header.discount.more-than-20")}</span>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span>{t("filter-header.discount.more-than-30")}</span>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span>{t("filter-header.discount.more-than-50")}</span>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 ">
                       
                        <h3 className="filter-menu-title">{t("filter-header.price.title")}</h3>
                        <div className="filter-menu-body">
                            <div className="rangeslider">
                                <div id="slider" dir="rtl"></div>
                            </div>
                            <div className="row row-inputs">
                                <div className="col-xs-12 ">
                                    <label>{t("filter-header.price.min")}</label>
                                    <input type="text" className="value persian-num" data-index="0" value="0"/>
                                </div>
                                <div className="col-xs-12 mrgt16">
                                    <label>{t("filter-header.price.max")}</label>
                                    <input type="text" className="value  persian-num" data-index="1" value="4"/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-2 ">
                        
                        <h3 className="filter-menu-title">{t("filter-header.category.title")}</h3>
                        <div className="filter-menu-body">
                            <label className="lable-checkbox">
                                <input type="checkbox" checked value=""/>
                                <span>{t("filter-header.category.all")}</span>
                                <span className="checkmark"></span>
                            </label>
                            <label className="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>{t("filter-header.category.painting")}</span>
                                <span className="checkmark"></span>
                            </label>
                            <label className="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>{t("filter-header.category.photography")}</span>
                                <span className="checkmark"></span>
                            </label>
                            <label className="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>{t("filter-header.category.sculpture")}</span>
                                <span className="checkmark"></span>
                            </label>
                            <label className="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>{t("filter-header.category.calligram")}</span>
                                <span className="checkmark"></span>
                            </label>
                            <label className="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>{t("filter-header.category.calligraphy")}</span>
                                <span className="checkmark"></span>
                            </label>
                            <label className="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>{t("filter-header.category.printmaking")}</span>
                                <span className="checkmark"></span>
                            </label>
                            <label className="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>{t("filter-header.category.graphic")}</span>
                                <span className="checkmark"></span>
                            </label>
                            <label className="lable-checkbox">
                                <input type="checkbox" value=""/>
                                <span>{t("filter-header.category.drawing")}</span>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    
                    <div className="clearfix"></div>
                    <div className="col-md-4 col-md-offset-4">
                        <button type="button" className="btn-black btn-doFilter">اعمال فیلتر</button>
                    </div>
                </div>
            </div>
            <div className="col ">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#menu">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="head-leftbtn d-flex content-box-action-header hidden-xs">

                    <button type="button" className="btn-login pull-left mx-2">{t("redirect-login-header")}</button>
                    <button 
                        onClick={()=>changeLanguage(i18n.language !== 'fa-IR' ? 'fa-IR' : 'en-US' )} 
                        type="button" 
                        classNameName="btn-changelang pull-left">

                        {t("title_lang-header")}

                    </button>
                </div>
            </div>
        </div>

        <ModalSetDimention
            visibleSetDimentionModal={visibleSetDimentionModal}
            setVisibleSetDimentionModal={setVisibleSetDimentionModal}
        />
    </div>
    )
}

export default Header;
