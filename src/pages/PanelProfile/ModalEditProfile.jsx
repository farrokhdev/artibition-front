import React from 'react'
import {Modal} from 'antd';
import close_icon from '../../assets/img/clear.svg';
import {useTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Form, Input} from 'antd';
import APIService from "../../utils/api.services";
import {PROFILE} from "../../utils";
import {setProfile , showEditProfileVisible} from "../../redux/reducers/auth/auth.actions";

// import { useDispatch , useSelector } from 'react-redux';

function ModalEditProfile(props) {
    const {t, i18n} = useTranslation();
    const [form] = Form.useForm();

    const handleClose = () => {
        props.showEditProfileVisible(false)
        // setVisibleModalEditProfile(false)
    }

    const updateProfile = (values) => {
        let lang = i18n.language === 'fa-IR' ? "fa" : "en"
        let data = {
            "translations": {
                [lang]: {
                    "first_name": values['first_name'],
                    "last_name": values['last_name'],
                }
            },
            "email": values['email'],
            "national_code": values['national_code'],
            "username":values['username']
        }

        APIService.patch(PROFILE, data)
            .then(res => {
                if (res.data) {
                    props.setProfile( {...props.state , profile : res.data.data} )
                    handleClose()
                } else {
                    console.log(res.response)
                }

            })
    }

    return (
        <React.Fragment>

            <Modal
                centered
                className=""
                visible={props.auth.showEditProfileVisible}
                onOk={handleClose}
                onCancel={handleClose}
                width={600}
                footer={[]}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">ویرایش اطلاعات</h5>
                        <button>
                        <span onClick={handleClose} aria-hidden="true" aria-label="Close">
                            <img className="btn-close-modal" src={close_icon} alt="close-icon"/>
                        </span>
                        </button>
                    </div>
                    <Form
                        onFinish={updateProfile}
                        form={form}
                        initialValues={{
                            first_name: i18n.language === 'fa-IR' ? props?.auth?.profile?.translations?.fa?.first_name : props?.auth?.profile?.translations?.en?.first_name,
                            last_name: i18n.language === 'fa-IR' ? props?.auth?.profile?.translations?.fa?.last_name : props?.auth?.profile?.translations?.en?.last_name,
                            national_code: props?.auth?.profile?.national_code,
                            // birth_date: props?.auth?.profile?.birth_date,
                            email: props?.auth?.profile?.email,
                            username: props?.auth?.profile?.username

                        }}

                    >
                        <div className="modal-body" dir={i18n.language === 'fa-IR' ? "rtl" : "ltr"}>

                            <div className="col-sm-6">
                                <Form.Item className="public-group"
                                           label={t("content-panel-profile.personal-info.last_name")}
                                           name={'last_name'}>
                                    <Input className="form-control input-public "/>
                                </Form.Item>
                            </div>

                            <div className="col-sm-6">
                                <Form.Item className="public-group"
                                           label={t("content-panel-profile.personal-info.first_name")}
                                           name={'first_name'}>
                                    <Input className="form-control input-public "/>
                                </Form.Item>
                            </div>

                            <div className="col-sm-6">
                                <Form.Item className="public-group"
                                           label={t("content-panel-profile.personal-info.national")}
                                           name={'national_code'}>
                                    <Input className="form-control input-public "/>
                                </Form.Item>
                            </div>

                            {/* <div className="col-sm-6">*/}
                            {/*    <Form.Item className="public-group" label={t("content-panel-profile.personal-info.date")} name={'birth_date'}>*/}
                            {/*        <Input className="form-control input-public "/>*/}
                            {/*    </Form.Item>*/}
                            {/*</div> */}

                            {/* <div className="col-sm-6">
                                <Form.Item className="public-group"
                                           label={t("content-panel-profile.personal-info.email")} name={'email'}>
                                    <Input className="form-control input-public "/>
                                </Form.Item>
                            </div> */}
                             <div className="col-sm-6">
                                <Form.Item className="public-group"
                                           label={t("content-panel-profile.personal-info.username")} name={'username'}>
                                    <Input className="form-control input-public "/>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="clearfix"/>
                        <div className="modal-footer">
                            <button htmlType="submit" className="btn btn-black">ثبت تغییرات</button>
                        </div>

                    </Form>
                </div>

            </Modal>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProfile : (data) => dispatch(setProfile(data)),
        showEditProfileVisible : (data) => dispatch(showEditProfileVisible(data))
    }
}

const mapStateToProps = (store) => {
    return {
        auth: store.authReducer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditProfile)