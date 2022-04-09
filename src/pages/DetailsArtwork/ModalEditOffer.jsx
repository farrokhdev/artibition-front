import React, { useEffect, useState } from 'react';
import { message, Modal } from 'antd';
import edit_icon from '../../assets/img/edit_name.svg';
import close_icon from '../../assets/img/clear.svg';
import { Form, Input } from "antd";
import ver_code from '../../assets/img/ver_code.svg';
import { t } from 'i18next';

import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import apiServices from '../../utils/api.services';
import { ORDER_BUYER_ME } from '../../utils';
import { numDiscriminant } from '../../utils/discriminant';

function ModalEditOffer(props) {

    const { visibleEditOfferModal, setVisibleEditOfferModal, editionValue , offerValue, productDetail} = props;
    const [offerValueEdit, setOfferValueEdit] = useState();
    const handleClose = () => {
        setVisibleEditOfferModal(false)
    }


    const onFinish = () => {
        let payload = {
            "product_item_id": editionValue?.id,
            "toman_price": offerValueEdit
        }
        apiServices.patchByID(ORDER_BUYER_ME,offerValue?.results?.map(item => item.product_item_id === editionValue?.id ? item.id : null), payload)
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
                            marginTop: '10vh'
                        }
                    })
                }

            })
            .catch(err => {
                console.log(err);
            })
    }
    console.log("offer",offerValue)
    useEffect(() => {
        setOfferValueEdit(offerValue?.results?.map(item => item.product_item_id === editionValue?.id ? item.toman_price : null))
    }, [offerValue]);

    return (
        <React.Fragment>

            <Modal
                centered
                className=""
                visible={visibleEditOfferModal}
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
                        <h5 className="modal-title" id="exampleModalLabel">{t("artwork.modal_edit_offer.title")}</h5>
                    </div>
                    <div className="modal-body">
                        <p className="text-center">{t("artwork.modal_edit_offer.subtitle")}</p>
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
                                        {t("artwork.modal_edit_offer.previous_offer")}
                                    </div>
                                    <div className="col">
                                        <div className="d-flex w-100 ">
                                            <div className="col text-dir px-0">
                                                <span >{numDiscriminant(offerValueEdit)}</span>
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
                                        placeholder={t("artwork.modal_edit_offer.placeholder")} defaultValue={offerValue?.results?.map(item => item.product_item_id === editionValue?.id ? item.toman_price : null)} onChange={e => setOfferValueEdit(e.target.value)} />
                                    <span className="price-unit">{t("toman")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="col-sm-10 col-sm-offset-1">
                            <a href="#" className="pinkcolor pull-right" onClick={handleClose}>{t("artwork.modal_edit_offer.cancel_offer")}</a>
                            <button type="button" className="btn btn-black pull-left" onClick={onFinish}>{t("artwork.modal_edit_offer.submit")}</button>
                        </div>
                    </div>
                </div>

            </Modal>
        </React.Fragment>
    )
}

export default ModalEditOffer
