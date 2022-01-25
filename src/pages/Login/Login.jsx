import React from 'react';
import { Form, Input} from "antd";
import login from '../../assets/img/login.jpg';
import google_icon from '../../assets/img/google.jpg';
import {Link} from 'react-router-dom';
import user_icon from '../../assets/img/username.png';
import lock_icon from '../../assets/img/password.png';
import Statistics from '../../components/Statistics/Statistics';
import BasketFooter from '../../components/BasketFooter/BasketFooter';
import {useTranslation} from 'react-i18next';
import HeaderAuthPages from '../../components/HeaderAuthPages/HeaderAuthPages';
import APIService from '../../utils/api.services'
import {LOGIN, PROFILE} from '../../utils/index'
import {setToken} from '../../utils/utils'
import 'antd/dist/antd.css';
import { message } from 'antd';
import {connect} from 'react-redux';
import { setProfile } from '../../redux/reducers/auth/auth.actions';

function Login(props) {

    const {t} = useTranslation();

    const getProfile = () => {
        APIService.get(PROFILE, "")
            .then(res => {
                if (res.data) {
                    props.setProfile( {...props.state , profile : res.data.data,id: res.data.data.id} )
                } else {
                    message.error(res.response.data.message)
                }

            })
    }

    const [form] = Form.useForm();
    const onFinish = (values) =>{
        APIService.post(LOGIN, values)
            .then(res => {
                if (res.data) {
                    setToken(res.data.data)
                    getProfile()
                    message.success("به آرتیبیشن خوش آمدید")
                    setTimeout(() => {
                        window.location.href = "/panel/profile"
                    }, 500);
                } else {
                    console.log(res.response)
                    message.error(res.response.data.message)
                }

            })
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
                        <h2 className="login-title">{t("login_Title")}</h2>


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
                                                    placeholder= {t("placeholder-username")}
                                                />

                                        </Form.Item>


                                        <Form.Item
                                            className="w-100"
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: t("empty-error.password"),
                                                }
                                            ]}>
                                                <Input.Password
                                                    iconRender={visible => (visible ? t("hidden-password") :  t("show-password"))}
                                                    prefix={<img src={lock_icon}/>}
                                                    type="password"
                                                    className="d-flex input-public form-control border-0 px-2  "
                                                    placeholder={t("placeholder-password")} 
                                            />

                                        </Form.Item>
                                            <p className="login-term"><Link to="/auth/confirm-mobile">{t("forget-title")}</Link></p>
                                            <div className="clearfix"></div>
                                            <button htmlType="submit" className="btn btn-signup">{t("login-btn-text")}</button>
                                    </Form>



                        <button type="button" className="btn btn-google">
                            <img src={google_icon} width="26" height="26" alt="ثبت نام در آرتیبیشن" className=""/>
                            <span>{t("google-login-text-button")}</span>
                        </button>
                        <p className="login-term1">{t("is-registered-question")}<Link to="/auth/signup">{t("signup-text")}</Link></p>
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

const mapDispatchToProps = (dispatch) => {
    return {
        setProfile : (data) => dispatch(setProfile(data)),
    }
}

const mapStateToProps = (store) => {
    return {
        auth : store.authReducer,
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(Login)
