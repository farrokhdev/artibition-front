import React, { useState } from 'react';
import { message, Modal } from 'antd';
import edit_icon from '../../assets/img/edit_name.svg';
import close_icon from '../../assets/img/clear.svg';
import { Form, Input } from "antd";
import ver_code from '../../assets/img/ver_code.svg';
import { t } from 'i18next';

import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import { GALLERY_EDIT_BIDS, ORDER_BUYER_ME, ORDER_BUYER_ME_ID } from '../../utils';
import { numDiscriminant } from '../../utils/discriminant';
import apiServices from '../../utils/api.services';
import { useSelector } from 'react-redux';

function ModalEditBidding(props) {

    const { setvisibleEditModal, visibleEditModal, editionValue } = props;
    const [offerValues, setOfferValues] = useState();
    const { gallery_id } = useSelector((state) => state.galleryReducer)
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

    const handleClose = () => {
        setvisibleEditModal(false)
    }

    const onFinish = (values) => {

        let payload = {
            "product_item_id": editionValue?.product_item_id,
            "toman_price": offerValues
        }

        if (getUserRole() === "gallery") {
            apiServices.patch(GALLERY_EDIT_BIDS(gallery_id, editionValue?.id), payload)
                .then(res => {
                    if (res.data) {
                        message.success({
                            content: 'قیمت پیشنهادی با موفقیت ثبت شد', style: {
                                marginTop: '110px',
                            },
                        })

                    } else {
                        message.error({
                            content: 'خطا در ثبت اطلاعات', style: {
                                marginTop: '110px'
                            }
                        })
                    }

                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            apiServices.patch(ORDER_BUYER_ME_ID(editionValue?.id), payload)
                .then(res => {
                    if (res.data) {

                        message.success({
                            content: 'قیمت پیشنهادی با موفقیت ثبت شد', style: {
                                marginTop: '110px',
                            },
                        })

                    } else {
                        message.error({
                            content: 'خطا در ثبت اطلاعات', style: {
                                marginTop: '110px'
                            }
                        })
                    }

                })
                .catch(err => {
                    console.log(err);
                })
        }



    }

    return (
        <React.Fragment>

            <Modal
                centered
                className=""
                visible={visibleEditModal}
                onOk={handleClose}
                onCancel={handleClose}
                width={600}
                footer={[]}
            >
                <div className="modal-content px-5">
                    <div className="d-flex justify-content-end">
                        <button>
                            <span onClick={handleClose} aria-hidden="true" aria-label="Close">
                                <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                            </span>
                        </button>
                    </div>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{t("artwork.modal_bidding_artwork.title")}</h5>
                    </div>
                    <div className="modal-body">
                        <p className="text-center">{t("artwork.modal_bidding_artwork.subtitle")}</p>
                        <div className="d-block d-sm-flex">
                            <div className="col-sm-2 ">
                                <div className="col-img">
                                    <img src={artwork1} width="1776" height="1776" alt=""
                                        className="img-responsive basket-img" />
                                </div>
                            </div>
                            <div className="col-sm-10">
                                <div className="d-block d-sm-flex box-dir-reverse row-listdetail mt-4">
                                    <div className="col text-dir">
                                        {t("artwork.modal_bidding_artwork.current_price")}
                                    </div>
                                    <div className="col">
                                        <div className="d-flex w-100 ">
                                            <div className="col text-dir px-0">
                                                <span className='mx-0 mx-sm-2'>{numDiscriminant(offerValues)}</span>
                                                <span>{t("toman")}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-10 col-sm-offset-1">
                                <div className="public-group">
                                    <input className="form-control input-public "
                                        placeholder={t("artwork.modal_bidding_artwork.placeholder")} onChange={e => setOfferValues(e.target.value)} />
                                    <span className="price-unit">{t("toman")}</span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="col-sm-10 col-sm-offset-1">
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-black pull-left" onClick={onFinish}>{t("artwork.modal_bidding_artwork.submit")}</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
        </React.Fragment>
    )
}

export default ModalEditBidding;
