import React, { useState, useEffect } from 'react'
import { t } from 'i18next';
import { GetLanguage } from '../../utils/utils'
import { handleShowImage } from '../../utils/showImageProduct';
import { follow } from '../../utils/utils';


function CardArtwork({ artworks, getFollowProduct }) {
    const Language = GetLanguage();

    const callBack = () => {
        getFollowProduct()
      }
    

    return (
        <div className="col-sm-2">
            <a href="#" className="cols margin-bottom-32">
                <div className="col-img">
                    <div className="tags tags-off ">{artworks?.discount?.type === "percentage" ? artworks?.discount?.value : artworks?.discount?.duration} %</div>
                    <img src={artworks && handleShowImage(artworks)} width="840" height="840" alt="Arthibition" className="img-responsive" style={{width:"100%",height:"200px",objectFit:"cover",objectPosition:"center"}} />
                    <div className="tab-overly">
                        <span className="btn-see hidden-xs hidden-sm">
                            <span className="view-icon pull-left"></span>
                            <span>{t("artwork.view-artwork")}</span>
                        </span>
                        <button type="button" className="btn-sale">
                            <span className="hidden-xs hidden-sm">{t("artwork.btn-action-to-shop")}</span>
                            <span className="shopping-cart-xs visible-xs visible-sm"></span>
                        </button>
                        <button
                            onClick={() =>
                                follow({
                                    content: "product",
                                    activity: "like",
                                    object_id: artworks?.id,
                                    action: artworks?.likes,
                                    callBack
                                })
                            }

                            type="button" className="like-icon isLike"
                        ></button>
                    </div>
                </div>
                <div className="col-body">
                    <h6 className="col-title">
                        <span className="col-name">{Language === 'fa-IR' ? artworks?.translations?.fa?.artist_name : artworks?.translations?.en?.artist_name}</span>
                        {/* <span className="col-name">Hoseini</span> */}
                    </h6>
                    <div className="col-dimension">
                        {/* <span className="col-dimension-title">Size:</span> */}
                        <span className="col-dimension-body">
                            <span className="dimension-width">{"ابعاد" + " " + (artworks?.width || "نامشخص")  + " " + "*" + " " + (artworks?.height || "نامشخص") } </span>
                            {/* <span>x</span>
                            <span className="dimension-height">{artworks?.height}</span> */}
                        </span>
                    </div>
                    <div className="col-price">
                        <span className="col-price-num">{Language === 'fa-IR' ? artworks?.toman_price : artworks?.dollar_price}</span>
                        <span className="col-price-unit">{Language === 'fa-IR' ? 'تومان' : 'USD'}</span>
                        {console.log(artworks?.discount)}
                        {/* <span className="col-price-off">{artworks?.discount?.duration}</span> */}
                        <span className="col-price-off">{artworks?.discount?.value ? "میزان تخفیف" + Language === 'fa-IR' ? artworks?.toman_price : artworks?.dollar_price : ""}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CardArtwork