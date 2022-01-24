import React, { useEffect, useState } from 'react';

import artist20 from '../../assets/img/artists/artist-20.jpg';
import artist21 from '../../assets/img/artists/artist-21.jpg';
import arrow_left_icon from '../../assets/img/arrow-left.svg';
import { t } from 'i18next';
import { ARTIST_EXHIBITION } from '../../utils';
import QueryString from 'qs';
import apiServices from '../../utils/api.services';
import { useTranslation } from 'react-i18next';

function ExhibitionsTab({artistId}) {

    const { t, i18n } = useTranslation();

    const [search, setSearch] = useState();
    const [artistExhibition, setArtistExhibition] = useState();
    const [params, setParams] = useState({
        // search: "",
        page: 1,
        artist_content__id: artistId,
  
    })
    const getArtistExhibition = () => {
        apiServices.get(ARTIST_EXHIBITION, QueryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setArtistExhibition(res.data.data)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }
    useEffect(() => {
        setParams(state => ({ ...state, artist_content__id: artistId }))
    }, [artistId]);
  
    useEffect(() => {
        getArtistExhibition()
    }, [params]);

    return (
        <div id="artist4" className="tab-pane ">
                        <div className="d-flex box-dir-reverse row-artist-exhibition">
                            <div className="col-sm-3">
                                <div className="col-img">
                                    <div className="tags tags-events">{t("artist_profile.local")}</div>
                                    <img src={artist20} width="840" height="840" alt=""
                                         className="img-responsive"/>
                                </div>
                            </div>
                            <div className="col-sm-9">
                                <h3 className="default-title text-dir">{t("artist_profile.COLLECTION")} ۵</h3>
                                <div className="text-dir">گالری آرتیبیشن</div>
                                <div className="col-date text-dir">
                                    <span className="persian-num">16</span>
                                    <span>الی</span>
                                    <span className="persian-num">22</span>
                                    <span>اردیبهشت</span>
                                </div>
                                <p className="text-justify text-dir">
                                    پنجمین نمایشگاه کلکسیونر با حضور طیف گسترده‌ای از گالری‌داران و مجموعه‌داران هنر در
                                    گالری آرتیبیشن در اولین سلسله نمایشگاه‌های کلکسیونر بیش از ۵۰ اثر و در دومین و سومین
                                    دورۀ آن،
                                    مجموعه‌داران با مشارکت خود، به‌ترتیب با بیش از 70 و 78 اثر از تاثیرگذارترین
                                    هنرمندان کلاسیک، سرشناس معاصر و جوانان پیشرو را گرد هم آوردند. در کلکسیونر چهارم 41
                                    اثر از 33هنرمند کلاسیک حضور داشت و اکنون در کلکسیونر پنج با حضور
                                    جمع گسترده‌تری از مجموعه‌داران و گالری‌داران، تعداد 56 اثر از هنرمندان و مشاهیری چون
                                    اردشیر محصص، آیدین آغداشلو، ژازه تباتبایی، حسین محجوبی، رضا بانگیز،
                                    ... توکل اسماعیلی، علی‌اکبر صادقی، مهدی حسینی، محمد احصایی، محمود زنگنه، نیکزاد
                                    نجومی، علی گلستانه، فرشید ملکی، علی مشهدی‌الاصل، قباد شیوا...
                                    <a href="#">
                                        <span>{t("artwork.about_artwork.more")}</span>
                                        <img src={arrow_left_icon} width="16" height="16" alt=""/>
                                    </a>
                                </p>

                            </div>
                        </div>
                        <div className="d-flex box-dir-reverse row-artist-exhibition">
                            <div className="col-sm-3">
                                <div className="col-img">
                                    <div className="tags tags-events text-dir">{t("artist_profile.local")}</div>
                                    <img src={artist21} width="840" height="840" alt=""
                                         className="img-responsive"/>
                                </div>
                            </div>
                            <div className="col-sm-9">
                                <h3 className="default-title text-dir">{t("artist_profile.COLLECTION")} ۵</h3>
                                <div className="text-dir">گالری آرتیبیشن</div>
                                <div className="col-date text-dir">
                                    <span className="persian-num">16</span>
                                    <span>الی</span>
                                    <span className="persian-num">22</span>
                                    <span>اردیبهشت</span>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default ExhibitionsTab
