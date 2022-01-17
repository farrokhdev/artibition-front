import React from 'react';
import { Modal } from 'antd';
import edit_icon from '../../assets/img/edit_name.svg';
import close_icon from '../../assets/img/clear.svg';
import { Form, Input} from "antd";
import ver_code from '../../assets/img/ver_code.svg';
import { t } from 'i18next';

import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import artwork11 from '../../assets/img/artworks/artwork-11.jpg';
import artist4 from '../../assets/img/artist-4.jpg';
import circle_plus_icon from '../../assets/img/circle-plus-1.png';

import search_icon from '../../assets/img/search.svg';
import jpaytrkase3 from '../../assets/img/artworks/jpaytrkase@3x.jpg';
import hnrpqkfiup3 from '../../assets/img/artworks/hnrpqkfiup@3x.jpg';
import gift_icon from '../../assets/img/gift.svg';
import nqliiocbif3 from '../../assets/img/artworks/nqliiocbif@3x.jpg';
import ucuurcufbm3 from '../../assets/img/artworks/ucuurcufbm@3x.jpg';
import artworks3 from '../../assets/img/artworks/3.jpg';
import rdbewaopdm3 from '../../assets/img/artworks/rdbewaopdm@3x.jpg';
import hezvtaokhv3 from '../../assets/img/artworks/hezvtaokhv@3x.jpg';
import ffhxzfmfyx3 from '../../assets/img/artworks/ffhxzfmfyx@3x.jpg';
import lhggrzlgoc3 from '../../assets/img/artworks/lhggrzlgoc@3x.jpg';
import hyxvpfinmx3 from '../../assets/img/artworks/hyxvpfinmx@3x.jpg';
import ayvglbkdfo3 from '../../assets/img/artworks/ayvglbkdfo@3x.jpg';
import gbazvsspbk3 from '../../assets/img/artworks/gbazvsspbk@3x.jpg';
import artwork3 from '../../assets/img/artworks/3.jpg';

function ModalAddGallery(props) {

    const {visibleAddGallery , setVisibleAddGallery} = props;

    const handleClose = () => {
        setVisibleAddGallery(false);
    }


    return (
        <React.Fragment>

        <Modal
            centered
            className=""
            visible={visibleAddGallery}
            onOk={handleClose}
            onCancel={handleClose}
            width={'100vw'}
            footer={[]}
        >
                <div className="modal-content px-0 px-md-0">
                        <div className="d-flex justify-content-end">
                            <button>
                            <span  onClick={handleClose}  aria-hidden="true" aria-label="Close">
                                <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                            </span>
                            </button>
                        </div>
                        <div className="modal-header">
                            <h5 className="fontbold28 aligncenter" id="exampleModalLabel">{t("artwork.modal_similar_artwork.title")}</h5>
                        </div>
                        <div className="modal-body">
                <div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">
                    <div className="info-sec">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="public-group ">
                                    <input className="form-control input-public " required
                                           placeholder="" value=""/>
                                    <label className="lable-public">عنوان مجموعه</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="public-group en">
                                    <input className="form-control input-public en-lang" required
                                           placeholder="" value=""/>
                                    <label className="lable-public">Collection title</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group ">
                                            <textarea className="form-control " placeholder="توضیحات به فارسی"
                                                      rows="6"></textarea>
                                    <label className="lable-public"></label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group en">
                                            <textarea className="form-control en-lang" placeholder="Description in English"
                                                      rows="8"></textarea>
                                    <label className="lable-public"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="adv-content  col-sm-8 col-sm-offset-2 ">
                        <h2 className="adv-title">آثار مورد نظر خود را انتخاب کنید.</h2>
                        <div className="nl-input filter-search">
                            <input placeholder="جستجوی اثر"/>
                            <button className="noborder" type="button"><img src={search_icon} width="24"
                                                                        height="24" alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="container advisory-select">
                    <div className="row-gridimg">
                        <div className="row">
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={jpaytrkase3} width="840" height="1259"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={hnrpqkfiup3} width="840" height="840"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                                        <span className="tag-gift"><img src={gift_icon} width="22" height="22"
                                                                    alt=""/></span>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix visible-xs"></div>
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <div className="tags tags-off persian-num">30 %</div>
                                        <img src={nqliiocbif3} width="840" height="924"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <div className="tags tags-spacial">ویژه</div>
                                        <div className="tags tags-off persian-num">33 %</div>
                                        <img src={ucuurcufbm3} width="840" height="1259"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="clearfix"></div>
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src="img/artworks/jpaytrkase@3x.jpg" width="840" height="1259"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artworks3} width="840" height="850" alt="آرتیبیشن"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="clearfix visible-xs"></div>
                            <div className="cols col-sm-3 col-xs-6 finished">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={rdbewaopdm3} width="840" height="1120"
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
                                </label>
                                <div className="col-body">
                                    <div className="finished-tag">فروخته شد</div>

                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={hezvtaokhv3} width="840" height="1130"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="clearfix"></div>
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={ffhxzfmfyx3} width="840" height="840"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={lhggrzlgoc3} width="840" height="1130"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="clearfix visible-xs"></div>
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={lhggrzlgoc3} width="840" height="1130"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={hyxvpfinmx3} width="840" height="1259"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="clearfix"></div>
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={ayvglbkdfo3} width="840" height="840"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={gbazvsspbk3} width="840" height="840"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="clearfix visible-xs"></div>
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={rdbewaopdm3} width="840" height="1120"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={artwork3} width="840" height="850" alt="آرتیبیشن"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="clearfix"></div>
                            <div className="cols col-sm-3 col-xs-6 finished ">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={rdbewaopdm3} width="840" height="1120"
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
                                </label>
                                <div className="col-body">
                                    <div className="finished-tag">فروخته شد</div>

                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={hezvtaokhv3} width="840" height="1130"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="clearfix visible-xs"></div>
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={ffhxzfmfyx3} width="840" height="840"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                            <div className="cols col-sm-3 col-xs-6">
                                <label className="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span className="checkmark"></span>
                                    <div className="col-img">
                                        <img src={lhggrzlgoc3} width="840" height="1130"
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
                                </label>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        <span className="col-name">آیدین</span>
                                        <span className="col-name">آغداشلو</span>
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
                        </div>
                    </div>
                </div>
                <div className="adv-btn">
                    <button type="button" className="btn btn-black center-block">ثبت</button>
                </div>
            </div>
                        
                    </div>
  
        </Modal>
    </React.Fragment>
    )
}

export default ModalAddGallery
