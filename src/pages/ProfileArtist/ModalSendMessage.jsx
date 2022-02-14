import React from 'react';
import { message, Modal } from 'antd';
import edit_icon from '../../assets/img/edit_name.svg';
import close_icon from '../../assets/img/clear.svg';
import { Form, Input } from "antd";
import ver_code from '../../assets/img/ver_code.svg';
import { t } from 'i18next';
import { useEffect } from 'react';
import apiServices from '../../utils/api.services';
import { SEND_MESSAGE } from '../../utils';

function ModalSendMessage(props) {

    const { visibleShowSendMessage, setVisibleShowSendMessage, receiverId } = props
    const [form] = Form.useForm();

    const handleClose = () => {
        setVisibleShowSendMessage(false)
    }

    const onFinish = (values) => {
        console.log(receiverId, "receiverId");
        const payload = {
            users: [
                receiverId
            ],
            "message": {
                "body": values.messageText,
                "type": 1
            }
        }
        apiServices.post(SEND_MESSAGE, payload)
            .then(res => {
                if (res.data) {
                    message.success({
                        content: "پیام با موفقیت ارسال شد",
                        style: { marginTop: "110px" }
                    })
                    setVisibleShowSendMessage(false)
                }
                else {
                    message.error({
                        content: "در ارسال پیام مشکلی به وجود آمده است",
                        style: { marginTop: "110px" }
                    })
                }

            })
            .catch(err => {
                message.error({
                    content: "در ارسال پیام مشکلی به وجود آمده است",
                    style: { marginTop: "110px" }
                })
            })
    }
    const { TextArea } = Input


    return (
        <React.Fragment>

            <Modal
                centered
                className="modal-otp"
                visible={visibleShowSendMessage}
                onOk={handleClose}
                onCancel={handleClose}
                width={600}
                footer={[]}
            // header={[]}
            >
                <div className="modal-content ">
                    <div className="d-flex justify-content-end">
                        <button>
                            <span onClick={handleClose} aria-hidden="true" aria-label="Close">
                                <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                            </span>
                        </button>
                    </div>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{t("artist_profile.send_message")}</h5>
                    </div>
                    <div className="modal-body px-0 ">
                        <Form form={form}
                            onFinish={onFinish}
                        >
                            <div className="artist-msg">
                                <Form.Item name={"messageText"} required>
                                    <TextArea required className="form-control text-dir"
                                        placeholder={t("artist_profile.placeholder_message")}
                                        rows={12}>

                                    </TextArea>
                                </Form.Item>
                                {/* <textarea className="form-control text-dir"
                                placeholder={t("artist_profile.placeholder_message")}
                                rows="12"></textarea> */}
                            </div>
                            <div className="d-flex justify-content-center modal-footer">\
                                <button htmlType="submit" className="btn btn-black">{t("artist_profile.send")}</button>
                            </div>
                        </Form>
                    </div>
                </div>

            </Modal>
        </React.Fragment>
    )
}

export default ModalSendMessage;
