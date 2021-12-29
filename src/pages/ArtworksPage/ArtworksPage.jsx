import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import Menu from '../../components/Menu/Menu';

import filter_icon from '../../assets/img/Filter.svg';
import clear_icon from '../../assets/img/clear.svg';
import search_icon from '../../assets/img/search.svg';
import jpaytrkase3 from '../../assets/img/artworks/jpaytrkase@3x.jpg';
import hnrpqkfiup3 from '../../assets/img/artworks/hnrpqkfiup@3x.jpg';
import nqliiocbif from '../../assets/img/artworks/nqliiocbif@3x.jpg';
import ucuurcufbm from '../../assets/img/artworks/ucuurcufbm@3x.jpg';
import gift_icon from '../../assets/img/gift.svg';
import artwork3 from '../../assets/img/artworks/3.jpg';
import rdbewaopdm3 from '../../assets/img/artworks/rdbewaopdm@3x.jpg';
import hezvtaokhv3 from '../../assets/img/artworks/hezvtaokhv@3x.jpg';
import ffhxzfmfyx3 from '../../assets/img/artworks/ffhxzfmfyx@3x.jpg';
import lhggrzlgoc3 from '../../assets/img/artworks/lhggrzlgoc@3x.jpg';
import hyxvpfinmx3 from '../../assets/img/artworks/hyxvpfinmx@3x.jpg';
import ayvglbkdfo3 from '../../assets/img/artworks/ayvglbkdfo@3x.jpg';
import gbazvsspbk3 from '../../assets/img/artworks/gbazvsspbk@3x.jpg';
import { Pagination } from 'antd';
import { t } from 'i18next';

function ArtworksPage() {
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
          <div className="col-md-3 filter-side ">
            <div className="panel-group" id="accordion">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title text-dir">
                    <a data-toggle="collapse" aria-expanded="true" href="#collapse1">
                    {t("artworkList.filter.artist_name")}</a>
                  </h4>
                </div>
                <div id="collapse1" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <div className="nl-input filter-search">
                      <input placeholder={t("artworkList.filter.placeholder_artist")} />
                      <button type="button"><img src={search_icon} width="24" height="24" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title text-dir">
                    <a data-toggle="collapse" aria-expanded="true" href="#collapse2">
                    {t("artworkList.filter.artField.title")}</a>
                  </h4>
                </div>
                <div id="collapse2" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <div className="checkbox-row">
                      <label className="lable-checkbox text-dir">
                        <input type="checkbox" checked value="" />
                        <span>{t("artworkList.filter.artField.all")}</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="lable-checkbox text-dir">
                        <input type="checkbox" value="" />
                        <span>{t("artworkList.filter.artField.painting")}</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="lable-checkbox text-dir">
                        <input type="checkbox" value="" />
                        <span>{t("artworkList.filter.artField.photography")}</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="lable-checkbox text-dir">
                        <input type="checkbox" value="" />
                        <span>{t("artworkList.filter.artField.sculpture")}</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="lable-checkbox text-dir">
                        <input type="checkbox" value="" />
                        <span>{t("artworkList.filter.artField.calligram")}</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="lable-checkbox text-dir">
                        <input type="checkbox" value="" />
                        <span>{t("artworkList.filter.artField.calligraphy")}</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="lable-checkbox text-dir">
                        <input type="checkbox" value="" />
                        <span>{t("artworkList.filter.artField.printmaking")}</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="lable-checkbox text-dir">
                        <input type="checkbox" value="" />
                        <span>{t("artworkList.filter.artField.graphic")}</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="lable-checkbox text-dir">
                        <input type="checkbox" value="" />
                        <span>{t("artworkList.filter.artField.drawing")}</span>
                        <span className="checkmark"></span>
                      </label>

                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title text-dir">
                    <a data-toggle="collapse" aria-expanded="true" href="#collapse3">{t("artworkList.filter.price.title")}</a>
                  </h4>
                </div>
                <div id="collapse3" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <div className="rangeslider">
                      <div id="slider" dir="rtl"></div>
                    </div>
                    <div className="row row-inputs box-dir-reverse">
                      <div className="col-xs-6">
                        <label>{t("artworkList.filter.price.min")}</label>
                        <input type="text" className="value persian-num" data-index="0" value="0" />
                        <span>{t("artworkList.filter.price.to")}</span>
                      </div>
                      <div className="col-xs-6">
                        <label>{t("artworkList.filter.price.max")}</label>
                        <input type="text" className="value  persian-num" data-index="1" value="4" />
                      </div>
                    </div>
                    <div className="d-flex justify-custom">
                      <button type="button" className="btn btn-ok pull-dir">{t("artworkList.filter.price.action")}</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title text-dir">
                    <a data-toggle="collapse" aria-expanded="true" href="#collapse4">{t("artworkList.filter.discount.title")}</a>
                  </h4>
                </div>
                <div id="collapse4" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <label className="switch pull-dir">
                      <input type="checkbox" checked />
                      <span className="switchbtn round"></span>
                      <span className="label-switchbtn">{t("artworkList.filter.discount.show")}</span>
                    </label>
                    <div className="clearfix"></div>
                    <div className="md-mrgt30">
                      <label className="lable-checkbox text-dir">
                        <input type="checkbox" value="" />
                        <span>{t("artworkList.filter.discount.up20")}</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="lable-checkbox text-dir">
                        <input type="checkbox" value="" />
                        <span>{t("artworkList.filter.discount.up30")}</span>
                        <span className="checkmark"></span>
                      </label>
                      <label className="lable-checkbox text-dir">
                        <input type="checkbox" value="" />
                        <span>{t("artworkList.filter.discount.up50")}</span>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title text-dir">
                    <a data-toggle="collapse" aria-expanded="true" href="#collapse5">{t("artworkList.filter.art_for_gift.title")}</a>
                  </h4>
                </div>
                <div id="collapse5" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <label className="switch pull-dir">
                      <input type="checkbox" />
                      <span className="switchbtn round"></span>
                      <span className="label-switchbtn">{t("artworkList.filter.art_for_gift.show")}</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title text-dir">
                    <a data-toggle="collapse" aria-expanded="true" href="#collapse6">{t("artworkList.filter.color")}</a>
                  </h4>
                </div>
                <div id="collapse6" className="panel-collapse  in">
                  <div className="panel-body">
                    <table className="table table-responsive color">
                      <tbody>
                        <tr>
                          <td id="color1">#283e0f </td>
                          <td id="color2">#283e0f </td>
                          <td id="color3">#666002 </td>
                          <td id="color4">#553d00 </td>
                          <td id="color5">#583400 </td>
                          <td id="color6">#591c00 </td>
                          <td id="color7">#5b0601 </td>
                          <td id="color8">#3f051b </td>
                          <td id="color9">#2e0843  </td>
                          <td id="color10">#12053d  </td>
                          <td id="color11">#001e5a </td>
                          <td id="color12">#00374b </td>
                        </tr>
                        <tr>
                          <td id="color13">#3b571c </td>
                          <td id="color14"> #717507</td>
                          <td id="color15">#888901 </td>
                          <td id="color16">#765700 </td>
                          <td id="color17">#794803 </td>
                          <td id="color18">#792a01 </td>
                          <td id="color19">#830d00 </td>
                          <td id="color20">#551126  </td>
                          <td id="color21">#450f5d </td>
                          <td id="color22">#180b51 </td>
                          <td id="color23">#013078 </td>
                          <td id="color24">#004b63 </td>
                        </tr>
                        <tr>
                          <td id="color25">#457125 </td>
                          <td id="color26">#9ca50c </td>
                          <td id="color27">#c2bd00  </td>
                          <td id="color28">#a57c00 </td>
                          <td id="color29">#ab6702 </td>
                          <td id="color30">#ac3f00 </td>
                          <td id="color31"> #b51902</td>
                          <td id="color32">#7a193c </td>
                          <td id="color33">#63167e </td>
                          <td id="color34">#2c1378 </td>
                          <td id="color35">#0142a6 </td>
                          <td id="color36"> #00728b</td>
                        </tr>
                        <tr>
                          <td id="color37">#58882b </td>
                          <td id="color38">#c6ce16 </td>
                          <td id="color39">#d9d411 </td>
                          <td id="color40">#d5a209 </td>
                          <td id="color41">#d38306 </td>
                          <td id="color42">#dc5100 </td>
                          <td id="color43">#e12300 </td>
                          <td id="color44">#97274f </td>
                          <td id="color45"> #77239d</td>
                          <td id="color46">#391b95 </td>
                          <td id="color47">#0460ff </td>
                          <td id="color48">#038dbb </td>
                        </tr>
                        <tr>
                          <td id="color49">#68a53c </td>
                          <td id="color50">#dae229 </td>
                          <td id="color51">#e8e337 </td>
                          <td id="color52">#e9b61d </td>
                          <td id="color53">#ffaa00 </td>
                          <td id="color54">#fd6b00 </td>
                          <td id="color55">#fe4310 </td>
                          <td id="color56">#bb2a61 </td>
                          <td id="color57">#9a2aba </td>
                          <td id="color58">#4a24b7 </td>
                          <td id="color59">#0460ff </td>
                          <td id="color60">#00a2d8 </td>
                        </tr>
                        <tr>
                          <td id="color61">#76bc42 </td>
                          <td id="color62">#e0e839 </td>
                          <td id="color63">#e9e549 </td>
                          <td id="color64">#f3c539 </td>
                          <td id="color65">#ffb23c </td>
                          <td id="color66">#ff8448 </td>
                          <td id="color67">#fe634d </td>
                          <td id="color68">#e73a79 </td>
                          <td id="color69">#9a2aba </td>
                          <td id="color70">#5a32eb </td>
                          <td id="color71">#3689ff </td>
                          <td id="color72">#00c7ff </td>
                        </tr>
                        <tr>
                          <td id="color73">#91df59</td>
                          <td id="color74">#f0f66d </td>
                          <td id="color75">#fefb94 </td>
                          <td id="color76">#f9d465 </td>
                          <td id="color77">#ffc878 </td>
                          <td id="color78">#ffa47d </td>
                          <td id="color79">#ff8c85 </td>
                          <td id="color80">#ef6f9f </td>
                          <td id="color81">#d456ff </td>
                          <td id="color82">#854ffb </td>
                          <td id="color83">#75a7fe </td>
                          <td id="color84">#55d6fe </td>
                        </tr>
                        <tr>
                          <td id="color85">#9fec65 </td>
                          <td id="color86">#f1f7b7 </td>
                          <td id="color87">#fffcb5 </td>
                          <td id="color88">#fde5a7 </td>
                          <td id="color89">#ffd8a8 </td>
                          <td id="color90">#ffc4a8 </td>
                          <td id="color91">#fcb5af </td>
                          <td id="color92">#f6a3bf </td>
                          <td id="color93">#e395fb </td>
                          <td id="color94">#b28cfb </td>
                          <td id="color95">#aac4fd </td>
                          <td id="color96">#90e4fe </td>
                        </tr>
                        <tr>
                          <td id="color97">#bfff8f </td>
                          <td id="color98">#f9f9dd </td>
                          <td id="color99">#fffcdb </td>
                          <td id="color100">#fef3d5 </td>
                          <td id="color101">#ffebd3 </td>
                          <td id="color102">#fee2d6 </td>
                          <td id="color103">#ffd8d9 </td>
                          <td id="color104">#f8d4e0 </td>
                          <td id="color105">#f1c9fe </td>
                          <td id="color106">#dacafb </td>
                          <td id="color107">#d4e4fb </td>
                          <td id="color108">#caf2fe </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title text-dir">
                    <a data-toggle="collapse" aria-expanded="true" href="#collapse7">{t("artworkList.filter.technique.title")}</a>
                  </h4>
                </div>
                <div id="collapse7" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <div className="nl-input filter-search ">
                      <input placeholder={t("artworkList.filter.technique.placeholder")} />
                      <button className="noborder" type="button"><img src={search_icon} width="24" height="24" alt="" />
                      </button>
                      <div className="md-mrgt30">
                        <label className="lable-checkbox text-dir">
                          <input type="checkbox" value="" />
                          <span>{t("artworkList.filter.technique.watercolor")}</span>
                          <span className="checkmark"></span>
                        </label>
                        <label className="lable-checkbox text-dir">
                          <input type="checkbox" value="" />
                          <span>{t("artworkList.filter.technique.pastel")}</span>
                          <span className="checkmark"></span>
                        </label>
                        <label className="lable-checkbox text-dir">
                          <input type="checkbox" value="" />
                          <span>{t("artworkList.filter.technique.acrylic")}</span>
                          <span className="checkmark"></span>
                        </label>
                        <label className="lable-checkbox text-dir">
                          <input type="checkbox" value="" />
                          <span>{t("artworkList.filter.technique.composition")}</span>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title text-dir">
                    <a data-toggle="collapse" aria-expanded="false" href="#collapse8">{t("artworkList.filter.subject.title")}</a>
                  </h4>
                </div>
                <div id="collapse8" className="panel-collapse collapse">
                  <div className="panel-body">
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title text-dir">
                    <a data-toggle="collapse" aria-expanded="true" href="#collapse9">{t("artworkList.filter.material.title")}</a>
                  </h4>
                </div>
                <div id="collapse9" className="panel-collapse collapse in">
                  <div className="panel-body ">
                    <div className="nl-input filter-search ">
                      <input placeholder={t("artworkList.filter.material.placeholder")} />
                      <button className="noborder" type="button"><img src={search_icon} width="24" height="24" alt="" />
                      </button>
                      <div className="constant-height md-mrgt30 px-2">
                        <label className="lable-checkbox text-dir">
                          <input type="checkbox" value="" />
                          <span >{t("artworkList.filter.material.rapid")}</span>
                          <span className="checkmark"></span>
                        </label>
                        <label className="lable-checkbox text-dir">
                          <input type="checkbox" value="" />
                          <span>{t("artworkList.filter.material.watercolor")}</span>
                          <span className="checkmark"></span>
                        </label>
                        <label className="lable-checkbox text-dir">
                          <input type="checkbox" value="" />
                          <span>{t("artworkList.filter.material.govash")}</span>
                          <span className="checkmark"></span>
                        </label>
                        <label className="lable-checkbox text-dir">
                          <input type="checkbox" value="" />
                          <span>{t("artworkList.filter.material.acrylic")}</span>
                          <span className="checkmark"></span>
                        </label>
                        <label className="lable-checkbox text-dir">
                          <input type="checkbox" value="" />
                          <span>{t("artworkList.filter.material.pastel")}</span>
                          <span className="checkmark"></span>
                        </label>
                        <label className="lable-checkbox text-dir">
                          <input type="checkbox" value="" />
                          <span>{t("artworkList.filter.material.collage")}</span>
                          <span className="checkmark"></span>
                        </label>
                        <label className="lable-checkbox text-dir">
                          <input type="checkbox" value="" />
                          <span>{t("artworkList.filter.material.crayons")}</span>
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title text-dir">
                    <a data-toggle="collapse" aria-expanded="true" href="#collapse10">{t("artworkList.filter.size.title")}</a>
                  </h4>
                </div>
                <div id="collapse10" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <label className="lable-checkbox text-dir">
                      <input type="checkbox" value="" />
                      <span>{t("artworkList.filter.size.small")}</span>
                      <span className="checkmark"></span>
                    </label>
                    <label className="lable-checkbox text-dir">
                      <input type="checkbox" value="" />
                      <span>{t("artworkList.filter.size.medium")}</span>
                      <span className="checkmark"></span>
                    </label>
                    <label className="lable-checkbox text-dir">
                      <input type="checkbox" value="" />
                      <span>{t("artworkList.filter.size.large")}</span>
                      <span className="checkmark"></span>
                    </label>
                    <label className="lable-checkbox text-dir">
                      <input type="checkbox" checked id="Custom-dimensions" value="" />
                      <span>{t("artworkList.filter.size.custom")}</span>
                      <span className="checkmark"></span>
                    </label>
                    <div className=" row-inputs togglevisibility">
                      <div className="row mrgt16 box-dir-reverse">
                        <div className="col-xs-6 text-dir">
                            <label >{t("artworkList.filter.size.min_width")}</label>
                            <input type="number" className="value persian-num" />
                            <span >{t("artworkList.filter.size.in")}</span>
                        </div>
                        <div className="col-xs-6 text-dir">
                          <label>{t("artworkList.filter.size.max_width")}</label>
                          <input type="number" className="value  persian-num" />
                        </div>
                      </div>
                      <div className="row mrgt16 box-dir-reverse">
                        <div className="col-xs-6 text-dir">
                          <label>{t("artworkList.filter.size.min_length")}</label>
                          <input type="number" className="value persian-num" />
                          <span>{t("artworkList.filter.size.in")}</span>
                        </div>
                        <div className="col-xs-6 text-dir">
                          <label>{t("artworkList.filter.size.max_length")}</label>
                          <input type="number" className="value  persian-num" />
                        </div>
                      </div>
                      <div className="row mrgt16 box-dir-reverse">
                        <div className="col-xs-6 text-dir">
                          <label>{t("artworkList.filter.size.min_height")}</label>
                          <input type="number" className="value persian-num" />
                          <span>{t("artworkList.filter.size.in")}</span>
                        </div>
                        <div className="col-xs-6 text-dir">
                          <label>{t("artworkList.filter.size.max_height")}</label>
                          <input type="number" className="value  persian-num" />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-custom">
                      <button type="button" className="btn btn-ok pull-dir">{t("artworkList.filter.size.submit")}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 ">
            <div className="row-gridimg">
              <div className="row">
                <div className="col-sm-4 ">
                  <div className="cols ">
                    <div className="col-img">
                      <img src={jpaytrkase3} width="840" height="1259" alt="آرتیبیشن" className="img-responsive" />
                      <div className="tab-overly">
                        <a href="#" className="btn-see">
                          <span className="view-icon pull-right"></span>
                          <span>{t("card_artwork.veiw")}</span>
                        </a>
                        <a href="#" className="btn-sale">{t("card_artwork.request_buy")}</a>
                        <a href="#" className="like-icon isLike"></a>
                      </div>
                    </div>
                    <div className="col-body ">
                      <h6 className="col-title text-dir">
                        <span className="col-name">آیدین</span>
                        <span className="col-name">آغداشلو</span>
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
                          <span className="tag-gift  w-100">
                            <div className="d-flex text-dir position-gift-card-artwork">
                              <img className="" src={gift_icon} width="22" height="22" alt="" />
                            </div>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="cols">
                    <div className="col-img">
                      <img src={hnrpqkfiup3} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
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
                        <span className="col-name">آیدین</span>
                        <span className="col-name">آغداشلو</span>
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
                          <span className="tag-gift  w-100">
                            <div className="d-flex text-dir position-gift-card-artwork">
                              <img className="" src={gift_icon} width="22" height="22" alt="" />
                            </div>
                          </span>
                        </div>

                      </div>
                    </div>


                  </div>
                  <div className="cols">
                    <div className="col-img">
                      <div className="tags tags-off persian-num">30 %</div>
                      <img src={nqliiocbif} width="840" height="924" alt="آرتیبیشن" className="img-responsive" />
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
                        <span className="col-name">آیدین</span>
                        <span className="col-name">آغداشلو</span>
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
                          <span className="tag-gift  w-100">
                            <div className="d-flex text-dir position-gift-card-artwork">
                              <img className="" src={gift_icon} width="22" height="22" alt="" />
                            </div>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="cols">
                    <div className="col-img">
                      <div className="tags tags-spacial">{t("card_artwork.special")}</div>
                      <div className="tags tags-off persian-num">33 %</div>
                      <img src={ucuurcufbm} width="840" height="1259" alt="آرتیبیشن" className="img-responsive" />
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
                        <span className="col-name">آیدین</span>
                        <span className="col-name">آغداشلو</span>
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
                          <span className="tag-gift  w-100">
                            <div className="d-flex text-dir position-gift-card-artwork">
                              <img className="" src={gift_icon} width="22" height="22" alt="" />
                            </div>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="cols">
                    <div className="col-img">
                      <img src={jpaytrkase3} width="840" height="1259" alt="آرتیبیشن" className="img-responsive" />
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
                        <span className="col-name">آیدین</span>
                        <span className="col-name">آغداشلو</span>
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
                          <span className="tag-gift  w-100">
                            <div className="d-flex text-dir position-gift-card-artwork">
                              <img className="" src={gift_icon} width="22" height="22" alt="" />
                            </div>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="cols">
                    <div className="col-img">
                      <img src={artwork3} width="840" height="850" alt="آرتیبیشن" className="img-responsive" />
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
                        <span className="col-name">آیدین</span>
                        <span className="col-name">آغداشلو</span>
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
                          <span className="tag-gift  w-100">
                            <div className="d-flex text-dir position-gift-card-artwork">
                              <img className="" src={gift_icon} width="22" height="22" alt="" />
                            </div>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="cols finished">
                    <div className="col-img">
                      <img src={rdbewaopdm3} width="840" height="1120" alt="آرتیبیشن" className="img-responsive" />
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
                      <div className="finished-tag">{t("card_artwork.sold")}</div>
                      <h6 className="col-title text-dir">
                        <span className="col-name">آیدین</span>
                        <span className="col-name">آغداشلو</span>
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
                          <span className="tag-gift  w-100">
                            <div className="d-flex text-dir position-gift-card-artwork">
                              <img className="" src={gift_icon} width="22" height="22" alt="" />
                            </div>
                          </span>
                        </div>

                      </div>
                    </div>


                  </div>
                  <div className="cols">
                    <div className="col-img">
                      <img src={hezvtaokhv3} width="840" height="1130" alt="آرتیبیشن" className="img-responsive" />
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
                        <span className="col-name">آیدین</span>
                        <span className="col-name">آغداشلو</span>
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
                          <span className="tag-gift  w-100">
                            <div className="d-flex text-dir position-gift-card-artwork">
                              <img className="" src={gift_icon} width="22" height="22" alt="" />
                            </div>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="cols">
                    <div className="col-img">
                      <img src={ffhxzfmfyx3} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
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
                        <span className="col-name">آیدین</span>
                        <span className="col-name">آغداشلو</span>
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
                          <span className="tag-gift  w-100">
                            <div className="d-flex text-dir position-gift-card-artwork">
                              <img className="" src={gift_icon} width="22" height="22" alt="" />
                            </div>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="cols">
                    <div className="col-img">
                      <img src={lhggrzlgoc3} width="840" height="1130" alt="آرتیبیشن" className="img-responsive" />
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
                        <span className="col-name">آیدین</span>
                        <span className="col-name">آغداشلو</span>
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
                          <span className="tag-gift  w-100">
                            <div className="d-flex text-dir position-gift-card-artwork">
                              <img className="" src={gift_icon} width="22" height="22" alt="" />
                            </div>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="cols">
                    <div className="col-img">
                      <img src={lhggrzlgoc3} width="840" height="1130" alt="آرتیبیشن" className="img-responsive" />
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
                        <span className="col-name">آیدین</span>
                        <span className="col-name">آغداشلو</span>
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
                          <span className="tag-gift  w-100">
                            <div className="d-flex text-dir position-gift-card-artwork">
                              <img className="" src={gift_icon} width="22" height="22" alt="" />
                            </div>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="cols">
                    <div className="col-img">
                      <img src={hyxvpfinmx3} width="840" height="1259" alt="آرتیبیشن" className="img-responsive" />
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
                      <div className="finished-tag">{t("card_artwork.sold")}</div>
                      <h6 className="col-title text-dir">
                        <span className="col-name">آیدین</span>
                        <span className="col-name">آغداشلو</span>
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
                          <span className="tag-gift  w-100">
                            <div className="d-flex text-dir position-gift-card-artwork">
                              <img className="" src={gift_icon} width="22" height="22" alt="" />
                            </div>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="cols">
                    <div className="col-img">
                      <img src={ayvglbkdfo3} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
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
                        <span className="col-name">آیدین</span>
                        <span className="col-name">آغداشلو</span>
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
                          <span className="tag-gift  w-100">
                            <div className="d-flex text-dir position-gift-card-artwork">
                              <img className="" src={gift_icon} width="22" height="22" alt="" />
                            </div>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="cols">
                    <div className="col-img">
                      <img src={gbazvsspbk3} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
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
                        <span className="col-name">آیدین</span>
                        <span className="col-name">آغداشلو</span>
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
                          <span className="tag-gift  w-100">
                            <div className="d-flex text-dir position-gift-card-artwork">
                              <img className="" src={gift_icon} width="22" height="22" alt="" />
                            </div>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="cols">
                    <div className="col-img">
                      <img src={rdbewaopdm3} width="840" height="1120" alt="آرتیبیشن" className="img-responsive" />
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
                      <div className="finished-tag">{t("card_artwork.sold")}</div>
                      <h6 className="col-title text-dir">
                        <span className="col-name">آیدین</span>
                        <span className="col-name">آغداشلو</span>
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
                          <span className="tag-gift  w-100">
                            <div className="d-flex text-dir position-gift-card-artwork">
                              <img className="" src={gift_icon} width="22" height="22" alt="" />
                            </div>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>

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

export default ArtworksPage;