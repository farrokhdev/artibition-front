import React, { useState, useEffect } from 'react';
import { message, Modal, Checkbox } from 'antd';
import edit_icon from '../../assets/img/edit_name.svg';
import close_icon from '../../assets/img/clear.svg';
import { Form, Input } from "antd";
import ver_code from '../../assets/img/ver_code.svg';
import { t } from 'i18next';

import search_icon from '../../assets/img/search.svg';
import jpaytrkase3 from '../../assets/img/artworks/jpaytrkase@3x.jpg';

import TextArea from 'antd/es/input/TextArea';
import apiServices from '../../utils/api.services';
import { ARTIST_ALBUMS, ARTIST_ALBUMS_ID, PRODUCTS_ME, SOCIAL_NETWORK_COLLECTIONS } from '../../utils';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { GetLanguage } from '../../utils/utils'
import { handleShowImage } from '../../utils/showImageProduct';

function ModalEditAulbum(props) {

    const [form] = Form.useForm();
    const navigate = useNavigate();
    let Language = GetLanguage();
    const { visibleEditGallery, setVisibleEditGallery, aulbumDetails } = props;
    const [chooseProduct, setchooseProduct] = useState([]);
    const [productList, setProductList] = useState([]);


    const handleClose = () => {
        setVisibleEditGallery(false);
    }

    const [params, setParams] = useState({
        page_size: 9999999

    });

    // Get my product list
    const getProductList = () => {
        apiServices.get(PRODUCTS_ME, queryString.stringify(params))
            .then(resp => {
                setProductList(resp.data.data.results)
                // setSuggestionsCount(resp.data.data.count)
            })
            .catch(err => {
                console.error(err);
            })
    }

    useEffect(() => {
        if (visibleEditGallery === true && aulbumDetails?.id) {
            getProductList();
        }
    }, [aulbumDetails?.id]);

    const onFinish = (values) => {
        let payload = {
            "translations": {
                "fa": {
                    "title": values?.title,
                    "description": values?.description
                }, "en": {
                    "title": values?.title_en,
                    "description": values?.description_en
                }
            },
            "products_id": chooseProduct,
        }
        apiServices.patch(ARTIST_ALBUMS_ID(aulbumDetails?.id), payload)
            .then(res => {
                if (res.data) {
                    message.success({
                        content: '?????? ???? ???????????? ???????????? ????', style: {
                            marginTop: '10vh',
                        },
                    })
                    setVisibleEditGallery(false)
                } else {
                    console.log(res.response)
                    message.error({
                        content: '?????? ???? ?????? ??????????????', style: {
                            marginTop: '10vh'
                        }
                    })
                }
            })
    }


    useEffect(() => {
        if (aulbumDetails?.id) {
            console.log("aulbumDetails", aulbumDetails)
            setchooseProduct(aulbumDetails?.products?.map((details) => {
                return details?.id
            }))
            form.setFieldsValue({
                title: aulbumDetails?.translations?.fa?.title,
                title_en: aulbumDetails?.translations?.en?.title,
                description: aulbumDetails?.translations?.fa?.description,
                description_en: aulbumDetails?.translations?.en?.description
            })
        }
    }, [aulbumDetails]);


    return (
        <React.Fragment>

            <Modal
                centered
                className=""
                style={{ marginTop: '100px' }}
                visible={visibleEditGallery}
                // onOk={handleClose}
                onCancel={() => setVisibleEditGallery(false)}
                width={'100vw'}
                footer={[]}
                destroyOnClose={true}
            >
                <Form
                    className=""
                    form={form}
                    onFinish={onFinish}
                >


                    <div className="modal-content px-0 px-md-0">
                        <div className="d-flex justify-content-end">
                            <button type="reset" onClick={(e) => { setVisibleEditGallery(false) }}>
                                <span aria-hidden="true" aria-label="Close">
                                    <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                                </span>
                            </button>
                        </div>
                        <div className="modal-header">
                            <h5 className="fontbold28 aligncenter" id="exampleModalLabel">{t("artwork.modal_similar_artwork.title")}</h5>
                        </div>
                        <div className="modal-body">
                            <div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">
                                <div className="info-sec">

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="public-group ">
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
                                                        placeholder="?????????? ????????????"
                                                    />


                                                </Form.Item>

                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="public-group en">
                                                <Form.Item
                                                    className="w-100 "
                                                    name="title_en"
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
                                                        placeholder="Collection title"
                                                    />


                                                </Form.Item>

                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group ">
                                                <Form.Item
                                                    className="w-100"
                                                    name="description"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'required',
                                                        }]}
                                                >
                                                    <TextArea className="default-input"
                                                        placeholder="?????????????? ???? ??????????" rows="6" />
                                                </Form.Item>

                                                <label className="lable-public"></label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group en">
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
                                                        placeholder="Description in English" rows="6" />
                                                </Form.Item>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="adv-content  col-sm-8 col-sm-offset-2 ">
                                    <h2 className="adv-title">???????? ???????? ?????? ?????? ???? ???????????? ????????.</h2>
                                    <div className="nl-input filter-search">
                                        <input placeholder="???????????? ??????" />
                                        <button className="noborder" type="button"><img src={search_icon} width="24"
                                            height="24" alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="container advisory-select">
                                <div className="row-gridimg">
                                    <div className="row">
                                        {productList?.map((artworksList) => {

                                            // console.log("productList", productList);
                                            return (
                                                <div className="cols col-sm-3 col-xs-6">
                                                    <label className="lable-checkbox">
                                                        <input type="checkbox" value={artworksList?.id}

                                                            checked={chooseProduct.includes(artworksList?.id)}
                                                            onChange={e => {
                                                                if (e.target.checked) {
                                                                    setchooseProduct([...chooseProduct, artworksList?.id])
                                                                } else {
                                                                    setchooseProduct(chooseProduct.filter((item => item !== artworksList?.id)))
                                                                }
                                                            }} />
                                                        <span className="checkmark"></span>
                                                        <div className="col-img">
                                                            <img
                                                                src={artworksList && handleShowImage(artworksList)}
                                                                width="840" height="1259"
                                                                alt="????????????????"
                                                                className="img-responsive" />
                                                            <div className="tab-overly">
                                                                <a href="#" className="btn-see">
                                                                    <span className="view-icon pull-right"></span>
                                                                    <span>???????????? ??????</span>
                                                                </a>
                                                                <a href="#" className="btn-sale">?????????????? ????????</a>
                                                                <a href="#" className="like-icon"></a>
                                                            </div>
                                                        </div>
                                                    </label>
                                                    <div className="col-body">
                                                        <h6 className="col-title">
                                                            <span className="col-name">{Language === 'fa-IR' ? artworksList?.translations?.fa?.artist_name : artworksList?.translations?.en?.artist_name}</span>
                                                        </h6>
                                                        <div className="col-dimension">

                                                            <span className="col-dimension-title">??????????:</span>
                                                            <span className="col-dimension-body">
                                                                <span className="dimension-width">{artworksList?.width}</span>
                                                                <span> ???? </span>
                                                                <span className="dimension-height">{artworksList?.height}</span>
                                                            </span>
                                                        </div>
                                                        <div className="col-price">
                                                            <span className="col-price-num">22.000.000</span>
                                                            <span className="col-price-unit">??????????</span>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                            </div>
                            <div className="adv-btn">
                                <button type="submit" className="btn btn-black center-block">??????</button>
                            </div>
                        </div>

                    </div>
                </Form>

            </Modal>
        </React.Fragment>
    )
}

export default ModalEditAulbum
