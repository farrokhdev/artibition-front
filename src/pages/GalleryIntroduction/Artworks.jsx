import React from 'react';
import artist2 from '../../assets/img/artists/artist-2.jpg'
import Filter from '../../assets/img/Filter.svg';
import Clear from '../../assets/img/clear.svg';
import FilterSidBarInArtworks from './FilterSidBarInArtworks';
import { t } from 'i18next';

function Artworks() {
    return (
        <div id="gallery3" class="tab-pane fade in active">
            <div class="content-header">
                <div class="row">
                    <div class="col-sm-3 col-xs-6">
                        <div type="button" class="filter-btn">
                            <img src={Filter} width="16" height="15" alt="" />
                            <span>{t("artworkList.filter.title")}</span>
                            <button class="btn clear-tag">
                                <img src={Clear} width="10" height="10" alt="" />
                                <span>{t("artworkList.filter.remove_all")}</span>
                            </button>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-offset-3 ml-0">
                        <div class="form-group pull-left">
                            <select class="form-control" id="sel1">
                                <option>{t("artworkList.filter.last_update")}</option>
                                <option>{t("artworkList.filter.sell")}</option>
                                <option>{t("artworkList.filter.visite")}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-body">
                <div class="row">
                    <FilterSidBarInArtworks />
                    <div class="col-md-9">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((artwork) => {
                            return (
                                <>
                                    <div class="col-sm-4 col-xs-6">
                                        <div class="cols">
                                            <div class="col-img">
                                                <img src={artist2} width="942" height="1232"
                                                    alt="آرتیبیشن" class="img-responsive" />
                                                <div class="tab-overly">
                                                    <a href="#" class="btn-see">
                                                        <span class="view-icon pull-right"></span>
                                                        <span>{t("artwork.view-artwork")}</span>
                                                    </a>
                                                    <a href="#" class="btn-sale">{t("artwork.btn-action-to-shop")}</a>
                                                    <a href="#" class="like-icon"></a>
                                                </div>
                                            </div>
                                            <div class="col-body">
                                                <h6 class="col-title d-flex">
                                                    <span class="col-name">آیدین</span>
                                                    <span class="col-name">آغداشلو</span>
                                                </h6>
                                                <div class="col-dimension d-flex">

                                                    <span class="col-dimension-title">ابعاد:</span>
                                                    <span class="col-dimension-body">
                                                        <span class="dimension-width">60</span>
                                                        <span> در </span>
                                                        <span class="dimension-height">60</span>
                                                    </span>
                                                </div>
                                                <div class="col-price d-flex">
                                                    <span class="col-price-num">22.000.000</span>
                                                    <span class="col-price-unit">تومان</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clearfix visible-xs"></div></>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artworks;