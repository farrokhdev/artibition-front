import i18next from 'i18next';
import moment from 'jalali-moment';
import QueryString from 'qs';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import artistontent from '../../assets/img/artists/artist-content-1.jpg';
import video from '../../assets/img/video.png'
import { GALLERY_CONTENT } from '../../utils';
import apiServices from '../../utils/api.services';
import { timeToStr } from '../../utils/utils';

function Journal({ id }) {

    const { t, i18n } = useTranslation();
    const [galleryContent, setGalleryContent] = useState();
    const [params, setParams] = useState({
        search: "",
        page: 1,

    })

    const getGalleryContent = () => {
        apiServices.get(GALLERY_CONTENT(id), QueryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setGalleryContent(res.data.data)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    useEffect(() => {
        getGalleryContent()
    }, [params]);

    return (
        <div id="gallery5" className="tab-pane fade in active">
            <div className="row">
                {galleryContent?.results?.map((journal) => {
                    return (
                        <div className="col-sm-4">
                            <Link to={`/site/gallery-content/${id}/${journal.id}`} className="cols">
                                <div className="col-img">
                                    {journal?.type === "video" &&
                                        <div className="video-prev"><img src={video} width="36" height="36"
                                            alt="" />
                                        </div>
                                    }
                                    <img src={journal.poster?.exact_url} width="1000" height="1000"
                                        alt="آرتیبیشن" className="img-responsive" />
                                </div>
                                <div className="col-body">
                                    <h6 className="col-title">
                                        {i18n.language === 'fa-IR' ?
                                            <span className="col-name">{journal.translations?.fa?.title}</span>
                                            :
                                            <span className="col-name">{journal.translations?.en?.title}</span>
                                        }
                                    </h6>
                                    <span className="block-time persian-num pull-dir">{moment(journal?.creation_date, 'YYYY/MM/DD').locale(i18next?.language === 'fa-IR' ? 'fa' : 'en').format('D MMMM')}</span>
                                </div>
                            </Link>
                        </div>

                    )
                })}

            </div>
            <div className="row-pagination">
                <ul className="pagination">
                    <li><a href="#">1</a></li>
                    <li className="active"><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Journal;