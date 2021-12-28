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
                        <div class="modal-header">
                            <h5 class="fontbold28 aligncenter" id="exampleModalLabel">{t("artwork.modal_similar_artwork.title")}</h5>
                        </div>
                        <div class="modal-body">
                <div class="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">
                    <div class="info-sec">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="public-group ">
                                    <input class="form-control input-public " required
                                           placeholder="" value=""/>
                                    <label class="lable-public">عنوان مجموعه</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="public-group en">
                                    <input class="form-control input-public en-lang" required
                                           placeholder="" value=""/>
                                    <label class="lable-public">Collection title</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group ">
                                            <textarea class="form-control " placeholder="توضیحات به فارسی"
                                                      rows="6"></textarea>
                                    <label class="lable-public"></label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group en">
                                            <textarea class="form-control en-lang" placeholder="Description in English"
                                                      rows="8"></textarea>
                                    <label class="lable-public"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="adv-content  col-sm-8 col-sm-offset-2 ">
                        <h2 class="adv-title">آثار مورد نظر خود را انتخاب کنید.</h2>
                        <div class="nl-input filter-search">
                            <input placeholder="جستجوی اثر"/>
                            <button class="noborder" type="button"><img src={search_icon} width="24"
                                                                        height="24" alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="container advisory-select">
                    <div class="row-gridimg">
                        <div class="row">
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={jpaytrkase3} width="840" height="1259"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={hnrpqkfiup3} width="840" height="840"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                                        <span class="tag-gift"><img src={gift_icon} width="22" height="22"
                                                                    alt=""/></span>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix visible-xs"></div>
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <div class="tags tags-off persian-num">30 %</div>
                                        <img src={nqliiocbif3} width="840" height="924"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <div class="tags tags-spacial">ویژه</div>
                                        <div class="tags tags-off persian-num">33 %</div>
                                        <img src={ucuurcufbm3} width="840" height="1259"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="clearfix"></div>
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src="img/artworks/jpaytrkase@3x.jpg" width="840" height="1259"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={artworks3} width="840" height="850" alt="آرتیبیشن"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="clearfix visible-xs"></div>
                            <div class="cols col-sm-3 col-xs-6 finished">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={rdbewaopdm3} width="840" height="1120"
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
                                </label>
                                <div class="col-body">
                                    <div class="finished-tag">فروخته شد</div>

                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={hezvtaokhv3} width="840" height="1130"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="clearfix"></div>
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={ffhxzfmfyx3} width="840" height="840"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={lhggrzlgoc3} width="840" height="1130"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="clearfix visible-xs"></div>
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={lhggrzlgoc3} width="840" height="1130"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={hyxvpfinmx3} width="840" height="1259"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="clearfix"></div>
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={ayvglbkdfo3} width="840" height="840"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={gbazvsspbk3} width="840" height="840"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="clearfix visible-xs"></div>
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={rdbewaopdm3} width="840" height="1120"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={artwork3} width="840" height="850" alt="آرتیبیشن"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="clearfix"></div>
                            <div class="cols col-sm-3 col-xs-6 finished ">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={rdbewaopdm3} width="840" height="1120"
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
                                </label>
                                <div class="col-body">
                                    <div class="finished-tag">فروخته شد</div>

                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={hezvtaokhv3} width="840" height="1130"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="clearfix visible-xs"></div>
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={ffhxzfmfyx3} width="840" height="840"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                            <div class="cols col-sm-3 col-xs-6">
                                <label class="lable-checkbox">
                                    <input type="checkbox" value=""/>
                                    <span class="checkmark"></span>
                                    <div class="col-img">
                                        <img src={lhggrzlgoc3} width="840" height="1130"
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
                                </label>
                                <div class="col-body">
                                    <h6 class="col-title">
                                        <span class="col-name">آیدین</span>
                                        <span class="col-name">آغداشلو</span>
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
                        </div>
                    </div>
                </div>
                <div class="adv-btn">
                    <button type="button" class="btn btn-black center-block">ثبت</button>
                </div>
            </div>
                        
                    </div>
  
        </Modal>
    </React.Fragment>
    )
}

export default ModalAddGallery
