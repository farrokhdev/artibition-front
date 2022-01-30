import React, { useEffect, useState } from "react";
import { t } from 'i18next';
import Slider from "react-slick";

import Artwork1 from '../../assets/img/mainpage/hnrpqkfiup@3x.jpg'
import edit_name from '../../assets/img/edit_name.svg'
import apiServices from "../../utils/api.services";
import { PRODUCTS } from "../../utils";
import queryString from 'query-string'
import { message } from "antd";

const SliderSetting = {
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



function ExistArtworkCollection({ artistID, selectedArtwork, setSelectedArtwork }) {
    const handleChange = (e) => {
        let temp = selectedArtwork
        const json = {
            id: artistID,
            selected: [JSON.parse(e.target.name)]
        }
        if (e.target.checked) {
            let existFlag = false
            for (let i = 0; i < temp.length; i++) {
                if (temp[i].id === artistID) {
                    temp[i].selected.push(JSON.parse(e.target.name))
                    existFlag = true
                }
            }
            if (!existFlag) {
                temp.push(json)
            }
        } else {
            for (let i = 0; i < temp.length; i++) {
                if (temp[i].id === artistID) {
                    temp[i].selected = temp[i].selected.filter(item => (item.product_id !== JSON.parse(e.target.name).product_id && item.product_item_id !== JSON.parse(e.target.name).product_item_id))
                }
            }
        }
        setSelectedArtwork(temp)
    }


    const [params, setParams] = useState({
        artist_id: artistID ? artistID : ""
    })
    const [artworks, setArtworks] = useState([])



    useEffect(() => {
        apiServices.get(PRODUCTS, queryString.stringify(params))
            .then(res => {
                if (res.data) {
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
                                            <input type="checkbox" value="" name={JSON.stringify({
                                                product_id: product.id,
                                                product_item_id: edition.id,
                                                reserved_toman_price: edition.toman_price,
                                                reserved_dollar_price: edition.dollar_price
                                            })}
                                                onChange={(e) => { handleChange(e) }} />
                                            <span className="checkmark"></span>
                                            <div className="col-img">
                                                <div className="tags tags-off persian-num">30 %</div>
                                                <img src={Artwork1} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
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
            </Slider>


        </div>
    )
}

export default ExistArtworkCollection