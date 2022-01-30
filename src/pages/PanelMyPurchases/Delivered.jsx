import React, { useState } from 'react';
import empty_image from '../../assets/img/empty_list.svg';
import reload from '../../assets/img/reload.svg';
import go from '../../assets/img/go.svg';
import { t } from 'i18next';
import { GetLanguage } from '../../utils/utils'
import moment from 'jalali-moment';
import { isStatusPurchases } from '../../utils/converToPersian';
import ModalCommission from './ModalCommission';

function Delivered({ purchasesProp }) {

    const Language = GetLanguage();
    const [showModal, setShowModal] = useState(false);


    const handleShowModal = () => {
        setShowModal(true)
    }
    return (
        <>
            {(purchasesProp && purchasesProp.length === 0) &&
                <div className="empty-paid">
                    <img src={empty_image} width="72" height="72" alt="empty_pic" className="center-block img-responsive" />
                    <span className="bolder-title">{t("content-panel-mypurchases.paid.empty.title")}</span>
                    <p>
                        {t("content-panel-mypurchases.paid.empty.text1")}
                        <br />
                        {t("content-panel-mypurchases.paid.empty.text2")}
                    </p>
                    <button type="button" className="btn btn-default">
                        {t("content-panel-mypurchases.paid.empty.btn")}
                    </button>
                </div>
            }
            :{purchasesProp &&
                purchasesProp.map((purchase, index) => {
                    return (
                        <div className="basket-list-row">
                            <div className="d-block d-lg-flex box-dir-reverse">
                                <div className="col ">
                                    <div className="row box-dir-reverse">
                                        <div className="col-12 col-sm-4 ">
                                            <div className="col-img">
                                                <img src={purchase?.product_item?.product?.medias[0]?.exact_url} width="1776" height="1776" alt="artwork-pic"
                                                    className="img-responsive basket-img" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-8 my-4 my-lg-0">
                                            <div className="row-listdetail ">
                                                <div className="d-flex box-dir-reverse">
                                                    <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.artwork-title")}</span>
                                                    <span className="col-xs-7 detail-name">{
                                                        Language === 'fa-IR' ? purchase?.product_item?.product?.translations?.fa?.title :
                                                            purchase?.product_item?.product?.translations?.en?.title
                                                    }</span>
                                                </div>
                                            </div>
                                            <div className="row-listdetail">
                                                <div className="d-flex box-dir-reverse">
                                                    <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.owner")}</span>
                                                    <h3 className="col-xs-7 detail-name">{
                                                        Language === 'fa-IR' ? purchase?.product_item?.product?.translations?.fa?.artist_name :
                                                            purchase?.product_item?.product?.translations?.en?.artist_name
                                                    }</h3>
                                                </div>
                                            </div>
                                            <div className="row-listdetail">
                                                <div className="d-flex box-dir-reverse">
                                                    <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.code")}</span>
                                                    <h3 className="col-xs-7 detail-name persian-num">{purchase?.product_item?.product?.id}</h3>
                                                </div>
                                            </div>
                                            <div className="row-listdetail">
                                                <div className="d-flex box-dir-reverse">
                                                    <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.size")}</span>
                                                    <h3 className="col-xs-7 detail-name">
                                                        <span className="dimension-width persian-num">{purchase?.product_item?.product?.width}</span>
                                                        <span> {t("content-panel-mypurchases.x")}</span>
                                                        <span className="dimension-height persian-num">{purchase?.product_item?.product?.height}</span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col mx-auto">
                                    <div className="basket-moredetail my-0 my-md-3 my-lg-0">
                                        <div className="row ">
                                            <div className="col-sm-12 ">
                                                <div className="basket-price ">
                                                    <div className="d-flex price-row box-dir-reverse">
                                                        <div className="col-xs-6  graycolor text-dir">{t("content-panel-mypurchases.order")}</div>
                                                        <div className="col-xs-6">
                                                            <div className="basket-pricestyle">
                                                                <span className="persian-num">{purchase?.order_tracking_code}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex price-row box-dir-reverse">
                                                        <div className="col-xs-6  graycolor text-dir">{t("content-panel-mypurchases.your-bidding")}</div>
                                                        <div className="col-xs-6">
                                                            <div className="basket-pricestyle">
                                                                <span className="persian-num">{Language === 'fa-IR' ? purchase?.toman_price : purchase?.dollar_price}</span>
                                                                <span>تومان</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex price-row box-dir-reverse">
                                                        <div className="col-xs-6  graycolor text-dir">{t("content-panel-mypurchases.payment-date")}</div>
                                                        <div className="col-xs-6">
                                                            <div className="basket-pricestyle">
                                                                <span className="persian-num">{Language === 'fa-IR' ? moment(purchase?.creation_date, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD') : moment(purchase?.creation_date, 'YYYY/MM/DD').locale('en').format('YYYY/MM/DD')}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex price-row box-dir-reverse">
                                                        <div className="col-xs-6 graycolor text-dir">{t("content-panel-mypurchases.status")}</div>
                                                        <div className="col-xs-6">
                                                            <div className="basket-pricestyle">
                                                                <span className={"purchase-status bolder-title " + (isStatusPurchases(purchase?.status).css)} >{isStatusPurchases(purchase?.status).title}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex price-row box-dir-reverse">
                                                        <div className="d-flex box-dir-reverse">
                                                            <div className="col-xs-6">
                                                                <button type="button" className="btn btn-default">
                                                                    {t("content-panel-mypurchases.btn-sell")}
                                                                </button>
                                                            </div>
                                                            <div className="col-xs-6">
                                                                <button onClick={handleShowModal} type="button" className="btn btn-outline-pink" data-toggle="modal"
                                                                    data-target="#modal-return-artwork">
                                                                    <img src={reload} width="16" height="18" alt="reload-pic" />
                                                                    <span>{t("content-panel-mypurchases.artwok-return")}</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" className="d-flex btn-back-blue box-dir-reverse justify-custom ">
                                                    <span className=" bluestyle">{t("content-panel-mypurchases.order-details")}</span>
                                                    <img src={go} className='show-detail-arrow' width="16" height="16" alt="go-pic" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    )
                })
            }
          
            <ModalCommission 
                showModal={showModal}
                setShowModal={setShowModal}
            /> 


        </>
    )
}

export default Delivered