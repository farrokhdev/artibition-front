import React, {useEffect, useState} from 'react';
import moment from 'jalali-moment'
import { t } from 'i18next';
import queryString from 'query-string';
import inprogress_icon from '../../assets/img/in_process.svg';
import deposit_icon from '../../assets/img/deposit.svg';
import withdrawal_icon from '../../assets/img/withdraw.svg';
import ApiServices from "../../utils/api.services";
import {WALLET_TRANSACTIONS} from "../../utils";
import { Pagination,Radio } from 'antd';


function BoxArtistPanel() {
    const [transactions, setTransactions] = useState();
    const [params, setParams] = useState();
    const [count, setCount] = useState();
    const [page, setPage] = useState(1);

    useEffect(()=> {
        ApiServices.get(WALLET_TRANSACTIONS, queryString.stringify(params))
            .then(res=> {
                if (res.data){
                    setTransactions(res.data.data.results)
                    setCount(res.data.data.count)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    } , [params])

    return (
        <div className="box artistpanel-5 ">
                    <div className="d-flex public-header box-dir-reverse">
                        <h2 className="default-title text-dir">{t("content-panel-wallet.trades.title")}</h2>
                    </div>
                    <ul className="d-block d-md-flex content-type mrgt40 box-dir-reverse">
                        <div className="col px-0">
                            <div className="d-flex box-dir-reverse">
                                <li>
                                    <label className="container-radio">{t("content-panel-wallet.trades.filters.all")}
                                        <input type="radio" checked="checked" name="radio"/>
                                        <span className="checkmark-radio"></span>
                                    </label>
                                </li>
                            </div>
                        </div>
                        <div className="col px-0">
                            <div className="d-flex  box-dir-reverse ">
                                <li><label className="container-radio ">{t("content-panel-wallet.trades.filters.deposited")}
                                    <input type="radio" name="radio"/>
                                    <span className="checkmark-radio"></span>
                                </label>
                                </li>
                            </div>
                        </div>
                        <div className="col px-0">
                            <div className="d-flex box-dir-reverse">
                                <li>
                                    <label className="container-radio">{t("content-panel-wallet.trades.filters.withdrawaled")}
                                        <input type="radio" name="radio"/>
                                        <span className="checkmark-radio"></span>
                                    </label>
                                </li>
                            </div>
                        </div>
                    </ul>
                    <div className="d-flex box-dir-reverse">
                    <div collapse className="table-responsive ">
                    <table className="table  wallet-table  dir">
                        <thead>
                        <tr>
                            <td>{t("content-panel-wallet.trades.table_headers.type")}</td>
                            <td>{t("content-panel-wallet.trades.table_headers.price")}</td>
                            <td>{t("content-panel-wallet.trades.table_headers.account_no")}</td>
                            <td>{t("content-panel-wallet.trades.table_headers.request_date")}</td>
                            <td>{t("content-panel-wallet.trades.table_headers.status")}</td>
                        </tr>
                        </thead>
                        <tbody>
                        {transactions?.map( (item, key) => {
                            return(
                                <tr key={key} className=''>
                                    <td  data-label="نوع">برداشت</td>
                                    <td data-label="مبلغ (تومان)" className="persian-num">{item?.amount}</td>

                                    <td data-label="شماره حساب" className="persian-num">{item.type === "withdraw" ? 123456789
                                        : "-"}</td>
                                    <td data-label="تاریخ درخواست" className="persian-num">
                                        {item.creation_date ? moment(item.creation_date).locale('fa').format('YYYY/MM/DD') : ""}
                                    </td>
                                </tr>
                            )
                        })}
                        <tr className=''>
                            <td  data-label="نوع">برداشت</td>
                            <td data-label="مبلغ (تومان)" className="persian-num">۸۰۰,۰۰۰</td>
                            <td data-label="شماره حساب" className="persian-num">۲۱۷۳۱۲۷۳۲۹</td>
                            <td data-label="تاریخ درخواست" className="persian-num">۹۹/۰۵/۲۸</td>
                            <td data-label="وضعیت" className="persian-num status pending text-md-center">
                                <img src={inprogress_icon} width="24" height="24" alt="inprogress-icon" className=""/>
                                <span>در حال انجام</span>
                            </td>
                        </tr>
                        <tr>
                            <td data-label="نوع">برداشت</td>
                            <td data-label="مبلغ (تومان)" className="persian-num">۸۰۰,۰۰۰</td>
                            <td data-label="شماره حساب" className="persian-num">۲۱۷۳۱۲۷۳۲۹</td>
                            <td data-label="تاریخ درخواست" className="persian-num">۹۹/۰۵/۲۸</td>
                            <td data-label="وضعیت" className="persian-num status accept text-md-center">
                                <img src={deposit_icon} width="24" height="24" alt="deposit-icon" className=""/>
                                <span>واریز شده</span>
                            </td>
                        </tr>
                        <tr>
                            <td data-label="نوع">برداشت</td>
                            <td data-label="مبلغ (تومان)" className="persian-num">۸۰۰,۰۰۰</td>
                            <td data-label="شماره حساب" className="persian-num">۲۱۷۳۱۲۷۳۲۹</td>
                            <td data-label="تاریخ درخواست" className="persian-num">۹۹/۰۵/۲۸</td>
                            <td data-label="وضعیت" className="persian-num status deny text-md-center">
                                <img src={withdrawal_icon} width="24" height="24" alt="withdrawal-icon" className=""/>
                                <span>برداشت شده</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    </div>
                    <div className="row-pagination">
                        <Pagination current={page} onChange={(page ) => setPage(page)} total={count} />
                    </div>
                </div>
    )
}

export default BoxArtistPanel
