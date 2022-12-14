import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import hnrpqkfiup from '../../assets/img/mainpage/hnrpqkfiup@3x.jpg';
import { t } from 'i18next';
import { ARTIST_PRODUCTS } from '../../utils';
import apiServices from '../../utils/api.services';
import QueryString from 'qs';
import { useTranslation } from 'react-i18next';
import { follow } from "../../utils/utils";
import { useNavigate } from 'react-router-dom';

function AllArtworks({ id }) {

    const { t, i18n } = useTranslation();
    let navigate = useNavigate();

    const [artistList, setArtistList] = useState();
    const [params, setParams] = useState({
        search: "",
        page: 1,
        gallery_id: id

    })
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
    const getArtistList = () => {
        apiServices.get(ARTIST_PRODUCTS, QueryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setArtistList(res.data.data)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    const callBack = () => {
        getArtistList()
    }

    useEffect(() => {
        getArtistList()
    }, [params]);

    return (
        <>


            <div className="clearfix"></div>
            <div className="col-sm-12">
                <div className="default-tab tab-1 tab-interval">
                    <div className="tab-content">
                        <div id="home" className="tab-pane fade in active">

                            <div style={{ overflow: 'auto' }} className="owl-carousel d-flex" id="tab1">
                                {artistList?.results?.map((artworks) => {
                                    return (
                                        <a className="cols  mx-4">
                                            <div className="col-img">
                                                <img
                                                    src={artworks.medias[0]?.exact_url}
                                                    alt="artibition"
                                                    className="img-responsive" />
                                                <div className="tab-overly">
                                                    <span onClick={() =>
                                                        navigate(
                                                            `/site/artworks-detail/?id=${artworks.id}`
                                                        )
                                                    } className="btn-see hidden-xs hidden-sm">
                                                        <span className="view-icon pull-right"></span>
                                                        <span>{t("artwork.view-artwork")}</span>
                                                    </span>
                                                    <button type="button" className="btn-sale">
                                                        <span className="hidden-xs hidden-sm">{t("artwork.btn-action-to-shop")}</span>
                                                        <span className="shopping-cart-xs visible-xs visible-sm"></span>
                                                    </button>
                                                    <button
                                                        className={"like-icon " + (artworks?.likes ? "isLike" : "")}
                                                        onClick={() =>
                                                            follow({
                                                                content: "product",
                                                                activity: "like",
                                                                object_id: artworks?.id,
                                                                action: artworks?.likes,
                                                                callBack
                                                            })
                                                        }
                                                    ></button>
                                                    {/* <button type="button" className="like-icon isLike"></button> */}
                                                </div>
                                            </div>
                                            <div className="col-body">
                                                {i18n.language === 'fa-IR' ?
                                                    <>
                                                        <h6 className="col-title">
                                                            <span className="col-name">{artworks.translations?.fa?.artist_name}</span>
                                                            {/* <span className="col-name">??????????</span> */}
                                                        </h6>
                                                        <div className="col-dimension">
                                                            <span className="col-dimension-title">??????????:</span>
                                                            <span className="col-dimension-body">
                                                                <span className="dimension-width">{artworks.width}</span>
                                                                <span> ???? </span>
                                                                <span className="dimension-height">{artworks.height}</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-price">
                                                            <span className="col-price-num">{artworks.items?.base_toman_price}</span>
                                                            <span className="col-price-unit text-right">??????????</span>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                        <h6 className="col-title">
                                                            <span className="col-name">{artworks.translations?.en?.artist_name}</span>
                                                            {/* <span className="col-name">??????????</span> */}
                                                        </h6>
                                                        <div className="col-dimension">
                                                            <span className="col-dimension-title">??????????:</span>
                                                            <span className="col-dimension-body">
                                                                <span className="dimension-width">{artworks.width}</span>
                                                                <span> ???? </span>
                                                                <span className="dimension-height">{artworks.height}</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-price">
                                                            <span className="col-price-num">{artworks.items?.base_dollar_price}</span>
                                                            <span className="col-price-unit">$</span>
                                                        </div>
                                                    </>
                                                }
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