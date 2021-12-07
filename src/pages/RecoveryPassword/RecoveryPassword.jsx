import React from 'react';
import { Form, Input} from "antd";
import login from '../../assets/img/login.jpg';
import lock_icon from '../../assets/img/password.png';
import Statistics from '../../components/Statistics/Statistics';
import BasketFooter from '../../components/BasketFooter/BasketFooter';
import HeaderAuthPages from '../../components/HeaderAuthPages/HeaderAuthPages';
import { t } from 'i18next';


function RecoveryPassword() {


    const [form] = Form.useForm();
    const onFinish = (values) =>{
        setTimeout(() => {
            window.location.href = "/auth/login"
        }, 300);
    }



    return (
        <div className="page-fixed">
        <div className="container container-fixed ">
            <div className="default-header promotion-head">
                <div className="d-flex content-box-header-auth">
                    <HeaderAuthPages/>
                </div>
            </div>
            <div className="d-block login-content">

                <div className="row content-auth-page">
                    <div className="col-lg-5 col-lg-offset-1  col-md-offset-1 ">
                        <h2 className="login-title">{t("recovery-password-title")}</h2>


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
                                                    message: t("empty-error.password"),
                                                }
                                            ]}>
                                                <Input.Password
                                                    iconRender={visible => (visible ? t("hidden-password") :  t("show-password"))}
                                                    prefix={<img src={lock_icon}/>}
                                                    type="text"
                                                    className="input-public form-control border-0 px-2  d-flex"
                                                    placeholder={t("placeholder-password")} 
                                                />

                                        </Form.Item>


                                        <Form.Item
                                            className="w-100"
                                            name="confirm-password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: t("empty-error.repeat-password"),
                                                }
                                            ]}>
                                                <Input.Password
                                                iconRender={visible => (visible ? t("hidden-password") :  t("show-password"))}
                                                prefix={<img src={lock_icon}/>}
                                                type="password"
                                                className="input-public form-control border-0 px-2  d-flex"
                                                placeholder={t("placeholder-confirm-password")} 
                                            />

                                        </Form.Item>
                                            <div className="clearfix"></div>
                                            <button htmlType="submit" className="btn btn-signup">{t("text-btn-recovery-password")}</button>
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

    </div>
    )
}

export default RecoveryPassword
