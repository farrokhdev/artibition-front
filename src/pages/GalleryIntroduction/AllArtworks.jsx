import React from 'react';
import Slider from 'react-slick';
import hnrpqkfiup from '../../assets/img/mainpage/hnrpqkfiup@3x.jpg';
import { t } from 'i18next';

function AllArtworks() {

    const settings = {
        dots: true,
        infinite: false,
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
        <>


            <div className="clearfix"></div>
            <div className="col-sm-12">
                <div className="default-tab tab-1 tab-interval">
                    <div className="tab-content">
                        <div id="home" className="tab-pane fade in active">

                            <div style={{ overflow: 'auto' }} className="owl-carousel d-flex" id="tab1">
                                {[1, 2, 3, 4].map((artworks) => {
                                    return (
                                        <a href="#" className="cols  mx-4">
                                            <div className="col-img">
                                                <img
                                                    src={hnrpqkfiup}
                                                    alt="artibition"
                                                    className="img-responsive" />
                                                <div className="tab-overly">
                                                    <span className="btn-see hidden-xs hidden-sm">
                                                        <span className="view-icon pull-right"></span>
                                                        <span>{t("artwork.view-artwork")}</span>
                                                    </span>
                                                    <button type="button" className="btn-sale">
                                                        <span className="hidden-xs hidden-sm">{t("artwork.btn-action-to-shop")}</span>
                                                        <span className="shopping-cart-xs visible-xs visible-sm"></span>
                                                    </button>
                                                    <button type="button" className="like-icon isLike"></button>
                                                </div>
                                            </div>
                                            <div className="col-body">
                                                <h6 className="col-title">
                                                    <span className="col-name">رضا</span>
                                                    <span className="col-name">حسینی</span>
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
                                        </a>

                                    )
                                })}

                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>


        </>
    )
}

export default AllArtworks;