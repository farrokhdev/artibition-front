import React, { useEffect, useState } from 'react';

import avatar from '../../assets/img/unnamed.jpg'
import artist4 from '../../assets/img/artist-4.jpg'
import profile from '../../assets/img/arthibition_profile.svg'
import ModalMessageMember from './ModalMessageMember';
import i18next, { t } from 'i18next';
import ApiServices from "../../utils/api.services";
import { MESSAGES_ASSERTION, MESSAGES_INBOX } from "../../utils";
import queryString from "query-string";

function MessageMembersTab() {
    

    const [messages, setMessages] = useState();
    const [message, setMessage] = useState();
    const [params, setParams] = useState({});
    const [count, setCount] = useState();
    const [page, setPage] = useState(1);

    const [visibleDetailMessageMember, setVisibleDetailMessageMember] = useState(false)

    const handleShowModal = (id) => {
        setVisibleDetailMessageMember(true)
        ApiServices.get(`${MESSAGES_INBOX}${id}/`, "")
            .then(res => {
                if (res.data) {
                    setMessage(res.data.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    }


    useEffect(() => {
        ApiServices.get(MESSAGES_INBOX, queryString.stringify(params))
            .then(res => {
                if (res.data) {
                    console.log(res.data.data)
                    setMessages(res.data.data)
                    setCount(res.data.data.count)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    }, [params])

    return (
        <div className="tickets members">
            {messages?.map((item, key) => {
                // console.log(item);
                return (
                    <div className="ticket-block unread" data-toggle="modal" data-target="#ticket-modal">
                        <div className="ticket-header ">
                            <div className="d-block d-lg-flex box-dir-reverse ">
                                <div className="col ">
                                    <div className="d-flex box-dir-reverse w-100">
                                        <img src={avatar} width="56" height="56" alt="avatar"
                                            className="member-avatar pull-right img-responsive" />

                                        <div className="d-block d-lg-flex box-dir-reverse w-100">
                                            <div className="col-12 col-lg-8 px-0">
                                                <h3 className='ticket-title text-dir'><span className="msg-title">
                                                    {`پیام به ${i18next.language === "fa-IR" ? item.addressed_user?.translations?.fa?.first_name + " " + item.addressed_user?.translations?.fa?.last_name :
                                                        item.addressed_user?.translations?.en?.first_name + " " + item.addressed_user?.translations?.en?.last_name}`
                                                    }</span></h3>
                                            </div>
                                            <div className="col-12 col-lg-3 px-0" style={item?.message?.is_read ? { display: "none" } : {}}>
                                                <h3 className='ticket-title text-dir'><span className=" msg-new m-0">{t("content-panel-messages.new")}</span></h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col ">
                                    <div className="d-flex box-dir-reverse  mt-5  mt-lg-0 w-100  justify-content-lg-end">
                                        <span className="ticket-date pull-dir persian-num ">{t("content-panel-messages.today")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex ticket-body box-dir-reverse">
                            <div className="row w-100">
                                <div className="col-12">
                                    <p className="text-dir">
                                        {item?.message?.message?.body}
                                    </p>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex justify-content-end">
                                        <div onClick={() => handleShowModal(item?.chat_id)} className="ticket-more pull-dir ">
                                            <span>{t("content-panel-messages.veiw")}</span>
                                            <span className="glyphicon glyphicon-menu-left"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

            <ModalMessageMember
                visibleDetailMessageMember={visibleDetailMessageMember}
                setVisibleDetailMessageMember={setVisibleDetailMessageMember}
                message={message}
            />


        </div>
    )
}

export default MessageMembersTab