import React, { useEffect, useState } from 'react';

import artist20 from '../../assets/img/artists/artist-20.jpg';
import artist21 from '../../assets/img/artists/artist-21.jpg';
import arrow_left_icon from '../../assets/img/arrow-left.svg';
import { t } from 'i18next';
import { ARTIST_EXHIBITION } from '../../utils';
import QueryString from 'qs';
import apiServices from '../../utils/api.services';
import { useTranslation } from 'react-i18next';
import { timeToStr } from '../../utils/utils';

function ExhibitionsTab({artistId}) {

    const { t, i18n } = useTranslation();

    const [search, setSearch] = useState();
    const [artistExhibition, setArtistExhibition] = useState();
    const [params, setParams] = useState({
        // search: "",
        page: 1,
  
    })
    const getArtistExhibition = () => {
        apiServices.get(ARTIST_EXHIBITION(artistId), QueryString.stringify(params))
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
        getArtistExhibition()
    }, [params]);

    return (
        <div id="artist4" className="tab-pane ">
            {artistExhibition?.map((item,index) => 
                        <div key={index} className="d-flex box-dir-reverse row-artist-exhibition">
                            <div className="col-sm-3">
                                <div className="col-img">
                                    <div className="tags tags-events">
                                    {i18n.language === 'fa-IR' ?
                                    item.type === "virtual" ? 'مجازی' : item.type === "real" ? 'حضوری' : 'مجازی-حضوری'
                                    :item.type === "virtual" ? 'virtual' : item.type === "real" ? 'real' : 'virtual-real'
                                }</div>
                                    <img src={item?.poster && item.poster[0]?.exact_url} width="840" height="840" alt=""
                                         className="img-responsive"/>
                                </div>
                            </div>
                            <div className="col-sm-9">
                                <h3 className="default-title text-dir">
                                {i18n.language === 'fa-IR' ?
                                item.translations?.fa?.name
                                    :
                                item.translations?.en?.name
                            }
                                    </h3>
                                <div className="text-dir">
                                {i18n.language === 'fa-IR' ?
                                item?.gallery?.translations?.fa?.title
                                :
                                item?.gallery?.translations?.en?.title
                        }
                                </div>
                                <div className="col-date text-dir">
                                    <span className="persian-num">{timeToStr(item.start_date[`${item.type=== 'virtual_real'? 'virtual' : item.type}_start_date`], "jDD")}</span>
                                    <span>الی</span>
                                    <span className="persian-num">{timeToStr(item.end_date[`${item.type=== 'virtual_real'? 'virtual' : item.type}_end_date`], "jDD")}</span>
                                    <span>{timeToStr(item.end_date[`${item?.type}_end_date`], "jMM")}</span>
                                </div>
                                <p className="text-justify text-dir">
                                {i18n.language === 'fa-IR' ?
                                item?.translations?.fa?.statement
                                :
                                item?.translations?.en?.statement
                    }
                                    <a href="#">
                                        <span>{t("artwork.about_artwork.more")}</span>
                                        <img src={arrow_left_icon} width="16" height="16" alt=""/>
                                    </a>
                                </p>

                            </div>
                        </div>
            )}
                        {/* <div className="d-flex box-dir-reverse row-artist-exhibition">
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
                        </div> */}
                    </div>
    )
}

export default ExhibitionsTab
