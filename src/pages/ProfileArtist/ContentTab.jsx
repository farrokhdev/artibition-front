import QueryString from 'qs';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import artist_content1 from '../../assets/img/artists/artist-content-1.jpg';
import artist_content2 from '../../assets/img/artists/artist-content-2.jpg';
import artist_content3 from '../../assets/img/artists/artist-content-3.jpg';
import video_icon from '../../assets/img/video.png';
import { ARTIST_CONTENT } from '../../utils';
import apiServices from '../../utils/api.services';
import moment from 'jalali-moment'
import i18next from 'i18next';
import { Link } from 'react-router-dom';

function ContentTab({ artistId }) {

    const { t, i18n } = useTranslation();

    const [search, setSearch] = useState();
    const [artistContent, setArtistContent] = useState();
    const [params, setParams] = useState({
        // search: "",
        page: 1,
        artist_content__id: artistId,

    })
    const getArtistContent = () => {
        apiServices.get(ARTIST_CONTENT, QueryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setArtistContent(res.data.data)
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
        getArtistContent()
    }, [params]);

    return (
        <div id="artist5" className="tab-pane ">
            <div className="d-flex box-dir-reverse">
                {artistContent?.results?.map((item, index) =>
                    <div className="col-sm-4">
                        <Link
                            to={`/site/artist-content/${artistId}/${item?.id}`}
                            className="cols">
                            <div className="col-img">
                                <div className="video-prev"><img src={video_icon} width="36" height="36" alt="" />
                                </div>
                                <img src={item.poster?.exact_url} width="1000" height="1000"
                                    alt="آرتیبیشن"
                                    className="img-responsive" />
                            </div>
                            <div className="col-body">
                                <h6 className="col-title text-dir">
                                    {i18n.language === 'fa-IR' ?

                                        <span className="col-name">{item.translations?.fa?.title}</span>
                                        :
                                        <span className="col-name">{item.translations?.en?.title}</span>

                                    }
                                </h6>
                                <span className="block-time persian-num pull-dir">{moment(item?.creation_date, 'YYYY/MM/DD').locale(i18next?.language === 'fa-IR' ? 'fa' : 'en').format('D MMMM YYYY')}</span>
                            </div>
                        </Link>
                    </div>

                )}
                {/* <div className="col-sm-4">
                                <a href="#" className="cols">
                                    <div className="col-img">
                                        <img src={artist_content2} width="381" height="381"
                                             alt="آرتیبیشن"
                                             className="img-responsive"/>
                                    </div>
                                    <div className="col-body">
                                        <h6 className="col-title text-dir">
                                            <span className="col-name">آیدین آغداشلو رییس داوران دوسالانه «دامون‌فر» شد</span>
                                        </h6>
                                        <span className="block-time persian-num pull-dir">4 فرودین ۹۸</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-4">
                                <a href="#" className="cols">
                                    <div className="col-img">
                                        <img src={artist_content3} width="840" height="840"
                                             alt="آرتیبیشن"
                                             className="img-responsive"/>
                                    </div>
                                    <div className="col-body">
                                        <h6 className="col-title text-dir">
                                            <span className="col-name">عکس آیدین آغداشلو و دخترش در کنار ابراهیم گلستان</span>
                                        </h6>
                                        <span className="block-time persian-num pull-dir">19 اردیبهشت ۹۹</span>
                                    </div>
                                </a>
                            </div> */}
            </div>
        </div>
    )
}

export default ContentTab;
