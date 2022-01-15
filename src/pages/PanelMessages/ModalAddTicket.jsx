import React from 'react';
import { Modal } from 'antd';
import edit_icon from '../../assets/img/edit_name.svg';
import close_icon from '../../assets/img/clear.svg';
import { Form, Input} from "antd";
import ver_code from '../../assets/img/ver_code.svg';
import { t } from 'i18next';

function ModalAddTicket(props) {
    
    
    const {visibleAddTicketModal , setVisibleAddTicketModal} = props
    const [form] = Form.useForm();
    
    const handleClose = ()=> {
        setVisibleAddTicketModal(false)
    }

    const onFinish = (values) =>{

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
                <div className="modal-content px-5">
                        <div className="d-flex justify-content-end">
                            <button>
                            <span  onClick={handleClose}  aria-hidden="true" aria-label="Close">
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
                                    <input className="form-control input-public" required
                                        placeholder="" value=""/>
                                    <label className="lable-public">{t("content-panel-messages.tabs.tickets.subject")}</label>
                                </div>
                                <div className=" public-group ">
                                <textarea className="d-flex text-dir form-control"
                                        placeholder={t("content-panel-messages.tabs.tickets.text-ticket")}
                                        rows="12"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center modal-footer">
                            <button type="button" className="btn btn-black">{t("content-panel-messages.tabs.tickets.send")}</button>
                        </div>
                    </div>
  
        </Modal>
    </React.Fragment>
    )   
}

export default ModalAddTicket

