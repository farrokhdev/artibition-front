import React from 'react';
import { Form, Input, Modal, message as antdMessage } from 'antd';
import close_icon from '../../assets/img/clear.svg';
import profile from '../../assets/img/profile_pic.svg';
import profile_artibition from '../../assets/img/arthibition_profile.svg';
import blue_badge from '../../assets/img/blue_badge.svg';
import send_icon from '../../assets/img/send.svg';
import i18next, { t } from 'i18next';
import moment from 'jalali-moment';
import apiServices from '../../utils/api.services';
import { SEND_MESSAGE } from '../../utils';


function ModalMessageMember(props) {

    const { visibleDetailMessageMember, setVisibleDetailMessageMember, message } = props;
    console.log(message);


    const handleClose = () => {
        setVisibleDetailMessageMember(false)
    }

    const sendMessage = (value) => {
        const payload = {
            "users": [message?.addressed_user?.id],
            "message": {
                "body": value.messageText,
                "type": 1
            }
        }
        apiServices.post(SEND_MESSAGE, payload)
            .then(res => {
                if (res.data) {
                    antdMessage.success({
                        content: "پیام شما با موفقیت ارسال شد",
                        style: { marginTop: "110px" }
                    })
                }
                else {
                    antdMessage.error({
                        content: "مشکلی در ارسال پیام پیش آمده است",
                        style: { marginTop: "110px" }
                    })
                }
            })
            .catch(err => {
                antdMessage.error({
                    content: "مشکلی در ارسال پیام پیش آمده است",
                    style: { marginTop: "110px" }
                })
            })
    }


    return (

        <React.Fragment>

            <Modal className="modal-otp"
                visible={visibleDetailMessageMember}
                onOk={handleClose}
                onCancel={handleClose}
                width={700}
                footer={[]}
            >
                <div className="modal-content px-5">
                    <button>
                        <span onClick={handleClose} aria-hidden="true" aria-label="Close">
                            <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                        </span>
                    </button>
                    <div className="modal-header">
                        <div className="col">
                            <h5 className="modal-title " id="exampleModalLabel">{t("content-panel-messages.tabs.members.title_modal")}</h5>
                        </div>
                    </div>
                    <div className="modal-body p-0">



                        {message?.message && message?.message.map((item) => {
                            console.log(item);
                            return (
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
                                                                    {/* <h4 className="gallery-artist-name text-dir w-100">حساب کاربری شما</h4> */}
                                                                    <h4 className="gallery-artist-name text-dir w-100">{item?.owner === message?.inbox_owner.id ? "حساب کاربری شما" :
                                                                        i18next.language === "fa-IR" ? `${message?.addressed_user?.translations?.fa.first_name} ${message?.addressed_user?.translations?.fa.last_name}` : `${message?.addressed_user?.translations?.fa.first_name} ${message?.addressed_user?.translations?.fa.last_name}`}</h4>
                                                                </div>
                                                            </div>
                                                            <div className="col ">
                                                                <div className="d-flex">
                                                                    <span className=" graycolor text-dir w-100">{item?.owner === message?.inbox_owner.id ? message?.inbox_owner?.username : message?.addressed_user?.username}</span>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col ">
                                                    <div className="d-flex justify-custom">
                                                        {/* <span className="pull-dir graycolor">{item?.message?.creation_date}</span> */}



                                                        <span
                                                            className="pull-dir graycolor px-1"> {item?.message ? moment(item?.message?.creation_date).locale('fa').format('hh:mm') : ""}
                                                        </span>
                                                        <span
                                                            className="pull-dir graycolor px-1">{item?.message ? moment(item?.message?.creation_date, 'YYYY/MM/DD').locale(i18next.language === 'fa-IR' ? 'fa' : 'en').format('YYYY/MM/DD') : ""}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ticket-modal-block-body">
                                                <p className="text-dir">
                                                    {item?.message?.body}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}





                        <div className="modal-footer">
                            <div className="form-group w-100">
                                <Form onFinish={sendMessage}>
                                    <Form.Item required name={"messageText"}>
                                        <Input required placeholder={t("content-panel-messages.tabs.members.palaceholder_message")} style={{ height: "48px" }} />
                                    </Form.Item>
                                    <button type="submit" className="btn-blue"  >
                                        <img src={send_icon} width="34" height="34" alt="" className="center-block send-icon-message" />
                                    </button>
                                </Form>
                                {/* <input className="form-control ticket-input w-100" placeholder={t("content-panel-messages.tabs.members.palaceholder_message")} />
                                <button type="submit" className="btn-blue">
                                    <img src={send_icon} width="34" height="34" alt="" className="center-block send-icon-message" />
                                </button> */}
                            </div>
                        </div>



                    </div>
                </div>

            </Modal>
        </React.Fragment>

    )
}

export default ModalMessageMember


