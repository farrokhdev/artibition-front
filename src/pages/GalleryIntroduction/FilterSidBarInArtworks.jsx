import React from 'react';
import Search from '../../assets/img/search.svg';
import { t } from 'i18next';

function FilterSidBarInArtworks() {
    return (
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
                                <button type="button"><img src={Search} width="24" height="24" alt="" />
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
                                <button className="noborder" type="button"><img src={Search} width="24" height="24" alt="" />
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
                                <button className="noborder" type="button"><img src={Search} width="24" height="24" alt="" />
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
    )
}

export default FilterSidBarInArtworks;