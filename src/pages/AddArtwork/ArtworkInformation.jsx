import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Checkbox, message } from 'antd';
import cloud_upload from '../../assets/img/cloud-upload.svg'
import { t } from 'i18next';
import classnames from 'classnames';
import { GetLanguage } from '../../utils/utils'
import MultipleUpload from '../../components/MultiUpload/MultiUpload';
import apiServices from '../../utils/api.services';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';
import { MATERIALS_CATEGORIES, PRODUCTS, PRODUCTS_CATEGORIES, SOCIAL_NETWORK_COLLECTIONS, SUBJECTS_CATEGORISE, TECHNIQUS_CATEGORIES } from '../../utils';
import { artworkForm } from '../../redux/reducers/Artwork/artwork.action';

function ArtworkInformation({ next, prev }) {

    const [form] = Form.useForm();
    const { Option } = Select;
    const dispach = useDispatch()
    const { id } = useSelector((state) => state.authReducer)
    const navigate = useNavigate();
    const [uploadList, setUploadList] = useState([])
    const [categorys, setCategorys] = useState([]);
    const [newArtwork, setNewArtwork] = useState({ category_id: undefined })
    const [subject, setSubject] = useState([]);
    const [subjectId, setSubjectId] = useState({ subject_id: [] })
    const [technique, setTechnique] = useState([]);
    const [techniqueId, setTechniqueId] = useState({ technique_id: [] })
    const [material, setMaterial] = useState([]);
    const [materialId, setMaterialId] = useState({ material_id: [] })
    const [sotialCollection, setSotialCollection] = useState([]);
    const Language = GetLanguage();
    const [params, setParams] = useState({
        owner_id: id,
    });


    console.log("categorys", categorys);

    // The job of this constant is to send the information needed to make the artwork
    const onFinish = (values) => {
        let payload = {
            "translations": {
                "fa": {
                    "title": values.title,
                    "about": values?.discribtion,
                    "artist_name": values?.artist_name
                }, "en": {
                    "title": values.title_en,
                    "about": values?.discribtion_en,
                    "artist_name": values?.artist_name_en
                }
            },
            "category": newArtwork?.category_id,
            "material": materialId?.material_id,
            "subject": subjectId?.subject_id,
            "technique": techniqueId?.technique_id,
            "jalali_creation_year": values?.jalali_creation_year,
            "width": values?.width,
            "length": values?.length,
            "weight": values?.weight,
            "medias": uploadList,
            "is_special": false,
            "view_only": false,
            "is_sold": false,

            "tags_en": [values.tags_en],
            "tags_fa": [values.tags_fa],


        }

        dispach(artworkForm(payload))
        next()

        // console.log('Success:', values);
    };

    // get list of sub category for show to user and select by users in dropdown to create art field
    const getListCategory = () => {
        apiServices.get(PRODUCTS_CATEGORIES, "")
            .then(res => {

                setCategorys(res.data.data.results.map(item => {
                    if (Language === 'fa-IR') {
                        return { label: item?.translations?.fa?.title, value: item?.id }
                    } else {
                        return { label: item?.translations?.en?.title, value: item?.id }
                    }
                }))
            })
            .catch(err => {
                console.log(err);
            })
    }


    // function for set categories id
    const handleSetCategory = (value) => {
        setNewArtwork({
            ...newArtwork,
            category_id: value
        })
    }
    // function for set subject by categories id
    const handleSetSubject = (value) => {
        setSubjectId({
            ...subjectId,
            subject_id: value
        })
    }
    // function for set technique by categories id
    const handleSetTechnique = (value) => {
        setTechniqueId({
            ...techniqueId,
            technique_id: value
        })
    }
    // function for set material by categories id
    const handleSetMaterial = (value) => {
        setMaterialId({
            ...materialId,
            material_id: value
        })
    }

    // Get the list of collections and select it as dropdown
    const getCollections = () => {
        apiServices.get(SOCIAL_NETWORK_COLLECTIONS, queryString.stringify(params))
            .then(res => {
                // setSotialCollection(res.data.data.map(item=>{}))
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getCollections();
    }, []);

    useEffect(() => {
        // If there is a device id, its dependent services will be run if selected
        if (newArtwork?.category_id) {


            // Gets and displays a list of topics by filtering the art field
            apiServices.get(SUBJECTS_CATEGORISE(newArtwork?.category_id), "")
                .then(res => {
                    setSubject(res.data.data.map(item => {

                        if (Language === 'fa-IR') {
                            return { label: item?.translations?.fa?.title, value: item?.id }
                        } else {
                            return { label: item?.translations?.en?.title, value: item?.id }
                        }
                    }))
                })
                .catch(err => {
                    console.log(err);
                })


            // Receives and displays a list of techniques by filtering the art background
            apiServices.get(TECHNIQUS_CATEGORIES(newArtwork?.category_id), "")
                .then(res => {
                    setTechnique(res.data.data.map(item => {

                        if (Language === 'fa-IR') {
                            return { label: item?.translations?.fa?.title, value: item?.id }
                        } else {
                            return { label: item?.translations?.en?.title, value: item?.id }
                        }
                    }))
                })
                .catch(err => {
                    console.log(err);
                })

            apiServices.get(MATERIALS_CATEGORIES(newArtwork?.category_id), "")
                .then(res => {
                    setMaterial(res.data.data.map(item => {

                        if (Language === 'fa-IR') {
                            return { label: item?.translations?.fa?.title, value: item?.id }
                        } else {
                            return { label: item?.translations?.en?.title, value: item?.id }
                        }
                    }))
                })
                .catch(err => {
                    console.log(err);
                })
        }

    }, [newArtwork]);


    useEffect(() => {
        getListCategory();
    }, []);

    return (
        <>
            <h3 className="info-title mrgt64 require text-dir">{t("content-panel-add-artwork.upload.title")}</h3>


            {/* -------   this component is to upload several photos simultaneously   ------- */}
            <MultipleUpload
                uploadList={uploadList}
                setUploadList={setUploadList}
            />

            <Form
                className=""
                form={form}
                onFinish={onFinish}
            >
                <div className="info-sec dir">
                    <h3 className="infotitle-default require text-dir">{t("content-panel-add-artwork.art_info.title")}</h3>
                    <div className="row">
                        <div className="d-block d-sm-flex box-dir-reverse w-100">
                            <div

                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "d-none": GetLanguage() === 'en-US'
                                })}
                            >
                                <div className="public-group">

                                    <Form.Item
                                        className="w-100 "
                                        name="title"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Input
                                            type="text"
                                            id="info-201"
                                            className="form-control input-public border-0 px-2  d-flex"
                                            placeholder={t("content-panel-add-artwork.art_info.artwork_title")}
                                        />


                                    </Form.Item>
                                </div>
                            </div>

                            <div

                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "col-sm-12": GetLanguage() === 'en-US'
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
                                            id="info-202"
                                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                            placeholder={t("content-panel-add-artwork.art_info.artwork_titles")}
                                        />

                                    </Form.Item>

                                </div>
                            </div>
                        </div>


                        <div className="d-block d-sm-flex box-dir-reverse w-100">
                            <div

                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "d-none": GetLanguage() === 'en-US'
                                })}
                            >
                                <div className="public-group">

                                    <Form.Item
                                        className="w-100 "
                                        name="artist_name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Input
                                            type="text"
                                            id="info-201"
                                            className="form-control input-public border-0 px-2  d-flex"
                                            placeholder={t("content-panel-add-artwork.art_info.artist_name")}
                                        />


                                    </Form.Item>
                                </div>
                            </div>

                            <div

                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "col-sm-12": GetLanguage() === 'en-US'
                                })}
                            >
                                <div className="public-group en">

                                    <Form.Item
                                        className="w-100"
                                        name="artist_name_en"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Input
                                            type="text"
                                            id="info-202"
                                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                            placeholder={t("content-panel-add-artwork.art_info.artwork_name")}
                                        />

                                    </Form.Item>

                                </div>
                            </div>
                        </div>

                        <div className="d-block d-sm-flex box-dir-reverse w-100">
                            <div className="col-sm-6">
                                <div className="public-group">

                                    <Form.Item
                                        className="border-0 w-100"
                                        name="art-field"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            }
                                        ]}>

                                        {/* -------   input select categories   ------- */}

                                        <Select
                                            className='form-control input-public text-dir border-0 px-2  d-flex'
                                            placeholder={t("content-panel-add-artwork.art_info.artwork_field")}
                                            options={categorys}
                                            allowClear
                                            onChange={handleSetCategory}
                                            id="info-203"
                                        >

                                        </Select>

                                    </Form.Item>

                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="public-group">

                                    <Form.Item
                                        className="border-0 w-100"
                                        name="subject"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Select
                                            className='form-control input-public text-dir border-0 px-2  d-flex'
                                            placeholder={t("content-panel-add-artwork.art_info.artwork_subject")}
                                            allowClear
                                            options={subject}
                                            onChange={handleSetSubject}
                                            id="info-204"
                                        >
                                        </Select>

                                    </Form.Item>

                                </div>
                            </div>
                        </div>
                        <div className="d-block d-sm-flex box-dir-reverse w-100">
                            <div className="col-sm-6">
                                <div className="public-group">

                                    <Form.Item
                                        className="border-0 w-100"
                                        name="teckniqe"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Select
                                            className='form-control input-public text-dir border-0 px-2  d-flex'
                                            placeholder={t("content-panel-add-artwork.art_info.artwork_technique")}
                                            allowClear
                                            options={technique}
                                            onChange={handleSetTechnique}
                                            id="info-205"
                                        >
                                        </Select>

                                    </Form.Item>

                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="public-group">

                                    <Form.Item
                                        className="border-0 w-100"
                                        name="material"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Select
                                            className='form-control input-public text-dir border-0 px-2  d-flex'
                                            placeholder={t("content-panel-add-artwork.art_info.artwork_material")}
                                            allowClear
                                            options={material}
                                            onChange={handleSetMaterial}
                                            id="info-206"
                                        >
                                        </Select>

                                    </Form.Item>



                                </div>
                            </div>
                        </div>
                        <div className="d-block d-sm-flex box-dir-reverse w-100">
                            <div className="col-sm-6">
                                <div className="public-group">


                                    <Form.Item
                                        className="w-100"
                                        name={Language === 'fa-IR' ? "jalali_creation_year" : "christian_creation_year"}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Input
                                            type="number"
                                            id="info-207"
                                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                            placeholder={t("content-panel-add-artwork.art_info.create_date")}
                                        />

                                    </Form.Item>


                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex box-dir-reverse ">
                                    <div className="col-sm-4 col-xs-6 ">
                                        <div className="public-group">

                                            <Form.Item
                                                className="w-100"
                                                name="width"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'required',
                                                    }
                                                ]}>

                                                <Input
                                                    type="number"
                                                    id="info-207"
                                                    className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                                    placeholder={t("content-panel-add-artwork.art_info.width")}
                                                />

                                            </Form.Item>

                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-6">
                                        <div className="public-group">

                                            <Form.Item
                                                className="w-100"
                                                name="length"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'required',
                                                    }
                                                ]}>

                                                <Input
                                                    type="number"
                                                    id="info-207"
                                                    className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                                    placeholder={t("content-panel-add-artwork.art_info.length")}
                                                />

                                            </Form.Item>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-block d-sm-flex box-dir-reverse w-100">
                            <div className="col-sm-6">
                                <div className="public-group">

                                    {/* <Form.Item
                                        className="border-0 w-100"
                                        name="collection"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Select
                                            className='form-control input-public text-dir border-0 px-2  d-flex'
                                            placeholder={t("content-panel-add-artwork.art_info.select_gallery")}
                                            allowClear
                                            options={sotialCollection}
                                            id="info-206"
                                        >

                                        </Select>

                                    </Form.Item> */}


                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="public-group">


                                    <Form.Item
                                        className="w-100"
                                        name="weight"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Input
                                            type="number"
                                            id="info-207"
                                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                            placeholder={t("content-panel-add-artwork.art_info.weight")}
                                        />

                                    </Form.Item>



                                </div>
                            </div>
                        </div>
                        <div className="d-block d-sm-flex box-dir-reverse w-100">
                            <div

                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "d-none": GetLanguage() === 'en-US'
                                })}

                            >
                                <div className="form-group">


                                    <Form.Item
                                        name="description"
                                        // label="Intro"

                                        rules={[
                                            {
                                                required: false,
                                                message: 'required',
                                            },
                                        ]}
                                    >
                                        <Input.TextArea id="info-213" rows={6} showCount maxLength={200} placeholder={t("content-panel-add-artwork.art_info.description_fa")} />
                                    </Form.Item>

                                    <label htmlFor="info-213" className="lable-public"></label>
                                </div>
                            </div>
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "col w-100": GetLanguage() === 'en-US'
                                })}

                            >
                                <div className="form-group">

                                    <Form.Item
                                        name="description_en"
                                        // label="Intro"
                                        className=''
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            },
                                        ]}
                                    >
                                        <Input.TextArea className='' id="info-214" rows={6} showCount maxLength={200} placeholder={t("content-panel-add-artwork.art_info.description_en")} />
                                    </Form.Item>

                                    <label htmlFor="info-214" className="lable-public"></label>
                                </div>
                            </div>
                        </div>
                        <div className="d-block d-sm-flex box-dir-reverse w-100">
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "d-none": GetLanguage() === 'en-US'
                                })}

                            >
                                <div className="public-group">

                                    <Form.Item
                                        className="w-100"
                                        name="tags_fa"
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
                                            placeholder={t("content-panel-add-artwork.art_info.tag_fa")}
                                        />

                                    </Form.Item>
                                    <span className="input-help text-dir">{t("content-panel-add-artwork.art_info.text_tag_fa")} </span>
                                </div>
                            </div>
                            <div
                                className={classnames("", {
                                    "col-sm-6": GetLanguage() === 'fa-IR',
                                    "col w-100": GetLanguage() === 'en-US'
                                })}

                            >
                                <div className="public-group">


                                    <Form.Item
                                        className="w-100"
                                        name="tags_en"
                                        rules={[
                                            {
                                                required: false,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Input
                                            type="text"
                                            id="info-216"
                                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                            placeholder={t("content-panel-add-artwork.art_info.tag_en")}
                                        />

                                    </Form.Item>
                                    <span className="input-help text-dir w-100">{t("content-panel-add-artwork.art_info.text_tag_en")}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="adv-btn">
                    <button
                        // onClick={() => prev()} 
                        type="button" className="btn-prev ">
                        <span>{t("content-panel-add-artwork.art_info.cencel")}</span>
                    </button>
                    <button htmlType="submit" className="btn-next pull-left">
                        {t("content-panel-add-artwork.art_info.next_step")}
                    </button>
                </div>
            </Form>
        </>
    )
}

export default ArtworkInformation;
