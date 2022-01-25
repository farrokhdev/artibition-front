import QueryString from 'qs';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import artistontent from '../../assets/img/artists/artist-content-1.jpg';
import video from '../../assets/img/video.png'
import { GALLERY_CONTENT } from '../../utils';
import apiServices from '../../utils/api.services';
import { timeToStr } from '../../utils/utils';

function Journal({id}) {

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
        <div id="gallery5" class="tab-pane fade in active">
            <div class="row">
                {galleryContent?.results?.map((journal) => {
                    return (
                        <div class="col-sm-4">
                            <Link to="/site/gallery-content-page" class="cols">
                                <div class="col-img">
                                    <div class="video-prev"><img src={video} width="36" height="36"
                                        alt="" />
                                    </div>
                                    <img src={journal.poster?.exact_url} width="1000" height="1000"
                                        alt="آرتیبیشن" class="img-responsive" />
                                </div>
                                <div class="col-body">
                                    <h6 class="col-title">
                                    {i18n.language === 'fa-IR' ?
                                        <span class="col-name">{journal.translations?.fa?.description}</span>
                                        :
                                        <span class="col-name">{journal.translations?.en?.description}</span>
                                    }
                                    </h6>
                                    <span class="block-time persian-num">{timeToStr(journal.creation_date, "jYYYY jMM jDD")}</span>
                                </div>
                            </Link>
                        </div>

                    )
                })}

            </div>
            <div class="row-pagination">
                <ul class="pagination">
                    <li><a href="#">1</a></li>
                    <li class="active"><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Journal;