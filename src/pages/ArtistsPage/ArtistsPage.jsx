import React from 'react'
import { t } from 'i18next';
import Header from "../../components/Header/Header";
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

import filter_icon from '../../assets/img/Filter.svg';
import clear_icon from '../../assets/img/clear.svg';
import search_icon from '../../assets/img/search.svg';
import mainpage1_1 from '../../assets/img/mainpage/1-1.jpg';
import mainpage1_2 from '../../assets/img/mainpage/1-2.jpg';
import mainpage1_3 from '../../assets/img/mainpage/1-3.jpg';
import artist3 from '../../assets/img/artist-3.jpg';
import blue_badge_icon from '../../assets/img/blue_badge.svg';
import gold_badge_icon from '../../assets/img/gold_badge.svg';
import { Pagination } from 'antd';

function ArtistsPage() {
    return (
        <>
  <div className="container mx-auto px-0 w-100 bg-white">
    <Header />
    <Menu />

    <div className="banner">
      <div className="content-banner">
        <h2 className="content-title">{t("artworkList.box-banner.title")}</h2>
        <p className="txt-title">
          {t("artworkList.box-banner.text")}
        </p>
        <div className="nl-input">
          <input placeholder={t("artworkList.box-banner.placeholder")} />
          <button type="button" className="btn-black">{t("artworkList.box-banner.btn")}</button>
        </div>
      </div>
    </div>



    <div className="default-content">
      <div className="content-header">
          <div className="d-flex box-dir-reverse">
            <div className="col-sm-3 col-xs-6">
              <div type="button" className="filter-btn">
                <div className="d-flex box-dir-reverse align-items-center">
                  <img src={filter_icon} width="16" height="15" alt="" />
                  <span className="mx-2">{t("artworkList.filter.title")}</span>
                  <button className="btn clear-tag mx-3">
                    <div className="d-flex box-dir-reverse align-items-center">
                      <img className="mx-2" src={clear_icon} width="10" height="10" alt="" />
                      <span>{t("artworkList.filter.remove_all")}</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="d-flex justify-custom">
              <div className="form-group pull-left">
                  <select className="form-control" id="sel1">
                    <option className="text-dir">{t("artworkList.filter.last_update")}</option>
                    <option className="text-dir">{t("artworkList.filter.sell")}</option>
                    <option className="text-dir">{t("artworkList.filter.visite")}</option>
                  </select>
                </div>
            </div>
            </div>
          </div>
        </div>
        <div className="content-body">
        <div className="d-flex box-dir-reverse">

        <div className="col-md-3  filter-side">
                    <div className="panel-group" id="accordion">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title text-dir">
                                    <a data-toggle="collapse" aria-expanded="true" href="#collapse2">
                                      {t("artists.filter.expert.title")}
                                    </a>
                                </h4>
                            </div>
                            <div id="collapse2" className="panel-collapse collapse in">
                                <div className="panel-body">
                                    <div className="checkbox-row">
                                        <label className="lable-checkbox text-dir">
                                            <input type="checkbox" checked value=""/>
                                            <span>{t("artists.filter.expert.all")}</span>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.expert.painting")}</span>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.expert.photography")}</span>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.expert.sculpture")}</span>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.expert.calligram")}</span>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.expert.calligraphy")}</span>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.expert.printmaking")}</span>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.expert.graphic")}</span>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.expert.drawing")}</span>
                                            <span className="checkmark"></span>
                                        </label>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title text-dir">
                                    <a data-toggle="collapse" aria-expanded="true" href="#collapse3">
                                    {t("artists.filter.artist.title")}</a>
                                </h4>
                            </div>
                            <div id="collapse3" className="panel-collapse collapse in">
                                <div className="panel-body">
                                    <div className="checkbox-row">
                                        <label className="lable-checkbox text-dir">
                                            <input type="checkbox" checked value=""/>
                                            <span>{t("artists.filter.artist.all")}</span>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.artist.special")}</span>
                                            <span className="checkmark"></span>
                                            <img src={gold_badge_icon} width="22" height="22" alt=""
                                                 className="filter-badge"/>
                                        </label>
                                        <label className="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.artist.verified")}</span>
                                            <span className="checkmark"></span>
                                            <img src={blue_badge_icon} width="22" height="22" alt=""
                                                 className="filter-badge"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>








          <div className="col-md-9 col-sm-12">
                    <div className="artist-list">
                        <div className="row box-dir-reverse">
                            <div className="col-sm-4">
                                <a href="#" className="cols">
                                    <div className="col-img">
                                        <div className="collection-firstrow">
                                            <img src={mainpage1_1} className="img-responsive"/>
                                        </div>
                                        <div className="d-flex collection-secondrow">
                                            <div className="col-6  pad-l2 px-0">
                                                <img src={mainpage1_2} width="420" height="420"
                                                     className="img-responsive"/>
                                            </div>
                                            <div className="col-6  pad-r2 px-0">
                                                <img src={mainpage1_3} width="420" height="420"
                                                     className="img-responsive"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-body">
                                        <div className="col-image pull-right">
                                            <img src={artist3} width="408" height="408" alt=""
                                                 className="img-responsive"/>
                                            <img src={blue_badge_icon} width="22" height="22" alt=""
                                                 className="img-badge"/>
                                        </div>
                                        <h6 className="col-title">
                                            <span className="col-name pull-dir">هنر تراش بر روی چوب</span>
                                        </h6>
                                        <button type="button" className="btn-follow pull-dir">{t("artwork.follow")}</button>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-4">
                                <a href="#" className="cols">
                                    <div className="col-img">
                                        <div className="collection-firstrow">
                                            <img src={mainpage1_1} className="img-responsive"/>
                                        </div>
                                        <div className="d-flex collection-secondrow">
                                            <div className="col-6  pad-l2 px-0">
                                                <img src={mainpage1_2} width="420" height="420"
                                                     className="img-responsive"/>
                                            </div>
                                            <div className="col-6  pad-r2 px-0">
                                                <img src={mainpage1_3} width="420" height="420"
                                                     className="img-responsive"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-body">
                                        <div className="col-image pull-right">
                                            <img src={artist3} width="408" height="408" alt=""
                                                 className="img-responsive"/>
                                            <img src={blue_badge_icon} width="22" height="22" alt=""
                                                 className="img-badge"/>
                                        </div>
                                        <h6 className="col-title">
                                            <span className="col-name pull-dir">هنر تراش بر روی چوب</span>
                                        </h6>
                                        <button type="button" className="btn-follow pull-dir">{t("artwork.follow")}</button>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-4">
                                <a href="#" className="cols">
                                    <div className="col-img">
                                        <div className="collection-firstrow">
                                            <img src={mainpage1_1} className="img-responsive"/>
                                        </div>
                                        <div className="d-flex collection-secondrow">
                                            <div className="col-6  pad-l2 px-0">
                                                <img src={mainpage1_2} width="420" height="420"
                                                     className="img-responsive"/>
                                            </div>
                                            <div className="col-6  pad-r2 px-0">
                                                <img src={mainpage1_3} width="420" height="420"
                                                     className="img-responsive"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-body">
                                        <div className="col-image pull-right">
                                            <img src={artist3} width="408" height="408" alt=""
                                                 className="img-responsive"/>
                                            <img src={gold_badge_icon} width="22" height="22" alt=""
                                                 className="img-badge"/>
                                        </div>
                                        <h6 className="col-title">
                                            <span className="col-name pull-dir">هنر تراش بر روی چوب</span>
                                        </h6>
                                        <button type="button" className="btn-follow followed pull-dir">{t("artwork.following")}</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=" row-pagination">
                      <Pagination  total={50} />
                    </div>
                </div>

        </div>




        </div>
    </div>


  </div>

  <Footer />
</>
    )
}

export default ArtistsPage;
