import React from 'react';
import { Modal } from 'antd';
import edit_icon from '../../assets/img/edit_name.svg';
import close_icon from '../../assets/img/clear.svg';
import { Form, Input} from "antd";
import ver_code from '../../assets/img/ver_code.svg';
import { t } from 'i18next';
import { useEffect } from 'react';

function ModalSendMessage(props) {

    const {visibleShowSendMessage , setVisibleShowSendMessage} = props
    const [form] = Form.useForm();
    
    const handleClose = ()=> {
        setVisibleShowSendMessage(false)
    }

    const onFinish = (values) =>{

    }

    

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
                            <span  onClick={handleClose}  aria-hidden="true" aria-label="Close">
                                <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                            </span>
                            </button>
                        </div>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("artist_profile.send_message")}</h5>
                        </div>
                        <div className="modal-body px-0 ">
                            <div className="artist-msg">
                                <textarea className="form-control text-dir"
                                placeholder={t("artist_profile.placeholder_message")}
                                rows="12"></textarea>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center modal-footer">
                            <button type="button" className="btn btn-black">{t("artist_profile.send")}</button>
                        </div>
                </div>
  
        </Modal>
    </React.Fragment>
    )
}

export default ModalSendMessage;
