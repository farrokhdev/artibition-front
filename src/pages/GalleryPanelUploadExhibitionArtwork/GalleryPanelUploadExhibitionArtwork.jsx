import React, { useEffect, useState } from "react";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import i18next, { t } from 'i18next';
import BasketFooterPanelNoBox from "../GalleryPanelSelectArtworkSource/BasketFooterPanelNoBox";
import classnames from 'classnames';


import Aydin_Aghdashloo from '../../assets/img/Aydin_Aghdashloo_04@3x.jpg'
import add from '../../assets/img/add.png'
import artwork from '../../assets/img/artworks/hnrpqkfiup@3x.jpg'
import add_white from '../../assets/img/add-white@2x.png'
import cloude_upload_icon from '../../assets/img/cloud-upload.svg';
import edit_name_blue from '../../assets/img/edit_name_blue.svg'
import edit_name from '../../assets/img/edit_name.svg'
import apiServices from "../../utils/api.services";
import { GALLERY_ARTISTS } from "../../utils";
import { Form, Input, message, Modal, Button } from "antd";
import { GetLanguage } from "../../utils/utils";

const { TextArea } = Input

function GalleryPanelUploadExhibitionArtwork() {
    const artist_id = [1, 3]
    const [artists, setArtists] = useState([])
    const [showNewArtist, setShowNewArtist] = useState(false)

    useEffect(() => {
        apiServices.get(GALLERY_ARTISTS(2), "")
            .then(res => {
                if (res.data) {
                    console.log(res.data.data.results);
                    setArtists(res.data.data.results)
                } else {
                    message.error(res.response.data.message)
                }

            })
    }, [])

    const onFinishNewArtist = (value) => {
        console.log(value);
    }



    return (
        <div>
            <div className="container container-fixed">
                <HeaderPanel t={t} />
                <div className="upload-exhibition-artist mrgt125">
                    <h2 className="default-title aligncenter">{t("upload-exhibition-artwork.title")}</h2>
                    {artists.map((artist, index) => {
                        if (artist_id.includes(artist.id)) {
                            console.log(artist);
                            return (
                                <div className=" artist-upload-row">
                                    <div className="artist-name-row">
                                        <div className="artist-avatar pull-dir">
                                            <img className="img-responsive" src={artist.bg_image} height="192" width="192" alt="" />
                                        </div>
                                        <h4 className="artists-name text-dir">
                                            <span>
                                                {i18next.language === 'fa-IR' ?
                                                    artist.translations.fa.nick_name :
                                                    artist.translations.en.nick_name}
                                            </span>
                                        </h4>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="row dir">
                                        <div className="col-lg-2 col-sm-3 col-xs-6">
                                            <label className="artist-upload addbtn" for="file-upload-1">
                                                <img src={add} width="36" height="36" alt="" className="img-responsive" />
                                            </label>
                                            <input type={"file"} className="d-none" id="file-upload-1" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    {/* <div className=" artist-upload-row">
                        <div className="artist-name-row">
                            <div className="artist-avatar pull-dir">
                                <img className="img-responsive" src={Aydin_Aghdashloo} height="192" width="192" alt="آیدین آغداشلو" />
                            </div>
                            <h4 className="artists-name text-dir">
                                <span>آیدین</span>
                                <span>آغداشلو</span>
                            </h4>
                        </div>
                        <div className="clearfix"></div>
                        <div className="row dir">
                            <div className="col-lg-2 col-sm-3 col-xs-6">
                                <label className="artist-upload addbtn" for="file-upload-1">
                                    <img src={add} width="36" height="36" alt="" className="img-responsive" />
                                </label>
                                <input type={"file"} className="d-none" id="file-upload-1" />
                            </div>
                        </div>
                    </div> */}




                    {/* <div className=" artist-upload-row">
                        <div className="artist-name-row">
                            <div className="artist-avatar pull-dir">
                                <img className="img-responsive" src={Aydin_Aghdashloo} height="192" width="192" alt="آیدین آغداشلو" />
                            </div>
                            <h4 className="artists-name text-dir">
                                <span>آیدین</span>
                                <span>آغداشلو</span>
                            </h4>
                        </div>
                        <div className="clearfix"></div>
                        <div className="row dir">
                            <div className="col-lg-2 col-sm-3 col-xs-6">
                                <div className="cols">
                                    <div className="col-img">
                                        <div className="tags tags-off persian-num">30 %</div>
                                        <img src={artwork} width="840" height="840" alt="آرتیبیشن" className="img-responsive" />
                                        <div className="tab-overly">
                                            <a href="#" className="btn-see">
                                                <span className="view-icon pull-right"></span>
                                                <span>{t("upload-exhibition-artwork.view")}</span>
                                            </a>
                                            <a href="#" className="btn-sale">{t("upload-exhibition-artwork.shop_now")}</a>
                                            <a href="#" className="like-icon"></a>
                                        </div>
                                    </div>
                                    <div className="col-body">
                                        <div className="col-dimension">
                                            <span className="col-dimension-title">{t("upload-exhibition-artwork.size")}</span>
                                            <span className="col-dimension-body">
                                                <span className="dimension-width">60</span>
                                                <span>{t("upload-exhibition-artwork.x")}</span>
                                                <span className="dimension-height">60</span>
                                            </span>
                                        </div>
                                        <div className="col-price">
                                            <span className="col-price-num">22.000.000</span>
                                            <span className="col-price-unit">{t("upload-exhibition-artwork.price")}</span>
                                            <span className="edit-price"><img src={edit_name} width="32" height="32" alt="" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-3 col-xs-6">
                                <label className="artist-upload addbtn" for="file-upload-2">
                                    <img src={add} width="36" height="36" alt="" className="img-responsive" />
                                </label>
                                <input type={"file"} className="d-none" id="file-upload-2" />
                            </div>
                        </div>
                    </div> */}
                    <button type="button" className="btn-add-artist" onClick={() => { setShowNewArtist(true) }}>
                        <img src={add_white} width="24" height="24" alt="" className="img-responsive" />
                        <span>{t("upload-exhibition-artwork.new_artist")}</span>
                    </button>
                    <div className="adv-btn" style={{ backgroundColor: "white" }}>
                        <div className="container">
                            <button type="button" className="btn-next pull-dir-rev">{t("upload-exhibition-artwork.confirm_gallery_info")}</button>
                        </div>
                    </div>
                </div>
                <Modal
                    visible={showNewArtist}
                    width={800}
                    footer={[]}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("gallery-panel-create-exhibition.add_new_artist.title")}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowNewArtist(false) }}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>


                        <div className="modal-body">
                            <div className="enter-address">
                                <div className="row-addaddress">
                                    <h3 className="addressform-title text-dir">{t("gallery-panel-create-exhibition.add_new_artist.upload_artist_picture")}</h3>
                                </div>
                                <Form name="add_new_artist"
                                    onFinish={onFinishNewArtist}
                                    className="row dir">
                                    <div className="upload-img-artwork" style={{ width: "100%" }}>
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
                                    <h3 className="addressform-title text-dir w-100" >{t("gallery-panel-create-exhibition.add_new_artist.artist_info")}</h3>
                                    <br />
                                    <div className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "d-none": GetLanguage() === 'en-US'
                                    })}>
                                        <div className="public-group">
                                            <Form.Item name={"name_fa"}>
                                                <Input required className="form-control input-public" placeholder={t("gallery-panel-create-exhibition.add_new_artist.first_name_fa")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "d-none": GetLanguage() === 'en-US'
                                    })}>
                                        <div className="public-group">
                                            <Form.Item name={"family_fa"}>
                                                <Input required className="form-control input-public" placeholder={t("gallery-panel-create-exhibition.add_new_artist.last_name_fa")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="public-group en">
                                            <Form.Item name={"name_en"}>
                                                <Input required className="form-control input-public" placeholder={t("gallery-panel-create-exhibition.add_new_artist.first_name_en")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="public-group en ">
                                            <Form.Item name={"family_en"}>
                                                <Input required className="form-control input-public" placeholder={t("gallery-panel-create-exhibition.add_new_artist.last_name_en")} />
                                            </Form.Item>
                                        </div>
                                    </div>

                                    <div className={classnames("", {
                                        "col-sm-12": GetLanguage() === 'fa-IR',
                                        "d-none": GetLanguage() === 'en-US'
                                    })}>
                                        <div className="public-group ">
                                            <Form.Item name={"bio_fa"}>
                                                <TextArea rows={"6"} placeholder={t("gallery-panel-create-exhibition.add_new_artist.bio_fa")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="public-group en">
                                            <Form.Item name={"bio_en"}>
                                                <TextArea rows={"6"} placeholder={t("gallery-panel-create-exhibition.add_new_artist.bio_en")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                        <Button htmlType="submit" className="btn btn-black">{t("gallery-panel-create-exhibition.add_new_artist.confirm_btn")}</Button>
                                    </div>
                                </Form>
                                {/* <div className="row-addaddress">
                                    <div>
                                        <h3 className="addressform-title text-dir">{t("payment.address_step.modal.receiver_information")}</h3>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <form className="row dir">
                                    <div className="col-sm-6">
                                        <div className="public-group">
                                            <input className="form-control input-public " required />
                                            <label className="lable-public">{t("payment.address_step.modal.receiver_fullname")}</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="public-group">
                                            <input className="form-control input-public " required />
                                            <label className="lable-public">{t("payment.address_step.modal.phone_number")}</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="public-group">
                                            <input className="form-control input-public " required />
                                            <label className="lable-public">{t("payment.address_step.modal.national_code")}</label>
                                            <span className="input-help">{t("payment.address_step.modal.national_code_description")}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="lable-checkbox public-group text-dir">
                                            <input type="checkbox" />
                                            <span>{t("payment.address_step.modal.foreign_checkbox")}</span>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="col-sm-12 text-dir">
                                        <label className="lable-checkbox public-group">
                                            <input type="checkbox" />
                                            <span>{t("payment.address_step.modal.receiver_checkbox")}</span>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="col-sm-12 text-dir">
                                        <label className="lable-checkbox public-group">
                                            <input type="checkbox" />
                                            <span>{t("payment.address_step.modal.send_friend_checkbox")}</span>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="w-100 row justify-content-center">
                                        <button type="button" className="btn-back-blue">
                                            <img src={edit_name_blue} width="32" height="32" alt="" className="pull-right" />
                                            <span>{t("payment.address_step.modal.select_address_map")}</span>
                                        </button>
                                    </div>
                                </form> */}
                            </div>
                        </div>

                    </div>
                </Modal>
            </div>
            <BasketFooterPanelNoBox />
        </div>
    )
}

export default GalleryPanelUploadExhibitionArtwork