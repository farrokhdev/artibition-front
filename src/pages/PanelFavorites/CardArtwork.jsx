import React from 'react'
import { t } from 'i18next';
import artwork_image from '../../assets/img/mainpage/rdbewaopdm840.jpg';

function CardArtwork() {
return (
<div className="col-sm-3">
    <a href="#" className="cols">
        <div className="col-img">
            <div className="tags tags-off ">30 %</div>
            <img src={artwork_image} width="840" height="840" alt="Arthibition" className="img-responsive" />
            <div className="tab-overly">
                <span className="btn-see hidden-xs hidden-sm">
                    <span className="view-icon pull-left"></span>
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
                <span className="col-name">Reza</span>
                <span className="col-name">Hoseini</span>
            </h6>
            <div className="col-dimension">
                <span className="col-dimension-title">Size:</span>
                <span className="col-dimension-body">
                    <span className="dimension-width">60</span>
                    <span>x</span>
                    <span className="dimension-height">60</span>
                </span>
            </div>
            <div className="col-price">
                <span className="col-price-num">2.100.000</span>
                <span className="col-price-unit">USD</span>
                <span className="col-price-off">5.000.000</span>
            </div>
        </div>
    </a>
</div>
)
}

export default CardArtwork