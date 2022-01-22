import React from 'react';
import { t } from 'i18next';
import { isAccept } from '../../utils/converToPersian';

function TableOrders({ orderList }) {



    // Offers a list of orders based on the status filter
    const SuggestOrderList = () => {
        return (
            orderList && orderList.length >= 1 ? orderList.map((item, key) => {
                return (
                    <tr key={key} className='pending-state'>
                        <td data-label={t("content-panel-dashboard.tables.row")} className="persian-num">{key + 1}</td>
                        <td data-label={t("content-panel-dashboard.tables.image")}>
                            <img
                                src={item?.product_item?.product?.medias[0]?.exact_url}
                                width="1776" height="1776" alt=""
                                className="img-responsive "
                            />
                        </td>
                        <td data-label={t("content-panel-dashboard.tables.code")} className="persian-num">{item?.id}</td>
                        <td data-label={t("content-panel-dashboard.tables.edition")} className="persian-num">{item?.product_item?.edition_number}</td>
                        <td data-label={t("content-panel-dashboard.tables.price")} className="persian-num">{item?.product_item?.reserved_toman_price}</td>
                        <td data-label={t("content-panel-dashboard.tables.discount")} className="persian-num">{item?.discount}</td>
                        <td data-label={t("content-panel-dashboard.tables.paid")} className="persian-num">{item?.toman_price}</td>
                        <td data-label={t("content-panel-dashboard.tables.status")} className="persian-num status text-dir text-md-center">{isAccept(item?.status).title}</td>
                        <td data-label={t("content-panel-dashboard.tables.details")} className="">{item?.description} </td>
                        <td data-label={t("content-panel-dashboard.tables.action")}>
                            <button className="btn-outline-blue" type="button" data-toggle="modal"
                                data-target="#modal-replied-price">{t("content-panel-dashboard.tables.veiw")}
                            </button>
                        </td>
                    </tr>
                )
            }) : ""
        )
    }


    return (
        <div className="d-flex box-dir-reverse ">
            <div collapse className="table-responsive " >
                <table className="table  wallet-table  dir">
                    <thead>
                        <tr>
                            <td>{t("content-panel-dashboard.tables.row")}</td>
                            <td>{t("content-panel-dashboard.tables.image")}</td>
                            <td>{t("content-panel-dashboard.tables.code")}</td>
                            <td className='min-width-td-2'>{t("content-panel-dashboard.tables.edition")}</td>
                            <td className='min-width-td-4'>{t("content-panel-dashboard.tables.price")}</td>
                            <td className='min-width-td-1'>{t("content-panel-dashboard.tables.discount")}</td>
                            <td className='min-width-td-4'>{t("content-panel-dashboard.tables.paid")}</td>
                            <td className="min-width-td-6">{t("content-panel-dashboard.tables.status")}</td>
                            <td>{t("content-panel-dashboard.tables.details")}</td>
                            <td>{t("content-panel-dashboard.tables.action")}</td>
                        </tr>
                    </thead>
                    <tbody>

                        <SuggestOrderList />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableOrders
