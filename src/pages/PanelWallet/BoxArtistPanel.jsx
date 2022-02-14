import React, { useEffect, useState } from 'react';
import moment from 'jalali-moment'
import { t } from 'i18next';
import queryString from 'query-string';
import inprogress_icon from '../../assets/img/in_process.svg';
import deposit_icon from '../../assets/img/deposit.svg';
import withdrawal_icon from '../../assets/img/withdraw.svg';
import ApiServices from "../../utils/api.services";
import { WALLET_TRANSACTIONS } from "../../utils";
import { Pagination, Radio } from 'antd';


function BoxArtistPanel() {
    const [transactions, setTransactions] = useState();
    const [params, setParams] = useState({
        page: 1,
        type: ""
    });
    const [count, setCount] = useState();
    const [page, setPage] = useState(1);

    useEffect(() => {
        ApiServices.get(WALLET_TRANSACTIONS, queryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setTransactions(res.data.data.results)
                    setCount(res.data.data.count)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    }, [params])


    const handletype = (e) => {
        setParams({
            ...params, type: e
        })
    }

    function stateType(state) {
        switch (state) {
            case 'deposit':
                return {
                    "title": "واریز شده",
                }
            case 'withdraw':
                return {
                    "title": "برداشت شده",
                }
        }
    }
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
                                <input type="radio" name="radio" onClick={() => handletype("")} />
                                <span className="checkmark-radio"></span>
                            </label>
                        </li>
                    </div>
                </div>
                <div className="col px-0">
                    <div className="d-flex  box-dir-reverse ">
                        <li><label className="container-radio ">{t("content-panel-wallet.trades.filters.deposited")}
                            <input type="radio" name="radio" onClick={() => handletype("deposit")} />
                            <span className="checkmark-radio"></span>
                        </label>
                        </li>
                    </div>
                </div>
                <div className="col px-0">
                    <div className="d-flex box-dir-reverse">
                        <li>
                            <label className="container-radio">{t("content-panel-wallet.trades.filters.withdrawaled")}
                                <input type="radio" name="radio" onClick={() => handletype("withdraw")} />
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
                            {transactions?.map((item, key) => {
                                return (
                                    <tr key={key} className=''>
                                        <td data-label="نوع">{item.type}</td>
                                        <td data-label="مبلغ (تومان)" className="persian-num">{stateType(item?.amount).title}</td>

                                        <td data-label="شماره حساب" className="persian-num">{item.type === "withdraw" ? 123456789
                                            : "-"}</td>
                                        <td data-label="تاریخ درخواست" className="persian-num">
                                            {item.creation_date ? moment(item.creation_date).locale('fa').format('YYYY/MM/DD') : ""}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row-pagination">
                <Pagination current={page} onChange={(page) => setPage(page)} total={count} />
            </div>
        </div>
    )
}

export default BoxArtistPanel
