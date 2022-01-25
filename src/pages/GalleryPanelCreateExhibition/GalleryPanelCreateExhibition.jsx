import React, { useEffect, useState } from 'react';
import { t } from 'i18next';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import classnames from 'classnames';
import { GetLanguage } from '../../utils/utils';

import cloude_upload_icon from '../../assets/img/cloud-upload.svg';
import { Link } from 'react-router-dom';
import { Form, Input, Modal, Select, Button, Checkbox, message } from 'antd';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../assets/style/leaflet.scss'
import apiServices from '../../utils/api.services';
import { GALLERY_ARTISTS } from '../../utils';

const { Option } = Select;
const { TextArea } = Input;

function GalleryPanelCreateExhibition() {
    const [showMap, setShowMap] = useState(false)
    const [point, setPoint] = useState({})
    const [zoom, setZoom] = useState(11)
    const [artistsOption, setArtistOption] = useState([])

    const onFinish = (value) => {
        console.log(value);
    }


    const options = [
        { label: t("gallery-panel-create-exhibition.painting"), value: 1 },
        { label: t("gallery-panel-create-exhibition.photography"), value: 2 },
        { label: t("gallery-panel-create-exhibition.sculpture"), value: 3 },
        { label: t("gallery-panel-create-exhibition.calligram"), value: 4 },
        { label: t("gallery-panel-create-exhibition.calligraphy"), value: 5 },
        { label: t("gallery-panel-create-exhibition.printmaking"), value: 6 },
        { label: t("gallery-panel-create-exhibition.graphic"), value: 7 },
        { label: t("gallery-panel-create-exhibition.drawing"), value: 8 },
    ]



    useEffect(() => {
        apiServices.get(GALLERY_ARTISTS(2), "")
            .then(res => {
                if (res.data) {
                    console.log(res.data.data.results);
                    const options = []
                    res.data.data.results.map((artist, index) => {
                        console.log(index);
                        options.push({ label: `${artist.translations.fa ? artist.translations.fa.nick_name : ""} | ${artist.translations.en ? artist.translations.en.nick_name : ""}`, value: artist.id })
                    })
                    setArtistOption(options)

                } else {
                    message.error(res.response.data.message)
                }

            })
    }, [])


    return (
        <>
            <HeaderPanel t={t} />
            <div className="panel-style container mx-auto px-0 w-100 bg-white ">
                <h2 className="default-title aligncenter mt-3">{t("gallery-panel-create-exhibition.title")}</h2>
                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 create-exhibition">
                    <Form onFinish={onFinish}>
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
                            <Form.Item name={'poster'}>
                                <Input id="file-upload" type="file" />
                            </Form.Item>

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
                                        <Form.Item name={'exhibition_name_fa'}>
                                            <Input className="form-control input-public " required placeholder={t("gallery-panel-create-exhibition.exhibition_name_fa")} />
                                            {/* <label className="lable-public">{t("gallery-panel-create-exhibition.exhibition_name_fa")}</label> */}
                                        </Form.Item>
                                    </div>
                                </div>
                                <div
                                    className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "col w-100": GetLanguage() === 'en-US'
                                    })}

                                >
                                    <div className="public-group en">
                                        <Form.Item name={'exhibition_name_en'}>
                                            <Input className="form-control input-public en-lang " required placeholder={t("gallery-panel-create-exhibition.exhibition_name_en")} />
                                            {/* <label className="lable-public en-lang">{t("gallery-panel-create-exhibition.exhibition_name_en")}</label> */}
                                        </Form.Item>

                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="public-group">
                                        <Form.Item name={'type'}>
                                            <Select className="form-control input-public dir" id="info-203" placeholder={t("gallery-panel-create-exhibition.exhibition_type")}>
                                                <Option value={"ab"}>{t("gallery-panel-create-exhibition.local_online_exhibition")}</Option>
                                                <Option value={"abb"}>{t("gallery-panel-create-exhibition.local_exhibition")}</Option>
                                                <Option value={"abbb"}>{t("gallery-panel-create-exhibition.online_exhibition")}</Option>
                                            </Select>
                                            {/* <label for="info-203" className="lable-public">{t("gallery-panel-create-exhibition.exhibition_type")}</label> */}
                                        </Form.Item>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="public-group">
                                            <Form.Item name={"virtual_start_date"}>
                                                <Input className="form-control input-public persian-num" required placeholder={t("gallery-panel-create-exhibition.online_start")} />
                                                {/* <label className="lable-public">{t("gallery-panel-create-exhibition.online_start")}</label> */}
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="public-group">
                                            <Form.Item name={"virtual_end_date"}>
                                                <Input className="form-control input-public persian-num" required placeholder={t("gallery-panel-create-exhibition.online_end")} />
                                                {/* <label className="lable-public">{t("gallery-panel-create-exhibition.online_end")}</label> */}
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="public-group">
                                            <Form.Item name={"real_start_date"}>
                                                <Input className="form-control input-public persian-num" required placeholder={t("gallery-panel-create-exhibition.local_start")} />
                                                {/* <label className="lable-public">{t("gallery-panel-create-exhibition.local_start")}</label> */}
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="public-group">
                                            <Form.Item name={"real_end_date"}>
                                                <Input className="form-control input-public persian-num" required placeholder={t("gallery-panel-create-exhibition.local_end")} />
                                                {/* <label className="lable-public">{t("gallery-panel-create-exhibition.local_end")}</label> */}
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="info-title mrgt64 text-dir">{t("gallery-panel-create-exhibition.art_categories")}</h3>
                            <div className="row">
                                <div className="col-sm-12 col-xs-6 text-dir">
                                    {/* <label className="lable-checkbox">
                                        <input type="checkbox" checked />
                                        <span>{t("gallery-panel-create-exhibition.painting")}</span>
                                        <span className="checkmark"></span>
                                    </label> */}
                                    <Form.Item name={"category"} className='exhibitionFormCategory'>
                                        {/* <label className="lable-checkbox"> */}
                                        <Checkbox.Group options={options} />
                                        {/* </label> */}
                                    </Form.Item>
                                </div>
                                {/* <div className="col-sm-12 col-xs-6 text-dir">
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
                                </div> */}
                            </div>
                            <h3 className="info-title mrgt64 text-dir">{t("gallery-panel-create-exhibition.artists")}</h3>
                            <div className="row dir">
                                <div
                                    className={"col-sm-12"}>
                                    <div className="public-group">
                                        <Form.Item>
                                            <Select mode="multiple" className='form-control input-public' style={{ height: "100%" }} options={artistsOption} placeholder={t("gallery-panel-create-exhibition.enter_artist_name")} />
                                            {/* <label className="lable-public">{t("gallery-panel-create-exhibition.enter_artist_name_fa")}</label> */}
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="artist-tags-row text-dir">
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
                            </div> */}
                            <h3 className="info-title mrgt64 text-dir">{t("gallery-panel-create-exhibition.notice_visiting_hours")}</h3>
                            <div className="row dir">
                                <div
                                    className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "d-none": GetLanguage() === 'en-US'
                                    })}

                                >
                                    <div className="form-group">
                                        <Form.Item name={"statement_fa"}>
                                            <TextArea id="info-213" className="form-control "
                                                placeholder={t("gallery-panel-create-exhibition.exhibition_contact_placeholder_fa")}
                                                rows="8"></TextArea>
                                            {/* <label for="info-213" className="lable-public"></label> */}
                                        </Form.Item>

                                    </div>
                                </div>
                                <div
                                    className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "col w-100": GetLanguage() === 'en-US'
                                    })}
                                >
                                    <div className="form-group ">
                                        <Form.Item name={"statement_en"}>
                                            <TextArea className="form-control" placeholder={t("gallery-panel-create-exhibition.exhibition_contact_placeholder_en")}
                                                rows="8"></TextArea>
                                            {/* <label className="lable-public"></label> */}
                                        </Form.Item>

                                    </div>
                                </div>
                                <div
                                    className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "d-none": GetLanguage() === 'en-US'
                                    })}

                                >
                                    <div className="form-group">
                                        <Form.Item name={"activity_time_fa"}>
                                            <TextArea id="info-213" className="form-control "
                                                placeholder={t("gallery-panel-create-exhibition.exhibition_time_work_placeholder_fa")}
                                                rows="6"></TextArea>
                                            {/* <label for="info-213" className="lable-public"></label> */}
                                        </Form.Item>

                                    </div>
                                </div>
                                <div
                                    className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "col w-100": GetLanguage() === 'en-US'
                                    })}
                                >
                                    <div className="form-group ">
                                        <Form.Item name={"activity_time_en"}>
                                            <TextArea className="form-control" placeholder={t("gallery-panel-create-exhibition.exhibition_time_work_placeholder_en")}
                                                rows="6"></TextArea>
                                            {/* <label className="lable-public"></label> */}
                                        </Form.Item>

                                    </div>
                                </div>
                            </div>
                            <h3 className="info-title mrgt64 text-dir">{t("gallery-panel-create-exhibition.address_contact_info")}</h3>
                            <div className="row dir">
                                <div className={"col-sm-9"}>
                                    <div className="public-group ">
                                        <Form.Item>
                                            <Input className="form-control input-public " required placeholder={t("gallery-panel-create-exhibition.address_fa")} />
                                            {/* <label className="lable-public en-lang">{t("gallery-panel-create-exhibition.address_fa")}</label> */}
                                        </Form.Item>

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
                                        <Form.Item>
                                            <Input className="form-control input-public en-lang " required placeholder={t("gallery-panel-create-exhibition.address_en")} />
                                            {/* <label className="lable-public en-lang">{t("gallery-panel-create-exhibition.address_en")}</label> */}
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="public-group">
                                        <Form.Item name={"phone"}>
                                            <input className="form-control input-public  persian-num" required placeholder={t("gallery-panel-create-exhibition.phone_number")} />
                                            {/* <label className="lable-public">{t("gallery-panel-create-exhibition.phone_number")}</label> */}
                                        </Form.Item>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="adv-btn">
                            <Button htmlType='submit'>
                                {t("gallery-panel-create-exhibition.btn_confirm_next")}
                            </Button>
                            {/* <Link to={"/gallery-panel/upload-exhibition-artwotk"} className="btn-black center-block">
                                {t("gallery-panel-create-exhibition.btn_confirm_next")}
                            </Link> */}
                        </div>
                    </Form>







                    {/* <h3 className="info-title mrgt64 require text-dir">{t("gallery-panel-create-exhibition.upload_poster.title")}</h3>
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
                    </div> */}

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
