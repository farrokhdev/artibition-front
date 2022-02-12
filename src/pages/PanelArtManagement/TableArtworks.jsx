import React from 'react';
import { t } from 'i18next';
import momentJalaali from 'moment-jalaali';
import { isAccept } from '../../utils/converToPersian';
import { handleShowImage } from '../../utils/showImageProduct';

function TableArtworks({ productList }) {

    // Offers a list of orders based on the status filter
    const SuggestproductList = () => {
        return (
            productList && productList.length >= 1 ? productList.map((item, key) => {
                return (
                    <tr key={key} className={isAccept(item?.status).css}>
                        <td data-label={t("content-panel-dashboard.tables.row")} className="persian-num">{key + 1}</td>
                        <td data-label={t("content-panel-dashboard.tables.image")}>
                            <img
                                style={{

                                    backgroundImage: `url(${item && handleShowImage(item)})`,
                                    height: "5rem",
                                    width: "7rem"
                                }}
                                width="1776" height="1776" alt=""
                                className="image-custom-back"
                            // src={item?.medias[0]?.exact_url}
                            // className="img-responsive"
                            />
                        </td>
                        <td data-label={t("content-panel-dashboard.tables.code")} className="persian-num">{item?.id}</td>
                        <td data-label={t("content-panel-dashboard.tables.edition")} className="persian-num">{item?.items[0]?.edition_number}</td>
                        <td data-label={t("content-panel-dashboard.tables.price")} className="persian-num">{item?.length} در {item?.width}</td>
                        <td data-label={t("content-panel-dashboard.tables.paid")} className="persian-num">{item?.items[0]?.toman_price}</td>
                        {/* {order.product_item.product.discount.value}{order.product_item.product.discount.type === "percentage" ? "%" : ""} */}
                        <td data-label={t("content-panel-dashboard.tables.discount")} className="persian-num">{item?.discount?.value}{item?.discount?.type === "percentage" ? "%" : ""}</td>
                        <td data-label={t("content-panel-dashboard.tables.details")} className="">{momentJalaali(item?.modified_date).format(` jYYYY/jMM/jDD`)}</td>
                        <td data-label={t("content-panel-dashboard.tables.details")} className="">{momentJalaali(item?.creation_date).format(` jYYYY/jMM/jDD`)}</td>
                        <td data-label={t("content-panel-dashboard.tables.paid")} className="persian-num">{item?.items[0]?.toman_price}</td>

                        <td data-label={t("content-panel-dashboard.tables.status")} className="persian-num status text-dir text-md-center">{isAccept(item?.status).title}</td>
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
            <div collapse className="table-responsive ">
                <table className="table  wallet-table  dir">
                    <thead>
                        <tr>
                            <td>{t("content-panel-manage-artworks.tables.row")}</td>
                            <td>{t("content-panel-manage-artworks.tables.image")}</td>
                            <td>{t("content-panel-manage-artworks.tables.code")}</td>
                            <td className='min-width-td-2'>{t("content-panel-manage-artworks.tables.edition")}</td>
                            <td className='min-width-td-2'>{t("content-panel-manage-artworks.tables.size")}</td>
                            <td className='min-width-td-4'>{t("content-panel-manage-artworks.tables.price")}</td>
                            <td className='min-width-td-1'>{t("content-panel-manage-artworks.tables.discount")}</td>
                            <td className='min-width-td-1'>{t("content-panel-manage-artworks.tables.last_edition")}</td>
                            <td className='min-width-td-2'>{t("content-panel-manage-artworks.tables.date_registration")}</td>
                            <td className='min-width-td-4'>{t("content-panel-manage-artworks.tables.paid")}</td>
                            <td className="min-width-td-6">{t("content-panel-manage-artworks.tables.status")}</td>
                            <td>{t("content-panel-manage-artworks.tables.details")}</td>
                            <td>{t("content-panel-manage-artworks.tables.action")}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <SuggestproductList />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableArtworks
