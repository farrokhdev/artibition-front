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
import { ARTIST_BY_GALLERY, GALLERY_ARTISTS } from "../../utils";
import { Form, Input, message, Modal, Button, Spin } from "antd";
import { GetLanguage } from "../../utils/utils";
import MultipleUpload from "../../components/MultiUpload/MultiUpload";
import OneUpload from "../../components/OneUpload/OneUpload";
import queryString from "query-string";
import Collection from "../CollectionsList/Collection";
import ExistArtworkCollection from "./ExistArtworkCollection";

const { TextArea } = Input

function GalleryPanelUploadExhibitionArtwork() {
    const [selectedArtistId, setSelectedArtistId] = useState([1, 2, 3, 4, 5])
    const [selectedArtist, setSelectedArtist] = useState([])
    const [artists, setArtists] = useState([])
    const [showNewArtist, setShowNewArtist] = useState(false)
    const [showSelectArtworkSource, setShowSelectArtworkSource] = useState(false)
    const [showExistArtwork, setShowExistArtwork] = useState(false)
    const [uploadList, setUploadList] = useState([])
    const [selectedArtowrks, setSelectedArtworks] = useState([])
    const [params, setParams] = useState({
        page_size: 9999999
    })

    const [form] = Form.useForm()





    useEffect(() => {
        apiServices.get(GALLERY_ARTISTS(2), queryString.stringify(params))
            .then(res => {
                if (res.data) {
                    let filter = []
                    res.data.data.results.map((item) => {

                        if (selectedArtistId.includes(item.id)) {

                            filter.push(item)
                        }
                    })
                    setSelectedArtist(filter);
                } else {
                    message.error(res.response.data.message)
                }

            })
    }, [])


    const onFinishNewArtist = (value) => {
        if (uploadList.length > 0) {
            const payload = {
                "translations": {
                    "en": {
                        "biography": value.bio_en,
                        "first_name": value.name_en,
                        "last_name": value.family_en,
                    },
                    "fa": {
                        // "biography": value.bio_fa ? value.bio_fa : null,
                        // "first_name": value.name_fa ? value.name_fa : null,
                        // "last_name": value.family_fa ? value.family_fa : null,
                        "biography": value.bio_fa ? value.bio_fa : value.bio_en,
                        "first_name": value.name_fa ? value.name_fa : value.name_en,
                        "last_name": value.family_fa ? value.family_fa : value.family_en,
                    }
                },
                "bg_image": {
                    "media_path": uploadList[0].media_path,
                    "file_key": uploadList[0].file_key,
                    "type": "image",
                    "bucket_name": "image"
                }
            }
            console.log(payload);
            apiServices.post(ARTIST_BY_GALLERY(2), payload)
                .then(res => {
                    if (res.data) {
                        // console.log(res.data.data);
                        console.log(res.data.data);
                        setSelectedArtist([...selectedArtist, res.data.data])
                        setSelectedArtistId([...selectedArtistId, res.data.data.id])
                        setUploadList([]);
                        form.resetFields();
                    } else {
                        message.error(res.response.data.message)
                    }

                })
        } else {
            message.error({
                content: t("add-new-artist-by-gallery.upload_avatar_error"), style: {
                    marginTop: '110px',
                },
            })
        }
    }





    return (
        <div>
            <div className="container container-fixed">
                <HeaderPanel t={t} />
                <div className="upload-exhibition-artist mrgt125">
                    <h2 className="default-title aligncenter">{t("upload-exhibition-artwork.title")}</h2>
                    {selectedArtist.map((artist, artistIndex) => {
                        return (
                            <div className=" artist-upload-row">
                                <div className="artist-name-row">
                                    <div className="artist-avatar pull-dir">
                                        <img className="img-responsive" src={artist.bg_image?.exact_url} height="192" width="192" alt="" />
                                    </div>
                                    <h4 className="artists-name text-dir">
                                        <span>
                                            {i18next.language === 'fa-IR' ?
                                                artist.translations?.fa?.nick_name :
                                                artist.translations?.en?.nick_name}
                                        </span>
                                    </h4>
                                </div>
                                <div className="clearfix"></div>
                                <div className="row dir">
                                    {selectedArtowrks.map((artwork, artworkIndex) => {
                                        if (artwork.id === artist.id) {
                                            {
                                                return (
                                                    artwork.selected.map((showArtwork, showArtworkIndex) => {
                                                        console.log(showArtwork);
                                                        return (
                                                            <div class="cols" tabindex="-1" style={{ padding: "0 5px" }}>
                                                                {/* <label class="lable-checkbox"> */}
                                                                {/* <input type="checkbox" name="58,5" value="" /> */}
                                                                {/* <span class="checkmark"></span> */}
                                                                <div class="col-img">
                                                                    <div class="tags tags-off persian-num">30 %</div>
                                                                    <img src="/static/media/hnrpqkfiup@3x.27cdebb9.jpg" width="200" height="200" alt="آرتیبیشن" class="img-responsive" />
                                                                </div>
                                                                {/* </label> */}
                                                                <div class="col-body text-dir dir">
                                                                    <h6 class="col-title">
                                                                        <span class="col-name">آیدین</span>
                                                                        <span class="col-name">آغداشلو</span>
                                                                    </h6>
                                                                    <div class="col-dimension">
                                                                        <span class="col-dimension-title">ابعاد:</span>
                                                                        <span class="col-dimension-body">
                                                                            <span class="dimension-width">60</span>
                                                                            <span> در </span>
                                                                            <span class="dimension-height">60</span>
                                                                        </span>
                                                                    </div>
                                                                    <div class="col-price">
                                                                        <span class="col-price-num">22.000.000</span>
                                                                        <span class="col-price-unit">تومان</span>
                                                                        <span class="edit-price" data-toggle="modal" data-target="modal-edit-price">
                                                                            <img src="/static/media/edit_name.952e3f26.svg" width="32" height="32" alt="" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                )
                                            }
                                        }
                                    })}

                                    <div>
                                        <button style={{ width: "200px", height: "200px" }} className="artist-upload addbtn" onClick={() => { setShowSelectArtworkSource(true) }}>
                                            <img src={add} width="36" height="36" alt="" className="img-responsive" />
                                        </button>
                                        {/* <input type={"file"} className="d-none" id="file-upload-1" /> */}
                                    </div>
                                </div>
                            </div>
                        )

                    })}
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
                                <OneUpload uploadList={uploadList} setUploadList={setUploadList} />
                                <Form form={form} name="add_new_artist"
                                    onFinish={onFinishNewArtist}
                                    className="row dir">
                                    <h3 className="addressform-title text-dir w-100" >{t("gallery-panel-create-exhibition.add_new_artist.artist_info")}</h3>
                                    <br />
                                    <div className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "d-none": GetLanguage() === 'en-US'
                                    })}>
                                        <div className="public-group">
                                            <Form.Item name={"name_fa"}>
                                                <Input required={GetLanguage() === 'fa-IR' ? true : false} className="form-control input-public" placeholder={t("gallery-panel-create-exhibition.add_new_artist.first_name_fa")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className={classnames("", {
                                        "col-sm-6": GetLanguage() === 'fa-IR',
                                        "d-none": GetLanguage() === 'en-US'
                                    })}>
                                        <div className="public-group">
                                            <Form.Item name={"family_fa"}>
                                                <Input required={GetLanguage() === 'fa-IR' ? true : false} className="form-control input-public" placeholder={t("gallery-panel-create-exhibition.add_new_artist.last_name_fa")} />
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
                                                <TextArea required={GetLanguage() === 'fa-IR' ? true : false} rows={"6"} placeholder={t("gallery-panel-create-exhibition.add_new_artist.bio_fa")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="public-group en">
                                            <Form.Item name={"bio_en"}>
                                                <TextArea required rows={"6"} placeholder={t("gallery-panel-create-exhibition.add_new_artist.bio_en")} />
                                            </Form.Item>
                                        </div>
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                        <Button htmlType="submit" className="btn btn-black">{t("gallery-panel-create-exhibition.add_new_artist.confirm_btn")}</Button>
                                    </div>
                                </Form>
                            </div>
                        </div>

                    </div>
                </Modal>



                <Modal visible={showSelectArtworkSource}
                    width={800}
                    footer={[]}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("gallery-panel-create-exhibition.add_new_artist.title")}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowSelectArtworkSource(false) }}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>


                        <div className="modal-body">
                            <div className="adv-btn" style={{ flexDirection: "column" }}>
                                <button type="button" className="btn-black center-block" data-target="#exist-artworks" data-toggle="modal" onClick={() => { setShowExistArtwork(true) }}>
                                    انتخاب از آثار موجود
                                </button>
                                <button type="button" className="btn-black center-block mrgt16" data-target="#modal-edit-price" data-toggle="modal">
                                    افزودن اثر جدید
                                </button>
                            </div>
                        </div>

                    </div>
                </Modal>





                <Modal visible={showExistArtwork}
                    width={"100vw"}
                    footer={[]}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("gallery-panel-create-exhibition.add_new_artist.title")}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowExistArtwork(false) }}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>


                        <div className="modal-body">
                            <div className="container">
                                {selectedArtist.map((artist, index) => {
                                    // console.log(index, artist);
                                    return (
                                        <div className="exist-artwork-row">
                                            <div className="artist-name-row">
                                                <div className="artist-avatar pull-right">
                                                    <img className="img-responsive" src="img/Aydin_Aghdashloo_04@3x.jpg" height="192" width="192" alt="" />
                                                </div>
                                                <h4 className="artists-name">
                                                    <span>آیدین</span>
                                                    <span>آغداشلو</span>
                                                </h4>
                                            </div>
                                            <div className="artist-artworks-row advisory-select">
                                                <ExistArtworkCollection artistID={artist.id} selectedArtwork={selectedArtowrks} setSelectedArtwork={setSelectedArtworks} />
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* <div className="exist-artwork-row">
                                    <div className="artist-name-row">
                                        <div className="artist-avatar pull-right">
                                            <img className="img-responsive" src="img/Aydin_Aghdashloo_04@3x.jpg" height="192" width="192" alt="" />
                                        </div>
                                        <h4 className="artists-name">
                                            <span>آیدین</span>
                                            <span>آغداشلو</span>
                                        </h4>
                                    </div>
                                    <div className="artist-artworks-row advisory-select">
                                        <ExistArtworkCollection />
                                    </div>
                                </div> */}
                            </div>
                            <div className="adv-btn" style={{ backgroundColor: "white" }}>
                                <div className="container">
                                    <button type="button" className="btn-next pull-left">تایید و ادامه</button>
                                    <div className="selected-artwork pull-left">
                                        <span className="persian-num">5</span>
                                        <span>اثر<span className="hidden-xs"> انتخاب شد</span></span>
                                    </div>
                                </div>
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