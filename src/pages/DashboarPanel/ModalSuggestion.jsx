import React, { useState, useEffect } from 'react';
import { Button, message, Modal } from 'antd';
import edit_icon from '../../assets/img/edit_name.svg';
import close_icon from '../../assets/img/clear.svg';
import { useTranslation } from "react-i18next";
import { Form, Input } from 'antd';
import apiServices from '../../utils/api.services';
import { ORDER_BUYER_ME_ID } from '../../utils';
import artworks from '../../assets/img/artworks/artwork-1.jpg';
import alert from '../../assets/img/alert.svg'
import { GetLanguage } from '../../utils/utils';
import moment from 'jalali-moment';
import { isBiddingPrice } from '../../utils/converToPersian';

function ModalSuggestion({ visibleShowModal, setVisibleShowModal, bidId }) {

    const [offerValue, setOfferValue] = useState({});
    const Language = GetLanguage();

    console.log("offerValue", offerValue?.product_item?.product)

    const handleClose = () => {
        setVisibleShowModal(false)
    }




    const getOrderBidId = () => {
        apiServices.get(ORDER_BUYER_ME_ID(bidId), "")
            .then(res => {
                if (res.data) {
                    setOfferValue(res.data.data)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    useEffect(() => {
        if (bidId) {
            getOrderBidId();
        }
    }, [bidId]);

    return (
        <React.Fragment>

            <Modal
                centered
                classNameName="dir"
                visible={visibleShowModal}
                onOk={handleClose}
                onCancel={handleClose}
                width={600}
                footer={[]}
            >



                {/* <div className="modal fade replied-price" id="modal-replied-price" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document"> */}
                <div className="modal-content ">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">پاسخ به پیشنهاد قیمت</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="col-md-8 col-xs-9">
                            <div className="row-listdetail">
                                <div className="row">
                                    <span className="col-xs-6 detail-title text-dir">کد اثر</span>
                                    <span className="col-xs-6 detail-name persian-num">{offerValue?.product_item?.product?.unique_code.substr(offerValue?.product_item?.product?.unique_code?.length - 12)}</span>
                                </div>
                            </div>
                            <div className="row-listdetail">
                                <div className="row">
                                    <span className="col-xs-6 detail-title text-dir">قیمت اثر در زمان پیشنهاد</span>
                                    <h3 className="col-xs-6 detail-name">
                                        <span className="persian-num">{Language === 'fa-IR' ? offerValue?.product_item?.toman_price : offerValue?.product_item?.dollar_price}</span>
                                        <span>تومان</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="row-listdetail">
                                <div className="row">
                                    <span className="col-xs-6 detail-title text-dir">قیمت پیشنهادی مشتری</span>
                                    <h3 className="col-xs-6 detail-name">
                                        <span className="persian-num">{Language === 'fa-IR' ? offerValue?.toman_price : offerValue?.dollar_price}</span>
                                        <span>تومان</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="row-listdetail">
                                <div className="row">
                                    <span className="col-xs-6 detail-title text-dir">تاریخ دریافت پیشنهاد</span>
                                    <h3 className="col-xs-6 detail-name persian-num">{offerValue?.creation_date ? moment(offerValue?.creation_date).locale(Language === 'fa-IR' ? 'fa' : 'en').format('YYYY/MM/DD') : ""}</h3>
                                </div>
                            </div>
                            <div className="row-listdetail">
                                <div className="row">
                                    <span className="col-xs-6 detail-title text-dir">وضعیت</span>
                                    <h3 className={`col-xs-6 detail-name  ${isBiddingPrice(offerValue?.status).css}`}>{isBiddingPrice(offerValue?.status).title}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-3 text-dir">
                            <div className="col-img">
                                <img src={offerValue?.product_item?.product?.medias[0]?.exact_url} width="1776" height="1776" alt=""
                                    className="img-responsive basket-img" />
                                <a href="#" className="pinkcolor">رد پیشنهاد</a>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>

                    <div className="modal-footer" style={{ textAlign: 'center', padding: '50px 53px', border: '0' }}>
                        <button type="button" className="btn btn-default">رقم بالاتری مد نظرم هست</button>
                        <button type="button" className="btn btn-black">پیشنهاد را قبول می‌کنم</button>
                        <p className="mrgt24">
                            <img src={alert} width="20" height="20" alt="" />
                            <span>با قبول پیشنهاد، مبلغ پرداختی به شما بر اساس "قیمت پیشنهادی مشتری" محاسبه و واریز می‌گردد.</span>
                        </p>
                    </div>
                </div>
                {/* </div>
                </div> */}
            </Modal>
        </React.Fragment>
    )
}

export default ModalSuggestion;