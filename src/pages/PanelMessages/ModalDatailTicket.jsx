import React from 'react';
import { Modal } from 'antd';
import close_icon from '../../assets/img/clear.svg';
import profile from '../../assets/img/profile_pic.svg';
import profile_artibition from '../../assets/img/arthibition_profile.svg';
import blue_badge from '../../assets/img/blue_badge.svg';
import send_icon from '../../assets/img/send.svg';
import i18next, { t } from 'i18next';
import { GetLanguage } from '../../utils/utils';
import moment from 'jalali-moment';
import apiServices from '../../utils/api.services';
import { TICKET_REPLY } from '../../utils';
import { Form, Input } from 'antd';
function ModalDatailTicket(props) {

    const [form] = Form.useForm();
    const { visibleDetailTicket, setVisibleDetailTicket, ticketDetail } = props;
    const Language = GetLanguage();

    console.log("ticketDetail", ticketDetail.id);

    const handleClose = () => {
        setVisibleDetailTicket(false)
    }

    const handleReply = (values) => {
        let payload = {
            "body": values?.body
        }
        apiServices.post(TICKET_REPLY(ticketDetail.id), payload)
            .then(res => {
                setTimeout(() => {
                    setVisibleDetailTicket(false)
                }, 500);
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (

        <React.Fragment>

            <Modal centered className="modal-otp"
                visible={visibleDetailTicket}
                onOk={handleClose}
                onCancel={handleClose}
                width={700} footer={[]}
            >
                <Form
                    className=""
                    form={form}
                    onFinish={handleReply}
                >

                    <div className="modal-content px-5" style={{ direction: 'rtl' }}>
                        <button>
                            <span onClick={handleClose} aria-hidden="true" aria-label="Close">
                                <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                            </span>
                        </button>
                        <div className="modal-header">
                            <div className="col">
                                <h5 className="modal-title " id="exampleModalLabel">{t("content-panel-messages.tabs.members.title_modal")}</h5>

                                <div className="d-flex  ticket-subject  justify-custom">
                                    <div className="col w-100">
                                        <span className="font17 graycolor text-dir">{t("content-panel-messages.tabs.members.subject")}</span>
                                        <span className="bolder-title text-dir">{ticketDetail?.title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">


                            <div className="ticket-modal-block">
                                <div className="d-flex box-dir-reverse">
                                    <div className="col-sm-1 col-xs-2 nopadrl">
                                        <img src={profile} width="56" height="56" className="img-responsive pull-left" alt='prifile-pic' />
                                    </div>
                                    <div className="col">
                                        <div className="d-block d-md-flex box-dir-reverse">
                                            <div className="col  px-0">
                                                <div className="d-flex ">
                                                    <div className="d-block w-100">
                                                        <div className="col  w-100">
                                                            <div className="d-flex w-100" >
                                                                <h4 className="gallery-artist-name text-dir  w-100">
                                                                    {Language === 'fa-IR' ?
                                                                        ticketDetail?.owner?.translations?.fa?.first_name + " " :
                                                                        ticketDetail?.owner?.translations?.en?.first_name + " "}
                                                                    {Language === 'fa-IR' ?
                                                                        ticketDetail?.owner?.translations?.fa?.last_name :
                                                                        ticketDetail?.owner?.translations?.en?.last_name
                                                                    }
                                                                    {/* (Your account) */}
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col ">
                                                            <div className="d-flex">
                                                                <span className=" graycolor text-dir w-100">{ticketDetail?.owner?.username}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col ">
                                                <div className="d-flex justify-custom">
                                                    <div className="td-right">
                                                        <span
                                                            className="pull-dir graycolor px-1"> {ticketDetail ? moment(ticketDetail?.creation_date).locale('fa').format('hh:mm') : ""}
                                                        </span>
                                                        <span
                                                            className="pull-dir graycolor px-1">{ticketDetail ? moment(ticketDetail?.creation_date, 'YYYY/MM/DD').locale(i18next.language === 'fa-IR' ? 'fa' : 'en').format('YYYY/MM/DD') : ""}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ticket-modal-block-body">
                                            <p className="text-dir">{ticketDetail?.body}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {ticketDetail?.reply?.length ? ticketDetail.reply.map((item, key) => {
                                return (

                                    <div className="ticket-modal-block">
                                        <div className="d-flex box-dir-reverse">
                                            <div className="col-sm-1 col-xs-2 nopadrl">
                                                <img src={profile_artibition} width="56" height="56" className="img-responsive pull-left" alt='prifile-pic' />
                                            </div>

                                            <div className="col">
                                                <div className="d-block d-md-flex box-dir-reverse">
                                                    <div className="col  px-0">
                                                        <div className="d-flex ">
                                                            <div className="d-block w-100">
                                                                <div className="col  w-100">
                                                                    <div className="d-flex w-100" >
                                                                        <h4 className="gallery-artist-name text-dir  w-100">
                                                                            {Language === 'fa-IR' ?
                                                                                item?.owner?.translations?.fa?.first_name + " " :
                                                                                item?.owner?.translations?.en?.first_name + " "}
                                                                            {Language === 'fa-IR' ?
                                                                                item?.owner?.translations?.fa?.last_name :
                                                                                item?.owner?.translations?.en?.last_name
                                                                            }
                                                                            {/* (Your account) */}
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                                <div className="col ">
                                                                    <div className="d-flex box-dir-reverse">
                                                                        <span className=" graycolor text-dir ">
                                                                            {item?.owner?.username}
                                                                        </span>
                                                                        <img src={blue_badge} height="20" width="20" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col ">
                                                        <div className="d-flex justify-custom">
                                                            <span
                                                                className="pull-dir graycolor px-1"> {item ? moment(item?.creation_date).locale('fa').format('hh:mm') : ""}
                                                            </span>
                                                            <span
                                                                className="pull-dir graycolor px-1">{item ? moment(item?.creation_date, 'YYYY/MM/DD').locale(i18next.language === 'fa-IR' ? 'fa' : 'en').format('YYYY/MM/DD') : ""}</span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="ticket-modal-block-body">
                                                    <p className="text-dir">{item?.body}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : ""}



                            {ticketDetail?.state === 'close' ?
                                <h4 className="text-center text-muted">به دلیل بسته بودن تیکت امکان ارسال پیام وجود ندارد.</h4>
                                : ticketDetail?.admin_replied ?
                                    <div className="modal-footer">
                                        <div className="form-group w-100">
                                            <Form.Item
                                                className="w-100"
                                                name="body"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'required',
                                                    }
                                                ]}>

                                                <Input
                                                    type="text"
                                                    id="info-216"
                                                    className=" form-control ticket-input w-100"
                                                    placeholder={t("content-panel-messages.tabs.members.palaceholder_message")}
                                                />

                                            </Form.Item>

                                            {/* <input className="form-control ticket-input w-100" placeholder={t("content-panel-messages.tabs.members.palaceholder_message")} /> */}
                                            <button htmlType="submit" className="btn-blue">
                                                <img src={send_icon} width="34" height="34" alt="" className="center-block send-icon-message" />
                                            </button>
                                        </div>
                                    </div>

                                    : <h4 className="text-center text-muted">منتظر پاسخ ادمین باشید</h4>
                            }



                        </div>
                    </div>
                </Form>
            </Modal>
        </React.Fragment>

    )
}

export default ModalDatailTicket


