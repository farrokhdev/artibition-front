import React from "react";
import { t } from 'i18next';


import artist2 from '../../assets/img/artists/artist-2.jpg'
import gift from '../../assets/img/gift.svg'


function Artwork() {
    return (
        <>
            <div className="cols text-dir mrgb32" style={{ position: "relative" }}>
                <div className="col-img">
                    <div className="tags tags-spacial">{t("advisory.select_favorite_artwork_step.spacial")}</div>
                    <div className="tags tags-off persian-num">33 %</div>
                    <img src={artist2} width="840" height="1259" alt="آرتیبیشن" className="img-responsive" />

                </div>
                <div className="col-body" style={{ position: "relative" }}>
                    <div class="finished-tag d-block">{t("promotion-competition.artwork.sold_out")}</div>
                    <h6 className="col-title">
                        <span className="col-name">آیدین</span>
                        <span className="col-name">آغداشلو</span>
                    </h6>
                    <div className="col-dimension">

                        <span className="col-dimension-title">{t("advisory.select_favorite_artwork_step.size")}</span>
                        <span className="col-dimension-body">
                            <span className="dimension-width">60</span>
                            <span>{t("advisory.select_favorite_artwork_step.x")}</span>
                            <span className="dimension-height">60</span>
                        </span>
                    </div>
                    <div className="col-price">
                        <span className="col-price-num">22.000.000</span>
                        <span className="col-price-unit">{t("advisory.select_favorite_artwork_step.price")}</span>
                        <span className="tag-gift-custom"><img src={gift} width="22" height="22" alt="" /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artwork