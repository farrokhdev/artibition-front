import React from 'react'
import artwork_image from '../../assets/img/mainpage/rdbewaopdm840.jpg';

function CardArtwork() {
return (
<div class="col-sm-3">
    <a href="#" class="cols">
        <div class="col-img">
            <div class="tags tags-off ">30 %</div>
            <img src={artwork_image} width="840" height="840" alt="Arthibition" class="img-responsive" />
            <div class="tab-overly">
                <span class="btn-see hidden-xs hidden-sm">
                    <span class="view-icon pull-left"></span>
                    <span>view</span>
                </span>
                <button type="button" class="btn-sale">
                    <span class="hidden-xs hidden-sm">Shop now</span>
                    <span class="shopping-cart-xs visible-xs visible-sm"></span>
                </button>
                <button type="button" class="like-icon isLike"></button>
            </div>
        </div>
        <div class="col-body">
            <h6 class="col-title">
                <span class="col-name">Reza</span>
                <span class="col-name">Hoseini</span>
            </h6>
            <div class="col-dimension">
                <span class="col-dimension-title">Size:</span>
                <span class="col-dimension-body">
                    <span class="dimension-width">60</span>
                    <span>x</span>
                    <span class="dimension-height">60</span>
                </span>
            </div>
            <div class="col-price">
                <span class="col-price-num">2.100.000</span>
                <span class="col-price-unit">USD</span>
                <span class="col-price-off">5.000.000</span>
            </div>
        </div>
    </a>
</div>
)
}

export default CardArtwork