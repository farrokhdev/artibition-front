import React from 'react';
import { Form, Input, Select, Checkbox } from 'antd';
import { t } from 'i18next';


function LoginPersonalInfo({ next, prev }) {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
        next()
    };

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
                        name="artwork-title"
                        rules={[
                            {
                                required: true,
                                message: 'required',
                            }
                        ]}>
                        <Input className="form-control input-public border-0 px-2  d-flex"
                            required placeholder=""
                            value="" />
                    </Form.Item>
                    <label class="lable-public">نام</label>
                </div>
                <div class="public-group en">
                    <Form.Item
                        className="w-100 "
                        name="artwork-title"
                        rules={[
                            {
                                required: true,
                                message: 'required',
                            }
                        ]}>
                        <Input className="form-control input-public border-0 px-2  d-flex"
                            required placeholder=""
                            value="" />
                    </Form.Item>
                    <label class="lable-public">First Name</label>
                </div>
                <div class="public-group">
                    <Form.Item
                        className="w-100 "
                        name="artwork-title"
                        rules={[
                            {
                                required: true,
                                message: 'required',
                            }
                        ]}>
                        <Input className="form-control input-public border-0 px-2  d-flex"
                            required placeholder=""
                            value="" />
                    </Form.Item>
                    <label class="lable-public">نام خانوادگی</label>
                </div>
                <div class="public-group en">
                    <Form.Item
                        className="w-100 "
                        name="artwork-title"
                        rules={[
                            {
                                required: true,
                                message: 'required',
                            }
                        ]}>
                        <Input className="form-control input-public border-0 px-2  d-flex"
                            required placeholder=""
                            value="" />
                    </Form.Item>
                    <label for="info-2" class="lable-public">Last Name</label>
                </div>
                <div class="public-group">
                    <Form.Item
                        className="w-100 "
                        name="artwork-title"
                        rules={[
                            {
                                required: true,
                                message: 'required',
                            }
                        ]}>
                        <Input className="form-control input-public border-0 px-2  d-flex"
                            required placeholder=""
                            value="" />
                    </Form.Item>

                    <label class="lable-public">نام کاربری</label>
                </div>
                <div class="public-group">
                    <Form.Item
                        className="w-100 "
                        name="artwork-title"
                        rules={[
                            {
                                required: true,
                                message: 'required',
                            }
                        ]}>
                        <Input className="form-control input-public border-0 px-2  d-flex"
                            required placeholder=""
                            value="" />
                    </Form.Item>

                    <label class="lable-public">شماره همراه</label>
                </div>
                <div class="public-group">
                    <Form.Item
                        className="w-100 "
                        name="artwork-title"
                        rules={[
                            {
                                required: true,
                                message: 'required',
                            }
                        ]}>
                        <Input className="form-control input-public border-0 px-2  d-flex"
                            required placeholder=""
                            value="" />
                    </Form.Item>
                    <label class="lable-public">آدرس ایمیل</label>
                </div>
                <div class="public-group">
                    <Form.Item
                        className="w-100 "
                        name="artwork-title"
                        rules={[
                            {
                                required: true,
                                message: 'required',
                            }
                        ]}>
                        <Input className="form-control input-public border-0 px-2  d-flex"
                            required placeholder=""
                            value="" />
                    </Form.Item>
                    <label class="lable-public">تاریخ تولد</label>
                </div>
                <label class="lable-checkbox">
                    <Form.Item name="remember" valuePropName="checked" noStyle >
                        <Checkbox type="checkbox" class="checkmark"></Checkbox>
                    </Form.Item>
                    <span>عضویت در خبرنامه</span>
                </label>

                <div className="adv-btn">
                    {/* <button type="button" className="btn-prev ">
                        <span>{t("content-panel-add-artwork.art_info.cencel")}</span>
                    </button> */}
                    <button htmlType="submit" className="btn-next pull-left">
                        {t("content-panel-add-artwork.art_info.next_step")}
                    </button>
                </div>
            </Form>
            {/* <button type="button" class="btn-black center-block">مرحله بعد</button> */}

        </div>
    )
}

export default LoginPersonalInfo;