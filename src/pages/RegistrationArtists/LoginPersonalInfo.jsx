import React, { useEffect } from 'react';
import { Form, Input, Select, Checkbox, message } from 'antd';
import { t } from 'i18next';
import apiServices from '../../utils/api.services';
import { ACCOUNT_PROFILE } from '../../utils';
import DatePicker, { Calendar } from 'react-datepicker2';
import moment from 'moment-jalaali';
import edit_name from '../../assets/img/edit_name.svg';


function LoginPersonalInfo({ next, prev, userProfil }) {

    const [form] = Form.useForm();
  
    // Update artist information
    const onFinish = (values) => {
        let payload = {
            ...values,
            "translations": {
                "fa": {
                    "first_name": values?.first_name,
                    "last_name": values?.last_name,
                }, "en": {
                    "first_name": values?.first_name_en,
                    "last_name": values?.last_name_en,
                }
            },
            "birth_date": values?.birth_date.format("YYYY-MM-DD"),
            "mobile": values?.mobile,
            "email": values?.email,
            "join_magazine" : values?.join_magazine,

        }
        apiServices.patch(ACCOUNT_PROFILE, payload)
            .then(res => {
                if (res.data) {
                    setTimeout(() => {
                        next()
                    }, 500);
                } else {
                    message.error({ content: "خطا در ثبت اطلاعات", style: { marginTop: '10vh' } })
                }
            })
        console.log('Success:', values);
    };


    useEffect(() => {
        form.setFieldsValue({
            ...userProfil,
            first_name: userProfil?.translations?.fa?.first_name,
            first_name_en: userProfil?.translations?.en?.first_name,
            last_name: userProfil?.translations?.fa?.last_name,
            last_name_en: userProfil?.translations?.en?.last_name,
            username: userProfil?.username,
            mobile: userProfil?.mobile,
            email: userProfil?.email,
            birth_date: moment(userProfil?.birth_date, "YYYY-MM-DD"),
            join_magazine: userProfil?.join_magazine

        })
    }, [userProfil])


    return (
        <div class="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 personal-info">
            <div class="artist-info">
                <h2 class="adv-title">به آرتیبیشن خوش آمدید!</h2>
                <p>جهت استفاده از تمام اطلاعات آرتیبیشن لطفا اطلاعات خود را وارد نمایید</p>
            </div>
            <Form
                className=""
                form={form}
                onFinish={onFinish}>
                <div class="public-group">
                    <Form.Item
                        className="w-100 "
                        name="first_name"
                        rules={[
                            {
                                required: true,
                                message: "تکمیل این فیلد ضروری است",
                            }
                        ]}>
                        <Input className="form-control input-public border-0 px-4  d-flex"
                            required placeholder="نام"
                            value="" />
                    </Form.Item>
                  
                </div>
                <div class="public-group en">
                    <Form.Item
                        className="w-100 "
                        name="first_name_en"
                        rules={[
                            {
                                required: true,
                                message: "تکمیل این فیلد ضروری است",
                            }
                        ]}>
                        <Input className="form-control input-public border-0 px-4  d-flex"
                            required placeholder="First Name"
                            value="" />
                    </Form.Item>
                   
                </div>
                <div class="public-group">
                    <Form.Item
                        className="w-100 "
                        name="last_name"
                        rules={[
                            {
                                required: true,
                                message: "تکمیل این فیلد ضروری است",
                            }
                        ]}>
                        <Input className="form-control input-public border-0 px-4  d-flex"
                            required placeholder="نام خانوادگی"
                            value="" />
                    </Form.Item>
                   
                </div>
                <div class="public-group en">
                    <Form.Item
                        className="w-100 "
                        name="last_name_en"
                        rules={[
                            {
                                required: true,
                                message: "تکمیل این فیلد ضروری است",
                            }
                        ]}>
                        <Input className="form-control input-public border-0 px-4  d-flex"
                            required placeholder="Last Name"
                            value="" />
                    </Form.Item>
                  
                </div>
                <div class="public-group">
                    <Form.Item
                        className="w-100 "
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "تکمیل این فیلد ضروری است",
                            }
                        ]}>
                        <Input className="form-control input-public border-0 px-4  d-flex"
                            required placeholder="نام کاربری"
                            value="" />
                    </Form.Item>

                   
                </div>
                <div class="public-group">
                        <Form.Item
                            className="w-100 "
                            name="mobile"
                            rules={[
                                {
                                    required: true,
                                    message: "تکمیل این فیلد ضروری است",
                                }
                            ]}>
                            <Input className="form-control input-public border-0 px-4  d-flex"
                                required placeholder="شماره همراه"
                                value="" />
                        </Form.Item>
                </div>
                <div class="public-group">
                    <Form.Item
                        className="w-100 "
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "تکمیل این فیلد ضروری است",
                            }
                        ]}>
                        <Input className="form-control input-public border-0 px-4  d-flex"
                            required placeholder="آدرس ایمیل"
                            value="" />
                    </Form.Item>
                </div>
                <div class="public-group">
                    <Form.Item
                        className="w-100"
                        name="birth_date"
                        rules={[
                            {
                                required: true,
                                message: "تکمیل این فیلد ضروری است",
                            },
                        ]}>
                        <DatePicker
                            className="form-control input-public border-0 px-4  d-flex"
                            placeholder="تاریخ تولد"
                            timePicker={false}
                            isGregorian={false}
                            name="birth_date"
                            id="birth_date"

                        />
                    </Form.Item>
                </div>
                <label class="lable-checkbox">
                    <Form.Item name="join_magazine" valuePropName="checked" noStyle >
                        <Checkbox type="checkbox" class="checkmark"></Checkbox>
                    </Form.Item>
                    <span>عضویت در خبرنامه</span>
                </label>

                <div className="adv-btn">
                    <button htmlType="submit" className="btn-next pull-left">
                        {t("content-panel-add-artwork.art_info.next_step")}
                    </button>
                </div>
            </Form>

        </div>
    )
}

export default LoginPersonalInfo;