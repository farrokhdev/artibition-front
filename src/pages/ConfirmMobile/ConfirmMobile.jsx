import React , {useState} from 'react';
import { Form, Input} from "antd";
import login from '../../assets/img/login.jpg';
import Statistics from '../../components/Statistics/Statistics';
import BasketFooter from '../../components/BasketFooter/BasketFooter';
import ModalOtp from './ModalOtp';
import HeaderAuthPages from '../../components/HeaderAuthPages/HeaderAuthPages';
import { t } from 'i18next';

function ConfirmMobile() {

    const [visibleOtpModal , setVisibleOtpModal] = useState(false)

    const [form] = Form.useForm();
    const onFinish = (values) =>{

        setTimeout(() => {
            setVisibleOtpModal(true)
        }, 300);

    }

    return (
        <div className="page-fixed">
        <div className="container container-fixed ">
            <div className="default-header promotion-head">
                <div className="d-flex">
                    <HeaderAuthPages/>
                </div>
            </div>
            <div className="d-block login-content">

                <div className="d-flex">
                    <div className="col-lg-5 col-lg-offset-1  col-md-offset-1 ">
                        <h2 className="login-title">{t("confirm-mobile-title")}</h2>


                                    <Form 
                                        className="" 
                                        form={form}
                                        onFinish={onFinish}
                                    >

                                        <Form.Item
                                            className="w-100"
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: t("empty-error.username"),
                                                }
                                            ]}>
                                                <Input
                                                iconRender={visible => (visible ? "مخفی کردن" : "نمایش ")}
                                                // prefix={<img src={lock_icon}/>}
                                                type="number"
                                                className="input-public form-control border-0 px-2  d-flex"
                                                placeholder={t("placeholder-username")}
                                            />

                                        </Form.Item>
                                            <div className="clearfix"></div>
                                            <button htmlType="submit" className="btn btn-signup">{t("text-btn-verification-submit")}</button>
                                    </Form>

                    </div>

                    <div className="col-lg-5   hidden-sm hidden-xs ">
                        <img src={login} width="730" height="902" alt="" className="img-responsive"/>
                    </div>
                </div>

                    <div className="clearfix"></div>
                    <Statistics/>

            </div>
        </div>
        <div className="clearfix"></div>

        <BasketFooter/>

        <ModalOtp 
            visibleOtpModal={visibleOtpModal}
            setVisibleOtpModal={setVisibleOtpModal}
        />

    </div>
    )
}

export default ConfirmMobile
