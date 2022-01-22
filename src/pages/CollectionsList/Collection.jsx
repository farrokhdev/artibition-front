import React from "react";
import { t } from 'i18next';
import Slider from "react-slick";

import Artwork1 from '../../assets/img/mainpage/hnrpqkfiup@3x.jpg'


const SliderSetting = {
    // dots: true,
    // infinite: false,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // initialSlide: 0,
    dots: false,
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
}


function Collection() {
    return (
        <div className="collection-list-row">
            <div className="row w-100 text-dir dir">
                <div className="col-sm-9">
                    <h4 className="fontbold19 justify-content-unset">هنر تراش بر روی چوب</h4>
                    <span className="collection-artistname">بردیا صالح</span>
                    <button type="button" className="btn-follow">{t("collections-list.follow")}</button>
                </div>
                <div className="col-sm-3">
                    <a href="#" className="btn-readmore pull-dir-rev" data-toggle="modal" data-target="#modal-listalbum2">
                        {t("collections-list.view_all")}
                    </a>
                </div>
            </div>




            <Slider {...SliderSetting} className="mrgt20">
                <div className="cols">
                    <div className="col-img" style={{ marginLeft: "20px" }}>
                        <img src={Artwork1} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
                        <div className="tab-overly dir">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-dir"></span>
                                <span>{t("collections-list.view")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("collections-list.shop_now")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                </div>
                <div className="cols">
                    <div className="col-img" style={{ marginLeft: "20px" }}>
                        <img src={Artwork1} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
                        <div className="tab-overly dir">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-dir"></span>
                                <span>{t("collections-list.view")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("collections-list.shop_now")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                </div>
                <div className="cols">
                    <div className="col-img" style={{ marginLeft: "20px" }}>
                    <div class="tags tags-spacial">{t("collections-list.special")}</div>
                        <img src={Artwork1} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
                        <div className="tab-overly dir">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-dir"></span>
                                <span>{t("collections-list.view")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("collections-list.shop_now")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                </div>
                <div className="cols">
                    <div className="col-img" style={{ marginLeft: "20px" }}>
                        <img src={Artwork1} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
                        <div className="tab-overly dir">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-dir"></span>
                                <span>{t("collections-list.view")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("collections-list.shop_now")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                </div>
                <div className="cols">
                    <div className="col-img" style={{ marginLeft: "20px" }}>
                        <img src={Artwork1} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
                        <div className="tab-overly dir">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-dir"></span>
                                <span>{t("collections-list.view")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("collections-list.shop_now")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                </div>
                <div className="cols">
                    <div className="col-img" style={{ marginLeft: "20px" }}>
                        <img src={Artwork1} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
                        <div className="tab-overly dir">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-dir"></span>
                                <span>{t("collections-list.view")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("collections-list.shop_now")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                </div>
            </Slider>


        </div>
    )
}

export default Collection