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

                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{t("content-panel-messages.tabs.tickets.new_ticket")}</h5>
                        
                        </div>
                        <div class="modal-body">
                            <div class="new-ticket-body">
                                <div class="public-group">
                                    <input class="form-control input-public" required
                                        placeholder="" value=""/>
                                    <label class="lable-public">{t("content-panel-messages.tabs.tickets.subject")}</label>
                                </div>
                                <div class=" public-group ">
                                <textarea class="d-flex text-dir form-control"
                                        placeholder={t("content-panel-messages.tabs.tickets.text-ticket")}
                                        rows="12"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center modal-footer">
                            <button type="button" class="btn btn-black">{t("content-panel-messages.tabs.tickets.send")}</button>
                        </div>
                    </div>
  
        </Modal>
    </React.Fragment>
    )   
}

export default ModalAddTicket

