import React, { useState } from 'react';
import { t } from 'i18next';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import classnames from 'classnames';
import { GetLanguage } from '../../utils/utils';

import cloude_upload_icon from '../../assets/img/cloud-upload.svg';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../assets/style/leaflet.scss'

function GalleryPanelCreateExhibition() {
    const [showMap, setShowMap] = useState(false)
    const [point, setPoint] = useState({})
    const [zoom, setZoom] = useState(11)

    return (
        <>
            <HeaderPanel t={t} />
            <div className="panel-style container mx-auto px-0 w-100 bg-white ">
                <h2 className="default-title aligncenter mt-3">{t("gallery-panel-create-exhibition.title")}</h2>
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 create-exhibition">
                    <h3 className="info-title mrgt64 require text-dir">{t("gallery-panel-create-exhibition.upload_poster.title")}</h3>
                    <p className="mrgb20 text-dir">{t("gallery-panel-create-exhibition.upload_poster.description")}</p>
                    <div className="upload-img-artwork">
                        <div className="btn-upload-artwork">
                            <img src={cloude_upload_icon} width="64" height="57" alt="" className="" />
                            <p>{t("gallery-panel-create-exhibition.upload.text")}
                                <br />
                                {t("gallery-panel-create-exhibition.upload.or")}</p>
                            <label for="file-upload" className="btn-blue">{t("gallery-panel-create-exhibition.upload.btn")}</label>
                            <p className="upload-size"> {t("gallery-panel-create-exhibition.upload.tip")}</p>
                        </div>
                        <input id="file-upload" type="file" />
                    </div>

                    <div className="info-sec">
                        <h3 className="info-title mrgt64 text-dir">{t("gallery-panel-create-exhibition.exhibition_info")}</h3>
                        <div className="row">
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "d-none": GetLanguage() === 'en-US'
                                })}

                            >
                                <div className="public-group">
                                    <input className="form-control input-public " required />
                                    <label className="lable-public">{t("gallery-panel-create-exhibition.exhibition_name_fa")}</label>
                                </div>
                            </div>
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "col w-100": GetLanguage() === 'en-US'
                                })}

                            >
                                <div className="public-group en">
                                    <input className="form-control input-public en-lang " required />
                                    <label className="lable-public en-lang">{t("gallery-panel-create-exhibition.exhibition_name_en")}</label>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="public-group">
                                    <select className="input-public dir" id="info-203">
                                        <option>{t("gallery-panel-create-exhibition.local_online_exhibition")}</option>
                                        <option>{t("gallery-panel-create-exhibition.local_exhibition")}</option>
                                        <option>{t("gallery-panel-create-exhibition.online_exhibition")}</option>
                                    </select>
                                    <label for="info-203" className="lable-public">{t("gallery-panel-create-exhibition.exhibition_type")}</label>
                                </div>
                                <div className="col-sm-3">
                                    <div className="public-group">
                                        <input className="form-control input-public persian-num" required />
                                        <label className="lable-public">{t("gallery-panel-create-exhibition.online_start")}</label>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="public-group">
                                        <input className="form-control input-public persian-num" required />
                                        <label className="lable-public">{t("gallery-panel-create-exhibition.online_end")}</label>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="public-group">
                                        <input className="form-control input-public persian-num" required />
                                        <label className="lable-public">{t("gallery-panel-create-exhibition.local_start")}</label>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="public-group">
                                        <input className="form-control input-public persian-num" required />
                                        <label className="lable-public">{t("gallery-panel-create-exhibition.local_end")}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="info-title mrgt64 text-dir">{t("gallery-panel-create-exhibition.art_categories")}</h3>
                        <div className="row">
                            <div className="col-sm-12 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" checked />
                                    <span>{t("gallery-panel-create-exhibition.painting")}</span>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="col-sm-12 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" />
                                    <span>{t("gallery-panel-create-exhibition.photography")}</span>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="col-sm-12 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" checked />
                                    <span>{t("gallery-panel-create-exhibition.sculpture")}</span>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="col-sm-12 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" />
                                    <span>{t("gallery-panel-create-exhibition.calligram")}</span>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="col-sm-12 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" />
                                    <span>{t("gallery-panel-create-exhibition.calligraphy")}</span>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="col-sm-12 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" />
                                    <span>{t("gallery-panel-create-exhibition.printmaking")}</span>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="col-sm-12 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" />
                                    <span>{t("gallery-panel-create-exhibition.graphic")}</span>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="col-sm-12 col-xs-6 text-dir">
                                <label className="lable-checkbox">
                                    <input type="checkbox" />
                                    <span>{t("gallery-panel-create-exhibition.drawing")}</span>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <h3 className="info-title mrgt64 text-dir">{t("gallery-panel-create-exhibition.artists")}</h3>
                        <div className="row dir">
                            <div
                                className={classnames("", {
                                    "col-sm-5": GetLanguage() === 'fa-IR',
                                    "d-none": GetLanguage() === 'en-US'
                                })}>
                                <div className="public-group">
                                    <input className="form-control input-public " required />
                                    <label className="lable-public">{t("gallery-panel-create-exhibition.enter_artist_name_fa")}</label>
                                </div>
                            </div>

                            <div
                                className={classnames("", {
                                    "col-sm-5": GetLanguage() === 'fa-IR',
                                    "col w-100": GetLanguage() === 'en-US'
                                })}>
                                <div className="public-group en">
                                    <input className="form-control input-public en-lang " required />
                                    <label className="lable-public en-lang">{t("gallery-panel-create-exhibition.enter_artist_name_en")}</label>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <button type="button" className="btn-blue">{t("gallery-panel-create-exhibition.submit")}</button>
                            </div>
                        </div>
                        <div className="artist-tags-row text-dir">
                            <div className="artist-tags">
                                <button type="button" className="btn-remove-tag"></button>
                                <span className="fa-artist-tag">مسعود کشمیری</span>
                                <span className="en-artist-tag en-lang">(Masoud Keshmiri)</span>
                            </div>
                            <div className="artist-tags">
                                <button type="button" className="btn-remove-tag"></button>
                                <span className="fa-artist-tag">شیما خشخاشی</span>
                                <span className="en-artist-tag en-lang">(Shima Khashkhashi)</span>
                            </div>
                            <div className="artist-tags">
                                <button type="button" className="btn-remove-tag"></button>
                                <span className="fa-artist-tag">مریم رضوی</span>
                                <span className="en-artist-tag en-lang">(Maryam Razavi)</span>
                            </div>
                        </div>
                        <h3 className="info-title mrgt64 text-dir">{t("gallery-panel-create-exhibition.notice_visiting_hours")}</h3>
                        <div className="row dir">
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "d-none": GetLanguage() === 'en-US'
                                })}

                            >
                                <div className="form-group">
                                    <textarea id="info-213" className="form-control "
                                        placeholder={t("gallery-panel-create-exhibition.exhibition_contact_placeholder_fa")}
                                        rows="8"></textarea>
                                    <label for="info-213" className="lable-public"></label>
                                </div>
                            </div>
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "col w-100": GetLanguage() === 'en-US'
                                })}
                            >
                                <div className="form-group ">
                                    <textarea className="form-control" placeholder={t("gallery-panel-create-exhibition.exhibition_contact_placeholder_en")}
                                        rows="8"></textarea>
                                    <label className="lable-public"></label>
                                </div>
                            </div>
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "d-none": GetLanguage() === 'en-US'
                                })}

                            >
                                <div className="form-group">
                                    <textarea id="info-213" className="form-control "
                                        placeholder={t("gallery-panel-create-exhibition.exhibition_time_work_placeholder_fa")}
                                        rows="6"></textarea>
                                    <label for="info-213" className="lable-public"></label>
                                </div>
                            </div>
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "col w-100": GetLanguage() === 'en-US'
                                })}
                            >
                                <div className="form-group ">
                                    <textarea className="form-control" placeholder={t("gallery-panel-create-exhibition.exhibition_time_work_placeholder_en")}
                                        rows="6"></textarea>
                                    <label className="lable-public"></label>
                                </div>
                            </div>
                        </div>
                        <h3 className="info-title mrgt64 text-dir">{t("gallery-panel-create-exhibition.address_contact_info")}</h3>
                        <div className="row dir">
                            <div className={"col-sm-9"}>
                                <div className="public-group ">
                                    <input className="form-control input-public " required />
                                    <label className="lable-public en-lang">{t("gallery-panel-create-exhibition.address_fa")}</label>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <button type="button" className="btn-blue" data-toggle="modal" data-target="#show-map" onClick={() => { setShowMap(true) }}>
                                    {t("gallery-panel-create-exhibition.select_on_map")}
                                </button>
                            </div>
                            <div className="clearfix"></div>
                            <div className={classnames("", {
                                "col-sm-12": GetLanguage() === 'fa-IR',
                                "d-none": GetLanguage() === 'en-US'
                            })}
                            >
                                <div className="public-group en">
                                    <input className="form-control input-public en-lang " required />
                                    <label className="lable-public en-lang">{t("gallery-panel-create-exhibition.address_en")}</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="public-group">
                                    <input className="form-control input-public  persian-num" required />
                                    <label className="lable-public">{t("gallery-panel-create-exhibition.phone_number")}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="adv-btn">
                        <Link to={"/gallery-panel/upload-exhibition-artwotk"} className="btn-black center-block">
                            {t("gallery-panel-create-exhibition.btn_confirm_next")}
                        </Link>
                    </div>

                </div>
            </div>
            <Modal
                visible={showMap}
                width={800}
                footer={[]}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{t("payment.address_step.modal.title")}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowMap(false) }}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>


                    <div className="modal-body">
                        <Map
                            center={(point?.latitude && point?.longitude) ?
                                [point?.latitude, point?.longitude] :
                                ["35.690655", "51.380518"]}

                            zoom={zoom}
                            onzoomend={e => setZoom(e.target._zoom)}
                            style={{ width: "100%", height: "500px" }}

                            onclick={e => {
                                setPoint({ latitude: e.latlng.lat, longitude: e.latlng.lng })
                            }}

                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            // attribution="<a href=http://biithome.com>biit.home.com</a>"
                            />

                            <Marker
                                position={(point?.latitude && point?.longitude) ?
                                    [point?.latitude, point?.longitude] :
                                    ["", ""]}
                            >
                                {/* <Popup>موقعیت خانه حراجی</Popup> */}
                            </Marker>


                        </Map>
                    </div>




                    <div className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-black" onClick={() => { setShowMap(false) }}>{t("payment.address_step.modal.confirm_btn")}</button>
                    </div>
                </div>
            </Modal>
            <BasketFooterPanel />
        </>
    )
}

export default GalleryPanelCreateExhibition;
