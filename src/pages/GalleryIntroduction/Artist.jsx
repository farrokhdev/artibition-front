import React, { useEffect, useState } from 'react';
import gallery400 from '../../assets/img/gallery/400.jpg';
import gallery501 from '../../assets/img/gallery/501.jpg'
import { GALLERY_ARTISTS, PRODUCT_BY_ARTIST } from '../../utils';
import apiServices from '../../utils/api.services';
import QueryString from 'qs';
import { useTranslation } from 'react-i18next';


function Artist({ id }) {
    const { t, i18n } = useTranslation();

    const [galleryArtists, setGalleryArtists] = useState();
    const [params, setParams] = useState({
        search: "",
        page: 1,

    })
    const [param, setParam] = useState({

    })


    const getGalleryArtists = () => {
        apiServices.get(GALLERY_ARTISTS(id), QueryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setGalleryArtists(res.data.data)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }
    const getArtistProducts = (artistId) => {
        apiServices.get(PRODUCT_BY_ARTIST(id, artistId), QueryString.stringify(param))
            .then(res => {
                if (res.data) {
                    return (
                        <div class="owl-carousel gallery-artistartworks d-flex">
                            {res.data.data?.map((item) => {
                                console.log("res.data ==>", item)
                                return (
                                    <div class="cols mx-4">
                                        <div class="col-img">
                                            <img src={gallery501} width="830" height="830" alt="آرتیبیشن"
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
                                                <span class="col-name">مجید</span>
                                                <span class="col-name">کورنگ بهشتی</span>
                                            </h6>
                                            <div class="col-dimension">
                                                <span> بدون عنوان </span>
                                            </div>
                                            <div class="col-price">
                                                <span class="col-price-num">2.100.000</span>
                                                <span class="col-price-unit">تومان</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )

                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    useEffect(() => {
        getGalleryArtists()
    }, [params]);

    return (
        <div id="gallery4" class="tab-pane fade in active">
            <div class="gallery-artistartwork">
                {galleryArtists?.results?.map((item, index) =>
                    <div class="row row-artistartwork">
                        <div class="col-sm-3 col-xs-4">
                            <div class="gallery-artistartworkname">
                                <div class="artist-avatar">
                                    <img src={item.bg_image?.exact_url} width="192" height="192" alt=""
                                        class="img-responsive center-block" />
                                </div>
                                <h6 class="gallery-artist-name">
                                    <span>
                                        {i18n.language === 'fa-IR' ?
                                            `${item?.owner?.translations?.fa?.first_name} ${item?.owner?.translations?.fa?.last_name}`
                                            :
                                            `${item?.owner?.translations?.en?.first_name} ${item?.owner?.translations?.en?.last_name}`
                                        }
                                    </span>
                                    {/* <span>آغداشلو</span> */}
                                </h6>
                                <button type="button" class="btn btn-default"><span class="hidden-xs px-1">مشاهده
                                </span> همه آثار </button>
                            </div>
                        </div>
                        <div class="col-sm-9 col-xs-8">
                            {getArtistProducts(item.id)}

                        </div>
                    </div>
                )}
                {/* <div class="row row-artistartwork">
                    <div class="col-sm-3 col-xs-4">
                        <div class="gallery-artistartworkname">
                            <div class="artist-avatar">
                                <img src={gallery400} width="408" height="408" alt=""
                                    class="img-responsive center-block" />
                            </div>
                            <h6 class="gallery-artist-name">
                                <span>بهروز</span>
                                <span>زیندشتی</span>
                            </h6>
                            <button type="button" class="btn btn-default"><span class="hidden-xs px-1"> مشاهده
                            </span> همه آثار </button>
                        </div>
                    </div>
                    <div class="col-sm-9 col-xs-8">
                        <div class="owl-carousel gallery-artistartworks d-flex">
                            {[1, 2, 3].map((item) => {
                                return (
                                    <div class="cols mx-4">
                                        <div class="col-img">
                                            <img src={gallery501} width="830" height="830" alt="آرتیبیشن"
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
                                                <span class="col-name">مجید</span>
                                                <span class="col-name">کورنگ بهشتی</span>
                                            </h6>
                                            <div class="col-dimension">
                                                <span> بدون عنوان </span>
                                            </div>
                                            <div class="col-price">
                                                <span class="col-price-num">2.100.000</span>
                                                <span class="col-price-unit">تومان</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div> */}
                {/* <div class="row row-artistartwork">
                    <div class="col-sm-3 col-xs-4">
                        <div class="gallery-artistartworkname">
                            <div class="artist-avatar">
                                <img src="img/artist-2.jpg" width="408" height="408" alt=""
                                    class="img-responsive center-block" />
                            </div>
                            <h6 class="gallery-artist-name">
                                <span>بریجت</span>
                                <span>رایلی</span>
                            </h6>
                            <button type="button" class="btn btn-default"><span class="hidden-xs">مشاهده
                            </span>همه آثار</button>
                        </div>
                    </div>
                    <div class="col-sm-9 col-xs-8">
                        <div class="owl-carousel gallery-artistartworks">
                            <div class="cols">
                                <div class="col-img">
                                    <img src="img/gallery/501.jpg" width="830" height="830" alt="آرتیبیشن"
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
                                        <span class="col-name">مجید</span>
                                        <span class="col-name">کورنگ بهشتی</span>
                                    </h6>
                                    <div class="col-dimension">
                                        <span> بدون عنوان </span>
                                    </div>
                                    <div class="col-price">
                                        <span class="col-price-num">2.100.000</span>
                                        <span class="col-price-unit">تومان</span>
                                    </div>
                                </div>
                            </div>
                            <div class="cols">
                                <div class="col-img">
                                    <img src="img/gallery/502.jpg" width="840" height="840" alt="آرتیبیشن"
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
                                        <span class="col-name">مجید</span>
                                        <span class="col-name">کورنگ بهشتی</span>
                                    </h6>
                                    <div class="col-dimension">
                                        <span> بدون عنوان </span>
                                    </div>
                                    <div class="col-price">
                                        <span class="col-price-num">2.100.000</span>
                                        <span class="col-price-unit">تومان</span>
                                    </div>
                                </div>
                            </div>
                            <div class="cols">
                                <div class="col-img">
                                    <img src="img/gallery/503.jpg" width="830" height="830" alt="آرتیبیشن"
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
                                        <span class="col-name">مجید</span>
                                        <span class="col-name">کورنگ بهشتی</span>
                                    </h6>
                                    <div class="col-dimension">
                                        <span> بدون عنوان </span>
                                    </div>
                                    <div class="col-price">
                                        <span class="col-price-num">2.100.000</span>
                                        <span class="col-price-unit">تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row-artistartwork">
                    <div class="col-sm-3 col-xs-4">
                        <div class="gallery-artistartworkname">
                            <div class="artist-avatar">
                                <img src="img/artist-3.jpg" width="408" height="408" alt=""
                                    class="img-responsive center-block" />
                            </div>
                            <h6 class="gallery-artist-name">
                                <span>سعید</span>
                                <span>محمودی</span>
                            </h6>
                            <button type="button" class="btn btn-default"><span class="hidden-xs">مشاهده
                            </span>همه آثار</button>
                        </div>
                    </div>
                    <div class="col-sm-9 col-xs-8">
                        <div class="owl-carousel gallery-artistartworks">
                            <div class="cols">
                                <div class="col-img">
                                    <img src="img/gallery/501.jpg" width="830" height="830" alt="آرتیبیشن"
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
                                        <span class="col-name">مجید</span>
                                        <span class="col-name">کورنگ بهشتی</span>
                                    </h6>
                                    <div class="col-dimension">
                                        <span> بدون عنوان </span>
                                    </div>
                                    <div class="col-price">
                                        <span class="col-price-num">2.100.000</span>
                                        <span class="col-price-unit">تومان</span>
                                    </div>
                                </div>
                            </div>
                            <div class="cols">
                                <div class="col-img">
                                    <img src="img/gallery/502.jpg" width="840" height="840" alt="آرتیبیشن"
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
                                        <span class="col-name">مجید</span>
                                        <span class="col-name">کورنگ بهشتی</span>
                                    </h6>
                                    <div class="col-dimension">
                                        <span> بدون عنوان </span>
                                    </div>
                                    <div class="col-price">
                                        <span class="col-price-num">2.100.000</span>
                                        <span class="col-price-unit">تومان</span>
                                    </div>
                                </div>
                            </div>
                            <div class="cols">
                                <div class="col-img">
                                    <img src="img/gallery/503.jpg" width="830" height="830" alt="آرتیبیشن"
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
                                        <span class="col-name">مجید</span>
                                        <span class="col-name">کورنگ بهشتی</span>
                                    </h6>
                                    <div class="col-dimension">
                                        <span> بدون عنوان </span>
                                    </div>
                                    <div class="col-price">
                                        <span class="col-price-num">2.100.000</span>
                                        <span class="col-price-unit">تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}
export default Artist;
