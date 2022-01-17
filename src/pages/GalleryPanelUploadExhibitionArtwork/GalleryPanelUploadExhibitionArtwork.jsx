import React from "react";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import { t } from 'i18next';
import BasketFooterPanelNoBox from "../GalleryPanelSelectArtworkSource/BasketFooterPanelNoBox";


import Aydin_Aghdashloo from '../../assets/img/Aydin_Aghdashloo_04@3x.jpg'
import add from '../../assets/img/add.png'
import artwork from '../../assets/img/artworks/hnrpqkfiup@3x.jpg'
import add_white from '../../assets/img/add-white@2x.png'
import edit_name from '../../assets/img/edit_name.svg'

function GalleryPanelUploadExhibitionArtwork() {
    return (
        <div>
            <div className="container container-fixed">
                <HeaderPanel t={t} />
                <div class="upload-exhibition-artist mrgt125">
                    <h2 class="default-title aligncenter">{t("upload-exhibition-artwork.title")}</h2>
                    <div class=" artist-upload-row">
                        <div class="artist-name-row">
                            <div class="artist-avatar pull-dir">
                                <img class="img-responsive" src={Aydin_Aghdashloo} height="192" width="192" alt="آیدین آغداشلو" />
                            </div>
                            <h4 class="artists-name text-dir">
                                <span>آیدین</span>
                                <span>آغداشلو</span>
                            </h4>
                        </div>
                        <div class="clearfix"></div>
                        <div class="row dir">
                            <div class="col-lg-2 col-sm-3 col-xs-6">
                                <label class="artist-upload addbtn" for="file-upload-1">
                                    <img src={add} width="36" height="36" alt="" class="img-responsive" />
                                </label>
                                <input type={"file"} className="d-none" id="file-upload-1" />
                            </div>
                        </div>
                    </div>
                    <div class=" artist-upload-row">
                        <div class="artist-name-row">
                            <div class="artist-avatar pull-dir">
                                <img class="img-responsive" src={Aydin_Aghdashloo} height="192" width="192" alt="آیدین آغداشلو" />
                            </div>
                            <h4 class="artists-name text-dir">
                                <span>آیدین</span>
                                <span>آغداشلو</span>
                            </h4>
                        </div>
                        <div class="clearfix"></div>
                        <div class="row dir">
                            <div class="col-lg-2 col-sm-3 col-xs-6">
                                <div class="cols">
                                    <div class="col-img">
                                        <div class="tags tags-off persian-num">30 %</div>
                                        <img src={artwork} width="840" height="840" alt="آرتیبیشن" class="img-responsive" />
                                        <div class="tab-overly">
                                            <a href="#" class="btn-see">
                                                <span class="view-icon pull-right"></span>
                                                <span>{t("upload-exhibition-artwork.view")}</span>
                                            </a>
                                            <a href="#" class="btn-sale">{t("upload-exhibition-artwork.shop_now")}</a>
                                            <a href="#" class="like-icon"></a>
                                        </div>
                                    </div>
                                    <div class="col-body">
                                        <div class="col-dimension">
                                            <span class="col-dimension-title">{t("upload-exhibition-artwork.size")}</span>
                                            <span class="col-dimension-body">
                                                <span class="dimension-width">60</span>
                                                <span>{t("upload-exhibition-artwork.x")}</span>
                                                <span class="dimension-height">60</span>
                                            </span>
                                        </div>
                                        <div class="col-price">
                                            <span class="col-price-num">22.000.000</span>
                                            <span class="col-price-unit">{t("upload-exhibition-artwork.price")}</span>
                                            <span class="edit-price"><img src={edit_name} width="32" height="32" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-3 col-xs-6">
                                <label class="artist-upload addbtn" for="file-upload-2">
                                    <img src={add} width="36" height="36" alt="" class="img-responsive" />
                                </label>
                                <input type={"file"} className="d-none" id="file-upload-2" />
                            </div>
                        </div>
                        <button type="button" class="btn-add-artist">
                            <img src={add_white} width="24" height="24" alt="" class="img-responsive" />
                            <span>{t("upload-exhibition-artwork.new_artist")}</span>
                        </button>
                    </div>
                    <div class="adv-btn">
                        <div class="container">
                            <button type="button" class="btn-next pull-dir-rev">{t("upload-exhibition-artwork.confirm_gallery_info")}</button>
                        </div>
                    </div>
                </div>
            </div>
            <BasketFooterPanelNoBox />
        </div>
    )
}

export default GalleryPanelUploadExhibitionArtwork