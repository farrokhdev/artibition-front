import React from 'react';
import { Modal } from 'antd';
import edit_icon from '../../assets/img/edit_name.svg';
import close_icon from '../../assets/img/clear.svg';
import { Form, Input} from "antd";
import ver_code from '../../assets/img/ver_code.svg';
import { t } from 'i18next';

import artwork1 from '../../assets/img/artworks/artwork-1.jpg';

function ModalEditOffer(props) {

    const {visibleEditOfferModal , setVisibleEditOfferModal} = props;
    
    const handleClose = ()=> {
        setVisibleEditOfferModal(false)
    }

    const onFinish = (values) =>{

    }

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
                            <span  onClick={handleClose}  aria-hidden="true" aria-label="Close">
                                <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                            </span>
                            </button>
                        </div>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{t("artwork.modal_edit_offer.title")}</h5>
                        </div>
                        <div class="modal-body">
                            <p class="text-center">{t("artwork.modal_edit_offer.subtitle")}</p>
                            <div className="d-block d-sm-flex">
                                <div class="col-sm-2 ">
                                    <div class="col-img">
                                        <img src={artwork1} width="1776" height="1776" alt=""
                                            class="img-responsive basket-img"/>
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
                                                        <span >2,800,000</span>
                                                        <span>{t("dollar")}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
         
                            <div class="row">
                                <div class="col-sm-10 col-sm-offset-1">
                                    <div class="public-group">
                                        <input class="form-control input-public "
                                            placeholder={t("artwork.modal_edit_offer.placeholder")}/>
                                        <span class="price-unit">{t("dollar")}</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="col-sm-10 col-sm-offset-1">
                                <a href="#" class="pinkcolor pull-right">{t("artwork.modal_edit_offer.cancel_offer")}</a>
                                <button type="button" class="btn btn-black pull-left">{t("artwork.modal_edit_offer.submit")}</button>
                            </div>
                        </div>
                    </div>
  
        </Modal>
    </React.Fragment>
    )
}

export default ModalEditOffer
