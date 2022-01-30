import React, { useState, useEffect } from 'react';
import { t } from 'i18next';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import SidebarPanel from '../../components/SidebarPanel/SidebarPanel';
import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import edit_icon from '../../assets/img/edit_name.svg';
import go from '../../assets/img/go.svg';
import BasketFooterPanel from '../../components/BasketFooterPanel/BasketFooterPanel';
import apiServices from '../../utils/api.services';
import { ORDER_BUYER_ME } from '../../utils';
import queryString from 'query-string';
import { GetLanguage } from '../../utils/utils';
import { isBiddingPrice } from '../../utils/converToPersian';
import { handleShowImage } from '../../utils/showImageProduct';
import { DEFAULT_URL_IMAGE } from '../../utils/defaultImage';
import ModalBidding from './ModalBidding';
import ModalEditBidding from './ModalEditBidding';

function PanelBiddingPrice() {

    const Language = GetLanguage();
    const [visibleBiddingModal, setVisibleBiddingModal] = useState(false)
    const [visibleEditModal, setvisibleEditModal] = useState(false)
    const [offerValue, setOfferValue] = useState([]);
    const [editionValue, setEditionValue] = useState("");
    const getOfferValue = () => {
        apiServices.get(ORDER_BUYER_ME, "")
            .then(res => {
                if (res.data) {
                    setOfferValue(res.data.data.results)
                    // product_item_id
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    const handleShowModalBidding = (e) => {
        setVisibleBiddingModal(true)
    }

    const handleEditModalBidding = ()=>{
        setvisibleEditModal(true)
    }

    useEffect(() => {
        getOfferValue()
    }, []);

    useEffect(() => {
        console.log("editionValue", editionValue);
    }, [editionValue]);
    return (
        <>
            <HeaderPanel t={t} />
            <div className="panel-style margin-top-20">
                <SidebarPanel />
                <div className="custom-container " id="main">
                    <div className="box box-2">
                        <div className="sec6">
                            <div className="public-header">
                                <div className="pull-dir">
                                    <h2 className="default-title">{t("drawer-panel.biding-price")}</h2>
                                </div>
                            </div>
                            <div className="default-tab tab-3 tab-interval purchase ">
                                {offerValue && offerValue?.map((item) => {
                                    console.log("item===>", item);
                                    return (

                                        <div className="basket-list-row">
                                            <div className="d-block d-lg-flex box-dir-reverse">
                                                <div className="col ">
                                                    <div className="row box-dir-reverse">
                                                        <div className="col-12 col-sm-4 ">
                                                            <div className="col-img">
                                                                <img src={item && handleShowImage(item)} width="1776" height="1776" alt="artwork-pic"
                                                                    className="img-responsive basket-img" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-8 my-4 my-lg-0">
                                                            <div className="row-listdetail ">
                                                                <div className="d-flex box-dir-reverse">
                                                                    <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.artwork-title")}</span>
                                                                    <span className="col-xs-7 detail-name">{
                                                                        Language === 'fa-IR' ? item?.product_item?.product?.translations?.fa?.title :
                                                                            item?.product_item?.product?.translations?.en?.title
                                                                    }</span>
                                                                </div>
                                                            </div>
                                                            <div className="row-listdetail">
                                                                <div className="d-flex box-dir-reverse">
                                                                    <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.owner")}</span>
                                                                    <h3 className="col-xs-7 detail-name">{
                                                                        Language === 'fa-IR' ? item?.product_item?.product?.translations?.fa?.artist_name :
                                                                            item?.product_item?.product?.translations?.en?.artist_name
                                                                    }</h3>
                                                                </div>
                                                            </div>
                                                            <div className="row-listdetail">
                                                                <div className="d-flex box-dir-reverse">
                                                                    <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.code")}</span>
                                                                    <h3 className="col-xs-7 detail-name persian-num">{item?.product_item?.product?.id}</h3>
                                                                </div>
                                                            </div>
                                                            <div className="row-listdetail">
                                                                <div className="d-flex box-dir-reverse">
                                                                    <span className="col-xs-5 detail-title text-dir">{t("content-panel-mypurchases.size")}</span>
                                                                    <h3 className="col-xs-7 detail-name">
                                                                        <span className="dimension-width persian-num">{item?.product_item?.product?.width}</span>
                                                                        <span> {t("content-panel-mypurchases.x")}</span>
                                                                        <span className="dimension-height persian-num">{item?.product_item?.product?.height}</span>
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
                                                                    <div className="d-flex  price-row box-dir-reverse">
                                                                        <div className="col-xs-5  graycolor">{t("content-panel-mypurchases.price-artwork")}</div>
                                                                        <div className="col-xs-7">
                                                                            <div className="d-flex justify-custom">
                                                                                <div className=" basket-pricestyle">
                                                                                    <span className="persian-num">{Language === 'fa-IR' ? item?.product_item?.toman_price : item?.product_item?.dollar_price}</span>
                                                                                    <span>{t("toman")}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex price-row box-dir-reverse">
                                                                        <div className="col-xs-5  graycolor">{t("content-panel-mypurchases.your-bidding")}</div>
                                                                        <div className="col-xs-7">
                                                                            <div className="d-flex justify-custom basket-pricestyle box-dir-reverse">
                                                                                <span className="persian-num bluestyle">{Language === 'fa-IR' ? item?.toman_price : item?.dollar_price}</span>
                                                                                <span className="bluestyle">{t("toman")}</span>
                                                                                {item?.status === "modified" ?

                                                                                    <button onClick={() => {
                                                                                        handleEditModalBidding()
                                                                                        setEditionValue(item)
                                                                                    }} className="purchase-link">
                                                                                        <img src={edit_icon} width="32" height="32" alt="edit-icon" />
                                                                                    </button>
                                                                                    : ""
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex price-row box-dir-reverse">
                                                                        <div className="col-xs-5 graycolor">{t("content-panel-mypurchases.status")}</div>
                                                                        <div className="col-xs-7">
                                                                            <div className="d-flex justify-custom">
                                                                                <div className="basket-pricestyle">
                                                                                    <span className={"purchase-status bolder-title " + (isBiddingPrice(item?.status).css)} >{isBiddingPrice(item?.status).title}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex box-dir-reverse">
                                                                        <div className="col-xs-5">
                                                                            {item?.status === "rejected" ?
                                                                                <button onClick={() => {
                                                                                    handleShowModalBidding()
                                                                                    setEditionValue(item)
                                                                                }} type="button" className="btn btn-more pull-left">پیشنهاد جدید</button>
                                                                                : ""
                                                                            }
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
                                })}

                            </div>
                        </div>
                    </div>
                </div>
                <ModalBidding
                    visibleBiddingModal={visibleBiddingModal}
                    setVisibleBiddingModal={setVisibleBiddingModal}
                    editionValue={editionValue}
                />
                
                <ModalEditBidding 
                setvisibleEditModal={setvisibleEditModal}
                visibleEditModal={visibleEditModal}
                editionValue={editionValue}
                />
                <BasketFooterPanel />
            </div>
        </>
    );
}

export default PanelBiddingPrice;