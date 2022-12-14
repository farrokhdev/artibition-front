import React, { useEffect, useState } from 'react'
import { t } from 'i18next';
import GalleyRelatedContent from './GalleyRelatedContent';
import IntroducingTheExhibition from './IntroducingTheExhibition';
import { Breadcrumb, Tabs } from 'antd';
import AllArtworks from './AllArtworks';
import gallery400 from '../../assets/img/gallery/400.jpg';
import articles100 from '../../assets/img/articles/100.jpg';
import apiServices from '../../utils/api.services';
import QueryString from 'qs';
import { GALLERY_ARTISTS, GALLERY_EXHIBITION } from '../../utils';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Introduction({ id, galleryIntroduction, galleryExhibition }) {

    const { TabPane } = Tabs;
    const { t, i18n } = useTranslation();
    const [galleryArtists, setGalleryArtists] = useState();
    const [params, setParams] = useState({
        search: "",
        page: 1,

    })
    function callback(key) {
        console.log(key);
    }

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
        <div className="tab-content">
            <div id="gallery1" className="tab-pane fade in active">
                <div className="content-body">
                    <IntroducingTheExhibition galleryIntroduction={galleryIntroduction} galleryExhibition={galleryExhibition} />
                </div>
                <div className="events">

                    <div class="row ">
                        <div class="d-flex public-header">
                            <div class="col-xs-8">
                                <h2 class="text-dir default-title">{t("artist_profile.tabs.exhibitions")}</h2>
                            </div>
                            <div class="col-xs-4">
                                <a href="#" class="btn-readmore pull-dir-rev" style={{ position: "unset" }}>{t("artist_profile.tabs.all_exhibitions")}</a>

                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>

                <GalleyRelatedContent galleryExhibition={galleryExhibition} galleryIntroduction={galleryIntroduction} />

                <div className="events">
                    <div>
                        <div className="d-flex public-header">
                            <div className="col-xs-8">
                                <h2 className="text-dir default-title">{t("nav-menu-artworks")}</h2>
                            </div>
                            <div className="col-xs-4">
                                <Link to="/site/artworks" className="btn-readmore pull-dir-rev d-block" style={{ position: "unset" }}>{t("nav-submenu.artworks.artField.all")}</Link>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="default-tab tab-3 tab-interval">
                    <div className="">
                        <div className="tab-overflow">
                            <div className="col-md-12">

                                <ul className="nav ">
                                    <Tabs defaultActiveKey="1" onChange={callback}>
                                        <TabPane className="mx-5" tab={t("nav-submenu.artworks.artField.all_artworks")} key="1">
                                            <AllArtworks id={id} />
                                        </TabPane>
                                        <TabPane tab={t("filter-header.category.painting")} key="2">

                                            {/* <div id="menu1" className="tab-pane fade">
                                                <h3>Menu 1</h3>
                                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo
                                                    consequat.</p>
                                            </div> */}

                                        </TabPane>
                                        <TabPane tab={t("filter-header.category.photography")} key="3">
                                            {/* <div id="menu2" className="tab-pane fade">
                                                <h3>Menu 2</h3>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                                    laudantium,
                                                    totam rem aperiam.</p>
                                            </div> */}
                                        </TabPane>
                                        <TabPane tab={t("filter-header.category.sculpture")} key="4">
                                            {/* <div id="menu3" className="tab-pane fade">
                                                <h3>Menu 3</h3>
                                                <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                                    explicabo.</p>

                                            </div> */}
                                        </TabPane>
                                        <TabPane tab={t("filter-header.category.calligram")} key="5">

                                        </TabPane>
                                        <TabPane tab={t("filter-header.category.calligraphy")} key="6">

                                        </TabPane>
                                        <TabPane tab={t("filter-header.category.printmaking")} key="7">

                                        </TabPane>
                                        <TabPane tab={t("filter-header.category.graphic")} key="8">

                                        </TabPane>
                                        <TabPane tab={t("filter-header.category.drawing")} key="9">

                                        </TabPane>

                                    </Tabs>
                                </ul>
                            </div>
                            <div className="col-md-2 visible-md">
                                <select className="form-control pull-left">
                                    <option>?????????? ???????????????</option>
                                    <option>????????????</option>
                                    <option>????????????????</option>
                                </select>
                            </div>


                            <div class="gallery-artists">
                                <div className="events">
                                    <div className="">
                                        <div className="d-flex public-header">
                                            <div className="col-xs-9">
                                                <h2 className="text-dir default-title">{t("artist_profile.artists")}</h2>
                                            </div>
                                            <div className="col-xs-3">
                                                <Link to="/site/artists" className="btn-readmore pull-dir-rev" style={{ position: "unset" }}>{t("nav-submenu.showroom.category.all")}</Link>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>


                                <div style={{ overflow: 'auto' }} className="owl-carousel d-flex" id="gallery-artists">
                                    {galleryArtists?.results?.map((artist) => {
                                        return (

                                            <div className="gallery-artist-img ml-1 pl-3">
                                                <img src={artist?.bg_image?.exact_url} width="192" height="192" alt=""
                                                    className="img-fluid" />
                                                <h6 className="gallery-artist-name">
                                                    {i18n.language === 'fa-IR' ?
                                                        <>
                                                            <span>{`${artist?.owner?.translations?.fa?.first_name} ${artist?.owner?.translations?.fa?.last_name}`}</span>
                                                        </>
                                                        :
                                                        <>
                                                            <span>{`${artist?.owner?.translations?.en?.first_name} ${artist?.owner?.translations?.en?.last_name}`}</span>
                                                        </>}
                                                </h6>
                                                <button type="button" class=" btn-follow">{t("artwork.follow")}</button>

                                            </div>
                                        )
                                    })}
                                </div>

                                <div class="articles">
                                    <div class="public-header">
                                        <div class="">
                                            <div class="col-xs-12">
                                                <h2 class="default-title text-dir">{t("news-and-article-art.articles")}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="row container">
                                        {[1, 2, 3].map((article) => {
                                            return (

                                                <div className="col-sm-4">
                                                    <a href="#" className="articles-block">
                                                        <div className="news-imgblock">
                                                            <div className="news-date">
                                                                <span className="persian-num">29</span>
                                                                <span>????????????????</span>
                                                            </div>
                                                            <img src={articles100} width="840" height="840"
                                                                className="img-responsive" alt="????????????????" />
                                                        </div>
                                                        <div className="articles-txt">
                                                            <h5 className="articles-title">
                                                                ?????????? ???? ?????????? ?????? ???????? ?????????????? (???? ?????? ???? ?? ???????????? ???? ?? ??????
                                                                ???? ?? ?????? ?????? ???????? ????)
                                                            </h5>
                                                            <p>
                                                                ???? ???? ?????? ???????? ???? ???????????? ???? ???????? ?????? ?? ???? ?????????? ???? ???????????????????? ???? ????
                                                                ?????????? ?? ?????????? ??????????
                                                                ??????????
                                                                ?????????????? ???????????? ?????????? ??????. ???? ???????? ?????????? ???????? ???????????????? ???? ?????????????
                                                                ?????????? ?????????????????? ???? ?? ????
                                                                ????????
                                                                ???????????????? ???????? ???? ?????????? ?? ???????????? ???? ???? ?????????????? ??????????? ????. ???? ?????? ????????
                                                                ???? ?????????? ???????? ????????
                                                                ?????????????? ?????? ?????? ?????????? ??????????
                                                            </p>
                                                        </div>
                                                        <button class="btn-readmore-black d-block">{t("news-and-article-art.more")}</button>
                                                    </a>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Introduction;