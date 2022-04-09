import React, { useState, useEffect } from 'react';
import { Button, message, Modal, Form, Input } from 'antd';
import edit_icon from '../../assets/img/edit_name.svg';
import close_icon from '../../assets/img/clear.svg';
import { useTranslation } from "react-i18next";
import apiServices from '../../utils/api.services';
import { ACCOUNT_PROFILE, VERIFY } from '../../utils';
import ver_code from '../../assets/img/ver_code.svg';


function ModalEditEmail(props) {
    const { t, i18n } = useTranslation();
    const [form] = Form.useForm();

    const { setvisibleEditEmail, visibleEditEmail, items, getItems } = props;
    const [newField, setNewField] = useState(null)
    const [showEmail, setShowEmail] = useState(true)
    const [email, setEmail] = useState("")


    useEffect(() => {
        if (items.email) {
            setEmail(items.email)
            form.setFieldsValue({ mobile: items.email })
        } else {
            setEmail(items.mobile)
        }

    }, [items])

    const handleClose = () => {
        setvisibleEditEmail(false)
    }


    const onFinish = (values) => {
        apiServices.patch(ACCOUNT_PROFILE, values)
            .then(res => {
                if (res.data) {
                    setNewField(values?.email)
                    setShowEmail(false)
                } else {
                    message.error({ content: "خطا در ثبت اطلاعات", style: { marginTop: '10vh' } })
                }
            })

    }


    const onSub = (values) => {
        apiServices.post(VERIFY, { ...values, username: email, tmp_user_name: newField })
            .then(res => {
                if (res.data) {
                    setShowEmail(true)
                    getItems();
                    setvisibleEditEmail(false)
                } else {
                    message.error({ content: "مجددا درخواست اعتبار سنجی دهید", style: { marginTop: '10vh' } })

                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <React.Fragment>

            <Modal
                centered
                className=""
                visible={visibleEditEmail}
                onOk={handleClose}
                onCancel={handleClose}
                width={600}
                footer={[]}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title mx-auto" id="exampleModalLabel">ویرایش ایمیل</h5>
                        <button>
                            <span onClick={handleClose} aria-hidden="true" aria-label="Close">
                                <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                            </span>
                        </button>
                    </div>
                    {showEmail ?
                        <Form
                            onFinish={onFinish}
                            form={form}
                        >
                            <div className="modal-body" dir={i18n.language === 'fa-IR' ? "rtl" : "ltr"}>
                                <Form.Item className="public-group flex-start" style={{ display: "grid" }}
                                    label={t("content-panel-profile.personal-info.email")}
                                    name="email">
                                    <Input className="form-control input-public " />
                                </Form.Item>
                            </div>
                            <div className="clearfix" />
                            <div className="modal-footer">
                                <button htmlType="submit" className="btn btn-black">ثبت تغییرات</button>
                            </div>

                        </Form>
                        :

                        <Form
                            onFinish={onSub}
                            form={form}
                            wrapperCol={{ span: 24 }}>
                            <h6 className="modal-title mx-auto" >
                                ما یک کد به
                                <h6 className="modal-title mx-auto px-2">{newField}</h6>
                                ارسال کردیم ، برای تأیید
                                ایمیل خود ، کد را در زیر وارد کنید.
                            </h6>
                            <Form.Item
                                className="w-100"
                                name="otp"
                                rules={[
                                    {
                                        required: true,
                                        message: t("empty-error.activation-code"),
                                    }
                                ]}>
                                <Input prefix={<img src={ver_code} />}
                                    type="number"
                                    className="input-public form-control border-0 px-2 my-5 d-flex"
                                    placeholder={t("placeholder-activation-code")} />
                            </Form.Item>




                            <div className="d-flex justify-content-center mt-5">
                                <button htmlType="submit" className="btn-confirm-phone">{t("text-btn-confirm-email")}</button>
                                <Button className="btn-confirm-phone" onClick={() => setShowEmail(true)}>ویرایش ایمیل</Button>
                            </div>
                        </Form>
                    }
                </div>

            </Modal>
        </React.Fragment>
    )
}

export default ModalEditEmail; 