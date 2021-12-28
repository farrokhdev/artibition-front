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

    <div class="banner">
      <div class="content-banner">
        <h2 class="content-title">{t("artworkList.box-banner.title")}</h2>
        <p class="txt-title">
          {t("artworkList.box-banner.text")}
        </p>
        <div class="nl-input">
          <input placeholder={t("artworkList.box-banner.placeholder")} />
          <button type="button" class="btn-black">{t("artworkList.box-banner.btn")}</button>
        </div>
      </div>
    </div>



    <div class="default-content">
      <div class="content-header">
          <div class="d-flex box-dir-reverse">
            <div class="col-sm-3 col-xs-6">
              <div type="button" class="filter-btn">
                <div className="d-flex box-dir-reverse align-items-center">
                  <img src={filter_icon} width="16" height="15" alt="" />
                  <span class="mx-2">{t("artworkList.filter.title")}</span>
                  <button class="btn clear-tag mx-3">
                    <div className="d-flex box-dir-reverse align-items-center">
                      <img class="mx-2" src={clear_icon} width="10" height="10" alt="" />
                      <span>{t("artworkList.filter.remove_all")}</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
            <div className="d-flex justify-custom">
              <div class="form-group pull-left">
                  <select class="form-control" id="sel1">
                    <option class="text-dir">{t("artworkList.filter.last_update")}</option>
                    <option class="text-dir">{t("artworkList.filter.sell")}</option>
                    <option class="text-dir">{t("artworkList.filter.visite")}</option>
                  </select>
                </div>
            </div>
            </div>
          </div>
        </div>
        <div class="content-body">
        <div class="d-flex box-dir-reverse">

        <div class="col-md-3  filter-side">
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title text-dir">
                                    <a data-toggle="collapse" aria-expanded="true" href="#collapse2">
                                      {t("artists.filter.expert.title")}
                                    </a>
                                </h4>
                            </div>
                            <div id="collapse2" class="panel-collapse collapse in">
                                <div class="panel-body">
                                    <div class="checkbox-row">
                                        <label class="lable-checkbox text-dir">
                                            <input type="checkbox" checked value=""/>
                                            <span>{t("artists.filter.expert.all")}</span>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.expert.painting")}</span>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.expert.photography")}</span>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.expert.sculpture")}</span>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.expert.calligram")}</span>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.expert.calligraphy")}</span>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.expert.printmaking")}</span>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.expert.graphic")}</span>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.expert.drawing")}</span>
                                            <span class="checkmark"></span>
                                        </label>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title text-dir">
                                    <a data-toggle="collapse" aria-expanded="true" href="#collapse3">
                                    {t("artists.filter.artist.title")}</a>
                                </h4>
                            </div>
                            <div id="collapse3" class="panel-collapse collapse in">
                                <div class="panel-body">
                                    <div class="checkbox-row">
                                        <label class="lable-checkbox text-dir">
                                            <input type="checkbox" checked value=""/>
                                            <span>{t("artists.filter.artist.all")}</span>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.artist.special")}</span>
                                            <span class="checkmark"></span>
                                            <img src={gold_badge_icon} width="22" height="22" alt=""
                                                 class="filter-badge"/>
                                        </label>
                                        <label class="lable-checkbox text-dir">
                                            <input type="checkbox" value=""/>
                                            <span>{t("artists.filter.artist.verified")}</span>
                                            <span class="checkmark"></span>
                                            <img src={blue_badge_icon} width="22" height="22" alt=""
                                                 class="filter-badge"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>








          <div class="col-md-9 col-sm-12">
                    <div class="artist-list">
                        <div class="row box-dir-reverse">
                            <div class="col-sm-4">
                                <a href="#" class="cols">
                                    <div class="col-img">
                                        <div class="collection-firstrow">
                                            <img src={mainpage1_1} class="img-responsive"/>
                                        </div>
                                        <div class="d-flex collection-secondrow">
                                            <div class="col-6  pad-l2 px-0">
                                                <img src={mainpage1_2} width="420" height="420"
                                                     class="img-responsive"/>
                                            </div>
                                            <div class="col-6  pad-r2 px-0">
                                                <img src={mainpage1_3} width="420" height="420"
                                                     class="img-responsive"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-body">
                                        <div class="col-image pull-right">
                                            <img src={artist3} width="408" height="408" alt=""
                                                 class="img-responsive"/>
                                            <img src={blue_badge_icon} width="22" height="22" alt=""
                                                 class="img-badge"/>
                                        </div>
                                        <h6 class="col-title">
                                            <span class="col-name pull-dir">هنر تراش بر روی چوب</span>
                                        </h6>
                                        <button type="button" class="btn-follow pull-dir">{t("artwork.follow")}</button>
                                    </div>
                                </a>
                            </div>
                            <div class="col-sm-4">
                                <a href="#" class="cols">
                                    <div class="col-img">
                                        <div class="collection-firstrow">
                                            <img src={mainpage1_1} class="img-responsive"/>
                                        </div>
                                        <div class="d-flex collection-secondrow">
                                            <div class="col-6  pad-l2 px-0">
                                                <img src={mainpage1_2} width="420" height="420"
                                                     class="img-responsive"/>
                                            </div>
                                            <div class="col-6  pad-r2 px-0">
                                                <img src={mainpage1_3} width="420" height="420"
                                                     class="img-responsive"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-body">
                                        <div class="col-image pull-right">
                                            <img src={artist3} width="408" height="408" alt=""
                                                 class="img-responsive"/>
                                            <img src={blue_badge_icon} width="22" height="22" alt=""
                                                 class="img-badge"/>
                                        </div>
                                        <h6 class="col-title">
                                            <span class="col-name pull-dir">هنر تراش بر روی چوب</span>
                                        </h6>
                                        <button type="button" class="btn-follow pull-dir">{t("artwork.follow")}</button>
                                    </div>
                                </a>
                            </div>
                            <div class="col-sm-4">
                                <a href="#" class="cols">
                                    <div class="col-img">
                                        <div class="collection-firstrow">
                                            <img src={mainpage1_1} class="img-responsive"/>
                                        </div>
                                        <div class="d-flex collection-secondrow">
                                            <div class="col-6  pad-l2 px-0">
                                                <img src={mainpage1_2} width="420" height="420"
                                                     class="img-responsive"/>
                                            </div>
                                            <div class="col-6  pad-r2 px-0">
                                                <img src={mainpage1_3} width="420" height="420"
                                                     class="img-responsive"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-body">
                                        <div class="col-image pull-right">
                                            <img src={artist3} width="408" height="408" alt=""
                                                 class="img-responsive"/>
                                            <img src={gold_badge_icon} width="22" height="22" alt=""
                                                 class="img-badge"/>
                                        </div>
                                        <h6 class="col-title">
                                            <span class="col-name pull-dir">هنر تراش بر روی چوب</span>
                                        </h6>
                                        <button type="button" class="btn-follow followed pull-dir">{t("artwork.following")}</button>
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
