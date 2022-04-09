import React, { useState, useEffect } from 'react'
import { PRODUCT_BY_ARTIST } from '../../utils';
import apiServices from '../../utils/api.services';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import { numDiscriminant } from '../../utils/discriminant';

function ProductDetails({ artistId, id }) {
    const { i18n } = useTranslation();
    const [artistProduct, setartistProduct] = useState([]);

    const SliderSetting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        // rtl: true,
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


    const getArtistProducts = () => {
        apiServices.get(PRODUCT_BY_ARTIST(id, artistId), "")
            .then(res => {
                if (res.data.code === 200) {
                    setartistProduct(res.data.data.results)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    useEffect(() => {
        getArtistProducts()
    }, [artistId]);

    return (

        // <div class="owl-carousel gallery-artistartworks d-flex">
        <Slider {...SliderSetting} className="mrgt20 dir">
            {artistProduct?.map((item) => {
                return (
                    <div class="cols mx-4">
                        <div class="col-img">
                            <img src={item.medias[0]?.exact_url} width="830" height="830" alt="آرتیبیشن"
                                class="img-responsive" />
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
                                <span class="col-name">
                                    {i18n.language === 'fa-IR' ?
                                        `${item?.translations?.fa?.artist_name}`
                                        :
                                        `${item?.translations?.en?.artist_name} ${item?.translations?.en?.last_name}`
                                    }</span>
                            </h6>
                            <div class="col-dimension">
                                <span>{i18n.language === 'fa-IR' ?
                                    `${item?.translations?.fa?.title}`
                                    : `${item?.translations?.en?.title}`}
                                </span>
                            </div>
                            <div class="col-price d-flex">
                                <span class="col-price-num">{i18n.language === 'fa-IR' ?
                                    numDiscriminant(item?.toman_price)
                                    : numDiscriminant(item?.dollar_price)
                                }
                                </span>
                                <span class="col-price-unit">تومان</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Slider>
        // <div>productDetails</div>
    )
}

export default ProductDetails