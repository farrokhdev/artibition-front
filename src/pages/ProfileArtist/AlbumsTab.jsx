import React , {useEffect, useState} from 'react';

import hnrpqkfiup3 from '../../assets/img/mainpage/hnrpqkfiup@3x.jpg';
import mainpage2 from '../../assets/img/mainpage/2.jpg';
import mainpage3 from '../../assets/img/mainpage/3.jpg';
import mainpage4 from '../../assets/img/mainpage/4.jpg';
import { t } from 'i18next';
import ModalVeiwAlbums from './ModalVeiwAlbums';
import classnames from 'classnames';
import {GetLanguage} from '../../utils/utils';
import { ARTIST_ALBUMS, ARTIST_CATEGORY } from '../../utils';
import apiServices from '../../utils/api.services';
import queryString from 'query-string'
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

function AlbumsTab({ownerId , setVisibleShowAlbums}) {

  // const {handleShowVeiwAlbumModal} = handleShowVeiwAlbumModals;
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();

  const [search, setSearch] = useState();
  const [artistCategory, setArtistCategory] = useState();
  const [params, setParams] = useState({
      // search: "",
      // owner_id: ownerId,
      page: 1,
      artist_id : ownerId

  })

  console.log(setArtistCategory)
  const getArtistCategory = () => {
    // ARTIST_ALBUMS
      apiServices.get(ARTIST_ALBUMS, queryString.stringify(params))
      // apiServices.get(ARTIST_ALBUMS, queryString.stringify(params))
          .then(res => {
              if (res.data) {
                  setArtistCategory(res.data.data)
              }
          })
          .catch(err => {
              console.log("err", err)
          })
  }
  // useEffect(() => {
  //     setParams(state => ({ ...state, artist_id: ownerId }))
  // }, [ownerId]);

  useEffect(() => {
      getArtistCategory()
  }, [params]);


    return (
      <>
        <div id="artist2" className="tab-pane ">
        <div className="artist2-tab">
          {artistCategory?.results?.map((item,index) =>
          <>
            <h3 className="artist-title text-dir">{i18n.language === 'fa-IR' ? item.translations?.fa?.title : item.translations?.en?.title}</h3>
            <button onClick={() => setVisibleShowAlbums(true)} type="button" className="d-flex box-dir-reverse align-items-center btn-more pull-dir" >
                    <span>{t("artist_profile.veiw")}</span>
                    {/* <i 
                        className={classnames("glyphicon", {
                          "glyphicon-chevron-left": GetLanguage() === 'fa-IR',
                          "glyphicon-chevron-right": GetLanguage() === 'en-US'
                        })}
                    ></i> */}
            </button>
            <div className="clearfix"></div>
            <div style={{overflow : 'auto'}} className="owl-carousel d-flex">
              {item?.products?.map((itm,inx) => 
                <div className="cols mx-4">
                  {console.log("iteeeemmmm" , item)}
                    <div className="col-img">
                        <img src={item?.artist?.bg_image?.exact_url} width="840" height="840"
                             alt="????????????????"
                             className="img-responsive"/>
                        <div className="tab-overly">
                            <a onClick={() =>
                              navigate(
                                `/site/artworks-detail/?id=${item?.id}&artist_id=${item?.artist?.id}`
                              )
                            }  className="btn-see">
                                <span className="view-icon pull-right"></span>
                                <span>{t("card_artwork.veiw")}</span>
                            </a>
                            <a  className="btn-sale">{t("card_artwork.request_buy")}</a>

                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                    <div className="col-body ">
                      <h6 className="col-title text-dir">
                        {i18n.language === 'fa-IR' ?
                        <>
                        <span className="col-name">{itm.translations.fa.artist_name}</span>
                        {/* <span className="col-name">{itm.translations.fa.last_name}</span> */}
                        </>
                        :
                        <>
                        <span className="col-name">{itm.translations.en.artist_name}</span>
                        {/* <span className="col-name">{itm.translations.en.last_name}</span> */}
                        </>}
                      </h6>
                      <div className="col-dimension text-dir">

                        <div className="d-flex box-dir-reverse">
                          <span className="col-dimension-title">{t("card_artwork.size.title")}</span>
                          <span className="col-dimension-body mx-2">
                            <div className="d-flex">
                              <span className="dimension-width">60</span>
                              <span className="mx-2">{t("card_artwork.size.in")}</span>
                              <span className="dimension-height ">60</span>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="col-price text-dir">
                        <div className="d-flex box-dir-reverse">
                          <span className="col-price-num">22.000.000</span>
                          <span className="col-price-unit">{t("toman")}</span>
                        </div>

                      </div>
                    </div>
                </div>
              )}
                {/* <div className="cols mx-4">
                    <div className="col-img">
                        <img src={mainpage2} width="840" height="840" alt="????????????????"
                             className="img-responsive"/>
                        <div className="tab-overly">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-right"></span>
                                <span>{t("card_artwork.veiw")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                    <div className="col-body ">
                      <h6 className="col-title text-dir">
                        <span className="col-name">????????</span>
                        <span className="col-name">????????????</span>
                      </h6>
                      <div className="col-dimension text-dir">

                        <div className="d-flex box-dir-reverse">
                          <span className="col-dimension-title">{t("card_artwork.size.title")}</span>
                          <span className="col-dimension-body mx-2">
                            <div className="d-flex">
                              <span className="dimension-width">60</span>
                              <span className="mx-2">{t("card_artwork.size.in")}</span>
                              <span className="dimension-height ">60</span>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="col-price text-dir">
                        <div className="d-flex box-dir-reverse">
                          <span className="col-price-num">22.000.000</span>
                          <span className="col-price-unit">{t("toman")}</span>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="cols mx-4">
                    <div className="col-img">
                        <img src={mainpage3} width="840" height="840" alt="????????????????"
                             className="img-responsive"/>
                        <div className="tab-overly">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-right"></span>
                                <span>{t("card_artwork.veiw")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                    <div className="col-body ">
                      <h6 className="col-title text-dir">
                        <span className="col-name">??????????</span>
                        <span className="col-name">???????????? ??????????</span>
                      </h6>
                      <div className="col-dimension text-dir">

                        <div className="d-flex box-dir-reverse">
                          <span className="col-dimension-title">{t("card_artwork.size.title")}</span>
                          <span className="col-dimension-body mx-2">
                            <div className="d-flex">
                              <span className="dimension-width">60</span>
                              <span className="mx-2">{t("card_artwork.size.in")}</span>
                              <span className="dimension-height ">60</span>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="col-price text-dir">
                        <div className="d-flex box-dir-reverse">
                          <span className="col-price-num">22.000.000</span>
                          <span className="col-price-unit">{t("toman")}</span>
                        </div>

                      </div>
                    </div>
                </div>
                <div className="cols mx-4">
                    <div className="col-img">
                        <div className="tags tags-spacial">{t("card_artwork.special")}</div>
                        <img src={mainpage4} width="840" height="840" alt="????????????????"
                             className="img-responsive"/>
                        <div className="tab-overly">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-right"></span>
                                <span>{t("card_artwork.veiw")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                    <div className="col-body ">
                      <h6 className="col-title text-dir">
                        <span className="col-name">??????</span>
                        <span className="col-name">??????????</span>
                      </h6>
                      <div className="col-dimension text-dir">

                        <div className="d-flex box-dir-reverse">
                          <span className="col-dimension-title">{t("card_artwork.size.title")}</span>
                          <span className="col-dimension-body mx-2">
                            <div className="d-flex">
                              <span className="dimension-width">60</span>
                              <span className="mx-2">{t("card_artwork.size.in")}</span>
                              <span className="dimension-height ">60</span>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="col-price text-dir">
                        <div className="d-flex box-dir-reverse">
                          <span className="col-price-num">22.000.000</span>
                          <span className="col-price-unit">{t("toman")}</span>
                        </div>

                      </div>
                    </div>
                </div> */}
            </div>
            <div className="clearfix mt-5"></div>
          </>
           )}
            {/* <h3 className="artist-title text-dir">{t("artist_profile.more_paint")}</h3>
            <button type="button" className="d-flex box-dir-reverse align-items-center btn-more pull-dir">
                <span>{t("artist_profile.veiw")}</span>
                <i 
                    className={classnames("glyphicon", {
                      "glyphicon-chevron-left": GetLanguage() === 'fa-IR',
                      "glyphicon-chevron-right": GetLanguage() === 'en-US'
                    })}
                ></i>
            </button>
            <div className="clearfix"></div>
            <div style={{overflow : 'auto'}} className="owl-carousel d-flex">
                <div className="cols mx-4">
                    <div className="col-img">
                        <img src={hnrpqkfiup3} width="840" height="840"
                             alt="????????????????"
                             className="img-responsive"/>
                        <div className="tab-overly">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-right"></span>
                                <span>{t("card_artwork.veiw")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                    <div className="col-body ">
                      <h6 className="col-title text-dir">
                        <span className="col-name">??????</span>
                        <span className="col-name">??????????</span>
                      </h6>
                      <div className="col-dimension text-dir">

                        <div className="d-flex box-dir-reverse">
                          <span className="col-dimension-title">{t("card_artwork.size.title")}</span>
                          <span className="col-dimension-body mx-2">
                            <div className="d-flex">
                              <span className="dimension-width">60</span>
                              <span className="mx-2">{t("card_artwork.size.in")}</span>
                              <span className="dimension-height ">60</span>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="col-price text-dir">
                        <div className="d-flex box-dir-reverse">
                          <span className="col-price-num">22.000.000</span>
                          <span className="col-price-unit">{t("toman")}</span>
                        </div>

                      </div>
                    </div>
                </div>
                <div className="cols mx-4">
                    <div className="col-img">
                        <img src={mainpage2} width="840" height="840" alt="????????????????"
                             className="img-responsive"/>
                        <div className="tab-overly">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-right"></span>
                                <span>{t("card_artwork.veiw")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                    <div className="col-body ">
                      <h6 className="col-title text-dir">
                        <span className="col-name">????????</span>
                        <span className="col-name">????????????</span>
                      </h6>
                      <div className="col-dimension text-dir">

                        <div className="d-flex box-dir-reverse">
                          <span className="col-dimension-title">{t("card_artwork.size.title")}</span>
                          <span className="col-dimension-body mx-2">
                            <div className="d-flex">
                              <span className="dimension-width">60</span>
                              <span className="mx-2">{t("card_artwork.size.in")}</span>
                              <span className="dimension-height ">60</span>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="col-price text-dir">
                        <div className="d-flex box-dir-reverse">
                          <span className="col-price-num">22.000.000</span>
                          <span className="col-price-unit">{t("toman")}</span>
                        </div>

                      </div>
                    </div>
                </div>
                <div className="cols mx-4">
                    <div className="col-img">
                        <img src={mainpage3} width="840" height="840" alt="????????????????"
                             className="img-responsive"/>
                        <div className="tab-overly">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-right"></span>
                                <span>{t("card_artwork.veiw")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                    <div className="col-body ">
                      <h6 className="col-title text-dir">
                        <span className="col-name">??????????</span>
                        <span className="col-name">???????????? ??????????</span>
                      </h6>
                      <div className="col-dimension text-dir">

                        <div className="d-flex box-dir-reverse">
                          <span className="col-dimension-title">{t("card_artwork.size.title")}</span>
                          <span className="col-dimension-body mx-2">
                            <div className="d-flex">
                              <span className="dimension-width">60</span>
                              <span className="mx-2">{t("card_artwork.size.in")}</span>
                              <span className="dimension-height ">60</span>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="col-price text-dir">
                        <div className="d-flex box-dir-reverse">
                          <span className="col-price-num">22.000.000</span>
                          <span className="col-price-unit">{t("toman")}</span>
                        </div>

                      </div>
                    </div>
                </div>
                <div className="cols mx-4">
                    <div className="col-img">
                        <div className="tags tags-spacial">{t("card_artwork.special")}</div>
                        <img src={mainpage4} width="840" height="840" alt="????????????????"
                             className="img-responsive"/>
                        <div className="tab-overly">
                            <a href="#" className="btn-see">
                                <span className="view-icon pull-right"></span>
                                <span>{t("card_artwork.veiw")}</span>
                            </a>
                            <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                            <a href="#" className="like-icon"></a>
                        </div>
                    </div>
                    <div className="col-body ">
                      <h6 className="col-title text-dir">
                        <span className="col-name">??????????</span>
                        <span className="col-name">??????????????</span>
                      </h6>
                      <div className="col-dimension text-dir">

                        <div className="d-flex box-dir-reverse">
                          <span className="col-dimension-title">{t("card_artwork.size.title")}</span>
                          <span className="col-dimension-body mx-2">
                            <div className="d-flex">
                              <span className="dimension-width">60</span>
                              <span className="mx-2">{t("card_artwork.size.in")}</span>
                              <span className="dimension-height ">60</span>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="col-price text-dir">
                        <div className="d-flex box-dir-reverse">
                          <span className="col-price-num">22.000.000</span>
                          <span className="col-price-unit">{t("toman")}</span>
                        </div>

                      </div>
                    </div>
                </div>
            </div> */}
        </div>

    </div>

        </>
    )
}

export default AlbumsTab;
