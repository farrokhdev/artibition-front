import React, { useEffect, useState } from "react";
import { t } from 'i18next';
import Slider from "react-slick";

import Artwork1 from '../../assets/img/mainpage/hnrpqkfiup@3x.jpg'
import edit_name from '../../assets/img/edit_name.svg'
import apiServices from "../../utils/api.services";
import { PRODUCTS } from "../../utils";
import queryString from 'query-string'
import { message } from "antd";
import { select } from "react-cookies";


const SliderSetting = {
    // dots: true,
    // infinite: false,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // initialSlide: 0,
    dots: false,
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


const json = {
    test1: {
        1: "fwsf",
        2: "refewrf"
    },
    test2: {
        1: "wrefwefd",
        2: "reffcwuyewrf"
    },
    test3: {
        1: "1121212",
        2: "1185418515"
    },
    test10: {
        1: "aaaaaaaaa",
        2: "bbbbbbbb"
    }
}

let selected = []


function ExistArtworkCollection({ artistID, selectedArtwork, setSelectedArtwork }) {

    let data = { id: artistID }


    const handleChange = (e) => {
        if (e.target.checked) {
            selected.push(e.target.name)
        } else {
            selected.splice(selected.indexOf(e.target.name), 1)
        }
        data["selected"] = selected

        const removedExist = selectedArtwork
        for (let i = 0; i < selectedArtwork.length; i++) {
            const element = selectedArtwork[i];
            if (element.id === artistID) {
                removedExist.splice(i, 1)
            }

        }
        setSelectedArtwork([...removedExist, data])
    }

    const [params, setParams] = useState({
        artist_id: artistID ? artistID : ""
    })
    const [artworks, setArtworks] = useState([])




    



    useEffect(() => {
        apiServices.get(PRODUCTS, queryString.stringify(params))
            .then(res => {
                if (res.data) {
                    // console.log(res.data.data);
                    // console.log(res.data.data.results);
                    setArtworks(res.data.data.results)

                } else {
                    message.error(res.response.data.message)
                }
            })
    }, [])


    return (
        <div className="collection-list-row">
            {/* <div className="row w-100 text-dir dir">
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
            </div> */}




            <Slider {...SliderSetting} className="mrgt20">

                {artworks.length > 0 ?

                    artworks.map((product, productIndex) => {
                        return (
                            product.items.map((edition, editionIndex) => {
                                return (
                                    <div className="cols">
                                        <label className="lable-checkbox">
                                            <input type="checkbox" value="" name={[product.id, edition.id]} onChange={(e) => { handleChange(e) }} />
                                            <span className="checkmark"></span>
                                            <div className="col-img">
                                                <div className="tags tags-off persian-num">30 %</div>
                                                <img src={Artwork1} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
                                                {/* <div className="tab-overly">
                                    <a href="#" className="btn-see">
                                        <span className="view-icon pull-right"></span>
                                        <span>مشاهده اثر</span>
                                    </a>
                                    <a href="#" className="btn-sale">درخواست خرید</a>
                                    <a href="#" className="like-icon"></a>
                                </div> */}
                                            </div>
                                        </label>
                                        <div className="col-body text-dir dir">
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
                                                <span className="edit-price" data-toggle="modal" data-target="modal-edit-price"><img src={edit_name} width="32" height="32" alt="" /></span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )

                    }) :
                    <div>
                        هیچ اثری برای این هنرمند وجود ندارد
                    </div>
                }






                {/* <div className="cols">
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
                        <div className="tags tags-spacial">{t("collections-list.special")}</div>
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
                </div> */}
            </Slider>


        </div>
    )
}

export default ExistArtworkCollection