import React , {useState} from 'react';
import { Form, Input} from "antd";
import google_icon from '../../assets/img/google.jpg';
import signup from '../../assets/img/login.jpg';
import {Link} from 'react-router-dom';
import ModalOtp from './ModalOtp';
import user_icon from '../../assets/img/username.png';
import lock_icon from '../../assets/img/password.png';
import Statistics from '../../components/Statistics/Statistics';
import BasketFooter from '../../components/BasketFooter/BasketFooter';
import HeaderAuthPages from '../../components/HeaderAuthPages/HeaderAuthPages';
import { t } from 'i18next';

export default function Signup() {

    const [visibleOtpModal , setVisibleOtpModal] = useState(false)

    const handleSignup = (e) => {
        e.preventDefault()
        setTimeout(() => {
            setVisibleOtpModal(true)
        }, 200);
    }


    const [form] = Form.useForm();
        const onFinish = (values) =>{

    }

    return (
        <div className="page-fixed">
            <div className="container container-fixed">
                <div className="default-header promotion-head">
                    <div className="d-flex content-box-header-auth">

                        <HeaderAuthPages/>
                   
                    </div>
                </div>
                <div className="d-block  login-content">

                        <div className="row content-auth-page">
                            <div className="col-lg-5 col-lg-offset-1  col-md-offset-1">
                                <h2 className="login-title">{t("signup_title")}</h2>


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
                                                    prefix={<img src={user_icon}/>}
                                                    type="text"
                                                    className="input-public form-control border-0 px-2  d-flex"
                                                    placeholder={t("placeholder-username")} 
                                                />

                                        </Form.Item>


                                        <Form.Item
                                            className="w-100"
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:  t("empty-error.password"),
                                                }
                                            ]}>
                                                <Input.Password
                                                iconRender={visible => (visible ? t("hidden-password") :  t("show-password"))}
                                                prefix={<img src={lock_icon}/>}
                                                type="password"
                                                className="input-public form-control border-0 px-2  d-flex"
                                                placeholder={t("placeholder-password")}
                                            />

                                        </Form.Item>

                                        <p className="login-term">{t("describtion-low.text-info-part1")}<Link className="mx-2" to="#">{t("describtion-low.text-link")}</Link>{t("describtion-low.text-info-part2")}</p>
                                        <div className="clearfix"></div>
                                        <button onClick={(e)=>handleSignup(e)} type="button" className="btn btn-signup">{t("signup_btn-text")}</button>
                                        
                                    </Form>



                
                                <button type="button" className="btn btn-google">
                                    <img src={google_icon} width="26" height="26" alt="google-icon" className=""/>
                                    <span>{t("google-login-text-button")}</span>
                                </button>
                                <p className="login-term1">{t("forget-signup-text.text")}<Link to="/auth/login">{t("forget-signup-text.link")}</Link></p>
                            </div>
                            <div className="col-lg-5  hidden-sm hidden-xs px-0">
                                <img src={signup} width="730" height="902" alt="" className="img-responsive"/>
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
