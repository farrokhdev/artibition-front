import React, { useEffect, useState } from "react";
import i18next, { t } from 'i18next';

import whitePlus from "../../assets/img/plus-white.png"
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input, message, Modal } from "antd";
import apiServices from "../../utils/api.services";
import { ADD_ARTIST_TO_GALLERY, ARTIST, ARTIST_BY_GALLERY, GALLERY_ARTISTS } from "../../utils";
import queryString from "query-string";
import OneUpload from "../../components/OneUpload/OneUpload";
import classnames from 'classnames';
import { GetLanguage } from "../../utils/utils";
import { useSelector } from "react-redux";
import OneUploadCircle from "../../components/OneUploadCircle/OneUploadCircle";
import Aydin_Aghdashloo from '../../assets/img/Aydin_Aghdashloo_04@3x.jpg';


function CreateArtist() {
    const [showArtistSource, setShowArtistSource] = useState(false)
    const [showExistArtist, setShowExistArtist] = useState(false)
    const [showNewArtist, setShowNewArtist] = useState(false)
    const [siteArtists, setSiteArtists] = useState([])
    const [galleryArtists, setGalleryArtists] = useState([])
    const [uploadList, setUploadList] = useState([])
    const [params, setParams] = useState({
        page_size: 9999999
    })
    const [form] = Form.useForm()
    const { TextArea } = Input
    const { id } = useSelector((state) => state.galleryReducer)
    let selectedArtist = {
        artists_id_list: []
    }


    const handleChange = (e) => {
        if (e.target.checked) {
            selectedArtist.artists_id_list.push(e.target.value)
        } else {
            const index = selectedArtist.artists_id_list.indexOf(e.target.value)
            selectedArtist.artists_id_list.splice(index, 1)
        }
        console.log(selectedArtist.artists_id_list);
    }
    const confirmAddArtist = () => {
        console.log(selectedArtist);
        apiServices.post(ADD_ARTIST_TO_GALLERY(id), selectedArtist)

            .then(res => {
                if (res.data) {
                    console.log(res.data.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {

        if (showExistArtist) {
            apiServices.get(GALLERY_ARTISTS(id), queryString.stringify(params))
                .then(res => {
                    if (res.data) {
                        setGalleryArtists(res.data.data.results)
                        console.log("galleryArtist", res.data.data.results);
                    }
                })
                .catch(err => {
                    console.log(err);
                })

            apiServices.get(ARTIST, queryString.stringify(params))
                .then(res => {
                    if (res.data) {
                        setSiteArtists(res.data.data.results)
                    }
                    else {
                        message.error(res.response.data.message)
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }


    }, [showExistArtist])

    useEffect(() => {
        console.log(siteArtists);
    }, [siteArtists])


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


            apiServices.post(ARTIST_BY_GALLERY(id), payload)
                .then(res => {
                    if (res.data) {
                        setUploadList([]);
                        form.resetFields();
                        setShowNewArtist(false)
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
        <>
            <div className="box box-1 create-ex">
                <div className="pull-dir">
                    <span className="bolder-title">{t("gallery-panel-artist.create_artist")}</span>
                </div>
                <Button className="btn-box-1 btn-pink pull-left" onClick={() => { setShowArtistSource(true) }}>
                    <img src={whitePlus} width="16" height="16" className="center-block" />
                </Button>
                <div className="clearfix"></div>
            </div>
            <Modal visible={showArtistSource}
                width={"800px"}
                footer={[]}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{t("gallery-panel-create-exhibition.add_new_artist.title")}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowArtistSource(false) }}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>


                    <div className="modal-body">
                        <div className="adv-btn" style={{ flexDirection: "column" }}>
                            <button type="button" className="btn-black center-block" data-target="#exist-artworks" data-toggle="modal" onClick={() => { setShowExistArtist(true) }}>
                                انتخاب از هنرمندان سایت
                            </button>
                            <button type="button" className="btn-black center-block mrgt16" data-target="#modal-import { useLocation } from 'react-router-dom';edit-price" data-toggle="modal" onClick={() => { setShowNewArtist(true) }}>
                                اضافه کردن هنرمند جدید
                            </button>
                        </div>
                    </div>

                </div>
            </Modal>





            <Modal visible={showExistArtist}
                width={"800px"}
                footer={[]}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{t("gallery-panel-create-exhibition.add_new_artist.title")}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => { setShowExistArtist(false) }}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>


                    <div className="modal-body text-dir">
                        {siteArtists.map((artist, index) => {
                            return (
                                <div className="d-flex" style={{ padding: "20px", margin: "20px 0" }}>
                                    <div className="d-flex" style={{ width: "40px", height: "50px", padding: "10px", alignItems: "center", justifyContent: "center" }}>
                                        <Checkbox value={artist.id} defaultChecked={galleryArtists.some(e => e.id === artist.id)} disabled={galleryArtists.some(e => e.id === artist.id)} onChange={(e) => { handleChange(e) }} />
                                    </div>
                                    <div className="d-flex" style={{ width: "100px", height: "50px", padding: "10px", alignItems: "center", justifyContent: "center" }}>
                                        <img src={Aydin_Aghdashloo} style={{ width: "70px" }} />
                                    </div>
                                    <div className="d-flex" style={{ flex: "1", height: "50px", padding: "10px", alignItems: "center", fontSize: "18px" }}>
                                        <p> {i18next.language === "fa-IR" ? artist.translations?.fa?.nick_name : artist.translations?.en?.nick_name} </p>
                                    </div>
                                </div>
                            )
                        })}

                        <div style={{ position: "sticky", bottom: "0px", backgroundColor: "white", padding: "20px 0" }}>
                            <Button className="btn btn-black" style={{ padding: "0 40px", height: "40px" }} onClick={() => { confirmAddArtist() }}>تایید</Button>
                        </div>

                    </div>
                </div>
            </Modal>



            <Modal
                visible={showNewArtist}
                width={800}
                footer={[]}
                destroyOnClose={true}>
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
                            <OneUploadCircle uploadList={uploadList} setUploadList={setUploadList} />
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
        </>

    )
}

export default CreateArtist