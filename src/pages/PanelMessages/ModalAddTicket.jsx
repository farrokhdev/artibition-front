import React from 'react';
import { Modal } from 'antd';
import edit_icon from '../../assets/img/edit_name.svg';
import close_icon from '../../assets/img/clear.svg';
import { Form, Input } from "antd";
import ver_code from '../../assets/img/ver_code.svg';
import i18next, { t } from 'i18next';
import apiServices from '../../utils/api.services';
import { TICKET } from '../../utils';

function ModalAddTicket(props) {


    const { visibleAddTicketModal, setVisibleAddTicketModal } = props
    const [form] = Form.useForm();
    const { TextArea } = Input;
    
    const handleClose = () => {
        setVisibleAddTicketModal(false)
    }

    const onFinish = (values) => {
        let payload = {
            
                "title": values?.title,
                "body": values?.body,
                "category_id": 1,
                "priority": "medium"
            
        }
        apiServices.post(TICKET,payload)
            .then(res=>{
                setTimeout(() => {
                    setVisibleAddTicketModal(false)
                }, 500);
            })
            .catch(err=>{
                console.log(err);
            })
    }

    return (
        <React.Fragment>

            <Modal
                centered
                className=""
                visible={visibleAddTicketModal}
                onOk={handleClose}
                onCancel={handleClose}
                width={700}
                footer={[]}
            // header={[]}
            >
                <Form
                    className=""
                    form={form}
                    onFinish={onFinish}
                >

                    <div className="modal-content px-5">
                        <div className="d-flex justify-content-end">
                            <button>
                                <span onClick={handleClose} aria-hidden="true" aria-label="Close">
                                    <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                                </span>
                            </button>
                        </div>

                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("content-panel-messages.tabs.tickets.new_ticket")}</h5>

                        </div>
                        <div className="modal-body">
                            <div className="new-ticket-body">
                                <div className="public-group">
                                    <Form.Item
                                        className="w-100"
                                        name="title"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'required',
                                            }
                                        ]}>

                                        <Input
                                            type="text"
                                            id="info-216"
                                            className="d-flex box-dir-reverse form-control input-public en-lang border-0 px-2"
                                            placeholder={t("content-panel-messages.tabs.tickets.subject")}
                                        />

                                    </Form.Item>
                                </div>
                                <div className=" public-group ">

                                    <Form.Item name="body">
                                        <TextArea required={i18next.language === 'fa_IR'} id="info-213" className="form-control "
                                           placeholder={t("content-panel-messages.tabs.tickets.text-ticket")}
                                            rows="12"></TextArea>
                                    </Form.Item>

                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center modal-footer">
                            <button htmlType="submit" className="btn btn-black">{t("content-panel-messages.tabs.tickets.send")}</button>
                        </div>
                    </div>
                </Form>



            </Modal>
        </React.Fragment>
    )
}

export default ModalAddTicket

