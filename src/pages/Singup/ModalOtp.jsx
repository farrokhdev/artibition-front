import React from 'react';
import {message, Modal} from 'antd';
import edit_icon from '../../assets/img/edit_name.svg';
import close_icon from '../../assets/img/clear.svg';
import { Form, Input} from "antd";
import ver_code from '../../assets/img/ver_code.svg';
import { t } from 'i18next';
import APIService from "../../utils/api.services";
import {REGISTER, VERIFY} from "../../utils";
import { useDispatch, useSelector } from 'react-redux';
import { setOpenModal } from '../../redux/reducers/auth/auth.actions';

function ModalOtp(props) {
    
    const dispatch = useDispatch();
    const { is_Open_Modal } = useSelector((state) => state.authReducer)
    const {visibleOtpModal , setVisibleOtpModal} = props
    const [form] = Form.useForm();
    
    const handleClose = ()=> {
        setVisibleOtpModal(false)
    }

    const onFinish = (values) =>{
        values['username'] = props.phone

        APIService.post(VERIFY, values)
            .then(res => {
                if (res.data) {
                    message.success("ثبت نام شما با موفقیت انجام شد.")
                    setTimeout(() => {
                        window.location.href = "/"
                        dispatch(setOpenModal(!is_Open_Modal))
                    }, 200);
                } else {
                    message.error(res.response.data.message)
                }

            })
    }

    return (
        <React.Fragment>

        <Modal
            centered
            className="modal-otp"
            visible={visibleOtpModal}
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
                        <div className="modal-body">
                            <div className="row">
                                <div className="col px-5">
                                    <div className="d-flex justify-content-center mb-5">
                                        <h1>{t("membership-title")}</h1>
                                    </div>
                                    <div className="d-flex justify-content-center pt-4 text-right">
                                        <h3>{t("membership-info-signup")}</h3>
                                    </div>

                                    <div className="d-flex justify-content-center mt-3 mb-5">
                                        
                                        <h3 className="pt-2">{props.phone}</h3>
                                        <img src={edit_icon} alt="edit-icon" />
                                    </div>

                                    <Form 
                                        className="" 
                                        form={form}
                                        onFinish={onFinish}
                                    >

                                        <Form.Item
                                            className="w-100"
                                            name="otp"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: t("empty-error.activation-code"),
                                                }
                                            ]}>
                                                <Input
                                                prefix={<img src={ver_code}/>}
                                                type="number"
                                                className="input-public form-control border-0 px-2 my-5 d-flex"
                                                placeholder={t("placeholder-activation-code")}
                                            />

                                        </Form.Item>
                                        <div className="d-flex justify-content-center mt-5">
                                            <button htmlType="submit" className="btn-confirm-phone">{t("text-btn-confirm-mobile-number")}</button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
  
        </Modal>
    </React.Fragment>
    )   
}

export default ModalOtp
