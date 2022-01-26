import React, {useEffect, useState} from 'react';

import gift from '../../assets/img/gift.svg';
import unread from '../../assets/img/unnamed.jpg';
import artist4 from '../../assets/img/artist-4.jpg';
import profile from '../../assets/img/arthibition_profile.svg';
import add_white_icon from '../../assets/img/add-white.png';
import { t } from 'i18next';
import ApiServices from "../../utils/api.services";
import {MESSAGES_ASSERTION, WALLET_TRANSACTIONS} from "../../utils";
import queryString from "query-string";

function NotificationTab() {

    const [asser, setAsser] = useState();
    const [params, setParams] = useState();
    const [count, setCount] = useState();
    const [page, setPage] = useState(1);

    useEffect(()=> {
        ApiServices.get(MESSAGES_ASSERTION, queryString.stringify(params))
            .then(res=> {
                if (res.data){
                    console.log(res.data.data.results)
                    setAsser(res.data.data.results)
                    setCount(res.data.data.count)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    } , [params])
return (
<>

    <div className="row mx-3">
        {asser?.map((item, key) => {
            return(
                <div key={key} className="message-block unread w-100">
                <h3 className="d-flex box-dir-reverse msg-header">
                    <img src={gift} className='mx-2' width="22" height="22" alt="" />
                    <span className="msg-title">{item?.message?.title}</span>
                    {!item?.is_read && (
                        <span className="msg-new">{t("content-panel-messages.new")}</span>
                    )}
                </h3>
                <p className="text-justify pull-dir">
                    {item?.message?.body}
                </p>
            </div>
            )
        })}
    </div>
    
</>
)
}

export default NotificationTab