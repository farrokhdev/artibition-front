import React, { useEffect, useState } from 'react';
import { GALLERY_ARTISTS } from '../../utils';
import apiServices from '../../utils/api.services';
import QueryString from 'qs';
import { useTranslation } from 'react-i18next';
import ProductDetails from './productDetails';
import { Link } from 'react-router-dom';


function Artist({ id }) {
    const { t, i18n } = useTranslation();

    const [galleryArtists, setGalleryArtists] = useState();
    const [params, setParams] = useState({
        search: "",
        page: 1,

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
                                </h6>
                                <Link to={`/site/artworks`}>

                                    <button type="button" class="btn btn-default"><span class="hidden-xs px-1">مشاهده
                                    </span> همه آثار </button>
                                </Link>
                            </div>
                        </div>
                        <div class="col-sm-9 col-xs-8">
                            <ProductDetails artistId={item.id} id={id} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Artist;
