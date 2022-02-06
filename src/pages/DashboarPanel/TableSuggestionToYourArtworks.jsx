import React, { useState, useEffect } from 'react';
import { t } from 'i18next';
import artwork1 from '../../assets/img/artworks/artwork-1.jpg';
import empty_list_icon from '../../assets/img/empty_list.svg';
import apiServices from '../../utils/api.services';
import { ORDER_BUYER_ME } from '../../utils';
import moment from 'jalali-moment'
import { GetLanguage } from '../../utils/utils';
import { isBiddingPrice } from '../../utils/converToPersian';
import { handleShowImage } from '../../utils/showImageProduct';

function TableSuggestionToYourArtworks() {

    const [offerValue, setOfferValue] = useState([]);
    const Language = GetLanguage();


    const getOrderBid = () => {
        apiServices.get(ORDER_BUYER_ME, "")
            .then(res => {
                if (res.data) {
                    setOfferValue(res.data.data.results)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    useEffect(() => {
        getOrderBid();
    }, []);


    return (
        <div className=" box artistpanel-3 ">
            <div className="col w-100">
                <div className="public-header">
                    <h2 className="default-title pull-dir">{t("content-panel-dashboard.tables.suggestion_artwork")}</h2>
                </div>
                <div>
                    <div className="d-flex box-dir-reverse">
                        <div collapse className="table-responsive ">
                            <table className="table  wallet-table  dir">
                                <thead>
                                    <tr>
                                        <td>{t("content-panel-dashboard.tables.row")}</td>
                                        <td>{t("content-panel-dashboard.tables.image")}</td>
                                        <td>{t("content-panel-dashboard.tables.code")}</td>
                                        <td className='min-width-td-4'>{t("content-panel-dashboard.tables.price")}</td>
                                        <td className='min-width-td-4'>{t("content-panel-dashboard.tables.discount")}</td>
                                        <td className='min-width-td-4'>{t("content-panel-dashboard.tables.suggested")}</td>
                                        <td>{t("content-panel-dashboard.tables.date_registration")}</td>
                                        <td className='min-width-td-4'>{t("content-panel-dashboard.tables.your_respond")}</td>
                                        <td className="min-width-td-6">{t("content-panel-dashboard.tables.status")}</td>
                                        <td>{t("content-panel-dashboard.tables.details")}</td>
                                        <td>{t("content-panel-dashboard.tables.action")}</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {offerValue && offerValue?.map((item, index) => {
                                        return (

                                            <tr className="failed-state">
                                                <td data-label={t("content-panel-dashboard.tables.row")} className="persian-num">{index + 1}</td>
                                                <td data-label={t("content-panel-dashboard.tables.image")}><img src={item && handleShowImage(item)} width="1776" height="1776"
                                                    alt=""
                                                    className="img-responsive" /></td>
                                                <td data-label={t("content-panel-dashboard.tables.code")} className="persian-num">{item?.product_item.product.unique_code.substr(item.product_item.product.unique_code.length - 12)}</td>
                                                <td data-label={t("content-panel-dashboard.tables.price")} className="persian-num">{item?.product_item.toman_price}</td>
                                                <td data-label={t("content-panel-dashboard.tables.discount")} className="persian-num">{item?.product_item.product?.discount.value}{item?.product_item?.product?.discount.type === "percentage" ? "%" : ""}</td>
                                                <td data-label={t("content-panel-dashboard.tables.suggested")} className="persian-num">{Language === 'fa-IR' ? item?.toman_price : item?.dollar_price}</td>
                                                <td data-label={t("content-panel-dashboard.tables.date_registration")} className="persian-num">{moment(item?.creation_date).locale('fa').format('YYYY/MM/DD')}</td>
                                                <td data-label={t("content-panel-dashboard.tables.your_respond")} className="persian-num"></td>
                                                <td data-label={t("content-panel-dashboard.tables.status")} className="persian-num status text-center">{isBiddingPrice(item?.status).title}</td>
                                                <td data-label={t("content-panel-dashboard.tables.details")} className="status"></td>
                                                <td>
                                                    <button className="btn-outline-blue" type="button" data-toggle="modal"
                                                        data-target="#modal-replied-suggestion">{t("content-panel-dashboard.tables.reply")}
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {offerValue?.length === 0 &&

                    <div className="empty-order box">
                        <img src={empty_list_icon} width="72" height="72" alt="empty-icon"
                            className="center-block img-responsive" />
                        <span className="bolder-title">{t("content-panel-dashboard.tables.empty_offers_artworks.title")}</span>

                    </div>
                }

            </div>

        </div>
    )
}

export default TableSuggestionToYourArtworks;
