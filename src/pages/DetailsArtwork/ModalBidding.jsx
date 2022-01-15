import React from 'react';
import { Modal } from 'antd';
import edit_icon from '../../assets/img/edit_name.svg';
import close_icon from '../../assets/img/clear.svg';
import { Form, Input} from "antd";
import ver_code from '../../assets/img/ver_code.svg';
import { t } from 'i18next';

import artwork1 from '../../assets/img/artworks/artwork-1.jpg';

function ModalBidding(props) {

    const {visibleBiddingModal , setVisibleBiddingModal} = props;
    
    const handleClose = ()=> {
        setVisibleBiddingModal(false)
    }

    const onFinish = (values) =>{

    }

    return (
        <React.Fragment>

        <Modal
            centered
            className=""
            visible={visibleBiddingModal}
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
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("artwork.modal_bidding_artwork.title")}</h5>
                        </div>
                        <div className="modal-body">
                            <p className="text-center">{t("artwork.modal_bidding_artwork.subtitle")}</p>
                            <div className="d-block d-sm-flex">
                                <div className="col-sm-2 ">
                                    <div className="col-img">
                                        <img src={artwork1} width="1776" height="1776" alt=""
                                            className="img-responsive basket-img"/>
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
                                                        <span className='mx-0 mx-sm-2'>2,800,000</span>
                                                        <span>{t("dollar")}</span>
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
                                            placeholder={t("artwork.modal_bidding_artwork.placeholder")}/>
                                        <span className="price-unit">{t("dollar")}</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="col-sm-10 col-sm-offset-1">
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-black pull-left">{t("artwork.modal_bidding_artwork.submit")}</button>
                                </div>
                            </div>
                        </div>
                    </div>
  
        </Modal>
    </React.Fragment>
    )
}

export default ModalBidding;
