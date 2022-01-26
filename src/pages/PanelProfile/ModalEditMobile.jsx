import React, { useState, useEffect } from 'react';
import { Button, message, Modal } from 'antd';
import edit_icon from '../../assets/img/edit_name.svg';
import close_icon from '../../assets/img/clear.svg';
import { useTranslation } from "react-i18next";
import { Form, Input } from 'antd';
import apiServices from '../../utils/api.services';
import { ACCOUNT_PROFILE, VERIFY } from '../../utils';
import ver_code from '../../assets/img/ver_code.svg';


function ModalEditMobile(props) {
    const { t, i18n } = useTranslation();
    const [form] = Form.useForm();

    const { setvisibleEditMobile, visibleEditMobile, items, getItems } = props;
    const [newField, setNewField] = useState(null)
    const [showNumber, setShowNumber] = useState(true)
    const [number, setNumber] = useState("")


    useEffect(() => {
        if (items.mobile) {
            setNumber(items.mobile)
            form.setFieldsValue({ mobile: items.mobile })
        } else {
            setNumber(items.email)
        }

    }, [items])

    const handleClose = () => {
        setvisibleEditMobile(false)
    }


    const onFinish = (values) => {
        apiServices.patch(ACCOUNT_PROFILE, values)
            .then(res => {
                if (res.data) {
                    setNewField(values?.mobile)
                    setShowNumber(false)
                    // setTimeout(() => {

                    // }, 500);
                } else {
                    message.error({ content: "خطا در ثبت اطلاعات", style: { marginTop: '10vh' } })
                }
            })

    }


    const onSub = (values) => {
        apiServices.post(VERIFY, { ...values, username: number, tmp_user_name: newField })
            .then(res => {
                if (res.data) {
                    setShowNumber(true)
                    getItems();
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
                visible={visibleEditMobile}
                onOk={handleClose}
                onCancel={handleClose}
                width={600}
                footer={[]}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title mx-auto" id="exampleModalLabel12">ویرایش شماره همراه</h5>
                        <button>
                            <span onClick={handleClose} aria-hidden="true" aria-label="Close">
                                <img className="btn-close-modal" src={close_icon} alt="close-icon" />
                            </span>
                        </button>
                    </div>
                    {showNumber ?
                        <Form
                            onFinish={onFinish}
                            form={form}
                        >
                            <div className="modal-body" dir={i18n.language === 'fa-IR' ? "rtl" : "ltr"}>
                                <Form.Item className="public-group flex-start" style={{ display: "grid" }}
                                    label={t("content-panel-profile.personal-info.phone")}
                                    name="mobile">
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
                                شماره تلفن خود ، کد را در زیر وارد کنید.
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
                                <button htmlType="submit" className="btn-confirm-phone">{t("text-btn-confirm-mobile-number")}</button>
                                <Button className="btn-confirm-phone" onClick={() => setShowNumber(true)}>ویرایش شماره همراه</Button>
                            </div>
                        </Form>



                        // <Form
                        //     onFinish={onSub}
                        //     form={form}
                        //     wrapperCol={{ span: 24 }}>
                        //     <div className="modal-body">
                        //         <div>
                        //             <div className="row">
                        //                 <div className="row ">

                        //                     <p className="darkgray">
                        //                         ما یک کد به
                        //                         <span className="px-2">{newField}</span>

                        //                         ارسال کردیم ، برای تأیید
                        //                         شماره تلفن خود ، کد را در زیر وارد کنید.
                        //                     </p>
                        //                     <div className="col-md-6">
                        //                         <div className="input-group ">
                        //                             <label className="default-lable">کد تایید</label>
                        //                             <Form.Item
                        //                                 className="w-100"
                        //                                 name="otp"
                        //                                 rules={[
                        //                                     {
                        //                                         required: true,
                        //                                         message: "تکمیل این فیلد ضروری است",
                        //                                     }
                        //                                 ]}>
                        //                                 <Input className="default-input"
                        //                                     type="text"
                        //                                     placeholder="کد تایید را اینجا وارد نمایید." />
                        //                             </Form.Item>
                        //                         </div>
                        //                     </div>
                        //                 </div>
                        //             </div>
                        //             <div className="row">
                        //                 <div className="col-md-6 button-group">
                        //                     <Button className="btn-default" htmlType="submit">
                        //                         تایید
                        //                     </Button>
                        //                     <Button className="btn-gray me-2" onClick={() => setShowNumber(true)}>
                        //                         ویرایش موبایل
                        //                     </Button>
                        //                 </div>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </Form>



                    }
                </div>

            </Modal>
        </React.Fragment>
    )
}

export default ModalEditMobile 