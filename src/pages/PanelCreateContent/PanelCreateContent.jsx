import React, { useEffect, useState } from 'react';
import { t } from 'i18next';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import classnames from 'classnames';
import { GetLanguage } from '../../utils/utils';
import OneUpload from '../../components/OneUpload/OneUpload';
import cloude_upload_icon from '../../assets/img/cloud-upload.svg';
import { Form, Input, Select, Checkbox, message, Radio } from 'antd';
import apiServices from '../../utils/api.services';
import { ARTIST_ME, CORE_CONTENT } from '../../utils';
import { useNavigate } from 'react-router-dom';
import TextArea from 'antd/es/input/TextArea';
import { useSelector } from 'react-redux';

function PanelCreateContent() {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const Language = GetLanguage();
    const [uploadList, setUploadList] = useState([])
    const [poster, setPoster] = useState([])
    const [imageOrVideo, setImageOrVideo] = useState()
    const [artistId, setArtistId] = useState()

    const [isSelected, setIsSelected] = useState(false);
    const [isSelectedVideo, setIsSelectedVideo] = useState(false);
    const { id } = useSelector((state) => state.galleryReducer)


    const { roles } = useSelector((state) => state.authReducer)
    const getUserRole = () => {
        let userRole = "user"
        if (typeof roles === "string") {
            return roles
        } else {
            if (roles && roles.length > 0) {
                if (roles.includes("seller")) {
                    userRole = "seller"
                }
                if (roles.includes("artist")) {
                    userRole = "artist"
                }
            } else {
                userRole = 'user'
            }
        }
        return userRole
    }

    const onFinish = (values) => {
        let payload = {
            "translations": {
                "en": {
                    "title": values?.title_en,
                    "description": values?.description_en
                },
                "fa": {
                    "title": values?.title,
                    "description": values?.description
                }
            },
            "type": "other",
            "is_active": true,
            "link": values?.link,
            "object_id": getUserRole() === "gallery" ? id : artistId,
            "content_type": getUserRole() === "gallery" ? "gallery" : "artist",
            "content_file": uploadList,
            "poster": poster[0]
        }
        console.log(payload);

        apiServices.post(CORE_CONTENT, payload)
            .then(res => {
                if (res.data) {
                    message.success({
                        content: 'محتوا با موفقیت ساخته شد', style: {
                            marginTop: '10vh',
                        },
                    })
                    setTimeout(() => {
                        navigate('/panel/contents')
                    }, 500);
                } else {
                    message.error({
                        content: 'خطا در ثبت اطلاعات', style: {
                            marginTop: '10vh'
                        }
                    })
                }
            })
    }

    useEffect(() => {
        apiServices.get(ARTIST_ME, "")
            .then(res => {
                if (res.data) {
                    setArtistId(res.data.data.id)
                    // console.log(res.data.data.id);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <>
            <HeaderPanel t={t} />
            <Form
                className=""
                form={form}
                onFinish={onFinish}
            >
                <div className="panel-style container mx-auto px-0 w-100 bg-white ">


                    <h2 className="default-title aligncenter mt-3">{t("content-panel-create-content.title")}</h2>
                    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 create-exhibition">
                        <h3 className="info-title mrgt64 require text-dir">{t("content-panel-create-content.upload_poster.title")}</h3>
                        <OneUpload
                            uploadList={poster}
                            setUploadList={setPoster}
                        />
                        <div className="row">
                            <div
                                className={classnames("", {
                                    "col-sm-6": Language === 'fa-IR',
                                    "d-none": Language === 'en-US'
                                })}

                            >
                                <div className="public-group">

                                    <Form.Item
                                        className="w-100"
                                        name="title"
                                        rules={[
                                            {
                                                required: Language === 'fa-IR' ? true : false,
                                                message: 'required',
                                            }
                                        ]}>
                                        <Input
                                            type="text"
                                            id="info-215"
                                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                            placeholder={t("content-panel-create-content.subject_fa")}
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                            <div
                                className={classnames("", {
                                    "col-sm-6": Language === 'fa-IR',
                                    "col w-100": Language === 'en-US'
                                })}

                            >
                                <div className="public-group en">

                                    <Form.Item
                                        className="w-100"
                                        name="title_en"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Input
                                            type="text"
                                            id="info-215"
                                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                            placeholder={t("content-panel-create-content.subject_en")}
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div

                                className={classnames("", {
                                    "col-sm-6": Language === 'fa-IR',
                                    "d-none": Language === 'en-US'
                                })}

                            >
                                <div className="form-group">

                                    <Form.Item
                                        className="w-100"
                                        name="description"
                                        rules={[
                                            {
                                                required: Language === 'fa-IR' ? true : false,
                                                message: 'required',
                                            }]}
                                    >
                                        <TextArea className="default-input"
                                            placeholder={t("content-panel-create-content.placeholder_fa")} rows="8" />
                                    </Form.Item>

                                    <label for="info-213" className="lable-public"></label>
                                </div>
                            </div>
                            <div
                                className={classnames("", {
                                    "col-sm-6": Language === 'fa-IR',
                                    "col w-100": Language === 'en-US'
                                })}
                            >
                                <div className="form-group ">
                                    <Form.Item
                                        className="w-100"
                                        name="description_en"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            }]}
                                    >
                                        <TextArea className="default-input"
                                            placeholder={t("content-panel-create-content.placeholder_en")} rows="8" />
                                    </Form.Item>
                                    <label className="lable-public"></label>
                                </div>
                            </div>
                        </div>

                        <h3 className="info-title mrgt64 require text-dir">{t("content-panel-create-content.upload.title")}</h3>
                        <ul className="content-type ">
                            <div className="d-block d-md-flex text-dir ">
                                {/* <div className="col  px-0">
                                    <div className="d-flex box-dir-reverse">
                                        <li>
                                            <label className="container-radio text-dir">{t("content-panel-create-content.upload_poster.image")}
                                            </label>
                                            <Form.Item valuePropName="checked" noStyle>
                                                <Checkbox type="checkbox"
                                                    checked={isSelected}
                                                    onChange={e => setIsSelected(e.target.checked)}
                                                ></Checkbox>
                                            </Form.Item>
                                        </li>
                                    </div>
                                </div> */}
                                <div className="col  px-0">
                                    <Radio.Group onChange={(e) => { setImageOrVideo(e.target.value) }}>
                                        <Radio value={"video"} style={{ margin: "0 30px" }}>{t("content-panel-create-content.upload_poster.video")}</Radio>
                                        <Radio value={"image"} style={{ margin: "0 30px" }}>{t("content-panel-create-content.upload_poster.image")}</Radio>
                                    </Radio.Group>
                                </div>

                            </div>
                        </ul>
                        {imageOrVideo === "image" ?

                            <OneUpload
                                uploadList={uploadList}
                                setUploadList={setUploadList}
                            />
                            : ""}
                        {imageOrVideo === "video" ?
                            <div className="col-sm-12">
                                <div className="public-group en">
                                    <Form.Item
                                        className="w-100"
                                        name="link"
                                        rules={[
                                            {
                                                required: false,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Input
                                            type="text"
                                            id="info-215"
                                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                            placeholder={t("content-panel-create-content.link")}
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                            : ""
                        }

                        <br />
                        <div className="adv-btn">
                            {/* <button type="button" className="btn-default pull-dir graycolor">{t("content-panel-create-content.btn_cancel")}</button> */}
                            <button htmlType="submit" className="btn-black pull-dir">{t("content-panel-create-content.btn_create_content")}</button>
                        </div>

                    </div>
                </div>
            </Form>
            <BasketFooterPanel />
        </>
    )
}

export default PanelCreateContent;
